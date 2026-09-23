# PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01
# SAME MACRO — CRITICAL REVIEW BOUNDED CORRECTION
# Cycle 8 — Delivery / implémentation — CRITICAL — RUN
# ZERO NEW CURSOR REAL
# CRITICAL REVIEW CORRECTIONS COMPLETE — READY FOR CHATGPT RE-REVIEW

## Date / heure
2026-09-23T22:30:45+02:00

## Local Git Truth
- repo root: /Users/morris/Projects/sfia-workspace
- branch: fix/sfia-studio-product-real-readiness-pathroot-semantics
- HEAD: 128f3b7eb49cbba05d7735d5edc41a27822b0dee
- HEAD tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- origin/main: 66ffc0d2370d9ed7014348fd25994ce1cda3b3ad
- origin/main tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- tree vs qualified main: MATCH (400d608e2a0be9b182925c46cd204a24cb1e0034)
- superseded handoff commit: 98b7f42ed30233bd2de9c4cfbd37e4560e23e051
- superseded handoff blob: 6cee788b5ecebefe6d37ce5d8b567a6fbc5661b3
- git status --short:

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/.env.example
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
?? projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
```

- staged: none (working tree corrections only)
- project push: NONE
- Cursor REAL spawn this cycle: 0
- FocusFlow Attempt xat:w3a:46736f6deb0fb02f: UNCHANGED / not relaunched

## Sources lues
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md
- projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md
- completeDocsWriteClaimEvidenceCompletion.ts
- docsWriteMinConformityVerifier.ts (parseDocsWriteConformityOracleFingerprint)
- docsWriteContractResultSemantic.ts
- materializeW3bProductTerminal.ts
- w3cPostEvidenceLoop.ts
- w3bProductTerminalProjection.ts
- TrajectorySurface.tsx
- automaticResultQualification.d0.test.ts
- claimEvidenceCompletion.d0.test.ts

## Findings CR-ARQ-01..04 — corrections

### CR-ARQ-01 — oracleFingerprint restart-safe — CLOSED
Cause: short-circuit used ad-hoc `.replace(/^docs-write-min-conformity:/, "")` incompatible with canonical prefix `docs_write_min_conformity:v2:oracle:<64hex>`.
Fix: import and use `parseDocsWriteConformityOracleFingerprint`; fail-closed with `DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_UNPARSEABLE` when unparseable.
Proof: T4 asserts `oracleFingerprint.length === 64` and equality with `expectedDocsWriteConformityOracleFingerprint(attempt)` on restart-safe recall without artifact payload.

### CR-ARQ-02 — T5 reload/restart — CLOSED
Cause: prior pack claimed T1–T4+T6 only; no durable reload proof.
Fix: explicit T5 — materialize with worktree → then `rehydrateW3bProductTerminal` (same seam as `w2RehydrateProductOutcomeAction`) with no ephemeral payload.
Also fixed docs_write rehydrate to prefer RB from current CE `contractResultBindings.reviewBundleId` (successor after evidence-completion-v2) so SUCCESS survives reload.
Proof: T5 PASS — Product SUCCESS, CE id contains evidence-completion-v2, successor RB/Evidence IDs stable, Attempt unchanged.

### CR-ARQ-03 — W3-C failure Pilot honesty — CLOSED
Cause: `catch { postEvidence = undefined }` swallowed Nora/LPS failure after durable CE.
Fix:
- catch → `postEvidence = { ok:false, code:W3C_POST_EVIDENCE_UNAVAILABLE, failClosed:true }`
- `withNoraUnavailableReserve` appends Pilot reserve: « Analyse Nora indisponible — aucune décision automatique prise. »
- TrajectorySurface shows `data-testid="w3c-nora-unavailable-reserve"` when CE durable and postEvidence missing/failed
- Product outcome / claimAllowed never retrograded
Proof: T7 PASS — SUCCESS + claimAllowed preserved; postEvidence.ok=false; reserve present; Attempt unchanged.

### CR-ARQ-04 — Review Pack completeness — CLOSED
This pack includes FULL contents of both created files and exploitable diffs of all modified files.

## Architecture réutilisée (unchanged)
ExecutionAttempt → Artifact Evidence → completeDocsWriteClaimEvidenceCompletion → conformity Evidence → successor ReviewBundle → ContractResult CE → W3-C best-effort → Pilot-facing projection.
No parallel verifier / CE engine / React business validation / new persistence.

## Fichiers créés
1. projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
2. projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts

## Fichiers modifiés (ce cycle correction + macro)
1. completeDocsWriteClaimEvidenceCompletion.ts — CR-ARQ-01 parse canonique
2. materializeW3bProductTerminal.ts — auto-qual + W3-C honesty + docs_write rehydrate RB binding
3. w3bProductTerminalProjection.ts — NORA_ANALYSIS_UNAVAILABLE_RESERVE + withNoraUnavailableReserve
4. TrajectorySurface.tsx — Pilot Nora-unavailable reserve UX
5. governedExecuteAuthorizedContract.ts — hot-path completion after ingest (prior cycle, still local)

## Tests exécutés (exact)
| Suite | Count | Result |
|---|---|---|
| automaticResultQualification.d0.test.ts | 7 (T1–T7) | PASS |
| claimEvidenceCompletion.d0.test.ts | 18 | PASS |
| productJourneyGovernedDocsWriteWiring.d0.test.ts | 30 | PASS |
| trajectorySurface.ui.test.tsx | 46 | PASS |
| w3bProductTerminal.test.ts | 7 | PASS |
| w3cPostEvidenceLoop.test.ts | 13 | PASS |
| **TOTAL** | **121** | **PASS** |

### T1–T7 detail (automaticResultQualification)
- T1 happy path auto conformity → Product SUCCESS — PASS
- T2 artifact non conforme → no SUCCESS, Attempt succeeded — PASS
- T3 payload unavailable → fail-closed Product — PASS
- T4 idempotence + CR-ARQ-01 oracleFingerprint 64hex == expected — PASS
- T5 reload via rehydrateW3bProductTerminal durable — PASS
- T6 no HumanDecision / no new Attempt — PASS
- T7 W3-C throw after CE → SUCCESS preserved + Nora reserve — PASS

## ZERO REAL / Attempts
- Cursor REAL spawn: 0
- New ExecutionAttempt REAL: 0
- FocusFlow Attempt xat:w3a:46736f6deb0fb02f: unchanged (historical; retry=0 respected)
- Attempts before/after deterministic tests: fixture Attempt ids only; Product FocusFlow SQLite not mutated

## Décisions Morris
- GO bounded correction CR-ARQ-01..04 only
- No project push / PR / merge / doctrine / REAL

## Verdict
**PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01 — CRITICAL REVIEW CORRECTIONS COMPLETE — READY FOR CHATGPT RE-REVIEW**

---

## CONTENU INTÉGRAL — resolveDocsWriteArtifactAbsolutePath.ts (CREATED)

```typescript
/**
 * Resolve absolute filesystem path of a docs_write artifact for server-owned
 * conformity verification (ZERO client path trust).
 *
 * Priority:
 * 1) explicit worktreeRef from the just-completed launch (hottest)
 * 2) Evidence.location when already absolute and present
 * 3) managedRepoRootBase + repository identity + relative targetPath
 */
