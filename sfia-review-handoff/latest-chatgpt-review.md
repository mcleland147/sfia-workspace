# FULL Review Pack — W3-B Terminal + Evidence Delivery

## 1. Timestamp
- Local: 2026-08-24 12:24:44 CEST (+0200)
- UTC: 2026-08-24 10:24:44 UTC

## 2. Local Git Truth Check (entry)
- `pwd` = `/Users/morris/Projects/sfia-workspace`
- toplevel = `/Users/morris/Projects/sfia-workspace`
- branch created: `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` from `origin/main`
- HEAD = `ba7aa2db408b7fd00faf9638da060ce0833b794b`
- origin/main = `ba7aa2db408b7fd00faf9638da060ce0833b794b` (match — no BASE DRIFT)
- Initial tracked dirty: none for sfia-studio (orthogonals preserved: `.tmp-sfia-review/`, `eventops-poc/`, `flex-office-demo/`)
- Staged: EMPTY throughout (no project commit)

## 3–5. Branch / HEAD / origin/main
- Branch: `delivery/sfia-studio-product-completion-w3-b-terminal-evidence`
- HEAD: `ba7aa2db408b7fd00faf9638da060ce0833b794b` (unchanged — no project commit)
- origin/main: `ba7aa2db408b7fd00faf9638da060ce0833b794b`

## 6. Initial tracked / staged / untracked
- Tracked project changes at start: none
- Staged: empty
- Untracked orthogonals preserved (not touched)

## 7–8. Morris decisions consumed
- W3-A CLOSED BY MORRIS (prior)
- W3-B qualification VALIDATED BY MORRIS
- GO MORRIS — W3-B TERMINAL + EVIDENCE DELIVERY — CONSUMED
- W3 Delivery remains IN PROGRESS / NOT CLOSED
- REAL OUT · FinOps FREEZE · W4 OUT · W3-C/D/E NOT STARTED · C6 CLOSED · runtime v3 NON ADOPTED

## 9. Sources read
Process v2.6 templates + routing + operating model + guardrails; convergence build doctrine + roadmap; product-completion 01–03,05–11; UX 01–03; v3 framing 34/35/37; W2/W3-A runtime; OA execution-attempt + evidence-review; F3 harvest read-only; vertical-slice-runtime.

## 10. Convergence qualification
- Capability: V3-F05 + V3-F14 + V3-F15 via US-P1-05/06 / FC-11/12
- Milestone: W3-B Terminal + Evidence — DELIVERY AUTHORIZED / IN PROGRESS
- W1/W2/W3-A CLOSED; W3 IN PROGRESS; W3-C next NOT STARTED
- No parallel architecture; C6 CLOSED implement-only

## 11. CKC process qualification
- Detailed Delivery CKC method pilot: ABSENT → process v2.6 fallback procedural only
- CKC authority: NONE for this cycle
- Outcome engine cycle-agnostic (no CKC→outcome)

## 12. Asset classification table

| ASSET | CURRENT STATE | KEEP/ADAPT/COMPLETE/HARVEST/FREEZE | W3-B USE | DOWNSTREAM OWNER |
|---|---|---|---|---|
| ExecutionAttempt + SQLite | Terminal succeeded/failed/timeout/cancelled | KEEP | Technical terminal facts | OA |
| ExecutionContract | W3-A prepare/authorize | KEEP | Binding + lineage | OA |
| TestExecutionAdapter | External fake | KEEP | Scripted launch/cancel only | W3-A/W3-B proof |
| IngestExecutionAttemptEvidence | Was succeeded-only | ADAPT/COMPLETE | All honest terminals | FC-12 |
| ReviewBundle repo | Exists | KEEP | Create after Evidence | FC-12 |
| FC-11 semantics | Missing | COMPLETE (new pure seam) | SUCCESS/STOP/FAIL/UNCLAIMED | W3-B |
| W3-A governed execute seam | select/start/record | ADAPT | +cancel/+fail + materialize | W3-B |
| TrajectorySurface | Technical attempt only | COMPLETE | Business-first product outcome | W3-B / W4 polish later |
| F3 evidence/Nora | Harvest patterns | HARVEST / FREEZE orchestration | No Nora/replan | W3-C |
| REAL adapters | OUT | FREEZE | — | REAL GO |
| W4 global UX | OUT | FREEZE | Local proof only | W4 |

## 13. Architecture / no-parallel conclusion
Single canonical `/studio` path. No second Attempt aggregate, store, engine, or parallel product route. C6 not reopened.

## 14. Runtime discovery (summary)
- Attempt terminals durable with resultRef/errorRef/stopReason/cancelledAt/failedAt/timedOutAt
- CancelExecutionAttempt = governed stop with reason
- RecordExecutionFailure = technical fail
- Prior ingest refused non-succeeded — extended fail-closed to all terminals with required facts
- Snapshot bridge extended for cancel/timeout fields

## 15. Initial W3-B gaps (closed in this lot)
1. No Product Outcome qualifier (FC-11)
2. Evidence ingest succeeded-only
3. No product materialize Evidence+RB after terminal
4. No STOP/FAIL product paths on /studio
5. UI claimed technical-only honesty without product claim surface
6. Roadmap/doc11 still showed W3-B NOT AUTHORIZED

## 16. Implementation approach
ADAPT W3-A seam + COMPLETE ingest + ADD pure FC-11 + materialize/rehydrate + UI business-first + tests/E2E + Roadmap/doc11 truth sync. No F3 Nora. No LPS learning mutation.

## 17. Changed / new files
### Modified (tracked)
M	projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
M	projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md

### New (untracked project)
projects/sfia-studio/app/__tests__/project-assistant/w3bProductOutcomeSemantics.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w3bTerminalEvidence.test.ts
projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
projects/sfia-studio/app/features/project-assistant/w2/w3bMaterializeProductOutcome.ts
projects/sfia-studio/app/features/project-assistant/w2/w3bProductOutcomeSemantics.ts

### Diffstat
 .../evidence-review/adversarialValidation.test.ts  |  40 ++-
 .../ingestExecutionAttemptEvidence.test.ts         |  36 +-
 .../importBoundaries.test.ts                       |   1 +
 .../surfaces/TrajectorySurface.module.css          |  29 ++
 .../surfaces/TrajectorySurface.tsx                 | 383 ++++++++++++++++++++-
 .../app/features/project-assistant/w2/actions.ts   | 106 ++++++
 .../w2/governedExecuteAuthorizedContract.ts        | 160 +++++++++
 .../app/features/project-assistant/w2/types.ts     |  46 +++
 .../application/ingestExecutionAttemptEvidence.ts  |  81 ++++-
 .../app/lib/oa/evidence-review/domain/types.ts     |   4 +
 .../lib/vertical-slice-runtime/f3FixtureWiring.ts  |   4 +
 .../convergence/sfia-studio-convergence-roadmap.md |  14 +-
 ...product-completion-wave-3-delivery-readiness.md |  40 ++-
 13 files changed, 893 insertions(+), 51 deletions(-)

## 18. FULL CONTENT — new project files

### `projects/sfia-studio/app/__tests__/project-assistant/w3bProductOutcomeSemantics.test.ts`

```typescript
/**
 * W3-B FC-11 Product Outcome semantics — pure qualification (no store).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { qualifyProductOutcome } from "@/features/project-assistant/w2/w3bProductOutcomeSemantics";

describe("W3-B FC-11 qualifyProductOutcome", () => {
  it("refuses claim without Evidence (technical status alone insufficient)", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "succeeded",
      resultRef: "res:ok",
      evidencePresent: false,
    });
    expect(q.outcome).toBe("UNCLAIMED");
    expect(q.claimAllowed).toBe(false);
    expect(q.antiClaims.ready).toBe(false);
  });

  it("qualifies SUCCESS only with succeeded + resultRef + Evidence", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "succeeded",
      resultRef: "res:ok",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("SUCCESS");
    expect(q.claimAllowed).toBe(true);
    expect(q.businessHeadline).toMatch(/Succès/i);
  });

  it("does not auto-SUCCESS from succeeded without resultRef", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "succeeded",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("UNCLAIMED");
  });

  it("qualifies STOP from cancelled + governed facts + Evidence", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "cancelled",
      cancelledAt: "2026-08-24T10:00:00.000Z",
      stopReason: "Arrêt gouverné Pilote",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("STOP");
    expect(q.claimAllowed).toBe(true);
    expect(q.businessReason).toContain("Arrêt gouverné");
  });

  it("does not map cancelled to STOP without durable cancel facts", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "cancelled",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("UNCLAIMED");
  });

  it("qualifies FAIL from failed + diagnostic + Evidence", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "failed",
      errorRef: "err:boom",
      failedAt: "2026-08-24T10:00:00.000Z",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("FAIL");
    expect(q.claimAllowed).toBe(true);
    expect(q.businessHeadline).toMatch(/Échec/i);
  });

  it("qualifies FAIL from timeout", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "timeout",
      timedOutAt: "2026-08-24T10:00:00.000Z",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("FAIL");
  });

  it("never claims READY / W3 closed / REAL", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "succeeded",
      resultRef: "res:ok",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.antiClaims).toEqual({
      ready: false,
      w3Closed: false,
      productCompletionComplete: false,
      runtimeV3Adopted: false,
      realProven: false,
      cycleAutoClosed: false,
      projectAutoArchived: false,
    });
  });

  it("cycle profile / CKC are not inputs — running stays unclaimed", () => {
    const q = qualifyProductOutcome({
      attemptStatus: "running",
      evidencePresent: true,
      evidenceStatus: "available",
    });
    expect(q.outcome).toBe("UNCLAIMED");
  });
});

```

### `projects/sfia-studio/app/__tests__/project-assistant/w3bTerminalEvidence.test.ts`

```typescript
/**
 * W3-B — Terminal + Evidence product seam (FC-11 / FC-12).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteCancel,
  governedExecuteRecordFailure,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeProductOutcomeFromAttempt,
  rehydrateProductOutcomeFromAttempt,
  w3bEvidenceIdentity,
} from "@/features/project-assistant/w2/w3bMaterializeProductOutcome";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

async function authorizeTempArtifact(suffix: string) {
  const db = tempProductDbPath(`w3b-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `w3b${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    candidateVersion: proposed.proposedTrajectory.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);
  return { oa, seeded, executionContractId };
}

async function selectAndStart(ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>) {
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);
  return { selected, started };
}

describe("W3-B SUCCESS / STOP / FAIL + Evidence", () => {
  it("SUCCESS: technical terminal → Evidence → ReviewBundle → Product SUCCESS", async () => {
    const ctx = await authorizeTempArtifact("ok");
    const { started } = await selectAndStart(ctx);
    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.productSuccessSemantics).toBe(false);

    const beforeClaim = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(beforeClaim.ok).toBe(false);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
      claimedProductOutcome: "FAIL",
      cycleProfile: "Critical",
      ckcId: "ckc:hostile",
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
    expect(materialized.product.reviewBundleId).toMatch(/^rb:w3b:/);
    expect(materialized.product.noraInvoked).toBe(false);
    expect(materialized.product.cycleInstanceClosed).toBe(false);
    expect(materialized.product.antiClaims.ready).toBe(false);

    const replay = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.product.evidenceId).toBe(materialized.product.evidenceId);
    expect(replay.product.reviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.outcome).toBe("SUCCESS");
    expect(rehydrated.product.evidenceId).toBe(materialized.product.evidenceId);
  });

  it("STOP: governed cancel → Evidence → Product STOP (not FAIL)", async () => {
    const ctx = await authorizeTempArtifact("stop");
    const { started } = await selectAndStart(ctx);
    const cancelled = await governedExecuteCancel({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.attemptStatus).toBe("cancelled");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("STOP");
    expect(materialized.product.outcome).not.toBe("FAIL");
    expect(materialized.product.businessReason.length).toBeGreaterThan(0);
    expect(materialized.product.technicalDetail.stopReason).toBeTruthy();
  });

  it("FAIL: recordFailure → Evidence → Product FAIL (never SUCCESS)", async () => {
    const ctx = await authorizeTempArtifact("fail");
    const { started } = await selectAndStart(ctx);
    const failed = await governedExecuteRecordFailure({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(true);
    if (!failed.ok) return;
    expect(failed.attemptStatus).toBe("failed");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("FAIL");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.technicalDetail.errorRef).toMatch(/^err:/);
  });

  it("rejects Evidence binding mismatch (other project)", async () => {
    const ctx = await authorizeTempArtifact("mismatch");
    const { started } = await selectAndStart(ctx);
    await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    const bad = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: "prj:other-hostile",
      attemptId: started.attemptId,
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("PROJECT_MISMATCH");
  });

  it("catalog genericity: Critical vs Standard cycle does not hard-map outcome", async () => {
    const idsA = w3bEvidenceIdentity("xat:w3a:aaa");
    const idsB = w3bEvidenceIdentity("xat:w3a:bbb");
    expect(idsA.evidenceId).not.toBe(idsB.evidenceId);
    // Semantics module has no cycleProfile parameter — proven by SUCCESS path
    // ignoring hostile cycleProfile above.
    expect(idsA.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
  });
});

```

### `projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts`

```typescript
/**
 * W3-B — Terminal + Evidence product-native proof on canonical /studio.
 * SUCCESS / STOP / FAIL · Evidence before claim · rehydration.
 * TestExecutionAdapter = external executor fake only. REAL OUT.
 */
import { test, expect, type Page, type Route } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w3-b-terminal-evidence",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: Record<string, string | boolean | null | undefined>,
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      ...meta,
      route: page.url(),
      timestamp: new Date().toISOString(),
      sha256,
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL",
    })}\n`,
    "utf8",
  );
}

