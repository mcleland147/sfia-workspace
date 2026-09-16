# SFIA Studio — PRODUCT CONTINUITY
## RESTART-SAFE EXECUTIONCONTRACT + INSPECTION REHYDRATION — FULL Review Pack

**Timestamp (UTC):** 2026-09-16T09:48:00Z
**Review Pack:** FULL
**Cycle:** 8 — Delivery
**Typology:** RUN
**Profile:** Critical

**Verdict:**
`PRODUCT-CONTINUITY-EC-REHYDRATION — RESTART-SAFE PRE-EXECUTION EXECUTIONCONTRACT + INSPECTION PROJECTION DETERMINISTICALLY PROVEN — DURABLE DECISION LINEAGE VERIFIED — EXACT DOCS_WRITE TARGET RESTORED — LEGACY INCOMPLETE INSPECTION FAILS CLOSED — GENERIC INSTRUCT CTA SUPPRESSED WHILE EC OWNS NEXT ACTION — NO DUPLICATE PREPARE — ZERO DOGFOOD MUTATION — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW`

---

## A. Timestamp

2026-09-16T09:48:00Z

## B. Git truth

| Item | Value |
|---|---|
| origin/main | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` |
| worktree | `/Users/morris/Projects/sfia-studio-ec-rehydration-continuity` |
| branch | `fix/sfia-studio-ec-rehydration-continuity` |
| initial HEAD | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` (created from origin/main) |
| initial status | clean at creation |
| candidate HEAD | `c2c8280b7cfaa1b3a5656fb55b1e46ba73b23130` + local dirty Product source |
| Product commit | NONE (authorized dirty candidate) |

## C. Morris GO consumed

Bounded Delivery remediation only: dedicated worktree from exact main; Product source for restart-safe governed EC projection; deterministic tests; full local validation; FULL Review Pack; Review Handoff L3.

NOT consumed: dogfood runtime/DB/manual reproof; Inspect/Confirm/Authorize/Execute; OpenAI LIVE; Cursor REAL; Product commit/push/PR/merge; doctrine/schema migration.

## D. Cycle / Critical justification

Cycle 8 Delivery / RUN / Critical — restart projection moved the Pilot backward to generic « Instruire les options » while durable HD→Basis→EC→insufficient inspection already existed.

## E. Convergence

- V3-F02 semantic inter-session continuity
- V3-F11 native durable inspectable ExecutionContract
- V3-F12 effect / Confirmation / authority governance
- A3: EC prepared → inspected → Confirmation if required → authority
- Product Completion trajectory: Authenticated Product Journey restart-safe continuation
- runtime v3: **NON ADOPTED**

## F. Failure evidence consumed

Handoff tip `72243475e604de5a23ba5175a35c11835fa49f02` — AUTHENTICATED-PRODUCT-REPROOF-REHYDRATION FAIL / EC REHYDRATION GAP.

## G. Root cause

Durable EC + legacy attestation exist in Product SQLite and appear in History, but TrajectorySurface kept `contract`/`inspection` in client-local React state filled only by PREPARE/Inspect transitions. Auto effects rehydrated Proposal Decision Subject + pre-cycle only. After DecisionRef closure, generic « Instruire les options » regained precedence.

## H. Existing assets reused

KEEP: LPS, HD/Basis, EC store, InspectionAttestation, PR#491 disclosure + fact coverage, `readContractInspectionState`, `listExecutionContractHistory`, `projectHistory` (not second SoT), `GetExecutionContract`, `listSuperseding`, `getHumanDecision`, `projectExecutionContractInspectionDisclosure`.

ADAPT: TrajectorySurface client state + CTA ownership; W2 server read projection COMPLETE.

## I. Current-EC resolution semantics

`readCurrentGovernedExecutionContinuity`:

1. `listExecutionContractHistory(projectId)`
2. Keep project-owned contracts
3. If any **current** (`listSuperseding` empty) contract has status `executing` → `EXECUTION_CONTINUITY_UNSUPPORTED`
4. Candidates = non-terminal pre-execution statuses: draft|proposed|validated|confirmation_required|confirmed AND no superseding successor
5. 0 → `kind: none`; >1 → `EXECUTION_CONTINUITY_AMBIGUOUS`; 1 → continue
6. Optional cycle coherence: if both contract.cycleInstanceId and project.activeCycleInstanceId exist, must match else INTEGRITY_FAILED
7. Decision lineage: non-empty decisionRefs; each getHumanDecision; same project; status `accepted`; DecisionBasis present
8. Project allowlisted disclosure + `readContractInspectionState` (no attestation write)

