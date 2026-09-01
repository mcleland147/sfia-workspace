/** @vitest-environment node */
/**
 * MW1-S03-CORR-01 — Deterministic E2E via RuntimeOaStack-composed materializer.
 *
 * Decisive path:
 * getRuntimeApplicationService → wireOaStack → oa.materializationServices
 * → ProductSqliteSession / Decision / Evidence / LPS / oa_audit_events
 *
 * Forbidden decisive setup: createMaterializeFromMemoryB / attachMaterializer /
 * new SqliteProjectAuditJournal solely to compose a stronger path.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  SqliteProductStore,
  SqliteProjectAuditJournal,
  type MaterializationRequest,
  type RuntimeStateTransition,
} from "@/lib/oa/project";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  contentHash,
  extractItemText,
  loadSessionRows,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { FakeEvidencePayloadAdapter } from "@/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const DIGEST_A =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest;

const ACTOR = {
  actorId: "actor:studio-system",
  role: "system" as const,
  authorityLevel: "none" as const,
};

const PILOTE = {
  actorId: "actor:pilote",
  role: "decision_maker" as const,
  displayName: "Pilote",
  authorityLevel: "N2" as const,
};

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function structuralScopeTarget(currentScope: string, marker: string): string {
  const parsed = JSON.parse(currentScope) as {
    schemaVersion: string;
    shortReference?: string;
    perceivedCriticality: string;
    constraints: string[];
  };
  return JSON.stringify({
    ...parsed,
    constraints: [...parsed.constraints, `STRUCTURAL:${marker}`],
  });
}

function listMaterializationAudit(runtime: RuntimeApplicationService) {
  const store = runtime.oa!.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    throw new Error("expected SqliteProductStore");
  }
  // Read-only inspection of durable oa_audit_events — does not compose capability.
  return new SqliteProjectAuditJournal(store)
    .listAll()
    .filter(
      (e) =>
        e.event === "oa.memory.materialization.accepted" ||
        e.event === "oa.memory.materialization.rejected",
    );
}

async function bootProduct(dir: string) {
  const productDbPath = path.join(dir, "oa-product.sqlite");
  const sessionDbPath = path.join(dir, "nora-session.sqlite");
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    productDbPath,
    auditMode: "noop",
  });
  expect(runtime.oa).not.toBeNull();
  if (!runtime.oa) throw new Error("oa missing");
  expect(runtime.oa.materializationServices.materializeFromMemoryB).toBeTruthy();

  const created = await runtime.createProject({
    name: "S03 CORR Materialization E2E",
    objective: "MW1-S03-CORR-01 runtime composition",
    context: "Deterministic materialization proofs",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    shortReference: "S03CORR",
    idempotencyKey: `s03-corr-e2e-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject failed");

  const projectId = created.project.projectId;
  const currentLps =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  expect(currentLps.ok).toBe(true);
  if (!currentLps.ok) throw new Error("current LPS missing");

  return {
    runtime,
    oa: runtime.oa,
    /** Decisive materializer — MUST come from runtime.oa */
    materializer: runtime.oa.materializationServices.materializeFromMemoryB,
    productDbPath,
    sessionDbPath,
    projectId,
    lpsId: currentLps.livingProjectState.lpsVersionId,
    lpsVersion: currentLps.livingProjectState.version,
    scope: currentLps.livingProjectState.scope ?? "",
  };
}

async function seedRawMemoryB(input: {
  projectId: string;
  sessionDbPath: string;
  text: string;
  sessionKey?: string;
}) {
  const sessionKey = input.sessionKey ?? "f1-default";
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath: input.sessionDbPath,
    sessionKey,
  });
  await session.addItems([userTextItem(input.text)]);
  const loaded = await loadSessionRows(session);
  const row = loaded.conversation[loaded.conversation.length - 1]!;
  const hash = contentHash(extractItemText(row.item));
  session.close();
  return { sessionKey, seq: row.seq, contentHash: hash };
}

function class2Transition(
  ctx: Awaited<ReturnType<typeof bootProduct>>,
  nextStep: string,
  overrides?: Partial<RuntimeStateTransition>,
): RuntimeStateTransition {
  return {
    kind: "set_next_step",
    projectId: ctx.projectId,
    fromLpsVersion: ctx.lpsVersion,
    targetKind: "nextStep",
    nextStep,
    ...overrides,
  };
}

