import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { projects, preparations, preparationProjectLinks } from "@/db/schema";

export type PortfolioState =
  | { kind: "empty"; projects: []; openPreparations: number }
  | {
      kind: "ready";
      projects: Array<{ id: string; name: string; createdAt: Date }>;
      openPreparations: number;
    }
  | { kind: "unavailable"; reason: string };

export async function loadPortfolio(pilotId: string): Promise<PortfolioState> {
  try {
    const owned = await db
      .select({
        id: projects.id,
        name: projects.name,
        createdAt: projects.createdAt,
      })
      .from(projects)
      .where(eq(projects.ownerPilotId, pilotId));

    const openPreps = await db
      .select({ id: preparations.id })
      .from(preparations)
      .where(eq(preparations.ownerPilotId, pilotId));

    const attached = await db.select({ preparationId: preparationProjectLinks.preparationId }).from(preparationProjectLinks);
    const attachedSet = new Set(attached.map((a) => a.preparationId));
    const openCount = openPreps.filter((p) => !attachedSet.has(p.id)).length;

    if (owned.length === 0) {
      return { kind: "empty", projects: [], openPreparations: openCount };
    }
    return { kind: "ready", projects: owned, openPreparations: openCount };
  } catch (e) {
    return { kind: "unavailable", reason: e instanceof Error ? e.message : "unknown" };
  }
}
