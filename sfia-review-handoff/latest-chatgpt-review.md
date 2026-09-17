# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — R8 recovery execution binding + docs_write successor routing

**Timestamp (UTC):** 2026-09-17T21:35:47Z
**Pack kind:** FULL (code modification present — modified content included below)
**Pack revision:** R8 — recovery execution binding + docs_write successor routing
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**; **NO new HumanDecision**; **NO new Attempt**; **NO campaign SQLite mutation**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES (`HEAD == origin/main == 26478b1…`) |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? .tmp-sfia-review/checkpoint-f-r7-recovery-options.diff
?? .tmp-sfia-review/checkpoint-f-r8-recovery-successor.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
```

### Preservation

- R1–R7 local Product dirty files: **preserved**
- `package-lock.json`: dirty préexistant — **LEFT UNTOUCHED / hors scope**
- Historical Attempt `xat:w3a:1f49d8e25e20837a`: **not mutated** (status=failed)
- Campaign DB `.sfia-exec/pje2e-real-01/product/oa-product.sqlite`: **not manually mutated** (mtime unchanged by this lot)
- Wrong generic EC `xct:w3a:dec:w2-trj:7e6ca68a-…`: **still confirmation_required / unconsumed** (Pilot must use Studio PREPARE after reload — tests do not apply fix to campaign)
- Target `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md`: **ABSENT**
- Nouveau REAL consommé ce lot: **0** (budget restant autorisé: 1)

---

## 2. Qualification SFIA

- **Cycle:** 9 — QA / Validation
- **Typologie:** EVOL
- **Profil:** CRITICAL
- **Justification:** continuité recovery → ExecutionContract, sélection capability/executor, chemin vers frontière Cursor REAL (non consommée ici)
- **Blocs:** Git Truth · SFIA Studio Convergence · Product recovery continuity · Execution governance · Fake / Real · QA / non-régression · Review Pack / Review Handoff
- **Capacité v3 ciblée:** FAIL + Evidence → recovery/replan → HumanDecision Pilote → ExecutionContract successor cohérent → inspection / Confirmation / authority → executor gouverné
- **Milestone:** Product Journey E2E REAL Reconciliation

---

## 3. Diagnostic d'entrée (confirmé B+C)

Après HumanDecision ProjectTrajectory recovery (`opt:trajectory:governed-gated`):

1. UI proposait le catalogue W3-A générique (`generate-temporary-artifact` / `simulate` / `read`).
2. Serveur: `w2PrepareExecutionContractAction` → `prepareExecutionContractFromW2Decision` → builder générique.
3. Bounded docs_write n'est **pas** dans ce catalogue.
4. Chemin docs_write historique = Proposal/DecisionBasis → `prepareM3FromDecision` → resolve M4.
5. Recovery HD ne portait pas action/target/targetPath docs_write.
6. **R7** a propagé le recovery cognitif (options labels), **pas** le binding d'exécution.

**Classification confirmée:**
- **B** — recovery execution context not propagated
- **C** — previous failed EC action/target not rehydrated
- **A** — generic UI operation catalogue = symptôme
- **E** — NON

---

## 4. Topology avant / après

### Avant (dead-end)

```
Failed docs_write EC (xct:m3-ev:8aaa…)
  → Attempt FAIL + Evidence + W3C recover
  → R7 RecoveryContext → trajectory options recovery
  → HD opt:trajectory:governed-gated
  → UI W3-A catalog → PREPARE generic
  → wrong EC xct:w3a:dec:w2-trj:7e6ca68a… (product:generate-temporary-artifact)
```

### Après (R8)

```
Failed docs_write EC (source of truth)
  → R7 PostEvidenceRecoveryContext (coherence)
  → RecoveryExecutionBinding (action/target/path/caps/evidence)
  → HD governed-gated (activation gate)
  → UI: recovered work CTA (no W3-A catalog)
  → explicit PREPARE → cancel wrong generic (pre-exec Cancel)
  → M3 PREPARE_ONLY + resolveM3 → successor docs_write EC
```

---

## 5. Primitives réutilisées (KEEP / HARVEST)

| Primitive | Usage R8 |
|---|---|
| `resolvePostEvidenceRecoveryContext` (R7) | coherence episode |
| Failed EC `getExecutionContract` | source of truth binding |
| `cancelExecutionContract` | clear unconsumed wrong generic |
| `canonicalM3PrepareContractId` + `idem:m3-prep:` | prepare identity |
| `resolveM3ExecutionContract` | docs_write successor supersession |
| `boundedDocsWriteM3ResolutionProfile` / evidence rematerialize helpers | caps/evidence/constraints |
| `readCurrentGovernedExecutionContinuity` | idempotence / current EC |
| W3-A `prepareExecutionContractFromW2Decision` | **unchanged** for non-recovery |

**INTERDIT évité:** second catalogue · second recovery engine · nouvelle persistence · nouvelle architecture EC · mutation HD · Execute / Attempt / REAL.

---

## 6. RecoveryExecutionBinding (exact)

```ts
kind = "post_evidence_recovery_execution"
sourceExecutionContractId  // from RecoveryContext.attempt → EC
sourceAttemptId
action = "cursor.docs_write.apply"
target = "workspace.isolated.docs_write"
targetPath = inputs.targetPath (required non-empty)
requiredCapabilities includes cap:cursor.docs_write
evidenceRequirements / constraints / stopConditions / inputs (cloned sans stale)
projectId / cycleInstanceId / sourceSemanticFingerprint / sourceStatus=failed
```

### Règle de cohérence (fail-close → null binding / generic path)

- RecoveryContext présent (Attempt terminal + Evidence + RB + W3C recover/replan + même Project)
- Si `decisionId` fourni: HD accepted, `trajectory_option`, `selectedOptionId === GOVERNED_OPTION_REF`
- Source EC `status === failed` + bounded docs_write action/target/capability
- `inputs.targetPath` durable obligatoire sinon `DURABLE_EXECUTION_BINDING_INSUFFICIENT`
- Jamais « dernier EC » par ordre temporel seul
- Jamais action depuis texte Nora

---

## 7. UI disposition

Quand `RecoveryExecutionBinding` docs_write cohérent:

- Section `w2-recovery-docs-write-prepare`: « Reprendre l'écriture Markdown gouvernée… »
- Affiche `targetPath` + source Attempt/EC
- CTA explicite `w2-prepare-recovery-docs-write` — **aucun auto-PREPARE / auto-Execute**
- Catalogue W3-A (`w3a-operation-kind`) **masqué**

Sans binding: sélecteur W3-A **strictement inchangé**.

---

## 8. PREPARE routing + lifecycle wrong generic EC

`prepareDocsWriteRecoverySuccessorFromDecision`:

1. Resolve binding (avec decisionId)
2. Idempotent reuse si continuity current déjà docs_write pour cette HD
3. Sinon: `cancelExecutionContract` sur wrong generic courant lié à cette HD
   - Authority scope = **scope du wrong EC** (évite AUTHORITY_SCOPE_MISMATCH)
   - Status attendu: `cancelled` (pre-exec; supersede non applicable sans sémantique nouvelle — Cancel = primitive canonique existante)
4. Build M3 PREPARE_ONLY `xct:m3:dec:…` + `idem:m3-prep:{decisionId}`
5. `resolveM3ExecutionContract` → successor `cursor.docs_write.apply` / `workspace.isolated.docs_write` / path / `cap:cursor.docs_write` / `evreq:docs_write_artifact` / NO_COMMIT|PUSH|PR|MERGE
6. Fresh lifecycle: pas de Confirmation / authority / Attempt hérités
7. `executionPerformed: false`, `attemptCreated: false`

**Wrong generic campaign EC:** non muté par ce lot (Pilot PREPARE après reload Studio). Tests prouvent Cancel → non-current.

---

## 9. Successor semantics

- Successor = nouvel EC gouverné (pas résurrection)
- Source failed EC reste `failed` / immutable
- Constraints business du failed EC conservées (filtre FIXTURE_/NO_REAL génériques)
- contentRequirements / validationExpectations clonés via `cloneDocsWriteInputsForRecoverySuccessor`
- Stale keys droppés: confirmationRef, attemptId, baseHeadSha (re-pin server-side)

---

## 10. Fichiers modifiés / ajoutés (R8)

**NEW**
- `features/project-assistant/w2/resolveRecoveryExecutionBinding.ts`
- `features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`
- `__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts`

**MOD**
- `features/project-assistant/w2/actions.ts` — `w2ReadRecoveryExecutionBindingAction`, `w2PrepareRecoveryDocsWriteAction`
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` — recovery CTA / hide W3-A
- `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` — T4 UI + mocks

**Hors scope:** `package-lock.json`

---

## 11. Diff exploitable (R8)

Voir aussi `.tmp-sfia-review/checkpoint-f-r8-recovery-successor.diff`.

### resolveRecoveryExecutionBinding.ts (full)