function baseRequest(
  ctx: Awaited<ReturnType<typeof bootProduct>>,
  source: { sessionKey: string; seq: number; contentHash: string },
  overrides: Partial<MaterializationRequest> &
    Pick<
      MaterializationRequest,
      "materializationClass" | "basis" | "target"
    >,
): MaterializationRequest {
  return {
    projectId: ctx.projectId,
    memoryBSource: {
      kind: "raw",
      sessionKey: source.sessionKey,
      seq: source.seq,
      contentHash: source.contentHash,
    },
    expectedLpsVersion: ctx.lpsVersion,
    correlationId: `cor:s03-corr-${Date.now()}`,
    actor: ACTOR,
    sessionDbPath: ctx.sessionDbPath,
    ...overrides,
  };
}

async function registerAndVerifyEvidence(
  oa: NonNullable<Awaited<ReturnType<typeof bootProduct>>["oa"]>,
  projectId: string,
  evidenceId: string,
) {
  const reg = await oa.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    idempotencyKey: `idem:${evidenceId}`,
    actor: ACTOR,
    type: "artifact",
    source: "s03-corr-fixture",
    sourceKind: "external",
    bindings: { projectId },
    classification: "internal",
    storageMode: "internal_payload_ref",
    location: `refs/evidence/${evidenceId}`,
    digest: DIGEST_A,
    verifiablePayload: true,
  });
  expect(reg.ok).toBe(true);
  if (!reg.ok) throw new Error("registerEvidence failed");
  const payload = oa.evidenceReviewServices.payload as FakeEvidencePayloadAdapter;
  payload.setScript(evidenceId, {
    availability: "available",
    digest: DIGEST_A,
  });
  const verified = await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
    evidenceId,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(verified.ok).toBe(true);
  if (!verified.ok) throw new Error("verify failed");
  return verified.evidence;
}

async function recordPiloteDecision(input: {
  oa: NonNullable<Awaited<ReturnType<typeof bootProduct>>["oa"]>;
  projectId: string;
  decisionId: string;
  subject: string;
  approvedScope: string;
  authority?: "delegated" | "morris" | "system_non_structuring";
  actor?: typeof PILOTE | { actorId: string; role: string; authorityLevel: string };
  nonStructuring?: boolean;
}) {
  const authority = input.authority ?? "delegated";
  const actor = input.actor ?? PILOTE;
  if (authority === "delegated" || authority === "morris") {
    input.oa.authorityResolver.register({
      evidenceId: `evd:auth-${input.decisionId}`,
      actorId: actor.actorId,
      level: authority === "morris" ? "N3" : "N2",
      scope: input.subject,
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
      ...(authority === "morris" ? { canActAsMorris: true as const } : {}),
    });
  }
  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept scope change" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: "opt:accept",
    actor: actor as typeof PILOTE,
    authority,
    reversible: true,
    authorityEvidenceId:
      authority === "system_non_structuring"
        ? undefined
        : `evd:auth-${input.decisionId}`,
    scope: input.subject,
    nonStructuring: input.nonStructuring,
    decisionBasis: {
      sourceType: "proposal",
      sourceRef: `prop:${input.decisionId}`,
      sourceDigest: "a".repeat(64),
      projectId: input.projectId,
      proposalContext: {
        lpsId: "lps:corr",
        lpsVersion: 1,
      },
      executionBasis: {
        scope: input.approvedScope,
        requestedOperation: "structural-scope-update",
      },
    },
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) throw new Error(`recordHumanDecision failed: ${JSON.stringify(recorded)}`);
  return recorded.decision;
}

