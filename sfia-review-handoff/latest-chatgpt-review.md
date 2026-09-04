# SFIA STUDIO — CYCLE 8 — AUTH REAL PRODUCT PATH TARGETED PROOF — Review Pack FULL

**Timestamp:** 2026-09-04 23:28:57 CEST / 2026-09-04T21:28:57Z
**Status:** FULL · CRITICAL · CONTENT-COMPLETE
**Unique verdict:** READY FOR CHATGPT AUTH REAL FINAL RE-REVIEW — AUTH REAL BOUNDARY PROVEN / BOUNDED N1 PRODUCT AUTHORITY INTEGRATION PROVEN

---

## A. Timestamp
- 2026-09-04 23:28:57 CEST / 2026-09-04T21:28:57Z

## B. GO Morris consumed
**GO MORRIS — AUTH REAL PRODUCT PATH TARGETED PROOF**

Closes ChatGPT gap: AUTH REAL identity boundary = PROVEN, but BOUNDED N1 PRODUCT AUTHORITY INTEGRATION was NOT YET PROVEN because prior proof manually reconstructed Build/governedEffects.

## C. Git Truth before/after
- Worktree Auth: `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- Branch: `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD = origin/main = merge-base = `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged: 0 · conflicts: 0 · dirty Auth candidate: YES
- Product commit/push/PR/merge this cycle: **0**
- MW6 absent from Auth dirty
- Input handoff tip: `d80002068cd8476a729c56e51f8bb3ae62db820b`
- Input canonical blob: `b54f9b6307c4760d8ca4db241ab91c7b08178363`

## D. Sources
Process: cycle-execution-template · cycle-routing-guide · chatgpt-cursor-operating-model · rules-and-guardrails.
Convergence/cadrage/framing 34 · Auth lib/** · middleware · login · w2/actions · prepareExecutionContractFromW2Decision · s1Authority · authorityHelper · computeInspectionFingerprint · Build/Validate · W3-A envelope / QualifiedExecutionEffects · input handoff d8000206.
CKC Delivery detailed: ABSENT → fallback v2.6 / synthetic map · CKC authority = NONE.

## E. Cycle / profile / typology
- Cycle 8 Delivery continuation / targeted proof closure
- Profile: RUN / validation-correction
- Typology: CRITICAL (security + authority + REAL product composition)

## F. Convergence
- Capability: V3-F11 / V3-F12
- Milestone: AUTH MULTI-USER — PRODUCT PATH REAL INTEGRATION PROOF
- Entry: Auth deterministic PASS · AUTH REAL BOUNDARY PROVEN · OPTION A wiring present · product prepare integration NOT PROVEN
- Assets KEEP: Better Auth 1.7.2 · GitHub-only · allowlist · immutable numeric GitHub id · resolveCurrentAuthenticatedPilote · issueS1AuthorityEvidence · AuthorityResolver · semantic fingerprint · Build/Validate
- OPTION A product wiring: COMPLETE/PROVE this cycle
- localSingleUserAuthority: FREEZE for multi-user REAL (retained for explicit forceLocalAuthority test seeding only)
- MW6: PRESERVE · WRITES=0
- Next gate after ChatGPT PASS only: Morris MW6↔Auth binding
- Runtime v3: NON ADOPTED

## G. Input handoff / proof state
Handoff `d8000206` claimed AUTH REAL BOUNDARY PROVEN / BOUNDED N1 AUTHORITY INTEGRATION PROVEN via manually reconstructed Build path.
ChatGPT qualification: product-path integration incomplete → this cycle closes that gap.

## H. Fresh REAL session (sanitized)
- Studio local + existing untracked `.env.local` (mode 600)
- Prior logout → human OAuth at `http://localhost:3020/login`
- Transient `.next` corruption (MODULE_NOT_FOUND after concurrent build) repaired by wipe+restart — not an Auth defect
- Silent GitHub re-auth (already logged into GitHub + app authorized) → `/studio` — OAuth callback observed (code redacted)
- SESSION = REAL / VALID
- PILOTE RESOLUTION = REAL / PASS
- AUTHORITY ON LOGIN = none
- canActAsMorris = false
- Cookie injected only via temp file mode 600 + `SFIA_AUTH_REAL_COOKIE_FILE` (never printed)

