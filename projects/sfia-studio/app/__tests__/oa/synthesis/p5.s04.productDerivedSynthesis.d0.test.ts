/**
 * P5-S04 — Product-derived Synthesis (NON-AUTHORITATIVE / NOT Truth C).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
  type ClaimEvaluation,
  type ClaimEvaluationStatus,
} from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import {
  openProductSqlite,
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M8,
  PRODUCT_SCHEMA_VERSION_M9,
  SqliteProductStore,
} from "@/lib/oa/project";
import {
  ABSENT_RECOMMENDATION_TEXT,
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  validateProductSynthesisShape,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";

const NOW = "2026-10-05T12:00:00.000Z";
const tempDirs: string[] = [];
const openStores: SqliteProductStore[] = [];

afterEach(() => {
  while (openStores.length) {
    try {
      openStores.pop()?.close();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

function tempDbPath(name = "product.sqlite"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s04-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openStore(dbPath: string): SqliteProductStore {
  const store = new SqliteProductStore(dbPath);
  openStores.push(store);
  return store;
}

function insertProject(store: SqliteProductStore, projectId: string): void {
  const payload = JSON.stringify({
    projectId,
    title: `Project ${projectId}`,
    status: "active",
  });
  store.db
    .prepare(
      `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at, updated_at)
       VALUES (?, 'active', NULL, ?, ?, ?)`,
    )
    .run(projectId, payload, NOW, NOW);
}

function makeClaimEvaluation(
  overrides: Partial<ClaimEvaluation> & {
    claimEvaluationId: string;
    status?: ClaimEvaluationStatus;
    projectId?: string;
  },
): ClaimEvaluation {
  const projectId = overrides.projectId ?? "prj:s04-a";
  const status = overrides.status ?? "pass";
  const base: ClaimEvaluation = {
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: overrides.claimEvaluationId,
    claimType: "technique",
    claimStatement:
      overrides.claimStatement ??
      "Temporary artifact produced for contract result",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: overrides.requiredEvidenceRefs ?? ["ev:s04-1"],
    reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
    reviewBundleVersion: overrides.reviewBundleVersion ?? 2,
    status,
    proposedBy: LOCAL_PILOTE_ACTOR,
    proposedAt: NOW,
    evaluatedAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${overrides.claimEvaluationId}`,
      actor: LOCAL_PILOTE_ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: `cor:${overrides.claimEvaluationId}`,
      projectId,
    },
    version: 1,
    subjectKind: "execution_contract_result",
    contractResultBindings: {
      projectId,
      cycleInstanceId: "cyc:s04-1",
      executionContractId: "xct:s04-1",
      executionContractVersion: 1,
      executionContractSemanticFingerprint: "fp:s04-contract",
      executionAttemptId: "xat:s04-1",
      reviewBundleId: overrides.reviewBundleId ?? "rb:s04-1",
      reviewBundleVersion: 2,
      evidenceRefs: ["ev:s04-1"],
    },
  };
  return { ...base, ...overrides, status };
}

function insertClaimEvaluationRow(
  store: SqliteProductStore,
  claim: ClaimEvaluation,
): void {
  const projectId = claim.contractResultBindings?.projectId ?? null;
  store.db
    .prepare(
      `INSERT INTO oa_claim_evaluations(
         claim_evaluation_id, project_id, status, idempotency_key, version,
         payload_json, created_at, updated_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      claim.claimEvaluationId,
      projectId,
      claim.status,
      claim.idempotencyKey ?? null,
      claim.version,
      JSON.stringify(claim),
      claim.proposedAt,
      claim.proposedAt,
    );
}

function tableExists(db: DatabaseSync, name: string): boolean {
  const row = db
    .prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`)
    .get(name) as { name?: string } | undefined;
  return row?.name === name;
}

describe("P5-S04 Product-derived Synthesis D0", () => {
  it("T01 — lineage requires ClaimEvaluation", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    expect(() =>
      svc.build({
        projectId: "prj:s04-a",
        // @ts-expect-error intentional missing CE
        claimEvaluation: null,
      }),
    ).toThrow(/ClaimEvaluation|LINEAGE/i);

    try {
      // @ts-expect-error intentional missing CE
      svc.build({ projectId: "prj:s04-a", claimEvaluation: undefined });
      expect.unreachable("expected throw");
    } catch (err) {
      expect(isSynthesisDomainError(err)).toBe(true);
      if (isSynthesisDomainError(err)) {
        expect(err.detailCode).toBe(
          "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
        );
      }
    }
  });

  it("T04 — canonical verdict from ClaimEvaluation via projectContractResultVerdict", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });

    const cases: Array<{
      status: ClaimEvaluationStatus;
      verdict: ProductSynthesisProjection["canonicalVerdict"];
      label: ProductSynthesisProjection["verdictLabel"];
    }> = [
      { status: "pass", verdict: "PASS", label: "atteint" },
      { status: "fail", verdict: "FAIL", label: "echec" },
      { status: "not_proven", verdict: "NOT_PROVEN", label: "non_prouve" },
      { status: "pending", verdict: "NOT_PROVEN", label: "non_prouve" },
      { status: "waived", verdict: "NOT_PROVEN", label: "non_prouve" },
    ];

    for (const c of cases) {
      const built = svc.build({
        projectId: "prj:s04-a",
        claimEvaluation: makeClaimEvaluation({
          claimEvaluationId: `clm:s04-${c.status}`,
          status: c.status,
        }),
        generatedAt: NOW,
      });
      expect(built.canonicalVerdict).toBe(c.verdict);
      expect(built.verdictLabel).toBe(c.label);
    }
  });

  it("T05 — recommendation is not invented when absent", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-rec" }),
      generatedAt: NOW,
    });
    expect(built.sections.recommendation).toBe(ABSENT_RECOMMENDATION_TEXT);
    expect(built.sourceBindings.recommendationRef).toBeNull();

    const withRec = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-rec-2",
      }),
      recommendation: {
        text: "Replanifier le prochain cycle.",
        ref: "rec:s04-1",
      },
      generatedAt: NOW,
    });
    expect(withRec.sections.recommendation).toBe(
      "Replanifier le prochain cycle.",
    );
    expect(withRec.sourceBindings.recommendationRef).toBe("rec:s04-1");
  });

  it("T06 — nine sections are non-empty honest strings", () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-sec" }),
      executionContract: {
        executionContractId: "xct:s04-1",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        cycleInstanceId: "cyc:s04-1",
      },
      attempt: {
        attemptId: "xat:s04-1",
        status: "succeeded",
        resultRef: "res:s04-1",
      },
      evidence: [{ evidenceId: "ev:s04-1", status: "verified", type: "artifact" }],
      reviewBundle: {
        reviewBundleId: "rb:s04-1",
        status: "frozen",
        completeness: "complete",
      },
      generatedAt: NOW,
    });
    const keys = [
      "summary",
      "planned",
      "done",
      "evaluation",
      "gaps",
      "impact",
      "verdict",
      "recommendation",
      "verified",
    ] as const;
    for (const key of keys) {
      expect(typeof built.sections[key]).toBe("string");
      expect(built.sections[key].trim().length).toBeGreaterThan(0);
    }
    expect(validateProductSynthesisShape(built)).toBeNull();

    const joined = Object.values(built.sections).join("\n");
    expect(joined).not.toMatch(/ClaimEvaluation/);
    expect(joined).not.toMatch(/ReviewBundle/);
    expect(joined).not.toMatch(/Statut CE/);
    expect(joined).not.toMatch(/deterministic/);
    expect(joined).not.toMatch(/non_critical/);
    expect(joined).not.toMatch(/canonical PASS/);
    expect(joined).not.toMatch(/\bclm:/);
    expect(joined).not.toMatch(/\brb:/);
    expect(joined).not.toMatch(/\bxat:/);
    expect(joined).not.toMatch(/\bev:/);
  });

  it("T07 — persistence survives reopen", async () => {
    const dbPath = tempDbPath();
    const storeA = openStore(dbPath);
    insertProject(storeA, "prj:s04-a");
    const svcA = createSqliteSynthesisServices({ productStore: storeA });
    const materialized = await svcA.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-dur" }),
      title: "Synthèse durable",
      generatedAt: NOW,
    });
    storeA.close();
    openStores.pop();

    const storeB = openStore(dbPath);
    const svcB = createSqliteSynthesisServices({ productStore: storeB });
    const restored = await svcB.repository.findById(materialized.synthesisId);
    expect(restored).not.toBeNull();
    expect(restored?.title).toBe("Synthèse durable");
    expect(restored?.authority).toBe("none");
    expect(restored?.sourceFingerprint).toBe(materialized.sourceFingerprint);
    expect(restored?.sections.summary).toMatch(/atteint|échec|non prouvé/i);
    expect(restored?.sections.summary).not.toMatch(/ClaimEvaluation|clm:/i);
  });

  it("T08 — deleteAll + rebuild; projects and ClaimEvaluations remain", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:s04-rebuild" });
    insertClaimEvaluationRow(store, ce);

    const svc = createSqliteSynthesisServices({ productStore: store });
    const first = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    expect(first.status).toBe("current");

    const rebuilt = await svc.rebuild("prj:s04-a", [
      {
        projectId: "prj:s04-a",
        claimEvaluation: ce,
        evidence: [{ evidenceId: "ev:s04-1" }],
        generatedAt: "2026-10-05T13:00:00.000Z",
      },
    ]);
    expect(rebuilt).toHaveLength(1);
    expect(rebuilt[0]?.status).toBe("current");
    expect(rebuilt[0]?.sourceFingerprint).toBe(first.sourceFingerprint);

    const projectRow = store.db
      .prepare(`SELECT project_id FROM oa_projects WHERE project_id = ?`)
      .get("prj:s04-a") as { project_id?: string } | undefined;
    expect(projectRow?.project_id).toBe("prj:s04-a");

    const ceRow = store.db
      .prepare(
        `SELECT claim_evaluation_id, status, payload_json
         FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`,
      )
      .get("clm:s04-rebuild") as
      | { claim_evaluation_id: string; status: string; payload_json: string }
      | undefined;
    expect(ceRow?.claim_evaluation_id).toBe("clm:s04-rebuild");
    expect(ceRow?.status).toBe("pass");
    expect(JSON.parse(ceRow!.payload_json).claimEvaluationId).toBe(
      "clm:s04-rebuild",
    );

    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(1);
    expect(listed[0]?.synthesisId).not.toBe(first.synthesisId);
  });

  it("T09 — idempotence for same fingerprint", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const input = {
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-idem" }),
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    };
    const a = await svc.materialize(input);
    const b = await svc.materialize({
      ...input,
      generatedAt: "2026-10-05T14:00:00.000Z",
    });
    expect(b.synthesisId).toBe(a.synthesisId);
    expect(b.sourceFingerprint).toBe(a.sourceFingerprint);
    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(1);
  });

  it("T10 — supersession on fingerprint change", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const ce = makeClaimEvaluation({ claimEvaluationId: "clm:s04-super" });
    const first = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }],
      generatedAt: NOW,
    });
    const second = await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: ce,
      evidence: [{ evidenceId: "ev:s04-1" }, { evidenceId: "ev:s04-2" }],
      generatedAt: "2026-10-05T15:00:00.000Z",
    });
    expect(second.synthesisId).not.toBe(first.synthesisId);
    expect(second.sourceFingerprint).not.toBe(first.sourceFingerprint);
    expect(second.supersedes).toBe(first.synthesisId);
    expect(second.status).toBe("current");
    expect(second.version).toBe(first.version + 1);

    const old = await svc.repository.findById(first.synthesisId);
    expect(old?.status).toBe("superseded");
    const listed = await svc.repository.listByProject("prj:s04-a");
    expect(listed).toHaveLength(2);
  });

  it("T11 — cross-project isolation", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    insertProject(store, "prj:s04-b");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-a",
        projectId: "prj:s04-a",
      }),
      generatedAt: NOW,
    });
    await svc.materialize({
      projectId: "prj:s04-b",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-b",
        projectId: "prj:s04-b",
      }),
      generatedAt: NOW,
    });
    const a = await svc.repository.listByProject("prj:s04-a");
    const b = await svc.repository.listByProject("prj:s04-b");
    expect(a).toHaveLength(1);
    expect(b).toHaveLength(1);
    expect(a[0]?.projectId).toBe("prj:s04-a");
    expect(b[0]?.projectId).toBe("prj:s04-b");
    expect(a[0]?.synthesisId).not.toBe(b[0]?.synthesisId);
  });

  it("T12 — search positive match within project", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-search",
        claimStatement: "Artifact temporaire campus360",
      }),
      title: "Synthèse campus360 unique-token-alpha",
      generatedAt: NOW,
    });
    const hits = await svc.search("prj:s04-a", "unique-token-alpha");
    expect(hits.length).toBeGreaterThanOrEqual(1);
    expect(hits[0]?.title).toContain("unique-token-alpha");
  });

  it("T13 — search negative / no cross-project leakage", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    insertProject(store, "prj:s04-b");
    const svc = createSqliteSynthesisServices({ productStore: store });
    await svc.materialize({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({
        claimEvaluationId: "clm:s04-neg-a",
        projectId: "prj:s04-a",
      }),
      title: "SecretTokenOnlyInA",
      generatedAt: NOW,
    });
    const miss = await svc.search("prj:s04-a", "does-not-exist-zzz");
    expect(miss).toHaveLength(0);
    const leaked = await svc.search("prj:s04-b", "SecretTokenOnlyInA");
    expect(leaked).toHaveLength(0);
  });

  it("T16 — authority remains none and cannot be mutated", async () => {
    const dbPath = tempDbPath();
    const store = openStore(dbPath);
    insertProject(store, "prj:s04-a");
    const svc = createSqliteSynthesisServices({ productStore: store });
    const built = svc.build({
      projectId: "prj:s04-a",
      claimEvaluation: makeClaimEvaluation({ claimEvaluationId: "clm:s04-auth" }),
      generatedAt: NOW,
    });
    expect(built.authority).toBe("none");
    expect(built.generatedBy).toBe(
      "deterministic_product_synthesis_builder_s04",
    );

    const mutated = {
      ...built,
      authority: "truth_c" as unknown as "none",
    };
    const violation = validateProductSynthesisShape(
      mutated as ProductSynthesisProjection,
    );
    expect(violation?.detailCode).toBe("SYNTHESIS_AUTHORITY_FORBIDDEN");

    await expect(
      svc.repository.create(mutated as ProductSynthesisProjection),
    ).rejects.toSatisfy(
      (err: unknown) =>
        isSynthesisDomainError(err) &&
        err.detailCode === "SYNTHESIS_AUTHORITY_FORBIDDEN",
    );
  });

  it("M8→M9 migration creates oa_syntheses; unsupported future schema fails closed", () => {
    expect(PRODUCT_SCHEMA_VERSION).toBe(PRODUCT_SCHEMA_VERSION_M9);
    expect(PRODUCT_SCHEMA_VERSION_M9).toBe("m9-0.1.0");

    const dbPath = tempDbPath("m8-legacy.sqlite");
    {
      const store = openStore(dbPath);
      insertProject(store, "prj:s04-mig");
      expect(tableExists(store.db, "oa_syntheses")).toBe(true);
      store.db.exec("DROP TABLE IF EXISTS oa_syntheses");
      store.db
        .prepare(`UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`)
        .run(PRODUCT_SCHEMA_VERSION_M8);
      store.close();
      openStores.pop();
    }

    const migrated = openStore(dbPath);
    const version = migrated.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION_M9);
    expect(tableExists(migrated.db, "oa_syntheses")).toBe(true);
    expect(tableExists(migrated.db, "oa_claim_evaluations")).toBe(true);
    const project = migrated.db
      .prepare(`SELECT project_id FROM oa_projects WHERE project_id = ?`)
      .get("prj:s04-mig") as { project_id?: string } | undefined;
    expect(project?.project_id).toBe("prj:s04-mig");
    migrated.close();
    openStores.pop();

    const futurePath = tempDbPath("future.sqlite");
    const future = new DatabaseSync(futurePath);
    future.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    future.close();
    expect(() => openProductSqlite(futurePath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});