describe("MW1-S03-CORR-02 — Runtime-composed never-silent materialization", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  });

  it("E2E-RUNTIME-00 — no basis fails closed via runtime.oa materializer", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e00-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Silent promote next step",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: null,
        target: { kind: "nextStep", nextStep: "hijack" },
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) => e.event === "oa.memory.materialization.rejected",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
  });

  it("E2E-RUNTIME-01 — Class1 verified Evidence via runtime composition", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e01-"));
    const evidenceId = `ev:s03-corr-c1-${Date.now()}`;
    await registerAndVerifyEvidence(ctx.oa, ctx.projectId, evidenceId);
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: `CI passed for ${evidenceId}`,
    });

    const accepted = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 1,
        basis: { kind: "verified_fact_evidence", referenceId: evidenceId },
        target: { kind: "evidenceIds", evidenceId },
      }),
    );
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    resetRuntimeApplicationServiceForTests();
    const remounted = getRuntimeApplicationService({
      productDbPath: ctx.productDbPath,
      auditMode: "noop",
    });
    const remLps =
      await remounted.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId: ctx.projectId,
      });
    expect(remLps.ok).toBe(true);
    if (!remLps.ok) return;
    expect(remLps.livingProjectState.evidenceIds).toContain(evidenceId);
    expect(
      listMaterializationAudit(remounted).some(
        (e) => e.event === "oa.memory.materialization.accepted",
      ),
    ).toBe(true);
  });

  it("E2E-RUNTIME-02 — Class2 concrete transition accepted; naked label rejected", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e02-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Next: draft weekly status",
    });

    // NEG-C2-01 naked label
    const naked = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: { kind: "valid_runtime_state_transition" },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(naked.ok).toBe(false);
    if (!naked.ok) {
      expect(naked.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }

    // NEG-C2-02 unresolved policy
    const policy = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: { kind: "accepted_materialization_policy" },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.detailCode).toBe("MATERIALIZATION_POLICY_UNRESOLVED");
    }

    // POS-C2-01 concrete transition
    const ok = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "draft-weekly-status"),
        },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.nextStep).toBe("draft-weekly-status");
    expect(after.livingProjectState.decisionIds ?? []).toHaveLength(0);

    // NEG Class2 structural
    const structural = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "x", {
            fromLpsVersion: after.livingProjectState.version,
          }),
        },
        target: { kind: "scope", scope: "hijack" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(structural.ok).toBe(false);
    if (!structural.ok) {
      expect(structural.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }

    // NEG-C2-03 wrong project
    const wrongProj = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "other", {
            projectId: "prj:other",
            fromLpsVersion: after.livingProjectState.version,
          }),
        },
        target: { kind: "nextStep", nextStep: "other" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(wrongProj.ok).toBe(false);
    if (!wrongProj.ok) expect(wrongProj.detailCode).toBe("CROSS_PROJECT_BASIS");

    // NEG-C2-04 stale LPS in transition
    const staleTrans = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "stale-t", {
            fromLpsVersion: 1,
          }),
        },
        target: { kind: "nextStep", nextStep: "stale-t" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(staleTrans.ok).toBe(false);
    if (!staleTrans.ok) expect(staleTrans.detailCode).toBe("LPS_VERSION_CONFLICT");

    // NEG-C2-06 unsupported operation claim
    const badOp = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: {
            ...class2Transition(ctx, "bad", {
              fromLpsVersion: after.livingProjectState.version,
            }),
            kind: "set_scope" as unknown as "set_next_step",
          },
        },
        target: { kind: "nextStep", nextStep: "bad" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(badOp.ok).toBe(false);
    if (!badOp.ok) {
      expect(badOp.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }
  });

  it("E2E-RUNTIME-03 — Class3 HD target binding + Pilote≠Morris", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e03-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "I approve Phase 2 scope",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 included");
    const unrelatedScope = structuralScopeTarget(ctx.scope, "UNRELATED");

    // A no HD
    const noHd = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: null,
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(noHd.ok).toBe(false);
    if (!noHd.ok) expect(noHd.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");

    // B forged
    const forged = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: "dec:model-said-approved",
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(forged.ok).toBe(false);
    if (!forged.ok) expect(forged.detailCode).toBe("HUMAN_DECISION_INVALID");

    // C unrelated HD
    const unrelatedId = `dec:unrelated-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: unrelatedId,
      subject: "subj:unrelated",
      approvedScope: unrelatedScope,
    });
    const unrelated = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: unrelatedId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(unrelated.ok).toBe(false);
    if (!unrelated.ok) {
      expect(unrelated.detailCode).toBe("HUMAN_DECISION_TARGET_MISMATCH");
    }

    // D authority=morris rejected
    const morrisId = `dec:morris-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: morrisId,
      subject: "subj:morris-gate",
      approvedScope: nextScope,
      authority: "morris",
      actor: {
        actorId: "actor:morris-operator",
        role: "decision_maker",
        authorityLevel: "N3",
      },
    });
    const morris = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: morrisId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(morris.ok).toBe(false);
    if (!morris.ok) {
      expect(morris.detailCode).toBe("HUMAN_DECISION_AUTHORITY_INVALID");
    }

    // system_non_structuring rejected for structural Class 3
    const sysId = `dec:sys-${Date.now()}`;
    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${sysId}`,
      actorId: "actor:system",
      level: "N1",
      scope: "subj:sys-ns",
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const sys = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId: sysId,
      projectId: ctx.projectId,
      subject: "subj:sys-ns",
      options: [
        { optionId: "opt:a", label: "A" },
        { optionId: "opt:b", label: "B" },
      ],
      selectedOptionId: "opt:a",
      actor: {
        actorId: "actor:system",
        role: "system",
        authorityLevel: "none",
      },
      authority: "system_non_structuring",
      reversible: true,
      nonStructuring: true,
      authorityEvidenceId: `evd:auth-${sysId}`,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${sysId}`,
        sourceDigest: "b".repeat(64),
        projectId: ctx.projectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        executionBasis: { scope: nextScope },
      },
    });
    expect(sys.ok).toBe(true);
    const sysMat = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: sysId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(sysMat.ok).toBe(false);
    if (!sysMat.ok) {
      expect(sysMat.detailCode).toBe("HUMAN_DECISION_AUTHORITY_INVALID");
    }

    // E matching Pilote HD — HD.scope (subject) intentionally ≠ target.scope;
    // authorization comes only from decisionBasis.executionBasis.scope.
    const matchId = `dec:match-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: matchId,
      subject: "subj:scope-phase2",
      approvedScope: nextScope,
    });
    const matchedHd = await ctx.oa.decisionServices.getHumanDecision.execute({
      decisionId: matchId,
    });
    expect(matchedHd.ok).toBe(true);
    if (matchedHd.ok) {
      expect(matchedHd.decision.scope).toBe("subj:scope-phase2");
      expect(matchedHd.decision.scope).not.toBe(nextScope);
      expect(matchedHd.decision.decisionBasis?.executionBasis?.scope).toBe(
        nextScope,
      );
    }
    const accepted = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: matchId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    resetRuntimeApplicationServiceForTests();
    const remounted = getRuntimeApplicationService({
      productDbPath: ctx.productDbPath,
      auditMode: "noop",
    });
    const rem = await remounted.getProject(ctx.projectId);
    expect(rem.ok).toBe(true);
    const remLps =
      await remounted.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId: ctx.projectId,
      });
    expect(remLps.ok).toBe(true);
    if (!remLps.ok) return;
    expect(remLps.livingProjectState.scope).toBe(nextScope);
    expect(remLps.livingProjectState.decisionIds).toContain(matchId);
  });

  it("NEG-C3-18 — hd.scope == target without executionBasis.scope fails closed", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg18-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Approve via generic HD.scope only",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 via-hd-scope");
    const decisionId = `dec:neg18-${Date.now()}`;

    // Authority evidence scoped to the structural string that becomes HD.scope.
    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${decisionId}`,
      actorId: PILOTE.actorId,
      level: "N2",
      scope: nextScope,
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId,
      projectId: ctx.projectId,
      subject: "subj:neg18",
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: PILOTE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: `evd:auth-${decisionId}`,
      // Generic decision/authority scope equals requested LPS target…
      scope: nextScope,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${decisionId}`,
        sourceDigest: "c".repeat(64),
        projectId: ctx.projectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        // …but NO explicit executionBasis.scope.
        executionBasis: {
          objective: "no-structural-execution-scope",
          requestedOperation: "note-only",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.scope).toBe(nextScope);
    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBeUndefined();

    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: decisionId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.detailCode).toBe("HUMAN_DECISION_TARGET_MISMATCH");
    }

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) =>
        e.event === "oa.memory.materialization.rejected" &&
        "detailCode" in e &&
        e.detailCode === "HUMAN_DECISION_TARGET_MISMATCH",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
  });

  it("NEG-C3-19 — cross-project DecisionBasis fails closed", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg19-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Cross-project DecisionBasis attempt",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 xproj-basis");
    const decisionId = `dec:neg19-${Date.now()}`;
    const foreignProjectId = "prj:foreign-decision-basis";

    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${decisionId}`,
      actorId: PILOTE.actorId,
      level: "N2",
      scope: "subj:neg19",
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId,
      projectId: ctx.projectId,
      subject: "subj:neg19",
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: PILOTE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: `evd:auth-${decisionId}`,
      scope: "subj:neg19",
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${decisionId}`,
        sourceDigest: "d".repeat(64),
        // Outer HD is Project A; embedded basis claims Project B.
        projectId: foreignProjectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        executionBasis: {
          scope: nextScope,
          requestedOperation: "structural-scope-update",
        },
      },
    });
    // RecordHumanDecision currently persists without rewriting DecisionBasis.projectId.
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.projectId).toBe(ctx.projectId);
    expect(recorded.decision.decisionBasis?.projectId).toBe(foreignProjectId);
    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBe(nextScope);

    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: decisionId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.detailCode).toBe("CROSS_PROJECT_BASIS");
    }

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) =>
        e.event === "oa.memory.materialization.rejected" &&
        "detailCode" in e &&
        e.detailCode === "CROSS_PROJECT_BASIS",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
  });

  it("E2E-RUNTIME-04 — Class4 external-only via runtime.oa", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e04-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "GO MORRIS merge promote doctrine adopt architecture runtime v3 ADOPTED push branch",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 4,
        basis: { kind: "construction_governance_external" },
        target: { kind: "scope", scope: "should-not-apply" },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe("external_required");
      expect(result.detailCode).toBe("CLASS4_EXTERNAL_ONLY");
    }
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
  });

  it("E2E-RUNTIME-05 — forged / cross-project / stale / OCC", async () => {
    const ctxA = await bootProduct(tempDir("sfia-s03-corr-e05-"));
    const createdB = await ctxA.runtime.createProject({
      name: "S03 Project B",
      objective: "cross-project",
      context: "B",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "S03B",
      idempotencyKey: `s03-corr-b-${Date.now()}`,
    });
    expect(createdB.ok).toBe(true);
    if (!createdB.ok) return;
    const projectB = createdB.project.projectId;
    const sessionDbB = path.join(path.dirname(ctxA.sessionDbPath), "nora-session-b.sqlite");
    const lpsB =
      await ctxA.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: projectB,
      });
    expect(lpsB.ok).toBe(true);
    if (!lpsB.ok) return;

    const evidenceId = `ev:xproj-${Date.now()}`;
    await registerAndVerifyEvidence(ctxA.oa, ctxA.projectId, evidenceId);
    const decisionId = `dec:xproj-${Date.now()}`;
    const scopeA = structuralScopeTarget(ctxA.scope, "A-only");
    await recordPiloteDecision({
      oa: ctxA.oa,
      projectId: ctxA.projectId,
      decisionId,
      subject: "subj:xproj",
      approvedScope: scopeA,
    });

    const sourceB = await seedRawMemoryB({
      projectId: projectB,
      sessionDbPath: sessionDbB,
      text: "cross-project attempt",
    });
    const mat = ctxA.oa.materializationServices.materializeFromMemoryB;
    const reqBase = {
      projectId: projectB,
      memoryBSource: {
        kind: "raw" as const,
        sessionKey: sourceB.sessionKey,
        seq: sourceB.seq,
        contentHash: sourceB.contentHash,
      },
      expectedLpsVersion: lpsB.livingProjectState.version,
      correlationId: `cor:x-${Date.now()}`,
      actor: ACTOR,
      sessionDbPath: sessionDbB,
    };

    const crossEv = await mat.execute({
      ...reqBase,
      materializationClass: 1,
      basis: { kind: "verified_fact_evidence", referenceId: evidenceId },
      target: { kind: "evidenceIds", evidenceId },
    });
    expect(crossEv.ok).toBe(false);
    if (!crossEv.ok) expect(crossEv.detailCode).toBe("CROSS_PROJECT_BASIS");

    const crossHd = await mat.execute({
      ...reqBase,
      materializationClass: 3,
      basis: { kind: "pilote_human_decision", referenceId: decisionId },
      target: {
        kind: "scope",
        scope: structuralScopeTarget(lpsB.livingProjectState.scope ?? "{}", "stolen"),
      },
    });
    expect(crossHd.ok).toBe(false);
    if (!crossHd.ok) expect(crossHd.detailCode).toBe("CROSS_PROJECT_BASIS");

    const forgedB = await mat.execute({
      ...reqBase,
      memoryBSource: {
        ...reqBase.memoryBSource,
        contentHash: "deadbeef".repeat(8),
      },
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: projectB,
          fromLpsVersion: lpsB.livingProjectState.version,
          targetKind: "nextStep",
          nextStep: "x",
        },
      },
      target: { kind: "nextStep", nextStep: "x" },
    });
    expect(forgedB.ok).toBe(false);
    if (!forgedB.ok) expect(forgedB.detailCode).toBe("MEMORY_B_SOURCE_MISMATCH");

    const occ = await mat.execute({
      ...reqBase,
      expectedLpsVersion: lpsB.livingProjectState.version + 99,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: projectB,
          fromLpsVersion: lpsB.livingProjectState.version + 99,
          targetKind: "nextStep",
          nextStep: "occ",
        },
      },
      target: { kind: "nextStep", nextStep: "occ" },
    });
    expect(occ.ok).toBe(false);
    if (!occ.ok) expect(occ.detailCode).toBe("LPS_VERSION_CONFLICT");

    const after =
      await ctxA.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: projectB,
      });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(lpsB.livingProjectState.version);
  });

  it("E2E-RUNTIME-06 — contradictory B without basis cannot override C", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e06-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Contradiction ENTIRELY DIFFERENT",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const silent = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: null,
        target: {
          kind: "scope",
          scope: structuralScopeTarget(ctx.scope, "ENTIRELY DIFFERENT"),
        },
      }),
    );
    expect(silent.ok).toBe(false);
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
  });

  it("compacted Memory B — current OK with Class2 transition; stale rejected", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-compact-"));
    const session = new ProductSqliteSession({
      projectId: ctx.projectId,
      dbPath: ctx.sessionDbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("Premise A"),
      assistantTextItem("Ack A"),
      userTextItem("Premise B next action propose status note"),
      assistantTextItem("Ack B"),
      userTextItem("Premise C"),
      assistantTextItem("Ack C"),
    ]);
    const before = await loadSessionRows(session);
    const targetRow = before.conversation[2]!;
    await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: ctx.lpsId, lpsVersion: ctx.lpsVersion },
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
      nowIso: "2026-08-31T12:00:00.000Z",
    });
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).not.toBeNull();
    const entry = loaded.compaction!.provenance.find(
      (p) => p.kind === "raw" && (p.sourceSeq ?? p.seq) === targetRow.seq,
    );
    expect(entry).toBeTruthy();
    session.close();

    const ok = await ctx.materializer.execute({
      projectId: ctx.projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition(ctx, "from-compacted-b"),
      },
      memoryBSource: {
        kind: "compacted_provenance",
        sessionKey: "f1-default",
        generation: loaded.compaction!.generation,
        sourceSeq: entry!.sourceSeq ?? entry!.seq,
        contentHash: entry!.contentHash,
      },
      target: { kind: "nextStep", nextStep: "from-compacted-b" },
      expectedLpsVersion: ctx.lpsVersion,
      correlationId: "cor:compact-ok",
      actor: ACTOR,
      sessionDbPath: ctx.sessionDbPath,
    });
    expect(ok.ok).toBe(true);

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    const stale = await ctx.materializer.execute({
      projectId: ctx.projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: ctx.projectId,
          fromLpsVersion: after.livingProjectState.version,
          targetKind: "nextStep",
          nextStep: "stale-compact",
        },
      },
      memoryBSource: {
        kind: "compacted_provenance",
        sessionKey: "f1-default",
        generation: loaded.compaction!.generation,
        sourceSeq: entry!.sourceSeq ?? entry!.seq,
        contentHash: entry!.contentHash,
      },
      target: { kind: "nextStep", nextStep: "stale-compact" },
      expectedLpsVersion: after.livingProjectState.version,
      correlationId: "cor:compact-stale",
      actor: ACTOR,
      sessionDbPath: ctx.sessionDbPath,
    });
    expect(stale.ok).toBe(false);
    if (!stale.ok) expect(stale.detailCode).toBe("MEMORY_B_SOURCE_STALE");
  });

  it("runtime composition — no attachMaterializer; materializer from oa only", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-compose-"));
    expect(ctx.materializer).toBe(
      ctx.oa.materializationServices.materializeFromMemoryB,
    );
    expect(ctx.oa.productDurablePath).toBe(true);
  });
});
