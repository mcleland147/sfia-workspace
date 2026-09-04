# SFIA STUDIO — CYCLE 8 — AUTH REAL BOUNDARY PROOF — Review Pack FULL

**Timestamp:** 2026-09-04 22:42:08 CEST / 2026-09-04T20:42:08Z
**Status:** FULL · CRITICAL · CONTENT-COMPLETE
**Unique verdict:** READY FOR CHATGPT AUTH REAL FINAL REVIEW — AUTH REAL BOUNDARY PROVEN / BOUNDED N1 AUTHORITY INTEGRATION PROVEN

---

## A. Timestamp
- 2026-09-04 22:42:08 CEST / 2026-09-04T20:42:08Z

## B. GO Morris consumed
**GO MORRIS — AUTH REAL BOUNDED PROOF** (retry after env prêt + successful human OAuth)
Plus prior: AUTH LOCAL ENV PREPARATION ONLY (credentials container).

## C. Git Truth before/after
- Worktree Auth: `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- Branch: `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD = origin/main = merge-base = `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged: 0 · conflicts: 0 · dirty Auth candidate: YES
- Product commit/push this cycle: 0
- Input handoff before: tip `400cf6d5…` (env prep) / prior REAL STOP `8bcd65d8…`

## D. Sources
Process/method cores · convergence · Auth lib · middleware · login · EC authorityHelper/fingerprint · prepare/actions · W3-A effects · Review Handoffs prior.
CKC Delivery detailed: absent → fallback v2.6 / synthetic map.

## E. Convergence
V3-F11/F12 · AUTH REAL BOUNDARY · KEEP Better Auth 1.7.2 / GitHub-only / stateless / allowlist / semantic S1 · FREEZE localSingleUserAuthority for multi-user (tests still forceLocal) · PRESERVE MW6 · Next gate after ChatGPT PASS: Morris MW6↔Auth binding.

## F. AUTH deterministic PASS carried forward
YES — plus regressions green this cycle.

## G. REAL prerequisites R0-01…08
| ID | Result |
|----|--------|
| R0-01 Existing OAuth App | YES (Morris manual) |
| R0-02 Client ID/Secret local | YES via untracked `.env.local` (non-placeholder) |
| R0-03 BETTER_AUTH_SECRET | GENERATED + present |
| R0-04 BETTER_AUTH_URL | `http://localhost:3020` |
| R0-05 Morris numeric ID allowlisted | YES (auto-resolved earlier; allowlist count=1) |
| R0-06 Port 3020 | Studio running Auth worktree + `.env.local` |
| R0-07 GitHub config mutation | NO (existing App only) |
| R0-08 No new external resources | YES · created=0 |

## H–O. REAL boundary campaign (sanitized)
| Proof | Class | Result |
|-------|-------|--------|
| Unauth `/studio` → login NO_SESSION | REAL BOUNDARY (local) | PASS (307) |
| Login GitHub-only | REAL BOUNDARY (local) | PASS |
| Real GitHub OAuth + callback | REAL BOUNDARY (external) | PASS (Morris completed; Studio `/studio` reached) |
| Better Auth session | REAL BOUNDARY | PASS (`get-session` has user+session; user.id NOT numeric GitHub id; len bucket 20-39) |
| Session↔provider binding | REAL BOUNDARY | PASS via `resolveCurrentAuthenticatedPilote` on live httpOnly cookies: github numeric id ≠ BA user id; middleware admits `/studio` only when binding+allowlist ok |
| Allowlist positive | REAL BOUNDARY | PASS (`/studio` 200 with session) |
| Allowlist negative reversible | REAL BOUNDARY | PASS → `login?error=ALLOWLIST_DENIED`; restore → `/studio` again |
| Actor authority none | REAL BOUNDARY | PASS `actor:github:<REDACTED_NUMERIC_ID>` · role decision_maker · authorityLevel none |
| Hot path no GitHub lookup | REAL BOUNDARY / code | PASS — `resolveCurrentPilote` uses cookie binding not `accountInfo`/getUserInfo; protected requests succeeded without provider network on hot path |
| Logout | REAL BOUNDARY | PASS sign-out 200; session cleared; `/studio` → `NO_SESSION` |