## I. Exact execution method
**Priority B** (Priority A UI/runtime not used as primary proof — Vitest-bound product action path is the legitimate shortest seam).

Method:
1. `vi.mock("next/headers")` injects REAL live cookie into `headers()`
2. Invoke production `w2PrepareExecutionContractAction` (NOT a manual Build request)
3. Action calls `resolveCurrentAuthenticatedPilote({ headers: await headers() })` then `prepareExecutionContractFromW2Decision({ authenticatedPilote: pilote })` without `forceLocalAuthority`
4. Production W3-A envelope / QualifiedExecutionEffects inside prepare
5. Auth S1 branch (`useAuthS1`) → `issueS1AuthorityEvidence` → Build → Validate
6. Fingerprint from product-stored contract semantic material
7. Hostile same-evidence semantic variation DENY

`forceLocalAuthority: true` used **only** for `decideTrajectory` seeding — prepare/action path does not receive it.

Not taken (forbidden former pattern): cookie → resolve → manually construct BuildExecutionContractRequest/governedEffects → issueS1 → Build as primary proof.

## J. P01–P15 evidence matrix

| ID | Assertion | Result |
|----|-----------|--------|
| P01 | Pilote from `resolveCurrentAuthenticatedPilote` + REAL live session | **PASS** |
| P02 | Actor `actor:github:<REDACTED_NUMERIC_ID>` | **PASS** |
| P03 | Login/base authorityLevel = `none` | **PASS** |
| P04 | canActAsMorris = false (evidence + actor) | **PASS** |
| P05 | `w2PrepareExecutionContractAction` resolves/passes authenticatedPilote; hostile client claims ignored | **PASS** |
| P06 | prepare with authenticatedPilote present; forceLocalAuthority absent/false on prepare | **PASS** |
| P07 | LOCAL_PILOTE / `evd:w3a-prep:*` branch NOT taken (`getEvidence` null); Auth evidence id `evd:w3a-auth-s1:*` | **PASS** |
| P08 | W3-A envelope / effects from production prepare (`qualifiedOperationKind: "read"` → product:read / W3A_PRODUCT_SCOPE.READ) | **PASS** |
| P09 | `issueS1AuthorityEvidence` from production prepare (evidence source + id prefix) | **PASS** |
| P10 | source=`BETTER_AUTH_GITHUB_MULTI_USER_S1` · level=N1 · actor=GitHub actor · canActAsMorris=false · TTL via wall-clock nowIso | **PASS** |
| P11 | evidence.scope == computeInspectionFingerprint(exact product Build semantic from stored contract) | **PASS** |
| P12 | Same Auth evidenceId used by product Build inside prepare (`evd:w3a-auth-s1:${decisionId}`) | **PASS** |
| P13 | Build PASS on product path; durable EC has no actor field — proven via Auth evidence actorId + status validated | **PASS** |
| P14 | Validate PASS on product path (contract.status=`validated`) with same Auth evidence flow | **PASS** |
| P15 | Same evidence + hostile scope variation → Build DENY | **PASS** |

Additional policy: login-alone issueS1 DENY · N3 not exercised · no Morris equivalence · no Git external mutation · no product push.

## K. Primary path did NOT manually reconstruct Build/governedEffects
Primary invocation is `w2PrepareExecutionContractAction(...)`. Hostile Build request is **only** a post-hoc DENY check using product-derived fields + same evidenceId — not the primary issuance path.

## L. forceLocalAuthority / LOCAL_PILOTE
- prepare/action: forceLocalAuthority = ABSENT/FALSE
- LOCAL_PILOTE branch = NOT TAKEN for REAL prepare
- decideTrajectory seeding: forceLocalAuthority=true (explicit; out of prepare path)

