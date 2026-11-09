import { and, desc, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { projects, preparations, preparationProjectLinks } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  PREPARATIONS_PAGE_SIZE,
  decodePreparationsCursor,
  encodePreparationsCursor,
} from "./portfolio-cursor";

export type PreparationSummary = {
  id: string;
  previewName: string;
  previewSummary: string;
  createdAt: string;
  status: "OPEN";
};

export type PreparationsPage = {
  items: PreparationSummary[];
  nextCursor: string | null;
};

export type PortfolioState =
  | {
      kind: "empty";
      projects: [];
      openPreparations: number;
      preparations: PreparationsPage;
    }
  | {
      kind: "ready";
      projects: Array<{ id: string; name: string; createdAt: Date }>;
      openPreparations: number;
      preparations: PreparationsPage;
    }
  | { kind: "unavailable"; reason: string };

export { decodePreparationsCursor, encodePreparationsCursor } from "./portfolio-cursor";

/** OPEN + owned + not attached — shared predicate for count and list. */
function openUnattachedWhere(pilotId: string) {
  return and(
    eq(preparations.ownerPilotId, pilotId),
    eq(preparations.status, "OPEN"),
    isNull(preparationProjectLinks.preparationId),
  );
}

async function countOpenUnattached(pilotId: string): Promise<number> {
  const rows = await db
    .select({ id: preparations.id })
    .from(preparations)
    .leftJoin(
      preparationProjectLinks,
      eq(preparationProjectLinks.preparationId, preparations.id),
    )
    .where(openUnattachedWhere(pilotId));
  return rows.length;
}

async function loadPreparationsPage(
  pilotId: string,
  cursorRaw: string | null | undefined,
): Promise<PreparationsPage> {
  const cursor = cursorRaw ? decodePreparationsCursor(cursorRaw) : null;

  // Tuple keyset preserves full timestamptz precision. Round-tripping through JS Date
  // (ms only) previously dropped same-ms siblings and flaked page2 under load.
  const keyset = cursor
    ? sql`(${preparations.createdAt}, ${preparations.id}) < (${cursor.createdAt}::timestamptz, ${cursor.id})`
    : undefined;

  const rows = await db
    .select({
      id: preparations.id,
      previewName: preparations.previewName,
      previewSummary: preparations.previewSummary,
      createdAt: preparations.createdAt,
      createdAtCursor: sql<string>`to_char(${preparations.createdAt} AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"')`.as(
        "created_at_cursor",
      ),
      status: preparations.status,
    })
    .from(preparations)
    .leftJoin(
      preparationProjectLinks,
      eq(preparationProjectLinks.preparationId, preparations.id),
    )
    .where(
      keyset
        ? and(openUnattachedWhere(pilotId), keyset)
        : openUnattachedWhere(pilotId),
    )
    .orderBy(desc(preparations.createdAt), desc(preparations.id))
    .limit(PREPARATIONS_PAGE_SIZE + 1);

  const hasMore = rows.length > PREPARATIONS_PAGE_SIZE;
  const page = hasMore ? rows.slice(0, PREPARATIONS_PAGE_SIZE) : rows;
  const last = page[page.length - 1];
  return {
    items: page.map((r) => ({
      id: r.id,
      previewName: r.previewName,
      previewSummary: r.previewSummary,
      createdAt: r.createdAt.toISOString(),
      status: "OPEN" as const,
    })),
    nextCursor:
      hasMore && last
        ? encodePreparationsCursor({ createdAt: last.createdAtCursor, id: last.id })
        : null,
  };
}

export async function loadPortfolio(
  pilotId: string,
  opts?: { preparationsCursor?: string | null },
): Promise<PortfolioState> {
  try {
    const owned = await db
      .select({
        id: projects.id,
        name: projects.name,
        createdAt: projects.createdAt,
      })
      .from(projects)
      .where(eq(projects.ownerPilotId, pilotId));

    const openCount = await countOpenUnattached(pilotId);
    const preparationsPage = await loadPreparationsPage(pilotId, opts?.preparationsCursor);

    if (owned.length === 0) {
      return {
        kind: "empty",
        projects: [],
        openPreparations: openCount,
        preparations: preparationsPage,
      };
    }
    return {
      kind: "ready",
      projects: owned,
      openPreparations: openCount,
      preparations: preparationsPage,
    };
  } catch (e) {
    if (e instanceof StudioError) throw e;
    return { kind: "unavailable", reason: e instanceof Error ? e.message : "unknown" };
  }
}

export { preparationDisplayLabel } from "./portfolio-labels";
