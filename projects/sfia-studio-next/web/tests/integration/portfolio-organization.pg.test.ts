import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { sql } from "@/db/client";
import { pilots, preparations, projects } from "@/db/schema";
import { db } from "@/db/client";
import { newId } from "@/lib/ids";
import {
  loadPersonalBoard,
  readPersonalSpaceRecord,
  movePersonalSpace,
  recordSpaceOpened,
  setSpaceArchive,
  setSpaceFavorite,
  updatePortfolioPreferences,
} from "@/domains/identity/portfolio-organization";
import { StudioError } from "@/lib/http-errors";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("personal portfolio organization (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    if (!process.env.DATABASE_URL.includes("sfia_next_e2e")) {
      throw new Error("refusing portfolio organization tests outside sfia_next_e2e");
    }
  });

  it("keeps pilots isolated, counts past 99, and finds a name beyond the first page", async () => {
    const owner = await seedPilot("PF-owner");
    const other = await seedPilot("PF-other");
    const hidden = newId("proj");
    await db.insert(projects).values({ id: hidden, ownerPilotId: other, name: "Secret voisin" });
    const ids: string[] = [];
    for (let i = 0; i < 100; i += 1) {
      const id = newId("proj");
      ids.push(id);
      await db.insert(projects).values({
        id,
        ownerPilotId: owner,
        name: i === 0 ? "Aiguille lointaine" : `Espace ${String(i).padStart(3, "0")}`,
      });
    }
    const prep = newId("prep");
    await db.insert(preparations).values({
      id: prep,
      ownerPilotId: owner,
      status: "OPEN",
      previewName: "Préparation ouverte",
      previewSummary: "",
    });

    const before = await sql<{ n: string }[]>`
      SELECT count(*)::text AS n FROM pilot_portfolio_preferences WHERE owner_pilot_id = ${owner}
    `;
    const board = await loadPersonalBoard(owner, { preview: true });
    const after = await sql<{ n: string }[]>`
      SELECT count(*)::text AS n FROM pilot_portfolio_preferences WHERE owner_pilot_id = ${owner}
    `;
    expect(after[0]?.n).toBe(before[0]?.n);
    expect(board.counters.projects).toBe(100);
    expect(board.counters.preparations).toBe(1);
    expect(board.items).toHaveLength(5);
    expect(board.items.some((item) => item.label === "Secret voisin")).toBe(false);

    const found = await loadPersonalBoard(owner, { query: "Aiguille", preview: false });
    expect(found.filteredTotal).toBe(1);
    expect(found.items[0]?.label).toBe("Aiguille lointaine");
  });

  it("persists a favorite, rejects a stale version, and archives without touching the project", async () => {
    const owner = await seedPilot("PF-archive");
    const projectId = newId("proj");
    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "À archiver" });
    const opened = await recordSpaceOpened(owner, "project", projectId, "nav-1");
    expect(opened.applied).toBe(true);
    const again = await recordSpaceOpened(owner, "project", projectId, "nav-1");
    expect(again.applied).toBe(false);

    const favorite = await setSpaceFavorite(owner, "project", projectId, {
      favorite: true,
      expectedVersion: 0,
    });
    expect(favorite.favorite).toBe(true);
    await expect(
      setSpaceFavorite(owner, "project", projectId, { favorite: false, expectedVersion: 0 }),
    ).rejects.toBeInstanceOf(StudioError);

    const archived = await setSpaceArchive(owner, "project", projectId, {
      archived: true,
      expectedVersion: favorite.rowVersion,
      confirm: true,
    });
    expect(archived.archived).toBe(true);
    const current = await loadPersonalBoard(owner);
    expect(current.counters.projects).toBe(0);
    expect(current.resume).toBeNull();
    const archives = await loadPersonalBoard(owner, { scope: "archive" });
    expect(archives.items.map((item) => item.id)).toContain(projectId);
    const project = await sql<{ name: string }[]>`SELECT name FROM projects WHERE id = ${projectId}`;
    expect(project[0]?.name).toBe("À archiver");

    await setSpaceArchive(owner, "project", projectId, {
      archived: false,
      expectedVersion: archived.rowVersion,
      confirm: true,
    });
    const restored = await loadPersonalBoard(owner);
    expect(restored.items.some((item) => item.id === projectId && item.favorite)).toBe(true);
  });

  it("reorders the whole current collection and keeps the explicit sort", async () => {
    const owner = await seedPilot("PF-order");
    const first = newId("proj");
    const second = newId("proj");
    await db.insert(projects).values([
      { id: first, ownerPilotId: owner, name: "Alpha" },
      { id: second, ownerPilotId: owner, name: "Bravo" },
    ]);
    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
    const moved = await movePersonalSpace(owner, {
      spaceType: "project",
      spaceId: second,
      expectedVersion: prefs.version,
      direction: "up",
      context: { filter: "all", query: "", scope: "current" },
    });
    const board = await loadPersonalBoard(owner);
    expect(board.preferences.sort).toBe("custom");
    expect(board.items.map((item) => item.id)[0]).toBe(second);
    await expect(
      movePersonalSpace(owner, {
        spaceType: "project",
        spaceId: first,
        expectedVersion: 0,
        direction: "down",
        context: { filter: "all", query: "", scope: "current" },
      }),
    ).rejects.toMatchObject({ httpStatus: 409 });
    const saved = await updatePortfolioPreferences(owner, {
      view: "grid",
      expectedVersion: moved.version,
    });
    const reread = await loadPersonalBoard(owner);
    expect(reread.preferences.view).toBe("grid");
    expect(reread.preferences.sort).toBe("custom");
    expect(saved.version).toBe(moved.version + 1);
  });

  it("keeps one winner when two first writes race, and ignores an older navigation key", async () => {
    const owner = await seedPilot("PF-race");
    const projectId = newId("proj");
    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Course" });
    const raced = await Promise.allSettled([
      setSpaceFavorite(owner, "project", projectId, { favorite: true, expectedVersion: 0 }),
      setSpaceFavorite(owner, "project", projectId, { favorite: false, expectedVersion: 0 }),
    ]);
    expect(raced.filter((item) => item.status === "fulfilled")).toHaveLength(1);
    expect(raced.filter((item) => item.status === "rejected")).toHaveLength(1);
    const stored = await sql<{ row_version: number; favorite: boolean }[]>`
      SELECT row_version, favorite FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    expect(stored[0]?.row_version).toBe(1);

    await recordSpaceOpened(owner, "project", projectId, "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee:2");
    const first = await sql<{ navigation_key: string; opened: string }[]>`
      SELECT navigation_key, last_opened_at::text AS opened
      FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    const replay = await recordSpaceOpened(owner, "project", projectId, "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee:1");
    expect(replay.applied).toBe(false);
    const second = await sql<{ navigation_key: string; opened: string }[]>`
      SELECT navigation_key, last_opened_at::text AS opened
      FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    expect(second[0]?.navigation_key).toBe(first[0]?.navigation_key);
    expect(second[0]?.opened).toBe(first[0]?.opened);

    const plan = await sql<{ "QUERY PLAN": string }[]>`
      EXPLAIN SELECT id FROM projects WHERE owner_pilot_id = ${owner} ORDER BY created_at DESC, id DESC LIMIT 5
    `;
    expect(plan.map((row) => row["QUERY PLAN"]).join("\n")).toMatch(/Limit/);
  });

  it("rejects a move outside the full current collection and reports group totals", async () => {
    const owner = await seedPilot("PF-guard");
    const alpha = newId("proj");
    const bravo = newId("proj");
    const prep = newId("prep");
    await db.insert(projects).values([
      { id: alpha, ownerPilotId: owner, name: "Alpha" },
      { id: bravo, ownerPilotId: owner, name: "Bravo" },
    ]);
    await db.insert(preparations).values({
      id: prep,
      ownerPilotId: owner,
      status: "OPEN",
      previewName: "Préparation",
      previewSummary: "",
    });
    await expect(
      movePersonalSpace(owner, {
        spaceType: "project",
        spaceId: bravo,
        expectedVersion: 0,
        direction: "up",
        context: { filter: "projects", query: "", scope: "current" },
      }),
    ).rejects.toBeInstanceOf(StudioError);
    await expect(
      movePersonalSpace(owner, {
        spaceType: "project",
        spaceId: bravo,
        expectedVersion: 0,
        direction: "up",
        context: { filter: "all", query: "", scope: "current" },
      }),
    ).rejects.toMatchObject({ httpStatus: 409 });
    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
    await expect(
      movePersonalSpace(owner, {
        spaceType: "project",
        spaceId: bravo,
        expectedVersion: prefs.version,
        beforeSpaceId: "missing",
        beforeSpaceType: "project",
        context: { filter: "all", query: "", scope: "current" },
      }),
    ).rejects.toMatchObject({ httpStatus: 409 });
    const board = await loadPersonalBoard(owner, { preview: false });
    expect(board.groups.project).toBe(2);
    expect(board.groups.preparation).toBe(1);
    expect(board.filteredTotal).toBe(3);
    expect(board.groups.project + board.groups.preparation).toBe(board.filteredTotal);
  });

  it("refuses a favorite once the preparation row is attached", async () => {
    const owner = await seedPilot("PF-boundary");
    const prep = newId("prep");
    const projectId = newId("proj");
    await db.insert(preparations).values({
      id: prep,
      ownerPilotId: owner,
      status: "OPEN",
      previewName: "Bientôt rattachée",
      previewSummary: "",
    });
    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Projet issu" });
    let releaseHold: () => void = () => undefined;
    const hold = new Promise<void>((resolve) => {
      releaseHold = resolve;
    });
    let markReady: () => void = () => undefined;
    const ready = new Promise<void>((resolve) => {
      markReady = resolve;
    });
    const attachment = sql.begin(async (tx) => {
      await tx`SELECT pg_advisory_xact_lock(hashtext(${owner}), hashtext(${"sfia:d2:project-name"}))`;
      await tx`
        SELECT id FROM preparations
        WHERE id = ${prep} AND owner_pilot_id = ${owner}
        FOR UPDATE
      `;
      markReady();
      await hold;
      await tx`
        INSERT INTO preparation_project_links (preparation_id, project_id)
        VALUES (${prep}, ${projectId})
      `;
    });
    await ready;
    const favorite = setSpaceFavorite(owner, "preparation", prep, {
      favorite: true,
      expectedVersion: 0,
    });
    await new Promise((resolve) => setTimeout(resolve, 150));
    releaseHold();
    await attachment;
    await expect(favorite).rejects.toMatchObject({ httpStatus: 404 });
    const stored = await sql<{ n: string }[]>`
      SELECT count(*)::text AS n FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${prep}
    `;
    expect(stored[0]?.n).toBe("0");
    const board = await loadPersonalBoard(owner, { preview: false });
    expect(board.items.some((item) => item.id === prep)).toBe(false);
    expect(board.counters.favorites).toBe(0);
  });

  it("does not move the opening time backwards and ignores a late replay", async () => {
    const owner = await seedPilot("PF-open");
    const projectId = newId("proj");
    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Reprise" });
    const tab = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
    const other = "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee";
    expect((await recordSpaceOpened(owner, "project", projectId, `${tab}:1`)).applied).toBe(true);
    await sql`
      UPDATE pilot_space_organization
      SET last_opened_at = clock_timestamp() + interval '2 hours'
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    const ahead = await sql<{ opened: string }[]>`
      SELECT last_opened_at::text AS opened FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    expect((await recordSpaceOpened(owner, "project", projectId, `${other}:1`)).applied).toBe(true);
    const afterOther = await sql<{ opened: string; navigation_key: string }[]>`
      SELECT last_opened_at::text AS opened, navigation_key
      FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    expect(afterOther[0]?.opened >= (ahead[0]?.opened || "")).toBe(true);
    expect(afterOther[0]?.navigation_key).toContain(`${tab}:1`);
    const replay = await recordSpaceOpened(owner, "project", projectId, `${tab}:1`);
    expect(replay.applied).toBe(false);
    const afterReplay = await sql<{ opened: string }[]>`
      SELECT last_opened_at::text AS opened FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
    `;
    expect(afterReplay[0]?.opened).toBe(afterOther[0]?.opened);
  });

  it("rejects a stale order after a restore and does not shift twice", async () => {
    const owner = await seedPilot("PF-restore");
    const first = newId("proj");
    const second = newId("proj");
    await db.insert(projects).values([
      { id: first, ownerPilotId: owner, name: "Un" },
      { id: second, ownerPilotId: owner, name: "Deux" },
    ]);
    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
    const moved = await movePersonalSpace(owner, {
      spaceType: "project",
      spaceId: second,
      expectedVersion: prefs.version,
      direction: "up",
      context: { filter: "all", query: "", scope: "current" },
    });
    const before = await loadPersonalBoard(owner, { preview: false });
    const archived = await setSpaceArchive(owner, "project", first, {
      archived: true,
      expectedVersion: before.items.find((item) => item.id === first)?.rowVersion ?? 0,
      confirm: true,
    });
    const restored = await setSpaceArchive(owner, "project", first, {
      archived: false,
      expectedVersion: archived.rowVersion,
      confirm: true,
    });
    const positions = await sql<{ id: string; custom_position: number }[]>`
      SELECT space_id AS id, custom_position FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner}
      ORDER BY custom_position
    `;
    const repeated = await setSpaceArchive(owner, "project", first, {
      archived: false,
      expectedVersion: restored.rowVersion,
      confirm: true,
    });
    expect(repeated.rowVersion).toBe(restored.rowVersion);
    const again = await sql<{ id: string; custom_position: number }[]>`
      SELECT space_id AS id, custom_position FROM pilot_space_organization
      WHERE owner_pilot_id = ${owner}
      ORDER BY custom_position
    `;
    expect(again).toEqual(positions);
    await expect(
      movePersonalSpace(owner, {
        spaceType: "project",
        spaceId: second,
        expectedVersion: moved.version,
        direction: "down",
        context: { filter: "all", query: "", scope: "current" },
      }),
    ).rejects.toMatchObject({ httpStatus: 409 });
    await expect(loadPersonalBoard(owner, { cursor: "not-a-cursor", preview: false })).rejects.toMatchObject({
      httpStatus: 400,
    });
  });

  it("reads one owned space without the current page", async () => {
    const owner = await seedPilot("Lecture");
    const other = await seedPilot("Autre");
    const projectId = newId("prj");
    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Hors page" });
    await setSpaceFavorite(owner, "project", projectId, { favorite: true, expectedVersion: 0 });
    const record = await readPersonalSpaceRecord(owner, "project", projectId);
    expect(record.favorite).toBe(true);
    expect(record.eligible).toBe(true);
    expect(record.rowVersion).toBeGreaterThan(0);
    await expect(readPersonalSpaceRecord(other, "project", projectId)).rejects.toMatchObject({ httpStatus: 404 });
  });
});