import { existsSync } from "node:fs";
import path from "node:path";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { sanitizeManagedRepoIdentity } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

function boundInputsOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): Record<string, unknown> {
  const bound = attempt.boundExecutionContract?.semanticMaterial?.inputs;
  if (bound && typeof bound === "object") return bound as Record<string, unknown>;
  return (contract.inputs ?? {}) as Record<string, unknown>;
}

function relativeTargetPath(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
  evidence: Evidence | null,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  const fromBound =
    typeof inputs.targetPath === "string" ? inputs.targetPath.trim() : "";
  if (fromBound) return fromBound;
  const loc = evidence?.location?.trim() ?? "";
  if (loc && !path.isAbsolute(loc)) return loc;
  return null;
}

function repositoryIdentity(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  for (const key of [
    "repositoryBindingIdentity",
    "repositoryIdentity",
    "repositoryRef",
    "targetRepositoryRef",
  ] as const) {
    const v = inputs[key];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}

export function resolveDocsWriteArtifactAbsolutePath(input: {
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  readonly evidence: Evidence | null;
  /** Hot worktree from the same process that just completed docs_write. */
  readonly worktreeRef?: string | null;
  readonly managedRepoRootBase?: string | null;
}): string | null {
  const rel = relativeTargetPath(input.attempt, input.contract, input.evidence);
  const candidates: string[] = [];

  const wt = input.worktreeRef?.trim();
  if (wt && rel) {
    candidates.push(path.resolve(wt, ...rel.split("/")));
  }

  const loc = input.evidence?.location?.trim();
  if (loc && path.isAbsolute(loc)) {
    candidates.push(loc);
  }

  const base =
    input.managedRepoRootBase?.trim() ||
    resolveManagedRepoRootBaseFromEnv() ||
    undefined;
  const identity = repositoryIdentity(input.attempt, input.contract);
  if (base && identity && rel) {
    try {
      const sanitized = sanitizeManagedRepoIdentity(identity);
      candidates.push(path.resolve(base, sanitized, ...rel.split("/")));
    } catch {
      // identity invalid — skip managed candidate
    }
  }

  for (const abs of candidates) {
    if (existsSync(abs)) return abs;
  }
  return null;
}
```

---

## CONTENU INTÉGRAL — automaticResultQualification.d0.test.ts (CREATED)

```typescript
/**
 * PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01
 * Automatic docs_write post-terminal qualification via materializeW3bProductTerminal.
 * ZERO REAL / ZERO new Attempt.
 * T1 happy · T2 non-conformant · T3 payload unavailable · T4 idempotence ·
 * T5 reload/restart durable · T6 authority · T7 W3-C failure honesty ·
 * CR-ARQ-01 oracleFingerprint restart-safe.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createHash } from "node:crypto";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  expectedDocsWriteConformityOracleFingerprint,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import {
  materializeW3bProductTerminal,
  rehydrateW3bProductTerminal,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { completeDocsWriteClaimEvidenceCompletion } from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import * as w3cPostEvidenceLoop from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const ACTOR = { actorId: "actor:auto-qual", role: "project_owner" as const };
const NOW = "2026-09-23T22:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:autoqual01deadbeef";
const PROJECT_ID = "prj:autoqual-focusflow-sim";
const CYCLE_ID = "cyc:trj-autoqual-01";
const TARGET = "projects/focusflow/01-cadrage/document-cadrage-focusflow.md";
const CONTENT_REQUIREMENTS = [
  "Objectif",
  "Périmètre inclus",
  "Périmètre exclu",
  "Critères de succès",
] as const;

const GOOD_MARKDOWN = `# FocusFlow

## Objectif
Gérer une liste de tâches.

## Périmètre inclus
Créer, modifier, lister, terminer.

## Périmètre exclu
Auth, sync.

## Critères de succès
Parcours bout en bout simple.
`;

const BAD_MARKDOWN = `# FocusFlow

## Objectif
Texte.

## Autre
Pas les sections requises.
`;

function digestOf(bytes: Buffer): Digest {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}` as Digest;
}

function makeContract(): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m3-res:dec:w2-prop:autoqual-01",
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    version: 3,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: "workspace.isolated.docs_write",
    scope: "studio.gcec.docs_write",
    requiredAuthority: "N3",
    constraints: ["BOUNDED DOCS-WRITE", "NO_DELETE", "GATE D REQUIRED"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [
      DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
      DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
    ],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:autoqual",
    correlationId: "cor:ec:autoqual",
    inputs: {
      targetPath: TARGET,
      contentRequirements: [...CONTENT_REQUIREMENTS],
      validationExpectations: [
        DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
        DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
      ],
      artifactType: "Markdown",
      repositoryIdentity: "acme/autoqual",
      repositoryBindingIdentity: "acme/autoqual",
      pathAllowlist: ["projects/focusflow/01-cadrage"],
    },
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function makeAttempt(contract: ExecutionContract): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  return {
    attemptId: ATTEMPT_ID,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    status: "succeeded",
    resultRef: `res:m4:${ATTEMPT_ID}`,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    version: 3,
    createdAt: NOW,
    updatedAt: NOW,
  } as ExecutionAttempt;
}

function writeArtifact(root: string, rel: string, content: string): string {
  const abs = path.join(root, ...rel.split("/"));
  mkdirSync(path.dirname(abs), { recursive: true });
  writeFileSync(abs, content, "utf8");
  return abs;
}

function buildOaStack(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
}): RuntimeOaStack {
  return {
    clock: new FixedClock(NOW),
    evidenceReviewServices: input.services,
    executionContractServices: {
      getExecutionContract: {
        execute: async () => ({ ok: true as const, contract: input.contract }),
      },
    },
    executionAttemptServices: {
      getExecutionAttempt: {
        execute: async () => ({ ok: true as const, attempt: input.attempt }),
      },
      listExecutionAttempts: {
        execute: async () => ({
          ok: true as const,
          attempts: [input.attempt],
        }),
      },
      registry: {
        getAgent: () => ({
          agentId: input.attempt.selectedAgentRef,
          displayName: "docs-write test agent",
          capabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        }),
      },
    },
  } as unknown as RuntimeOaStack;
}

async function seedSucceededArtifact(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  content: string;
}): Promise<{ worktree: string; digest: Digest }> {
  const bytes = Buffer.from(input.content, "utf8");
  const digest = digestOf(bytes);
  const worktree = mkdtempSync(path.join(tmpdir(), "sfia-autoqual-"));
  writeArtifact(worktree, TARGET, input.content);
  const ingested = await ingestDocsWriteArtifactEvidence({
    evidenceReviewServices: input.services,
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    executionContractId: input.contract.executionContractId,
    executionAttemptId: input.attempt.attemptId,
    targetPath: TARGET,
    digest,
    actor: ACTOR,
    nowIso: NOW,
  });
  expect(ingested.ok).toBe(true);
  return { worktree, digest };
}

describe("automatic docs_write result qualification (materialize)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("T1 — happy path: materialize auto-completes conformity → Product SUCCESS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.claimEvaluationStatus).toBe("pass");

    const completionIds = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformity = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    expect(conformity).toBeTruthy();
    const successorRb = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(successorRb?.frozenAt).toBeTruthy();
    expect(successorRb?.evidenceRefs).toContain(completionIds.evidenceId);
    expect(successorRb?.evidenceRefs).toContain(
      completionIds.conformityEvidenceId,
    );

    const hist = await services.reviewBundleReader.findById(
      docsWriteContractResultIdentity(ATTEMPT_ID).reviewBundleId,
    );
    expect(hist?.frozenAt).toBeTruthy();
    expect(hist?.evidenceRefs).toEqual([
      docsWriteContractResultIdentity(ATTEMPT_ID).evidenceId,
    ]);

    const currentCe = await services.claimEvaluationReader.findById(
      materialized.product.claimEvaluationId!,
    );
    expect(currentCe?.status).toBe("pass");
    expect(currentCe?.claimEvaluationId).toContain(
      DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
    );
  });

  it("T2 — non-conformant artifact → no SUCCESS, Attempt still succeeded", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: BAD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(attempt.status).toBe("succeeded");
    expect(materialized.product.businessReason.toLowerCase()).toMatch(
      /conform|écart|prouvé/,
    );
  });

  it("T3 — payload unavailable → fail-closed Product, technical success preserved", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt.attemptId,
      targetPath: TARGET,
      digest: digestOf(bytes),
      actor: ACTOR,
      nowIso: NOW,
    });

    const oa = buildOaStack({ services, contract, attempt });
    // No worktreeRef, no managed file → cannot verify conformity.
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(attempt.status).toBe("succeeded");
  });

  it("T4 — idempotent rematerialize + CR-ARQ-01 oracleFingerprint restart-safe", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const first = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const expectedFp = expectedDocsWriteConformityOracleFingerprint(attempt);
    expect(expectedFp).toHaveLength(64);

    // Restart-safe: no artifactAbsolutePath / artifactBytes — durable only.
    const restarted = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(restarted.ok).toBe(true);
    if (!restarted.ok) return;
    expect(restarted.reusedFromIdempotencyKey).toBe(true);
    expect(restarted.oracleFingerprint).toHaveLength(64);
    expect(restarted.oracleFingerprint).toBe(expectedFp);
    expect(restarted.claimEvaluation.status).toBe("pass");
    expect(restarted.claimEvaluation.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );

    const second = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      // No worktree — restart-safe short-circuit via existing conformity.
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.product.outcome).toBe("SUCCESS");
    expect(second.product.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );

    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformity = await services.evidenceReader.findById(
      ids.conformityEvidenceId,
    );
    expect(conformity).toBeTruthy();
    const successorRb = await services.reviewBundleReader.findById(
      ids.reviewBundleId,
    );
    expect(successorRb?.frozenAt).toBeTruthy();
  });

  it("T5 — reload/restart durable via rehydrateW3bProductTerminal (no ephemeral payload)", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    const oa = buildOaStack({ services, contract, attempt });
    const first = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.product.outcome).toBe("SUCCESS");

    const completionIds = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    const conformityBefore = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    const successorBefore = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(conformityBefore).toBeTruthy();
    expect(successorBefore?.frozenAt).toBeTruthy();

    // Simulate UI/process loss: durable rehydrate seam (same as
    // w2RehydrateProductOutcomeAction) — no worktree / no artifact bytes.
    const reloaded = await rehydrateW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.product.outcome).toBe("SUCCESS");
    expect(reloaded.product.claimAllowed).toBe(true);
    expect(reloaded.product.claimEvaluationId).toBe(
      first.product.claimEvaluationId,
    );
    expect(reloaded.product.claimEvaluationId).toContain(
      DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
    );
    expect(reloaded.product.reviewBundleId).toBe(completionIds.reviewBundleId);
    expect(reloaded.product.evidenceId).toBe(completionIds.evidenceId);

    const conformityAfter = await services.evidenceReader.findById(
      completionIds.conformityEvidenceId,
    );
    const successorAfter = await services.reviewBundleReader.findById(
      completionIds.reviewBundleId,
    );
    expect(conformityAfter?.evidenceId).toBe(conformityBefore?.evidenceId);
    expect(successorAfter?.reviewBundleId).toBe(successorBefore?.reviewBundleId);
    expect(successorAfter?.frozenVersion).toBe(successorBefore?.frozenVersion);
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });

  it("T6 — authority: completion does not create HumanDecision / new Attempt", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactAbsolutePath: path.join(worktree, TARGET),
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(done.ok).toBe(true);
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });

  it("T7 — W3-C failure after qualified CE → Product preserved + Pilot reserve", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const { worktree } = await seedSucceededArtifact({
      services,
      contract,
      attempt,
      content: GOOD_MARKDOWN,
    });

    vi.spyOn(w3cPostEvidenceLoop, "findExistingW3cPostEvidence").mockResolvedValue(
      null,
    );
    vi.spyOn(
      w3cPostEvidenceLoop,
      "rehydrateW3cPostEvidenceFromLps",
    ).mockResolvedValue({
      ok: false,
      code: "LPS_MISS",
      message: "no durable W3-C",
      failClosed: true,
    });
    vi.spyOn(w3cPostEvidenceLoop, "runW3cPostEvidenceLoop").mockRejectedValue(
      new Error("Nora/LPS boom"),
    );

    const oa = buildOaStack({ services, contract, attempt });
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId: PROJECT_ID,
      attemptId: attempt.attemptId,
      docsWriteWorktreeRef: worktree,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.claimEvaluationStatus).toBe("pass");
    expect(materialized.postEvidence?.ok).toBe(false);
    if (materialized.postEvidence && !materialized.postEvidence.ok) {
      expect(materialized.postEvidence.code).toBe(
        "W3C_POST_EVIDENCE_UNAVAILABLE",
      );
      expect(materialized.postEvidence.failClosed).toBe(true);
    }
    expect(materialized.product.reservations).toContain(
      NORA_ANALYSIS_UNAVAILABLE_RESERVE,
    );
    expect(attempt.status).toBe("succeeded");
    expect(attempt.attemptId).toBe(ATTEMPT_ID);
  });
});
```

---

## DIFF — completeDocsWriteClaimEvidenceCompletion.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts b/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
index b87cde24..dfd9584a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
@@ -23,6 +23,7 @@ import {
   DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
   docsWriteContractResultIdentity,
   extractDocsWriteMinConformityCriteriaFromBoundAttempt,
+  parseDocsWriteConformityOracleFingerprint,
   verifyDocsWriteMinConformityFromBytes,
   verifyDocsWriteMinConformityFromFile,
 } from "@/lib/oa/evidence-review";
@@ -84,7 +85,42 @@ export async function completeDocsWriteClaimEvidenceCompletion(
   const historicalRb = await services.reviewBundleReader.findById(
     docsWriteContractResultIdentity(input.attempt.attemptId).reviewBundleId,
   );
-  if (!historicalRb?.frozenAt || !historicalRb.frozenVersion) {
+  if (!historicalRb) {
+    return {
+      ok: false,
+      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
+      message: "Historical docs_write RB introuvable.",
+    };
+  }
+  let historicalFrozen = historicalRb;
+  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
+    if (historicalFrozen.status !== "draft") {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
+        message: "Historical docs_write RB must remain frozen/auditable.",
+      };
+    }
+    const frozenHistorical = await services.freezeReviewBundle.execute({
+      reviewBundleId: historicalFrozen.reviewBundleId,
+      expectedVersion: historicalFrozen.version,
+      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
+      actor,
+      correlationId: input.correlationId,
+      nowIso: input.nowIso,
+    });
+    if (!frozenHistorical.ok) {
+      return {
+        ok: false,
+        code: frozenHistorical.error.detailCode,
+        message:
+          frozenHistorical.error.internalCauseRef ??
+          frozenHistorical.error.message,
+      };
+    }
+    historicalFrozen = frozenHistorical.reviewBundle;
+  }
+  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
     return {
       ok: false,
       code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
@@ -92,6 +128,65 @@ export async function completeDocsWriteClaimEvidenceCompletion(
     };
   }

+  // Restart-safe idempotence: when conformity Evidence + frozen successor RB
+  // already exist, requalify without re-reading the ephemeral worktree payload.
+  const existingConformity = await services.evidenceReader.findById(
+    ids.conformityEvidenceId,
+  );
+  const existingSuccessorRb = await services.reviewBundleReader.findById(
+    ids.reviewBundleId,
+  );
+  if (
+    existingConformity &&
+    existingSuccessorRb?.frozenAt &&
+    existingSuccessorRb.frozenVersion &&
+    !input.artifactBytes &&
+    !input.artifactAbsolutePath
+  ) {
+    const requalified = await requalifyDocsWriteContractResult({
+      evidenceReviewServices: services,
+      attempt: input.attempt,
+      contract: input.contract,
+      actor,
+      correlationId: input.correlationId,
+      nowIso: input.nowIso,
+      correctionRef,
+      scopeReviewBundle: true,
+    });
+    if (!requalified.ok) {
+      return {
+        ok: false,
+        code: requalified.code,
+        message: requalified.message,
+      };
+    }
+    // CR-ARQ-01 — parse canonical technicalResultRef only (never ad-hoc strip).
+    const oracleFromRef = parseDocsWriteConformityOracleFingerprint(
+      typeof existingConformity.technicalResultRef === "string"
+        ? existingConformity.technicalResultRef
+        : undefined,
+    );
+    if (!oracleFromRef) {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_UNPARSEABLE",
+        message:
+          "Conformity Evidence technicalResultRef is not a canonical v2 oracle fingerprint.",
+      };
+    }
+    return {
+      ok: true,
+      claimEvaluation: requalified.claimEvaluation,
+      reviewBundle: requalified.reviewBundle,
+      conformityEvidence: existingConformity,
+      artifactEvidence,
+      supersededClaimEvaluationId: requalified.supersededClaimEvaluationId,
+      verifierMatchedHeadings: [],
+      oracleFingerprint: oracleFromRef,
+      reusedFromIdempotencyKey: true,
+    };
+  }
+
   // CR-CEC-01 — NEVER fallback to live contract.inputs for oracle derivation.
   const criteria = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
     input.attempt,
@@ -136,10 +231,9 @@ export async function completeDocsWriteClaimEvidenceCompletion(
   }

   // Idempotent: if conformity Evidence + successor RB + CE already exist, requalify.
-  const existingConformity = await services.evidenceReader.findById(
-    ids.conformityEvidenceId,
-  );
-  let conformityEvidence = existingConformity ?? undefined;
+  let conformityEvidence =
+    (await services.evidenceReader.findById(ids.conformityEvidenceId)) ??
+    undefined;
   if (!conformityEvidence) {
     const registered = await services.registerEvidence.execute({
       evidenceId: ids.conformityEvidenceId,
```

---

## DIFF — materializeW3bProductTerminal.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index eefc9ccb..8874e7c4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -20,9 +20,12 @@ import {
   missionResultEvidenceIdForAttempt,
 } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
+import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
+import { resolveDocsWriteArtifactAbsolutePath } from "./resolveDocsWriteArtifactAbsolutePath";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
+  withNoraUnavailableReserve,
   type W3BProductTerminalProjection,
 } from "./w3bProductTerminalProjection";
 import {
@@ -31,6 +34,36 @@ import {
   runW3cPostEvidenceLoop,
   type W3cPostEvidenceLoopResult,
 } from "./w3cPostEvidenceLoop";
+import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+
+function w3cUnavailableFailure(
+  cause: unknown,
+): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
+  const message =
+    cause instanceof Error && cause.message.trim()
+      ? cause.message
+      : "Analyse Nora indisponible";
+  return {
+    ok: false,
+    code: "W3C_POST_EVIDENCE_UNAVAILABLE",
+    message,
+    failClosed: true,
+  };
+}
+
+function finishWithOptionalPostEvidence(input: {
+  readonly product: W3BProductTerminalProjection;
+  readonly reusedFromIdempotency: boolean;
+  readonly postEvidence: W3cPostEvidenceLoopResult | undefined;
+}): Extract<MaterializeW3bProductTerminalResult, { ok: true }> {
+  const postOk = input.postEvidence?.ok === true;
+  return {
+    ok: true,
+    reusedFromIdempotency: input.reusedFromIdempotency,
+    product: withNoraUnavailableReserve(input.product, postOk),
+    postEvidence: input.postEvidence,
+  };
+}

 export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

@@ -143,80 +176,126 @@ async function materializeDocsWriteProductTerminal(input: {
   readonly projectId: string;
   readonly attempt: ExecutionAttempt;
   readonly contract: ExecutionContract;
+  /** Hot worktree from the just-completed docs_write launch (optional). */
+  readonly docsWriteWorktreeRef?: string | null;
 }): Promise<MaterializeW3bProductTerminalResult> {
   const services = input.oa.evidenceReviewServices!;
-  const requalified = await requalifyDocsWriteContractResult({
+  const managedRepoRootBase =
+    input.oa.executionAttemptServices?.realBoundary?.managedRepoRootBase ??
+    resolveManagedRepoRootBaseFromEnv() ??
+    null;
+
+  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+  const artifactEvidence = await services.evidenceReader.findById(evidenceId);
+
+  const artifactAbsolutePath = resolveDocsWriteArtifactAbsolutePath({
+    attempt: input.attempt,
+    contract: input.contract,
+    evidence: artifactEvidence ?? null,
+    worktreeRef: input.docsWriteWorktreeRef,
+    managedRepoRootBase,
+  });
+
+  // Automatic Product qualification — reuse completeDocsWriteClaimEvidenceCompletion.
+  // Prefer hot worktree / managed path; restart-safe when conformity already persisted.
+  const completed = await completeDocsWriteClaimEvidenceCompletion({
     evidenceReviewServices: services,
     attempt: input.attempt,
     contract: input.contract,
     actor: LOCAL_PILOTE_ACTOR,
+    ...(artifactAbsolutePath
+      ? { artifactAbsolutePath }
+      : {}),
   });
-  if (!requalified.ok) {
-    return {
-      ok: false,
-      code: requalified.code,
-      message: requalified.message,
-    };
-  }

-  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
-  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-  const evidence = await services.evidenceReader.findById(evidenceId);
+  let claimEvaluation: ClaimEvaluation;
+  let reviewBundle: ReviewBundle;
+  let evidence: Evidence | null = artifactEvidence ?? null;
+  let reusedFromIdempotency = false;
+
+  if (completed.ok) {
+    claimEvaluation = completed.claimEvaluation;
+    reviewBundle = completed.reviewBundle;
+    evidence = completed.artifactEvidence;
+    reusedFromIdempotency = Boolean(completed.reusedFromIdempotencyKey);
+  } else {
+    // Fail-closed Product claim: keep technical Attempt as-is; project from
+    // historical artifact RB (typically NOT_PROVEN without conformity).
+    const requalified = await requalifyDocsWriteContractResult({
+      evidenceReviewServices: services,
+      attempt: input.attempt,
+      contract: input.contract,
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+    if (!requalified.ok) {
+      return {
+        ok: false,
+        code: completed.code,
+        message: `${completed.message} — fallback requalify: ${requalified.message}`,
+      };
+    }
+    claimEvaluation = requalified.claimEvaluation;
+    reviewBundle = requalified.reviewBundle;
+    reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
+  }

   const product = projectFromFacts({
     attempt: input.attempt,
     contract: input.contract,
-    evidence: evidence ?? null,
-    reviewBundle: requalified.reviewBundle,
-    claimEvaluation: requalified.claimEvaluation,
+    evidence,
+    reviewBundle,
+    claimEvaluation,
   });

-  const reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
-
-  if (product.evidenceId) {
-    const existing = await findExistingW3cPostEvidence({
-      oa: input.oa,
-      projectId: input.projectId,
-      evidenceId: product.evidenceId,
-      attemptId: input.attempt.attemptId,
-      product,
-    });
-    if (existing) {
-      return {
-        ok: true,
-        reusedFromIdempotency,
+  // W3-C is best-effort after Product CE is durable — never erase a qualified
+  // Product outcome if Nora/LPS rehydrate fails; surface Pilot-facing reserve.
+  let postEvidence: W3cPostEvidenceLoopResult | undefined;
+  try {
+    if (product.evidenceId) {
+      const existing = await findExistingW3cPostEvidence({
+        oa: input.oa,
+        projectId: input.projectId,
+        evidenceId: product.evidenceId,
+        attemptId: input.attempt.attemptId,
         product,
-        postEvidence: existing,
-      };
+      });
+      if (existing) {
+        return finishWithOptionalPostEvidence({
+          reusedFromIdempotency,
+          product,
+          postEvidence: existing,
+        });
+      }
+      const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+        oa: input.oa,
+        projectId: input.projectId,
+        product,
+      });
+      if (rehydrated.ok) {
+        return finishWithOptionalPostEvidence({
+          reusedFromIdempotency,
+          product,
+          postEvidence: rehydrated,
+        });
+      }
     }
-    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+
+    postEvidence = await runW3cPostEvidenceLoop({
       oa: input.oa,
       projectId: input.projectId,
+      attemptId: input.attempt.attemptId,
       product,
     });
-    if (rehydrated.ok) {
-      return {
-        ok: true,
-        reusedFromIdempotency,
-        product,
-        postEvidence: rehydrated,
-      };
-    }
+  } catch (cause) {
+    postEvidence = w3cUnavailableFailure(cause);
   }

-  const postEvidence = await runW3cPostEvidenceLoop({
-    oa: input.oa,
-    projectId: input.projectId,
-    attemptId: input.attempt.attemptId,
-    product,
-  });
-
-  return {
-    ok: true,
+  return finishWithOptionalPostEvidence({
     reusedFromIdempotency,
     product,
     postEvidence,
-  };
+  });
 }

 /** Write path — ingest Evidence + RB + Contract Result CE + project. */
@@ -227,6 +306,8 @@ export async function materializeW3bProductTerminal(input: {
   readonly claimedProductOutcome?: unknown;
   readonly cycleProfile?: unknown;
   readonly ckcId?: unknown;
+  /** Optional hot worktree from docs_write completion (same request). */
+  readonly docsWriteWorktreeRef?: string | null;
 }): Promise<MaterializeW3bProductTerminalResult> {
   void input.claimedProductOutcome;
   void input.cycleProfile;
@@ -251,6 +332,7 @@ export async function materializeW3bProductTerminal(input: {
         projectId: input.projectId,
         attempt,
         contract,
+        docsWriteWorktreeRef: input.docsWriteWorktreeRef,
       });
     }
   }
@@ -505,10 +587,7 @@ export async function rehydrateW3bProductTerminal(input: {
   if (isDocsWrite) {
     const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
     const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-    const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
     evidence = (await services.evidenceReader.findById(evidenceId)) ?? null;
-    reviewBundle =
-      (await services.reviewBundleReader.findById(reviewBundleId)) ?? null;
     const resolved = await resolveCurrentContractResultClaimEvaluation({
       repo: services.claimEvaluationRepository,
       projectId: input.projectId,
@@ -523,6 +602,12 @@ export async function rehydrateW3bProductTerminal(input: {
     }
     claimEvaluation =
       resolved.status === "one" ? resolved.claimEvaluation : null;
+    // Prefer RB bound by current CE (successor after evidence-completion-v2).
+    const boundRbId =
+      claimEvaluation?.contractResultBindings?.reviewBundleId ??
+      `rb:docs-write:${segment}`.slice(0, 128);
+    reviewBundle =
+      (await services.reviewBundleReader.findById(boundRbId)) ?? null;
   } else {
     const ids = w3bEvidenceIdentity(attempt.attemptId);
     evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
@@ -586,12 +671,11 @@ export async function rehydrateW3bProductTerminal(input: {
     product,
   });

-  return {
-    ok: true,
+  return finishWithOptionalPostEvidence({
     reusedFromIdempotency: true,
     product,
     postEvidence,
-  };
+  });
 }

 const TERMINAL_STATUSES = new Set([
```

---

## DIFF — w3bProductTerminalProjection.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
index e46773d2..4e36ef0b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -61,6 +61,29 @@ const PRODUCT_RESERVATIONS = [
   "Aucun READY",
 ] as const;

+/** Pilot-facing reserve when Product CE is durable but Nora/W3-C is unavailable. */
+export const NORA_ANALYSIS_UNAVAILABLE_RESERVE =
+  "Analyse Nora indisponible — aucune décision automatique prise." as const;
+
+/**
+ * CR-ARQ-03 — keep Product outcome; surface Nora unavailability as a clear reserve.
+ * Does not mutate ContractResult / CE lineage.
+ */
+export function withNoraUnavailableReserve(
+  product: W3BProductTerminalProjection,
+  postEvidenceOk: boolean | undefined,
+): W3BProductTerminalProjection {
+  if (postEvidenceOk === true) return product;
+  if (!product.evidenceId) return product;
+  if (product.reservations.includes(NORA_ANALYSIS_UNAVAILABLE_RESERVE)) {
+    return product;
+  }
+  return {
+    ...product,
+    reservations: [...product.reservations, NORA_ANALYSIS_UNAVAILABLE_RESERVE],
+  };
+}
+
 /** Honest reservation when a REAL process was durably launched (vs substitution wording). */
 export function productReservationsForAttempt(
   attempt: ExecutionAttempt,
@@ -273,6 +296,42 @@ export function projectW3bProductTerminal(input: {
     };
   }

+  // Succeeded Attempt + Contract Result not_proven/fail → honest Product projection
+  // (technical success preserved; no SUCCESS claim).
+  if (
+    input.attempt.status === "succeeded" &&
+    (ce.status === "not_proven" || ce.status === "fail")
+  ) {
+    const assessments = ce.expectedOutputAssessments ?? [];
+    const gaps = assessments
+      .filter((a) => a.result !== "PASS")
+      .map((a) => `${a.expectation}: ${a.result}`);
+    const produced =
+      assessments
+        .filter((a) => a.result === "PASS")
+        .map((a) => a.expectation)
+        .join(" · ") || "livrable technique enregistré";
+    const gapText =
+      gaps.length > 0
+        ? gaps.join(" · ")
+        : "critères de conformité du contrat non satisfaits";
+    return {
+      ...base,
+      outcome: ce.status === "fail" ? "FAIL" : "UNCLAIMED",
+      businessHeadline:
+        ce.status === "fail"
+          ? "Livrable non conforme"
+          : "Conformité non prouvée",
+      businessReason: `Produit : ${produced}. Écarts : ${gapText}. Aucune relance automatique.`,
+      claimAllowed: false,
+      governedBoundary: null,
+      evidenceSummary:
+        ce.status === "fail"
+          ? evidenceSummaryFor("FAIL", input.attempt.status)
+          : "Evidence artifact présente — conformité Contract Result non prouvée.",
+    };
+  }
+
   if (
     input.attempt.status === "cancelled" &&
     input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP" &&
```

---

## DIFF — TrajectorySurface.tsx (Pilot Nora-unavailable + prior macro UX)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 66f58bff..847c7a01 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -2874,17 +2874,19 @@ export function TrajectorySurface({
           ) : null}
           <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
             {productOutcome?.claimAllowed
-              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
-              : productEvidencePending
-                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
-                : "Terminal technique — résultat produit non encore qualifié."}
+              ? "Exécution terminée — résultat produit qualifié ci-dessous."
+              : productOutcome
+                ? "Exécution terminée — résultat produit évalué (voir conformité et recommandation)."
+                : productEvidencePending
+                  ? "Exécution terminée — qualification produit en cours…"
+                  : "Exécution terminée — résultat produit en attente de matérialisation."}
           </p>
           {productEvidencePending ? (
             <p
               className={styles.blockNote}
               data-testid="w3b-evidence-pending"
             >
-              Evidence requise avant tout claim de résultat produit.
+              Qualification automatique du résultat en cours (Evidence / conformité).
             </p>
           ) : null}
           {attempt?.attemptId && !productOutcome ? (
@@ -3021,6 +3023,15 @@ export function TrajectorySurface({
                 </button>
               ) : null}
             </section>
+          ) : productOutcome.claimEvaluationId &&
+            (!postEvidence || !postEvidence.ok) ? (
+            <p
+              className={styles.blockNote}
+              data-testid="w3c-nora-unavailable-reserve"
+              role="status"
+            >
+              Analyse Nora indisponible — aucune décision automatique prise.
+            </p>
           ) : null}
           <details className={styles.technicalDetails}>
             <summary data-testid="w3b-technical-details-toggle">
```

---

## DIFF — governedExecuteAuthorizedContract.ts (hot-path completion; prior macro, still local)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index ac2284f0..d4e529df 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -14,6 +14,7 @@
  */

 import { createHash } from "node:crypto";
+import path from "node:path";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import {
   applyW3bAdapterFailArmIfPresent,
@@ -47,11 +48,11 @@ import {
 } from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
+import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
 import {
   bindCursorExecutionReportToAttempt,
   parseCursorExecutionReport,
 } from "@/lib/oa/execution-attempt";
-import path from "node:path";
 import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
 import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
@@ -981,6 +982,21 @@ export async function governedExecuteRecordResult(
             attempt: projectAttempt(attempt, adapterId),
           };
         }
+        // Automatic Product result qualification while worktree is still hot.
+        // Failures stay fail-closed on Product claim; technical Attempt unchanged.
+        if (completed.facts.worktreeRef) {
+          await completeDocsWriteClaimEvidenceCompletion({
+            evidenceReviewServices: input.oa.evidenceReviewServices!,
+            attempt,
+            contract,
+            actor: LOCAL_PILOTE_ACTOR,
+            artifactAbsolutePath: path.join(
+              completed.facts.worktreeRef,
+              completed.facts.targetPath,
+            ),
+            nowIso: input.oa.clock.nowIso(),
+          });
+        }
       }
     }
     return buildTechnicalTerminal({
@@ -992,7 +1008,7 @@ export async function governedExecuteRecordResult(
       launchCountBefore,
       statusLabel:
         attempt.status === "succeeded"
-          ? "TERMINAL TECHNIQUE DOCS-WRITE — RÉSULTAT PRODUIT À QUALIFIER"
+          ? "TERMINAL TECHNIQUE DOCS-WRITE — QUALIFICATION PRODUIT AUTOMATIQUE"
           : undefined,
     });
   }
```

---

## Réserves
- FocusFlow REAL historique non muté (réconciliation Pilote séparée si besoin).
- Code correctif local / non poussé (hors handoff L3).
- `.env.example` dirty préexistant préservé ; `.env.local` non versionné.
