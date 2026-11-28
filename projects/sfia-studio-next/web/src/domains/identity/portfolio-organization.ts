import { sql } from "@/db/client";
import { StudioError } from "@/lib/http-errors";

export type SpaceType = "project" | "preparation";
export type PortfolioView = "list" | "grid" | "grouped";
export type PortfolioSort = "recent" | "name" | "created" | "custom";
export type PortfolioFilter = "all" | "projects" | "preparations" | "favorites";
export type PortfolioScope = "current" | "archive";

export const PORTFOLIO_PREVIEW_LIMIT = 5;
export const PORTFOLIO_PAGE_SIZE = 25;

const VIEWS = new Set<PortfolioView>(["list", "grid", "grouped"]);
const SORTS = new Set<PortfolioSort>(["recent", "name", "created", "custom"]);
const FILTERS = new Set<PortfolioFilter>(["all", "projects", "preparations", "favorites"]);
const PILOT_LOCK = "sfia:d1:organization";

export type PersonalSpace = {
  spaceType: SpaceType;
  id: string;
  label: string;
  createdAt: string;
  lastOpenedAt: string | null;
  favorite: boolean;
  archived: boolean;
  customPosition: number | null;
  rowVersion: number;
  activityLabel: string;
};

export type PersonalBoard = {
  counters: { projects: number; preparations: number; favorites: number };
  groups: { project: number; preparation: number };
  filteredTotal: number;
  preferences: {
    view: PortfolioView;
    sort: PortfolioSort;
    sortExplicit: boolean;
    version: number;
  };
  resume: PersonalSpace | null;
  items: PersonalSpace[];
  nextCursor: string | null;
  scope: PortfolioScope;
  filter: PortfolioFilter;
  query: string;
};

type Row = {
  space_type: SpaceType;
  id: string;
  label: string;
  created_at: string;
  last_opened_at: string | null;
  activity_at: string;
  favorite: boolean;
  archived_at: string | null;
  custom_position: number | null;
  row_version: number;
};

type ReadCursor = {
  sort: PortfolioSort;
  filter: PortfolioFilter;
  query: string;
  scope: PortfolioScope;
  spaceType: SpaceType;
  id: string;
  createdAt: string;
  activityAt: string;
  label: string;
  position: number | null;
};

export function parseSpaceType(value: string): SpaceType {
  if (value === "project" || value === "preparation") return value;
  throw new StudioError("INVALID_REQUEST", "Type d'espace inconnu.", { httpStatus: 400 });
}

/** Insertion index after the moved row has been removed. Null when the target is absent. */
export function destinationIndex(length: number, from: number, before: number): number | null {
  if (from < 0 || from >= length || before < 0 || before >= length) return null;
  if (from === before) return from;
  return from < before ? before - 1 : before;
}

export function acceptNavigationKey(stored: string | null, incoming: string): boolean {
  const key = incoming.trim();
  if (!key || stored === key) return false;
  const next = parseNavigationKey(key);
  const previous = stored ? parseNavigationKey(stored) : null;
  if (next && previous && next.tab === previous.tab && next.seq <= previous.seq) return false;
  return true;
}

function parseNavigationKey(value: string): { tab: string; seq: number } | null {
  const match = /^([0-9a-f-]{8,}):(\d+)$/i.exec(value);
  if (!match) return null;
  return { tab: match[1], seq: Number(match[2]) };
}

function asSpace(row: Row): PersonalSpace {
  const opened = row.last_opened_at;
  return {
    spaceType: row.space_type,
    id: row.id,
    label: row.label || (row.space_type === "preparation" ? "Nouvelle préparation" : "Projet"),
    createdAt: row.created_at,
    lastOpenedAt: opened,
    favorite: row.favorite,
    archived: Boolean(row.archived_at),
    customPosition: row.custom_position,
    rowVersion: row.row_version ?? 0,
    activityLabel: opened ? "Dernière ouverture" : "Créé le",
  };
}

