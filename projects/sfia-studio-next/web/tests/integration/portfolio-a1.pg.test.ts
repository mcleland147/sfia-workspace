import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "@/db/client";
import { pilots, preparations, preparationProjectLinks, projects } from "@/db/schema";
import { newId } from "@/lib/ids";
import { loadPortfolio, decodePreparationsCursor } from "@/domains/identity/portfolio";
import { StudioError } from "@/lib/http-errors";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("A1 portfolio preparations projection (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  });

  it("lists only OPEN unattached preparations for owner; excludes other pilots and attached", async () => {
    const a = await seedPilot("A1-owner");
    const b = await seedPilot("A1-other");

    const openA = newId("prep");
    const attachedA = newId("prep");
    const openB = newId("prep");
    await db.insert(preparations).values([
      {
        id: openA,
        ownerPilotId: a,
        status: "OPEN",
        previewName: "Open A",
        previewSummary: "s",
      },
      {
        id: attachedA,
        ownerPilotId: a,
        status: "ATTACHED",
        previewName: "Attached A",
        previewSummary: "s",
      },
      {
        id: openB,
        ownerPilotId: b,
        status: "OPEN",
        previewName: "Open B",
        previewSummary: "s",
      },
    ]);

    const projectId = newId("proj");
    await db.insert(projects).values({
      id: projectId,
      ownerPilotId: a,
      name: "Linked",
    });
    // Also mark a separate OPEN prep as attached via link (status may still be OPEN historically)
    const linkedOpen = newId("prep");
    await db.insert(preparations).values({
      id: linkedOpen,
      ownerPilotId: a,
      status: "OPEN",
      previewName: "Linked Open",
      previewSummary: "s",
    });
    await db.insert(preparationProjectLinks).values({
      preparationId: linkedOpen,
      projectId,
    });

    const portfolio = await loadPortfolio(a);
    expect(portfolio.kind).toBe("ready");
    if (portfolio.kind === "unavailable") throw new Error("unexpected");
    expect(portfolio.openPreparations).toBe(portfolio.preparations.items.length);
    const ids = portfolio.preparations.items.map((p) => p.id);
    expect(ids).toContain(openA);
    expect(ids).not.toContain(attachedA);
    expect(ids).not.toContain(openB);
    expect(ids).not.toContain(linkedOpen);
    expect(portfolio.preparations.items.every((p) => p.status === "OPEN")).toBe(true);
  });

  it("paginates with opaque keyset cursor (25) and rejects bad cursor", async () => {
    const pilotId = await seedPilot("A1-page");
    const rows = Array.from({ length: 27 }, (_, i) => ({
      id: newId("prep"),
      ownerPilotId: pilotId,
      status: "OPEN" as const,
      previewName: `P${String(i).padStart(2, "0")}`,
      previewSummary: "",
      // stagger createdAt via sequential inserts + slight offset not needed; id DESC breaks ties
    }));
    for (const r of rows) {
      await db.insert(preparations).values(r);
    }

    const page1 = await loadPortfolio(pilotId);
    expect(page1.kind).not.toBe("unavailable");
    if (page1.kind === "unavailable") throw new Error("unexpected");
    expect(page1.openPreparations).toBe(27);
    expect(page1.preparations.items).toHaveLength(25);
    expect(page1.preparations.nextCursor).toBeTruthy();

    const page2 = await loadPortfolio(pilotId, {
      preparationsCursor: page1.preparations.nextCursor,
    });
    expect(page2.kind).not.toBe("unavailable");
    if (page2.kind === "unavailable") throw new Error("unexpected");
    expect(page2.preparations.items).toHaveLength(2);
    expect(page2.preparations.nextCursor).toBeNull();

    const overlap = page1.preparations.items
      .map((i) => i.id)
      .filter((id) => page2.preparations.items.some((j) => j.id === id));
    expect(overlap).toHaveLength(0);

    await expect(loadPortfolio(pilotId, { preparationsCursor: "bogus" })).rejects.toBeInstanceOf(
      StudioError,
    );
    expect(() => decodePreparationsCursor("bogus")).toThrow(StudioError);
  });
});
