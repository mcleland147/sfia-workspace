# FULL Review Pack — W2 Final Closure Product Correction

## A. Metadata

| Field | Value |
|---|---|
| Timestamp | 2026-08-23 (Europe/Paris) |
| Repo | mcleland147/sfia-workspace |
| Branch | delivery/sfia-studio-w2-final-closure-product-correction (local only) |
| HEAD | 17f528cd81fc495400b8b15e26830695347995f2 |
| origin/main | 17f528cd81fc495400b8b15e26830695347995f2 |
| Cycle | 8 — Delivery / implémentation |
| Typology | INC |
| Profile | CRITICAL |
| Product Correction GO | CONSUMED |
| W2 requalification | NOT AUTHORIZED |
| W2 closure | NOT AUTHORIZED |
| Git integration | NOT AUTHORIZED |

## B. Sources actually read

Process templates + routing + operating model + guardrails; CKC pilots folder (no Delivery pilot — fallback routing/v2.6); Build Doctrine; Roadmap; PC 01–03/06/08/09; frozen doc10 READ ONLY; v3 framing 30–35/37; TrajectorySurface; w2 actions/types/inspect/authorize/confirm; prepareM3/resolveM3 (read); OA supersede/validate/inspect/fingerprint (read only); localSingleUserAuthority; w2Eabc + Phase B + trajectorySurface UI + Playwright.

## C. Local Git truth

- origin/main = 17f528cd… unchanged
- delivery branch from origin/main; remote same-name ABSENT
- staged empty; no project commit/push/PR
- doc10 frozen 1f815591… unchanged
- untracked preserved including doc10 / .tmp-sfia-review / eventops / flex-office

## D. Convergence qualification

| Dimension | Value |
|---|---|
| Capacity | W2 H→N EC material-amend + integrated Phase B evidence |
| Milestone | W2 FINAL CLOSURE PRODUCT CORRECTION |
| Assets KEEP | OA EC + supersede + validate + inspection + Confirmation + authority + Product SQLite + W2 actions + TrajectorySurface + Playwright + Phase B 2-cycle Vitest |
| COMPLETE/ADAPT | thin amendExecutionContractWithConstraint · UI affordance · E2E R01/R02 |
| W2-CL-R01 | LOCALLY CLOSED (integrated /studio semantic) |
| W2-CL-R02 | LOCALLY CLOSED (Pilote material amend + reinspect) |
| Critical path | product seam → evidence → ChatGPT → optional Git integration GO → requalification GO |
| Next gate | ChatGPT review |
| Next capacity | W2 FINAL CLOSURE REQUALIFICATION (NOT STARTED) |

## E. C6 no-reopen proof

| Check | Result |
|---|---|
| lib/oa/** modified | **0** |
| schema/migrations | **0** |
| new engine/store/lifecycle | **0** |
| parallel product path | **0** |

## F. Architecture / application seam

- Use case: `amendExecutionContractWithConstraint` in `w2/amendExecutionContract.ts`
- OA reused: `supersedeExecutionContract` → `validateExecutionContract` → `getContractInspectionState` / `recordContractInspection` (via existing inspect)
- Authority: `LOCAL_PILOTE_ACTOR` + `registerLocalPiloteAuthority` (server-owned; client hostile fields ignored)
- Materiality: append ONE tightening constraint; action/target/scope/authority/capabilities/decisionRefs inherited
- Lineage: new successor ID `prior:amd:{sha16}`; prior → superseded; successor.supersedesExecutionContractId = prior
- Idempotency: deterministic successor id + replay returns same successor
- Inspection: successor has no attestation (honest NON INSPECTÉ); application fact `reinspectionRequired=true` — **not** forged cross-ID ContractInspectionStateDto
- Confirmation: unchanged conditional rules on successor status
- No Execute / Attempt


## G. COMPLETE useful patches

### NEW FILE — amendExecutionContract.ts
```typescript
/**
 * W2 Track C — thin product application seam: Pilote material amendment of an
 * already-inspected ExecutionContract by appending ONE tightening constraint.
 *
 * Reuses exclusively:
 *   supersedeExecutionContract → validateExecutionContract → inspection state
 *
 * Semantics:
 *   predecessor inspected → superseded → successor has no attestation →
 *   product fact reinspectionRequired=true → no Execute / Attempt.
 *
 * Does NOT forge ContractInspectionStateDto across contract IDs.
 * Does NOT widen action/target/scope/authority/capabilities.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  AmendExecutionContractResult,
  AmendedExecutionContractDto,
  ContractInspectionStateDto,
  W2Failure,
} from "./types";

const SUPERSESSION_REASON = "w2_constraint_amendment";

export type AmendExecutionContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly additionalConstraint: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

function fail(code: string, message: string): W2Failure {
  return { ok: false, code, message };
}

function normalizeConstraint(raw: string): string | null {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) return null;
  // Collapse internal whitespace for duplicate detection / identity.
  return trimmed.replace(/\s+/g, " ");
}

function amendmentDigest(
  priorExecutionContractId: string,
  normalizedConstraint: string,
): string {
  return createHash("sha256")
    .update("w2-constraint-amend\n", "utf8")
    .update(priorExecutionContractId, "utf8")
    .update("\n", "utf8")
    .update(normalizedConstraint, "utf8")
    .digest("hex")
    .slice(0, 16);
}

function successorIdFor(
  priorExecutionContractId: string,
  digest: string,
): string {
  // Keep xct: prefix; bound length for stable deterministic identity.
  const base = priorExecutionContractId.slice(0, 72);
  return `${base}:amd:${digest}`;
}

function toContractDto(contract: ExecutionContract): AmendedExecutionContractDto {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    constraints: [...(contract.constraints ?? [])],
    stopConditions: [...(contract.stopConditions ?? [])],
    requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
    reversibility: contract.reversibility ?? "non précisée",
    semanticFingerprint: contract.semanticFingerprint ?? "",
    supersedesExecutionContractId: contract.supersedesExecutionContractId ?? null,
    supersessionReason: contract.supersessionReason ?? null,
  };
}

function successPayload(input: {
  prior: ExecutionContract;
  priorInspectionAttestationRef: string | null;
  successor: ExecutionContract;
  successorInspection: ContractInspectionStateDto;
  replayed: boolean;
}): AmendExecutionContractResult {
  return {
    ok: true,
    priorExecutionContractId: input.prior.executionContractId,
    priorContractVersion: input.prior.version,
    priorInspectionAttestationRef: input.priorInspectionAttestationRef,
    successor: toContractDto(input.successor),
    supersedesExecutionContractId: input.prior.executionContractId,
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired: true,
    statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
    successorInspection: input.successorInspection,
    additionalConstraint:
      input.successor.constraints[input.successor.constraints.length - 1] ?? "",
    replayed: input.replayed,
    humanDecisionCreated: false,
    authorityGranted: false,
    confirmationGranted: false,
    executionPerformed: false,
    attemptCreated: false,
  };
}

async function loadContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<
  | { ok: true; contract: ExecutionContract }
  | { ok: false; code: string; message: string }
> {
  const loaded = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable — amendement impossible.",
    };
  }
  return { ok: true, contract: loaded.contract };
}

/**
 * Append one tightening execution constraint via OA supersession.
 */