## P. S1-D01…10
OPTION A confirmed and wired: prepare + `w2PrepareExecutionContractAction` consume Auth S1 via existing `oa.authorityResolver` / Build path. No new API/persistence/resolver/policy engine.

## Q. Product S1 wiring
- `prepareExecutionContractFromW2Decision.ts`: if `authenticatedPilote` and not `forceLocalAuthority` → `issueS1AuthorityEvidence` + Auth actor; else LOCAL_PILOTE test path.
- `w2/actions.ts`: resolve pilote from `headers()` then pass to prepare.

## R. Bounded N1 S1 proof
Live cookie → resolve Pilote → issueS1 (read/N1) → Build PASS → hostile semantic DENY → login-only issue DENY. Source=`BETTER_AUTH_GITHUB_MULTI_USER_S1`, canActAsMorris=false, scope=fingerprint. N3/MORRIS not used.
Classification: REAL identity + local deterministic EC semantics after identity. **Not** END-TO-END REAL product execution.

## S. Deterministic vs REAL matrix
See H–O + Auth/EC suites DETERMINISTIC; OAuth/session/allowlist/logout REAL BOUNDARY.

## T. Modified content COMPLETE (this cycle delta)

### Diff — OPTION A product wiring
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

### New gated REAL session test (skipped in CI without cookie file)
```typescript
/**
 * AUTH REAL — session-bound pilote + bounded N1 S1/Build proof.
 * Runs only when SFIA_AUTH_REAL_COOKIE_FILE is set (local REAL campaign).
 * Never prints cookies, tokens, or raw GitHub ids.
 * Expects Auth env vars already present in the process (from .env.local).
 *
 * @vitest-environment node
 */

import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  computeInspectionFingerprint,
  type BuildExecutionContractRequest,
} from "@/lib/oa/execution-contract";
import {
  baseBuildRequest,
  buildStack,
  seedAcceptedDecision,
  seedProject,
  type Stack,
} from "../oa/execution-contract/helpers";

const cookieFile = process.env.SFIA_AUTH_REAL_COOKIE_FILE;
const enabled = Boolean(cookieFile && existsSync(cookieFile));

function redactedActor(actorId: string): string {
  return actorId.replace(
    /actor:github:\d+/,
    "actor:github:<REDACTED_NUMERIC_ID>",
  );
}

describe.skipIf(!enabled)("AUTH REAL boundary — live session cookie", () => {
  it("resolves authenticated Pilote (authority none) + N1 S1 through Build", async () => {
    const cookie = readFileSync(cookieFile!, "utf8").trim();
    expect(cookie.length).toBeGreaterThan(0);
    expect(cookie.toLowerCase()).toContain("better-auth.session");

    const headers = new Headers({ cookie });
    const pilote = await resolveCurrentAuthenticatedPilote({ headers });
    expect(pilote.ok).toBe(true);
    if (!pilote.ok) return;

    expect(pilote.betterAuthUserId).not.toBe(pilote.githubUserId);
    expect(/^\d+$/.test(pilote.githubUserId)).toBe(true);
    expect(/^\d+$/.test(pilote.betterAuthUserId)).toBe(false);
    expect(pilote.actor.actorId.startsWith("actor:github:")).toBe(true);
    expect(pilote.actor.role).toBe("decision_maker");
    expect(pilote.actor.authorityLevel).toBe("none");
    expect(redactedActor(pilote.actor.actorId)).toBe(
      "actor:github:<REDACTED_NUMERIC_ID>",
    );
    expect(
      createHash("sha256").update(pilote.githubUserId).digest("hex").length,
    ).toBe(64);

    const stack: Stack = buildStack();
    await seedProject(stack.projects);
    await seedAcceptedDecision(stack);

    const loginOnly = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: stack.decisions.authority,
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600_000).toISOString(),
    });
    expect(loginOnly.ok).toBe(false);

    const issuedAt = new Date(Date.now() - 60_000).toISOString();
    const expiresAt = new Date(Date.now() + 3_600_000).toISOString();

    const req: BuildExecutionContractRequest = baseBuildRequest({
      executionContractId: "xct:auth-real-n1-001",
      projectId: "prj:campus360-oa",
      action: "product:read",
      target: "tgt:auth-real-read",
      scope: "biz:auth-real-read",
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-read"],
      idempotencyKey: "idem:auth-real-n1-001",
      actor: pilote.actor,
      authorityEvidenceId: "evd:auth-real-n1-001",
    });

    const contract = {
      executionContractId: req.executionContractId,
      projectId: req.projectId,
      cycleInstanceId: req.cycleInstanceId,
      decisionRefs: req.decisionRefs,
      doctrinePackageRef: req.doctrinePackageRef,
      action: req.action,
      target: req.target,
      scope: req.scope,
      inputs: req.inputs,
      expectedOutputs: req.expectedOutputs,
      requiredCapabilities: [...req.requiredCapabilities],
      requiredAuthority: req.requiredAuthority,
      constraints: [...req.constraints],
      stopConditions: [...req.stopConditions],
      evidenceRequirements: [...req.evidenceRequirements],
      reversibility: req.reversibility,
      executionWindowClass: req.executionWindowClass,
      idempotencyKey: req.idempotencyKey,
      adapterExportRef: req.adapterExportRef,
    };

    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: stack.decisions.authority,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: req.scope,
        target: req.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:auth-real-n1-001",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.actorId).toBe(pilote.actor.actorId);
    expect(issued.evidence.scope).toBe(computeInspectionFingerprint(contract));

    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);

    const hostile = await stack.execution.buildExecutionContract.execute({
      ...req,
      executionContractId: "xct:auth-real-n1-hostile",
      scope: "biz:auth-real-HOSTILE",
      idempotencyKey: "idem:auth-real-n1-hostile",
    });
    expect(hostile.ok).toBe(false);

    expect(issued.evidence.level).not.toBe("N3");
    expect(["N1"]).toContain(issued.evidence.level);
  });
});
```