```ts
/**
 * Checkpoint F / R8 — RecoveryExecutionBinding from durable failed docs_write EC.
 * No new persistence. No parallel catalog. Source of truth = failed EC coherent
 * with R7 PostEvidenceRecoveryContext (+ optional recovery trajectory HD).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import {
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "./resolvePostEvidenceRecoveryContext";
import { GOVERNED_OPTION_REF } from "./trajectoryOptions";

export type RecoveryExecutionBinding = {
  readonly kind: "post_evidence_recovery_execution";
  readonly recovery: PostEvidenceRecoveryContext;
  readonly sourceExecutionContractId: string;
  readonly sourceAttemptId: string;
  readonly action: typeof M4_BOUNDED_DOCS_WRITE_ACTION;
  readonly target: typeof M4_BOUNDED_DOCS_WRITE_TARGET;
  readonly targetPath: string;
  readonly scope: string;
  readonly requiredCapabilities: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly inputs: Readonly<Record<string, unknown>>;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly sourceSemanticFingerprint: string | null;
  readonly sourceStatus: string;
};

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
  if (contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  if (!contract.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)) {
    return false;
  }
  return true;
}

/**
 * Clone durable inputs for a fresh successor — drop stale authority / OCC /
 * confirmation / attempt bindings; keep business path + content requirements.
 */
export function cloneDocsWriteInputsForRecoverySuccessor(
  inputs: Record<string, unknown> | undefined,
): Record<string, unknown> {
  const src = inputs ?? {};
  const out: Record<string, unknown> = {};
  const keepKeys = [
    "targetPath",
    "targetRepositoryRef",
    "repositoryRef",
    "pathAllowlist",
    "scopeIn",
    "scopeOut",
    "createOrModify",
    "noDelete",
    "artifactType",
    "artifactBrief",
    "contentRequirements",
    "validationExpectations",
    "evidenceRequirements",
    "expectedOutputs",
    "repositoryIdentity",
    "repositoryBindingIdentity",
    "remoteUrl",
    "defaultBranch",
    "workingBranch",
    "pathRoot",
    "objective",
    "recommendedProfile",
    "cycleTypeId",
    "activatedBlocks",
  ] as const;
  for (const key of keepKeys) {
    if (key in src && src[key] !== undefined) {
      out[key] = structuredClone(src[key]);
    }
  }
  return out;
}

export async function resolveRecoveryExecutionBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /**
   * When set, require this accepted trajectory HD to be the recovery retry
   * option (governed-gated). Omit for pure read of recoverable binding.
   */
  readonly decisionId?: string | null;
}): Promise<
  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const recovered = await resolvePostEvidenceRecoveryContext({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!recovered.ok) return recovered;
  if (!recovered.context) {
    return { ok: true, binding: null };
  }
  const recovery = recovered.context;

  if (input.decisionId) {
    const loaded = await input.oa.decisionServices.getHumanDecision.execute({
      decisionId: input.decisionId,
    });
    if (!loaded.ok) {
      return {
        ok: false,
        code: loaded.error.detailCode,
        message: loaded.error.message,
      };
    }
    const decision = loaded.decision;
    if (decision.projectId !== input.projectId) {
      return {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Décision hors projet — binding recovery refusé.",
      };
    }
    if (decision.status !== "accepted") {
      return { ok: true, binding: null };
    }
    const basis = decision.decisionBasis;
    if (!basis || basis.sourceType !== "trajectory_option") {
      return { ok: true, binding: null };
    }
    if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
      // Only "nouvelle tentative gouvernée" activates docs_write successor.
      return { ok: true, binding: null };
    }
  }

  if (!input.oa.executionContractServices) {
    return { ok: true, binding: null };
  }

  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: recovery.executionContractId,
    });
  if (!loaded.ok) {
    return { ok: true, binding: null };
  }
  const contract = loaded.contract;
  if (contract.projectId !== input.projectId) {
    return { ok: true, binding: null };
  }
  if (contract.executionContractId !== recovery.executionContractId) {
    return { ok: true, binding: null };
  }
  if (contract.status !== "failed") {
    // Recovery successor clones a failed EC — other statuses are not this path.
    return { ok: true, binding: null };
  }
  if (!isBoundedDocsWriteContract(contract)) {
    return { ok: true, binding: null };
  }

  const targetPath = asNonEmptyString(contract.inputs?.targetPath);
  if (!targetPath) {
    return {
      ok: false,
      code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
      message:
        "Failed docs_write EC sans inputs.targetPath durable — binding recovery impossible.",
    };
  }

  // Attempt ↔ EC coherence already enforced in RecoveryContext.
  const evidenceRequirements = [...(contract.evidenceRequirements ?? [])];
  const constraints = [...(contract.constraints ?? [])];

  return {
    ok: true,
    binding: {
      kind: "post_evidence_recovery_execution",
      recovery,
      sourceExecutionContractId: contract.executionContractId,
      sourceAttemptId: recovery.attemptId,
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      targetPath,
      scope: contract.scope,
      requiredCapabilities: [...contract.requiredCapabilities],
      evidenceRequirements,
      constraints,
      stopConditions: [...(contract.stopConditions ?? [])],
      expectedOutputs: [...(contract.expectedOutputs ?? [])],
      inputs: cloneDocsWriteInputsForRecoverySuccessor(contract.inputs),
      projectId: contract.projectId,
      cycleInstanceId: contract.cycleInstanceId ?? null,
      sourceSemanticFingerprint: contract.semanticFingerprint ?? null,
      sourceStatus: contract.status,
    },
  };
}
```

### prepareDocsWriteRecoverySuccessor.ts (full)