function collectionSql(pilotId: string) {
  return sql`
    SELECT
      'project'::text AS space_type,
      p.id,
      p.name AS label,
      p.created_at,
      to_char(p.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS created_text,
      o.last_opened_at,
      to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS opened_text,
      COALESCE(o.last_opened_at, p.created_at) AS activity_at,
      to_char(COALESCE(o.last_opened_at, p.created_at) AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS activity_text,
      COALESCE(o.favorite, false) AS favorite,
      o.archived_at,
      o.custom_position,
      COALESCE(o.row_version, 0) AS row_version
    FROM projects p
    LEFT JOIN pilot_space_organization o
      ON o.owner_pilot_id = p.owner_pilot_id
     AND o.space_type = 'project'
     AND o.space_id = p.id
    WHERE p.owner_pilot_id = ${pilotId}
    UNION ALL
    SELECT
      'preparation'::text,
      pr.id,
      COALESCE(NULLIF(pr.preview_name, ''), 'Nouvelle préparation'),
      pr.created_at,
      to_char(pr.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
      o.last_opened_at,
      to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
      COALESCE(o.last_opened_at, pr.created_at),
      to_char(COALESCE(o.last_opened_at, pr.created_at) AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
      COALESCE(o.favorite, false),
      o.archived_at,
      o.custom_position,
      COALESCE(o.row_version, 0)
    FROM preparations pr
    LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
    LEFT JOIN pilot_space_organization o
      ON o.owner_pilot_id = pr.owner_pilot_id
     AND o.space_type = 'preparation'
     AND o.space_id = pr.id
    WHERE pr.owner_pilot_id = ${pilotId}
      AND pr.status = 'OPEN'
      AND l.preparation_id IS NULL
  `;
}

function orderSql(sort: PortfolioSort) {
  if (sort === "name") return sql`label ASC, id ASC`;
  if (sort === "custom") return sql`custom_position ASC NULLS LAST, created_at DESC, id DESC`;
  if (sort === "recent") return sql`activity_at DESC, id DESC`;
  return sql`created_at DESC, id DESC`;
}

function keysetSql(cursor: ReadCursor) {
  if (cursor.sort === "name") {
    return sql`AND (label, id) > (${cursor.label}, ${cursor.id})`;
  }
  if (cursor.sort === "custom") {
    const position = cursor.position ?? 2147483647;
    return sql`AND (
      COALESCE(custom_position, 2147483647) > ${position}
      OR (
        COALESCE(custom_position, 2147483647) = ${position}
        AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})
      )
    )`;
  }
  if (cursor.sort === "recent") {
    return sql`AND (activity_at, id) < (${cursor.activityAt}::timestamptz, ${cursor.id})`;
  }
  return sql`AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})`;
}

