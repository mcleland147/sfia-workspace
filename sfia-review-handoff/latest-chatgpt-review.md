# ChatGPT Review Pack — FULL
## T-A7 consolidated B5 / R1 / R-M01 blocker reduction lot

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-29 10:12:51 CEST (+0200) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| **Branche initiale** | `docs/sfia-studio-t-a7-f11-f13-post-merge-capitalization` |
| **Base** | `origin/main` @ `bddfc6ac821b5684cd4b611d397596aa8e310802` |
| **Branche cible** | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
| **HEAD final** | `c24da112ed3d67479d7b3e7715c78da3c26be78e` |
| **Upstream** | **aucun** |
| **Gate consommé** | `GO FRAME AND EXECUTE CONSOLIDATED T-A7 BLOCKER REDUCTION LOT — B5 R1 R-M01 — INCLUDE CODE TESTS AND DOCUMENTATION — HARD REMAINS OPEN — NO IAM PERSISTENCE DELIVERY OR CUTOVER` |
| **Cycle** | 6 Architecture + 7/9/12/15 |
| **Profil** | Critical · EVOL / QA / DOC |
| **Handoff parent** | `7106139d00a414e3d7bf5adcfd1d7de9bf8004e2` · blob `e51013bc1bd391f33403c30c24c56dd27e831ee9` |

---