/** Hold the 4th Server Action POST (materialize) until evidence-pending is captured. */
function installMaterializeLatch(page: Page) {
  let active = false;
  let postIndex = 0;
  let releaseMaterialize: (() => void) | null = null;
  let materializeHeld: Promise<void> | null = null;

  const handler = async (route: Route) => {
    const request = route.request();
    if (!active || request.method() !== "POST" || !request.headers()["next-action"]) {
      await route.continue();
      return;
    }
    postIndex += 1;
    // 1 select, 2 start, 3 complete/cancel/fail, 4 materialize
    if (postIndex === 4) {
      await page.waitForFunction(
        () =>
          document.querySelector('[data-testid="w3b-evidence-pending"]') !==
            null ||
          (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "") === "terminal",
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (materializeHeld) await materializeHeld;
      await route.continue();
      return;
    }
    await route.continue();
  };

  return {
    async arm() {
      postIndex = 0;
      active = true;
      materializeHeld = new Promise<void>((resolve) => {
        releaseMaterialize = resolve;
      });
      await page.route("**/*", handler);
    },
    release() {
      releaseMaterialize?.();
    },
    async disarm() {
      active = false;
      releaseMaterialize?.();
      await page.unroute("**/*", handler);
    },
  };
}

async function openThroughAuthorized(page: Page, name: string) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/studio");
  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
    timeout: 30_000,
  });
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page
    .locator("#project-objective")
    .fill("W3-B Terminal + Evidence product-native proof.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });

  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 60_000,
  });

  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();

  await page.getByTestId("w2-propose-options").click();
  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
  await page.locator("[data-testid^='w2-decide-']").first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });

  await page
    .getByTestId("w3a-operation-kind")
    .selectOption("generate-temporary-artifact");
  await page.getByTestId("w2-prepare-contract").click();
  await expect(page.getByTestId("w2-contract")).toBeVisible({
    timeout: 45_000,
  });
  await page.getByTestId("w2-inspect-contract").click();
  await expect(page.getByTestId("w2-inspection-state")).toContainText(
    "INSPECTÉ",
    { timeout: 30_000 },
  );
  await page.getByTestId("w2-confirm-contract").click();
  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
    timeout: 30_000,
  });
  await page.getByTestId("w2-authorize-contract").click();
  await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
    "AUTORISÉ",
    { timeout: 30_000 },
  );
}

test.describe("W3-B /studio Terminal + Evidence", () => {
  test.describe.configure({ timeout: 360_000 });

  test("SUCCESS + evidence-pending + technical detail + rehydrate", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(page, "W3-B SUCCESS Evidence");
    const latch = installMaterializeLatch(page);
    await latch.arm();

    const click = page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });
    await page.waitForFunction(
      () =>
        (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
          ?.textContent ?? "") === "terminal",
      undefined,
      { timeout: 90_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3b-evidence-pending")).toBeVisible({
      timeout: 15_000,
    });
    const attemptId =
      (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
    await capture(page, "01-technical-terminal-evidence-pending", {
      screen: "TrajectorySurface",
      state: "technical_terminal_evidence_pending",
      scenario: "SUCCESS",
      attemptId,
      outcome: null,
    });
    latch.release();
    await click;
    await latch.disarm();

    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
    );
    await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
    await expect(page.getByTestId("w3b-ready")).toHaveText("non");
    await expect(page.getByTestId("w3b-nora-replan")).toContainText("non");
    const evidenceId =
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
    const reviewBundleId =
      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ??
      "";
    expect(evidenceId.startsWith("ev:w3b:")).toBe(true);
    expect(reviewBundleId.startsWith("rb:w3b:")).toBe(true);
    await capture(page, "02-success-business-first", {
      screen: "TrajectorySurface",
      state: "product_success",
      scenario: "SUCCESS",
      attemptId,
      evidenceId,
      reviewBundleId,
      outcome: "SUCCESS",
    });

    await page.getByTestId("w3b-technical-details-toggle").click();
    await expect(page.getByTestId("w3b-technical-status")).toHaveText(
      "succeeded",
    );
    await capture(page, "03-success-technical-detail", {
      screen: "TrajectorySurface",
      state: "product_success_technical_secondary",
      scenario: "SUCCESS",
      attemptId,
      evidenceId,
      reviewBundleId,
      outcome: "SUCCESS",
    });

    await page.getByTestId("w3b-rehydrate-product").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
      { timeout: 30_000 },
    );
    expect(
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
    ).toBe(evidenceId);
    expect(
      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim(),
    ).toBe(reviewBundleId);
    await capture(page, "06-rehydration-durable-outcome", {
      screen: "TrajectorySurface",
      state: "rehydrated_same_evidence_rb",
      scenario: "SUCCESS_REHYDRATE",
      attemptId,
      evidenceId,
      reviewBundleId,
      outcome: "SUCCESS",
    });

    const body = ((await page.locator("body").textContent()) ?? "").toLowerCase();
    expect(body).not.toMatch(/ready for real/);
    expect(body).not.toMatch(/runtime v3 adopted/);
  });

  test("STOP governed + Evidence", async ({ page }) => {
    await openThroughAuthorized(page, "W3-B STOP Evidence");
    await page.getByTestId("w3b-governed-stop").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "STOP",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-headline")).toContainText("STOP");
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "cancelled",
    );
    const evidenceId =
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
    const reviewBundleId =
      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ??
      "";
    const attemptId =
      (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
    await capture(page, "04-governed-stop-business-first", {
      screen: "TrajectorySurface",
      state: "product_stop",
      scenario: "STOP",
      attemptId,
      evidenceId,
      reviewBundleId,
      outcome: "STOP",
    });
  });

  test("FAIL technical + diagnostic Evidence", async ({ page }) => {
    await openThroughAuthorized(page, "W3-B FAIL Evidence");
    await page.getByTestId("w3b-governed-fail").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "FAIL",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveText(
      "SUCCESS",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "failed",
    );
    const evidenceId =
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
    const reviewBundleId =
      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ??
      "";
    const attemptId =
      (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
    await capture(page, "05-fail-business-first-diagnostic", {
      screen: "TrajectorySurface",
      state: "product_fail",
      scenario: "FAIL",
      attemptId,
      evidenceId,
      reviewBundleId,
      outcome: "FAIL",
    });
  });
});

```

### `projects/sfia-studio/app/features/project-assistant/w2/w3bMaterializeProductOutcome.ts`

```typescript
/**
 * W3-B FC-12 — Materialize Evidence + ReviewBundle after an honest technical terminal,
 * then qualify Product Outcome (FC-11). No Nora / LPS learning / replan.
 *
 * Deterministic evidenceId / reviewBundleId from attemptId — reconstructible after restart
 * without transcript memory.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  qualifyProductOutcome,
  type ProductOutcomeKind,
  type ProductOutcomeQualification,
} from "./w3bProductOutcomeSemantics";

export type W3BProductOutcomeProjection = {
  readonly outcome: ProductOutcomeKind;
  readonly businessHeadline: string;
  readonly businessReason: string;
  readonly claimAllowed: boolean;
  readonly evidenceId: string | null;
  readonly reviewBundleId: string | null;
  readonly evidenceStatus: string | null;
  readonly evidenceSummary: string | null;
  readonly technicalDetail: {
    readonly attemptId: string;
    readonly attemptStatus: string;
    readonly resultRef: string | null;
    readonly errorRef: string | null;
    readonly stopReason: string | null;
  };
  readonly reservations: readonly string[];
  readonly antiClaims: ProductOutcomeQualification["antiClaims"];
  readonly cycleInstanceClosed: false;
  readonly projectArchived: false;
  readonly noraInvoked: false;
  readonly replanInvoked: false;
  readonly realExecution: false;
};

export type MaterializeProductOutcomeResult =
  | {
      readonly ok: true;
      readonly product: W3BProductOutcomeProjection;
      readonly reusedFromIdempotency: boolean;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly product?: W3BProductOutcomeProjection;
    };

const W3B_RESERVATIONS = [
  "W3-B product terminal — Evidence before claim",
  "Nora / replan NOT started (W3-C)",
  "REAL OUT — fixture boundary only",
  "NO READY CLAIM",
] as const;

export function w3bEvidenceIdentity(attemptId: string): {
  evidenceId: string;
  reviewBundleId: string;
  evidenceIdempotencyKey: string;
  reviewBundleIdempotencyKey: string;
} {
  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
  return {
    evidenceId: `ev:w3b:${digest}`,
    reviewBundleId: `rb:w3b:${digest}`,
    evidenceIdempotencyKey: `idem:w3b-ev:${attemptId}`,
    reviewBundleIdempotencyKey: `idem:w3b-rb:${attemptId}`,
  };
}

function evidenceSummaryFor(
  outcome: ProductOutcomeKind,
  attemptStatus: string,
): string {
  if (outcome === "SUCCESS") {
    return "Evidence d'exécution disponible — résultat attendu documenté pour revue métier.";
  }
  if (outcome === "STOP") {
    return "Evidence d'arrêt gouverné — frontière et raison documentées ; travail antérieur préservé.";
  }
  if (outcome === "FAIL") {
    return "Evidence diagnostique d'échec technique — aucun succès métier.";
  }
  return `Evidence non claimable (statut technique : ${attemptStatus}).`;
}

export async function materializeProductOutcomeFromAttempt(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
  /** Hostile — ignored. */
  readonly claimedProductOutcome?: unknown;
  readonly cycleProfile?: unknown;
  readonly ckcId?: unknown;
}): Promise<MaterializeProductOutcomeResult> {
  void input.claimedProductOutcome;
  void input.cycleProfile;
  void input.ckcId;

  if (!input.oa.evidenceReviewServices || !input.oa.executionAttemptServices) {
    return {
      ok: false,
      code: "EVIDENCE_STACK_UNAVAILABLE",
      message: "Services Evidence / Attempt indisponibles.",
    };
  }

  const loaded =
    await input.oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId: input.attemptId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }
  const attempt = loaded.attempt;

  const contractResult =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: attempt.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_NOT_FOUND",
      message: "Contrat lié à l'Attempt introuvable.",
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Attempt / projet incohérents — materialize refusé.",
    };
  }

  const ids = w3bEvidenceIdentity(attempt.attemptId);

  const ingested =
    await input.oa.evidenceReviewServices.ingestExecutionAttemptEvidence.execute({
      evidenceId: ids.evidenceId,
      executionAttemptId: attempt.attemptId,
      idempotencyKey: ids.evidenceIdempotencyKey,
      actor: LOCAL_PILOTE_ACTOR,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: {
        projectId: input.projectId,
        executionContractId: contract.executionContractId,
        ...(contract.cycleInstanceId
          ? { cycleInstanceId: contract.cycleInstanceId }
          : {}),
      },
    });

  if (!ingested.ok) {
    const unclaimed = qualifyProductOutcome({
      attemptStatus: attempt.status,
      resultRef: attempt.resultRef,
      errorRef: attempt.errorRef,
      stopReason: attempt.stopReason,
      cancelledAt: attempt.cancelledAt,
      failedAt: attempt.failedAt,
      timedOutAt: attempt.timedOutAt,
      cancellationRequested: attempt.cancellationRequested,
      evidencePresent: false,
    });
    return {
      ok: false,
      code: ingested.error.detailCode,
      message: ingested.error.message,
      product: {
        outcome: unclaimed.outcome,
        businessHeadline: unclaimed.businessHeadline,
        businessReason: unclaimed.businessReason,
        claimAllowed: false,
        evidenceId: null,
        reviewBundleId: null,
        evidenceStatus: null,
        evidenceSummary: null,
        technicalDetail: {
          attemptId: attempt.attemptId,
          attemptStatus: attempt.status,
          resultRef: attempt.resultRef ?? null,
          errorRef: attempt.errorRef ?? null,
          stopReason: attempt.stopReason ?? null,
        },
        reservations: [...W3B_RESERVATIONS],
        antiClaims: unclaimed.antiClaims,
        cycleInstanceClosed: false,
        projectArchived: false,
        noraInvoked: false,
        replanInvoked: false,
        realExecution: false,
      },
    };
  }

  const bundle =
    await input.oa.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: ids.reviewBundleIdempotencyKey,
      actor: LOCAL_PILOTE_ACTOR,
      projectId: input.projectId,
      executionContractId: contract.executionContractId,
      ...(contract.cycleInstanceId
        ? { cycleInstanceId: contract.cycleInstanceId }
        : {}),
      evidenceIds: [ingested.evidence.evidenceId],
      reservations: [...W3B_RESERVATIONS],
    });

  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  const qualification = qualifyProductOutcome({
    attemptStatus: attempt.status,
    resultRef: attempt.resultRef,
    errorRef: attempt.errorRef,
    stopReason: attempt.stopReason,
    cancelledAt: attempt.cancelledAt,
    failedAt: attempt.failedAt,
    timedOutAt: attempt.timedOutAt,
    cancellationRequested: attempt.cancellationRequested,
    evidencePresent: true,
    evidenceStatus: ingested.evidence.status,
    governedBoundaryReason: attempt.stopReason,
  });

  return {
    ok: true,
    reusedFromIdempotency: Boolean(
      ingested.reusedFromIdempotencyKey || bundle.reusedFromIdempotencyKey,
    ),
    product: {
      outcome: qualification.outcome,
      businessHeadline: qualification.businessHeadline,
      businessReason: qualification.businessReason,
      claimAllowed: qualification.claimAllowed,
      evidenceId: ingested.evidence.evidenceId,
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      evidenceStatus: ingested.evidence.status,
      evidenceSummary: evidenceSummaryFor(
        qualification.outcome,
        attempt.status,
      ),
      technicalDetail: {
        attemptId: attempt.attemptId,
        attemptStatus: attempt.status,
        resultRef: attempt.resultRef ?? null,
        errorRef: attempt.errorRef ?? null,
        stopReason: attempt.stopReason ?? null,
      },
      reservations: [...W3B_RESERVATIONS],
      antiClaims: qualification.antiClaims,
      cycleInstanceClosed: false,
      projectArchived: false,
      noraInvoked: false,
      replanInvoked: false,
      realExecution: false,
    },
  };
}