export async function loadPersonalBoard(
  pilotId: string,
  input?: {
    scope?: string | null;
    filter?: string | null;
    query?: string | null;
    cursor?: string | null;
    preview?: boolean;
  },
): Promise<PersonalBoard> {
  const scope: PortfolioScope = input?.scope === "archive" ? "archive" : "current";
  const filter: PortfolioFilter =
    input?.filter && FILTERS.has(input.filter as PortfolioFilter)
      ? (input.filter as PortfolioFilter)
      : "all";
  const query = (input?.query || "").trim().slice(0, 120);
  const preview = input?.preview !== false && !input?.cursor;
  const limit = preview ? PORTFOLIO_PREVIEW_LIMIT : PORTFOLIO_PAGE_SIZE;
  const needle = query ? `%${query.replace(/[\\%_]/g, (char) => `\\${char}`)}%` : null;

  const pref = await sql<
    { view: string; sort_mode: string | null; organization_version: number }[]
  >`
    SELECT view, sort_mode, organization_version
    FROM pilot_portfolio_preferences
    WHERE owner_pilot_id = ${pilotId}
  `;
  const storedSort = pref[0]?.sort_mode ?? null;
  const sortExplicit = storedSort !== null && SORTS.has(storedSort as PortfolioSort);
  const signal = await sql<{ present: boolean }[]>`
    SELECT EXISTS (
      SELECT 1 FROM (${collectionSql(pilotId)}) spaces
      WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
    ) AS present
  `;
  const sort: PortfolioSort = sortExplicit
    ? (storedSort as PortfolioSort)
    : signal[0]?.present
      ? "recent"
      : "created";

  const counts = await sql<
    { projects: number; preparations: number; favorites: number }[]
  >`
    SELECT
      count(*) FILTER (WHERE space_type = 'project')::int AS projects,
      count(*) FILTER (WHERE space_type = 'preparation')::int AS preparations,
      count(*) FILTER (WHERE favorite)::int AS favorites
    FROM (${collectionSql(pilotId)}) spaces
    WHERE archived_at IS NULL
  `;
  const scopeSql = scope === "archive" ? sql`archived_at IS NOT NULL` : sql`archived_at IS NULL`;
  const filterSql =
    scope === "current" && filter === "projects"
      ? sql`AND space_type = 'project'`
      : scope === "current" && filter === "preparations"
        ? sql`AND space_type = 'preparation'`
        : scope === "current" && filter === "favorites"
          ? sql`AND favorite`
          : sql``;
  const searchSql = needle ? sql`AND label ILIKE ${needle} ESCAPE '\\'` : sql``;
  const cursor = input?.cursor ? decodeCursor(input.cursor) : null;
  if (
    cursor &&
    (cursor.sort !== sort || cursor.filter !== filter || cursor.query !== query || cursor.scope !== scope)
  ) {
    throw new StudioError("INVALID_REQUEST", "Le curseur ne correspond plus à la lecture.", {
      httpStatus: 400,
    });
  }
  const grouped = await sql<{ space_type: SpaceType; n: number }[]>`
    SELECT space_type, count(*)::int AS n
    FROM (${collectionSql(pilotId)}) spaces
    WHERE ${scopeSql} ${filterSql} ${searchSql}
    GROUP BY space_type
  `;
  const filtered = await sql<{ n: number }[]>`
    SELECT count(*)::int AS n
    FROM (${collectionSql(pilotId)}) spaces
    WHERE ${scopeSql} ${filterSql} ${searchSql}
  `;
  const page = await sql<Row[]>`
    SELECT
      space_type, id, label,
      created_text AS created_at,
      opened_text AS last_opened_at,
      activity_text AS activity_at,
      favorite, archived_at, custom_position, row_version
    FROM (${collectionSql(pilotId)}) spaces
    WHERE ${scopeSql} ${filterSql} ${searchSql}
    ${cursor ? keysetSql(cursor) : sql``}
    ORDER BY ${orderSql(sort)}
    LIMIT ${limit + 1}
  `;
  const resumeRows =
    scope === "current"
      ? await sql<Row[]>`
          SELECT
            space_type, id, label,
            created_text AS created_at,
            opened_text AS last_opened_at,
            activity_text AS activity_at,
            favorite, archived_at, custom_position, row_version
          FROM (${collectionSql(pilotId)}) spaces
          WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
          ORDER BY last_opened_at DESC, id DESC
          LIMIT 1
        `
      : [];
  const hasMore = page.length > limit;
  const items = (hasMore ? page.slice(0, limit) : page).map(asSpace);
  const last = page[Math.min(page.length, limit) - 1];
  return {
    counters: {
      projects: counts[0]?.projects ?? 0,
      preparations: counts[0]?.preparations ?? 0,
      favorites: counts[0]?.favorites ?? 0,
    },
    groups: {
      project: grouped.find((row) => row.space_type === "project")?.n ?? 0,
      preparation: grouped.find((row) => row.space_type === "preparation")?.n ?? 0,
    },
    filteredTotal: filtered[0]?.n ?? 0,
    preferences: {
      view: VIEWS.has(pref[0]?.view as PortfolioView) ? (pref[0]?.view as PortfolioView) : "list",
      sort,
      sortExplicit,
      version: pref[0]?.organization_version ?? 0,
    },
    resume: resumeRows[0] ? asSpace(resumeRows[0]) : null,
    items,
    nextCursor:
      hasMore && last
        ? encodeCursor({
            sort,
            filter,
            query,
            scope,
            spaceType: last.space_type,
            id: last.id,
            createdAt: last.created_at,
            activityAt: last.activity_at,
            label: last.label,
            position: last.custom_position,
          })
        : null,
    scope,
    filter,
    query,
  };
}