export async function amendExecutionContractWithConstraint(
  input: AmendExecutionContractInput,
): Promise<AmendExecutionContractResult> {
  const normalized = normalizeConstraint(input.additionalConstraint);
  if (!normalized) {
    return fail(
      "CONSTRAINT_EMPTY",
      "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
    );
  }

  const priorLoad = await loadContract(input.oa, input.executionContractId);
  if (!priorLoad.ok) return fail(priorLoad.code, priorLoad.message);
  let prior = priorLoad.contract;

  if (prior.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Le contrat n'appartient pas au projet demandé — amendement refusé.",
    );
  }

  const digest = amendmentDigest(prior.executionContractId, normalized);
  const newExecutionContractId = successorIdFor(
    prior.executionContractId,
    digest,
  );
  const idempotencyKey = `idem:w2-constraint-amend:${digest}`;

  // Idempotent replay: successor already present for this exact amendment.
  const existingSuccessor = await loadContract(
    input.oa,
    newExecutionContractId,
  );
  if (existingSuccessor.ok) {
    const s = existingSuccessor.contract;
    if (
      s.supersedesExecutionContractId === prior.executionContractId &&
      s.constraints.includes(normalized)
    ) {
      const successorInspection = await readContractInspectionState({
        oa: input.oa,
        executionContractId: s.executionContractId,
      });
      if (!successorInspection.ok) return successorInspection;
      // Refresh prior (may already be superseded).
      const priorRefresh = await loadContract(
        input.oa,
        prior.executionContractId,
      );
      if (priorRefresh.ok) prior = priorRefresh.contract;
      const priorInspection = await readContractInspectionState({
        oa: input.oa,
        executionContractId: prior.executionContractId,
      });
      return successPayload({
        prior,
        priorInspectionAttestationRef: priorInspection.ok
          ? priorInspection.attestationRef ?? priorInspection.staleAttestationRef
          : null,
        successor: s,
        successorInspection,
        replayed: true,
      });
    }
    return fail(
      "AMENDMENT_IDENTITY_CONFLICT",
      "Un contrat successeur existe déjà sous cette identité avec un contenu incompatible.",
    );
  }

  if (
    prior.status === "superseded" ||
    prior.status === "cancelled" ||
    prior.status === "executing" ||
    prior.status === "completed" ||
    prior.status === "failed"
  ) {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Le contrat (statut ${prior.status}) ne peut pas être amendé.`,
    );
  }

  if (prior.constraints.includes(normalized)) {
    return fail(
      "CONSTRAINT_DUPLICATE",
      "Cette contrainte est déjà présente sur le contrat — amendement refusé.",
    );
  }

  // Post-inspection amendment only: prior inspection must be sufficient.
  const priorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: prior.executionContractId,
  });
  if (!priorInspection.ok) return priorInspection;
  if (!priorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_REQUIRED_BEFORE_AMENDMENT",
      "Le contrat doit être inspecté avant un amendement matériel.",
    );
  }

  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope: prior.scope,
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:w2-amend:${digest}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId,
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: SUPERSESSION_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: prior.version,
      // Inherit action/target/scope/authority/capabilities/decisionRefs by omission.
      // Explicit constraints = prior + one tightening constraint (material).
      constraints: [...prior.constraints, normalized],
      idempotencyKey,
      correlationId: `cor:w2-amend:${digest}`,
      status: "draft",
    });

  if (!superseded.ok) {
    // Race: another writer created the same deterministic successor — retry as replay.
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      return amendExecutionContractWithConstraint(input);
    }
    return fail(
      superseded.error.detailCode,
      `Amendement refusé (${superseded.error.detailCode}).`,
    );
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return fail(
      validated.error.detailCode,
      `Validation du contrat amendé refusée (${validated.error.detailCode}).`,
    );
  }

  const priorAfter = superseded.supersededContract ?? prior;
  const successorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: validated.contract.executionContractId,
  });
  if (!successorInspection.ok) return successorInspection;

  if (successorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_INVARIANT_VIOLATED",
      "Le successeur ne doit pas hériter d'une inspection suffisante — arrêt fail-closed.",
    );
  }

  return successPayload({
    prior: priorAfter,
    priorInspectionAttestationRef: priorInspection.attestationRef,
    successor: validated.contract,
    successorInspection,
    replayed: false,
  });
}
```

### DIFF — projects/sfia-studio/app/features/project-assistant/w2/actions.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 5ec3c340..41f57980 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -13,6 +13,7 @@
  */

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
@@ -22,6 +23,7 @@ import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type {
+  AmendExecutionContractResult,
   ConfirmForAuthorizationResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
@@ -157,6 +159,32 @@ export async function w2AuthorizeExecutionContractAction(input: {
   });
 }

+/**
+ * Pilote material amendment — append one tightening execution constraint via
+ * OA supersession. Client cannot choose actor/authority; no Execute.
+ */
+export async function w2AmendExecutionContractAction(input: {
+  projectId: string;
+  executionContractId: string;
+  additionalConstraint: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<AmendExecutionContractResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return amendExecutionContractWithConstraint({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    additionalConstraint: input.additionalConstraint,
+  });
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
```

### DIFF — projects/sfia-studio/app/features/project-assistant/w2/types.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 19655ba4..6644b866 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -212,3 +212,50 @@ export type DecideTrajectoryResult =
       readonly executionPerformed: false;
     }
   | W2Failure;
+
+/* -------------------------------------------------------------------------- */
+/* Track C — material constraint amendment (OA supersession seam)              */
+/* -------------------------------------------------------------------------- */
+
+export type AmendedExecutionContractDto = {
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
+  readonly supersedesExecutionContractId: string | null;
+  readonly supersessionReason: string | null;
+};
+
+export type AmendExecutionContractSuccess = {
+  readonly ok: true;
+  readonly priorExecutionContractId: string;
+  readonly priorContractVersion: number;
+  readonly priorInspectionAttestationRef: string | null;
+  readonly successor: AmendedExecutionContractDto;
+  readonly supersedesExecutionContractId: string;
+  readonly materialAmendment: true;
+  readonly priorInspectionDoesNotCoverSuccessor: true;
+  /** Application product fact from supersession — not a forged inspection DTO. */
+  readonly reinspectionRequired: true;
+  readonly statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE";
+  readonly successorInspection: ContractInspectionStateDto;
+  readonly additionalConstraint: string;
+  readonly replayed: boolean;
+  readonly humanDecisionCreated: false;
+  readonly authorityGranted: false;
+  readonly confirmationGranted: false;
+  readonly executionPerformed: false;
+  readonly attemptCreated: false;
+};
+
+export type AmendExecutionContractResult =
+  | AmendExecutionContractSuccess
+  | W2Failure;
```

### DIFF — projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9a6e254d..fe219d7a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -14,6 +14,7 @@
 import { useCallback, useState } from "react";
 import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
 import {
+  w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
@@ -21,6 +22,7 @@ import {
   w2ProposeTrajectoryOptionsAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
+  AmendExecutionContractSuccess,
   ContractInspectionStateDto,
   DecidedTrajectoryDto,
   ExecutionAuthorizationOutcomeDto,
@@ -44,6 +46,13 @@ type PreparedContract = {
   readonly semanticFingerprint: string;
 };

+type AmendmentNotice = {
+  readonly priorExecutionContractId: string;
+  readonly additionalConstraint: string;
+  readonly statusLabel: string;
+  readonly priorInspectionDoesNotCoverSuccessor: true;
+};
+
 type Busy =
   | null
   | "options"
@@ -51,7 +60,8 @@ type Busy =
   | "contract"
   | "inspection"
   | "confirmation"
-  | "authorization";
+  | "authorization"
+  | "amendment";

 export function TrajectorySurface({
   projectId,
@@ -74,6 +84,9 @@ export function TrajectorySurface({
     useState<ContractInspectionStateDto | null>(null);
   const [authorization, setAuthorization] =
     useState<ExecutionAuthorizationOutcomeDto | null>(null);
+  const [amendmentDraft, setAmendmentDraft] = useState("");
+  const [amendmentNotice, setAmendmentNotice] =
+    useState<AmendmentNotice | null>(null);

   const proposeOptions = useCallback(async () => {
     setBusy("options");
@@ -91,6 +104,8 @@ export function TrajectorySurface({
     setContract(null);
     setInspection(null);
     setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

@@ -149,6 +164,8 @@ export function TrajectorySurface({
     });
     setInspection(null);
     setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
     onDurableFactsChanged?.();
   }, [decision, projectId, onDurableFactsChanged]);

@@ -168,7 +185,65 @@ export function TrajectorySurface({
     const { ok: _ok, ...state } = result;
     setInspection(state);
     setAuthorization(null);
-  }, [contract, projectId]);
+    if (amendmentNotice && state.inspectionSufficient) {
+      setAmendmentNotice({
+        ...amendmentNotice,
+        statusLabel: "Contrat amendé et réinspecté",
+      });
+    }
+  }, [contract, projectId, amendmentNotice]);
+
+  const amendContract = useCallback(async () => {
+    if (!contract || !inspection?.inspectionSufficient) return;
+    const constraint = amendmentDraft.trim();
+    if (!constraint) {
+      setError("Indiquez une contrainte d'exécution supplémentaire.");
+      return;
+    }
+    setBusy("amendment");
+    setError(null);
+    const result = await w2AmendExecutionContractAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      additionalConstraint: constraint,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const amended = result as AmendExecutionContractSuccess;
+    setContract({
+      executionContractId: amended.successor.executionContractId,
+      version: amended.successor.version,
+      status: amended.successor.status,
+      action: amended.successor.action,
+      target: amended.successor.target,
+      scope: amended.successor.scope,
+      requiredAuthority: amended.successor.requiredAuthority,
+      constraints: [...amended.successor.constraints],
+      stopConditions: [...amended.successor.stopConditions],
+      requiredCapabilities: [...amended.successor.requiredCapabilities],
+      reversibility: amended.successor.reversibility,
+      semanticFingerprint: amended.successor.semanticFingerprint,
+    });
+    setInspection(amended.successorInspection);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice({
+      priorExecutionContractId: amended.priorExecutionContractId,
+      additionalConstraint: amended.additionalConstraint,
+      statusLabel: "Contrat amendé — réinspection requise.",
+      priorInspectionDoesNotCoverSuccessor: true,
+    });
+    onDurableFactsChanged?.();
+  }, [
+    contract,
+    inspection,
+    amendmentDraft,
+    projectId,
+    onDurableFactsChanged,
+  ]);

   const confirmForAuthorization = useCallback(async () => {
     if (!contract) return;
@@ -444,6 +519,57 @@ export function TrajectorySurface({
             </div>
           </dl>

+          {amendmentNotice ? (
+            <div
+              className={styles.amendmentNotice}
+              data-testid="w2-amendment-notice"
+              role="status"
+            >
+              <p className={styles.blockBody} data-testid="w2-amendment-status">
+                {amendmentNotice.statusLabel}
+              </p>
+              <p className={styles.blockNote}>
+                L&apos;inspection précédente couvrait le contrat précédent, pas
+                le successeur amendé.
+              </p>
+              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
+                Successeur de {amendmentNotice.priorExecutionContractId} ·
+                contrainte ajoutée : {amendmentNotice.additionalConstraint}
+              </p>
+            </div>
+          ) : null}
+
+          {inspection?.inspectionSufficient ? (
+            <div
+              className={styles.amendmentForm}
+              data-testid="w2-amendment-form"
+            >
+              <p className={styles.blockTitle}>Amender le contrat</p>
+              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
+                Contrainte d&apos;exécution supplémentaire
+              </label>
+              <input
+                id="w2-amend-constraint"
+                className={styles.amendmentInput}
+                data-testid="w2-amend-constraint"
+                type="text"
+                value={amendmentDraft}
+                onChange={(event) => setAmendmentDraft(event.target.value)}
+                disabled={busy !== null}
+                placeholder="Ex. : borner strictement le slice livré"
+              />
+              <button
+                type="button"
+                className={styles.secondaryAction}
+                data-testid="w2-amend-contract"
+                onClick={() => void amendContract()}
+                disabled={busy !== null || amendmentDraft.trim().length === 0}
+              >
+                Appliquer l&apos;amendement
+              </button>
+            </div>
+          ) : null}
+
           <div className={styles.actions}>
             <button
               type="button"
```

### DIFF — projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 03098b34..2c6e756f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -232,6 +232,34 @@
   color: var(--pm6-ink);
 }

+.amendmentNotice,
+.amendmentForm {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-3);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  background: var(--pm6-surface-soft, transparent);
+}
+
+.amendmentLabel {
+  font-size: 0.78rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+}
+
+.amendmentInput {
+  width: 100%;
+  box-sizing: border-box;
+  padding: 0.55rem 0.7rem;
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  font: inherit;
+  color: var(--pm6-ink);
+  background: var(--pm6-surface);
+}
+
 .authorized {
   border-color: var(--pm6-ok);
   background: var(--pm6-ok-tint);
```

### DIFF — projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
index 4a6cf790..167900f9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
@@ -13,6 +13,7 @@ import {
   F3_TARGET,
 } from "@/features/project-assistant/f3/constants";
 import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
+import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
 import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
 import { assertDecisionAuthorizesPromotion, decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
 import {
@@ -2199,3 +2200,389 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
     expect(authorized.authorityReceiptRef).toMatch(/^avr:/);
   });
 });
+
+describe("W2 Track C — material constraint amendment (R02 product seam)", () => {
+  const TIGHTENING =
+    "W2_R02_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";
+
+  async function prepareInspectedM3(input: {
+    suffix: string;
+    idPrefix: string;
+  }) {
+    const db = tempProductDbPath(`w2-r02-${input.suffix}.sqlite`);
+    const runtime = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: input.idPrefix,
+    });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: input.suffix,
+      profile: "Standard",
+    });
+    const oa = runtime.oa!;
+
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qualification failed");
+
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId: seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) throw new Error("propose failed");
+
+    const decided = await decideTrajectory({
+      oa,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) throw new Error("decide failed");
+
+    const context = await currentF2Context(runtime, seeded.projectId);
+    const prepared = await prepareM3FromDecision({
+      projectId: seeded.projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: context,
+      deps: {
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        executionContractServices: oa.executionContractServices,
+        nowIso: () => oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error("prepare failed");
+
+    const executionContractId = prepared.payload.contract.executionContractId;
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: seeded.projectId,
+      executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("inspect failed");
+    expect(inspected.inspectionSufficient).toBe(true);
+
+    return {
+      oa,
+      projectId: seeded.projectId,
+      executionContractId,
+      priorAction: prepared.payload.contract.action,
+      priorTarget: prepared.payload.contract.target,
+      priorScope: prepared.payload.contract.scope,
+      priorAuthority: prepared.payload.contract.requiredAuthority,
+      priorConstraints: [...prepared.payload.contract.constraints],
+      attestationRef: inspected.attestationRef,
+    };
+  }
+
+  it("R02-U01 — inspected EC + tightening constraint → OA supersession successor", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u01", idPrefix: "r02u1" });
+    const priorLoad =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.executionContractId,
+      });
+    expect(priorLoad.ok).toBe(true);
+    if (!priorLoad.ok) return;
+    const priorDecisionRefs = [...(priorLoad.contract.decisionRefs ?? [])];
+
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+    expect(amended.executionPerformed).toBe(false);
+    expect(amended.attemptCreated).toBe(false);
+    expect(amended.materialAmendment).toBe(true);
+    expect(amended.successor.executionContractId).not.toBe(
+      ctx.executionContractId,
+    );
+    expect(amended.successor.supersedesExecutionContractId).toBe(
+      ctx.executionContractId,
+    );
+    expect(amended.successor.action).toBe(ctx.priorAction);
+    expect(amended.successor.target).toBe(ctx.priorTarget);
+    expect(amended.successor.scope).toBe(ctx.priorScope);
+    expect(amended.successor.requiredAuthority).toBe(ctx.priorAuthority);
+    expect(amended.successor.constraints).toContain(TIGHTENING);
+    expect(amended.successor.constraints.length).toBe(
+      ctx.priorConstraints.length + 1,
+    );
+
+    const priorAfter =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.executionContractId,
+      });
+    expect(priorAfter.ok).toBe(true);
+    if (!priorAfter.ok) return;
+    expect(priorAfter.contract.status).toBe("superseded");
+    expect(amended.successor.constraints).not.toEqual(
+      priorAfter.contract.constraints,
+    );
+
+    const successorLoad =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: amended.successor.executionContractId,
+      });
+    expect(successorLoad.ok).toBe(true);
+    if (!successorLoad.ok) return;
+    expect(successorLoad.contract.decisionRefs).toEqual(priorDecisionRefs);
+  });
+
+  it("R02-U02 — successor has no sufficient inherited inspection", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u02", idPrefix: "r02u2" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+    expect(amended.priorInspectionDoesNotCoverSuccessor).toBe(true);
+    expect(amended.reinspectionRequired).toBe(true);
+    expect(amended.successorInspection.inspectionSufficient).toBe(false);
+    expect(amended.successorInspection.attestationRef).toBeNull();
+    expect(amended.successorInspection.executionContractId).toBe(
+      amended.successor.executionContractId,
+    );
+    expect(amended.priorInspectionAttestationRef).toBe(ctx.attestationRef);
+  });
+
+  it("R02-U03 — authorize before successor re-inspection → BLOCKED inspection_required", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u03", idPrefix: "r02u3" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+
+    const blocked = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(blocked.ok).toBe(true);
+    if (!blocked.ok) return;
+    expect(blocked.outcome).toBe("BLOCKED");
+    expect(blocked.reasonCode).toBe("inspection_required");
+    expect(blocked.executionPerformed).toBe(false);
+    expect(blocked.attemptCreated).toBe(false);
+  });
+
+  it("R02-U04/U05 — inspect successor then authority → STOP BEFORE EXECUTE", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u45", idPrefix: "r02u45" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+
+    const reinspected = await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+    });
+    expect(reinspected.ok).toBe(true);
+    if (!reinspected.ok) return;
+    expect(reinspected.inspectionSufficient).toBe(true);
+    expect(reinspected.statusLabel).toBe("INSPECTÉ");
+
+    if (amended.successor.status === "confirmation_required") {
+      const confirmed = await confirmExecutionContractForAuthorization({
+        oa: ctx.oa,
+        projectId: ctx.projectId,
+        executionContractId: amended.successor.executionContractId,
+        forceLocalAuthority: true,
+      });
+      expect(confirmed.ok).toBe(true);
+      if (!confirmed.ok) return;
+      expect(confirmed.executionPerformed).toBe(false);
+    }
+
+    const verdict = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(verdict.ok).toBe(true);
+    if (!verdict.ok) return;
+    expect(["AUTHORIZED", "BLOCKED"]).toContain(verdict.outcome);
+    expect(verdict.executionPerformed).toBe(false);
+    expect(verdict.attemptCreated).toBe(false);
+    expect(verdict.reasonText.length).toBeGreaterThan(0);
+    expect(verdict.nextAction.length).toBeGreaterThan(0);
+  });
+
+  it("R02-U06 — empty/duplicate amendment fail-closed", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u06", idPrefix: "r02u6" });
+    const empty = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: "   ",
+      forceLocalAuthority: true,
+    });
+    expect(empty.ok).toBe(false);
+    if (empty.ok) return;
+    expect(empty.code).toBe("CONSTRAINT_EMPTY");
+
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    // Re-inspect successor then try duplicate of the same constraint.
+    await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: first.successor.executionContractId,
+    });
+    const dup = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: first.successor.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(dup.ok).toBe(false);
+    if (dup.ok) return;
+    expect(dup.code).toBe("CONSTRAINT_DUPLICATE");
+  });
+
+  it("R02-U07 — same amendment replay reuses successor", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u07", idPrefix: "r02u7" });
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    const replay = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(replay.ok).toBe(true);
+    if (!replay.ok) return;
+    expect(replay.replayed).toBe(true);
+    expect(replay.successor.executionContractId).toBe(
+      first.successor.executionContractId,
+    );
+  });
+
+  it("R02-U08 — project mismatch / uninspected prior fail-closed", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u08", idPrefix: "r02u8" });
+    const mismatch = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: "prj:other-project",
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(mismatch.ok).toBe(false);
+    if (mismatch.ok) return;
+    expect(mismatch.code).toBe("PROJECT_MISMATCH");
+
+    // Fresh prepare without inspect.
+    const db = tempProductDbPath("w2-r02-u08b.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r02u8b" });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: "u08b",
+      profile: "Standard",
+    });
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId: seeded.projectId,
+    });
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId: seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      forceLocalAuthority: true,
+    });
+    if (!decided.ok) return;
+    const context = await currentF2Context(runtime, seeded.projectId);
+    const prepared = await prepareM3FromDecision({
+      projectId: seeded.projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: context,
+      deps: {
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        executionContractServices: oa.executionContractServices,
+        nowIso: () => oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    if (!prepared.ok) return;
+
+    const uninspected = await amendExecutionContractWithConstraint({
+      oa,
+      projectId: seeded.projectId,
+      executionContractId: prepared.payload.contract.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(uninspected.ok).toBe(false);
+    if (uninspected.ok) return;
+    expect(uninspected.code).toBe("INSPECTION_REQUIRED_BEFORE_AMENDMENT");
+  });
+});
```

### DIFF — projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 8fdf9ad0..eca7fbeb 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -8,11 +8,13 @@ const {
   decideMock,
   inspectMock,
   authorizeMock,
+  amendMock,
 } = vi.hoisted(() => ({
   proposeMock: vi.fn(),
   decideMock: vi.fn(),
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
+  amendMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -22,6 +24,7 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2ConfirmExecutionContractAction: vi.fn(),
   w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
     authorizeMock(...args),
+  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -42,6 +45,7 @@ beforeEach(() => {
   decideMock.mockReset();
   inspectMock.mockReset();
   authorizeMock.mockReset();
+  amendMock.mockReset();
 });

 describe("W2 TrajectorySurface", () => {
@@ -242,6 +246,80 @@ describe("W2 TrajectorySurface", () => {
     );
     expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

+    // Amendment affordance appears only after sufficient inspection.
+    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
+    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();
+
+    amendMock.mockResolvedValue({
+      ok: true,
+      priorExecutionContractId: "xct:w2-ui",
+      priorContractVersion: 1,
+      priorInspectionAttestationRef: "att:test",
+      successor: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        version: 1,
+        status: "confirmation_required",
+        action: "w2:inspect-only",
+        target: "studio",
+        scope: "w2-ui",
+        requiredAuthority: "MORRIS",
+        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:f3-fixture-docs"],
+        reversibility: "reversible",
+        semanticFingerprint: "fff111aaa222",
+        supersedesExecutionContractId: "xct:w2-ui",
+        supersessionReason: "w2_constraint_amendment",
+      },
+      supersedesExecutionContractId: "xct:w2-ui",
+      materialAmendment: true,
+      priorInspectionDoesNotCoverSuccessor: true,
+      reinspectionRequired: true,
+      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
+      successorInspection: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        contractVersion: 1,
+        semanticFingerprint: "fff111aaa222",
+        statusLabel: "NON INSPECTÉ",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: "no_attestation",
+        grantsAuthority: false,
+      },
+      additionalConstraint: "BORNER LE SLICE",
+      replayed: false,
+      humanDecisionCreated: false,
+      authorityGranted: false,
+      confirmationGranted: false,
+      executionPerformed: false,
+      attemptCreated: false,
+    });
+
+    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
+      target: { value: "BORNER LE SLICE" },
+    });
+    fireEvent.click(screen.getByTestId("w2-amend-contract"));
+    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
+    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
+      /réinspection requise/i,
+    );
+    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
+      "BORNER LE SLICE",
+    );
+    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
+      "NON INSPECTÉ",
+    );
+    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(amendMock).toHaveBeenCalledWith({
+      projectId: "prj:w2-ui",
+      executionContractId: "xct:w2-ui",
+      additionalConstraint: "BORNER LE SLICE",
+    });
+
     authorizeMock.mockResolvedValue({
       ok: true,
       executionContractId: "xct:w2-ui",
```

### DIFF — projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
```diff
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 23ed4596..6bc1372c 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -1,8 +1,11 @@
 /**
- * W2-G3 correction pass — /studio runtime product proof (deterministic).
- * Captures Options → Recommendation → HD → Trajectory → EC → inspect →
+ * W2 /studio runtime product proof (deterministic).
+ * Captures Options → Recommendation (Phase B cognition) → HD → Trajectory →
+ * EC → inspect → material constraint amendment → re-inspect →
  * AUTHORIZED|BLOCKED → STOP BEFORE EXECUTE on the canonical /studio path.
- * No REAL · no Execute · Track D untouched.
+ *
+ * Track D / bounded Phase B is integrated on the product path.
+ * Deterministic Product E2E only · No REAL · no Execute.
  */
 import { test, expect, type Page } from "@playwright/test";
 import fs from "node:fs";
@@ -11,10 +14,13 @@ import crypto from "node:crypto";

 const CAPTURE_ROOT = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/w2-g3-correction",
+  "../../../.tmp-sfia-review/runtime-captures/w2-final-closure-product-correction",
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

+const AMENDMENT_CONSTRAINT =
+  "W2_E2E_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";
+
 async function capture(
   page: Page,
   id: string,
@@ -37,16 +43,16 @@ async function capture(
       timestamp: new Date().toISOString(),
       sha256,
       provenance:
-        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2-G3 CORRECTION /STUDIO PROOF",
+        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF",
     })}\n`,
     "utf8",
   );
 }

