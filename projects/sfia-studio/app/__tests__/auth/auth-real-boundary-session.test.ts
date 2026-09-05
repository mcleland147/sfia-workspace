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