function encodeCursor(value: ReadCursor): string {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function decodeCursor(raw: string): ReadCursor {
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as Partial<ReadCursor>;
    if (!parsed.sort || !parsed.filter || !parsed.scope || !parsed.spaceType || !parsed.id || !parsed.createdAt) {
      throw new Error("shape");
    }
    return {
      sort: parsed.sort,
      filter: parsed.filter,
      query: parsed.query || "",
      scope: parsed.scope,
      spaceType: parsed.spaceType,
      id: parsed.id,
      createdAt: parsed.createdAt,
      activityAt: parsed.activityAt || parsed.createdAt,
      label: parsed.label || "",
      position: parsed.position ?? null,
    };
  } catch {
    throw new StudioError("INVALID_REQUEST", "Curseur de portefeuille invalide.", { httpStatus: 400 });
  }
}

async function lockPilot(tx: typeof sql, pilotId: string) {
  await tx`SELECT pg_advisory_xact_lock(hashtext(${pilotId}), hashtext(${PILOT_LOCK}))`;
}

async function assertEligible(tx: typeof sql, pilotId: string, spaceType: SpaceType, spaceId: string) {
  if (spaceType === "project") {
    const rows = await tx<{ id: string }[]>`
      SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
    `;
    if (!rows[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
    return;
  }
  const rows = await tx<{ id: string }[]>`
    SELECT pr.id
    FROM preparations pr
    LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
    WHERE pr.id = ${spaceId}
      AND pr.owner_pilot_id = ${pilotId}
      AND pr.status = 'OPEN'
      AND l.preparation_id IS NULL
  `;
  if (!rows[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
}

export async function updatePortfolioPreferences(
  pilotId: string,
  input: { view?: PortfolioView; sort?: PortfolioSort | null; expectedVersion: number },
) {
  if (input.view && !VIEWS.has(input.view)) {
    throw new StudioError("INVALID_REQUEST", "Vue inconnue.", { httpStatus: 400 });
  }
  if (input.sort && !SORTS.has(input.sort)) {
    throw new StudioError("INVALID_REQUEST", "Tri inconnu.", { httpStatus: 400 });
  }
  return sql.begin(async (tx) => {
    await lockPilot(tx, pilotId);
    const current = await tx<{ organization_version: number }[]>`
      SELECT organization_version FROM pilot_portfolio_preferences
      WHERE owner_pilot_id = ${pilotId}
      FOR UPDATE
    `;
    const version = current[0]?.organization_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "Les préférences ont changé. Relisez le portefeuille.", {
        httpStatus: 409,
      });
    }
    const next = version + 1;
    if (!current[0]) {
      await tx`
        INSERT INTO pilot_portfolio_preferences (owner_pilot_id, view, sort_mode, organization_version)
        VALUES (${pilotId}, ${input.view ?? "list"}, ${input.sort ?? null}, ${next})
      `;
    } else {
      await tx`
        UPDATE pilot_portfolio_preferences
        SET view = COALESCE(${input.view ?? null}, view),
            sort_mode = CASE WHEN ${input.sort === undefined} THEN sort_mode ELSE ${input.sort ?? null} END,
            organization_version = ${next},
            updated_at = now()
        WHERE owner_pilot_id = ${pilotId}
      `;
    }
    return { version: next };
  });
}

export async function setSpaceFavorite(
  pilotId: string,
  spaceType: SpaceType,
  spaceId: string,
  input: { favorite: boolean; expectedVersion: number },
) {
  return sql.begin(async (tx) => {
    await lockPilot(tx, pilotId);
    await assertEligible(tx, pilotId, spaceType, spaceId);
    const current = await tx<{ row_version: number }[]>`
      SELECT row_version FROM pilot_space_organization
      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
      FOR UPDATE
    `;
    const version = current[0]?.row_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "Ce favori a changé. Relisez le portefeuille.", {
        httpStatus: 409,
      });
    }
    const next = version + 1;
    await tx`
      INSERT INTO pilot_space_organization (owner_pilot_id, space_type, space_id, favorite, row_version)
      VALUES (${pilotId}, ${spaceType}, ${spaceId}, ${input.favorite}, ${next})
      ON CONFLICT (owner_pilot_id, space_type, space_id)
      DO UPDATE SET favorite = ${input.favorite}, row_version = ${next}
    `;
    return { rowVersion: next, favorite: input.favorite };
  });
}