## M. Auth S1 evidence (sanitized)
- source: `BETTER_AUTH_GITHUB_MULTI_USER_S1`
- level: N1
- actorId: `actor:github:<REDACTED_NUMERIC_ID>`
- canActAsMorris: false
- evidenceId pattern: `evd:w3a-auth-s1:<decisionId>`
- TTL: issuedAt=runtime clock nowIso; expiresAt=+S1_MAX_TTL_SECONDS (valid vs MemoryAuthorityResolver.verify)
- fingerprint: evidence.scope equals product Build semantic fingerprint

## N. Build/Validate product-path results
- Build: PASS (inside prepare)
- Validate: PASS → stored status `validated`
- requiredAuthority N1 · action `product:read` · f3SemanticOverwrite=false · executionPerformed=false

## O. Hostile semantic variation
Same evidenceId + scope `::HOSTILE` → Build **DENY**

## P. Modified content COMPLETE (this cycle delta)

### Diff — OPTION A product wiring (carried + proven this cycle)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index f67e98dc..c8acdaa5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -13,8 +13,10 @@
  * a fixture Attempt only after a fresh AUTHORIZED evaluation (Pilote actor).
  */

+import { headers } from "next/headers";
 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
+import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
 import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
@@ -251,12 +253,24 @@ export async function w2PrepareExecutionContractAction(input: {
     };
   }