Prior Auth foundation files remain dirty candidate (unchanged this cycle except wiring/test above); full bodies in prior deterministic handoffs.

## U. Tests
- Auth targeted: **103 passed / 1 skipped** (REAL gated)
- Decision+EC: **143/143 PASS**
- W3-A governed execute: **24/24 PASS**
- Full Vitest: **2741 passed / 135 skipped**
- tsc --noEmit: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS

## V. Security / secrets
No secrets/cookies/tokens in pack. `.env.local` untracked ignored mode 600. Cookie proof temp wiped.

## W. MW6
Fingerprint `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` — UNTOUCHED

## X. Debt / reserves
- W2 confirm/authorize/execute still LOCAL_PILOTE (beyond prepare) — residual multi-user migration
- `/studio` ProductShell lacks LogoutButton UI (logout proven via `/api/auth/sign-out`)
- CheckExecutionAuthorization full lifecycle after Confirm not forced for N1 (documented; Build+Validate path proven)
- MW6↔Auth binding not started

## Y. Allowed claims
- AUTH REAL BOUNDARY PROVEN
- BOUNDED N1 AUTHORITY INTEGRATION PROVEN
- OPTION A product prepare wiring present

## Z. Forbidden claims
- END-TO-END REAL PROVEN · production-ready Auth · MW6 bound · runtime v3 ADOPTED · autonomous governed execution proven

## AA. Morris gates remaining
1. ChatGPT AUTH REAL final review
2. After PASS only: **MORRIS DECISION — MW6 ↔ AUTH BINDING**
3. Later MW6 REAL

## AB. Unique verdict
# READY FOR CHATGPT AUTH REAL FINAL REVIEW — AUTH REAL BOUNDARY PROVEN / BOUNDED N1 AUTHORITY INTEGRATION PROVEN