export async function setSpaceArchive(
  pilotId: string,
  spaceType: SpaceType,
  spaceId: string,
  input: { archived: boolean; expectedVersion: number; confirm: boolean },
) {
  if (input.confirm !== true) {
    throw new StudioError("INVALID_REQUEST", "Confirmation requise.", { httpStatus: 400 });
  }
  return sql.begin(async (tx) => {
    await lockPilot(tx, pilotId);
    await assertEligible(tx, pilotId, spaceType, spaceId);
    const current = await tx<{ row_version: number; custom_position: number | null }[]>`
      SELECT row_version, custom_position FROM pilot_space_organization
      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
      FOR UPDATE
    `;
    const version = current[0]?.row_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "L'organisation de cet espace a changé.", { httpStatus: 409 });
    }
    const next = version + 1;
    if (!input.archived && current[0]?.custom_position != null) {
      await tx`
        UPDATE pilot_space_organization
        SET custom_position = custom_position + 1
        WHERE owner_pilot_id = ${pilotId}
          AND archived_at IS NULL
          AND custom_position IS NOT NULL
          AND custom_position >= ${current[0].custom_position}
          AND NOT (space_type = ${spaceType} AND space_id = ${spaceId})
      `;
    }
    await tx`
      INSERT INTO pilot_space_organization (
        owner_pilot_id, space_type, space_id, archived_at, row_version
      )
      VALUES (
        ${pilotId}, ${spaceType}, ${spaceId},
        CASE WHEN ${input.archived} THEN now() ELSE NULL END,
        ${next}
      )
      ON CONFLICT (owner_pilot_id, space_type, space_id)
      DO UPDATE SET
        archived_at = CASE WHEN ${input.archived} THEN now() ELSE NULL END,
        row_version = ${next}
    `;
    return { rowVersion: next, archived: input.archived };
  });
}

export async function recordSpaceOpened(
  pilotId: string,
  spaceType: SpaceType,
  spaceId: string,
  navigationKey: string,
) {
  const key = navigationKey.trim().slice(0, 180);
  if (!key) throw new StudioError("INVALID_REQUEST", "Clé de navigation absente.", { httpStatus: 400 });
  return sql.begin(async (tx) => {
    await lockPilot(tx, pilotId);
    await assertEligible(tx, pilotId, spaceType, spaceId);
    const current = await tx<{ archived_at: string | null; navigation_key: string | null }[]>`
      SELECT archived_at, navigation_key FROM pilot_space_organization
      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
      FOR UPDATE
    `;
    if (current[0]?.archived_at) return { applied: false, reason: "archived" };
    if (!acceptNavigationKey(current[0]?.navigation_key ?? null, key)) {
      return { applied: false, reason: "duplicate" };
    }
    await tx`
      INSERT INTO pilot_space_organization (
        owner_pilot_id, space_type, space_id, last_opened_at, navigation_key
      )
      VALUES (${pilotId}, ${spaceType}, ${spaceId}, now(), ${key})
      ON CONFLICT (owner_pilot_id, space_type, space_id)
      DO UPDATE SET last_opened_at = now(), navigation_key = ${key}
      WHERE pilot_space_organization.archived_at IS NULL
    `;
    return { applied: true };
  });
}