/**
 * Reconstruct Product Outcome + Evidence/RB from durable OA after restart.
 * Does not invoke Nora, mutate LPS, or replan.
 */
export async function rehydrateProductOutcomeFromAttempt(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
}): Promise<MaterializeProductOutcomeResult> {
  if (!input.oa.evidenceReviewServices || !input.oa.executionAttemptServices) {
    return {
      ok: false,
      code: "EVIDENCE_STACK_UNAVAILABLE",
      message: "Services Evidence / Attempt indisponibles.",
    };
  }

  const ids = w3bEvidenceIdentity(input.attemptId);
  const evidence = await input.oa.evidenceReviewServices.evidenceReader.findById(
    ids.evidenceId,
  );
  const reviewBundle =
    await input.oa.evidenceReviewServices.reviewBundleReader.findById(
      ids.reviewBundleId,
    );

  if (!evidence || !reviewBundle) {
    return {
      ok: false,
      code: "PRODUCT_OUTCOME_NOT_DURABLE",
      message:
        "Evidence / ReviewBundle W3-B absents — aucun claim reconstruit.",
    };
  }

  if (evidence.bindings.projectId && evidence.bindings.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Evidence liée à un autre projet.",
    };
  }
  if (evidence.bindings.executionAttemptId !== input.attemptId) {
    return {
      ok: false,
      code: "ATTEMPT_BINDING_MISMATCH",
      message: "Evidence liée à un autre Attempt.",
    };
  }

  // Re-run materialize for idempotent reconstruct + qualification (no duplicate corruption).
  return materializeProductOutcomeFromAttempt(input);
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/w3bProductOutcomeSemantics.ts`

```typescript
/**
 * W3-B FC-11 — Product Outcome Semantics (bounded, cycle-agnostic).
 *
 * Technical Attempt status is INPUT only — never a global hard-map to Product Outcome.
 * Evidence is a prerequisite for any SUCCESS / STOP / FAIL claim.
 * No second Attempt lifecycle, store, or engine.
 */

export type ProductOutcomeKind = "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";

export type ProductOutcomeQualificationInput = {
  readonly attemptStatus: string;
  readonly resultRef?: string | null;
  readonly errorRef?: string | null;
  readonly stopReason?: string | null;
  readonly cancelledAt?: string | null;
  readonly failedAt?: string | null;
  readonly timedOutAt?: string | null;
  readonly cancellationRequested?: boolean | null;
  /** Evidence must already exist (available) and bind this Attempt. */
  readonly evidencePresent: boolean;
  readonly evidenceStatus?: string | null;
  readonly evidenceInsufficient?: boolean;
  /** Optional business/governed reason already durable on the Attempt. */
  readonly governedBoundaryReason?: string | null;
};

export type ProductOutcomeQualification = {
  readonly outcome: ProductOutcomeKind;
  readonly businessHeadline: string;
  readonly businessReason: string;
  readonly claimAllowed: boolean;
  readonly technicalStatusIsInsufficientAlone: true;
  readonly antiClaims: {
    readonly ready: false;
    readonly w3Closed: false;
    readonly productCompletionComplete: false;
    readonly runtimeV3Adopted: false;
    readonly realProven: false;
    readonly cycleAutoClosed: false;
    readonly projectAutoArchived: false;
  };
};

const ANTI = {
  ready: false,
  w3Closed: false,
  productCompletionComplete: false,
  runtimeV3Adopted: false,
  realProven: false,
  cycleAutoClosed: false,
  projectAutoArchived: false,
} as const;

function unclaimed(reason: string): ProductOutcomeQualification {
  return {
    outcome: "UNCLAIMED",
    businessHeadline: "Résultat produit non qualifié",
    businessReason: reason,
    claimAllowed: false,
    technicalStatusIsInsufficientAlone: true,
    antiClaims: ANTI,
  };
}

/**
 * Qualify Product Outcome from durable execution facts + Evidence presence.
 * Hostile client outcomes are never accepted — only reconstructed facts.
 */
export function qualifyProductOutcome(
  input: ProductOutcomeQualificationInput,
): ProductOutcomeQualification {
  if (!input.evidencePresent || input.evidenceInsufficient === true) {
    return unclaimed(
      "Aucune Evidence suffisante — aucun claim produit SUCCESS/STOP/FAIL.",
    );
  }
  if (
    input.evidenceStatus &&
    input.evidenceStatus !== "available" &&
    input.evidenceStatus !== "verified"
  ) {
    return unclaimed(
      `Evidence en état ${input.evidenceStatus} — claim produit refusé (fail-closed).`,
    );
  }

  const status = input.attemptStatus;
  const governedReason =
    (input.governedBoundaryReason && input.governedBoundaryReason.trim()) ||
    (input.stopReason && input.stopReason.trim()) ||
    null;

  // SUCCESS — expected technical completion + resultRef + Evidence.
  if (status === "succeeded") {
    if (!input.resultRef) {
      return unclaimed(
        "Attempt succeeded sans resultRef durable — SUCCESS produit impossible.",
      );
    }
    return {
      outcome: "SUCCESS",
      businessHeadline: "Succès produit",
      businessReason:
        "Résultat attendu atteint dans le périmètre du contrat, avec Evidence suffisante.",
      claimAllowed: true,
      technicalStatusIsInsufficientAlone: true,
      antiClaims: ANTI,
    };
  }

  // STOP — governed cancellation / explicit governed boundary (not a crash).
  if (status === "cancelled") {
    if (!input.cancelledAt && !governedReason) {
      return unclaimed(
        "Attempt cancelled sans fait gouverné reconstructible — STOP non claimable.",
      );
    }
    return {
      outcome: "STOP",
      businessHeadline: "Arrêt gouverné",
      businessReason:
        governedReason ??
        "Frontière gouvernée atteinte — travail antérieur préservé et auditable.",
      claimAllowed: true,
      technicalStatusIsInsufficientAlone: true,
      antiClaims: ANTI,
    };
  }

  // FAIL — technical/process failure / timeout.
  if (status === "failed" || status === "timeout") {
    const diagnostic =
      input.errorRef ||
      governedReason ||
      (status === "timeout" ? "timeout technique" : null);
    if (!diagnostic && !input.failedAt && !input.timedOutAt) {
      return unclaimed(
        "Échec technique sans diagnostic durable — FAIL non claimable.",
      );
    }
    return {
      outcome: "FAIL",
      businessHeadline: "Échec technique",
      businessReason:
        typeof diagnostic === "string" && diagnostic.length > 0
          ? `Échec de processus/outil : ${diagnostic}`
          : "Échec technique d'exécution — aucun succès métier.",
      claimAllowed: true,
      technicalStatusIsInsufficientAlone: true,
      antiClaims: ANTI,
    };
  }

  return unclaimed(
    `Statut technique « ${status} » insuffisant seul pour un claim produit.`,
  );
}