```ts
/**
 * Checkpoint F / R8 — prepare + resolve a bounded docs_write successor EC from
 * a coherent RecoveryExecutionBinding after recovery trajectory HD.
 *
 * Does NOT mutate HumanDecision. Does NOT Execute. Does NOT create Attempts.
 * Clears wrong pre-exec generic EC via Cancel (existing pre-exec lifecycle).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import {
  boundedDocsWriteM3ResolutionProfile,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  canonicalM3PrepareContractId,
  resolveM3ExecutionContract,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
import {
  resolveRecoveryExecutionBinding,
  type RecoveryExecutionBinding,
} from "./resolveRecoveryExecutionBinding";
import type { AmendedExecutionContractDto } from "./types";

export const RECOVERY_WRONG_GENERIC_CANCEL_REASON =
  "w2_recovery_docs_write_reprepare — clear unconsumed generic fixture EC before docs_write successor" as const;

export type PrepareDocsWriteRecoverySuccessorResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly binding: RecoveryExecutionBinding;
      readonly prepareContractId: string;
      readonly successor: AmendedExecutionContractDto;
      readonly cancelledWrongGenericContractId: string | null;
      readonly reusedFromIdempotency: boolean;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly confirmationRequired: true;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function toSuccessorDto(successor: {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  constraints: readonly string[];
  stopConditions: readonly string[];
  requiredCapabilities: readonly string[];
  reversibility: string;
  semanticFingerprint: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  inspectionDisclosure: AmendedExecutionContractDto["inspectionDisclosure"];
}): AmendedExecutionContractDto {
  return {
    executionContractId: successor.executionContractId,
    version: successor.version,
    status: successor.status,
    action: successor.action,
    target: successor.target,
    scope: successor.scope,
    requiredAuthority: successor.requiredAuthority,
    constraints: [...successor.constraints],
    stopConditions: [...successor.stopConditions],
    requiredCapabilities: [...successor.requiredCapabilities],
    reversibility: successor.reversibility,
    semanticFingerprint: successor.semanticFingerprint,
    supersedesExecutionContractId: successor.supersedesExecutionContractId,
    supersessionReason: successor.supersessionReason,
    inspectionDisclosure: successor.inspectionDisclosure,
  };
}

async function cancelWrongGenericCurrentIfNeeded(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly recoveryDecisionId: string;
  readonly forceLocalAuthority: boolean;
}): Promise<
  | { readonly ok: true; readonly cancelledId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const continuity = await readCurrentGovernedExecutionContinuity({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!continuity.ok) {
    return {
      ok: false,
      code: continuity.code,
      message: continuity.message,
    };
  }
  if (continuity.kind === "none") {
    return { ok: true, cancelledId: null };
  }

  const current = continuity.contract;
  const isDocsWrite =
    current.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    current.target === M4_BOUNDED_DOCS_WRITE_TARGET;
  if (isDocsWrite) {
    return { ok: true, cancelledId: null };
  }

  // Only clear unconsumed wrong generic when it belongs to this recovery HD.
  if (continuity.decisionRef !== input.recoveryDecisionId) {
    return {
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Un contrat pré-exécution courant d'une autre décision bloque le prepare recovery.",
    };
  }

  // Authority must match the wrong generic EC scope (not docs_write).
  const cancelAuthority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope: current.scope,
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:m3-rec-cancel:${current.executionContractId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!cancelAuthority.ok) {
    return {
      ok: false,
      code: cancelAuthority.code,
      message: cancelAuthority.message,
    };
  }

  const cancelled =
    await input.oa.executionContractServices!.cancelExecutionContract.execute({
      executionContractId: current.executionContractId,
      reason: RECOVERY_WRONG_GENERIC_CANCEL_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: cancelAuthority.evidenceId,
      expectedVersion: current.version,
    });
  if (!cancelled.ok) {
    return {
      ok: false,
      code: cancelled.error.detailCode,
      message: cancelled.error.message,
    };
  }
  return { ok: true, cancelledId: current.executionContractId };
}

/**
 * Explicit Pilot PREPARE after recovery trajectory HD (governed retry).
 */
export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
  /** Server/test only — pin base HEAD; never from client. */
  readonly boundedDocsWriteBaseHeadSha?: string;
}): Promise<PrepareDocsWriteRecoverySuccessorResult> {
  const { oa } = input;
  if (!oa.executionContractServices || !oa.decisionServices) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "Services EC / Decision indisponibles.",
    };
  }

  const bound = await resolveRecoveryExecutionBinding({
    oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!bound.ok) return bound;
  if (!bound.binding) {
    return {
      ok: false,
      code: "RECOVERY_EXECUTION_BINDING_REQUIRED",
      message:
        "Aucun RecoveryExecutionBinding docs_write cohérent — prepare recovery refusé.",
    };
  }
  const binding = bound.binding;

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: binding.scope || "studio.gcec.docs_write",
    issuedAt,
    evidenceId: `evd:m3-rec-prep:${input.decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const prepareId = canonicalM3PrepareContractId(input.decisionId);

  // Idempotent reuse: current docs_write already linked to this recovery HD.
  const continuityBefore = await readCurrentGovernedExecutionContinuity({
    oa,
    projectId: input.projectId,
  });
  if (
    continuityBefore.ok &&
    continuityBefore.kind === "active" &&
    continuityBefore.decisionRef === input.decisionId &&
    continuityBefore.contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    continuityBefore.contract.target === M4_BOUNDED_DOCS_WRITE_TARGET
  ) {
    const c = continuityBefore.contract;
    return {
      ok: true,
      decisionId: input.decisionId,
      binding,
      prepareContractId: prepareId,
      successor: {
        executionContractId: c.executionContractId,
        version: c.version,
        status: c.status,
        action: c.action,
        target: c.target,
        scope: c.scope,
        requiredAuthority: c.requiredAuthority,
        constraints: [...c.constraints],
        stopConditions: [...c.stopConditions],
        requiredCapabilities: [...c.requiredCapabilities],
        reversibility: c.reversibility,
        semanticFingerprint: c.semanticFingerprint,
        supersedesExecutionContractId: null,
        supersessionReason: null,
        inspectionDisclosure: c.inspectionDisclosure,
      },
      cancelledWrongGenericContractId: null,
      reusedFromIdempotency: true,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
    };
  }

  const cleared = await cancelWrongGenericCurrentIfNeeded({
    oa,
    projectId: input.projectId,
    recoveryDecisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority === true,
  });
  if (!cleared.ok) return cleared;

  // If prepare already exists (after cancel of wrong generic), resolve path may
  // still be pending — try get + resolve rather than rebuild.
  const existingPrepare =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepareId,
    });

  const evidenceFromSource =
    resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare:
        binding.evidenceRequirements.length > 0
          ? binding.evidenceRequirements
          : [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      constraints: binding.constraints,
    });

  const profile = boundedDocsWriteM3ResolutionProfile();
  const inputs = {
    ...binding.inputs,
    targetPath: binding.targetPath,
  };

  // Unresolved M3 PREPARE shape (PREPARE_ONLY) so resolveM3 can supersede —
  // same pattern as prepareM3FromDecision docs_write path.
  const prepareConstraints = Array.from(
    new Set([
      "PREPARE_ONLY",
      "NO_CURSOR_REAL",
      "NO_ATTEMPT",
      "NO_GATE_D",
      ...binding.constraints.filter(
        (c) =>
          !c.startsWith("FIXTURE_") &&
          c !== "NO_REAL" &&
          c !== "SCOPE_OUT:REAL" &&
          c !== "SCOPE_OUT:CURSOR_REAL" &&
          c !== "NO_ATTEMPT_AT_PREPARE",
      ),
    ]),
  );
  const prepareStops = Array.from(
    new Set([
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      ...binding.stopConditions,
    ]),
  );

  let prepareContract = existingPrepare.ok ? existingPrepare.contract : null;

  if (
    prepareContract &&
    (prepareContract.status === "cancelled" ||
      prepareContract.status === "superseded" ||
      prepareContract.status === "failed" ||
      prepareContract.status === "completed" ||
      prepareContract.status === "executing")
  ) {
    // Terminal / superseded prepare — only reuse via continuity/idempotent path above.
    if (prepareContract.status === "superseded") {
      // Resolve will recover existing successor.
    } else {
      prepareContract = null;
    }
  }

  if (!prepareContract) {
    const built =
      await oa.executionContractServices.buildExecutionContract.execute({
        executionContractId: prepareId,
        projectId: input.projectId,
        cycleInstanceId:
          binding.cycleInstanceId ??
          input.currentContext.activeCycleInstanceId ??
          undefined,
        decisionRefs: [input.decisionId],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: profile.scope ?? "studio.gcec.docs_write",
        inputs,
        expectedOutputs:
          binding.expectedOutputs.length > 0
            ? [...binding.expectedOutputs]
            : undefined,
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        requiredAuthority: "MORRIS",
        constraints: prepareConstraints,
        stopConditions: prepareStops,
        evidenceRequirements: evidenceFromSource,
        reversibility: "reversible",
        // Canonical M3 PREPARE identity — required by resolveM3ExecutionContract.
        idempotencyKey: `idem:m3-prep:${input.decisionId}`,
        correlationId: `cor:m3-rec-prep:${input.decisionId}`,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });

    if (!built.ok) {
      return {
        ok: false,
        code: built.error.detailCode,
        message: built.error.message,
      };
    }

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    prepareContract = validated.contract;
  }

  let sha: string | null = null;
  if (input.boundedDocsWriteBaseHeadSha !== undefined) {
    sha = validateBaseHeadSha(input.boundedDocsWriteBaseHeadSha);
  } else {
    const resolvedSha = await resolveBoundedReadOnlyBaseHeadSha({});
    if (!resolvedSha.ok) {
      return {
        ok: false,
        code: resolvedSha.code,
        message: resolvedSha.message,
      };
    }
    sha = resolvedSha.sha;
  }
  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha server-side invalide — fail-closed avant Confirmation / Gate D.",
    };
  }

  const resolution = {
    ...profile,
    evidenceRequirements: evidenceFromSource,
    inputs: {
      ...(profile.inputs ?? {}),
      ...inputs,
      baseHeadSha: sha,
    },
  };

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: prepareContract.executionContractId,
    expectedOriginalVersion: prepareContract.version,
    resolution,
    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    deps: {
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      executionContractServices: oa.executionContractServices,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: input.forceLocalAuthority === true,
    },
  });
  if (!resolved.ok) {
    return {
      ok: false,
      code: resolved.code,
      message: resolved.message,
    };
  }

  return {
    ok: true,
    decisionId: input.decisionId,
    binding,
    prepareContractId: prepareId,
    successor: toSuccessorDto(resolved.successor),
    cancelledWrongGenericContractId: cleared.cancelledId,
    reusedFromIdempotency: resolved.reusedFromIdempotency,
    executionPerformed: false,
    attemptCreated: false,
    confirmationRequired: true,
  };
}
```

### actions.ts (R8 excerpts)

```
405: * R8 — read RecoveryExecutionBinding for UI (docs_write recovery CTA).
406- * Client sends only projectId + optional decisionId. No path/op injection.
407- */
408-export async function w2ReadRecoveryExecutionBindingAction(input: {
409-  projectId: string;
410-  decisionId?: string | null;
411-}): Promise<
412-  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
413-  | { readonly ok: false; readonly code: string; readonly message: string }
414-> {
415-  const runtime = getRuntimeApplicationService();
416-  if (!runtime.oa) return OA_UNAVAILABLE;
417-  return resolveRecoveryExecutionBinding({
418-    oa: runtime.oa,
419-    projectId: input.projectId,
420-    decisionId: input.decisionId,
421-  });
422-}
423-
424-/**
425- * R8 — prepare bounded docs_write successor from recovery HD + failed EC binding.
426- * Does not accept client path/operation. Cancels wrong generic current if needed.
427- */
428-export async function w2PrepareRecoveryDocsWriteAction(input: {
429-  projectId: string;
430-  decisionId: string;
431-  /** Hostile — ignored. */
432-  targetPath?: unknown;
433-  qualifiedOperationKind?: unknown;
434-  real?: unknown;
435-}): Promise<
436-  | {
437-      readonly ok: true;
438-      readonly contract: AmendedExecutionContractDto;
439-      readonly decisionId: string;
440-      readonly cancelledWrongGenericContractId: string | null;
441-      readonly reusedFromIdempotency: boolean;
442-      readonly f3SemanticOverwrite: false;
443-      readonly executionPerformed: false;
444-      readonly attemptCreated: false;
445-      readonly binding: RecoveryExecutionBinding;
```

### Unified diff artifact

```diff
=== NEW: resolveRecoveryExecutionBinding.ts ===
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
new file mode 100644
index 00000000..1b89b189
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
@@ -0,0 +1,215 @@
+/**
+ * Checkpoint F / R8 — RecoveryExecutionBinding from durable failed docs_write EC.
+ * No new persistence. No parallel catalog. Source of truth = failed EC coherent
+ * with R7 PostEvidenceRecoveryContext (+ optional recovery trajectory HD).
+ */
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import {
+  resolvePostEvidenceRecoveryContext,
+  type PostEvidenceRecoveryContext,
+} from "./resolvePostEvidenceRecoveryContext";
+import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
+
+export type RecoveryExecutionBinding = {
+  readonly kind: "post_evidence_recovery_execution";
+  readonly recovery: PostEvidenceRecoveryContext;
+  readonly sourceExecutionContractId: string;
+  readonly sourceAttemptId: string;
+  readonly action: typeof M4_BOUNDED_DOCS_WRITE_ACTION;
+  readonly target: typeof M4_BOUNDED_DOCS_WRITE_TARGET;
+  readonly targetPath: string;
+  readonly scope: string;
+  readonly requiredCapabilities: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly constraints: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly inputs: Readonly<Record<string, unknown>>;
+  readonly projectId: string;
+  readonly cycleInstanceId: string | null;
+  readonly sourceSemanticFingerprint: string | null;
+  readonly sourceStatus: string;
+};
+
+function asNonEmptyString(value: unknown): string | null {
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
+function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
+  if (contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
+  if (contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
+  if (!contract.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)) {
+    return false;
+  }
+  return true;
+}
+
+/**
+ * Clone durable inputs for a fresh successor — drop stale authority / OCC /
+ * confirmation / attempt bindings; keep business path + content requirements.
+ */
+export function cloneDocsWriteInputsForRecoverySuccessor(
+  inputs: Record<string, unknown> | undefined,
+): Record<string, unknown> {
+  const src = inputs ?? {};
+  const out: Record<string, unknown> = {};
+  const keepKeys = [
+    "targetPath",
+    "targetRepositoryRef",
+    "repositoryRef",
+    "pathAllowlist",
+    "scopeIn",
+    "scopeOut",
+    "createOrModify",
+    "noDelete",
+    "artifactType",
+    "artifactBrief",
+    "contentRequirements",
+    "validationExpectations",
+    "evidenceRequirements",
+    "expectedOutputs",
+    "repositoryIdentity",
+    "repositoryBindingIdentity",
+    "remoteUrl",
+    "defaultBranch",
+    "workingBranch",
+    "pathRoot",
+    "objective",
+    "recommendedProfile",
+    "cycleTypeId",
+    "activatedBlocks",
+  ] as const;
+  for (const key of keepKeys) {
+    if (key in src && src[key] !== undefined) {
+      out[key] = structuredClone(src[key]);
+    }
+  }
+  return out;
+}
+
+export async function resolveRecoveryExecutionBinding(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  /**
+   * When set, require this accepted trajectory HD to be the recovery retry
+   * option (governed-gated). Omit for pure read of recoverable binding.
+   */
+  readonly decisionId?: string | null;
+}): Promise<
+  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const recovered = await resolvePostEvidenceRecoveryContext({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if (!recovered.ok) return recovered;
+  if (!recovered.context) {
+    return { ok: true, binding: null };
+  }
+  const recovery = recovered.context;
+
+  if (input.decisionId) {
+    const loaded = await input.oa.decisionServices.getHumanDecision.execute({
+      decisionId: input.decisionId,
+    });
+    if (!loaded.ok) {
+      return {
+        ok: false,
+        code: loaded.error.detailCode,
+        message: loaded.error.message,
+      };
+    }
+    const decision = loaded.decision;
+    if (decision.projectId !== input.projectId) {
+      return {
+        ok: false,
+        code: "PROJECT_MISMATCH",
+        message: "Décision hors projet — binding recovery refusé.",
+      };
+    }
+    if (decision.status !== "accepted") {
+      return { ok: true, binding: null };
+    }
+    const basis = decision.decisionBasis;
+    if (!basis || basis.sourceType !== "trajectory_option") {
+      return { ok: true, binding: null };
+    }
+    if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
+      // Only "nouvelle tentative gouvernée" activates docs_write successor.
+      return { ok: true, binding: null };
+    }
+  }
+
+  if (!input.oa.executionContractServices) {
+    return { ok: true, binding: null };
+  }
+
+  const loaded =
+    await input.oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: recovery.executionContractId,
+    });
+  if (!loaded.ok) {
+    return { ok: true, binding: null };
+  }
+  const contract = loaded.contract;
+  if (contract.projectId !== input.projectId) {
+    return { ok: true, binding: null };
+  }
+  if (contract.executionContractId !== recovery.executionContractId) {
+    return { ok: true, binding: null };
+  }
+  if (contract.status !== "failed") {
+    // Recovery successor clones a failed EC — other statuses are not this path.
+    return { ok: true, binding: null };
+  }
+  if (!isBoundedDocsWriteContract(contract)) {
+    return { ok: true, binding: null };
+  }
+
+  const targetPath = asNonEmptyString(contract.inputs?.targetPath);
+  if (!targetPath) {
+    return {
+      ok: false,
+      code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
+      message:
+        "Failed docs_write EC sans inputs.targetPath durable — binding recovery impossible.",
+    };
+  }
+
+  // Attempt ↔ EC coherence already enforced in RecoveryContext.
+  const evidenceRequirements = [...(contract.evidenceRequirements ?? [])];
+  const constraints = [...(contract.constraints ?? [])];
+
+  return {
+    ok: true,
+    binding: {
+      kind: "post_evidence_recovery_execution",
+      recovery,
+      sourceExecutionContractId: contract.executionContractId,
+      sourceAttemptId: recovery.attemptId,
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      targetPath,
+      scope: contract.scope,
+      requiredCapabilities: [...contract.requiredCapabilities],
+      evidenceRequirements,
+      constraints,
+      stopConditions: [...(contract.stopConditions ?? [])],
+      expectedOutputs: [...(contract.expectedOutputs ?? [])],
+      inputs: cloneDocsWriteInputsForRecoverySuccessor(contract.inputs),
+      projectId: contract.projectId,
+      cycleInstanceId: contract.cycleInstanceId ?? null,
+      sourceSemanticFingerprint: contract.semanticFingerprint ?? null,
+      sourceStatus: contract.status,
+    },
+  };
+}
=== NEW: prepareDocsWriteRecoverySuccessor.ts ===
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
new file mode 100644
index 00000000..6b14b02d
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
@@ -0,0 +1,466 @@
+/**
+ * Checkpoint F / R8 — prepare + resolve a bounded docs_write successor EC from
+ * a coherent RecoveryExecutionBinding after recovery trajectory HD.
+ *
+ * Does NOT mutate HumanDecision. Does NOT Execute. Does NOT create Attempts.
+ * Clears wrong pre-exec generic EC via Cancel (existing pre-exec lifecycle).
+ */
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import {
+  resolveBoundedReadOnlyBaseHeadSha,
+  validateBaseHeadSha,
+} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
+import {
+  boundedDocsWriteM3ResolutionProfile,
+  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
+  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
+} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import {
+  canonicalM3PrepareContractId,
+  resolveM3ExecutionContract,
+} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
+import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
+import {
+  resolveRecoveryExecutionBinding,
+  type RecoveryExecutionBinding,
+} from "./resolveRecoveryExecutionBinding";
+import type { AmendedExecutionContractDto } from "./types";
+
+export const RECOVERY_WRONG_GENERIC_CANCEL_REASON =
+  "w2_recovery_docs_write_reprepare — clear unconsumed generic fixture EC before docs_write successor" as const;
+
+export type PrepareDocsWriteRecoverySuccessorResult =
+  | {
+      readonly ok: true;
+      readonly decisionId: string;
+      readonly binding: RecoveryExecutionBinding;
+      readonly prepareContractId: string;
+      readonly successor: AmendedExecutionContractDto;
+      readonly cancelledWrongGenericContractId: string | null;
+      readonly reusedFromIdempotency: boolean;
+      readonly executionPerformed: false;
+      readonly attemptCreated: false;
+      readonly confirmationRequired: true;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+function toSuccessorDto(successor: {
+  executionContractId: string;
+  version: number;
+  status: string;
+  action: string;
+  target: string;
+  scope: string;
+  requiredAuthority: string;
+  constraints: readonly string[];
+  stopConditions: readonly string[];
+  requiredCapabilities: readonly string[];
+  reversibility: string;
+  semanticFingerprint: string;
+  supersedesExecutionContractId: string;
+  supersessionReason: string;
+  inspectionDisclosure: AmendedExecutionContractDto["inspectionDisclosure"];
+}): AmendedExecutionContractDto {
+  return {
+    executionContractId: successor.executionContractId,
+    version: successor.version,
+    status: successor.status,
+    action: successor.action,
+    target: successor.target,
+    scope: successor.scope,
+    requiredAuthority: successor.requiredAuthority,
+    constraints: [...successor.constraints],
+    stopConditions: [...successor.stopConditions],
+    requiredCapabilities: [...successor.requiredCapabilities],
+    reversibility: successor.reversibility,
+    semanticFingerprint: successor.semanticFingerprint,
+    supersedesExecutionContractId: successor.supersedesExecutionContractId,
+    supersessionReason: successor.supersessionReason,
+    inspectionDisclosure: successor.inspectionDisclosure,
+  };
+}
+
+async function cancelWrongGenericCurrentIfNeeded(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly recoveryDecisionId: string;
+  readonly forceLocalAuthority: boolean;
+}): Promise<
+  | { readonly ok: true; readonly cancelledId: string | null }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const continuity = await readCurrentGovernedExecutionContinuity({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if (!continuity.ok) {
+    return {
+      ok: false,
+      code: continuity.code,
+      message: continuity.message,
+    };
+  }
+  if (continuity.kind === "none") {
+    return { ok: true, cancelledId: null };
+  }
+
+  const current = continuity.contract;
+  const isDocsWrite =
+    current.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
+    current.target === M4_BOUNDED_DOCS_WRITE_TARGET;
+  if (isDocsWrite) {
+    return { ok: true, cancelledId: null };
+  }
+
+  // Only clear unconsumed wrong generic when it belongs to this recovery HD.
+  if (continuity.decisionRef !== input.recoveryDecisionId) {
+    return {
+      ok: false,
+      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
+      message:
+        "Un contrat pré-exécution courant d'une autre décision bloque le prepare recovery.",
+    };
+  }
+
+  // Authority must match the wrong generic EC scope (not docs_write).
+  const cancelAuthority = registerLocalPiloteAuthority({
+    authorityResolver: input.oa.authorityResolver,
+    scope: current.scope,
+    issuedAt: input.oa.clock.nowIso(),
+    evidenceId: `evd:m3-rec-cancel:${current.executionContractId}`,
+    forceEnable: input.forceLocalAuthority === true,
+  });
+  if (!cancelAuthority.ok) {
+    return {
+      ok: false,
+      code: cancelAuthority.code,
+      message: cancelAuthority.message,
+    };
+  }
+
+  const cancelled =
+    await input.oa.executionContractServices!.cancelExecutionContract.execute({
+      executionContractId: current.executionContractId,
+      reason: RECOVERY_WRONG_GENERIC_CANCEL_REASON,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: cancelAuthority.evidenceId,
+      expectedVersion: current.version,
+    });
+  if (!cancelled.ok) {
+    return {
+      ok: false,
+      code: cancelled.error.detailCode,
+      message: cancelled.error.message,
+    };
+  }
+  return { ok: true, cancelledId: current.executionContractId };
+}
+
+/**
+ * Explicit Pilot PREPARE after recovery trajectory HD (governed retry).
+ */
+export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly currentContext: F2ContextSnapshot;
+  readonly forceLocalAuthority?: boolean;
+  /** Server/test only — pin base HEAD; never from client. */
+  readonly boundedDocsWriteBaseHeadSha?: string;
+}): Promise<PrepareDocsWriteRecoverySuccessorResult> {
+  const { oa } = input;
+  if (!oa.executionContractServices || !oa.decisionServices) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services EC / Decision indisponibles.",
+    };
+  }
+
+  const bound = await resolveRecoveryExecutionBinding({
+    oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+  });
+  if (!bound.ok) return bound;
+  if (!bound.binding) {
+    return {
+      ok: false,
+      code: "RECOVERY_EXECUTION_BINDING_REQUIRED",
+      message:
+        "Aucun RecoveryExecutionBinding docs_write cohérent — prepare recovery refusé.",
+    };
+  }
+  const binding = bound.binding;
+
+  const issuedAt = oa.clock.nowIso();
+  const authority = registerLocalPiloteAuthority({
+    authorityResolver: oa.authorityResolver,
+    scope: binding.scope || "studio.gcec.docs_write",
+    issuedAt,
+    evidenceId: `evd:m3-rec-prep:${input.decisionId}`,
+    forceEnable: input.forceLocalAuthority === true,
+  });
+  if (!authority.ok) {
+    return {
+      ok: false,
+      code: authority.code,
+      message: authority.message,
+    };
+  }
+
+  const prepareId = canonicalM3PrepareContractId(input.decisionId);
+
+  // Idempotent reuse: current docs_write already linked to this recovery HD.
+  const continuityBefore = await readCurrentGovernedExecutionContinuity({
+    oa,
+    projectId: input.projectId,
+  });
+  if (
+    continuityBefore.ok &&
+    continuityBefore.kind === "active" &&
+    continuityBefore.decisionRef === input.decisionId &&
+    continuityBefore.contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
+    continuityBefore.contract.target === M4_BOUNDED_DOCS_WRITE_TARGET
+  ) {
+    const c = continuityBefore.contract;
+    return {
+      ok: true,
+      decisionId: input.decisionId,
+      binding,
+      prepareContractId: prepareId,
+      successor: {
+        executionContractId: c.executionContractId,
+        version: c.version,
+        status: c.status,
+        action: c.action,
+        target: c.target,
+        scope: c.scope,
+        requiredAuthority: c.requiredAuthority,
+        constraints: [...c.constraints],
+        stopConditions: [...c.stopConditions],
+        requiredCapabilities: [...c.requiredCapabilities],
+        reversibility: c.reversibility,
+        semanticFingerprint: c.semanticFingerprint,
+        supersedesExecutionContractId: null,
+        supersessionReason: null,
+        inspectionDisclosure: c.inspectionDisclosure,
+      },
+      cancelledWrongGenericContractId: null,
+      reusedFromIdempotency: true,
+      executionPerformed: false,
+      attemptCreated: false,
+      confirmationRequired: true,
+    };
+  }
+
+  const cleared = await cancelWrongGenericCurrentIfNeeded({
+    oa,
+    projectId: input.projectId,
+    recoveryDecisionId: input.decisionId,
+    forceLocalAuthority: input.forceLocalAuthority === true,
+  });
+  if (!cleared.ok) return cleared;
+
+  // If prepare already exists (after cancel of wrong generic), resolve path may
+  // still be pending — try get + resolve rather than rebuild.
+  const existingPrepare =
+    await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prepareId,
+    });
+
+  const evidenceFromSource =
+    resolveDocsWriteEvidenceRequirementsForBoundedProfile({
+      fromPrepare:
+        binding.evidenceRequirements.length > 0
+          ? binding.evidenceRequirements
+          : [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+      constraints: binding.constraints,
+    });
+
+  const profile = boundedDocsWriteM3ResolutionProfile();
+  const inputs = {
+    ...binding.inputs,
+    targetPath: binding.targetPath,
+  };
+
+  // Unresolved M3 PREPARE shape (PREPARE_ONLY) so resolveM3 can supersede —
+  // same pattern as prepareM3FromDecision docs_write path.
+  const prepareConstraints = Array.from(
+    new Set([
+      "PREPARE_ONLY",
+      "NO_CURSOR_REAL",
+      "NO_ATTEMPT",
+      "NO_GATE_D",
+      ...binding.constraints.filter(
+        (c) =>
+          !c.startsWith("FIXTURE_") &&
+          c !== "NO_REAL" &&
+          c !== "SCOPE_OUT:REAL" &&
+          c !== "SCOPE_OUT:CURSOR_REAL" &&
+          c !== "NO_ATTEMPT_AT_PREPARE",
+      ),
+    ]),
+  );
+  const prepareStops = Array.from(
+    new Set([
+      "AUTHORITY_DENIED",
+      "CONTEXT_STALE",
+      "DECISION_NOT_CURRENT",
+      ...binding.stopConditions,
+    ]),
+  );
+
+  let prepareContract = existingPrepare.ok ? existingPrepare.contract : null;
+
+  if (
+    prepareContract &&
+    (prepareContract.status === "cancelled" ||
+      prepareContract.status === "superseded" ||
+      prepareContract.status === "failed" ||
+      prepareContract.status === "completed" ||
+      prepareContract.status === "executing")
+  ) {
+    // Terminal / superseded prepare — only reuse via continuity/idempotent path above.
+    if (prepareContract.status === "superseded") {
+      // Resolve will recover existing successor.
+    } else {
+      prepareContract = null;
+    }
+  }
+
+  if (!prepareContract) {
+    const built =
+      await oa.executionContractServices.buildExecutionContract.execute({
+        executionContractId: prepareId,
+        projectId: input.projectId,
+        cycleInstanceId:
+          binding.cycleInstanceId ??
+          input.currentContext.activeCycleInstanceId ??
+          undefined,
+        decisionRefs: [input.decisionId],
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: profile.scope ?? "studio.gcec.docs_write",
+        inputs,
+        expectedOutputs:
+          binding.expectedOutputs.length > 0
+            ? [...binding.expectedOutputs]
+            : undefined,
+        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+        requiredAuthority: "MORRIS",
+        constraints: prepareConstraints,
+        stopConditions: prepareStops,
+        evidenceRequirements: evidenceFromSource,
+        reversibility: "reversible",
+        // Canonical M3 PREPARE identity — required by resolveM3ExecutionContract.
+        idempotencyKey: `idem:m3-prep:${input.decisionId}`,
+        correlationId: `cor:m3-rec-prep:${input.decisionId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: authority.evidenceId,
+      });
+
+    if (!built.ok) {
+      return {
+        ok: false,
+        code: built.error.detailCode,
+        message: built.error.message,
+      };
+    }
+
+    const validated =
+      await oa.executionContractServices.validateExecutionContract.execute({
+        executionContractId: built.contract.executionContractId,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: authority.evidenceId,
+      });
+    if (!validated.ok) {
+      return {
+        ok: false,
+        code: validated.error.detailCode,
+        message: validated.error.message,
+      };
+    }
+    prepareContract = validated.contract;
+  }
+
+  let sha: string | null = null;
+  if (input.boundedDocsWriteBaseHeadSha !== undefined) {
+    sha = validateBaseHeadSha(input.boundedDocsWriteBaseHeadSha);
+  } else {
+    const resolvedSha = await resolveBoundedReadOnlyBaseHeadSha({});
+    if (!resolvedSha.ok) {
+      return {
+        ok: false,
+        code: resolvedSha.code,
+        message: resolvedSha.message,
+      };
+    }
+    sha = resolvedSha.sha;
+  }
+  if (!sha) {
+    return {
+      ok: false,
+      code: "BASE_HEAD_SHA_INVALID",
+      message:
+        "baseHeadSha server-side invalide — fail-closed avant Confirmation / Gate D.",
+    };
+  }
+
+  const resolution = {
+    ...profile,
+    evidenceRequirements: evidenceFromSource,
+    inputs: {
+      ...(profile.inputs ?? {}),
+      ...inputs,
+      baseHeadSha: sha,
+    },
+  };
+
+  const resolved = await resolveM3ExecutionContract({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    originalExecutionContractId: prepareContract.executionContractId,
+    expectedOriginalVersion: prepareContract.version,
+    resolution,
+    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+    deps: {
+      decisionServices: oa.decisionServices,
+      authorityResolver: oa.authorityResolver,
+      executionContractServices: oa.executionContractServices,
+      nowIso: () => oa.clock.nowIso(),
+      forceM3Authority: input.forceLocalAuthority === true,
+    },
+  });
+  if (!resolved.ok) {
+    return {
+      ok: false,
+      code: resolved.code,
+      message: resolved.message,
+    };
+  }
+
+  return {
+    ok: true,
+    decisionId: input.decisionId,
+    binding,
+    prepareContractId: prepareId,
+    successor: toSuccessorDto(resolved.successor),
+    cancelledWrongGenericContractId: cleared.cancelledId,
+    reusedFromIdempotency: resolved.reusedFromIdempotency,
+    executionPerformed: false,
+    attemptCreated: false,
+    confirmationRequired: true,
+  };
+}
=== NEW: checkpointF.recoveryDocsWriteSuccessor.d0.test.ts ===
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
new file mode 100644
index 00000000..e7f53205
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
@@ -0,0 +1,568 @@
+/**
+ * Checkpoint F / R8 — recovery docs_write successor routing.
+ * ZERO REAL / ZERO Execute / ZERO new campaign HD mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import { prepareDocsWriteRecoverySuccessorFromDecision } from "@/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  cloneDocsWriteInputsForRecoverySuccessor,
+  resolveRecoveryExecutionBinding,
+} from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
+import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import {
+  BOUNDED_OPTION_REF,
+  CLARIFY_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
+import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { w3bEvidenceIdentity } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { w3cRecommendationEpistemicId } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { serializeW3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import type { W3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+
+const TARGET_PATH =
+  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+  setConversationProviderForTests(null);
+});
+
+afterEach(() => {
+  cleanupW2TempDirs();
+  setConversationProviderForTests(null);
+  vi.restoreAllMocks();
+});
+
+async function proposeAndDecideGoverned(oa: RuntimeOaStack, projectId: string) {
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  if (!qualification.ok) throw new Error("qual");
+  const proposed = await proposeTrajectoryOptions({
+    oa,
+    projectId,
+    ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
+  });
+  if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
+  const decided = await decideTrajectory({
+    oa,
+    projectId,
+    optionSetRef: proposed.optionSetRef,
+    options: proposed.options,
+    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+    selectedOptionRef: GOVERNED_OPTION_REF,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
+    forceLocalAuthority: true,
+  });
+  if (!decided.ok) throw new Error(`decide: ${decided.code}`);
+  return { proposed, decided, decisionId: decided.decision.decisionId };
+}
+
+describe("R8 — pure helpers", () => {
+  it("cloneDocsWriteInputs keeps path / content, drops stale keys", () => {
+    const cloned = cloneDocsWriteInputsForRecoverySuccessor({
+      targetPath: TARGET_PATH,
+      targetRepositoryRef: "mcleland147/sfia-workspace",
+      contentRequirements: ["markdown"],
+      baseHeadSha: "deadbeef",
+      confirmationRef: "cfm:stale",
+      attemptId: "xat:stale",
+    });
+    expect(cloned.targetPath).toBe(TARGET_PATH);
+    expect(cloned.targetRepositoryRef).toBe("mcleland147/sfia-workspace");
+    expect(cloned.contentRequirements).toEqual(["markdown"]);
+    expect(cloned.baseHeadSha).toBeUndefined();
+    expect(cloned.confirmationRef).toBeUndefined();
+    expect(cloned.attemptId).toBeUndefined();
+  });
+});
+
+async function seedFailedDocsWriteEpisode(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  cycleInstanceId?: string | null;
+  decisionId: string;
+}) {
+  const { oa, projectId, decisionId } = input;
+  const attemptId = `xat:w3a:r8-${Math.random().toString(16).slice(2, 10)}`;
+  const ecId = `xct:m3-ev:r8-${Math.random().toString(16).slice(2, 10)}`;
+  const ids = w3bEvidenceIdentity(attemptId);
+
+  const authority = registerLocalPiloteAuthority({
+    authorityResolver: oa.authorityResolver,
+    scope: "studio.gcec.docs_write",
+    issuedAt: oa.clock.nowIso(),
+    evidenceId: `evd:r8-seed:${ecId}`,
+    forceEnable: true,
+  });
+  if (!authority.ok) {
+    throw new Error(`authority: ${authority.code}`);
+  }
+
+  const built = await oa.executionContractServices!.buildExecutionContract.execute({
+    executionContractId: ecId,
+    projectId,
+    cycleInstanceId: input.cycleInstanceId ?? undefined,
+    decisionRefs: [decisionId],
+    action: M4_BOUNDED_DOCS_WRITE_ACTION,
+    target: M4_BOUNDED_DOCS_WRITE_TARGET,
+    scope: "studio.gcec.docs_write",
+    inputs: {
+      targetPath: TARGET_PATH,
+      targetRepositoryRef: "mcleland147/sfia-workspace",
+      repositoryRef: "mcleland147/sfia-workspace",
+      pathAllowlist: ["projects/sfia-studio/.sandbox/"],
+      contentRequirements: ["markdown heading", "acceptance criteria"],
+    },
+    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+    requiredAuthority: "MORRIS",
+    constraints: [
+      "BOUNDED DOCS-WRITE",
+      "PATH_ALLOWLIST_ONLY",
+      "TEXT_DOCS_ONLY",
+      "NO_DELETE",
+      "NO_COMMIT",
+      "NO_GIT_REMOTE",
+      "NO_PUSH",
+      "NO_PR",
+      "NO_MERGE",
+      "GATE D REQUIRED",
+      "NO WILDCARD",
+      "PREPARE_ONLY",
+    ],
+    stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE", "DECISION_NOT_CURRENT"],
+    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+    reversibility: "reversible",
+    idempotencyKey: `idem:r8-failed-${ecId}`,
+    correlationId: `cor:r8-failed-${ecId}`,
+    actor: LOCAL_PILOTE_ACTOR,
+    authorityEvidenceId: authority.evidenceId,
+  });
+  if (!built.ok) {
+    throw new Error(
+      `build failed: ${built.error.detailCode} ${built.error.message ?? ""}`,
+    );
+  }
+
+  const failedContract = {
+    ...built.contract,
+    status: "failed" as const,
+    version: built.contract.version + 1,
+  };
+  await oa.executionContractServices!.contracts.save(failedContract);
+
+  // Minimal Attempt so RecoveryContext coherence can load it.
+  const now = oa.clock.nowIso();
+  const attempt = {
+    schemaVersion: "0.2.0-oa" as const,
+    attemptId,
+    executionContractId: ecId,
+    executionContractVersion: failedContract.version,
+    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+    status: "failed" as const,
+    idempotencyKey: `idem:att:${attemptId}`,
+    correlationId: `cor:att:${attemptId}`,
+    version: 1,
+    createdAt: now,
+    failedAt: now,
+    launchedAt: now,
+    startedAt: now,
+    stopReason: "REAL_PROCESS_NONZERO_EXIT",
+    irreversibleEffectsPossible: true,
+    processDiagnostic: {
+      kind: "process_failure_diagnostic" as const,
+      realProcessInvoked: true,
+      boundaryProofMode: "cursor_real" as const,
+      exitCode: 1,
+      stderrExcerpt: "seed fail",
+      authoritativeBusinessEvidence: false,
+    },
+    provenance: {
+      schemaVersion: "0.1.0-oa" as const,
+      provenanceRecordId: `prv:${attemptId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      source: "system" as const,
+      timestamp: now,
+      correlationId: `cor:att:${attemptId}`,
+    },
+  };
+  await oa.executionAttemptServices!.attempts.create(attempt as never);
+
+  // Evidence + RB via materialize; seal W3C recover with canonical payload schema.
+  const w3cPayload: W3cRecommendationPayload = {
+    kind: "recover",
+    headline: "Échec docs_write — recovery",
+    rationale: "Attempt failed; Evidence available; no business success.",
+    nextStep: "recovery_diagnose_or_replan",
+    requiresHumanDecision: true,
+    authority: "none",
+    gateConsumed: false,
+    decisionCreated: false,
+    attemptAutoLaunchNextCycle: false,
+    recommendNextGateStatus: null,
+    nextActionCode: null,
+    evidenceId: ids.evidenceId,
+    attemptId,
+    reviewBundleId: ids.reviewBundleId,
+    claimEvaluationId: null,
+    productOutcome: "FAIL",
+    analysisText: null,
+    analysisUnavailableReason: "test_seed",
+    analysisProviderId: null,
+    noraInvoked: false,
+    lpsVersion: null,
+  };
+
+  const materialized = await materializeProductOutcomeFromAttempt({
+    oa,
+    projectId,
+    attemptId,
+  });
+  if (!materialized.ok) {
+    throw new Error(
+      `R8 seed materialize failed: ${materialized.code} ${materialized.message}`,
+    );
+  }
+
+  const recoveredAfterMat = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId,
+  });
+  if (!recoveredAfterMat.ok || !recoveredAfterMat.context) {
+    const epistemicId = w3cRecommendationEpistemicId(ids.evidenceId);
+    await oa.cycleServices!.updateEpistemicState.execute({
+      projectId,
+      items: [
+        {
+          epistemicItemId: epistemicId,
+          type: "Recommendation",
+          statement: serializeW3cRecommendationPayload(w3cPayload),
+          status: "active",
+          source: `w3c-post-evidence:${ids.evidenceId}`,
+          relatedObjects: [
+            projectId,
+            attemptId,
+            ids.evidenceId,
+            ids.reviewBundleId,
+            ecId,
+          ],
+        },
+      ],
+      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      correlationId: `cor:w3c-seed:${attemptId}`,
+    });
+  }
+
+  const recovered = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId,
+  });
+  if (!recovered.ok || !recovered.context) {
+    throw new Error("R8 seed: RecoveryContext unavailable after W3C seal");
+  }
+
+  return {
+    attemptId,
+    ecId,
+    evidenceId: ids.evidenceId,
+    reviewBundleId: ids.reviewBundleId,
+  };
+}
+
+describe("R8 — RecoveryExecutionBinding + prepare successor", () => {
+  it("T1 — failed docs_write + recovery → binding rehydrates action/target/path", async () => {
+    const db = tempProductDbPath("r8-t1.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t1" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "t1" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
+    await seedFailedDocsWriteEpisode({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId,
+    });
+
+    const recovered = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(recovered.ok && recovered.context).toBeTruthy();
+    if (!recovered.ok || !recovered.context) return;
+
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok || !bound.binding) {
+      expect(bound.ok && bound.binding).toBeTruthy();
+      return;
+    }
+    expect(bound.binding.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(bound.binding.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(bound.binding.targetPath).toBe(TARGET_PATH);
+    expect(bound.binding.requiredCapabilities).toContain(
+      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+    );
+  });
+
+  it("T2 — hostile project → no binding", async () => {
+    const db = tempProductDbPath("r8-t2.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t2" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "t2" });
+    const { decisionId } = await proposeAndDecideGoverned(
+      runtime.oa!,
+      seeded.projectId,
+    );
+    await seedFailedDocsWriteEpisode({
+      oa: runtime.oa!,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId,
+    });
+    const bound = await resolveRecoveryExecutionBinding({
+      oa: runtime.oa!,
+      projectId: "prj:hostile-other",
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    expect(bound.binding).toBeNull();
+  });
+
+  it("T3 — ProjectTrajectory without recovery keeps generic W3-A path", async () => {
+    const db = tempProductDbPath("r8-t3.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t3" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "t3" });
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId: seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.options.map((o) => o.optionRef)).toEqual([
+      GOVERNED_OPTION_REF,
+      BOUNDED_OPTION_REF,
+      CLARIFY_OPTION_REF,
+    ]);
+    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok && bound.binding === null).toBe(true);
+  });
+});
+
+describe("R8 — prepare recovery docs_write successor (durable)", () => {
+  async function authorizeAndFailDocsWriteViaFixture(suffix: string) {
+    const db = tempProductDbPath(`r8-prep-${suffix}.sqlite`);
+    const runtime = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: `r8p${suffix}`,
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix });
+    const oa = runtime.oa!;
+
+    // Seed decision for failed EC lineage, then fail episode, then recovery HD.
+    const seedDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const seededFail = await seedFailedDocsWriteEpisode({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId: seedDecide.decisionId,
+    });
+
+    let recovered = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: seeded.projectId,
+    });
+    if (!recovered.ok || !recovered.context) {
+      throw new Error("RecoveryContext not available for R8 prepare test");
+    }
+
+    const recoveryDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+    expect(recoveryDecide.proposed.options[0]!.label).toMatch(
+      /nouvelle tentative/i,
+    );
+
+    return {
+      oa,
+      seeded,
+      db,
+      runtime,
+      decisionId: recoveryDecide.decisionId,
+      sourceEcId: seededFail.ecId,
+      attemptId: seededFail.attemptId,
+    };
+  }
+
+  it("T5–T12 — prepare successor docs_write; cancel wrong generic; no Attempt", async () => {
+    const ctx = await authorizeAndFailDocsWriteViaFixture("t5");
+    const { oa, seeded, decisionId, sourceEcId } = ctx;
+
+    // Create wrong generic EC as current (simulates campaign dead-end).
+    const context = await currentF2Context(ctx.runtime, seeded.projectId);
+    const wrong = await prepareExecutionContractFromW2Decision({
+      oa,
+      projectId: seeded.projectId,
+      decisionId,
+      currentContext: context,
+      qualifiedOperationKind: "generate-temporary-artifact",
+      forceLocalAuthority: true,
+    });
+    expect(wrong.ok).toBe(true);
+    if (!wrong.ok) return;
+    expect(wrong.contract.action).toContain("generate-temporary-artifact");
+
+    const attemptsBefore =
+      await oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: sourceEcId,
+      });
+    const countBefore = attemptsBefore.ok ? attemptsBefore.attempts.length : 0;
+
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa,
+      projectId: seeded.projectId,
+      decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: "a".repeat(40),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+
+    expect(prepared.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(prepared.successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(prepared.successor.requiredCapabilities).toContain(
+      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+    );
+    expect(prepared.cancelledWrongGenericContractId).toBe(
+      wrong.contract.executionContractId,
+    );
+    expect(prepared.executionPerformed).toBe(false);
+    expect(prepared.attemptCreated).toBe(false);
+
+    const successorLoaded =
+      await oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: prepared.successor.executionContractId,
+      });
+    expect(successorLoaded.ok).toBe(true);
+    if (!successorLoaded.ok) return;
+    expect(successorLoaded.contract.inputs?.targetPath).toBe(TARGET_PATH);
+    expect(successorLoaded.contract.evidenceRequirements).toContain(
+      "evreq:docs_write_artifact",
+    );
+    for (const c of ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"]) {
+      expect(successorLoaded.contract.constraints).toContain(c);
+    }
+    expect(successorLoaded.contract.confirmationRef).toBeUndefined();
+    expect(successorLoaded.contract.status).not.toBe("failed");
+
+    const wrongAfter =
+      await oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: wrong.contract.executionContractId,
+      });
+    expect(wrongAfter.ok).toBe(true);
+    if (!wrongAfter.ok) return;
+    expect(wrongAfter.contract.status).toBe("cancelled");
+
+    const sourceAfter =
+      await oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: sourceEcId,
+      });
+    expect(sourceAfter.ok).toBe(true);
+    if (!sourceAfter.ok) return;
+    expect(sourceAfter.contract.status).toBe("failed");
+
+    const attemptsAfter =
+      await oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: sourceEcId,
+      });
+    expect(attemptsAfter.ok).toBe(true);
+    if (!attemptsAfter.ok) return;
+    expect(attemptsAfter.attempts.length).toBe(countBefore);
+
+    // T13/T14 idempotent second prepare
+    const again = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa,
+      projectId: seeded.projectId,
+      decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: "a".repeat(40),
+    });
+    expect(again.ok).toBe(true);
+    if (!again.ok) return;
+    expect(again.successor.executionContractId).toBe(
+      prepared.successor.executionContractId,
+    );
+    expect(again.reusedFromIdempotency).toBe(true);
+  });
+
+  it("T10 restart — same current recovery docs_write EC", async () => {
+    const ctx = await authorizeAndFailDocsWriteViaFixture("t10");
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: "b".repeat(40),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const successorId = prepared.successor.executionContractId;
+
+    const runtimeB = bootW2Runtime({
+      productDbPath: ctx.db,
+      idPrefix: "r8t10b",
+    });
+    const oaB = runtimeB.oa!;
+    const continuity = await oaB.executionContractServices!.getExecutionContract.execute(
+      { executionContractId: successorId },
+    );
+    expect(continuity.ok).toBe(true);
+    if (!continuity.ok) return;
+    expect(continuity.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(continuity.contract.inputs?.targetPath).toBe(TARGET_PATH);
+  });
+});
=== MOD: actions.ts (R8 hunks) ===
15- import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
16- import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
17- import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
18:+import { prepareDocsWriteRecoverySuccessorFromDecision } from "./prepareDocsWriteRecoverySuccessor";
19:+import { resolveRecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
20- import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
21- import { readW2ProjectHistory } from "./projectHistory";
22- import { resolveW2QualificationInputs } from "./qualificationInputs";
--
31-   ProposeTrajectoryOptionsResult,
32- } from "./types";
33- import type { ReadW2ProjectHistoryResult } from "./projectHistory";
34:+import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
35-
36- const OA_UNAVAILABLE = {
37-   ok: false as const,
--
85- }
86-
87-+/**
88:+ * R8 — read RecoveryExecutionBinding for UI (docs_write recovery CTA).
89-+ * Client sends only projectId + optional decisionId. No path/op injection.
90-+ */
91:+export async function w2ReadRecoveryExecutionBindingAction(input: {
92-+  projectId: string;
93-+  decisionId?: string | null;
94-+}): Promise<
95:+  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
96-+  | { readonly ok: false; readonly code: string; readonly message: string }
97-+> {
98-+  const runtime = getRuntimeApplicationService();
99-+  if (!runtime.oa) return OA_UNAVAILABLE;
100:+  return resolveRecoveryExecutionBinding({
101-+    oa: runtime.oa,
102-+    projectId: input.projectId,
103-+    decisionId: input.decisionId,
--
105-+}
106-+
107-+/**
108:+ * R8 — prepare bounded docs_write successor from recovery HD + failed EC binding.
109-+ * Does not accept client path/operation. Cancels wrong generic current if needed.
110-+ */
111:+export async function w2PrepareRecoveryDocsWriteAction(input: {
112-+  projectId: string;
113-+  decisionId: string;
114-+  /** Hostile — ignored. */
--
125-+      readonly f3SemanticOverwrite: false;
126-+      readonly executionPerformed: false;
127-+      readonly attemptCreated: false;
128:+      readonly binding: RecoveryExecutionBinding;
129-+    }
130-+  | { readonly ok: false; readonly code: string; readonly message: string }
131-+> {
--
141-+    return {
142-+      ok: false,
143-+      code: "PROJECT_NOT_FOUND",
144:+      message: "Projet ou LPS introuvable pour la préparation recovery.",
145-+    };
146-+  }
147-+
148:+  const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
149-+    oa: runtime.oa,
150-+    projectId: input.projectId,
151-+    decisionId: input.decisionId,
=== MOD: TrajectorySurface.tsx (R8-related) ===
15-   w2MaterializeProductOutcomeAction,
16-   w2PrepareExecutionContractAction,
17:+  w2PrepareRecoveryDocsWriteAction,
18-   w2ProposeTrajectoryOptionsAction,
19-   w2ReadActiveDecisionSubjectAction,
20-   w2ReadCurrentGovernedExecutionContinuityAction,
21:+  w2ReadRecoveryExecutionBindingAction,
22-   w2RehydrateProductOutcomeAction,
23-+  w2RematerializeDocsWriteEvidenceAction,
24- } from "@/features/project-assistant/w2/actions";
25-+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
26:+import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
27- import {
28-   projectAssistantApprovePreCycleCandidateTrajectoryAction,
--
32-   const [qualifiedOperationKind, setQualifiedOperationKind] =
33-     useState<QualifiedOperationKind | null>(null);
34:+  const [recoveryBinding, setRecoveryBinding] =
35:+    useState<RecoveryExecutionBinding | null>(null);
36-
37-   /**
--
41-   const proposalBackedPrepareBlocked =
42-     proposalPursue && decision?.decisionBasisLinked !== true;
43:+  const recoveryDocsWritePrepareReady = Boolean(
44-+    !decisionDefersExecution &&
45-+      !hasProposalDecisionSubject &&
46-+      decision &&
47-+      decision.selectedOptionRef === GOVERNED_OPTION_REF &&
48:+      recoveryBinding &&
49:+      recoveryBinding.kind === "post_evidence_recovery_execution",
50-+  );
51-   const rematerializeDecisionId =
--
98-   );
99-
100:+  // R8 — rehydrate RecoveryExecutionBinding when recovery trajectory HD is present.
101-+  useEffect(() => {
102-+    let cancelled = false;
--
107-+        decision.selectedOptionRef !== GOVERNED_OPTION_REF
108-+      ) {
109:+        setRecoveryBinding(null);
110-+        return;
111-+      }
112:+      const result = await w2ReadRecoveryExecutionBindingAction({
113-+        projectId,
114-+        decisionId: decision.decisionId,
--
116-+      if (cancelled) return;
117-+      if (result.ok) {
118:+        setRecoveryBinding(result.binding);
119-+      } else {
120:+        setRecoveryBinding(null);
121-+      }
122-+    }
--
135-
136-+  /**
137:+   * R8 — recovery docs_write PREPARE from failed EC binding (no sandbox ops).
138-+   */
139:+  const prepareRecoveryDocsWriteContract = useCallback(async () => {
140-+    if (continuityMutationBlocked) return;
141:+    if (!decision || !recoveryDocsWritePrepareReady) return;
142-+    setBusy("contract");
143-+    setError(null);
144:+    const result = await w2PrepareRecoveryDocsWriteAction({
145-+      projectId,
146-+      decisionId: decision.decisionId,
--
181-+    decision,
182-+    projectId,
183:+    recoveryDocsWritePrepareReady,
184-+    onDurableFactsChanged,
185-+  ]);
--
264-           !contract &&
265--          !hasProposalDecisionSubject ? (
266:+          recoveryDocsWritePrepareReady &&
267:+          recoveryBinding ? (
268-+          <div
269-+            className={styles.actions}
270:+            data-testid="w2-recovery-docs-write-prepare"
271-+          >
272-+            <p
273-+              className={styles.blockNote}
274:+              data-testid="w2-recovery-docs-write-note"
275-+            >
276-+              Reprendre l&apos;écriture Markdown gouvernée après échec — cible
--
280-+            <p
281-+              className={styles.blockBody}
282:+              data-testid="w2-recovery-docs-write-path"
283-+            >
284:+              Cible : {recoveryBinding.targetPath}
285-+            </p>
286-+            <p
287-+              className={styles.blockBody}
288:+              data-testid="w2-recovery-docs-write-source"
289-+            >
290:+              Source : Attempt {recoveryBinding.sourceAttemptId} (
291:+              {recoveryBinding.recovery.productOutcome}) — EC{" "}
292:+              {recoveryBinding.sourceExecutionContractId}
293-+            </p>
294-+            <button
295-+              type="button"
296-+              className={styles.primaryAction}
297:+              data-testid="w2-prepare-recovery-docs-write"
298:+              onClick={() => void prepareRecoveryDocsWriteContract()}
299-+              disabled={busy !== null || continuityMutationBlocked}
300-+            >
301:+              Préparer le contrat d&apos;exécution (recovery docs_write)
302-+            </button>
303-+          </div>
--
306-+          !contract &&
307-+          !hasProposalDecisionSubject &&
308:+          !recoveryDocsWritePrepareReady ? (
309-           <div
310-             className={styles.actions}
=== MOD: trajectorySurface.ui.test.tsx (R8) ===
7-   readActiveDecisionSubjectMock,
8-   readGovernedExecutionContinuityMock,
9:+  readRecoveryExecutionBindingMock,
10:+  prepareRecoveryDocsWriteMock,
11-   readPreCycleMock,
12-   readApprovalMock,
--
16-   readActiveDecisionSubjectMock: vi.fn(),
17-   readGovernedExecutionContinuityMock: vi.fn(),
18:+  readRecoveryExecutionBindingMock: vi.fn(),
19:+  prepareRecoveryDocsWriteMock: vi.fn(),
20-   readPreCycleMock: vi.fn(),
21-   readApprovalMock: vi.fn(),
--
25-   w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
26-     readGovernedExecutionContinuityMock(...args),
27:+  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
28:+    readRecoveryExecutionBindingMock(...args),
29:+  w2PrepareRecoveryDocsWriteAction: (...args: unknown[]) =>
30:+    prepareRecoveryDocsWriteMock(...args),
31-   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
32-     ok: false,
--
36-   readActiveDecisionSubjectMock.mockReset();
37-   readGovernedExecutionContinuityMock.mockReset();
38:+  readRecoveryExecutionBindingMock.mockReset();
39:+  prepareRecoveryDocsWriteMock.mockReset();
40-   readPreCycleMock.mockReset();
41-   readApprovalMock.mockReset();
--
45-     kind: "none",
46-   });
47:+  readRecoveryExecutionBindingMock.mockResolvedValue({
48-+    ok: true,
49-+    binding: null,
50-+  });
51:+  prepareRecoveryDocsWriteMock.mockResolvedValue({
52-+    ok: false,
53-+    code: "UNUSED",
--
133-+  });
134-+
135:+  it("R8 — recovery docs_write binding hides W3-A catalog; PREPARE remains explicit", async () => {
136-+    const TARGET =
137-+      "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
138-+    proposeMock.mockResolvedValue({
139-+      ok: true,
140:+      optionSetRef: "optset:w2-recovery",
141-+      cycleTypeId: "cyc:delivery",
142-+      recommendedProfile: "Critical",
--
162-+      epistemicRefs: [],
163-+      proposedTrajectory: {
164:+        trajectoryId: "trj:w2-recovery",
165-+        version: 1,
166-+      },
--
173-+      ok: true,
174-+      decision: {
175:+        decisionId: "dec:w2-trj:recovery-ui",
176-+        selectedOptionRef: "opt:trajectory:governed-gated",
177-+        actorRole: "Pilote",
--
183-+        proposalId: null,
184-+      },
185:+      trajectory: { trajectoryId: "trj:w2-recovery", version: 3 },
186-+      livingProjectStateVersion: 4,
187-+      executionPerformed: false,
--
189-+      decisionSubjectMode: "project_trajectory",
190-+    });
191:+    readRecoveryExecutionBindingMock.mockResolvedValue({
192-+      ok: true,
193-+      binding: {
194:+        kind: "post_evidence_recovery_execution",
195:+        recovery: {
196:+          kind: "post_evidence_recovery",
197-+          attemptId: "xat:w3a:1f49d8e25e20837a",
198-+          attemptStatus: "failed",
--
```

---

## 12. Tests

| ID | Coverage | Result |
|---|---|---|
| T1 | binding rehydrates action/target/path | PASS |
| T2 | hostile project → no binding | PASS |
| T3 | non-recovery trajectory → W3-A unchanged | PASS |
| T4 | UI recovery CTA; no W3-A; PREPARE explicit | PASS |
| T5–T12 | prepare successor docs_write; cancel wrong; no Attempt; caps/evidence/constraints | PASS |
| T10/T13/T14 | restart + idempotent prepare | PASS |
| T15 | Proposal-backed path non-régression (R3/E suites) | PASS |
| T16 | R3/R4/R6/R7 suites | PASS (57+ tests) |
| T17 | `tsc --noEmit` | PASS |

Suite R8: `checkpointF.recoveryDocsWriteSuccessor.d0.test.ts` — 6/6 PASS
UI: TrajectorySurface — 44/44 PASS (incl. R8)

---

## 13. Restart / idempotence proof

- Second `prepareDocsWriteRecoverySuccessorFromDecision` → même `executionContractId`, `reusedFromIdempotency: true`
- Continuity read → current docs_write successor
- Aucune duplication EC parallèle courant
- Attempt count inchangé

---

## 14. Proposal-backed non-regression

- Chemin Proposal → HD → `prepareM3FromDecision` **inchangé**
- Activation R8 exclusive au RecoveryExecutionBinding cohérent + GOVERNED recovery HD
- T3 prouve catalogue W3-A intact hors recovery

---

## 15. ZERO REAL / Attempt / campagne

| Check | Value |
|---|---|
| Attempt count campagne | **1** (`xat:w3a:1f49d8e25e20837a` failed) |
| New Attempt this lot | **0** |
| Failed EC | `xct:m3-ev:8aaa188b3a3bd7a7` status=failed |
| Wrong generic EC | `xct:w3a:dec:w2-trj:7e6ca68a-…` still confirmation_required (unconsumed; not inspected) |
| Recovery HD | `dec:w2-trj:7e6ca68a-…` accepted / governed-gated |
| Target file | **ABSENT** |
| REAL this lot | **0** |
| Morris REAL budget remaining | **1** |

---

## 16. Réserves

1. Wrong generic campaign EC reste visible jusqu'au PREPARE Pilote post-reload (volontaire — pas de mutation SQLite).
2. Materialize seed tests may project UNCLAIMED Contract Result CE; W3C recover sealed via canonical `serializeW3cRecommendationPayload` for RecoveryContext (production path uses real W3C loop after FAIL claimable).
3. Cancel (not supersede) used for pre-exec wrong generic — existing lifecycle; supersede would require new semantics for confirmation_required without prior.

---

## 17. Gate suivant

1. Pilote reload Studio.
2. UI doit montrer recovery docs_write (pas catalogue W3-A).
3. Pilote PREPARE explicite → successor docs_write EC.
4. **Inspection** du nouvel EC.
5. Confirmation si requise → authority → **puis seulement** ONE FRESH CURSOR REAL RECOVERY ATTEMPT (Morris GO déjà accordé, non consommé ici).

---

## 18. Claims

**Autorisés**
- recovery execution binding deterministically proven
- failed docs_write operation rehydrated
- successor EC routing deterministically proven
- ZERO REAL
- previous Attempt remains FAIL

**Interdits (non claimés)**
- retry executed · REAL PASS · artifact created · Product Journey E2E usable · READY · runtime v3 ADOPTED

---

## 19. Verdict unique

**RECOVERY DOCS_WRITE SUCCESSOR ROUTING FIXED — READY FOR PILOT CONTRACT INSPECTION**