export async function movePersonalSpace(
  pilotId: string,
  input: {
    spaceType: SpaceType;
    spaceId: string;
    expectedVersion: number;
    direction?: "up" | "down";
    beforeSpaceId?: string | null;
    beforeSpaceType?: SpaceType | null;
    context?: { filter?: string; query?: string; scope?: string };
  },
) {
  const context = input.context || {};
  if (context.scope === "archive" || context.filter !== "all" || (context.query || "").trim()) {
    throw new StudioError(
      "CONFLICT",
      "L'ordre personnalisé se modifie sur la collection complète, sans recherche ni filtre.",
      { httpStatus: 409 },
    );
  }
  return sql.begin(async (tx) => {
    await lockPilot(tx, pilotId);
    await assertEligible(tx, pilotId, input.spaceType, input.spaceId);
    const pref = await tx<{ organization_version: number }[]>`
      SELECT organization_version FROM pilot_portfolio_preferences
      WHERE owner_pilot_id = ${pilotId}
      FOR UPDATE
    `;
    const version = pref[0]?.organization_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "L'ordre a changé. Relisez le portefeuille.", { httpStatus: 409 });
    }
    const rows = await tx<Row[]>`
      SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
             activity_text AS activity_at, favorite, archived_at, custom_position, row_version
      FROM (${collectionSql(pilotId)}) spaces
      WHERE archived_at IS NULL
      ORDER BY custom_position ASC NULLS LAST, created_at DESC, id DESC
    `;
    const from = rows.findIndex((row) => row.space_type === input.spaceType && row.id === input.spaceId);
    if (from < 0) {
      throw new StudioError("NOT_FOUND", "Espace introuvable dans la collection courante.", { httpStatus: 404 });
    }
    let insertAt = from;
    if (input.direction === "up") insertAt = Math.max(0, from - 1);
    if (input.direction === "down") insertAt = Math.min(rows.length - 1, from + 1);
    if (input.beforeSpaceId) {
      const found = rows.findIndex(
        (row) => row.id === input.beforeSpaceId && row.space_type === (input.beforeSpaceType || row.space_type),
      );
      if (found < 0) {
        throw new StudioError("CONFLICT", "La cible de déplacement n'est plus dans la collection.", {
          httpStatus: 409,
        });
      }
      const resolved = destinationIndex(rows.length, from, found);
      if (resolved === null) {
        throw new StudioError("CONFLICT", "Déplacement impossible.", { httpStatus: 409 });
      }
      insertAt = resolved;
    } else if (input.beforeSpaceId === null && input.direction === undefined) {
      insertAt = rows.length - 1;
    }
    const movingDown = Boolean(input.direction === "down" && insertAt > from);
    const [item] = rows.splice(from, 1);
    const slot = input.beforeSpaceId ? insertAt : movingDown ? Math.min(rows.length, from + 1) : insertAt;
    const moved = slot !== from;
    if (moved) rows.splice(slot, 0, item);
    else rows.splice(from, 0, item);
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      await tx`
        INSERT INTO pilot_space_organization (
          owner_pilot_id, space_type, space_id, custom_position
        )
        VALUES (${pilotId}, ${row.space_type}, ${row.id}, ${i + 1})
        ON CONFLICT (owner_pilot_id, space_type, space_id)
        DO UPDATE SET custom_position = ${i + 1}
      `;
    }
    const next = version + 1;
    if (!pref[0]) {
      await tx`
        INSERT INTO pilot_portfolio_preferences (owner_pilot_id, sort_mode, organization_version)
        VALUES (${pilotId}, 'custom', ${next})
      `;
    } else {
      await tx`
        UPDATE pilot_portfolio_preferences
        SET sort_mode = 'custom', organization_version = ${next}, updated_at = now()
        WHERE owner_pilot_id = ${pilotId}
      `;
    }
    return { version: next, moved };
  });
}

export async function listFavoriteSpaces(pilotId: string): Promise<PersonalSpace[]> {
  const rows = await sql<Row[]>`
    SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
           activity_text AS activity_at, favorite, archived_at, custom_position, row_version
    FROM (${collectionSql(pilotId)}) spaces
    WHERE favorite AND archived_at IS NULL
    ORDER BY label ASC, id ASC
  `;
  return rows.map(asSpace);
}
