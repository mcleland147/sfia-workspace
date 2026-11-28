/**
 * Permanent deletion of an owned project or an autonomous preparation.
 * Runs on the isolated e2e database. Historical DEV projects are not used.
 */
import { readFileSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { sql } from "@/db/client";
import { newId } from "@/lib/ids";
import {
  deleteOwnedSpace,
  failNextSpaceDeletionBeforeCommitForTests,
} from "@/domains/preparation/delete-owned-space";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

vi.mock("@/domains/identity/session", () => ({
  requireStudioSession: vi.fn(),
}));

import { requireStudioSession } from "@/domains/identity/session";
import { DELETE, GET as GET_SPACE } from "@/app/api/portfolio/spaces/[type]/[id]/route";
import { GET as GET_PROJECT } from "@/app/api/projects/[projectId]/route";
import { GET as GET_PREPARATION } from "@/app/api/preparations/[preparationId]/route";
import { GET as GET_SEARCH } from "@/app/api/projects/[projectId]/journal/search/route";
import { GET as GET_PORTFOLIO } from "@/app/api/portfolio/route";

const stamp = newId("m6").slice(-8);

function id(kind: string) {
  return `m6s_${stamp}_${kind}`;
}

async function countOwned(projectId: string, preparationIds: string[]) {
  const columns = await sql<{ table_name: string; column_name: string }[]>`
    SELECT table_name, column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND column_name IN ('project_id', 'preparation_id')
      AND table_name <> 'provider_admin_usage_snapshots'
    ORDER BY table_name, column_name
  `;
  const hits: string[] = [];
  for (const column of columns) {
    const rows = column.column_name === "project_id"
      ? await sql<{ n: number }[]>`
          SELECT count(*)::int AS n FROM ${sql(column.table_name)} WHERE project_id = ${projectId}
        `
      : await sql<{ n: number }[]>`
          SELECT count(*)::int AS n FROM ${sql(column.table_name)}
          WHERE preparation_id = ANY(${preparationIds.length ? preparationIds : ["__none__"]})
        `;
    if ((rows[0]?.n ?? 0) > 0) hits.push(`${column.table_name}.${column.column_name}`);
  }
  return hits;
}

describe("permanent space deletion (PG)", () => {
  const pilotA = id("pilot_a");
  const pilotB = id("pilot_b");
  const prep = id("prep");
  const prepFree = id("prep_free");
  const prepSibling = id("prep_sibling");
  const prepOther = id("prep_other");
  const project = id("project");
  const sibling = id("sibling");
  const other = id("other");
  const repo = id("repo");
  const authorization = id("auth");
  const snapshot = crypto.randomUUID();
  const collection = id("collection");

  beforeAll(async () => {
    if (!process.env.DATABASE_URL?.includes("5433")) throw new Error("isolated database required");
    const staleProjects = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM projects WHERE id LIKE 'm6s_%'
    `;
    for (const row of staleProjects) {
      await sql`UPDATE governance_restrictions SET status = 'LIFTED' WHERE project_id = ${row.id}`;
      await sql`
        UPDATE conversation_turn_commands SET status = 'COMPLETE'
        WHERE conversation_id IN (SELECT id FROM conversations WHERE project_id = ${row.id})
      `;
      await sql`DELETE FROM provider_usage_observations WHERE preparation_id IN (
        SELECT preparation_id FROM preparation_project_links WHERE project_id = ${row.id}
      ) AND project_id <> ${row.id}`;
      await deleteOwnedSpace(row.owner_pilot_id, "project", row.id);
    }
    const stalePreps = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM preparations WHERE id LIKE 'm6s_%'
    `;
    for (const row of stalePreps) await deleteOwnedSpace(row.owner_pilot_id, "preparation", row.id);
    await sql`DELETE FROM pilot_portfolio_preferences WHERE owner_pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM authorized_repositories WHERE pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM integration_authorizations WHERE pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM provider_admin_usage_snapshots WHERE collection_id LIKE 'm6s_%'`;
    await sql`DELETE FROM provider_admin_collection_runs WHERE collection_id LIKE 'm6s_%'`;
    await sql`DELETE FROM pilots WHERE display_name IN ('m6-a', 'm6-b')`;
    await sql`INSERT INTO pilots (id, display_name) VALUES (${pilotA}, 'm6-a'), (${pilotB}, 'm6-b')`;
    await sql`
      INSERT INTO preparations (id, owner_pilot_id, status, preview_name)
      VALUES
        (${prep}, ${pilotA}, 'OPEN', 'm6-linked'),
        (${prepFree}, ${pilotA}, 'OPEN', 'm6-free'),
        (${prepSibling}, ${pilotA}, 'OPEN', 'm6-sibling'),
        (${prepOther}, ${pilotB}, 'OPEN', 'm6-other')
    `;
    await sql`
      INSERT INTO projects (id, owner_pilot_id, name) VALUES
        (${project}, ${pilotA}, ${`m6-space-target-${stamp}`}),
        (${sibling}, ${pilotA}, ${`m6-space-sibling-${stamp}`}),
        (${other}, ${pilotB}, ${`m6-space-other-${stamp}`})
    `;
    await sql`
      INSERT INTO preparation_project_links (preparation_id, project_id) VALUES
        (${prep}, ${project}),
        (${prepSibling}, ${sibling}),
        (${prepOther}, ${other})
    `;
    await sql`
      INSERT INTO create_project_commands (id, pilot_id, idempotency_key, fingerprint, preparation_id, project_id, result)
      VALUES (${id("create")}, ${pilotA}, ${id("idem")}, 'fp', ${prep}, ${project}, 'CREATED')
    `;
    await sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("conv")}, ${prep}, ${project}, ${pilotA})
    `;
    await sql`
      INSERT INTO messages (id, conversation_id, role, content, status, ordinal)
      VALUES (${id("msg")}, ${id("conv")}, 'user', 'preuve', 'COMPLETE', 1)
    `;
    await sql`
      INSERT INTO conversation_turn_commands (
        id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
      ) VALUES (
        ${id("turn")}, ${id("conv")}, ${pilotA}, ${id("turnkey")}, 'fp', ${id("op")}, 'COMPLETE'
      )
    `;
    await sql`
      INSERT INTO nora_activity_events (
        id, conversation_id, turn_command_id, owner_pilot_id, sequence, phase, nature, status
      ) VALUES (
        ${id("activity")}, ${id("conv")}, ${id("turn")}, ${pilotA}, 1, 'reply', 'message', 'COMPLETE'
      )
    `;
    await sql`
      INSERT INTO documents (id, preparation_id, project_id, owner_pilot_id, title)
      VALUES (${id("doc")}, ${prep}, ${project}, ${pilotA}, 'Note')
    `;
    await sql`
      INSERT INTO document_revisions (id, document_id, revision_number, content_markdown, status)
      VALUES (${id("rev")}, ${id("doc")}, 1, 'version', 'AVAILABLE')
    `;
    await sql`
      INSERT INTO knowledge_subjects (id, preparation_id, project_id, owner_pilot_id, title)
      VALUES (${id("subject")}, ${prep}, ${project}, ${pilotA}, 'Sujet')
    `;
    await sql`
      INSERT INTO knowledge_acquis (id, preparation_id, project_id, owner_pilot_id, subject_id, statement)
      VALUES (${id("acquis")}, ${prep}, ${project}, ${pilotA}, ${id("subject")}, 'acquis')
    `;
    await sql`
      INSERT INTO knowledge_open_points (id, preparation_id, project_id, owner_pilot_id, subject_id, statement)
      VALUES (${id("point")}, ${prep}, ${project}, ${pilotA}, ${id("subject")}, 'point')
    `;
    await sql`
      INSERT INTO knowledge_subject_events (id, preparation_id, owner_pilot_id, subject_id, event_type)
      VALUES (${id("sevent")}, ${prep}, ${pilotA}, ${id("subject")}, 'CREATED')
    `;
    await sql`
      INSERT INTO knowledge_open_point_events (id, open_point_id, preparation_id, project_id, owner_pilot_id, event_type)
      VALUES (${id("pevent")}, ${id("point")}, ${prep}, ${project}, ${pilotA}, 'OPENED')
    `;
    await sql`
      INSERT INTO knowledge_subject_summary_revisions (
        id, subject_id, preparation_id, project_id, owner_pilot_id, revision_number, summary_markdown
      ) VALUES (
        ${id("summary")}, ${id("subject")}, ${prep}, ${project}, ${pilotA}, 1, 'synthèse'
      )
    `;
    await sql`
      INSERT INTO human_decisions (
        id, project_id, pilot_id, source_kind, source_ref, kind, statement, state
      ) VALUES (
        ${id("decision")}, ${project}, ${pilotA}, 'pilot', 'm6', 'RETAIN', 'garder', 'APPLICABLE'
      )
    `;
    await sql`
      INSERT INTO trajectory_revisions (id, project_id, revision_number, status, orientation, source_kind)
      VALUES (${id("trajectory")}, ${project}, 1, 'RETAINED', 'continuer', 'pilot')
    `;
    await sql`
      INSERT INTO project_pilotage_state (project_id, revision, current_trajectory_revision_id)
      VALUES (${project}, 1, ${id("trajectory")})
    `;
    await sql`
      INSERT INTO project_cycles (id, project_id, cycle_type, objective, status)
      VALUES (${id("cycle")}, ${project}, 'DELIVERY', 'livrer', 'ACTIVE')
    `;
    await sql`
      INSERT INTO trajectory_qualification_operations (
        id, project_id, preparation_id, pilot_id, status, phase
      ) VALUES (
        ${id("qual")}, ${project}, ${prep}, ${pilotA}, 'COMPLETE', 'done'
      )
    `;
    await sql`
      INSERT INTO method_applications (id, project_id, method_ref, method_version, decision_id)
      VALUES (${id("method")}, ${project}, 'sfia', '2.6', ${id("decision")})
    `;
    await sql`
      INSERT INTO governance_restrictions (
        id, project_id, target_kind, origin_decision_id, status
      ) VALUES (
        ${id("lifted")}, ${project}, 'PROJECT', ${id("decision")}, 'LIFTED'
      )
    `;
    await sql`
      INSERT INTO business_commands (
        id, project_id, actor_pilot_id, client_command_key, fingerprint, source_kind, source_ref,
        source_action_key, operation, expected_revision, status, decision_id
      ) VALUES (
        ${id("command")}, ${project}, ${pilotA}, ${id("ckey")}, 'fp', 'pilot', 'm6', 'keep', 'NOTE', 1, 'APPLIED', ${id("decision")}
      )
    `;
    await sql`
      INSERT INTO business_command_effects (id, command_id, project_id, effect_kind, target_ref, outcome, ordinal)
      VALUES (${id("effect")}, ${id("command")}, ${project}, 'NOTE', 'project', 'APPLIED', 1)
    `;
    await sql`
      INSERT INTO effect_attempts (
        id, pilot_id, project_id, kind, status, correlation_key, fingerprint, decision_id
      ) VALUES (
        ${id("attempt")}, ${pilotA}, ${project}, 'GIT_PUBLICATION', 'COMPLETED', ${id("corr")}, 'fp', ${id("decision")}
      )
    `;
    await sql`
      INSERT INTO observed_git_facts (
        id, attempt_id, pilot_id, project_id, fact_kind, repository_full_name, ref_name, sha
      ) VALUES (
        ${id("fact")}, ${id("attempt")}, ${pilotA}, ${project}, 'HEAD', 'shared/repo', 'main', 'abc'
      )
    `;
    await sql`
      INSERT INTO technical_contracts (
        id, project_id, pilot_id, preparation_id, contract_key, version, fingerprint, status, instruction_text
      ) VALUES (
        ${id("contract")}, ${project}, ${pilotA}, ${prep}, 'm6', 1, 'fp', 'DRAFT', 'rien'
      )
    `;
    await sql`
      INSERT INTO realization_handoffs (
        id, attempt_id, project_id, pilot_id, contract_id, contract_version, contract_fingerprint, status
      ) VALUES (
        ${id("handoff")}, ${id("attempt")}, ${project}, ${pilotA}, ${id("contract")}, 1, 'fp', 'RECORDED'
      )
    `;
    await sql`
      INSERT INTO realization_qualifications (id, attempt_id, handoff_id, project_id, pilot_id, status)
      VALUES (${id("rqual")}, ${id("attempt")}, ${id("handoff")}, ${project}, ${pilotA}, 'RECORDED')
    `;
    await sql`
      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
      VALUES (${id("work")}, ${pilotA}, ${prep}, ${project}, ${id("conv")}, 'COMPLETE', 'travail')
    `;
    await sql`
      INSERT INTO cognitive_work_checkpoints (id, work_id, revision, cause)
      VALUES (${id("checkpoint")}, ${id("work")}, 1, 'complete')
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, conversation_id, cognitive_work_id,
        tariff_version, estimated_cost_usd, cost_coverage, status, granularity, idempotency_key,
        input_tokens, output_tokens
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${project}, ${prep}, ${id("conv")}, ${id("work")},
        'v-test', 1.25, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("usage")},
        11, 7
      )
    `;
    await sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("conv_sibling")}, ${prepSibling}, ${sibling}, ${pilotA})
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, tariff_version, estimated_cost_usd,
        cost_coverage, status, granularity, idempotency_key, input_tokens, output_tokens
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${sibling}, ${prepSibling},
        'v-test', 4.5, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("usage_sibling")},
        30, 9
      )
    `;
    const derived = await sql<{ name: string | null }[]>`SELECT to_regclass('public.derived_embedding_chunks') AS name`;
    if (derived[0]?.name) {
      await sql`
        INSERT INTO derived_embedding_chunks (
          id, project_id, preparation_id, owner_pilot_id, source_id, source_kind,
          content_fingerprint, model, dims, vector_json, index_ref
        ) VALUES (
          ${id("chunk")}, ${project}, ${prep}, ${pilotA}, ${id("subject")}, 'subject',
          'fp', 'test', 1, ${JSON.stringify([0.1])}::jsonb, 'idx'
        )
      `;
    }
    await sql`
      INSERT INTO integration_authorizations (id, pilot_id, provider, status)
      VALUES (${authorization}, ${pilotA}, 'github', 'CONNECTED')
    `;
    await sql`
      INSERT INTO authorized_repositories (id, pilot_id, authorization_id, owner, name, full_name)
      VALUES (${repo}, ${pilotA}, ${authorization}, 'shared', 'repo', ${`shared/repo-${stamp}`})
    `;
    await sql`
      INSERT INTO project_git_links (id, project_id, pilot_id, repository_id)
      VALUES (${id("link")}, ${project}, ${pilotA}, ${repo}), (${id("link_sibling")}, ${sibling}, ${pilotA}, ${repo})
    `;
    await sql`
      INSERT INTO document_publication_refs (
        id, project_id, pilot_id, document_id, revision_id, repository_id, target_path, target_branch, status
      ) VALUES (
        ${id("pub")}, ${project}, ${pilotA}, ${id("doc")}, ${id("rev")}, ${repo}, 'note.md', 'main', 'OBSERVED'
      )
    `;
    await sql`
      INSERT INTO pilot_space_organization (
        owner_pilot_id, space_type, space_id, favorite, archived_at, row_version
      ) VALUES
        (${pilotA}, 'project', ${project}, true, now(), 2),
        (${pilotB}, 'project', ${other}, true, NULL, 1)
    `;
    await sql`
      INSERT INTO pilot_portfolio_preferences (owner_pilot_id, view)
      VALUES (${pilotA}, 'list')
    `;
    await sql`
      INSERT INTO provider_admin_collection_runs (
        collection_id, started_at, status, path, organization_scope, collection_provenance
      ) VALUES (
        ${collection}, now(), 'READY', '/organization/costs', 'org:m6', 'TEST_SUBSTITUTED'
      )
    `;
    await sql`
      INSERT INTO provider_admin_usage_snapshots (
        id, collected_at, collection_id, source_endpoint, surface_object, organization_scope,
        interval_start_utc, interval_end_utc, granularity, project_id, amount, currency, completeness
      ) VALUES (
        ${snapshot}::uuid, now(), ${collection}, '/organization/costs', 'costs', 'org:m6',
        now(), now() + interval '1 day', '1d', ${project}, 9.5, 'usd', 'complete'
      )
    `;
  });

  afterAll(async () => {
    const projects = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM projects WHERE id IN (${project}, ${sibling}, ${other})
    `;
    for (const row of projects) {
      await sql`UPDATE governance_restrictions SET status = 'LIFTED' WHERE project_id = ${row.id}`;
      await sql`UPDATE conversation_turn_commands SET status = 'COMPLETE' WHERE conversation_id IN (
        SELECT id FROM conversations WHERE project_id = ${row.id}
      )`;
      await deleteOwnedSpace(row.owner_pilot_id, "project", row.id).catch((error: unknown) => {
        console.error("project cleanup", row.id, error);
      });
    }
    const preps = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM preparations WHERE id IN (${prep}, ${prepFree}, ${prepSibling}, ${prepOther})
    `;
    for (const row of preps) {
      await deleteOwnedSpace(row.owner_pilot_id, "preparation", row.id).catch((error: unknown) => {
        console.error("preparation cleanup", row.id, error);
      });
    }
    await sql`DELETE FROM provider_admin_usage_snapshots WHERE id = ${snapshot}::uuid`;
    await sql`DELETE FROM provider_admin_collection_runs WHERE collection_id = ${collection}`;
    await sql`DELETE FROM pilot_portfolio_preferences WHERE owner_pilot_id IN (${pilotA}, ${pilotB})`;
    await sql`DELETE FROM authorized_repositories WHERE id = ${repo}`;
    await sql`DELETE FROM integration_authorizations WHERE id = ${authorization}`;
    await sql`DELETE FROM pilots WHERE id IN (${pilotA}, ${pilotB})`;
  });

  it("contains no external call", () => {
    const source = readFileSync(new URL("../../src/domains/preparation/delete-owned-space.ts", import.meta.url), "utf8");
    expect(source).not.toMatch(/from ["']@\/domains\/execution|from ["']@\/domains\/integrations|openai|fetch\(/);
  });

  it("refuses an attached preparation, another pilot, and an active operation", async () => {
    await expect(deleteOwnedSpace(pilotA, "preparation", prep)).rejects.toMatchObject({ code: "CONFLICT" });
    await expect(deleteOwnedSpace(pilotB, "project", project)).rejects.toMatchObject({ code: "NOT_FOUND" });
    await sql`
      INSERT INTO governance_restrictions (id, project_id, target_kind, origin_decision_id, status)
      VALUES (${id("active")}, ${project}, 'PROJECT', ${id("decision")}, 'ACTIVE')
    `;
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toMatchObject({
      code: "CONFLICT",
      message: "Une restriction active empêche cette suppression.",
    });
    const still = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    expect(still[0]?.n).toBe(1);
    await sql`DELETE FROM governance_restrictions WHERE id = ${id("active")}`;
  });

  it("rolls the whole deletion back when commit is interrupted", async () => {
    failNextSpaceDeletionBeforeCommitForTests();
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toThrow(/interrupted before commit/);
    const projectRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    const messageRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM messages WHERE id = ${id("msg")}`;
    const decisionRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM human_decisions WHERE id = ${id("decision")}`;
    expect(projectRows[0]?.n).toBe(1);
    expect(messageRows[0]?.n).toBe(1);
    expect(decisionRows[0]?.n).toBe(1);
  });

  it("blocks when a concurrent turn is admitted before commit", async () => {
    let locked!: () => void;
    const lockedGate = new Promise<void>((resolve) => { locked = resolve; });
    let release!: () => void;
    const releaseGate = new Promise<void>((resolve) => { release = resolve; });
    const holder = sql.begin(async (tx) => {
      await tx`SELECT id FROM projects WHERE id = ${project} FOR UPDATE`;
      locked();
      await releaseGate;
      await tx`
        INSERT INTO conversation_turn_commands (
          id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
        ) VALUES (
          ${id("race")}, ${id("conv")}, ${pilotA}, ${id("racekey")}, 'fp', ${id("raceop")}, 'RUNNING'
        )
      `;
    });
    await lockedGate;
    const pending = deleteOwnedSpace(pilotA, "project", project);
    release();
    await holder;
    await expect(pending).rejects.toMatchObject({ message: "Un échange Nora est encore en cours." });
    const projectRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    expect(projectRows[0]?.n).toBe(1);
    await sql`DELETE FROM conversation_turn_commands WHERE id = ${id("race")}`;
  });

  it("deletes the project graph and keeps the other spaces and shared resources", async () => {
    const before = await countOwned(sibling, [prepSibling]);
    expect(before.length).toBeGreaterThan(0);
    const result = await deleteOwnedSpace(pilotA, "project", project);
    expect(result).toEqual({ deleted: true, spaceType: "project", spaceId: project });
    expect(await countOwned(project, [prep])).toEqual([]);
    const snapshotRows = await sql<{ amount: string; project_id: string }[]>`
      SELECT amount::text AS amount, project_id FROM provider_admin_usage_snapshots WHERE id = ${snapshot}::uuid
    `;
    expect(snapshotRows[0]?.project_id).toBe(project);
    expect(snapshotRows[0]?.amount).toBe("9.5000000000");
    const siblingUsage = await sql<{ cost: string; tokens: number }[]>`
      SELECT estimated_cost_usd::text AS cost, input_tokens AS tokens
      FROM provider_usage_observations WHERE idempotency_key = ${id("usage_sibling")}
    `;
    expect(siblingUsage[0]).toMatchObject({ cost: "4.5000000000", tokens: "30" });
    const shared = await sql<{ repos: number; links: number; auth: number }[]>`
      SELECT
        (SELECT count(*)::int FROM authorized_repositories WHERE id = ${repo}) AS repos,
        (SELECT count(*)::int FROM project_git_links WHERE project_id = ${sibling}) AS links,
        (SELECT count(*)::int FROM integration_authorizations WHERE id = ${authorization}) AS auth
    `;
    expect(shared[0]).toEqual({ repos: 1, links: 1, auth: 1 });
    const others = await sql<{ projects: number; pilots: number; prefs: number; org: number }[]>`
      SELECT
        (SELECT count(*)::int FROM projects WHERE id IN (${sibling}, ${other})) AS projects,
        (SELECT count(*)::int FROM pilots WHERE id IN (${pilotA}, ${pilotB})) AS pilots,
        (SELECT count(*)::int FROM pilot_portfolio_preferences WHERE owner_pilot_id = ${pilotA}) AS prefs,
        (SELECT count(*)::int FROM pilot_space_organization WHERE owner_pilot_id = ${pilotB} AND space_id = ${other}) AS org
    `;
    expect(others[0]).toEqual({ projects: 2, pilots: 2, prefs: 1, org: 1 });
    const ownOrg = await sql<{ n: number }[]>`
      SELECT count(*)::int AS n FROM pilot_space_organization WHERE space_id = ${project}
    `;
    expect(ownOrg[0]?.n).toBe(0);
    await expect(sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("orphan")}, ${prep}, ${project}, ${pilotA})
    `).rejects.toThrow();
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("deletes an autonomous preparation and frees a project name", async () => {
    await sql`
      INSERT INTO conversations (id, preparation_id, owner_pilot_id)
      VALUES (${id("free_conv")}, ${prepFree}, ${pilotA})
    `;
    await sql`
      INSERT INTO messages (id, conversation_id, role, content, status, ordinal)
      VALUES (${id("free_msg")}, ${id("free_conv")}, 'user', 'libre', 'COMPLETE', 1)
    `;
    await deleteOwnedSpace(pilotA, "preparation", prepFree);
    expect(await countOwned("__none__", [prepFree])).toEqual([]);
    const opened = await openOrCreatePreparation(pilotA);
    const name = `m6-space-reuse-${stamp}`;
    await updatePreview(pilotA, opened.id, name, "reprise");
    const firstRevision = await sql<{ creation_revision: number }[]>`
      SELECT creation_revision FROM preparations WHERE id = ${opened.id}
    `;
    const first = await createProjectCommand({
      pilotId: pilotA,
      preparationId: opened.id,
      expectedCreationRevision: firstRevision[0]!.creation_revision,
      projectName: name,
      previewSummary: "reprise",
      idempotencyKey: id("reuse_1"),
    });
    if (first.status !== "CREATED") throw new Error(first.status);
    await deleteOwnedSpace(pilotA, "project", first.projectId);
    const againPrep = await openOrCreatePreparation(pilotA);
    await updatePreview(pilotA, againPrep.id, name, "reprise");
    const secondRevision = await sql<{ creation_revision: number }[]>`
      SELECT creation_revision FROM preparations WHERE id = ${againPrep.id}
    `;
    const second = await createProjectCommand({
      pilotId: pilotA,
      preparationId: againPrep.id,
      expectedCreationRevision: secondRevision[0]!.creation_revision,
      projectName: name,
      previewSummary: "reprise",
      idempotencyKey: id("reuse_2"),
    });
    if (second.status !== "CREATED") throw new Error(second.status);
    await deleteOwnedSpace(pilotA, "project", second.projectId);
  });

  it("refuses a preparation observation that belongs to another project", async () => {
    const sharedPrep = id("prep_shared");
    await sql`
      INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${sharedPrep}, ${pilotA}, 'OPEN')
    `;
    await sql`
      INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${sharedPrep}, ${sibling})
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, tariff_version, cost_coverage, status, granularity, idempotency_key
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${other}, ${sharedPrep}, 'v-test', 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("ambiguous")}
      )
    `;
    await expect(deleteOwnedSpace(pilotA, "project", sibling)).rejects.toMatchObject({ code: "CONFLICT" });
    const kept = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${sibling}`;
    expect(kept[0]?.n).toBe(1);
    await sql`DELETE FROM provider_usage_observations WHERE idempotency_key = ${id("ambiguous")}`;
    await sql`DELETE FROM preparation_project_links WHERE preparation_id = ${sharedPrep}`;
    await sql`DELETE FROM preparations WHERE id = ${sharedPrep}`;
  });

  it("serves the deletion over HTTP and closes the old routes", async () => {
    const httpPrep = id("prep_http");
    const httpProject = id("project_http");
    await sql`INSERT INTO preparations (id, owner_pilot_id, status, preview_name) VALUES (${httpPrep}, ${pilotA}, 'OPEN', 'http')`;
    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${httpProject}, ${pilotA}, ${`m6-space-http-${stamp}`})`;
    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${httpPrep}, ${httpProject})`;
    const unauthenticated = Object.assign(new Error("SESSION_INVALID"), { code: "SESSION_INVALID" });
    vi.mocked(requireStudioSession).mockRejectedValueOnce(unauthenticated);
    const denied = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(denied.status).toBe(401);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotA, sessionId: "m6", authMode: "dev" } as never);
    const missingConfirm = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: "{}" }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(missingConfirm.status).toBe(400);
    const badType = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "folder", id: httpProject }),
    });
    expect(badType.status).toBe(400);
    const missing = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: id("missing") }),
    });
    expect(missing.status).toBe(404);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotB, sessionId: "m6b", authMode: "dev" } as never);
    const foreign = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(foreign.status).toBe(404);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotA, sessionId: "m6", authMode: "dev" } as never);
    const attached = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "preparation", id: httpPrep }),
    });
    expect(attached.status).toBe(409);
    expect(await attached.json()).toMatchObject({ message: expect.stringContaining("rattachée") });
    const removed = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(removed.status).toBe(200);
    expect(await removed.json()).toEqual({ deleted: true, spaceType: "project", spaceId: httpProject });
    const replay = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(replay.status).toBe(404);
    expect((await GET_SPACE(new Request("http://127.0.0.1/space"), { params: Promise.resolve({ type: "project", id: httpProject }) })).status).toBe(404);
    expect((await GET_PROJECT(new Request("http://127.0.0.1/project"), { params: Promise.resolve({ projectId: httpProject }) })).status).toBe(404);
    expect((await GET_PREPARATION(new Request("http://127.0.0.1/prep"), { params: Promise.resolve({ preparationId: httpPrep }) })).status).toBe(404);
    const search = await GET_SEARCH(new Request("http://127.0.0.1/search?tab=decisions&q=m6"), {
      params: Promise.resolve({ projectId: httpProject }),
    });
    expect(search.status).toBe(404);
    const board = await GET_PORTFOLIO(new Request("http://127.0.0.1/portfolio?scope=all"));
    const body = await board.json() as { board?: { items?: Array<{ id: string }> } };
    expect(body.board?.items?.some((item) => item.id === httpProject || item.id === httpPrep)).toBe(false);
    const surviving = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${sibling}`;
    expect(surviving[0]?.n).toBe(1);
  });
});
