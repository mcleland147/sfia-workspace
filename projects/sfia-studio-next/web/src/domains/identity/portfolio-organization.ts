import { sql } from "@/db/client";
import { StudioError } from "@/lib/http-errors";

export type SpaceType = "project" | "preparation";
export type PortfolioView = "list" | "grid" | "grouped";
export type PortfolioSort = "recent" | "name" | "created" | "custom";
export type PortfolioFilter = "all" | "projects" | "preparations" | "favorites";
export type PortfolioScope = "current" | "archive";

export function parseSpaceType(value: string): SpaceType {
  if (value === "project" || value === "preparation") return value;
  throw new StudioError("INVALID_REQUEST", "Type d'espace inconnu.", { httpStatus: 400 });
}

export const PORTFOLIO_PREVIEW_LIMIT = 5;
export const PORTFOLIO_PAGE_SIZE = 25;

const VIEWS = new Set<PortfolioView>(["list", "grid", "grouped"]);
const SORTS = new Set<PortfolioSort>(["recent", "name", "created", "custom"]);
const FILTERS = new Set<PortfolioFilter>(["all", "projects", "preparations", "favorites"]);

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
  favorite: boolean;
  archived_at: string | null;
  custom_position: number | null;
  row_version: number;
};

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

function parseView(value: string | null | undefined): PortfolioView {
  return value && VIEWS.has(value as PortfolioView) ? (value as PortfolioView) : "list";
}

function collectionSql(pilotId: string) {
  return sql`
    SELECT * FROM (
      SELECT
        'project'::text AS space_type,
        p.id,
        p.name AS label,
        to_char(p.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS created_at,
        to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS last_opened_at,
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
        to_char(pr.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
        to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
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
    ) spaces
  `;
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

  const pref = await sql<
    { view: string; sort_mode: string | null; organization_version: number }[]
  >`
    SELECT view, sort_mode, organization_version
    FROM pilot_portfolio_preferences
    WHERE owner_pilot_id = ${pilotId}
  `;
  const storedSort = pref[0]?.sort_mode ?? null;
  const sortExplicit = storedSort !== null && SORTS.has(storedSort as PortfolioSort);
  const rows = await sql<Row[]>`${collectionSql(pilotId)}`;
  const current = rows.filter((row) => !row.archived_at);
  const hasSignal = current.some((row) => row.last_opened_at);
  const sort: PortfolioSort = sortExplicit
    ? (storedSort as PortfolioSort)
    : hasSignal
      ? "recent"
      : "created";

  const counters = {
    projects: current.filter((row) => row.space_type === "project").length,
    preparations: current.filter((row) => row.space_type === "preparation").length,
    favorites: current.filter((row) => row.favorite).length,
  };

  let pool = rows.filter((row) => (scope === "archive" ? Boolean(row.archived_at) : !row.archived_at));
  if (scope === "current") {
    if (filter === "projects") pool = pool.filter((row) => row.space_type === "project");
    if (filter === "preparations") pool = pool.filter((row) => row.space_type === "preparation");
    if (filter === "favorites") pool = pool.filter((row) => row.favorite);
  }
  if (query) {
    const needle = query.toLocaleLowerCase("fr");
    pool = pool.filter((row) => row.label.toLocaleLowerCase("fr").includes(needle));
  }
  pool.sort((a, b) => compareSpaces(a, b, sort));

  const cursor = input?.cursor ? decodeCursor(input.cursor) : null;
  if (cursor && (cursor.sort !== sort || cursor.filter !== filter || cursor.query !== query || cursor.scope !== scope)) {
    throw new StudioError("INVALID_REQUEST", "Le curseur ne correspond plus à la lecture.", {
      httpStatus: 400,
    });
  }
  const start = cursor ? pool.findIndex((row) => row.space_type === cursor.spaceType && row.id === cursor.id) + 1 : 0;
  if (cursor && start <= 0) {
    throw new StudioError("INVALID_REQUEST", "Curseur de portefeuille invalide.", { httpStatus: 400 });
  }
  const page = pool.slice(start, start + limit);
  const more = start + limit < pool.length;
  const last = page[page.length - 1];
  const resumeRow =
    scope === "current"
      ? current
          .filter((row) => row.last_opened_at)
          .sort((a, b) => compareSpaces(a, b, "recent"))[0] ?? null
      : null;

  return {
    counters,
    filteredTotal: pool.length,
    preferences: {
      view: parseView(pref[0]?.view),
      sort,
      sortExplicit,
      version: pref[0]?.organization_version ?? 0,
    },
    resume: resumeRow ? asSpace(resumeRow) : null,
    items: page.map(asSpace),
    nextCursor:
      more && last
        ? encodeCursor({ sort, filter, query, scope, spaceType: last.space_type, id: last.id })
        : null,
    scope,
    filter,
    query,
  };
}

function compareSpaces(a: Row, b: Row, sort: PortfolioSort): number {
  if (sort === "name") {
    const byName = a.label.localeCompare(b.label, "fr", { sensitivity: "base" });
    return byName || a.id.localeCompare(b.id);
  }
  if (sort === "custom") {
    const ap = a.custom_position ?? Number.MAX_SAFE_INTEGER;
    const bp = b.custom_position ?? Number.MAX_SAFE_INTEGER;
    if (ap !== bp) return ap - bp;
  }
  if (sort === "recent") {
    const ak = a.last_opened_at || a.created_at;
    const bk = b.last_opened_at || b.created_at;
    if (ak !== bk) return ak < bk ? 1 : -1;
  }
  if (a.created_at !== b.created_at) return a.created_at < b.created_at ? 1 : -1;
  return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
}