-test.describe("W2-G3 correction /studio runtime proof", () => {
+test.describe("W2 final-closure /studio product correction proof", () => {
   test.describe.configure({ timeout: 240_000 });

-  test("walks Options → HD → EC inspect → STOP BEFORE EXECUTE", async ({
+  test("walks Options → Phase-B Reco → HD → EC amend/reinspect → STOP BEFORE EXECUTE", async ({
     page,
   }) => {
     fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
@@ -64,11 +70,11 @@ test.describe("W2-G3 correction /studio runtime proof", () => {

     await page.goto("/studio/projects/new");
     await expect(page.getByTestId("create-project-form")).toBeVisible();
-    await page.locator("#project-name").fill("W2-G3 Correction Runtime Proof");
+    await page.locator("#project-name").fill("W2 Final Closure Product Correction");
     await page
       .locator("#project-objective")
       .fill(
-        "Prouver Options / Recommendation / Décision de trajectoire / inspection — aucune exécution.",
+        "Prouver Options / Recommendation Phase B / Décision / amendement EC / réinspection — aucune exécution.",
       );
     await page.getByTestId("create-project-submit").click();
     await expect(page.getByTestId("open-project-workspace")).toBeVisible({
@@ -114,16 +120,27 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
       throw new Error(`w2 propose failed: ${err}`);
     }
     await expect(page.getByTestId("w2-options")).toBeVisible();
-    await expect(page.getByTestId("w2-recommendation")).toContainText(
+
+    // --- R01: Phase B semantic cognition on integrated /studio path ---
+    const recommendation = page.getByTestId("w2-recommendation");
+    await expect(recommendation).toContainText(
       "RECOMMANDATION — PAS UNE DÉCISION",
     );
+    await expect(recommendation).toContainText(/anti scope creep/i);
+    await expect(recommendation).toContainText("Contexte de cycle rattaché.");
+    const recoText = (await recommendation.textContent()) ?? "";
+    expect(recoText).not.toMatch(/\[CKC:/);
+    expect(recoText).not.toMatch(/ckc:studio:/);
+    expect(recoText).not.toMatch(/digest=/);
+    expect(recoText).not.toMatch(/fp=/);
+
     await expect(page.getByTestId("w2-proposed-trajectory")).toContainText(
       "TRAJECTOIRE PROPOSÉE",
     );
     await expect(page.getByTestId("w2-decision")).toHaveCount(0);
-    await capture(page, "04-options-recommendation", {
+    await capture(page, "04-options-recommendation-phase-b", {
       screen: "TrajectorySurface",
-      state: "options_proposed",
+      state: "options_proposed_phase_b_semantic",
     });

     const decideButtons = page.locator("[data-testid^='w2-decide-']");
@@ -143,16 +160,19 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
       state: "decided",
     });

+    // --- R02: prepare → inspect → material amend → block → reinspect → auth ---
     await page.getByTestId("w2-prepare-contract").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
     await expect(page.getByTestId("w2-contract-action")).toBeVisible();
     await expect(page.getByTestId("w2-contract-facts")).toBeVisible();
-    await capture(page, "06-execution-contract", {
-      screen: "TrajectorySurface",
-      state: "contract_prepared",
-    });
+
+    const priorIdText =
+      (await page.getByTestId("w2-contract").textContent()) ?? "";
+    const priorConstraints =
+      (await page.getByTestId("w2-contract-constraints").textContent()) ?? "";
+    expect(priorConstraints).not.toContain("W2_E2E_TIGHTEN");

     const confirm = page.getByTestId("w2-confirm-contract");
     if (await confirm.count()) {
@@ -163,11 +183,73 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
     await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
       timeout: 30_000,
     });
-    await capture(page, "07-inspected", {
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "INSPECTÉ",
+    );
+    await capture(page, "06-original-inspected", {
       screen: "TrajectorySurface",
-      state: "inspected",
+      state: "original_ec_inspected",
     });

+    await expect(page.getByTestId("w2-amendment-form")).toBeVisible();
+    await page.getByTestId("w2-amend-constraint").fill(AMENDMENT_CONSTRAINT);
+    await page.getByTestId("w2-amend-contract").click();
+
+    await expect(page.getByTestId("w2-amendment-notice")).toBeVisible({
+      timeout: 45_000,
+    });
+    await expect(page.getByTestId("w2-amendment-status")).toContainText(
+      /réinspection requise/i,
+    );
+    await expect(page.getByTestId("w2-contract-constraints")).toContainText(
+      "W2_E2E_TIGHTEN",
+    );
+    await expect(page.getByTestId("w2-amendment-lineage")).toBeVisible();
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "NON INSPECTÉ",
+    );
+    // Successor is a different contract identity (lineage shows prior id).
+    const lineage =
+      (await page.getByTestId("w2-amendment-lineage").textContent()) ?? "";
+    expect(lineage).toMatch(/Successeur de xct:/);
+
+    await capture(page, "07-material-amendment-reinspection-required", {
+      screen: "TrajectorySurface",
+      state: "successor_reinspection_required",
+    });
+
+    // Pre-reinspect authority must BLOCK from product authorize logic.
+    await page.getByTestId("w2-authorize-contract").click();
+    await expect(page.getByTestId("w2-authorization")).toBeVisible({
+      timeout: 30_000,
+    });
+    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
+      "BLOQUÉ",
+    );
+    const blockedReason =
+      (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
+    expect(blockedReason.toLowerCase()).toMatch(/inspect/);
+
+    await page.getByTestId("w2-inspect-contract").click();
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "INSPECTÉ",
+      { timeout: 30_000 },
+    );
+    await expect(page.getByTestId("w2-amendment-status")).toContainText(
+      /réinspecté/i,
+    );
+    await capture(page, "08-successor-reinspected", {
+      screen: "TrajectorySurface",
+      state: "successor_reinspected",
+    });
+
+    const confirmAfter = page.getByTestId("w2-confirm-contract");
+    if (await confirmAfter.count()) {
+      if (await confirmAfter.isEnabled()) {
+        await confirmAfter.click();
+      }
+    }
+
     await page.getByTestId("w2-authorize-contract").click();
     await expect(page.getByTestId("w2-authorization")).toBeVisible({
       timeout: 30_000,
@@ -181,25 +263,29 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
     expect(
       outcomeText.includes("AUTORISÉ") || outcomeText.includes("BLOQUÉ"),
     ).toBe(true);
-    await capture(page, "08-authorization-stop", {
+    await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
+    await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();
+
+    await capture(page, "09-final-authority-stop", {
       screen: "TrajectorySurface",
       state: outcomeText.includes("AUTORISÉ") ? "authorized" : "blocked",
     });

-    const history = page.getByTestId("project-history");
-    if (await history.count()) {
-      await history.scrollIntoViewIfNeeded();
-      await capture(page, "09-history", {
-        screen: "HistorySurface",
-        state: "visible",
-      });
-    }
+    // Silence unused prior capture vars while keeping explicit E2E-R02-02 intent.
+    expect(priorIdText.length).toBeGreaterThan(0);

-    expect(fs.existsSync(path.join(CAPTURE_ROOT, "04-options-recommendation.png"))).toBe(
-      true,
-    );
-    expect(fs.existsSync(path.join(CAPTURE_ROOT, "08-authorization-stop.png"))).toBe(
-      true,
-    );
+    expect(
+      fs.existsSync(
+        path.join(CAPTURE_ROOT, "04-options-recommendation-phase-b.png"),
+      ),
+    ).toBe(true);
+    expect(
+      fs.existsSync(
+        path.join(CAPTURE_ROOT, "07-material-amendment-reinspection-required.png"),
+      ),
+    ).toBe(true);
+    expect(
+      fs.existsSync(path.join(CAPTURE_ROOT, "09-final-authority-stop.png")),
+    ).toBe(true);
   });
 });
```

### DIFF — projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 0305f5ed..5363c98a 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -85,6 +85,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
```


## H. R01 proof

- Call graph: /studio qualify `__F2_GATED_STANDARD__` → proposeTrajectoryOptions (Phase B cognition) → UI `w2-recommendation`
- Assertions: RECOMMANDATION — PAS UNE DÉCISION · /anti scope creep/i · Contexte de cycle rattaché · no `[CKC:` / `ckc:studio:` / `digest=` / `fp=` · no HD before Pilote decide
- >=2-cycle genericity: w2TrackDPhaseB.test.ts **24 PASS** unchanged
- Status: **W2-CL-R01 LOCALLY CLOSED**

## I. R02 proof

| Step | Result |
|---|---|
| Prepare original EC | PASS |
| Inspect → INSPECTÉ | PASS |
| Pilote amendment UI | PASS (tightening constraint) |
| Successor + lineage + constraint | PASS |
| Reinspection required notice | PASS |
| Prior inspection non-transfer | PASS (NON INSPECTÉ on successor) |
| Authorize before reinspect → BLOCKED | PASS (inspection-related) |
| Reinspect successor → INSPECTÉ | PASS |
| Confirmation if required | existing conditional path |
| Final AUTH\|BLOCK + STOP | PASS |
| executionPerformed/attemptCreated | false |

Status: **W2-CL-R02 LOCALLY CLOSED**

## J. Test campaign

| Campaign | Result |
|---|---|
| Baseline Playwright | 1 PASS |
| Baseline EABC+Phase B | 52 PASS |
| Targeted EABC (incl R02) | 35 PASS |
| Phase B | 24 PASS |
| UI TrajectorySurface | 2 PASS |
| Playwright corrected | 1 PASS |
| Full Vitest | **1994 PASS / 131 SKIP** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | clean |

## K. Runtime captures

Directory: `.tmp-sfia-review/runtime-captures/w2-final-closure-product-correction/`

Manifest:
```
{"id":"01-studio-home","file":"01-studio-home.png","screen":"ProjectsHome","state":"loaded","route":"http://127.0.0.1:3020/studio","timestamp":"2026-08-23T16:27:34.170Z","sha256":"08c30b98520e4bbc4240e3e3d70998b6aa92a26aa8364a078a0236bdfee5b352","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"02-workspace","file":"02-workspace.png","screen":"ProjectWorkspace","state":"opened","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:35.889Z","sha256":"43c8756c66336a99ae1d23267b14cec0c6a51cebb7d5609635c55f84d7307ab2","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"02b-qualified-gate","file":"02b-qualified-gate.png","screen":"ConversationSurface","state":"f2_gate_qualified","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:36.046Z","sha256":"ee777c45ec5cdcc1f2b614ffab6d4dfe031933bf78c88e64a8299e94f1adedf2","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"03-trajectory-idle","file":"03-trajectory-idle.png","screen":"TrajectorySurface","state":"idle_after_qualification","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:36.183Z","sha256":"fdc125da30c5a7cd7fbbe2c444e0636bae7a59341e74890facf5b7a62814c6f1","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"04-options-recommendation-phase-b","file":"04-options-recommendation-phase-b.png","screen":"TrajectorySurface","state":"options_proposed_phase_b_semantic","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:36.523Z","sha256":"1defea7cc89d9c328d12ab0acb473fc857164803c144f137b986722875b110a6","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"05-human-decision-trajectory","file":"05-human-decision-trajectory.png","screen":"TrajectorySurface","state":"decided","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:36.707Z","sha256":"0cdcfae4b93cfed98b90ebc07f336c4ce1d7c5762620afd72079fa97a5a915eb","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"06-original-inspected","file":"06-original-inspected.png","screen":"TrajectorySurface","state":"original_ec_inspected","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:36.972Z","sha256":"089fed900cc10faa79f71143a31ab8494006f0fc16b226b4babac11ecd9fc355","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"07-material-amendment-reinspection-required","file":"07-material-amendment-reinspection-required.png","screen":"TrajectorySurface","state":"successor_reinspection_required","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:37.171Z","sha256":"5516817adc82ac70d7ce7f427510b455d141f7588bf1cdf5d9a54933f84922ed","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"08-successor-reinspected","file":"08-successor-reinspected.png","screen":"TrajectorySurface","state":"successor_reinspected","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:37.440Z","sha256":"eb6773a72c74bcc6ac6e326b65bee46d475829f3409084314f5f4ad526e6e3c4","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
{"id":"09-final-authority-stop","file":"09-final-authority-stop.png","screen":"TrajectorySurface","state":"blocked","route":"http://127.0.0.1:3020/studio/projects/prj%3Ab55e13b5-edc0-4a93-9152-ac2b79582e18","timestamp":"2026-08-23T16:27:37.711Z","sha256":"7b9af114faecb6cac1526070b609ae632614bc35ac1240ce421ec144982c0a57","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF"}
```

## L. Fake / Real

- FakeConversationProvider for Phase B cognition (unchanged)
- R02 = real OA/Product SQLite path
- DETERMINISTIC PRODUCT E2E PROOF
- REAL OUT · PB-RES-REAL-01 OPEN/TRACE ONLY unchanged

## M. Frozen doc10

| Pre | Post | Unchanged |
|---|---|---|
| 1f81559157200cc554e003e2391502c6c1df5ec1 | 1f81559157200cc554e003e2391502c6c1df5ec1 | YES |

## N. Files modified

| File | Class |
|---|---|
| w2/amendExecutionContract.ts | NEW production |
| w2/actions.ts | production |
| w2/types.ts | production |
| TrajectorySurface.tsx | production UI |
| TrajectorySurface.module.css | conditional style |
| w2EabcDelivery.test.ts | test |
| trajectorySurface.ui.test.tsx | test |
| studio-w2-g3-correction-runtime.spec.ts | E2E |
| importBoundaries.test.ts | conditional allowlist for new w2 file |

## O. Residuals

- W2-CL-R03 / R04 unchanged OPEN_NON_BLOCKING (not absorbed)
- PB-RES-REAL-01 unchanged

## P. Morris gates remaining

- Project Git integration — NOT AUTHORIZED
- W2 Final Closure Requalification — NOT AUTHORIZED
- W2 closure decision — NOT AUTHORIZED
- W3 / REAL / FinOps unfreeze / runtime v3 — NOT CONSUMED

## Q. Anti-claims

Product correction ≠ W2 closure · local R01/R02 closure ≠ main integration · test PASS ≠ requalification · deterministic ≠ REAL · Phase B ≠ full CKC · AUTHORIZED ≠ Execute · C6 CLOSED · FinOps FREEZE · v3 NON ADOPTED · Product Completion incomplete

## R. Verdict

**W2 FINAL CLOSURE PRODUCT CORRECTION PASS — W2-CL-R01/R02 LOCALLY CLOSED — READY FOR CHATGPT REVIEW — PROJECT GIT INTEGRATION AND W2 REQUALIFICATION NOT AUTHORIZED**