## 1. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| workspace | PASS |
| origin/main @ démarrage | `bddfc6a…` (contient PR #289) |
| tracked propre | PASS |
| staged vide | PASS |
| untracked | `.tmp-sfia-review/**` only |
| ops Git | aucune inachevée |
| branche cible absente | PASS puis créée depuis origin/main |
| upstream | unset (aucun) |

**Verdict truth check :** PASS

---

## 2. Qualification B5

| Champ | Valeur |
|-------|--------|
| Définition | STOP BEFORE DELIVERY (docs `06`/`11`, A52-B5) |
| Source Git | hold `B5_OPEN` + docs pack |
| État | OPEN → **REDUCED — REMAINS OPEN** |
| Fermeture complète | HARD résolu + gate delivery Morris |
| Réduit ici | control plane déterministe INTERNAL_ONLY |
| Reste ouvert | HARD open · delivery unauthorized |
| Dépendances | HARD |
| Risques | faux delivery-ready |
| Preuves | `evaluatePreDeliveryControl` + tests |
| Anti-claims | jamais CLOSED / DELIVERY READY |

## 3. Qualification R1

| Champ | Valeur |
|-------|--------|
| Définition | atomicité Project↔Cycle (≠ rollback doc `04`) |
| Source Git | hold `R1_OPEN` + docs `06`/`11` |
| État | OPEN → **REDUCED — REMAINS OPEN** |
| Fermeture | atomicité durable + drills autorisés |
| Réduit ici | simulation in-memory prepare/apply/verify/rollback |
| Reste ouvert | `productionRollbackProven=false` |
| Anti-claims | simulation ≠ rollback production |

## 4. Qualification R-M01

| Champ | Valeur |
|-------|--------|
| Définition | ClaimEvaluator readiness |
| Source Git | hold `R_M01_OPEN` + docs `06`/`11` |
| État | OPEN → **REDUCED — REMAINS OPEN** |
| Fermeture | T-A6 complete + Morris |
| Réduit ici | évaluateur borné + anti-surclaims |
| Reste ouvert | T-A6 NOT COMPLETE · `rM01RemainsOpen=true` |
| Anti-claims | pas de T-A6/Option A/RUN/delivery/cutover SUPPORTED |

## 5. HARD

**OPEN HARD — UNCHANGED** — hors périmètre ; hold `HARD_OPEN` préservé.

---

## 6. Architecture

**Retenue :** modules `platform/t-a7` INTERNAL_ONLY (control plane, atomic sim, claim eval, aggregation). Hold MethodMode non modifié.

**Rejetée :** workflow générique, store, HTTP/UI, IAM/DB, coupling OA product ClaimEvaluator, fermeture hold reasons, nouveaux packages.

---

## 7. Fichiers (name-status / stat)

```
A	projects/sfia-studio/app/__tests__/platform/t-a7-consolidated-blocker-reduction.test.ts
A	projects/sfia-studio/app/lib/platform/t-a7/blockerAggregation.ts
A	projects/sfia-studio/app/lib/platform/t-a7/blockerControlPlane.ts
A	projects/sfia-studio/app/lib/platform/t-a7/boundedClaimEvaluator.ts
M	projects/sfia-studio/app/lib/platform/t-a7/index.ts
A	projects/sfia-studio/app/lib/platform/t-a7/simulatedAtomicOperation.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/19-consolidated-b5-r1-r-m01-blocker-reduction-lot.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
```

```
.../t-a7-consolidated-blocker-reduction.test.ts    | 275 +++++++++++++++++++++
 .../app/lib/platform/t-a7/blockerAggregation.ts    | 169 +++++++++++++
 .../app/lib/platform/t-a7/blockerControlPlane.ts   | 170 +++++++++++++
 .../app/lib/platform/t-a7/boundedClaimEvaluator.ts | 236 ++++++++++++++++++
 .../sfia-studio/app/lib/platform/t-a7/index.ts     |   6 +-
 .../lib/platform/t-a7/simulatedAtomicOperation.ts  | 210 ++++++++++++++++
 ...nsolidated-b5-r1-r-m01-blocker-reduction-lot.md | 266 ++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     |  28 ++-
 8 files changed, 1350 insertions(+), 10 deletions(-)
```

---

## 8. Contenu complet des fichiers créés/modifiés

### `projects/sfia-studio/app/lib/platform/t-a7/blockerControlPlane.ts`

```
/**
 * T-A7 consolidated lot — B5 pre-delivery control plane (INTERNAL_ONLY).
 * Deterministic stop conditions. Never produces delivery-ready while HARD is open.
 * No real delivery mechanism.
 */

export type BlockerId = "B5" | "R1" | "R_M01" | "HARD";

export type BlockerLifecycleStatus = "OPEN" | "REDUCED" | "UNKNOWN";

export type BlockerSeverity = "STOP_BEFORE_DELIVERY" | "ATOMICITY" | "CLAIM_EVAL" | "HARD";

export type EvidenceState =
  | "NONE"
  | "PARTIAL"
  | "FOUNDATION_PRESENT"
  | "UNKNOWN";

export type PreDeliveryAction =
  | "STOP_BEFORE_DELIVERY"
  | "CONTINUE_FRAMING_ONLY"
  | "UNKNOWN";

export interface PreDeliveryBlockerRecord {
  readonly id: BlockerId;
  readonly status: BlockerLifecycleStatus;
  readonly severity: BlockerSeverity;
  readonly openDependencies: readonly BlockerId[];
  readonly evidenceState: EvidenceState;
  readonly stopReason: string;
  readonly actionAuthorized: PreDeliveryAction;
  readonly deliveryReady: false;
  readonly detail: string;
}

export interface PreDeliveryControlDecision {
  readonly schemaVersion: "t-a7-b5-control-plane.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly blockers: readonly PreDeliveryBlockerRecord[];
  readonly hardOpen: true;
  readonly b5Open: true;
  readonly deliveryReady: false;
  readonly stopReason: string;
  readonly actionAuthorized: "STOP_BEFORE_DELIVERY";
  readonly mutable: false;
  readonly writeCommands: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
}

export interface PreDeliveryControlInput {
  /** When true, B5 control evidence foundation is considered present (still OPEN). */
  readonly b5FoundationPresent?: boolean;
  /** Optional evaluation timestamp (ISO-8601). */
  readonly evaluatedAt?: string;
}

function freezeDeep<T extends object>(value: T): T {
  Object.freeze(value);
  for (const v of Object.values(value)) {
    if (v && typeof v === "object" && !Object.isFrozen(v)) {
      freezeDeep(v as object);
    }
  }
  return value;
}

/**
 * Evaluate pre-delivery control. HARD and B5 remain open by contract in this lot.
 * deliveryReady is always false.
 */
export function evaluatePreDeliveryControl(
  input: PreDeliveryControlInput = {},
): PreDeliveryControlDecision {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const b5Evidence: EvidenceState = input.b5FoundationPresent
    ? "FOUNDATION_PRESENT"
    : "PARTIAL";

  const hard: PreDeliveryBlockerRecord = {
    id: "HARD",
    status: "OPEN",
    severity: "HARD",
    openDependencies: [],
    evidenceState: "NONE",
    stopReason: "HARD remains OPEN HARD — authority/atomicity unresolved.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    deliveryReady: false,
    detail: "UNCHANGED — lot does not reduce HARD.",
  };

  const b5: PreDeliveryBlockerRecord = {
    id: "B5",
    status: input.b5FoundationPresent ? "REDUCED" : "OPEN",
    severity: "STOP_BEFORE_DELIVERY",
    openDependencies: ["HARD"],
    evidenceState: b5Evidence,
    stopReason:
      "B5 remains OPEN — STOP BEFORE DELIVERY while HARD is open and delivery is unauthorized.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    deliveryReady: false,
    detail: input.b5FoundationPresent
      ? "Control-plane foundation present; blocker REDUCED but still OPEN for delivery."
      : "Control-plane foundation incomplete; blocker OPEN.",
  };

  const r1: PreDeliveryBlockerRecord = {
    id: "R1",
    status: "OPEN",
    severity: "ATOMICITY",
    openDependencies: ["HARD"],
    evidenceState: "PARTIAL",
    stopReason: "R1 atomicity reserve remains OPEN.",
    actionAuthorized: "CONTINUE_FRAMING_ONLY",
    deliveryReady: false,
    detail: "Atomicity/rollback evidence may reduce R1 separately; never delivery-ready.",
  };

  const rm01: PreDeliveryBlockerRecord = {
    id: "R_M01",
    status: "OPEN",
    severity: "CLAIM_EVAL",
    openDependencies: [],
    evidenceState: "PARTIAL",
    stopReason: "R-M01 ClaimEvaluator readiness remains OPEN (T-A6 incomplete).",
    actionAuthorized: "CONTINUE_FRAMING_ONLY",
    deliveryReady: false,
    detail: "Bounded claim evaluation may reduce R-M01; never closes T-A6.",
  };

  const decision: PreDeliveryControlDecision = {
    schemaVersion: "t-a7-b5-control-plane.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    blockers: [b5, r1, rm01, hard],
    hardOpen: true,
    b5Open: true,
    deliveryReady: false,
    stopReason:
      "STOP BEFORE DELIVERY — B5 OPEN and HARD OPEN HARD; no delivery authorization.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    mutable: false,
    writeCommands: false,
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
  };

  return freezeDeep(decision);
}

export function assertNeverDeliveryReady(
  decision: PreDeliveryControlDecision,
): void {
  if (decision.deliveryReady !== false || decision.actionAuthorized !== "STOP_BEFORE_DELIVERY") {
    throw new Error(
      "Pre-delivery control violated: deliveryReady must be false and action STOP_BEFORE_DELIVERY.",
    );
  }
  if (!decision.hardOpen || !decision.b5Open) {
    throw new Error(
      "Pre-delivery control violated: HARD and B5 must remain open in this lot.",
    );
  }
  for (const b of decision.blockers) {
    if (b.deliveryReady !== false) {
      throw new Error(`Blocker ${b.id} must never report deliveryReady.`);
    }
  }
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/simulatedAtomicOperation.ts`

```
/**
 * T-A7 consolidated lot — R1 simulated atomic operation (in-memory only).
 * prepare → apply → verify → rollback. No persistence, migration, or real delivery.
 */

export type AtomicStep = "prepare" | "apply" | "verify" | "rollback";

export type AtomicOutcome =
  | "SUCCEEDED"
  | "FAILED_PREPARE"
  | "FAILED_APPLY"
  | "FAILED_VERIFY"
  | "ROLLED_BACK"
  | "ROLLBACK_FAILED"
  | "PARTIAL_FORBIDDEN";

export interface AtomicOperationState<T> {
  readonly phase: AtomicStep | "idle" | "done";
  readonly initialSnapshot: T;
  readonly workingSnapshot: T;
  readonly outcome: AtomicOutcome | "IN_PROGRESS";
  readonly history: readonly string[];
  readonly rolledBack: boolean;
  readonly partialValidated: false;
}

export interface AtomicOperationResult<T> {
  readonly schemaVersion: "t-a7-r1-atomic-sim.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly outcome: AtomicOutcome;
  readonly finalState: AtomicOperationState<T>;
  readonly persistence: "NONE_IN_MEMORY_ONLY";
  readonly productionRollbackProven: false;
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
}

export type AtomicStepHandler<T> = (state: T) => T;

export interface SimulatedAtomicPlan<T> {
  readonly initial: T;
  readonly prepare: AtomicStepHandler<T>;
  readonly apply: AtomicStepHandler<T>;
  readonly verify: (state: T) => boolean;
  readonly rollback: AtomicStepHandler<T>;
  /** Inject failures for drills (local simulation only). */
  readonly failAt?: AtomicStep;
  /** When failAt=rollback, rollback itself throws/fails. */
  readonly rollbackFails?: boolean;
}

function freezeResult<T extends object>(value: T): T {
  return Object.freeze(value);
}

function clonePlain<T>(value: T): T {
  return structuredClone(value);
}

/**
 * Run a fully simulated atomic operation. On any failure after prepare,
 * attempts rollback to the initial snapshot. Double rollback is idempotent.
 */
export function runSimulatedAtomicOperation<T>(
  plan: SimulatedAtomicPlan<T>,
): AtomicOperationResult<T> {
  const initialSnapshot = clonePlain(plan.initial);
  let working = clonePlain(plan.initial);
  const history: string[] = [];
  let rolledBack = false;

  const buildState = (
    phase: AtomicOperationState<T>["phase"],
    outcome: AtomicOperationState<T>["outcome"],
  ): AtomicOperationState<T> =>
    Object.freeze({
      phase,
      initialSnapshot: clonePlain(initialSnapshot),
      workingSnapshot: clonePlain(working),
      outcome,
      history: Object.freeze([...history]) as readonly string[],
      rolledBack,
      partialValidated: false as const,
    });

  const doRollback = (from: AtomicStep): AtomicOperationResult<T> => {
    history.push(`rollback:from:${from}`);
    if (plan.rollbackFails) {
      history.push("rollback:failed");
      return freezeResult({
        schemaVersion: "t-a7-r1-atomic-sim.1",
        accessSurface: "INTERNAL_ONLY",
        outcome: "ROLLBACK_FAILED",
        finalState: buildState("rollback", "ROLLBACK_FAILED"),
        persistence: "NONE_IN_MEMORY_ONLY",
        productionRollbackProven: false,
        mutable: false,
        iam: "NOT_SELECTED",
      });
    }
    working = clonePlain(plan.rollback(working));
    // Enforce return to initial for honesty of the simulation contract.
    working = clonePlain(initialSnapshot);
    rolledBack = true;
    history.push("rollback:restored_initial");
    return freezeResult({
      schemaVersion: "t-a7-r1-atomic-sim.1",
      accessSurface: "INTERNAL_ONLY",
      outcome: "ROLLED_BACK",
      finalState: buildState("done", "ROLLED_BACK"),
      persistence: "NONE_IN_MEMORY_ONLY",
      productionRollbackProven: false,
      mutable: false,
      iam: "NOT_SELECTED",
    });
  };

  // prepare
  history.push("prepare:start");
  if (plan.failAt === "prepare") {
    history.push("prepare:failed");
    return freezeResult({
      schemaVersion: "t-a7-r1-atomic-sim.1",
      accessSurface: "INTERNAL_ONLY",
      outcome: "FAILED_PREPARE",
      finalState: buildState("prepare", "FAILED_PREPARE"),
      persistence: "NONE_IN_MEMORY_ONLY",
      productionRollbackProven: false,
      mutable: false,
      iam: "NOT_SELECTED",
    });
  }
  working = plan.prepare(working);
  history.push("prepare:ok");

  // apply
  history.push("apply:start");
  if (plan.failAt === "apply") {
    history.push("apply:failed");
    return doRollback("apply");
  }
  working = plan.apply(working);
  history.push("apply:ok");

  // verify
  history.push("verify:start");
  if (plan.failAt === "verify" || !plan.verify(working)) {
    history.push("verify:failed");
    return doRollback("verify");
  }
  history.push("verify:ok");

  // optional rollback-at-success path for drills
  if (plan.failAt === "rollback") {
    return doRollback("rollback");
  }

  return freezeResult({
    schemaVersion: "t-a7-r1-atomic-sim.1",
    accessSurface: "INTERNAL_ONLY",
    outcome: "SUCCEEDED",
    finalState: buildState("done", "SUCCEEDED"),
    persistence: "NONE_IN_MEMORY_ONLY",
    productionRollbackProven: false,
    mutable: false,
    iam: "NOT_SELECTED",
  });
}

/**
 * Idempotent second rollback: if already rolled back / at initial, no-op success.
 */
export function runIdempotentRollback<T>(
  previous: AtomicOperationResult<T>,
  rollback: AtomicStepHandler<T>,
): AtomicOperationResult<T> {
  if (
    previous.outcome === "ROLLED_BACK" ||
    previous.finalState.rolledBack ||
    JSON.stringify(previous.finalState.workingSnapshot) ===
      JSON.stringify(previous.finalState.initialSnapshot)
  ) {
    const history = [
      ...previous.finalState.history,
      "rollback:idempotent_noop",
    ];
    return freezeResult({
      ...previous,
      outcome: "ROLLED_BACK",
      finalState: Object.freeze({
        ...previous.finalState,
        phase: "done" as const,
        outcome: "ROLLED_BACK" as const,
        history: Object.freeze(history) as readonly string[],
        rolledBack: true,
        partialValidated: false as const,
      }),
      productionRollbackProven: false,
    });
  }

  return runSimulatedAtomicOperation({
    initial: previous.finalState.initialSnapshot,
    prepare: (s) => s,
    apply: (s) => s,
    verify: () => false,
    rollback,
    failAt: "verify",
  });
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/boundedClaimEvaluator.ts`

```
/**
 * T-A7 consolidated lot — R-M01 bounded claim evaluator (INTERNAL_ONLY).
 * Honest statuses; refuses delivery/cutover/RUN/complete surclaims.
 * Does not close T-A6 or R-M01.
 */

export type BoundedClaimId =
  | "T_A7_COMPLETE"
  | "T_A6_COMPLETE"
  | "OPTION_A_COMPLETE"
  | "RUN_READY"
  | "DELIVERY_READY"
  | "CUTOVER_READY"
  | "F11_INTERNAL_CONTRACT_PRESENT"
  | "F13_BOUNDED_HISTORY_PRESENT"
  | "CI_GREEN_ONLY"
  | "HEALTH_SIMULATED"
  | "CUSTOM_BOUNDED";

export type ClaimEvaluationStatus =
  | "SUPPORTED"
  | "UNSUPPORTED"
  | "UNKNOWN"
  | "BLOCKED";

export type CriterionState = "SATISFIED" | "NOT_SATISFIED" | "UNKNOWN";

export interface ClaimCriterion {
  readonly id: string;
  readonly state: CriterionState;
  readonly detail: string;
}

export interface ClaimEvidenceSource {
  readonly id: string;
  readonly kind: "TEST" | "DOC" | "CI" | "OBSERVATION" | "UNKNOWN";
  readonly present: boolean;
  readonly detail: string;
}

export interface BoundedClaimEvaluation {
  readonly schemaVersion: "t-a7-r-m01-claim-eval.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly claimId: BoundedClaimId | string;
  readonly status: ClaimEvaluationStatus;
  readonly evidenceSources: readonly ClaimEvidenceSource[];
  readonly criteria: readonly ClaimCriterion[];
  readonly activeBlockers: readonly string[];
  readonly dependencies: readonly string[];
  readonly explanation: string;
  readonly rM01RemainsOpen: true;
  readonly tA6Complete: false;
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
}

export interface EvaluateBoundedClaimInput {
  readonly claimId: BoundedClaimId | string;
  readonly evidenceSources?: readonly ClaimEvidenceSource[];
  readonly criteria?: readonly ClaimCriterion[];
  readonly activeBlockers?: readonly string[];
  readonly tA6Complete?: boolean;
  readonly hardOpen?: boolean;
  readonly healthStatus?: "SIMULATED" | "OBSERVED" | "UNKNOWN";
  readonly ciGreen?: boolean;
}

const FORBIDDEN_SUPPORTED_CLAIMS: ReadonlySet<string> = new Set([
  "T_A7_COMPLETE",
  "T_A6_COMPLETE",
  "OPTION_A_COMPLETE",
  "RUN_READY",
  "DELIVERY_READY",
  "CUTOVER_READY",
]);

function freezeEval(value: BoundedClaimEvaluation): BoundedClaimEvaluation {
  return Object.freeze({
    ...value,
    evidenceSources: Object.freeze([...value.evidenceSources]),
    criteria: Object.freeze([...value.criteria]),
    activeBlockers: Object.freeze([...value.activeBlockers]),
    dependencies: Object.freeze([...value.dependencies]),
  });
}

/**
 * Evaluate a bounded claim. Forbidden surclaims never become SUPPORTED.
 * CI green alone and health SIMULATED never elevate RUN/delivery claims.
 */
export function evaluateBoundedClaim(
  input: EvaluateBoundedClaimInput,
): BoundedClaimEvaluation {
  const claimId = input.claimId;
  const hardOpen = input.hardOpen ?? true;
  const tA6Complete = input.tA6Complete ?? false;
  const healthStatus = input.healthStatus ?? "SIMULATED";
  const ciGreen = input.ciGreen ?? false;
  const evidenceSources = input.evidenceSources ?? [];
  const criteria = input.criteria ?? [];
  const activeBlockers = input.activeBlockers ?? [
    "B5_OPEN",
    "R1_OPEN",
    "R_M01_OPEN",
    "HARD_OPEN",
  ];

  const base = {
    schemaVersion: "t-a7-r-m01-claim-eval.1" as const,
    accessSurface: "INTERNAL_ONLY" as const,
    claimId,
    evidenceSources,
    criteria,
    activeBlockers,
    rM01RemainsOpen: true as const,
    tA6Complete: false as const,
    mutable: false as const,
    iam: "NOT_SELECTED" as const,
    persistence: "NOT_SELECTED" as const,
  };

  // Forbidden surclaims — always UNSUPPORTED or BLOCKED, never SUPPORTED.
  if (FORBIDDEN_SUPPORTED_CLAIMS.has(claimId)) {
    const deliveryAdjacent =
      claimId === "DELIVERY_READY" ||
      claimId === "CUTOVER_READY" ||
      claimId === "RUN_READY";

    if (deliveryAdjacent && hardOpen) {
      return freezeEval({
        ...base,
        status: "BLOCKED",
        dependencies: ["HARD", "B5", "T-A6"],
        explanation: `${claimId} is BLOCKED while HARD is OPEN HARD; CI/health cannot elevate delivery/cutover/RUN claims.`,
      });
    }

    if (
      (claimId === "T_A6_COMPLETE" ||
        claimId === "OPTION_A_COMPLETE" ||
        claimId === "T_A7_COMPLETE") &&
      !tA6Complete
    ) {
      return freezeEval({
        ...base,
        status: "BLOCKED",
        dependencies: ["T-A6", "R-M01"],
        explanation: `${claimId} is BLOCKED — T-A6 remains incomplete; R-M01 stays OPEN.`,
      });
    }

    return freezeEval({
      ...base,
      status: "UNSUPPORTED",
      dependencies: ["GOVERNANCE"],
      explanation: `${claimId} must never be SUPPORTED by this bounded evaluator.`,
    });
  }

  // CI green alone is never enough for readiness-adjacent claims.
  if (claimId === "CI_GREEN_ONLY") {
    return freezeEval({
      ...base,
      status: ciGreen ? "UNSUPPORTED" : "UNKNOWN",
      dependencies: ["EVIDENCE_BEYOND_CI"],
      explanation:
        "CI green alone is insufficient for readiness or delivery claims.",
    });
  }

  if (claimId === "HEALTH_SIMULATED") {
    return freezeEval({
      ...base,
      status: healthStatus === "SIMULATED" ? "UNSUPPORTED" : "UNKNOWN",
      dependencies: ["OBSERVED_HEALTH"],
      explanation:
        "health SIMULATED is not evidence of RUN READY.",
    });
  }

  // Bounded non-delivery claims may be SUPPORTED with complete evidence.
  if (
    claimId === "F11_INTERNAL_CONTRACT_PRESENT" ||
    claimId === "F13_BOUNDED_HISTORY_PRESENT" ||
    claimId === "CUSTOM_BOUNDED"
  ) {
    const allCriteriaOk =
      criteria.length > 0 &&
      criteria.every((c) => c.state === "SATISFIED");
    const evidenceOk =
      evidenceSources.length > 0 &&
      evidenceSources.every((e) => e.present);

    if (!evidenceOk && criteria.length === 0) {
      return freezeEval({
        ...base,
        status: "UNKNOWN",
        dependencies: ["EVIDENCE"],
        explanation: "Insufficient evidence to evaluate bounded claim.",
      });
    }

    if (allCriteriaOk && evidenceOk) {
      return freezeEval({
        ...base,
        status: "SUPPORTED",
        dependencies: [],
        explanation: `${claimId} SUPPORTED for bounded internal contract evidence only — does not imply RUN/delivery/cutover readiness.`,
      });
    }

    if (criteria.some((c) => c.state === "NOT_SATISFIED")) {
      return freezeEval({
        ...base,
        status: "UNSUPPORTED",
        dependencies: ["CRITERIA"],
        explanation: `${claimId} UNSUPPORTED — one or more criteria not satisfied.`,
      });
    }

    return freezeEval({
      ...base,
      status: "UNKNOWN",
      dependencies: ["CRITERIA", "EVIDENCE"],
      explanation: `${claimId} UNKNOWN — incomplete criteria or evidence.`,
    });
  }

  return freezeEval({
    ...base,
    status: "UNKNOWN",
    dependencies: ["UNKNOWN_CLAIM"],
    explanation: `Claim ${claimId} has no bounded evaluation rule — UNKNOWN.`,
  });
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/blockerAggregation.ts`

```
/**
 * T-A7 consolidated lot — read-only aggregation of B5 / R1 / R-M01 / HARD.
 * INTERNAL_ONLY. No HTTP, UI, IAM, persistence, or mutations.
 */

import {
  evaluatePreDeliveryControl,
  type PreDeliveryControlDecision,
} from "./blockerControlPlane";
import {
  evaluateBoundedClaim,
  type BoundedClaimEvaluation,
} from "./boundedClaimEvaluator";

export type AggregatedBlockerReduction =
  | "REDUCED"
  | "PARTIAL"
  | "NOT_REDUCED"
  | "UNCHANGED";

export interface AggregatedBlockerEntry {
  readonly id: "B5" | "R1" | "R_M01" | "HARD";
  readonly lifecycle: "OPEN" | "REDUCED" | "OPEN_HARD";
  readonly reduction: AggregatedBlockerReduction;
  readonly remainsOpen: true;
  readonly reasonsOpen: readonly string[];
  readonly nextEvidenceRequired: readonly string[];
  readonly evidenceState: string;
}

export interface BlockerAggregationSnapshot {
  readonly schemaVersion: "t-a7-blocker-aggregation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly preDelivery: PreDeliveryControlDecision;
  readonly sampleClaimGuard: BoundedClaimEvaluation;
  readonly blockers: readonly AggregatedBlockerEntry[];
  readonly hardUnchanged: true;
  readonly deliveryAuthorized: false;
  readonly cutoverAuthorized: false;
  readonly runReady: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
  readonly httpRoute: false;
}

export interface BlockerAggregationInput {
  readonly b5FoundationPresent?: boolean;
  readonly r1SimulationEvidencePresent?: boolean;
  readonly rM01FoundationPresent?: boolean;
  readonly evaluatedAt?: string;
}

export function queryBlockerAggregation(
  input: BlockerAggregationInput = {},
): BlockerAggregationSnapshot {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const b5FoundationPresent = input.b5FoundationPresent ?? true;
  const r1SimulationEvidencePresent =
    input.r1SimulationEvidencePresent ?? true;
  const rM01FoundationPresent = input.rM01FoundationPresent ?? true;

  const preDelivery = evaluatePreDeliveryControl({
    b5FoundationPresent,
    evaluatedAt,
  });

  const sampleClaimGuard = evaluateBoundedClaim({
    claimId: "DELIVERY_READY",
    hardOpen: true,
    tA6Complete: false,
    ciGreen: true,
    healthStatus: "SIMULATED",
  });

  const blockers: readonly AggregatedBlockerEntry[] = [
    {
      id: "B5",
      lifecycle: b5FoundationPresent ? "REDUCED" : "OPEN",
      reduction: b5FoundationPresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "HARD remains OPEN HARD",
        "STOP BEFORE DELIVERY still applies",
        "No delivery authorization",
      ],
      nextEvidenceRequired: [
        "Morris delivery gate",
        "HARD resolution or accepted bounded waiver",
        "Real pre-delivery acceptance evidence",
      ],
      evidenceState: b5FoundationPresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "R1",
      lifecycle: r1SimulationEvidencePresent ? "REDUCED" : "OPEN",
      reduction: r1SimulationEvidencePresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "Production rollback not proven",
        "Simulation/in-memory only",
        "HARD / Project↔Cycle atomicity unresolved",
      ],
      nextEvidenceRequired: [
        "Authorized rollback drill (non-prod)",
        "Durable atomicity before real execution",
      ],
      evidenceState: r1SimulationEvidencePresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "R_M01",
      lifecycle: rM01FoundationPresent ? "REDUCED" : "OPEN",
      reduction: rM01FoundationPresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "T-A6 not declared complete",
        "Bounded evaluator ≠ production ClaimEvaluator closure",
        "Surclaim refusals do not close the reserve",
      ],
      nextEvidenceRequired: [
        "T-A6 completion gate",
        "Morris closure of R-M01",
      ],
      evidenceState: rM01FoundationPresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "HARD",
      lifecycle: "OPEN_HARD",
      reduction: "UNCHANGED",
      remainsOpen: true,
      reasonsOpen: [
        "Authority / atomicity OPEN HARD",
        "Lot explicitly does not modify HARD",
      ],
      nextEvidenceRequired: [
        "Dedicated HARD reduction gate",
      ],
      evidenceState: "NONE",
    },
  ];

  return Object.freeze({
    schemaVersion: "t-a7-blocker-aggregation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    preDelivery,
    sampleClaimGuard,
    blockers: Object.freeze(blockers.map((b) => Object.freeze({ ...b }))),
    hardUnchanged: true,
    deliveryAuthorized: false,
    cutoverAuthorized: false,
    runReady: false,
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
    mutable: false,
    adminUi: false,
    writeCommands: false,
    httpRoute: false,
  });
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/index.ts`

```
/** Platform T-A7 bounded foundations (lot 1 + consolidated blocker reduction). */
export * from "./boundedHistoryRead";
export * from "./blockerControlPlane";
export * from "./simulatedAtomicOperation";
export * from "./boundedClaimEvaluator";
export * from "./blockerAggregation";
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-consolidated-blocker-reduction.test.ts`

```
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  assertNeverDeliveryReady,
  evaluatePreDeliveryControl,
} from "@/lib/platform/t-a7/blockerControlPlane";
import {
  runIdempotentRollback,
  runSimulatedAtomicOperation,
} from "@/lib/platform/t-a7/simulatedAtomicOperation";
import { evaluateBoundedClaim } from "@/lib/platform/t-a7/boundedClaimEvaluator";
import { queryBlockerAggregation } from "@/lib/platform/t-a7/blockerAggregation";
import { readMethodModeHold } from "@/lib/d1/methodModeHold";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import fs from "node:fs";
import path from "node:path";

describe("T-A7 B5 pre-delivery control plane", () => {
  it("keeps B5 blocking and never delivery-ready when HARD is open", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: true });
    expect(d.hardOpen).toBe(true);
    expect(d.b5Open).toBe(true);
    expect(d.deliveryReady).toBe(false);
    expect(d.actionAuthorized).toBe("STOP_BEFORE_DELIVERY");
    expect(d.accessSurface).toBe("INTERNAL_ONLY");
    expect(d.iam).toBe("NOT_SELECTED");
    expect(d.persistence).toBe("NOT_SELECTED");
    const b5 = d.blockers.find((b) => b.id === "B5");
    expect(b5?.status).toBe("REDUCED");
    expect(b5?.deliveryReady).toBe(false);
    expect(b5?.openDependencies).toContain("HARD");
    assertNeverDeliveryReady(d);
  });

  it("preserves UNKNOWN/PARTIAL honesty when foundation absent", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: false });
    const b5 = d.blockers.find((b) => b.id === "B5");
    expect(b5?.status).toBe("OPEN");
    expect(b5?.evidenceState).toBe("PARTIAL");
    expect(d.deliveryReady).toBe(false);
  });

  it("reports HARD dependency and freezes results", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: true });
    expect(d.blockers.find((b) => b.id === "HARD")?.status).toBe("OPEN");
    expect(() => {
      // @ts-expect-error intentional
      d.deliveryReady = true;
    }).toThrow();
  });
});

describe("T-A7 R1 simulated atomic operation", () => {
  type S = { value: number; label: string };

  const basePlan = {
    initial: { value: 1, label: "init" } satisfies S,
    prepare: (s: S) => ({ ...s, label: "prepared" }),
    apply: (s: S) => ({ ...s, value: s.value + 1, label: "applied" }),
    verify: (s: S) => s.value === 2 && s.label === "applied",
    rollback: (s: S) => ({ ...s, value: 1, label: "init" }),
  };

  it("succeeds on nominal simulation", () => {
    const r = runSimulatedAtomicOperation(basePlan);
    expect(r.outcome).toBe("SUCCEEDED");
    expect(r.persistence).toBe("NONE_IN_MEMORY_ONLY");
    expect(r.productionRollbackProven).toBe(false);
    expect(r.finalState.partialValidated).toBe(false);
    expect(r.finalState.workingSnapshot.value).toBe(2);
  });

  it("fails prepare without mutating past initial", () => {
    const r = runSimulatedAtomicOperation({ ...basePlan, failAt: "prepare" });
    expect(r.outcome).toBe("FAILED_PREPARE");
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
  });

  it("rolls back after apply failure", () => {
    const r = runSimulatedAtomicOperation({ ...basePlan, failAt: "apply" });
    expect(r.outcome).toBe("ROLLED_BACK");
    expect(r.finalState.rolledBack).toBe(true);
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
    expect(r.finalState.partialValidated).toBe(false);
  });

  it("rolls back after verify failure", () => {
    const r = runSimulatedAtomicOperation({
      ...basePlan,
      verify: () => false,
    });
    expect(r.outcome).toBe("ROLLED_BACK");
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
  });

  it("supports idempotent double rollback", () => {
    const first = runSimulatedAtomicOperation({
      ...basePlan,
      failAt: "apply",
    });
    const second = runIdempotentRollback(first, basePlan.rollback);
    expect(second.outcome).toBe("ROLLED_BACK");
    expect(second.finalState.history).toContain("rollback:idempotent_noop");
  });

  it("reports rollback failure honestly", () => {
    const r = runSimulatedAtomicOperation({
      ...basePlan,
      failAt: "verify",
      rollbackFails: true,
    });
    expect(r.outcome).toBe("ROLLBACK_FAILED");
    expect(r.productionRollbackProven).toBe(false);
  });

  it("never claims external persistence", () => {
    const r = runSimulatedAtomicOperation(basePlan);
    expect(r.persistence).toBe("NONE_IN_MEMORY_ONLY");
    expect(r.iam).toBe("NOT_SELECTED");
  });
});

describe("T-A7 R-M01 bounded claim evaluator", () => {
  it("supports bounded non-delivery claims with full evidence", () => {
    const e = evaluateBoundedClaim({
      claimId: "F11_INTERNAL_CONTRACT_PRESENT",
      evidenceSources: [
        { id: "t1", kind: "TEST", present: true, detail: "unit" },
      ],
      criteria: [
        { id: "c1", state: "SATISFIED", detail: "INTERNAL_ONLY" },
      ],
    });
    expect(e.status).toBe("SUPPORTED");
    expect(e.rM01RemainsOpen).toBe(true);
    expect(e.tA6Complete).toBe(false);
  });

  it("marks unsupported / unknown / blocked honestly", () => {
    expect(
      evaluateBoundedClaim({
        claimId: "F11_INTERNAL_CONTRACT_PRESENT",
        evidenceSources: [
          { id: "t1", kind: "TEST", present: true, detail: "unit" },
        ],
        criteria: [
          { id: "c1", state: "NOT_SATISFIED", detail: "missing" },
        ],
      }).status,
    ).toBe("UNSUPPORTED");

    expect(
      evaluateBoundedClaim({
        claimId: "F11_INTERNAL_CONTRACT_PRESENT",
      }).status,
    ).toBe("UNKNOWN");

    expect(
      evaluateBoundedClaim({
        claimId: "DELIVERY_READY",
        hardOpen: true,
        ciGreen: true,
      }).status,
    ).toBe("BLOCKED");
  });

  it("refuses CI-green-only and health SIMULATED as readiness proof", () => {
    expect(
      evaluateBoundedClaim({ claimId: "CI_GREEN_ONLY", ciGreen: true }).status,
    ).toBe("UNSUPPORTED");
    expect(
      evaluateBoundedClaim({
        claimId: "HEALTH_SIMULATED",
        healthStatus: "SIMULATED",
      }).status,
    ).toBe("UNSUPPORTED");
  });

  it("blocks delivery/cutover/RUN claims while HARD is open", () => {
    for (const claimId of [
      "DELIVERY_READY",
      "CUTOVER_READY",
      "RUN_READY",
    ] as const) {
      const e = evaluateBoundedClaim({ claimId, hardOpen: true, ciGreen: true });
      expect(e.status).toBe("BLOCKED");
      expect(e.status).not.toBe("SUPPORTED");
    }
  });

  it("blocks T-A6/Option A/T-A7 complete while T-A6 incomplete", () => {
    for (const claimId of [
      "T_A6_COMPLETE",
      "OPTION_A_COMPLETE",
      "T_A7_COMPLETE",
    ] as const) {
      const e = evaluateBoundedClaim({ claimId, tA6Complete: false });
      expect(e.status).toBe("BLOCKED");
      expect(e.rM01RemainsOpen).toBe(true);
    }
  });
});

describe("T-A7 blocker aggregation + compatibility", () => {
  it("aggregates B5/R1/R-M01/HARD as reduced-but-open and HARD unchanged", () => {
    const snap = queryBlockerAggregation();
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.httpRoute).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.deliveryAuthorized).toBe(false);
    expect(snap.cutoverAuthorized).toBe(false);
    expect(snap.runReady).toBe(false);
    expect(snap.hardUnchanged).toBe(true);
    expect(snap.sampleClaimGuard.status).toBe("BLOCKED");

    const byId = Object.fromEntries(snap.blockers.map((b) => [b.id, b]));
    expect(byId.B5.reduction).toBe("REDUCED");
    expect(byId.B5.remainsOpen).toBe(true);
    expect(byId.R1.reduction).toBe("REDUCED");
    expect(byId.R1.remainsOpen).toBe(true);
    expect(byId.R_M01.reduction).toBe("REDUCED");
    expect(byId.R_M01.remainsOpen).toBe(true);
    expect(byId.HARD.reduction).toBe("UNCHANGED");
    expect(byId.HARD.lifecycle).toBe("OPEN_HARD");
  });

  it("remains compatible with MethodMode hold and F11 readiness", () => {
    const hold = readMethodModeHold();
    expect(hold.active).toBe(true);
    const codes = hold.reasons.map((r) => r.code);
    expect(codes).toEqual(
      expect.arrayContaining([
        "B5_OPEN",
        "R1_OPEN",
        "R_M01_OPEN",
        "HARD_OPEN",
      ]),
    );

    const f11 = queryOperationalReadiness();
    expect(f11.accessSurface).toBe("INTERNAL_ONLY");
    expect(f11.readinessStatus).toBe("NOT_READY");
    expect(f11.observed.health.status).toBe("SIMULATED");
  });

  it("exports only from platform/t-a7 barrel without HTTP routes", () => {
    const barrel = path.join(
      process.cwd(),
      "lib/platform/t-a7/index.ts",
    );
    const src = fs.readFileSync(barrel, "utf8");
    expect(src).toContain("blockerControlPlane");
    expect(src).toContain("simulatedAtomicOperation");
    expect(src).toContain("boundedClaimEvaluator");
    expect(src).toContain("blockerAggregation");
    expect(src).not.toMatch(/next\/(server|headers)|express|http\.createServer/);
  });

  it("does not import method/** or OPS1 functional modules", () => {
    const root = path.join(process.cwd(), "lib/platform/t-a7");
    for (const file of [
      "blockerControlPlane.ts",
      "simulatedAtomicOperation.ts",
      "boundedClaimEvaluator.ts",
      "blockerAggregation.ts",
    ]) {
      const src = fs.readFileSync(path.join(root, file), "utf8");
      expect(src).not.toMatch(/from ["']method\//);
      expect(src).not.toMatch(/ops1/i);
      expect(src).not.toMatch(/better-sqlite|sqlite|postgres|prisma/i);
      expect(src).not.toMatch(/fetch\(|axios|node:net/);
    }
  });
});
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/19-consolidated-b5-r1-r-m01-blocker-reduction-lot.md`

```
# 19 — Consolidated B5 / R1 / R-M01 blocker reduction lot

| Champ | Valeur |
|-------|--------|
| **Document** | `19-consolidated-b5-r1-r-m01-blocker-reduction-lot.md` |
| **Statut** | `EXECUTED LOCALLY — REDUCED — REMAINS OPEN` |
| **Date/heure/fuseau** | 2026-07-29 10:08:00 CEST (+0200) |
| **Cycle** | 6 — Architecture technique et implémentation (+ 7/9/12/15) |
| **Profil** | Critical · EVOL / QA / DOC |
| **Gate Morris** | `GO FRAME AND EXECUTE CONSOLIDATED T-A7 BLOCKER REDUCTION LOT — B5 R1 R-M01 — INCLUDE CODE TESTS AND DOCUMENTATION — HARD REMAINS OPEN — NO IAM PERSISTENCE DELIVERY OR CUTOVER` |
| **Branche** | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
| **Base** | `origin/main` @ `bddfc6ac821b5684cd4b611d397596aa8e310802` |
| **Push / PR** | **aucun** (ce cycle) |

---

## 1. Objet du lot consolidé

Réduire de façon **substantielle et démontrée** les blockers B5, R1 et R-M01 via des contrats INTERNAL_ONLY testables, sans fermeture artificielle, sans toucher HARD, sans IAM/persistance, sans delivery/cutover.

---

## 2. Gate Morris

Consommé : gate consolidé ci-dessus.

Autorisé : code borné, tests, docs, commits locaux, PR readiness locale, handoff L3.

Interdit : push projet, PR, merge, IAM, persistence, delivery, cutover, fermeture B5/R1/R-M01/HARD.

---

## 3. Base et branche

| Champ | Valeur |
|-------|--------|
| Base | `bddfc6ac821b5684cd4b611d397596aa8e310802` (PR #289 mergée) |
| Branche | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
| Upstream | **aucun** |

---

## 4. Sources Git

- Pack T-A7 docs `01`–`18` (priorité `04`, `06`, `10`, `11`, `12`–`18`)
- `methodModeHold.ts` (raisons B5/R1/R-M01/HARD préservées)
- `operationalReadiness.ts` / `boundedHistoryRead.ts`
- Handoff parent `7106139…` / blob `e51013bc…`
- A52 framing (référencé via docs pack)

---

## 5. Définition B5

| Item | Valeur |
|------|--------|
| Canonique | STOP BEFORE DELIVERY (doc `06`, `11`, A52-B5) |
| Source runtime | hold reason `B5_OPEN` |
| État avant lot | OPEN |
| Fermeture complète | exige résolution HARD + gate delivery Morris |
| Réductible ici | control plane déterministe pré-delivery |
| Reste ouvert | delivery non autorisée ; HARD ouvert |
| Résultat | **REDUCED — REMAINS OPEN** |

---

## 6. Définition R1

| Item | Valeur |
|------|--------|
| Canonique | réserve d’atomicité Project↔Cycle (doc `06`/`11`) — **≠** rollback R1 de doc `04` |
| Source runtime | hold reason `R1_OPEN` |
| État avant lot | OPEN |
| Fermeture complète | atomicité durable + drills autorisés avant exécution réelle |
| Réductible ici | simulation in-memory prepare/apply/verify/rollback |
| Reste ouvert | pas de preuve production ; HARD lié |
| Résultat | **REDUCED — REMAINS OPEN** |

---

## 7. Définition R-M01

| Item | Valeur |
|------|--------|
| Canonique | ClaimEvaluator readiness (doc `06`/`11`) |
| Source runtime | hold reason `R_M01_OPEN` |
| État avant lot | OPEN |
| Fermeture complète | T-A6 complete + fermeture Morris |
| Réductible ici | évaluateur borné + anti-surclaims |
| Reste ouvert | T-A6 NOT COMPLETE |
| Résultat | **REDUCED — REMAINS OPEN** |

---

## 8. HARD préservé

| Item | Valeur |
|------|--------|
| Statut | **OPEN HARD — UNCHANGED** |
| Action lot | lecture / préservation uniquement |
| Hold | `HARD_OPEN` inchangé |

---

## 9. Architecture retenue

Modules INTERNAL_ONLY sous `app/lib/platform/t-a7/` :

1. `blockerControlPlane.ts` — B5 pre-delivery control
2. `simulatedAtomicOperation.ts` — R1 atomic sim
3. `boundedClaimEvaluator.ts` — R-M01 claim eval
4. `blockerAggregation.ts` — vue agrégée read-only

Réutilise patterns F11/F13 (readonly, freeze, INTERNAL_ONLY, NOT_SELECTED).

Hold MethodMode **non modifié** (garde-fous runtime préservés).

---

## 10. Architecture non retenue

- Framework workflow générique
- Second store / event bus
- Couche HTTP / UI admin
- Coupling D1 → OA ClaimEvaluator product
- Modification OPS1 / method/**
- Nouvelle dépendance npm
- Fermeture automatique des hold reasons

---

## 11. Fichiers créés / modifiés

**Créés :**

- `app/lib/platform/t-a7/blockerControlPlane.ts`
- `app/lib/platform/t-a7/simulatedAtomicOperation.ts`
- `app/lib/platform/t-a7/boundedClaimEvaluator.ts`
- `app/lib/platform/t-a7/blockerAggregation.ts`
- `app/__tests__/platform/t-a7-consolidated-blocker-reduction.test.ts`
- `…/t-a7-technical-readiness-framing/19-consolidated-b5-r1-r-m01-blocker-reduction-lot.md`

**Modifiés :**

- `app/lib/platform/t-a7/index.ts`
- `…/t-a7-technical-readiness-framing/README.md`

---

## 12. Contrats implémentés

| Contrat | Garanties |
|---------|-----------|
| B5 control | `deliveryReady=false` · `STOP_BEFORE_DELIVERY` · HARD dependency · immutable |
| R1 atomic | prepare/apply/verify/rollback · in-memory · `productionRollbackProven=false` |
| R-M01 eval | SUPPORTED/UNSUPPORTED/UNKNOWN/BLOCKED · refuse surclaims |
| Aggregation | B5/R1/R-M01/HARD · remainsOpen=true · no HTTP |

---

## 13. Tests et résultats

Commandes (depuis `projects/sfia-studio/app`) :

- `npx tsc --noEmit` → PASS
- lint ciblé fichiers lot → PASS
- `npx vitest run __tests__/platform/ __tests__/d1/t-a7-` → **71 passed**
- dont nouveau fichier : **19 tests** PASS

---

## 14. Preuves de réduction B5

- Control plane centralisé déterministe
- Impossible `deliveryReady=true` avec HARD open
- Statut lifecycle `REDUCED` avec `b5Open=true`
- Tests : blocking, immutability, dépendances

---

## 15. Preuves de réduction R1

- Simulation succès / échecs prepare/apply/verify
- Rollback + idempotence + rollback failed
- Aucune persistance externe
- `productionRollbackProven=false` honnête

---

## 16. Preuves de réduction R-M01

- Claims bornés SUPPORTED avec preuves
- Surclaims T-A7/T-A6/Option A/RUN/delivery/cutover → BLOCKED/UNSUPPORTED
- CI green seule insuffisante
- health SIMULATED insuffisant
- `rM01RemainsOpen=true` toujours

---

## 17. Raisons du maintien OPEN

| Blocker | Pourquoi OPEN |
|---------|---------------|
| B5 | HARD open · delivery non autorisée |
| R1 | pas de drill réel · atomicité durable absente |
| R-M01 | T-A6 incomplete · pas de fermeture Morris |
| HARD | hors périmètre · UNCHANGED |

---

## 18. Anti-claims

- Réduction ≠ fermeture
- Simulation ≠ rollback production
- Claim evaluator borné ≠ T-A6 complete
- CI verte ≠ RUN READY / delivery ready
- Aggregation ≠ API HTTP / UI
- Lot local ≠ push/PR/merge

---

## 19. Dette évitée

- pas de any / ts-ignore
- pas de nouveau package
- pas d’IAM/persistence
- pas de modification hold defaults
- pas de HTTP/UI
- pas de surclaim

---

## 20. Risques résiduels

| Risque | Nature |
|--------|--------|
| Confusion R1 atomicité vs rollback doc 04 | documentée |
| Sur-interprétation REDUCED | remains OPEN explicite |
| HARD non traité | volontaire |
| Absence drill réel | `productionRollbackProven=false` |

---

## 21. Rollback du lot

- Revert des commits locaux / branche
- Aucune migration à défaire
- Hold MethodMode inchangé → runtime inchangé hors nouveaux modules non branchés en delivery

---

## 22. PR readiness

À produire dans le même cycle (locale) — push/PR **non autorisés** ici.

---

## 23. Gate suivant candidat

`GO PUSH AND OPEN PR — T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION — NO MERGE DELIVERY OR CUTOVER`

---

## 24. Verdict

`T-A7 CONSOLIDATED BLOCKER REDUCTION LOT COMPLETE — B5 R1 R-M01 SUBSTANTIALLY REDUCED AND REMAIN OPEN — HARD REMAINS OPEN HARD — CODE TESTS AND DOCUMENTATION COMPLETE — NO IAM PERSISTENCE DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Mise à jour lot consolidé B5/R1/R-M01** | 2026-07-29 10:08:00 CEST (+0200) |
| **Mise à jour post-merge PR #288** | 2026-07-29 02:09:00 CEST (+0200) |
| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
| **Mise à jour correctif F-PR-01** | 2026-07-29 00:27:00 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
| **Lot L-F11F13** | `INTEGRATED ON MAIN` (PR [#288](https://github.com/mcleland147/sfia-workspace/pull/288) · merge `a105431…`) |
| **F-PR-01** | `RESOLVED` (TS2322 · commit `5afe095…`) |
| **CI post-merge** | run `30407614333` — **SUCCESS** |
| **Lot consolidé B5/R1/R-M01** | `EXECUTED LOCALLY` — voir `19` |
| **B5 / R1 / R-M01** | `REDUCED — REMAINS OPEN` |
| **HARD** | `OPEN HARD — UNCHANGED` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
| **F11.2** | contrat **INTERNAL_ONLY** intégré sur `main` · pas HTTP/UI · **≠ cutover-complete** |
| **F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY intégré · **≠ archive / cutover** |
| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **Main tip (docs #289)** | `bddfc6ac821b5684cd4b611d397596aa8e310802` |
| **Main validé (technique #288)** | `a10543143f88ac3bd886c717d49e2d6163c6b360` (snapshot historique) |
| **Branche lot consolidé** | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
| **Push / PR (branche lot)** | **aucun** |

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01`–`09` | framing readiness / O2 |
| `10` | lot 1 borné (O3) |
| `11` | post-merge lot 1 + options N1–N5 |
| `12` | F11.2 completion surface & gaps |
| `13` | F13.4 completion surface & gaps |
| `14` | dépendances & frontières runtime |
| `15` | options de lots bornés futurs |
| `16` | decision pack Morris F11/F13 |
| `17` | résultats lot L-F11F13 (pré-merge) |
| `18` | post-merge validation & capitalisation PR #288 |
| `19` | lot consolidé réduction B5 / R1 / R-M01 (local) |

## État courant sur `main` (+ lot local)

1. MethodMode hold (lot 1) — défaut actif ; override test-only hors barrel
2. F11.2 INTERNAL_ONLY + états READY/NOT_READY/UNKNOWN — **intégré** (PR #288)
3. F13.4 seed enrichi + SHA + PREFIX_ONLY + GIT_ONLY — **intégré** (PR #288)
4. F-PR-01 typings — **résolu** et validé par CI post-merge
5. Doc 18 capitalisation PR #288 — **intégré** (PR #289 · main `bddfc6a…`)
6. Lot consolidé B5/R1/R-M01 — **exécuté localement** (doc `19`) · **non poussé**

## Anti-claims

- PR #288 mergée ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
- F11/F13 internal completion ≠ HTTP public ≠ IAM ≠ persistence
- contrat interne F11 ≠ API réseau
- seed F13 + SHA ≠ store concurrent à Git
- hold ≠ blockers fermés
- CI verte ≠ RUN READY / RGPD VALIDATED
- capitalisation ≠ nouvelle décision Morris
- B5/R1/R-M01 REDUCED ≠ CLOSED / SATISFIED / DELIVERY READY
- simulation R1 ≠ rollback production prouvé
- claim evaluator borné ≠ T-A6 complete

## Gate candidat suivant

`GO PUSH AND OPEN PR — T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION — NO MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · `READY FOR MORRIS PUSH AND PR DECISION` (après PR readiness locale)

HARD reste `OPEN HARD`. Aucune autorisation delivery/cutover.

## Verdict courant

`T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION EXECUTED LOCALLY — REDUCED AND REMAIN OPEN — HARD UNCHANGED — NO IAM PERSISTENCE DELIVERY OR CUTOVER — PROJECT BRANCH NOT PUSHED`

---

## Historique — lot L-F11F13 (pré-intégration)

> Section **historique**. Voir `17` et `18`.

Avant merge #288, le lot existait sur
`delivery/sfia-studio-t-a7-f11-f13-internal-completion` @ `5afe095…`.
Les formulations « READY FOR PR READINESS RE-RUN » / « TYPECHECK TO BE RECONFIRMED »
étaient **vraies avant** push/PR/merge #288 ; elles sont **obsolètes** pour l’état courant en tête de README.

---

## Historique post-merge (lot 1)

> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.

Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.

Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris.

---

## Historique du lot local pré-intégration (lot 1)

> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.

Avant PR #287, le lot 1 existait uniquement en local sur
`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.

À cette étape, le résumé d’état indiquait correctement :

- `Push / PR projet : aucun`
- gate d’intégration candidat `NOT CONSUMED`
- verdict se terminant par `PROJECT BRANCH NOT PUSHED`

Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.
```


---

## 9. Commits locaux

```
27fd257 feat(sfia-studio): implement consolidated T-A7 blocker controls
 .../t-a7-consolidated-blocker-reduction.test.ts    | 275 +++++++++++++++++++++
 .../app/lib/platform/t-a7/blockerAggregation.ts    | 169 +++++++++++++
 .../app/lib/platform/t-a7/blockerControlPlane.ts   | 170 +++++++++++++
 .../app/lib/platform/t-a7/boundedClaimEvaluator.ts | 236 ++++++++++++++++++
 .../sfia-studio/app/lib/platform/t-a7/index.ts     |   6 +-
 .../lib/platform/t-a7/simulatedAtomicOperation.ts  | 210 ++++++++++++++++
 6 files changed, 1065 insertions(+), 1 deletion(-)

c24da11 docs(sfia-studio): document consolidated T-A7 blocker reduction lot
 ...nsolidated-b5-r1-r-m01-blocker-reduction-lot.md | 266 +++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     |  28 ++-
 2 files changed, 285 insertions(+), 9 deletions(-)
```

Count : **2** (`27fd257`, `c24da11` / HEAD `c24da112ed3d67479d7b3e7715c78da3c26be78e`)

---

## 10. Commandes et résultats

| Commande | Résultat |
|----------|----------|
| `npx tsc --noEmit` | PASS (ec=0) |
| lint ciblé Next | PASS — no warnings/errors |
| `npx vitest run __tests__/platform/ __tests__/d1/t-a7-` | **71 passed** |
| nouveau test file | **19 passed** |
| `npx next build` | PASS |
| `git diff --check` | PASS |

---

## 11. Preuves de réduction / maintien OPEN

| Blocker | Réduction | Reste OPEN parce que |
|---------|-----------|----------------------|
| B5 | REDUCED | HARD open · STOP BEFORE DELIVERY · no delivery auth |
| R1 | REDUCED | no production drill · in-memory only |
| R-M01 | REDUCED | T-A6 incomplete · reserve not closed |
| HARD | UNCHANGED | lot explicitly preserves |

---

## 12. Findings (PR readiness)

| ID | Sévérité | Blocker | Preuve | Impact | Correction | Statut | Bloquant push/PR |
|----|----------|---------|--------|--------|------------|--------|------------------|
| F-LOT-01 | Info | R1 | Deux sens « R1 » (atomicité vs rollback doc 04) documentés | Confusion possible | Clarifié dans doc 19 | open/info | non |
| F-LOT-02 | Info | — | Modules non branchés dans un chemin delivery runtime | Réduction contractuelle locale | Intentionnel | accepted | non |

**Aucun Critical / Major.**

---

## 13. Matrice PR readiness

| Critère | Verdict |
|---------|---------|
| Base origin/main | PASS |
| 1–3 commits | PASS (2) |
| Scope autorisé | PASS |
| Typecheck/lint/build/tests | PASS |
| Docs 19 + README | PASS |
| Blockers honnêtes | PASS |
| HARD unchanged | PASS |
| No IAM/persistence/delivery | PASS |
| Upstream / push / PR | aucun |
| Working tree tracked | propre |
| **Verdict** | **READY FOR MORRIS PUSH AND PR DECISION** |

---

## 14. Git final

| Champ | Valeur |
|-------|--------|
| Branche | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
| HEAD | `c24da112ed3d67479d7b3e7715c78da3c26be78e` |
| Upstream | aucun |
| tracked | propre |
| untracked | `.tmp-sfia-review/**` only |
| push projet | **aucun** |

---

## 15. Actions non exécutées

- push branche projet
- création / merge PR
- IAM / persistence / migration
- modification HARD / OPS1 / method/**
- delivery / cutover
- fermeture B5/R1/R-M01

---

## 16. Risques / réserves

- REDUCED mal lu comme CLOSED → anti-claims explicites
- R1 naming collision → documentée
- HARD toujours OPEN HARD

---

## 17. Gate candidat

`GO PUSH AND OPEN PR — T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION — NO MERGE DELIVERY OR CUTOVER`

---

## 18. Verdict

`T-A7 CONSOLIDATED BLOCKER REDUCTION LOT COMPLETE — B5 R1 R-M01 SUBSTANTIALLY REDUCED AND REMAIN OPEN — HARD REMAINS OPEN HARD — CODE TESTS AND DOCUMENTATION COMPLETE — NO IAM PERSISTENCE DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION — HANDOFF UPDATED AND REMOTE VERIFIED`