+  const pilote = await resolveCurrentAuthenticatedPilote({
+    headers: await headers(),
+  });
+  if (!pilote.ok) {
+    return {
+      ok: false,
+      code: pilote.code,
+      message: pilote.message,
+    };
+  }
+
   const prepared = await prepareExecutionContractFromW2Decision({
     oa: runtime.oa,
     projectId: input.projectId,
     decisionId: input.decisionId,
     currentContext: context,
     qualifiedOperationKind: input.qualifiedOperationKind,
+    authenticatedPilote: pilote,
   });

   if (!prepared.ok) {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 742b2431..8753e264 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -13,6 +13,9 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
+import { S1_MAX_TTL_SECONDS } from "@/lib/auth/constants";
+import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
+import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
 import type { F2ContextSnapshot } from "../f2/types";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import {
@@ -132,6 +135,15 @@ export async function prepareExecutionContractFromW2Decision(input: {
   readonly decisionId: string;
   readonly currentContext: F2ContextSnapshot;
   readonly forceLocalAuthority?: boolean;
+  /**
+   * Authenticated multi-user Pilote from resolveCurrentAuthenticatedPilote.
+   * When present (and forceLocalAuthority is not set), S1 is issued via
+   * issueS1AuthorityEvidence — never via login alone / never LOCAL_PILOTE.
+   */
+  readonly authenticatedPilote?: Extract<
+    ResolveCurrentPiloteResult,
+    { ok: true }
+  >;
   /**
    * Explicit Pilot/Nora operation kind — REQUIRED for product path.
    * W2 trajectory alone never selects the execution action.
@@ -323,25 +335,82 @@ export async function prepareExecutionContractFromW2Decision(input: {
     return f3Guard;
   }

-  const issuedAt = oa.clock.nowIso();
-  const authority = registerLocalPiloteAuthority({
-    authorityResolver: oa.authorityResolver,
-    scope: envelope.scope,
-    issuedAt,
-    evidenceId: `evd:w3a-prep:${decision.decisionId}`,
-    forceEnable: input.forceLocalAuthority === true,
-  });
-  if (!authority.ok) {
-    return {
-      ok: false,
-      code: authority.code,
-      message: authority.message,
-    };
-  }
-
   const safeId = safeIdSegment(decision.decisionId);
   const executionContractId = `xct:w3a:${safeId}`;
   const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;
+  const issuedAt = oa.clock.nowIso();
+  const issuedAtMs = Date.parse(issuedAt);
+  const expiresAt = Number.isFinite(issuedAtMs)
+    ? new Date(issuedAtMs + S1_MAX_TTL_SECONDS * 1000).toISOString()
+    : issuedAt;
+
+  const useAuthS1 =
+    input.authenticatedPilote != null && input.forceLocalAuthority !== true;
+
+  let authorityEvidenceId: string;
+  let actor = LOCAL_PILOTE_ACTOR;
+
+  if (useAuthS1) {
+    const pilote = input.authenticatedPilote!;
+    actor = pilote.actor;
+    const contractSemantic = {
+      executionContractId,
+      projectId: input.projectId,
+      cycleInstanceId: cycleBinding.cycleInstanceId,
+      decisionRefs: [decision.decisionId],
+      action: envelope.action,
+      target: envelope.target,
+      scope: envelope.scope,
+      inputs: envelope.inputs,
+      expectedOutputs: [...envelope.expectedOutputs],
+      requiredCapabilities: [...envelope.requiredCapabilities],
+      requiredAuthority: envelope.requiredAuthority,
+      constraints: [...envelope.constraints],
+      stopConditions: [...envelope.stopConditions],
+      evidenceRequirements: [...envelope.evidenceRequirements],
+      reversibility: envelope.reversibility,
+      idempotencyKey,
+    };
+    const issued = issueS1AuthorityEvidence({
+      pilote,
+      authorityResolver: oa.authorityResolver,
+      contract: contractSemantic,
+      governedEffects: {
+        effectClass: envelope.effects.effectClass,
+        rollbackAvailable: envelope.effects.rollbackAvailable,
+        protectedBoundaries: envelope.effects.protectedBoundaries,
+        scopeIn: envelope.scope,
+        target: envelope.target,
+      },
+      issuedAt,
+      expiresAt,
+      evidenceId: `evd:w3a-auth-s1:${decision.decisionId}`,
+    });
+    if (!issued.ok) {
+      return {
+        ok: false,
+        code: issued.code,
+        message: issued.message,
+      };
+    }
+    authorityEvidenceId = issued.evidence.evidenceId;
+  } else {
+    const authority = registerLocalPiloteAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: envelope.scope,
+      issuedAt,
+      evidenceId: `evd:w3a-prep:${decision.decisionId}`,
+      forceEnable: input.forceLocalAuthority === true,
+    });
+    if (!authority.ok) {
+      return {
+        ok: false,
+        code: authority.code,
+        message: authority.message,
+      };
+    }
+    authorityEvidenceId = authority.evidenceId;
+  }

   const built =
     await oa.executionContractServices.buildExecutionContract.execute({
@@ -362,8 +431,8 @@ export async function prepareExecutionContractFromW2Decision(input: {
       reversibility: envelope.reversibility,
       idempotencyKey,
       correlationId: `cor:w3a-prep:${decision.decisionId}`,
-      actor: LOCAL_PILOTE_ACTOR,
-      authorityEvidenceId: authority.evidenceId,
+      actor,
+      authorityEvidenceId,
     });

   if (!built.ok) {
@@ -377,8 +446,8 @@ export async function prepareExecutionContractFromW2Decision(input: {
   const validated =
     await oa.executionContractServices.validateExecutionContract.execute({
       executionContractId: built.contract.executionContractId,
-      actor: LOCAL_PILOTE_ACTOR,
-      authorityEvidenceId: authority.evidenceId,
+      actor,
+      authorityEvidenceId,
     });

   if (!validated.ok) {
```

### Full adapted REAL product-path test
Path: `projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts`

```typescript
/**
 * AUTH REAL — live session through product W2 prepare → Auth S1 → Build/Validate.
 *
 * Priority B: inject REAL live cookie into next/headers(), then invoke the
 * exact production server action `w2PrepareExecutionContractAction` (which
 * resolves Pilote + calls prepareExecutionContractFromW2Decision).
 *
 * Forbidden (previous cycle only): manually reconstruct Build request /
 * governedEffects as the primary proof path.
 *
 * Runs only when SFIA_AUTH_REAL_COOKIE_FILE is set.
 * Never prints cookies, tokens, or raw GitHub ids.
 *
 * @vitest-environment node
 */

import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const cookieHolder: { value: string } = { value: "" };

vi.mock("next/headers", () => ({
  headers: async () => {
    const h = new Headers();
    if (cookieHolder.value) h.set("cookie", cookieHolder.value);
    return h;
  },
}));

import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  computeInspectionFingerprint,
  type BuildExecutionContractRequest,
} from "@/lib/oa/execution-contract";
import { w2PrepareExecutionContractAction } from "@/features/project-assistant/w2/actions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { W3A_PRODUCT_SCOPE } from "@/features/project-assistant/w2/w3aActualExecutionWork";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
  W2_TEST_ACTOR,
} from "../project-assistant/w2Harness";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";

const cookieFile = process.env.SFIA_AUTH_REAL_COOKIE_FILE;
const enabled = Boolean(cookieFile && existsSync(cookieFile));

function redactedActor(actorId: string): string {
  return actorId.replace(
    /actor:github:\d+/,
    "actor:github:<REDACTED_NUMERIC_ID>",
  );
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

/** Wall-clock nowIso so Auth S1 TTL is valid against MemoryAuthorityResolver.verify. */
function bootProductRuntimeForAuthReal(productDbPath: string, idPrefix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: new Date().toISOString(),
    idSource: new SeededIdSource(idPrefix),
    auditMode: "noop",
    productDbPath,
  });
}

describe.skipIf(!enabled)(
  "AUTH REAL — live session through product W2 prepare → Auth S1 → Build/Validate",
  () => {
    beforeEach(() => {
      process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    });

    afterEach(() => {
      cookieHolder.value = "";
      cleanupW2TempDirs();
      resetRuntimeApplicationServiceForTests();
    });

    it("P01–P15 product prepare path with REAL authenticatedPilote", async () => {
      const cookie = readFileSync(cookieFile!, "utf8").trim();
      expect(cookie.length).toBeGreaterThan(0);
      expect(cookie.toLowerCase()).toContain("better-auth.session");
      cookieHolder.value = cookie;

      // P01–P04 — REAL session → Pilote
      const headers = new Headers({ cookie });
      const pilote = await resolveCurrentAuthenticatedPilote({ headers });
      expect(pilote.ok).toBe(true);
      if (!pilote.ok) return;

      expect(pilote.betterAuthUserId).not.toBe(pilote.githubUserId);
      expect(/^\d+$/.test(pilote.githubUserId)).toBe(true);
      expect(pilote.actor.actorId.startsWith("actor:github:")).toBe(true);
      expect(redactedActor(pilote.actor.actorId)).toBe(
        "actor:github:<REDACTED_NUMERIC_ID>",
      );
      expect(pilote.actor.role).toBe("decision_maker");
      expect(pilote.actor.authorityLevel).toBe("none");
      expect(
        createHash("sha256").update(pilote.githubUserId).digest("hex").length,
      ).toBe(64);

      // Login alone cannot issue S1
      const runtime = bootProductRuntimeForAuthReal(
        tempProductDbPath("auth-real-product.sqlite"),
        "authreal",
      );
      const oa = runtime.oa!;
      const loginOnly = issueS1AuthorityEvidence({
        pilote,
        authorityResolver: oa.authorityResolver,
        issuedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      });
      expect(loginOnly.ok).toBe(false);

      // Seed Project / Decision / trajectory via existing product helpers
      const seeded = await seedQualifiedProject(runtime, { suffix: "authreal" });
      const qualification = await resolveW2QualificationInputs({
        oa,
        projectId: seeded.projectId,
      });
      expect(qualification.ok).toBe(true);
      if (!qualification.ok) return;

      const proposed = await proposeTrajectoryOptions({
        oa,
        projectId: seeded.projectId,
        ...qualification.qualification.inputs,
        packagePin: qualification.qualification.packagePin,
        objective: qualification.qualification.objective,
        projectTitle: qualification.qualification.projectTitle,
      });
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;

      const decided = await decideTrajectory({
        oa,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        options: proposed.options,
        recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
        selectedOptionRef: GOVERNED_OPTION_REF,
        trajectoryId: proposed.proposedTrajectory.trajectoryId,
        candidateVersion: proposed.proposedTrajectory.version,
        forceLocalAuthority: true, // decision seeding only — prepare path must NOT use forceLocal
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;

      const decisionId = decided.decision.decisionId;

      // P05–P14 — production server action (resolves Pilote from headers + prepare)
      const prepared = await w2PrepareExecutionContractAction({
        projectId: seeded.projectId,
        decisionId,
        qualifiedOperationKind: "read",
        // Hostile client claims — must be ignored by action
        canActAsMorris: true,
        claimedAuthorityLevel: "N3",
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) {
        throw new Error(`product prepare failed: ${prepared.code}`);
      }

      expect(prepared.f3SemanticOverwrite).toBe(false);
      expect(prepared.executionPerformed).toBe(false);
      expect(prepared.contract.requiredAuthority).toBe("N1");
      expect(prepared.contract.action).toBe("product:read");
      expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.READ);
      expect(prepared.contract.status).toBe("validated");

      // P07 / P09–P12 — Auth S1 branch taken (not LOCAL_PILOTE).
      // Durable ExecutionContract does not persist actor/evidenceId; prove via
      // the resolver evidence issued by prepare + Build/Validate success.
      const evidenceId = `evd:w3a-auth-s1:${decisionId}`;
      const evidence = oa.authorityResolver.getEvidence(evidenceId);
      expect(evidence).not.toBeNull();
      if (!evidence) return;
      expect(evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
      expect(evidence.level).toBe("N1");
      expect(evidence.canActAsMorris).toBe(false);
      expect(evidence.actorId).toBe(pilote.actor.actorId);
      expect(evidence.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
      // No local-pilote evidence id prefix for this prepare
      expect(
        oa.authorityResolver.getEvidence(`evd:w3a-prep:${decisionId}`),
      ).toBeNull();

      const stored = await oa.executionContractServices.getExecutionContract.execute(
        {
          executionContractId: prepared.contract.executionContractId,
        },
      );
      expect(stored.ok).toBe(true);
      if (!stored.ok) return;
      // P13/P14 — product Build+Validate already completed inside prepare
      expect(stored.contract.status).toBe("validated");
      expect(stored.contract.action).toBe("product:read");
      expect(stored.contract.requiredAuthority).toBe("N1");

      // P11 — fingerprint equals evidence.scope from exact product Build material
      const buildSemantic: Parameters<typeof computeInspectionFingerprint>[0] = {
        executionContractId: stored.contract.executionContractId,
        projectId: stored.contract.projectId,
        cycleInstanceId: stored.contract.cycleInstanceId,
        decisionRefs: stored.contract.decisionRefs,
        doctrinePackageRef: stored.contract.doctrinePackageRef,
        action: stored.contract.action,
        target: stored.contract.target,
        scope: stored.contract.scope,
        inputs: stored.contract.inputs,
        expectedOutputs: stored.contract.expectedOutputs,
        requiredCapabilities: [...stored.contract.requiredCapabilities],
        requiredAuthority: stored.contract.requiredAuthority,
        constraints: [...stored.contract.constraints],
        stopConditions: [...stored.contract.stopConditions],
        evidenceRequirements: [...stored.contract.evidenceRequirements],
        reversibility: stored.contract.reversibility,
        executionWindowClass: stored.contract.executionWindowClass,
        idempotencyKey: stored.contract.idempotencyKey,
        adapterExportRef: stored.contract.adapterExportRef,
      };
      expect(evidence.scope).toBe(
        computeInspectionFingerprint(buildSemantic),
      );
      // Cross-check product DTO fingerprint when present
      if (prepared.contract.semanticFingerprint) {
        expect(prepared.contract.semanticFingerprint).toBe(
          computeInspectionFingerprint(buildSemantic),
        );
      }

      // P15 — same evidence, hostile semantic variation DENY
      const hostileReq: BuildExecutionContractRequest = {
        executionContractId: "xct:auth-real-product-hostile",
        projectId: stored.contract.projectId,
        cycleInstanceId: stored.contract.cycleInstanceId ?? undefined,
        decisionRefs: [...(stored.contract.decisionRefs ?? [])],
        doctrinePackageRef: stored.contract.doctrinePackageRef,
        action: stored.contract.action,
        target: stored.contract.target,
        scope: `${stored.contract.scope}::HOSTILE`,
        inputs: stored.contract.inputs,
        expectedOutputs: [...(stored.contract.expectedOutputs ?? [])],
        requiredCapabilities: [...stored.contract.requiredCapabilities],
        requiredAuthority: stored.contract.requiredAuthority,
        constraints: [...stored.contract.constraints],
        stopConditions: [...stored.contract.stopConditions],
        evidenceRequirements: [...stored.contract.evidenceRequirements],
        reversibility: stored.contract.reversibility,
        executionWindowClass: stored.contract.executionWindowClass,
        idempotencyKey: "idem:auth-real-product-hostile",
        adapterExportRef: stored.contract.adapterExportRef,
        actor: pilote.actor,
        authorityEvidenceId: evidenceId,
      };
      const hostile =
        await oa.executionContractServices.buildExecutionContract.execute(
          hostileReq,
        );
      expect(hostile.ok).toBe(false);

      // Context sanity — product F2 context path still loadable
      const context = await currentF2Context(runtime, seeded.projectId);
      expect(context.lpsVersion).toBeGreaterThan(0);
      void W2_TEST_ACTOR;
    });
  },
);
```

Note: TS fix this cycle — `decisionRefs: [...(stored.contract.decisionRefs ?? [])]` for `BuildExecutionContractRequest.decisionRefs: string[]`.

Prior Auth foundation files remain dirty candidate (unchanged this cycle except wiring/test above); full bodies in prior deterministic / REAL boundary handoffs.

## Q. Regression results
- Targeted REAL product-path (cookie gated ON): **1/1 PASS**
- Auth targeted (cookie gated OFF): **103 passed / 1 skipped** (REAL gated) — same baseline
- Decision + ExecutionContract: **143/143 PASS**
- W3-A governed execute: **24/24 PASS**
- Full Vitest: **2741 passed / 135 skipped** (REAL gated skip in suite without cookie env)
- tsc --noEmit: **PASS**
- lint: **PASS**
- build: **PASS**
- git diff --check: **PASS**
- Count delta vs handoff d8000206: none intentional (same totals; REAL adapted in place)

## R. Secret safety
No secrets/cookies/tokens/raw GitHub ids in pack. `.env.local` untracked ignored mode 600. Cookie proof temp wiped after publish.

## S. Product Git actions
commit = 0 · push = 0 · PR = 0 · merge = 0 · staged remains 0

## T. MW6 fingerprint
- BEFORE = `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9`
- AFTER  = `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9`
- MATCH = True · WRITES = 0 · branch `delivery/sfia-studio-nora-mw6-external-source-intelligence` · HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`

## U. Debt / reserves
- W2 confirm/authorize/execute still LOCAL_PILOTE (beyond prepare) — residual multi-user migration
- Logout UI on ProductShell still reserve (API sign-out previously proven)
- Durable ExecutionContract does not persist actor/authorityEvidenceId — authority proven via resolver evidence + validated status
- END-TO-END REAL product execution NOT claimed
- MW6↔Auth binding NOT STARTED

## V. Claims allowed / forbidden
**Allowed:**
- AUTH REAL BOUNDARY PROVEN
- BOUNDED N1 PRODUCT AUTHORITY INTEGRATION PROVEN
- OPTION A product prepare wiring exercised with REAL authenticatedPilote

**Forbidden:**
- END-TO-END REAL PROVEN
- production-ready Auth
- W2 confirm/authorize/execute fully migrated
- N2/N3 proven
- autonomous governed execution proven
- MW6 bound / authorized / REAL
- Cognitive Completion proven
- runtime v3 ADOPTED

## W. Unique verdict
# READY FOR CHATGPT AUTH REAL FINAL RE-REVIEW — AUTH REAL BOUNDARY PROVEN / BOUNDED N1 PRODUCT AUTHORITY INTEGRATION PROVEN
