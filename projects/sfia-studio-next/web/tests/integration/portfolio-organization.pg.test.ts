import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { sql } from "@/db/client";
import { pilots, preparations, projects } from "@/db/schema";
import { db } from "@/db/client";
import { newId } from "@/lib/ids";
import {
  loadPersonalBoard,
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
    const moved = await movePersonalSpace(owner, {
      spaceType: "project",
      spaceId: second,
      expectedVersion: 0,
      direction: "up",
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
});