function encodeCursor(value: {
  sort: PortfolioSort;
  filter: PortfolioFilter;
  query: string;
  scope: PortfolioScope;
  spaceType: SpaceType;
  id: string;
}): string {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function decodeCursor(raw: string): {
  sort: PortfolioSort;
  filter: PortfolioFilter;
  query: string;
  scope: PortfolioScope;
  spaceType: SpaceType;
  id: string;
} {
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as {
      sort?: PortfolioSort;
      filter?: PortfolioFilter;
      query?: string;
      scope?: PortfolioScope;
      spaceType?: SpaceType;
      id?: string;
    };
    if (!parsed.sort || !parsed.filter || !parsed.scope || !parsed.spaceType || !parsed.id) {
      throw new Error("shape");
    }
    return {
      sort: parsed.sort,
      filter: parsed.filter,
      query: parsed.query || "",
      scope: parsed.scope,
      spaceType: parsed.spaceType,
      id: parsed.id,
    };
  } catch {
    throw new StudioError("INVALID_REQUEST", "Curseur de portefeuille invalide.", { httpStatus: 400 });
  }
}

async function assertEligible(pilotId: string, spaceType: SpaceType, spaceId: string) {
  if (spaceType === "project") {
    const rows = await sql<{ id: string }[]>`
      SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
    `;
    if (!rows[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
    return;
  }
  const rows = await sql<{ id: string }[]>`
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
  await assertEligible(pilotId, spaceType, spaceId);
  return sql.begin(async (tx) => {
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
  await assertEligible(pilotId, spaceType, spaceId);
  return sql.begin(async (tx) => {
    const current = await tx<{ row_version: number }[]>`
      SELECT row_version FROM pilot_space_organization
      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
      FOR UPDATE
    `;
    const version = current[0]?.row_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "L'organisation de cet espace a changé.", { httpStatus: 409 });
    }
    const next = version + 1;
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
  await assertEligible(pilotId, spaceType, spaceId);
  const archived = await sql<{ archived_at: string | null; navigation_key: string | null }[]>`
    SELECT archived_at, navigation_key FROM pilot_space_organization
    WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
  `;
  if (archived[0]?.archived_at) return { applied: false, reason: "archived" };
  if (archived[0]?.navigation_key === key) return { applied: false, reason: "duplicate" };
  await sql`
    INSERT INTO pilot_space_organization (
      owner_pilot_id, space_type, space_id, last_opened_at, navigation_key
    )
    VALUES (${pilotId}, ${spaceType}, ${spaceId}, now(), ${key})
    ON CONFLICT (owner_pilot_id, space_type, space_id)
    DO UPDATE SET
      last_opened_at = GREATEST(pilot_space_organization.last_opened_at, now()),
      navigation_key = ${key}
    WHERE pilot_space_organization.archived_at IS NULL
      AND pilot_space_organization.navigation_key IS DISTINCT FROM ${key}
  `;
  return { applied: true };
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
  },
) {
  await assertEligible(pilotId, input.spaceType, input.spaceId);
  return sql.begin(async (tx) => {
    const pref = await tx<{ organization_version: number }[]>`
      SELECT organization_version FROM pilot_portfolio_preferences
      WHERE owner_pilot_id = ${pilotId}
      FOR UPDATE
    `;
    const version = pref[0]?.organization_version ?? 0;
    if (version !== input.expectedVersion) {
      throw new StudioError("CONFLICT", "L'ordre a changé. Relisez le portefeuille.", { httpStatus: 409 });
    }
    const rows = await tx<Row[]>`${collectionSql(pilotId)}`;
    const current = rows.filter((row) => !row.archived_at).sort((a, b) => compareSpaces(a, b, "custom"));
    const from = current.findIndex((row) => row.space_type === input.spaceType && row.id === input.spaceId);
    if (from < 0) throw new StudioError("NOT_FOUND", "Espace introuvable dans la collection courante.", { httpStatus: 404 });
    let to = from;
    if (input.direction === "up") to = Math.max(0, from - 1);
    if (input.direction === "down") to = Math.min(current.length - 1, from + 1);
    if (input.beforeSpaceId) {
      const before = current.findIndex(
        (row) => row.id === input.beforeSpaceId && row.space_type === (input.beforeSpaceType || row.space_type),
      );
      if (before >= 0) to = before;
    } else if (input.beforeSpaceId === null && input.direction === undefined) {
      to = current.length - 1;
    }
    const [item] = current.splice(from, 1);
    current.splice(to, 0, item);
    for (let i = 0; i < current.length; i += 1) {
      const row = current[i];
      await tx`
        INSERT INTO pilot_space_organization (
          owner_pilot_id, space_type, space_id, custom_position, row_version
        )
        VALUES (${pilotId}, ${row.space_type}, ${row.id}, ${i + 1}, 1)
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
    return { version: next };
  });
}

export async function listFavoriteSpaces(pilotId: string): Promise<PersonalSpace[]> {
  const rows = await sql<Row[]>`${collectionSql(pilotId)}`;
  return rows
    .filter((row) => row.favorite && !row.archived_at)
    .sort((a, b) => compareSpaces(a, b, "name"))
    .slice(0, 12)
    .map(asSpace);
}