```

## 19. Unified diffs — modified project files

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
index 721b6385..ea4c59bc 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
@@ -182,9 +182,9 @@ describe("T-A6-D1 adversarial validation corrections", () => {
     expect(result.error.detailCode).toBe("EVIDENCE_INVALID");
   });

-  it("refuses timeout and cancelled Attempts on ingest", async () => {
+  it("refuses non-terminal Attempts on ingest; accepts terminal timeout/cancelled with facts", async () => {
     const s = buildServices();
-    for (const status of ["timeout", "cancelled"] as const) {
+    for (const status of ["accepted", "running", "result_pending"] as const) {
       const attemptId = `xat:adv-${status}`;
       s.fakeAttempts.seed({
         attemptId,
@@ -205,6 +205,42 @@ describe("T-A6-D1 adversarial validation corrections", () => {
         expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
       }
     }
+
+    s.fakeAttempts.seed({
+      attemptId: "xat:adv-timeout-ok",
+      executionContractId: "xct:oa-001",
+      executionContractVersion: 1,
+      status: "timeout",
+      errorRef: "err:timeout",
+      timedOutAt: "2026-07-26T01:00:00.000Z",
+    });
+    const timeoutOk = await s.ingestExecutionAttemptEvidence.execute({
+      evidenceId: "ev:adv-timeout-ok",
+      executionAttemptId: "xat:adv-timeout-ok",
+      idempotencyKey: "idem-adv-ingest-timeout-ok-001",
+      actor: SYSTEM_ACTOR,
+      classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
+    });
+    expect(timeoutOk.ok).toBe(true);
+
+    s.fakeAttempts.seed({
+      attemptId: "xat:adv-cancelled-ok",
+      executionContractId: "xct:oa-001",
+      executionContractVersion: 1,
+      status: "cancelled",
+      stopReason: "governed stop",
+      cancelledAt: "2026-07-26T01:00:00.000Z",
+    });
+    const cancelOk = await s.ingestExecutionAttemptEvidence.execute({
+      evidenceId: "ev:adv-cancelled-ok",
+      executionAttemptId: "xat:adv-cancelled-ok",
+      idempotencyKey: "idem-adv-ingest-cancelled-ok-001",
+      actor: SYSTEM_ACTOR,
+      classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
+    });
+    expect(cancelOk.ok).toBe(true);
   });

   it("defensive clone: nested bindings mutation after get does not affect store", async () => {
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
index 1b915287..66f04824 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
@@ -40,7 +40,7 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
     expect(audit).not.toMatch(/PASS|payload|secret/i);
   });

-  it("refuses failed Attempt", async () => {
+  it("ingests failed Attempt with errorRef as diagnostic Evidence", async () => {
     const s = buildServices();
     s.fakeAttempts.seed({
       attemptId: "xat:fail-001",
@@ -48,6 +48,7 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
       executionContractVersion: 1,
       status: "failed",
       errorRef: "err:boom",
+      failedAt: "2026-07-26T01:00:00.000Z",
     });
     const result = await s.ingestExecutionAttemptEvidence.execute({
       evidenceId: "ev:fail-ingest",
@@ -55,10 +56,37 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
       idempotencyKey: "idem-ingest-fail-001",
       actor: SYSTEM_ACTOR,
       classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
     });
-    expect(result.ok).toBe(false);
-    if (result.ok) return;
-    expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.evidence.status).toBe("available");
+    expect(result.evidence.technicalResultRef).toBe("err:boom");
+    expect(result.evidence.source).toContain("failed");
+  });
+
+  it("ingests cancelled Attempt with stopReason as governed-stop Evidence", async () => {
+    const s = buildServices();
+    s.fakeAttempts.seed({
+      attemptId: "xat:cancel-001",
+      executionContractId: "xct:oa-001",
+      executionContractVersion: 1,
+      status: "cancelled",
+      stopReason: "Arrêt gouverné Pilote",
+      cancelledAt: "2026-07-26T01:00:00.000Z",
+    });
+    const result = await s.ingestExecutionAttemptEvidence.execute({
+      evidenceId: "ev:cancel-ingest",
+      executionAttemptId: "xat:cancel-001",
+      idempotencyKey: "idem-ingest-cancel-001",
+      actor: SYSTEM_ACTOR,
+      classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.evidence.status).toBe("available");
+    expect(result.evidence.location).toContain("governed-stop");
   });

   it("refuses running Attempt", async () => {
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 6d462a38..f7961c76 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -97,6 +97,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/w3bMaterializeProductOutcome.ts:@/lib/vertical-slice-runtime",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 6b063a75..eb8fa848 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -288,6 +288,35 @@
   color: var(--pm6-muted-strong);
 }

+.productOutcome {
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  background: var(--pm6-surface);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-4);
+}
+
+.productHeadline {
+  margin: 0;
+  font-size: 0.95rem;
+  font-weight: 700;
+  line-height: 1.45;
+  color: var(--pm6-ink);
+}
+
+.technicalDetails {
+  margin: 0;
+  font-size: 0.82rem;
+  color: var(--pm6-muted-strong);
+}
+
+.technicalDetails summary {
+  cursor: pointer;
+  font-weight: 600;
+}
+
 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9cdc3fd3..379a6318 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -16,12 +16,16 @@ import {
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
+  w2GovernedExecuteCancelAction,
   w2GovernedExecuteCompleteAction,
+  w2GovernedExecuteFailAction,
   w2GovernedExecuteSelectAction,
   w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
+  w2MaterializeProductOutcomeAction,
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
+  w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
   AmendExecutionContractSuccess,
@@ -32,6 +36,7 @@ import type {
   GovernedExecutePhaseSuccess,
   TrajectoryDecisionRecordDto,
   TrajectoryOptionSetDto,
+  W3BProductOutcomeDto,
 } from "@/features/project-assistant/w2/types";
 import styles from "./TrajectorySurface.module.css";

@@ -122,6 +127,9 @@ export function TrajectorySurface({
   const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
     null,
   );
+  const [productOutcome, setProductOutcome] =
+    useState<W3BProductOutcomeDto | null>(null);
+  const [productEvidencePending, setProductEvidencePending] = useState(false);
   const [qualifiedOperationKind, setQualifiedOperationKind] =
     useState<QualifiedOperationKind | null>(null);

@@ -356,6 +364,8 @@ export function TrajectorySurface({
       setAttemptPhase(null);
       setAttemptPhaseHistory([]);
       setAttemptStatusLabel(null);
+      setProductOutcome(null);
+      setProductEvidencePending(false);
     });

     const selected = await w2GovernedExecuteSelectAction({
@@ -370,7 +380,6 @@ export function TrajectorySurface({
       }
       return;
     }
-    // Paint accepted before start (R09 observability — yield to browser).
     paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
     await yieldBrowserPaint();

@@ -404,8 +413,8 @@ export function TrajectorySurface({
       executionContractId: contract.executionContractId,
       attemptId: started.attemptId,
     });
-    setBusy(null);
     if (!completed.ok) {
+      setBusy(null);
       setError(completed.message);
       if (completed.attempt) {
         flushSync(() => {
@@ -414,10 +423,197 @@ export function TrajectorySurface({
       }
       return;
     }
+    // Technical terminal before Product claim (Evidence pending).
     paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: completed.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+    });
+    onDurableFactsChanged?.();
+  }, [contract, authorization, projectId, onDurableFactsChanged]);
+
+  const governedStop = useCallback(async () => {
+    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    setBusy("execute");
+    setError(null);
+    flushSync(() => {
+      setAttempt(null);
+      setAttemptPhase(null);
+      setAttemptPhaseHistory([]);
+      setAttemptStatusLabel(null);
+      setProductOutcome(null);
+      setProductEvidencePending(false);
+    });
+
+    const selected = await w2GovernedExecuteSelectAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!selected.ok) {
+      setBusy(null);
+      setError(selected.message);
+      return;
+    }
+    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
+    await yieldBrowserPaint();
+    if (selected.phase === "terminal") {
+      setBusy(null);
+      return;
+    }
+
+    const started = await w2GovernedExecuteStartAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: selected.attemptId,
+    });
+    if (!started.ok) {
+      setBusy(null);
+      setError(started.message);
+      return;
+    }
+    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+    await yieldBrowserPaint();
+
+    const cancelled = await w2GovernedExecuteCancelAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: started.attemptId,
+    });
+    if (!cancelled.ok) {
+      setBusy(null);
+      setError(cancelled.message);
+      return;
+    }
+    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: cancelled.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+    });
+    onDurableFactsChanged?.();
+  }, [contract, authorization, projectId, onDurableFactsChanged]);
+
+  const governedFail = useCallback(async () => {
+    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    setBusy("execute");
+    setError(null);
+    flushSync(() => {
+      setAttempt(null);
+      setAttemptPhase(null);
+      setAttemptPhaseHistory([]);
+      setAttemptStatusLabel(null);
+      setProductOutcome(null);
+      setProductEvidencePending(false);
+    });
+
+    const selected = await w2GovernedExecuteSelectAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!selected.ok) {
+      setBusy(null);
+      setError(selected.message);
+      return;
+    }
+    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
+    await yieldBrowserPaint();
+    if (selected.phase === "terminal") {
+      setBusy(null);
+      return;
+    }
+
+    const started = await w2GovernedExecuteStartAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: selected.attemptId,
+    });
+    if (!started.ok) {
+      setBusy(null);
+      setError(started.message);
+      return;
+    }
+    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+    await yieldBrowserPaint();
+
+    const failed = await w2GovernedExecuteFailAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: started.attemptId,
+    });
+    if (!failed.ok) {
+      setBusy(null);
+      setError(failed.message);
+      return;
+    }
+    paintAttemptPhase(failed.phase, failed.attempt, failed.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: failed.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+    });
     onDurableFactsChanged?.();
   }, [contract, authorization, projectId, onDurableFactsChanged]);

+  const rehydrateProduct = useCallback(async () => {
+    if (!attempt?.attemptId) return;
+    setBusy("execute");
+    setError(null);
+    const result = await w2RehydrateProductOutcomeAction({
+      projectId,
+      attemptId: attempt.attemptId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    setProductOutcome(result.product);
+    setProductEvidencePending(false);
+  }, [attempt, projectId]);
+
   return (
     <section
       className={styles.root}
@@ -867,17 +1063,37 @@ export function TrajectorySurface({
                 data-testid="w2-stop-before-execute"
               >
                 Autorisation évaluée — aucune tentative lancée tant que vous
-                n&apos;exécutez pas explicitement (W3-A fixture).
+                n&apos;exécutez pas explicitement (W3-A/W3-B fixture).
               </p>
-              <button
-                type="button"
-                className={styles.primaryAction}
-                data-testid="w3a-governed-execute"
-                onClick={() => void governedExecute()}
-                disabled={busy !== null}
-              >
-                Exécuter (fixture gouvernée)
-              </button>
+              <div className={styles.actions}>
+                <button
+                  type="button"
+                  className={styles.primaryAction}
+                  data-testid="w3a-governed-execute"
+                  onClick={() => void governedExecute()}
+                  disabled={busy !== null}
+                >
+                  Exécuter → SUCCESS (fixture)
+                </button>
+                <button
+                  type="button"
+                  className={styles.secondaryAction}
+                  data-testid="w3b-governed-stop"
+                  onClick={() => void governedStop()}
+                  disabled={busy !== null}
+                >
+                  Exécuter → STOP gouverné
+                </button>
+                <button
+                  type="button"
+                  className={styles.secondaryAction}
+                  data-testid="w3b-governed-fail"
+                  onClick={() => void governedFail()}
+                  disabled={busy !== null}
+                >
+                  Exécuter → FAIL technique
+                </button>
+              </div>
             </>
           ) : null}
           {authorization.outcome === "BLOCKED" ? (
@@ -935,8 +1151,149 @@ export function TrajectorySurface({
             </div>
           </dl>
           <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
-            Terminal technique — résultat produit non encore qualifié (W3-B).
+            {productOutcome?.claimAllowed
+              ? "Terminal technique consommé — résultat produit qualifié ci-dessous (W3-B)."
+              : productEvidencePending
+                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
+                : "Terminal technique — résultat produit non encore qualifié (W3-B)."}
+          </p>
+          {productEvidencePending ? (
+            <p
+              className={styles.blockNote}
+              data-testid="w3b-evidence-pending"
+            >
+              Evidence requise avant tout claim SUCCESS / STOP / FAIL.
+            </p>
+          ) : null}
+          {attempt?.attemptId && !productOutcome ? (
+            <button
+              type="button"
+              className={styles.secondaryAction}
+              data-testid="w3b-rehydrate-product"
+              onClick={() => void rehydrateProduct()}
+              disabled={busy !== null}
+            >
+              Recharger résultat produit (durable)
+            </button>
+          ) : null}
+        </section>
+      ) : null}
+
+      {productOutcome ? (
+        <section
+          className={styles.productOutcome}
+          aria-labelledby="w3b-product-title"
+          data-testid="w3b-product-outcome"
+          data-outcome={productOutcome.outcome}
+          role="status"
+        >
+          <h3 id="w3b-product-title" className={styles.blockTitle}>
+            Résultat produit (W3-B)
+          </h3>
+          <p
+            className={styles.productHeadline}
+            data-testid="w3b-product-headline"
+          >
+            <span data-testid="w3b-product-outcome-kind">
+              {productOutcome.outcome}
+            </span>
+            {" — "}
+            {productOutcome.businessHeadline}
+          </p>
+          <p className={styles.blockBody} data-testid="w3b-product-reason">
+            {productOutcome.businessReason}
+          </p>
+          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
+            {productOutcome.evidenceSummary ??
+              "Evidence absente — aucun claim produit."}
           </p>
+          <dl className={styles.facts}>
+            <div>
+              <dt>Evidence</dt>
+              <dd className={styles.code} data-testid="w3b-evidence-id">
+                {productOutcome.evidenceId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>ReviewBundle</dt>
+              <dd className={styles.code} data-testid="w3b-review-bundle-id">
+                {productOutcome.reviewBundleId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>Claim autorisé</dt>
+              <dd data-testid="w3b-claim-allowed">
+                {productOutcome.claimAllowed ? "oui" : "non"}
+              </dd>
+            </div>
+            <div>
+              <dt>Nora / replan</dt>
+              <dd data-testid="w3b-nora-replan">non — W3-C non démarré</dd>
+            </div>
+            <div>
+              <dt>Cycle auto-fermé</dt>
+              <dd data-testid="w3b-cycle-closed">non</dd>
+            </div>
+            <div>
+              <dt>READY</dt>
+              <dd data-testid="w3b-ready">non</dd>
+            </div>
+          </dl>
+          <details className={styles.technicalDetails}>
+            <summary data-testid="w3b-technical-details-toggle">
+              Détail technique (secondaire)
+            </summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Attempt</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w3b-technical-attempt-id"
+                >
+                  {productOutcome.technicalDetail.attemptId}
+                </dd>
+              </div>
+              <div>
+                <dt>Statut technique</dt>
+                <dd data-testid="w3b-technical-status">
+                  {productOutcome.technicalDetail.attemptStatus}
+                </dd>
+              </div>
+              <div>
+                <dt>resultRef</dt>
+                <dd className={styles.code} data-testid="w3b-technical-result-ref">
+                  {productOutcome.technicalDetail.resultRef ?? "—"}
+                </dd>
+              </div>
+              <div>
+                <dt>errorRef / stopReason</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w3b-technical-error-or-stop"
+                >
+                  {productOutcome.technicalDetail.errorRef ??
+                    productOutcome.technicalDetail.stopReason ??
+                    "—"}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          {productOutcome.reservations.length > 0 ? (
+            <ul data-testid="w3b-reservations" className={styles.blockNote}>
+              {productOutcome.reservations.map((r) => (
+                <li key={r}>{r}</li>
+              ))}
+            </ul>
+          ) : null}
+          <button
+            type="button"
+            className={styles.secondaryAction}
+            data-testid="w3b-rehydrate-product"
+            onClick={() => void rehydrateProduct()}
+            disabled={busy !== null || !attempt?.attemptId}
+          >
+            Recharger résultat produit (durable)
+          </button>
         </section>
       ) : null}
     </section>
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 56704d01..a77751ac 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -21,10 +21,16 @@ import { confirmExecutionContractForAuthorization } from "./confirmForAuthorizat
 import { decideTrajectory } from "./decideTrajectory";
 import {
   governedExecuteAuthorizedContract,
+  governedExecuteCancel,
+  governedExecuteRecordFailure,
   governedExecuteRecordResult,
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "./governedExecuteAuthorizedContract";
+import {
+  materializeProductOutcomeFromAttempt,
+  rehydrateProductOutcomeFromAttempt,
+} from "./w3bMaterializeProductOutcome";
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
@@ -39,6 +45,7 @@ import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecutePhaseResult,
   InspectExecutionContractResult,
+  MaterializeProductOutcomeActionResult,
   PreparedExecutionContractResult,
   ProposeTrajectoryOptionsResult,
 } from "./types";
@@ -338,6 +345,105 @@ export async function w2GovernedExecuteCompleteAction(input: {
   });
 }

+/**
+ * W3-B — CancelExecutionAttempt (governed STOP technical terminal).
+ */
+export async function w2GovernedExecuteCancelAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  reason?: string;
+  canActAsMorris?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteCancel({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    reason: input.reason,
+    canActAsMorris: input.canActAsMorris,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-B — RecordExecutionFailure (FAIL technical terminal).
+ */
+export async function w2GovernedExecuteFailAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  stopReason?: string;
+  canActAsMorris?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteRecordFailure({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    stopReason: input.stopReason,
+    canActAsMorris: input.canActAsMorris,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-B — FC-12 Evidence + ReviewBundle then FC-11 Product Outcome.
+ * Hostile claimedProductOutcome / cycleProfile / ckcId ignored.
+ */
+export async function w2MaterializeProductOutcomeAction(input: {
+  projectId: string;
+  attemptId: string;
+  claimedProductOutcome?: unknown;
+  cycleProfile?: unknown;
+  ckcId?: unknown;
+}): Promise<MaterializeProductOutcomeActionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+    };
+  }
+  return materializeProductOutcomeFromAttempt({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+    claimedProductOutcome: input.claimedProductOutcome,
+    cycleProfile: input.cycleProfile,
+    ckcId: input.ckcId,
+  });
+}
+
+/**
+ * W3-B — rehydrate Product Outcome from durable Evidence/RB (restart-safe).
+ */
+export async function w2RehydrateProductOutcomeAction(input: {
+  projectId: string;
+  attemptId: string;
+}): Promise<MaterializeProductOutcomeActionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+    };
+  }
+  return rehydrateProductOutcomeFromAttempt({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+  });
+}
+
 /**
  * W3-A — Governed Execute after W2 AUTHORIZED.
  * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index e6d1d609..aaa72dc5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -45,6 +45,7 @@ function attemptIdentities(executionContractId: string, version: number) {
     attemptId: `xat:w3a:${digest}`,
     attemptIdempotencyKey: `idem:w3a:${digest}`,
     resultRef: `res:w3a:${digest}`,
+    errorRef: `err:w3a:${digest}`,
   };
 }

@@ -569,6 +570,165 @@ export async function governedExecuteRecordResult(
   };
 }

+const GOVERNED_STOP_REASON =
+  "Arrêt gouverné demandé par le Pilote — frontière d'exécution honorée ; travail antérieur préservé.";
+
+/**
+ * W3-B — CancelExecutionAttempt while running → technical cancelled (governed STOP candidate).
+ * Does not materialize Evidence here — caller must materialize for Product claim.
+ */
+export async function governedExecuteCancel(
+  input: GovernedExecuteAuthorizedContractInput & {
+    readonly attemptId: string;
+    readonly reason?: string;
+  },
+): Promise<GovernedExecuteAuthorizedContractResult> {
+  const boundary = fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const loaded = await loadContract(input.oa, input);
+  if (!loaded.ok) return loaded.result;
+  const { contract, selectionProfile } = loaded;
+  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+
+  registerPiloteAuthority(
+    input.oa,
+    contract.scope,
+    input.forceLocalAuthority,
+  );
+
+  const reason = (input.reason && input.reason.trim()) || GOVERNED_STOP_REASON;
+  const cancelled =
+    await input.oa.executionAttemptServices!.cancelExecutionAttempt.execute({
+      attemptId: input.attemptId,
+      reason,
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+  if (!cancelled.ok) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    return {
+      ok: false,
+      code: cancelled.error.detailCode,
+      message: cancelled.error.message,
+      attempt:
+        existing.ok && existing.attempt
+          ? projectAttempt(existing.attempt)
+          : undefined,
+    };
+  }
+
+  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  return {
+    ok: true,
+    phase: "terminal",
+    executionContractId: contract.executionContractId,
+    contractVersion: contract.version,
+    attemptId: cancelled.attempt.attemptId,
+    attemptStatus: cancelled.attempt.status,
+    selectedAgentRef: cancelled.attempt.selectedAgentRef,
+    adapterId: F3_ADAPTER_ID,
+    selectionProfile,
+    reusedExistingAttempt: Boolean(cancelled.replayed),
+    launchCount,
+    launchDelta: launchCount - launchCountBefore,
+    executionPerformed: true,
+    attemptCreated: true,
+    realExecution: false,
+    externalEffects: false,
+    gitWritePerformed: false,
+    cycleInstanceClosed: false,
+    projectArchived: false,
+    authorityReceiptUsedAsPermission: false,
+    statusLabel:
+      "TERMINAL TECHNIQUE ANNULÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-B)",
+    technicalTerminal: cancelled.attempt.status === "cancelled",
+    productSuccessSemantics: false,
+    attempt: projectAttempt(cancelled.attempt),
+  };
+}
+
+/**
+ * W3-B — RecordExecutionFailure → technical failed (FAIL candidate).
+ * Does not materialize Evidence here — caller must materialize for Product claim.
+ */
+export async function governedExecuteRecordFailure(
+  input: GovernedExecuteAuthorizedContractInput & {
+    readonly attemptId: string;
+    readonly stopReason?: string;
+  },
+): Promise<GovernedExecuteAuthorizedContractResult> {
+  const boundary = fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const loaded = await loadContract(input.oa, input);
+  if (!loaded.ok) return loaded.result;
+  const { contract, selectionProfile } = loaded;
+  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+
+  const identities = attemptIdentities(
+    contract.executionContractId,
+    contract.version,
+  );
+
+  const failed =
+    await input.oa.executionAttemptServices!.recordExecutionFailure.execute({
+      attemptId: input.attemptId,
+      adapterId: F3_ADAPTER_ID,
+      errorRef: identities.errorRef,
+      stopReason:
+        input.stopReason?.trim() ||
+        "Échec technique d'adaptateur — processus/outil indisponible.",
+      technicalExitCode: 1,
+    });
+  if (!failed.ok) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    return {
+      ok: false,
+      code: failed.error.detailCode,
+      message: failed.error.message,
+      attempt:
+        existing.ok && existing.attempt
+          ? projectAttempt(existing.attempt)
+          : undefined,
+    };
+  }
+
+  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  return {
+    ok: true,
+    phase: "terminal",
+    executionContractId: contract.executionContractId,
+    contractVersion: contract.version,
+    attemptId: failed.attempt.attemptId,
+    attemptStatus: failed.attempt.status,
+    selectedAgentRef: failed.attempt.selectedAgentRef,
+    adapterId: F3_ADAPTER_ID,
+    selectionProfile,
+    reusedExistingAttempt: false,
+    launchCount,
+    launchDelta: launchCount - launchCountBefore,
+    executionPerformed: true,
+    attemptCreated: true,
+    realExecution: false,
+    externalEffects: false,
+    gitWritePerformed: false,
+    cycleInstanceClosed: false,
+    projectArchived: false,
+    authorityReceiptUsedAsPermission: false,
+    statusLabel:
+      "TERMINAL TECHNIQUE ÉCHOUÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-B)",
+    technicalTerminal: failed.attempt.status === "failed",
+    productSuccessSemantics: false,
+    attempt: projectAttempt(failed.attempt),
+  };
+}
+
 export async function governedExecuteAuthorizedContract(
   input: GovernedExecuteAuthorizedContractInput,
 ): Promise<GovernedExecuteAuthorizedContractResult> {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index a4aad88d..43323e05 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -355,3 +355,49 @@ export type GovernedExecuteAuthorizedContractSuccess = GovernedExecutePhaseSucce
 export type GovernedExecuteAuthorizedContractResult =
   | GovernedExecuteAuthorizedContractSuccess
   | GovernedExecutePhaseFailure;
+
+export type W3BProductOutcomeDto = {
+  readonly outcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+  readonly businessHeadline: string;
+  readonly businessReason: string;
+  readonly claimAllowed: boolean;
+  readonly evidenceId: string | null;
+  readonly reviewBundleId: string | null;
+  readonly evidenceStatus: string | null;
+  readonly evidenceSummary: string | null;
+  readonly technicalDetail: {
+    readonly attemptId: string;
+    readonly attemptStatus: string;
+    readonly resultRef: string | null;
+    readonly errorRef: string | null;
+    readonly stopReason: string | null;
+  };
+  readonly reservations: readonly string[];
+  readonly antiClaims: {
+    readonly ready: false;
+    readonly w3Closed: false;
+    readonly productCompletionComplete: false;
+    readonly runtimeV3Adopted: false;
+    readonly realProven: false;
+    readonly cycleAutoClosed: false;
+    readonly projectAutoArchived: false;
+  };
+  readonly cycleInstanceClosed: false;
+  readonly projectArchived: false;
+  readonly noraInvoked: false;
+  readonly replanInvoked: false;
+  readonly realExecution: false;
+};
+
+export type MaterializeProductOutcomeActionResult =
+  | {
+      readonly ok: true;
+      readonly product: W3BProductOutcomeDto;
+      readonly reusedFromIdempotency: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly product?: W3BProductOutcomeDto;
+    };
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
index d329d06c..058b189e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
@@ -1,11 +1,14 @@
 /**
  * IngestExecutionAttemptEvidence — explicit T-A5 → T-A6 bridge (D-T-A6-DEL-04).
  *
- * Policy (documented, fail-closed):
- * - Only Attempt.status === "succeeded" WITH resultRef may produce Evidence.
- * - failed / running / other statuses are refused (ATTEMPT_STATUS_REFUSED).
- * - Created Evidence status is always "available" (never "verified").
- * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ PASS.
+ * Policy (documented, fail-closed) — W3-B terminal coverage:
+ * - Terminal Attempts may produce Evidence:
+ *   - succeeded + resultRef → available (technicalResultRef = resultRef)
+ *   - failed | timeout with errorRef or stopReason → available diagnostic
+ *   - cancelled with cancelledAt or stopReason → available governed-stop
+ * - Non-terminal (accepted/running/result_pending) → ATTEMPT_STATUS_REFUSED.
+ * - Created Evidence status is never "verified".
+ * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ Product SUCCESS/PASS.
  * - Attempt is never mutated.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
@@ -35,6 +38,19 @@ import {
   fingerprintCommand,
   registerFingerprintBody,
 } from "./evidenceSupport";
+import type { ExecutionAttemptSnapshot } from "../domain/types";
+
+type TerminalIngestKind = "succeeded" | "failed" | "timeout" | "cancelled";
+
+function classifyTerminalForIngest(
+  attempt: ExecutionAttemptSnapshot,
+): TerminalIngestKind | null {
+  if (attempt.status === "succeeded") return "succeeded";
+  if (attempt.status === "failed") return "failed";
+  if (attempt.status === "timeout") return "timeout";
+  if (attempt.status === "cancelled") return "cancelled";
+  return null;
+}

 export class IngestExecutionAttemptEvidence {
   constructor(
@@ -168,15 +184,33 @@ export class IngestExecutionAttemptEvidence {
         return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
       }

-      // Fail-closed: only succeeded + resultRef produces candidate Evidence.
-      if (attempt.status !== "succeeded") {
+      const terminalKind = classifyTerminalForIngest(attempt);
+      if (!terminalKind) {
         return fail(
           "ATTEMPT_STATUS_REFUSED",
           `attempt_status_${attempt.status}`,
         );
       }
-      if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
-        return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
+      if (terminalKind === "succeeded") {
+        if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
+        }
+      } else if (terminalKind === "failed" || terminalKind === "timeout") {
+        const hasDiagnostic =
+          (attempt.errorRef && isOaIdentifier(attempt.errorRef)) ||
+          (typeof attempt.stopReason === "string" &&
+            attempt.stopReason.trim().length > 0);
+        if (!hasDiagnostic) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "failure_diagnostic_missing");
+        }
+      } else if (terminalKind === "cancelled") {
+        const hasStopFact =
+          Boolean(attempt.cancelledAt) ||
+          (typeof attempt.stopReason === "string" &&
+            attempt.stopReason.trim().length > 0);
+        if (!hasStopFact) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "cancel_fact_missing");
+        }
       }

       const bindings = {
@@ -191,18 +225,37 @@ export class IngestExecutionAttemptEvidence {

       const storageMode = request.storageMode ?? "internal_payload_ref";
       const location =
-        request.location ?? `refs/attempts/${attempt.attemptId}/result`;
+        request.location ??
+        (terminalKind === "succeeded"
+          ? `refs/attempts/${attempt.attemptId}/result`
+          : terminalKind === "cancelled"
+            ? `refs/attempts/${attempt.attemptId}/governed-stop`
+            : `refs/attempts/${attempt.attemptId}/diagnostic`);
+
+      const producedAt =
+        attempt.completedAt ??
+        attempt.failedAt ??
+        attempt.cancelledAt ??
+        attempt.timedOutAt ??
+        timestamp;
+
+      const technicalResultRef =
+        terminalKind === "succeeded"
+          ? attempt.resultRef
+          : attempt.errorRef && isOaIdentifier(attempt.errorRef)
+            ? attempt.errorRef
+            : undefined;

       const evidence: Evidence = {
         schemaVersion: "0.2.0-oa",
         evidenceId: request.evidenceId,
-        type: request.type ?? "artifact",
-        source: `execution attempt ${attempt.attemptId}`,
+        type: request.type ?? (terminalKind === "succeeded" ? "artifact" : "log_ref"),
+        source: `execution attempt ${attempt.attemptId} (${terminalKind})`,
         sourceKind: "execution_attempt",
         location,
         digest: request.digest,
         producedBy: request.actor,
-        producedAt: attempt.completedAt ?? timestamp,
+        producedAt,
         freshness: "fresh",
         status: "available",
         classification: request.classification,
@@ -224,7 +277,7 @@ export class IngestExecutionAttemptEvidence {
         version: 1,
         createdAt: timestamp,
         idempotencyKey: request.idempotencyKey,
-        technicalResultRef: attempt.resultRef,
+        technicalResultRef,
       };

       const shape = validateEvidenceShape(evidence);
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
index 809b5dc4..0280a194 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
@@ -234,7 +234,11 @@ export type ExecutionAttemptSnapshot = {
   status: string;
   resultRef?: string;
   errorRef?: string;
+  stopReason?: string;
   completedAt?: string;
   failedAt?: string;
+  cancelledAt?: string;
+  timedOutAt?: string;
+  cancellationRequested?: boolean;
   selectedAgentRef?: string;
 };
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
index 9dbb3891..c71ea4a3 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
@@ -80,8 +80,12 @@ export function createAttemptReaderBridge(
         status: attempt.status,
         resultRef: attempt.resultRef,
         errorRef: attempt.errorRef,
+        stopReason: attempt.stopReason,
         completedAt: attempt.completedAt,
         failedAt: attempt.failedAt,
+        cancelledAt: attempt.cancelledAt,
+        timedOutAt: attempt.timedOutAt,
+        cancellationRequested: attempt.cancellationRequested,
         selectedAgentRef: attempt.selectedAgentRef,
       };
     },
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 82acdc98..aa2a20b8 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,8 +6,9 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / W3-A POST-CLOSURE** = `origin/main` @ `686e545a4bb058b95c8c456a517322ceb3e0bcaa` (merge PR **#408** W3-A Governed Execute) · candidate head `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · head→merge **0-file / tree parity** · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · prior W2 post-closure `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` (PR **#406**) · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · US-P1-04 / FC-10 **CLOSED for W3-A** · X-W3A-01…08 **PASS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter **remains external executor fake** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · **W3 DELIVERY** = **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice = **W3-A** · **next capability candidate** = **W3-B** (US-P1-05 / US-P1-06) · **W3-B NOT AUTHORIZED / NOT STARTED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 CLOSED · **≠** W3-B AUTHORIZED · **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
-| **Timestamp maintenance courant** | 2026-08-24 11:04 CEST (+0200) — **W3-A POST-CLOSURE TRUTH SYNC** — **W3-A CLOSED BY MORRIS** · US-P1-04 / FC-10 exit X-W3A-01…08 **SATISFIED** · PR **#408 MERGED** · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · post-merge main CI **`32703289053` SUCCESS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter remains fake external executor · W3 **IN PROGRESS / NOT CLOSED** · next capability candidate **W3-B** (US-P1-05 / US-P1-06) · **W3-B NOT AUTHORIZED / NOT STARTED** · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **NOT STARTED** · C6 **CLOSED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
+| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / W3-B DELIVERY** = `origin/main` @ `ba7aa2db408b7fd00faf9638da060ce0833b794b` (merge PR **#409** W3-A post-closure truth sync) · prior W3-A merge PR **#408** `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · US-P1-04 / FC-10 **CLOSED for W3-A** · **W3 DELIVERY** = **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · **W3-B** (US-P1-05 / US-P1-06 · FC-11 / FC-12) = **DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · GO Morris W3-B Delivery **CONSUMED** · qualification **VALIDATED BY MORRIS** · branch locale `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` · W3-C/D/E **NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3-B CLOSED · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance courant** | 2026-08-24 12:25 CEST (+0200) — **W3-B TERMINAL + EVIDENCE DELIVERY IN PROGRESS** — GO Morris W3-B Delivery **CONSUMED** · qualification **VALIDATED BY MORRIS** · US-P1-05 / US-P1-06 targeted · FC-11 / FC-12 · base `origin/main` @ `ba7aa2db…` (PR **#409**) · W3-A remains **CLOSED** · W3 **IN PROGRESS / NOT CLOSED** · W3-B **IN PROGRESS / NOT CLOSED** · W3-C next downstream **NOT STARTED** · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **OUT** · C6 **CLOSED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3-B CLOSED · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance historique W3-A POST-CLOSURE TRUTH SYNC** | 2026-08-24 11:04 CEST (+0200) — **W3-A POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3-B DELIVERY START)* — **W3-A CLOSED BY MORRIS** · PR **#408 MERGED** · later truth sync PR **#409** → `ba7aa2db…` · **W3-B** was **NOT AUTHORIZED / NOT STARTED** *(true then · later AUTHORIZED)* · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **NOT STARTED** · C6 **CLOSED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W3-A R16/R09 correction candidate** | 2026-08-24 08:44 CEST (+0200) — **W3-A R16 reserved Confirmation + R09 visual lifecycle** — *(historique · superseded by W3-A CLOSED + post-closure truth sync)* — contradiction fail-closed · system-owned constraint namespaces · legacy exploit blocked · R09 PNG 07/08/09 honest · Playwright Server Action latch (test-only) · W4 **NOT TOUCHED** · awaiting ChatGPT re-review *(true then · later integrated via PR #408)* · W3 **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W2 POST-CLOSURE TRUTH SYNC** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3 DELIVERY START)* — `origin/main` @ `1e4b0dbb…` then PR **#406** → `3a3b1cf…` · **W2 CLOSED BY MORRIS** · **NEXT CAPACITY** was **NEXT-CAPABILITY REQUALIFICATION** *(later SATISFIED / CONSUMED)* · W3 was **NOT STARTED / NOT AUTHORIZED** *(true then · later AUTHORIZED)* · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W2 Phase B post-merge truth sync** | 2026-08-23 16:48 CEST (+0200) — **W2 TRACK D / BOUNDED CKC PHASE B POST-MERGE TRUTH SYNC** — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · PR **#403 MERGED** · Phase B head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · **bounded Phase B INTEGRATED ON MAIN** · **DETERMINISTIC PROVEN** · Phase B GO / R1 GO / Git integration GO **CONSUMED historically** · W2 **NOT FINALLY CLOSED** · **NEXT CAPACITY** = **W2 FINAL CLOSURE QUALIFICATION** *(distinct cycle · NOT STARTED)* · W3 **NOT STARTED / NOT AUTHORIZED** · full CKC track **DOWNSTREAM W3** · PB-RES-REAL-01 **OPEN** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **NON TERMINÉE** · **≠** W2 closed · **≠** W3 GO · **≠** REAL · **≠** FinOps PASS  *(historique · superseded by W2 POST-CLOSURE TRUTH SYNC / Morris W2 CLOSED)* |
@@ -51,13 +52,14 @@
 | **Product Completion Functional Architecture (Cycle 3)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · path : `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR **#378 MERGED** · head `1018aa79d1d8ebb8783d11ce25ff08036764e87e` · merge `18b89ec9d6f1a91f8ff49df9c895299b6676b572` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379 MERGED** · sync head `0aa644d935b5df1ba7f4c2278fd63320555b9f6a` · sync merge `134f4105fea09543a100749e74ca5e3be32bfda2` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380 MERGED** · head `53aeceea…` · merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01 **CLOSED** · PM-R02 **CLOSED** · FC-01…FC-15 **APPROVED** · OA-aligned Option A + thin orchestration C **APPROVED** · no parallel architecture · targeted durability technical delta **QUALIFIED** then **partially realized via W1** · FA-R01…FA-R12 **CLOSED** · C1 §H/J.1 + C2 A→W preserved · H-01…H-04 **CARRY** · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (requested ephemeral / granted+ durable · PR #395) · ProjectTrajectory durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · **downstream gaps remain** (HD/replan liaison complète · Recovery E2E · taxonomie épistémique complète → W2/W3) · UAT **OPEN** · SC-02 **NON-BLOCKING** · **RESERVE-GOV-EC-ORDER CLOSED** · Pre-M6 debt **CARRY** · source branch cleanup **NOT PERFORMED** · **≠** Architecture technique fully exhausted · **≠** Product Completion terminée · **≠** REAL |
 | **RESERVE-GOV-EC-ORDER** | **CLOSED ON MAIN** via PR **#381** — Build Doctrine execution order aligned with validated C2 / Functional Architecture : HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority → Execute · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · remaining continuity/authority gaps stay **DOWNSTREAM** · ≠ reserve reopen |
 | **Morris trajectory decision (post-FA requalification)** | **HISTORICAL** — Governance EC Order Sync → C6 → Next-Cycle Requalification *(superseded for forward path by CKC-first)* |
-| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · PR **#408** on main (`686e545a…`) · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice = **W3-A** · next capability candidate = **W3-B** · **W3-B NOT AUTHORIZED / NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** W3-B AUTHORIZED · **≠** REAL · **≠** FinOps PASS |
+| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · PR **#408** / truth sync PR **#409** on main (`ba7aa2db…`) · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · **W3-B DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · GO Morris W3-B **CONSUMED** · W3-C **NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** W3-B CLOSED · **≠** REAL · **≠** FinOps PASS |
 | **Product Completion W2 Track D / bounded CKC Phase B** | **INTEGRATED ON MAIN** · PR **#403 MERGED** · head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · D-W2-02 / US-P1-14 / REQ-24 · product-native CKC cognition before Options/Recommendation · delivery + security via **same generic product path** · Recommendation remains Recommendation · no automatic HumanDecision · no authority from CKC · **STOP BEFORE EXECUTE** · legacy OptionSet cutover fail-closed · business-first Pilote output · structured provenance retained · proof **DETERMINISTIC PROVEN** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · W2 later **CLOSED BY MORRIS** *(post-requalification)* · full CKC track **DOWNSTREAM W3** · C6 **CLOSED** · FinOps/T7 **FREEZE** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** W2 incomplete at Phase B timestamp · **≠** full CKC completion · **≠** REAL BOUNDARY PROVEN · **≠** W3 authorized |
 | **Product Completion W2 Final Closure Requalification** | **ACCEPTED BY MORRIS** · Cycle 9 QA · typology DOC · evidence on `main@1e4b0dbb…` · X01…X08 **PROVEN** · H→N 18-step **PROVEN** · PASS WITH NON-BLOCKING RESERVES · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · proof ceiling **DETERMINISTIC PRODUCT E2E PROVEN** · path `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` · **≠** W3 authorized · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · W3 later **AUTHORIZED** under distinct GO · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion W3 Delivery Readiness** | **QUALIFIED** · path `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md` · GO Morris W3 Delivery **CONSUMED** · W3 scope = backlog existant · C6 **CLOSED** / implement-only · REAL **OUT** · FinOps **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED |
-| **Product Completion W3-A Governed Execute** | **CLOSED BY MORRIS / INTEGRATED ON MAIN** · PR **#408 MERGED** · candidate `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · head→merge **0-file / tree parity** · US-P1-04 / FC-10 · X-W3A-01…08 **PASS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter remains external executor fake · post-merge evidence handoff `b3108f4f…` · source branch `delivery/sfia-studio-product-completion-w3-a-governed-execute` **PRESERVED** · **≠** W3 CLOSED · **≠** W3-B AUTHORIZED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
-| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice **W3-A** · next capability candidate **W3-B** (US-P1-05 / US-P1-06) · **W3-B NOT AUTHORIZED / NOT STARTED** · requalification required · canonical `/studio` · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** Evidence loop complete |
+| **Product Completion W3-A Governed Execute** | **CLOSED BY MORRIS / INTEGRATED ON MAIN** · PR **#408 MERGED** · candidate `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · head→merge **0-file / tree parity** · US-P1-04 / FC-10 · X-W3A-01…08 **PASS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter remains external executor fake · post-merge evidence handoff `b3108f4f…` · source branch `delivery/sfia-studio-product-completion-w3-a-governed-execute` **PRESERVED** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
+| **Product Completion W3-B Terminal + Evidence** | **DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · US-P1-05 / US-P1-06 · FC-11 / FC-12 · GO Morris W3-B Delivery **CONSUMED** · qualification **VALIDATED BY MORRIS** · base `ba7aa2db…` (PR **#409**) · branch `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` · **≠** W3-B CLOSED · **≠** US-P1-05/06 satisfied until review · **≠** W3-C started · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
+| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice **W3-A** · active construction slice **W3-B** · W3-C next downstream **NOT STARTED** · canonical `/studio` · **≠** W3 CLOSED · **≠** READY FOR REAL |
 | **Product Completion W2 Final Closure Product Correction** | **INTEGRATED ON MAIN** · PR **#405 MERGED** · head `330b36258f5a5fcb117fb562b12ff173b3675d94` · merge `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR-head CI SUCCESS · push/main CI **`32654262020` SUCCESS** · R01 Phase B Product E2E cognition · R02 material EC amend/reinspect + R1 recovery-safe · C6 **CLOSED** · no `lib/oa` mutation · **≠** W3 · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2-G3 Delivery** | **INTEGRATED ON MAIN** · PR **#400 MERGED** · delivery head `a276f170faece84a2121f5fe5796c24ae443674d` · merge `dd852243a652e85cce455a68fae5ac7aa13d2bea` · PR-head CI **`32632461315` SUCCESS / Required Gate PASS** · push/main CI **`32633308148` SUCCESS** · E+A+B+C governed trajectory: Options / Recommendation / HumanDecision / EC inspect / conditional Confirmation / authority+executor sufficiency · **STOP BEFORE EXECUTE** · ProjectTrajectory SoT **KEEP** · C6 **CLOSED** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · Phase B later **INTEGRATED** via PR **#403** · **≠** W2 finally closed · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion Backlog (Cycle 5)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · PR **#393 MERGED** · merge `7750b2a4017338c1a236433c4db8f5cc97dc2feb` · path `projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md` · 5 Epics · 4 Waves · P0/P1 cut-line · réserve R5 non bloquante · **≠** Delivery authorized by validation alone · W1 Delivery later **CONSUMED via distinct G3/Morris GOs** |
@@ -72,7 +74,7 @@
 | **ROADMAP-POST-MERGE-CKC-388** | **CLOSED ON MAIN** via PR **#389** / merge `c4dc1c9ce78290f00354e58dde451dd09616f49e` · post-merge CI **`32527209975` SUCCESS** · Roadmap sync integrated on main · **≠** DoctrinePackage runtime binding · **≠** Nora proven |
 | **DoctrinePackage / runtime CKC architecture qualification** | **ARCHITECTURE DIRECTION ADOPTED BY MORRIS — INTEGRATED ON MAIN** via PR **#390 + PR #391** · **G2 materialization DECIDED + GIT-INTEGRATED** via PR **#394** (`b3e978fe…`) · **W1 runtime materialization INTEGRATED** via PR **#395** (`ddd39181…`) · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · D02 Option B **KEEP** · fallback **NONE** · fixture quarantine/test-only → retire later · Product pin **fail-closed** · Phase A package-bound **INTEGRATED** · Phase A **≠** Phase B complete · bounded CKC→Nora seam **PROVEN (W1)** · bounded Phase B / generic multi-cycle cognition **INTEGRATED** (PR **#403**) · full CKC catalog evolvability **DOWNSTREAM W3** · runtime v3 **NON ADOPTED** |
 | **SFIA Studio product design tooling** | **MORRIS DECISION — PENPOT IS THE REFERENCE DESIGN WORKSPACE FOR SFIA STUDIO PRODUCT DESIGN** · Studio product design only · Git remains SoT for governance/contracts/decisions · R-04 EA historical recommendation **SUPERSEDED FOR FUTURE SFIA STUDIO PRODUCT DESIGN** · **≠** global SFIA methodological baseline · **≠** v3 doctrine change · **≠** runtime v3 adoption · EA document **not** retroactively rewritten |
-| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · PR **#408** on main (`686e545a…`) · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY IN PROGRESS / NOT CLOSED** · next capability candidate **W3-B** · **W3-B NOT AUTHORIZED / NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
+| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · PR **#408** + truth sync PR **#409** on main (`ba7aa2db…`) · **GO MORRIS W3 DELIVERY CONSUMED** · **GO MORRIS W3-B DELIVERY CONSUMED** · **W3 DELIVERY IN PROGRESS / NOT CLOSED** · **W3-B IN PROGRESS / NOT CLOSED** · W3-C **NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Intégration Git** | **C2 :** PR #369 / head `3c78c6763d0d090bdc38f3866ecd71ed6be219d0` / merge `2406ccda211842fc7f8da3699bb186a30f7dc105` · **Post-merge sync :** PR #370 (integration vehicle · Git evidence authoritative) · CI SFIA Studio **#222** SUCCESS (PR head) · post-merge CI **#223** SUCCESS · source branch `docs/sfia-studio-product-completion-c2-integration-clean` **PRESERVED** · historical unauthorized branch `docs/sfia-studio-product-completion-c2-functional-design` @ `780ab4c5` **PRESERVED FOR AUDIT** · Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · **M5 closure / Pre-M6 sequencing Roadmap :** PR #353 / title `docs(sfia-studio): close M5 and sequence Pre-M6 UX baseline` / base `3467ecdf74ac2010c45f34545fb8684563dea547` / head `7a744c8cec889be547eebe231279620189819dd0` / merge `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` — records M5 closure + inserts Pre-M6 before M6 · **≠** Slice A candidate (Slice A is later local work) · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** · **G-UX-15 Slice A controlled integration :** PR #354 / title `feat(sfia-studio): close Pre-M6 G-UX-15 execution wiring gap` / base `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` / head `22ae8e5e4bddb0f997384a5e8ba87c9b35245693` / merge `a6df83a640afeb0911cb572d118d27a03c9923a7` · CI SFIA Studio **#192** SUCCESS · post-merge main CI **#193** SUCCESS · post-merge truth **PASS** (exact 5-file SHAs on main) · feature branch **PRESERVED** (no delete) · **Cycle 14 docs sync :** PR #355 / title `docs(sfia-studio): sync Pre-M6 G-UX-15 post-merge current state` / merge `dd284e9f20de89b2c8fc7782e4177d0d125c24d2` — **MERGED ON MAIN** · **historique :** OPEN / DRAFT avant merge · **Cycle 15 visual adoption docs integration :** PR #356 / title `docs(sfia-studio): record Pre-M6 visual contract adoption` / head `3a93d0e5cfd86e46bb795ce22c0f7dd79078ef2a` / merge `50f31994b0d9b5a3a3514e2fa9a063d688071c50` — **MERGED ON MAIN** · CI SFIA Studio **#198** SUCCESS on final PR head · post-merge main CI **#199** SUCCESS · post-merge truth **PASS** · source branch **PRESERVED** (NO BRANCH DELETE) · **historique :** OPEN / DRAFT avant merge · **D-PRE-M6-UX-05 :** ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN (Freeze `uUdLBElF2B4dOefaAYt4QY`) — UI Delivery still **NOT AUTHORIZED** · **Cycle 14 PR #356 post-merge current-state sync :** PR #357 / title `docs(sfia-studio): sync PR 356 post-merge current state` / head `70643624c494f16fb91e3bede772a80f4eece783` / merge `b834fdd40d3e7028e80cf7b388b93df2f31e18e4` — **MERGED ON MAIN** · CI SFIA Studio **#200** SUCCESS on PR head · post-merge CI **#201** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · **PRE-M6 UI DELIVERY GATE / SCOPE QUALIFICATION :** **COMPLETE** — Review Handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` — verdict READY FOR MORRIS DELIVERY DECISION (**≠** UI Delivery authorized) — OPTION A = RECOMMENDATION AWAITING MORRIS DECISION *(historique qualification)* · **Cycle 15 Pre-M6 UI gap + CKC trajectory Roadmap :** PR #358 / title `docs(sfia-studio): record Pre-M6 UI gap and CKC trajectory` / head `c91ce1afd498ef9a5275e3b90509e7a045f240a0` / merge `0a80b92cb2c05f5b3f001438988b52c07c3bf0b6` — **MERGED ON MAIN** · CI SFIA Studio **#202** SUCCESS on PR head · post-merge CI **#203** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** (user « bon ok go option A ») — OPTION A = **ADOPTED BY MORRIS AS PRE-M6 UI DELIVERY SCOPE** · OPTION A SCOPE ADOPTED **≠** UI DELIVERY EXECUTION AUTHORIZED · NEXT PRODUCT GATE *(historique jusqu’à PR #361)* = **MORRIS PRE-M6 UI DELIVERY EXECUTION AUTHORIZATION — OPTION A** · **PR #359** Option A adoption sync **MERGED** (`0d33478…`) · **PR #360** fake-real progressive proof **MERGED** (`a3ac418…`) · **PRE-M6 PRODUCT VERTICAL SLICE :** PR #361 / title `feat(sfia-studio): consolidate Pre-M6 product vertical slice` / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` — **MERGED ON MAIN** · post-merge CI run **`32122892559` SUCCESS** · source branch `delivery/sfia-studio-pre-m6-ui-option-a` **PRESERVED** · GO Morris **PR #361 READY + MERGE — PRESERVE SOURCE BRANCH — THEN POST-MERGE VALIDATION** · **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** · **MORRIS DECISION — ACCEPT PRE-M6 EXIT FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT — CURRENT MAIN VERTICAL SLICE IS THE SFIA STUDIO FUNCTIONAL MVP BASELINE FOR PRODUCT COMPLETION — CARRY UAT-UX-06 / UAT-RECOVERY-03 / V3-F10 / PROCESS-LOCAL DURABILITY / N7 AS GOVERNED DEBT — RUNTIME V3 REMAINS NON ADOPTED** · PRE-M6 EXIT = **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** · PRE-M6 **≠ COMPLETE WITHOUT RESERVES** · NEXT PRODUCT GATE = **GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP** (consumable only after this documentation is integrated on main · **NOT AUTHORIZED now**) · NEXT REPOSITORY GATE = **MORRIS REVIEW — PRODUCT COMPLETION REBASELINE DRAFT PR — NO MERGE UNTIL EXPLICIT GO** |
 | **Sources** | Git `main` @ `a53c323e47e5fae1d35671f3ae232609a59b0f3f` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352/#353/#354/#355/#356/#357/#358/#359/#360/#361 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187/#192/#193/#197/#198/#199/#200/#201/#202/#203 · Pre-M6 UI Delivery qualification handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · D-PRE-M6-UX-05 visual review handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · GO Morris **VALIDATE D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT — ADOPT AS PRE-M6 VISUAL REFERENCE** · M4 Product path on main `projects/sfia-studio/app/**` |
 | **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** |
diff --git a/projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md b/projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md
index 9458b8d9..f2884067 100644
--- a/projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md
+++ b/projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md
@@ -10,9 +10,11 @@
 | **Slice historique** | **W3-A — Governed Execute** (premier slice dépendant · **CLOSED BY MORRIS** · **≠** capacité roadmap indépendante) |
 | **Capacité fermée (W3-A)** | **US-P1-04** — Exécution générique sous contrat · **FC-10** Governed Execution — **CLOSED for W3-A** |
 | **Base Git (entrée W3)** | `origin/main` @ `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` — Merge PR **#406** — docs(sfia-studio): sync W2 post-closure repository truth |
-| **Intégration W3-A** | PR **#408 MERGED** · candidate `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · head→merge **0-file / tree parity** |
-| **Branche projet (provenance historique)** | `delivery/sfia-studio-product-completion-w3-a-governed-execute` — **PRESERVED** · **≠** branche active de construction courante |
+| **Intégration W3-A** | PR **#408 MERGED** · candidate `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · head→merge **0-file / tree parity** · post-closure truth sync PR **#409** → `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
+| **Branche projet (provenance historique)** | `delivery/sfia-studio-product-completion-w3-a-governed-execute` — **PRESERVED** |
+| **Branche construction W3-B** | `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` — **LOCAL / NO PROJECT COMMIT** |
 | **Statut W3-A** | **CLOSED BY MORRIS / INTEGRATED ON MAIN** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** |
+| **Statut W3-B** | **DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · US-P1-05 / US-P1-06 · FC-11 / FC-12 · qualification **VALIDATED BY MORRIS** · GO Morris W3-B Delivery **CONSUMED** · **≠** W3-B CLOSED · **≠** US satisfied until review |
 | **Statut readiness / Delivery W3** | **QUALIFIED** — GO Morris W3 Delivery **CONSUMED** · Delivery **IN PROGRESS** · W3 **NOT CLOSED** |
 | **W1** | **CLOSED** |
 | **W2** | **CLOSED BY MORRIS** |
@@ -22,21 +24,24 @@
 | **W4** | **OUT / NOT STARTED** |
 | **runtime v3** | **NON ADOPTED** |
 | **Product Completion** | **INCOMPLETE** |
-| **Next capability candidate** | **W3-B REQUALIFICATION** (US-P1-05 / US-P1-06) — **NOT AUTHORIZED / NOT STARTED** |
+| **Next capability downstream** | **W3-C** (Learn / Recovery / Replan · US-P1-07) — **NOT STARTED** |
 | **Chemin produit** | Canonique **`/studio`** |

 ## Anti-affirmations

 - W3 readiness / GO Delivery **≠** W3 CLOSED.
 - **W3-A CLOSED ≠ W3 CLOSED**.
+- **W3-B IN PROGRESS ≠ W3-B CLOSED ≠ W3 CLOSED**.
 - **US-P1-04 CLOSED ≠ US-P1-05/06/07 CLOSED**.
 - AUTHORIZED (W2) **≠** Execute · Execute W3-A **≠** Product SUCCESS semantics.
 - Attempt terminal technique **≠** Product SUCCESS / STOP / FAIL · **≠** CycleInstance closed · **≠** Project archived.
+- Evidence absent **≠** Product claim.
 - AuthorityVerificationReceipt **≠** reusable permission.
 - DETERMINISTIC PRODUCT-NATIVE PROVEN **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN.
 - TestExecutionAdapter = fake external executor boundary only.
 - C6 CLOSED — ne pas rouvrir l’architecture.
-- **W3-B = NOT AUTHORIZED / NOT STARTED**.
+- **W3-B = DELIVERY AUTHORIZED / IN PROGRESS** · **≠** CLOSED.
+- W3-C/D/E **NOT STARTED**.
 - REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED.
 - Product Completion **INCOMPLETE**.
 - Ce document **≠** Build Doctrine mutation · **≠** backlog rewrite.
@@ -138,7 +143,8 @@ Cette décision est une décision historique de **CONSTRUCTION W3-A**. Elle n’
 | W3-A | **CLOSED BY MORRIS / INTEGRATED ON MAIN** · seam **W2 AUTHORIZED → Attempt fixture gouverné** proven |
 | W3-A ferme W3 ? | **NON** |
 | NEXT-CAPABILITY REQUALIFICATION (entrée W3) | **SATISFIED / CONSUMED** par la qualification W3 + GO Delivery |
-| Next capability candidate | **W3-B** — **NOT AUTHORIZED / NOT STARTED** · requalification required |
+| Next capability downstream | **W3-C** — **NOT STARTED** |
+| Capacité active | **W3-B** — **DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** |
 | Frontière W2 reprise | EC inspecté → Confirmation si requise → effective authority → **AUTHORIZED/BLOCKED** → **STOP BEFORE EXECUTE** (W2) · W3-A démarre **exactement** après AUTHORIZED |

 ---
@@ -181,8 +187,8 @@ W3 macro reste **ouvert** jusqu’à fermeture des slices backlog W3 (dont US-P1

 | ID | Dette | Owner | Exit |
 |---|---|---|---|
-| W3A-D01 | Terminal technique `succeeded` **≠** sémantique Product SUCCESS/STOP/FAIL | W3-B | Fermeture US-P1-05 mapping métier — **OPEN** |
-| W3A-D02 | Evidence / Review / Nora post-Evidence **non fermés** | W3-B+ | US-P1-06 / US-P1-07 — **OPEN** |
+| W3A-D01 | Terminal technique `succeeded` **≠** sémantique Product SUCCESS/STOP/FAIL | W3-B | Fermeture US-P1-05 mapping métier — **CANDIDATE CLOSE ON W3-B EXIT PASS** |
+| W3A-D02 | Evidence / Review / Nora post-Evidence **non fermés** | W3-B + W3-C | Evidence+RB portion **CANDIDATE CLOSE ON W3-B EXIT** · Nora/replan **OPEN owner W3-C** |
 | W3A-D03 | Critical CycleInstance `proposed` sans API publique d’ack — EC cycle-linked confirm fail-closed (R-T-A3-1) | backlog / OA | Ne pas inventer AcknowledgeCriticalCycle ; path produit Standard primaire ; Critical agent_selection Confirmation harvestée pour Select — **OPEN** |
 | W3A-D04 | Preuve `/studio` Playwright R09 accepted→running→terminal | **CLOSED ON MAIN / proven after merge** — PASS · PR **#408** · push/main CI **`32703289053`** · captures 07/08/09 | Proven on main |
 | W2-CL-R04 | OPEN_NON_BLOCKING (carry) | Roadmap | Non bloquant W3-A — **OPEN_NON_BLOCKING** |
@@ -199,11 +205,13 @@ W3 macro reste **ouvert** jusqu’à fermeture des slices backlog W3 (dont US-P1
 | W3-A project commit / branch push / PR #408 / merge | **CONSUMED** |
 | W3-A post-merge proof | **CONSUMED** — main CI **`32703289053` SUCCESS** |
 | Morris W3-A Closure Decision | **CONSUMED** |
-| Post-closure Roadmap/doc11 truth sync Git integration | **NOT CONSUMED** (local candidate only) |
-| GO W3-B | **NON CONSOMMÉ** |
+| Post-closure Roadmap/doc11 truth sync Git integration | **CONSUMED** — PR **#409** merge `ba7aa2db…` · main CI **`32711277234` SUCCESS** |
+| GO W3-B Delivery | **CONSUMED** — qualification **VALIDATED BY MORRIS** · delivery **IN PROGRESS** |
 | GO REAL | **NON CONSOMMÉ** |
 | FinOps/T7 | **FREEZE** |
+| W3-B closure | **NON** |
 | W3 closure | **NON** |
+| W3-C | **NOT STARTED** |
 | W4 | **OUT** |
 | Product Completion complete | **NON** |
 | runtime v3 ADOPTED | **NON** |
@@ -212,12 +220,20 @@ W3 macro reste **ouvert** jusqu’à fermeture des slices backlog W3 (dont US-P1

 ## 7. Capacité suivante

-**W3-B** — terminal semantics Product (SUCCESS/STOP/FAIL) + Evidence business-first seam (US-P1-05 / US-P1-06) — **NEXT CAPABILITY CANDIDATE** — **REQUIRES CONVERGENCE REQUALIFICATION + DISTINCT MORRIS GO BEFORE DELIVERY**.
+**W3-C** — Nora post-Evidence / LPS / Trajectory / Recovery / Replan (US-P1-07 + E2E) — **NOT STARTED**.

-**≠** autorisé par la seule fermeture W3-A · **≠** started · **≠** delivery next automatic.
+**W3-B** remains the **active delivery slice** until ChatGPT review + distinct Morris Git integration GO.
+
+**≠** W3-B CLOSED by this readiness sync alone · **≠** W3 CLOSED · **≠** W3-C started.

 ---

 ## 8. Verdict readiness / closure

-**W3 DELIVERY READINESS = QUALIFIED** · GO Morris W3 **CONSUMED** · **W3-A CLOSED BY MORRIS / INTEGRATED ON MAIN** · Product Completion **INCOMPLETE** · W3 **IN PROGRESS / NOT CLOSED** · next = **W3-B REQUALIFICATION** · **W3-B NOT AUTHORIZED**.
+**W3 DELIVERY READINESS = QUALIFIED** · GO Morris W3 **CONSUMED** · **W3-A CLOSED** · **W3-B DELIVERY AUTHORIZED / IN PROGRESS / NOT CLOSED** · Product Completion **INCOMPLETE** · W3 **IN PROGRESS / NOT CLOSED** · next downstream = **W3-C NOT STARTED**.
+
+## 1quinquies. Morris W3-B Delivery GO (consommée — synthèse)
+
+> **GO MORRIS — W3-B TERMINAL + EVIDENCE DELIVERY — IMPLEMENT VALIDATED W3-B QUALIFICATION — CONSUME W3-A CLOSED GOVERNED EXECUTE — US-P1-05 / US-P1-06 — FC-11 / FC-12 — REAL OUT — FINOPS FREEZE — W4 OUT — W3-C/D/E NOT STARTED — C6 CLOSED — RUNTIME V3 NON ADOPTED.**
+
+Cette décision **autorise** la construction locale W3-B. Elle **n’autorise pas** : W3-B CLOSED · W3 CLOSED · W3-C · REAL · W4 · FinOps unfreeze · runtime v3 ADOPTED · project commit/push/PR sans GO distinct post-review.

```
## 20. FC-11 semantics implementation
- File: `w3bProductOutcomeSemantics.ts` — pure `qualifyProductOutcome`
- SUCCESS: succeeded + resultRef + Evidence available
- STOP: cancelled + cancelledAt/stopReason + Evidence
- FAIL: failed|timeout + diagnostic/facts + Evidence
- UNCLAIMED/fail-closed without Evidence or insufficient facts
- Technical status alone never decides; hostile claimedOutcome ignored in materialize
- Anti-claims: ready/w3Closed/productCompletion/runtimeV3/real/cycleClose/projectArchive all false

## 21. FC-12 Evidence implementation
- `IngestExecutionAttemptEvidence` accepts terminal succeeded|failed|timeout|cancelled with required facts
- Non-terminal → ATTEMPT_STATUS_REFUSED (fail-closed preserved)
- Snapshot fields: stopReason, cancelledAt, timedOutAt, cancellationRequested
- Materialize: deterministic `ev:w3b:` / `rb:w3b:` from attemptId + CreateReviewBundle + qualify
- Rehydrate: read durable Evidence/RB by deterministic ids then idempotent materialize

## 22. SUCCESS proof
- Unit: `w3bProductOutcomeSemantics.test.ts`
- Integration: `w3bTerminalEvidence.test.ts` SUCCESS case — Evidence+RB+SUCCESS; hostile FAIL claim ignored; replay idempotent; rehydrate same ids
- E2E: `studio-w3b-terminal-evidence-runtime.spec.ts` SUCCESS — captures 01/02/03/06
- Cycle not auto-closed; READY=non; REAL=non

## 23. STOP proof
- Integration + E2E: cancel while running → cancelled → Evidence → Product STOP (not FAIL)
- Capture 04 — governed stop business-first
- Reason business-readable from CancelExecutionAttempt.stopReason

## 24. FAIL proof
- Integration + E2E: RecordExecutionFailure → failed → Evidence → Product FAIL (never SUCCESS)
- Capture 05 — diagnostic Evidence
- errorRef durable

## 25. Evidence-before-claim negatives
1. Technical terminal without Evidence → rehydrate fails PRODUCT_OUTCOME_NOT_DURABLE; UI evidence-pending before materialize (E2E 01)
2. Insufficient Evidence status → UNCLAIMED in qualifier
3. Other project → PROJECT_MISMATCH
4. Hostile claimedProductOutcome ignored
5. cycleProfile/ckcId voided / not inputs to qualifier
6. Replay idempotent — same Evidence/RB ids
7. Terminal does not close CycleInstance (assertions)

## 26. ReviewBundle proof
- createReviewBundle after ingest; UI shows reviewBundleId; reservations include W3-C not started / REAL OUT / NO READY

## 27. Rehydration / restart proof
- Integration rehydrate + E2E rehydrate button → same Evidence/RB ids (capture 06)
- No transcript dependency; no Nora

## 28. W3-C non-start proof
- materialize sets noraInvoked=false, replanInvoked=false
- No calls to analyzePostEvidenceWithProvider / LPS learning append in W3-B path
- F3 remain READ-ONLY (not modified)

## 29. W3-D genericity proof
- Qualifier has no cycle-type branches; materialize voids cycleProfile/ckcId
- Same engine for any project/EC/attempt lineage

## 30. W4 boundary proof
- Local textual SUCCESS/STOP/FAIL + Evidence primary + technical details secondary
- No S1→S12 redesign / a11y closure / UAT claim

## 31. Fake/Real qualification
- Applicable YES
- Fake: TestExecutionAdapter (external executor only)
- Product OA Evidence/RB/Attempt pipeline real
- REAL OUT; GO REAL NOT CONSUMED
- No client-injected Product Outcome; no fake DOM truth

## 32. Tests run + exact results
- Targeted Vitest W3-B + ingest + adversarial: PASS
- W3-A regression `w3aGovernedExecute.test.ts`: 24 PASS
- Full Vitest: **214 passed | 13 skipped** · **2041 passed | 131 skipped**
- typecheck: PASS
- lint: PASS
- build: PASS
- Playwright W3-B: **3 passed**
- importBoundaries: PASS (allowlist updated)
- git diff --check: clean

## 33. Runtime capture manifest

```
{"id":"01-technical-terminal-evidence-pending","file":"01-technical-terminal-evidence-pending.png","screen":"TrajectorySurface","state":"technical_terminal_evidence_pending","scenario":"SUCCESS","attemptId":"xat:w3a:e7b61b0b785620f4","outcome":null,"route":"http://127.0.0.1:3020/studio/projects/prj%3Aca349868-566d-4576-a7ff-5efccd53bad4","timestamp":"2026-08-24T10:23:36.490Z","sha256":"1e5c3e62eae849f51002ec2172883cc5a50dc738e5f5ff506618e971f5f7dd70","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"02-success-business-first","file":"02-success-business-first.png","screen":"TrajectorySurface","state":"product_success","scenario":"SUCCESS","attemptId":"xat:w3a:e7b61b0b785620f4","evidenceId":"ev:w3b:4e6fea10edbefdbd","reviewBundleId":"rb:w3b:4e6fea10edbefdbd","outcome":"SUCCESS","route":"http://127.0.0.1:3020/studio/projects/prj%3Aca349868-566d-4576-a7ff-5efccd53bad4","timestamp":"2026-08-24T10:23:36.732Z","sha256":"e71d822a757e9c027603d92b328c369a2d1783ee120d876819cb5ad4ca16fffa","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"03-success-technical-detail","file":"03-success-technical-detail.png","screen":"TrajectorySurface","state":"product_success_technical_secondary","scenario":"SUCCESS","attemptId":"xat:w3a:e7b61b0b785620f4","evidenceId":"ev:w3b:4e6fea10edbefdbd","reviewBundleId":"rb:w3b:4e6fea10edbefdbd","outcome":"SUCCESS","route":"http://127.0.0.1:3020/studio/projects/prj%3Aca349868-566d-4576-a7ff-5efccd53bad4","timestamp":"2026-08-24T10:23:36.917Z","sha256":"78cfb6e6be389aca4cd88a8c00c1438c6c092bf7ba51da7d7120f3b90cf19095","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"06-rehydration-durable-outcome","file":"06-rehydration-durable-outcome.png","screen":"TrajectorySurface","state":"rehydrated_same_evidence_rb","scenario":"SUCCESS_REHYDRATE","attemptId":"xat:w3a:e7b61b0b785620f4","evidenceId":"ev:w3b:4e6fea10edbefdbd","reviewBundleId":"rb:w3b:4e6fea10edbefdbd","outcome":"SUCCESS","route":"http://127.0.0.1:3020/studio/projects/prj%3Aca349868-566d-4576-a7ff-5efccd53bad4","timestamp":"2026-08-24T10:23:37.111Z","sha256":"7f90f4957fd484a46d9c26e6204b8005f761cc28db67fcd3e7f587a78a70d71c","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"04-governed-stop-business-first","file":"04-governed-stop-business-first.png","screen":"TrajectorySurface","state":"product_stop","scenario":"STOP","attemptId":"xat:w3a:b8126ff29bc625f1","evidenceId":"ev:w3b:31b1624617a417d4","reviewBundleId":"rb:w3b:31b1624617a417d4","outcome":"STOP","route":"http://127.0.0.1:3020/studio/projects/prj%3A994ba473-3e80-41c9-8186-00a02a389b5e","timestamp":"2026-08-24T10:23:38.909Z","sha256":"37c5e0dfc80474cae573ee79c685da8c06116e2a02b7a6a20c69ba5c718bca3f","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"05-fail-business-first-diagnostic","file":"05-fail-business-first-diagnostic.png","screen":"TrajectorySurface","state":"product_fail","scenario":"FAIL","attemptId":"xat:w3a:4da2f51c525d2004","evidenceId":"ev:w3b:fb60c01c055e4b12","reviewBundleId":"rb:w3b:fb60c01c055e4b12","outcome":"FAIL","route":"http://127.0.0.1:3020/studio/projects/prj%3Ac75b36e8-4c12-4b57-96fb-3833c79265dd","timestamp":"2026-08-24T10:23:40.552Z","sha256":"ee95512f6f15213ba4bbf5115909148bfda83fb843064da557a118b424bf52de","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}

```


## 34. X-W3B-01…12 matrix

| Exit | Result | Proof |
|---|---|---|
| X-W3B-01 FC-11 single seam | PASS | `w3bProductOutcomeSemantics.ts` only qualifier; no second lifecycle |
| X-W3B-02 SUCCESS honesty | PASS | tests + E2E SUCCESS; no Evidence → no claim |
| X-W3B-03 STOP honesty | PASS | cancel path + STOP ≠ FAIL |
| X-W3B-04 FAIL honesty | PASS | recordFailure + FAIL ≠ SUCCESS |
| X-W3B-05 Evidence every terminal | PASS | ingest + materialize SUCCESS/STOP/FAIL |
| X-W3B-06 ReviewBundle business-first | PASS | UI Evidence summary primary; technical details |
| X-W3B-07 restart/reconstruction | PASS | rehydrate same ids (unit+E2E 06) |
| X-W3B-08 W3-C compatible non-start | PASS | durable output; nora/replan false |
| X-W3B-09 catalog genericity | PASS | no cycle-specific engine |
| X-W3B-10 lifecycle honesty | PASS | cycle/project/READY false |
| X-W3B-11 Fake/Real fidelity | PASS | TestExecutionAdapter boundary only |
| X-W3B-12 Product proof /studio | PASS | Playwright 3 scenarios + 6 PNGs |

## 35. Debt / reserve matrix
| ID | Status | Owner | Notes |
|---|---|---|---|
| W3A-D01 | CANDIDATE CLOSED (on W3-B exit PASS pending Morris) | W3-B | Product Outcome seam delivered |
| W3A-D02 | PARTIAL — Evidence/RB candidate close; Nora OPEN | W3-C | Nora/replan not started |
| W3A-D03 | OPEN | later | Critical Cycle ack — not blocking |
| W2-CL-R04 | OPEN_NON_BLOCKING | Roadmap | unchanged |
| PB-RES-REAL-01 | OPEN / TRACE ONLY | REAL | unchanged |

## 36–37. Roadmap + doc11
- Updated locally: W3-B DELIVERY AUTHORIZED / IN PROGRESS; W3-A CLOSED; W3 IN PROGRESS; W3-C NOT STARTED; REAL OUT; FinOps freeze; W4 OUT; C6 CLOSED; runtime v3 NON ADOPTED
- Diffs included in §19

## 38. git diff --check
CLEAN (no whitespace errors)

## 39. Final changed-file list
See §17 (+ importBoundaries.test.ts allowlist)

## 40. Final staged list
EMPTY

## 41. No commit/push/PR proof
- HEAD still `ba7aa2db…` = origin/main
- No project commit created this cycle
- No project push / PR / merge

## 42. Blockers
NONE for candidate delivery review

## 43. Reserves
- W3A-D03 / W2-CL-R04 / PB-RES-REAL-01 unchanged
- Global W4 UX/a11y/UAT out of scope
- Nora/replan owned by W3-C

## 44. Final verdict
**W3-B TERMINAL + EVIDENCE DELIVERY CANDIDATE — READY FOR CHATGPT FUNCTIONAL REVIEW**

## 45. Recommended next gate
ChatGPT detailed functional review → only after PASS: distinct Morris GO for project Git integration (commit + push + Draft PR).

Anti-claims preserved: ≠ W3-B CLOSED · ≠ W3 CLOSED · ≠ W3-C STARTED · ≠ READY FOR REAL · ≠ REAL PROVEN · ≠ Product Completion COMPLETE · ≠ runtime v3 ADOPTED.