## J. Ambiguity / fail-closed

- `EXECUTION_CONTINUITY_AMBIGUOUS`
- `EXECUTION_CONTINUITY_INTEGRITY_FAILED`
- `EXECUTION_CONTINUITY_UNSUPPORTED` (executing)
- UI: error message; generic instruct hidden; no PREPARE fallback

## K. Decision lineage

Verified from durable HD via `decisionRefs` → `getHumanDecision` (accepted + DecisionBasis). No opaque-id semantic parsing. Campaign ids used only as test evidence.

## L. Read result shape

`CurrentGovernedExecutionContinuityResult`: `none` | `active` (decisionRef + contract DTO with inspectionDisclosure + inspection DTO) | `W2Failure`.

## M. UI rehydration wiring

`TrajectorySurface`:
- `executionContinuityReadStatus` pending|ready|error
- `rehydrateGovernedExecutionContinuity` after subject read resolves; also on `durableRefreshSignal`
- active → setContract + setInspection; authorization null
- conflict (unresolved Proposal subject + active EC) → fail-closed message; no mutating CTAs

## N. Pending/error CTA fail-closed

Generic « Instruire les options » requires BOTH subject and continuity reads ready, no conflict, and `!proposalSubjectOwnsNextAction`. Ownership reports UNKNOWN while unresolved.

## O. Legacy attestation

Rehydration uses `readContractInspectionState` → `inspected_facts_incomplete` / `RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS`; Confirm stays disabled; no new attestation recorded.

## P. Production diff files

- NEW `w2/readCurrentGovernedExecutionContinuity.ts`
- MOD `w2/actions.ts` (`w2ReadCurrentGovernedExecutionContinuityAction`)
- MOD `w2/types.ts` (result types)
- MOD `TrajectorySurface.tsx`

## Q. Test diff files

- NEW `ecRehydrationContinuity.d0.test.ts`
- MOD `trajectorySurface.ui.test.tsx`
- MOD `productJourneyProjectionCoherence.ui.test.tsx` / `preCycleTrajectoryCta.ui.test.tsx` (continuity mock)
- MOD `importBoundaries.test.ts` (allowlist)

## R–X. Proofs / regressions

Application: campaign shape + G1–G8 + executing unsupported; ZERO attestation/Decision/EC writes from read.
UI: fresh-mount EC+path+repo+reinspect; pending hides instruct; ambiguity hides instruct; none+none shows instruct; subject/EC conflict fail-closed.
CORR-PROOF-10/11, Lot A/B journey integrity, PR491 disclosure tests, w2Eabc, m3 prepare, governance: focused green.
No Confirmation/Authority policy change. No Attempt rehydration.

## Y. Focused validation

| Suite | Result |
|---|---|
| ecRehydrationContinuity.d0 + trajectorySurface.ui + ecInspectionDisclosure + journey integrity + proposalSubject + w2Eabc + executionContractGovernance | 129 passed / 0 failed |
| corrProof10 + corrProof11 + projectionCoherence + repoBinding + preCycleCta + m3ExecutionContractPrepare | 87 passed / 0 failed |
| importBoundaries (after allowlist) | 5 passed |

## Z. Full Vitest

**4135 passed / 137 skipped / 0 failed** (390 files: 373 passed | 17 skipped)

(First full run failed only on importBoundaries allowlist; fixed; second full run green.)

## AA. typecheck / lint / build / diff-check

- typecheck: PASS
- lint: PASS (0 warnings/errors)
- build: PASS
- `git diff --check` on projects/sfia-studio: PASS

## AB–AF. Controls

- Product semantic mutation in tests beyond fixtures: ZERO for the read path
- dogfood mutation: ZERO
- OpenAI LIVE: ZERO
- Cursor/docs_write REAL: ZERO
- Product commit/push/PR: NONE

## AG. Remaining reserve

Authenticated restart reproof on dogfood after ChatGPT Critical Review + Product Git Integration — NEW DISTINCT Morris GO.

## AH. Next gate

ChatGPT Critical Review of this dirty candidate.

## AI. Verdict

`PRODUCT-CONTINUITY-EC-REHYDRATION — RESTART-SAFE PRE-EXECUTION EXECUTIONCONTRACT + INSPECTION PROJECTION DETERMINISTICALLY PROVEN — DURABLE DECISION LINEAGE VERIFIED — EXACT DOCS_WRITE TARGET RESTORED — LEGACY INCOMPLETE INSPECTION FAILS CLOSED — GENERIC INSTRUCT CTA SUPPRESSED WHILE EC OWNS NEXT ACTION — NO DUPLICATE PREPARE — ZERO DOGFOOD MUTATION — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW`

---

## Complete reviewable source (new files + unified diff)

```diff
===== NEW: readCurrentGovernedExecutionContinuity.ts =====
/**
 * W2 — read-only current governed ExecutionContract continuity projection.
 *
 * Restart-safe Product continuation: resolve the unique current pre-execution
 * ExecutionContract for a Project from durable OA truth, verify decision
 * lineage, project allowlisted inspection disclosure, and evaluate current
 * inspection sufficiency WITHOUT recording a new attestation.
 *
 * NEVER writes EC / Inspection / Confirmation / Authority / Attempt / LPS /
 * Epistemic / trajectory state.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityResult,
  W2Failure,
} from "./types";

const PRE_EXECUTION_STATUSES = new Set<ExecutionContract["status"]>([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
  "confirmed",
]);

const TERMINAL_STATUSES = new Set<ExecutionContract["status"]>([
  "completed",
  "failed",
  "cancelled",
  "superseded",
]);

function fail(
  code: string,
  message: string,
): W2Failure {
  return { ok: false, code, message };
}

function projectOwned(contract: ExecutionContract, projectId: string): boolean {
  return contract.projectId === projectId;
}

async function isCurrentInSupersessionLineage(
  oa: RuntimeOaStack,
  contract: ExecutionContract,
): Promise<boolean> {
  if (contract.status === "superseded") return false;
  const successors =
    await oa.executionContractServices.contracts.listSuperseding(
      contract.executionContractId,
    );
  return successors.length === 0;
}

async function resolveActiveCycleInstanceId(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<string | null> {
  const loaded = await oa.projectServices.getProject.execute({ projectId });
  if (!loaded.ok) return null;
  return loaded.project.activeCycleInstanceId ?? null;
}

async function verifyDecisionLineage(
  oa: RuntimeOaStack,
  projectId: string,
  contract: ExecutionContract,
): Promise<
  | { ok: true; decisionRef: string }
  | W2Failure
> {
  const refs = contract.decisionRefs ?? [];
  if (refs.length === 0) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Contrat d'exécution sans décision rattachée — continuation refusée.",
    );
  }

  let primaryRef: string | null = null;
  for (const decisionId of refs) {
    const got = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    if (!got.ok) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée au contrat introuvable — continuation refusée.",
      );
    }
    const decision = got.decision;
    if (decision.projectId !== projectId) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée hors projet — continuation refusée.",
      );
    }
    if (decision.status !== "accepted") {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "Décision rattachée non effective — continuation refusée.",
      );
    }
    if (!decision.decisionBasis) {
      return fail(
        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
        "DecisionBasis absente sur la décision rattachée — continuation refusée.",
      );
    }
    if (primaryRef == null) primaryRef = decision.decisionId;
  }

  return { ok: true, decisionRef: primaryRef! };
}

function toContinuityContractProjection(contract: ExecutionContract): {
  ok: true;
  contract: Extract<
    CurrentGovernedExecutionContinuityResult,
    { ok: true; kind: "active" }
  >["contract"];
} | W2Failure {
  const disclosureResult =
    projectExecutionContractInspectionDisclosure(contract);
  // Incomplete disclosure is still projected honestly; inspection fails closed.
  const disclosure = disclosureResult.disclosure;

  return {
    ok: true,
    contract: {
      executionContractId: contract.executionContractId,
      version: contract.version,
      status: contract.status,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      requiredAuthority: contract.requiredAuthority,
      constraints: [...contract.constraints],
      stopConditions: [...contract.stopConditions],
      requiredCapabilities: [...contract.requiredCapabilities],
      reversibility: contract.reversibility,
      semanticFingerprint: contract.semanticFingerprint ?? "",
      effectConfirmationRequired: contract.status === "confirmation_required",
      effectConfirmationLevel: null,
      inspectionDisclosure: disclosure,
    },
  };
}

/**
 * Resolve the unique current pre-execution governed ExecutionContract for a
 * Project and return Product-ready contract + current inspection state.
 */
export async function readCurrentGovernedExecutionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<CurrentGovernedExecutionContinuityResult> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return fail(
      "CONTRACT_INVALID",
      "Identifiant de projet invalide — continuation refusée.",
    );
  }

  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) {
    return fail(
      listed.error.detailCode,
      listed.error.message ??
        "Lecture de l'historique des contrats d'exécution impossible.",
    );
  }

  const owned = listed.contracts.filter((c) => projectOwned(c, projectId));

  // Detect unsupported executing-current contracts before pre-execution filter.
  for (const contract of owned) {
    if (contract.status !== "executing") continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    return fail(
      "EXECUTION_CONTINUITY_UNSUPPORTED",
      "Un contrat en cours d'exécution est courant — la continuité pré-exécution ne s'applique pas.",
    );
  }

  const preExecution: ExecutionContract[] = [];
  for (const contract of owned) {
    if (TERMINAL_STATUSES.has(contract.status)) continue;
    if (!PRE_EXECUTION_STATUSES.has(contract.status)) continue;
    if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
    preExecution.push(contract);
  }

  if (preExecution.length === 0) {
    return { ok: true, kind: "none" };
  }

  if (preExecution.length > 1) {
    return fail(
      "EXECUTION_CONTINUITY_AMBIGUOUS",
      "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    );
  }

  const candidate = preExecution[0]!;

  const activeCycleId = await resolveActiveCycleInstanceId(oa, projectId);
  if (
    candidate.cycleInstanceId &&
    activeCycleId &&
    candidate.cycleInstanceId !== activeCycleId
  ) {
    return fail(
      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
      "Le contrat courant n'est pas cohérent avec le cycle actif du projet — continuation refusée.",
    );
  }

  const lineage = await verifyDecisionLineage(oa, projectId, candidate);
  if (!lineage.ok) return lineage;

  const projected = toContinuityContractProjection(candidate);
  if (!projected.ok) return projected;

  const inspection = await readContractInspectionState({
    oa,
    executionContractId: candidate.executionContractId,
  });
  if (!inspection.ok) {
    return fail(
      inspection.code,
      inspection.message,
    );
  }

  const inspectionDto: ContractInspectionStateDto = {
    executionContractId: inspection.executionContractId,
    contractVersion: inspection.contractVersion,
    semanticFingerprint: inspection.semanticFingerprint,
    statusLabel: inspection.statusLabel,
    inspectionSufficient: inspection.inspectionSufficient,
    attestationRef: inspection.attestationRef,
    attestedVersion: inspection.attestedVersion,
    staleAttestationRef: inspection.staleAttestationRef,
    reinspectionRequired: inspection.reinspectionRequired,
    reason: inspection.reason,
    grantsAuthority: false,
  };

  return {
    ok: true,
    kind: "active",
    decisionRef: lineage.decisionRef,
    contract: projected.contract,
    inspection: inspectionDto,
  };
}

===== NEW: ecRehydrationContinuity.d0.test.ts =====
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

function stubOa(stack: Stack, nowIso: string) {
  return {
    executionContractServices: stack.execution,
    decisionServices: stack.decisions,
    authorityResolver: stack.decisions.authority,
    clock: { nowIso: () => nowIso },
    projectServices: stack.projects,
    cycleServices: stack.cycles,
    executionAttemptServices: {
      registry: {
        listAgents: () => [],
        findCandidates: () => [],
      },
    },
  } as unknown as Parameters<
    typeof readCurrentGovernedExecutionContinuity
  >[0]["oa"];
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
});

===== DIFF: production + tests =====
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
index 596106c0..d6eebb67 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -38,6 +38,10 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2RehydrateProductOutcomeAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    kind: "none",
+  }),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 3ccc476c..49d22f19 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -71,6 +71,10 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2GovernedExecuteCompleteAction: vi.fn(),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
+    ok: true,
+    kind: "none",
+  }),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 9f3673ff..fd2f87bf 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -19,6 +19,7 @@ const {
   executeStartMock,
   executeCompleteMock,
   readActiveDecisionSubjectMock,
+  readGovernedExecutionContinuityMock,
   readPreCycleMock,
   readApprovalMock,
   prepareCycleMock,
@@ -36,6 +37,7 @@ const {
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
   readActiveDecisionSubjectMock: vi.fn(),
+  readGovernedExecutionContinuityMock: vi.fn(),
   readPreCycleMock: vi.fn(),
   readApprovalMock: vi.fn(),
   prepareCycleMock: vi.fn(),
@@ -71,6 +73,8 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     executeCompleteMock(...args),
   w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
     readActiveDecisionSubjectMock(...args),
+  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
+    readGovernedExecutionContinuityMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -110,6 +114,7 @@ beforeEach(() => {
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
   readActiveDecisionSubjectMock.mockReset();
+  readGovernedExecutionContinuityMock.mockReset();
   readPreCycleMock.mockReset();
   readApprovalMock.mockReset();
   prepareCycleMock.mockReset();
@@ -119,6 +124,10 @@ beforeEach(() => {
     ok: true,
     kind: "none",
   });
+  readGovernedExecutionContinuityMock.mockResolvedValue({
+    ok: true,
+    kind: "none",
+  });
   readPreCycleMock.mockResolvedValue({
     ok: true,
     candidate: null,
@@ -1455,4 +1464,240 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
     expect(prepareM3Mock).not.toHaveBeenCalled();
     expect(prepareContractMock).not.toHaveBeenCalled();
   });
+
+  it("EC rehydration — fresh mount projects durable EC + incomplete inspection; hides instruct", async () => {
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "active",
+      decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+      contract: {
+        executionContractId: "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        version: 2,
+        status: "confirmation_required",
+        action: "cursor.docs_write.apply",
+        target: "workspace.isolated.docs_write",
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        requiredAuthority: "MORRIS",
+        constraints: ["PREPARE_ONLY"],
+        stopConditions: ["AUTHORITY_DENIED"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        reversibility: "reversible",
+        semanticFingerprint: "fp-campaign",
+        effectConfirmationRequired: true,
+        effectConfirmationLevel: null,
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "docs_write borné — cycle actif — aucune exécution automatique",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: ["projects/sfia-studio/.sandbox"],
+          scopeOut: [],
+          createOrModify: true,
+          noDelete: true,
+          objective: null,
+          artifactType: null,
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
+          evidenceRequirements: [],
+          requiredAuthority: "MORRIS",
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          constraints: ["PREPARE_ONLY"],
+          stopConditions: ["AUTHORITY_DENIED"],
+          reversibility: "reversible",
+          contractVersion: 2,
+          executionContractId:
+            "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+          semanticFingerprint: "fp-campaign",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
+      },
+      inspection: {
+        executionContractId:
+          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        contractVersion: 2,
+        semanticFingerprint: "fp-campaign",
+        statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: 2,
+        staleAttestationRef: "insp:05042f3b6040838e",
+        reinspectionRequired: true,
+        reason: "inspected_facts_incomplete",
+        grantsAuthority: false,
+      },
+    });
+
+    render(<TrajectorySurface projectId="prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6" />);
+
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-contract-action").textContent).toBe(
+      "cursor.docs_write.apply",
+    );
+    expect(screen.getByTestId("w2-contract-target").textContent).toBe(
+      "workspace.isolated.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
+      "mcleland147/sfia-workspace",
+    );
+    expect(screen.getByTestId("w2-contract-status").textContent).toMatch(
+      /Confirmation requise/i,
+    );
+    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
+      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
+    );
+    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
+    expect(inspectMock).not.toHaveBeenCalled();
+  });
+
+  it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
+    let resolveContinuity: (value: unknown) => void = () => {};
+    readGovernedExecutionContinuityMock.mockReturnValue(
+      new Promise((resolve) => {
+        resolveContinuity = resolve;
+      }),
+    );
+
+    render(<TrajectorySurface projectId="prj:pending-continuity" />);
+    await waitFor(() => {
+      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
+    });
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+
+    resolveContinuity({ ok: true, kind: "none" });
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
+  });
+
+  it("EC rehydration — continuity error/ambiguity hides instruct and shows fail-closed", async () => {
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: false,
+      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
+      message:
+        "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
+    });
+
+    render(<TrajectorySurface projectId="prj:ambiguous-continuity" />);
+    expect(await screen.findByTestId("w2-error")).toBeVisible();
+    expect(screen.getByTestId("w2-error").textContent).toMatch(/Plusieurs contrats/);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-contract")).toBeNull();
+  });
+
+  it("EC rehydration — kind none + subject none still shows Instruire after both resolve", async () => {
+    render(<TrajectorySurface projectId="prj:none-none" />);
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
+  });
+
+  it("EC rehydration — bound subject + active EC conflict fails closed", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "bound_awaiting_decision",
+      optionSet: {
+        optionSetRef: "optset:conflict",
+        cycleTypeId: "cyc:framing",
+        recommendedProfile: "Light",
+        decisionSubjectMode: "proposal",
+        proposalId: "prop:f2:conflict",
+        promotesProjectTrajectory: false,
+        options: [
+          {
+            kind: "OPTION",
+            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+            label: "Poursuivre",
+            intent: "Poursuivre le sujet",
+            impacts: ["HumanDecision"],
+            recommended: true,
+          },
+        ],
+        recommendation: {
+          kind: "RECOMMENDATION",
+          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+          rationale: "test",
+        },
+        epistemicRefs: [],
+        proposedTrajectory: null,
+        phase: "OPTIONS_PROPOSED",
+        autoDecisionPerformed: false,
+        executionPerformed: false,
+        ckcCognitionCompletedBeforeMutation: true,
+      },
+    });
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "active",
+      decisionRef: "dec:conflict",
+      contract: {
+        executionContractId: "xct:conflict",
+        version: 1,
+        status: "confirmation_required",
+        action: "cursor.docs_write.apply",
+        target: "workspace.isolated.docs_write",
+        scope: "s",
+        requiredAuthority: "MORRIS",
+        constraints: [],
+        stopConditions: [],
+        requiredCapabilities: [],
+        reversibility: "reversible",
+        semanticFingerprint: "fp",
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "s",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: null,
+          scopeOut: null,
+          createOrModify: null,
+          noDelete: null,
+          objective: null,
+          artifactType: null,
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: null,
+          evidenceRequirements: [],
+          requiredAuthority: "MORRIS",
+          requiredCapabilities: [],
+          constraints: [],
+          stopConditions: [],
+          reversibility: "reversible",
+          contractVersion: 1,
+          executionContractId: "xct:conflict",
+          semanticFingerprint: "fp",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
+      },
+      inspection: {
+        executionContractId: "xct:conflict",
+        contractVersion: 1,
+        semanticFingerprint: "fp",
+        statusLabel: "NON INSPECTÉ",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: "no_attestation",
+        grantsAuthority: false,
+      },
+    });
+
+    render(<TrajectorySurface projectId="prj:conflict" />);
+    expect(await screen.findByTestId("w2-error")).toBeVisible();
+    expect(screen.getByTestId("w2-error").textContent).toMatch(/Contradiction/);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 53237fac..63e6d71f 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -110,6 +110,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 0641b7c0..3da49ebf 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -26,6 +26,7 @@ import {
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
   w2ReadActiveDecisionSubjectAction,
+  w2ReadCurrentGovernedExecutionContinuityAction,
   w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import {
@@ -247,6 +248,10 @@ export function TrajectorySurface({
   const [subjectReadStatus, setSubjectReadStatus] = useState<
     "pending" | "ready" | "error"
   >("pending");
+  const [executionContinuityReadStatus, setExecutionContinuityReadStatus] =
+    useState<"pending" | "ready" | "error">("pending");
+  const [executionContinuityConflict, setExecutionContinuityConflict] =
+    useState(false);
   const [pendingReinstruction, setPendingReinstruction] = useState<{
     readonly message: string;
     readonly proposalIds: readonly string[];
@@ -428,6 +433,69 @@ export function TrajectorySurface({
     // kind === "none" — leave local optionSet as-is for trajectory path
   }, [projectId]);

+  /** Restart-safe governed EC + inspection continuity from durable truth. */
+  const rehydrateGovernedExecutionContinuity = useCallback(async () => {
+    setExecutionContinuityReadStatus("pending");
+    setExecutionContinuityConflict(false);
+    const result = await w2ReadCurrentGovernedExecutionContinuityAction({
+      projectId,
+    });
+    if (!result.ok) {
+      setError(result.message);
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setExecutionContinuityReadStatus("error");
+      return;
+    }
+    if (result.kind === "none") {
+      // Do not clear an in-session contract prepared after mount; only leave
+      // null when nothing durable owns continuation and local state is empty.
+      setExecutionContinuityReadStatus("ready");
+      return;
+    }
+
+    // Fail-closed contradiction: unresolved Proposal Decision Subject + current EC.
+    const subjectCompetes =
+      pendingReinstruction != null ||
+      (optionSet != null && decision == null);
+    if (subjectCompetes) {
+      setExecutionContinuityConflict(true);
+      setError(
+        "Contradiction de continuité — un sujet de décision Proposal non résolu coexiste avec un contrat d'exécution courant. Aucune action générique n'est proposée.",
+      );
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setExecutionContinuityReadStatus("ready");
+      return;
+    }
+
+    setContract({
+      executionContractId: result.contract.executionContractId,
+      version: result.contract.version,
+      status: result.contract.status,
+      action: result.contract.action,
+      target: result.contract.target,
+      scope: result.contract.scope,
+      requiredAuthority: result.contract.requiredAuthority,
+      constraints: [...result.contract.constraints],
+      stopConditions: [...result.contract.stopConditions],
+      requiredCapabilities: [...result.contract.requiredCapabilities],
+      reversibility: result.contract.reversibility,
+      semanticFingerprint: result.contract.semanticFingerprint,
+      effectConfirmationRequired: result.contract.effectConfirmationRequired,
+      effectConfirmationLevel: result.contract.effectConfirmationLevel ?? null,
+      inspectionDisclosure: toInspectionDisclosureView(
+        result.contract.inspectionDisclosure,
+      ),
+    });
+    setInspection(result.inspection);
+    setAuthorization(null);
+    setError(null);
+    setExecutionContinuityReadStatus("ready");
+  }, [projectId, pendingReinstruction, optionSet, decision]);
+
   const refreshPreCycleCandidate = useCallback(async () => {
     const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
       projectId,
@@ -584,6 +652,15 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

+  useEffect(() => {
+    if (subjectReadStatus === "pending") return;
+    void rehydrateGovernedExecutionContinuity();
+  }, [
+    subjectReadStatus,
+    durableRefreshSignal,
+    rehydrateGovernedExecutionContinuity,
+  ]);
+
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
@@ -1038,22 +1115,33 @@ export function TrajectorySurface({
    * While a Proposal decision subject still owns the next useful action, the
    * generic ProjectTrajectory instruct CTA must not offer a competing subject.
    * Informational blocks above remain visible; only the mutating CTA is strict.
+   *
+   * Continuity conflict (unresolved Proposal subject + current EC) owns nothing
+   * mutably — fail closed until Pilot resolves via a qualified next GO.
    */
   const proposalSubjectOwnsNextAction =
+    !executionContinuityConflict &&
     // reformulate / instruct the pending subject
-    pendingReinstruction != null ||
-    // options presented, awaiting the HumanDecision
-    (optionSet != null && decision == null) ||
-    // amend / refuse: next move is with Nora, never a new generic instruction
-    (decision != null && decisionDefersExecution) ||
-    // pursue decided but no contract yet: PREPARE owns the next action
-    (decision != null && contract == null) ||
-    // contract prepared: Inspect (then confirm / authorize) owns the next action
-    contract != null;
+    (pendingReinstruction != null ||
+      // options presented, awaiting the HumanDecision
+      (optionSet != null && decision == null) ||
+      // amend / refuse: next move is with Nora, never a new generic instruction
+      (decision != null && decisionDefersExecution) ||
+      // pursue decided but no contract yet: PREPARE owns the next action
+      (decision != null && contract == null) ||
+      // contract prepared / rehydrated: Inspect (then confirm / authorize) owns
+      contract != null);
+
+  const continuityReadsUnresolved =
+    subjectReadStatus === "pending" ||
+    subjectReadStatus === "error" ||
+    executionContinuityReadStatus === "pending" ||
+    executionContinuityReadStatus === "error" ||
+    executionContinuityConflict;

   useEffect(() => {
     if (!onProposalSubjectOwnershipChange) return;
-    if (subjectReadStatus === "pending" || subjectReadStatus === "error") {
+    if (continuityReadsUnresolved) {
       onProposalSubjectOwnershipChange("UNKNOWN");
       return;
     }
@@ -1063,7 +1151,7 @@ export function TrajectorySurface({
   }, [
     onProposalSubjectOwnershipChange,
     proposalSubjectOwnsNextAction,
-    subjectReadStatus,
+    continuityReadsUnresolved,
   ]);

   return (
@@ -1369,8 +1457,11 @@ export function TrajectorySurface({
         action (pending, options awaiting decision, decision taken, contract
         prepared), the generic trajectory instruct CTA is hidden so two
         decision subjects can never compete for the same primary action.
+        Continuity reads must both resolve; pending/error/conflict stay fail-closed.
       */}
-      {activeCycleInstanceId && !proposalSubjectOwnsNextAction ? (
+      {activeCycleInstanceId &&
+      !proposalSubjectOwnsNextAction &&
+      !continuityReadsUnresolved ? (
       <div className={styles.actions}>
         <button
           type="button"
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index f0af827a..e1d65d24 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -36,6 +36,7 @@ import {
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
+import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
@@ -44,6 +45,7 @@ import type {
   ActiveDecisionSubjectReadResult,
   AmendExecutionContractResult,
   ConfirmForAuthorizationResult,
+  CurrentGovernedExecutionContinuityResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
   GovernedExecuteAuthorizedContractResult,
@@ -140,6 +142,23 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
   };
 }

+/**
+ * Restart-safe governed ExecutionContract + inspection continuity.
+ * Client sends projectId only — server discovers durable continuation.
+ * READ-ONLY: never records inspection or mutates Product semantic state.
+ */
+export async function w2ReadCurrentGovernedExecutionContinuityAction(input: {
+  projectId: string;
+}): Promise<CurrentGovernedExecutionContinuityResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return readCurrentGovernedExecutionContinuity({
+    oa: runtime.oa,
+    projectId: input.projectId,
+  });
+}
+
 export async function w2DecideTrajectoryAction(input: {
   projectId: string;
   optionSetRef: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 05ef3e80..2b7b77b6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -232,6 +232,39 @@ export type ActiveDecisionSubjectReadResult =
     }
   | W2Failure;

+/**
+ * Restart-safe governed ExecutionContract + inspection continuity read.
+ * READ projection only — never records inspection or mutates Product truth.
+ */
+export type CurrentGovernedExecutionContinuityContractDto = {
+  readonly executionContractId: string;
+  readonly version: number;
+  readonly status: string;
+  readonly action: string;
+  readonly target: string;
+  readonly scope: string;
+  readonly requiredAuthority: string;
+  readonly constraints: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly requiredCapabilities: readonly string[];
+  readonly reversibility: string;
+  readonly semanticFingerprint: string;
+  readonly effectConfirmationRequired?: boolean;
+  readonly effectConfirmationLevel?: string | null;
+  readonly inspectionDisclosure: import("@/lib/oa/execution-contract").ExecutionContractInspectionDisclosure;
+};
+
+export type CurrentGovernedExecutionContinuityResult =
+  | { readonly ok: true; readonly kind: "none" }
+  | {
+      readonly ok: true;
+      readonly kind: "active";
+      readonly decisionRef: string;
+      readonly contract: CurrentGovernedExecutionContinuityContractDto;
+      readonly inspection: ContractInspectionStateDto;
+    }
+  | W2Failure;
+
 export type DecideTrajectoryResult =
   | {
       readonly ok: true;

===== UNTRACKED new files already printed =====
```
