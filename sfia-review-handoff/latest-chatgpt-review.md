# Review Pack — SFIA Studio Next — Mandat 1 Portefeuille personnel et navigation

Date : 28 novembre 2026, Europe/Paris.
Cycle : 08 Delivery / implémentation. Profil Standard. Typologie EVOL.
Périmètre : P01–P10. Mandats 2 à 6 non engagés.

## Identité Git

- Dépôt : mcleland147/sfia-workspace
- Branche : sfia/next-ml5-integrated-delivery-20261123
- HEAD initial : d215a5272025b2d1c7aa8391dd14f6442ea512fe
- Tree initial : c5bab24132c7c745d6ddff0ba76dc8d5424ea13c
- origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25
- Commit 1 : e8022d5893271907e66783a9ddc7a9da7a25f097 — feat(next): add personal portfolio and navigation
- HEAD final : c0be75b23ce0c2b738b5a6b32efc9ac4494cea5e — fix(next): ignore stale portfolio responses
- Tree final : 56aa418960f5565c42d0e3c067cb6dcc4e3beaa1
- Parent du HEAD : e8022d5893271907e66783a9ddc7a9da7a25f097
- Push fast-forward : d215a527..c0be75b2
- CI distante : aucune exécution observée sur la branche après push
- BUILD_ID servi : q1Wg2CIGLqtVA7n-qmvbb
- Lane : DEV, port 3100, PostgreSQL 5433, base sfia_next_dev
- Schéma : 028_pilot_portfolio_organization
- RECETTE : port 3200, PID 58965, non modifié

## Sources

Contrats lus par blob après fetch des commits documentaires, sans merge :
- fonctionnel b9707204
- UX 403a2e90
- technique 8bb2205e, notamment les sections 7 et 8
- suivi v0.21, blob c14e2ffb, non modifié
Figma : file itgvCulInEnFY6DvgIegvP, page 1417:6, frame 1420:176 et synthèse 1420:250.
Code d'entrée lu : portefeuille, shell, schéma, migration jusqu'à 027, test portfolio-a1.

## G2

La liste nominale mesure 1680×970, rail 246, bandeau 70, contenu 1434×900, synthèse 1354×136, reprise 1354×158, lignes de 50 px.
Couleurs relevées : panneau #151d2c, filet #273248, encre #f2f4fc, secondaire #a5b1c5.
Les données de démonstration Figma ne sont pas utilisées. Sans ouverture attestée, la carte de reprise est absente.
La mesure F2 des 27 états n'a pas été exécutée.

## G3

Deux tables additives. Aucune colonne d'archive ou de suppression sur les racines métier.
Le tri non explicite reste la date de création tant qu'aucune ouverture n'existe, puis l'activité récente. Un choix explicite n'est pas écrasé.
L'ordre personnalisé réécrit des positions entières et refuse une version périmée.
Le GET ne crée pas de préférence.

## Migration

027 confirmé sur sfia_next_e2e et sfia_next_dev par la présence de derived_embedding_chunks.
028 appliqué d'abord sur E2E, rejoué sans erreur, puis sur DEV.
Sauvegarde DEV : .tmp-sfia-review/sfia-next-dev-pre-028.dump, 2664030 octets, non versionnée.
Restauration isolée : base sfia_next_restore_drill, 233 projets relus, table d'organisation absente du dump, base ensuite supprimée.
Après migration, DEV conserve 233 projets et 265 préparations.

## Preuves

PostgreSQL E2E, 5 tests : portfolio-a1 2 PASS, portfolio-organization 3 PASS.
Couvert : isolation, 100 projets, recherche hors première page, GET non mutateur, favori, conflit de version, archive sans changement du nom projet, restauration, ordre et tri explicite.
HTTP DEV : Pilote A 220 projets, 32 préparations, 0 favori, aperçu 5 sur 252, tri created, pas de reprise. Pilote B 0/0/0. Anonyme 401 SESSION_INVALID. Cache private, no-store.
Navigateur DEV : connexion Pilote A, tableau réel, filtre Favoris vide, retour à Tout, 5 espaces affichés, bouton Nouveau projet présent. Aucune création lancée.
tsc --noEmit : erreurs préexistantes hors périmètre, aucune dans les fichiers du portefeuille.
next build : PASS. BUILD_ID q1Wg2CIGLqtVA7n-qmvbb.

## Matrice

| ID | Verdict | Preuve | Réserve |
| --- | --- | --- | --- |
| P01 | BEHAVIOR PROVEN HTTP/BROWSER | compteurs 220/32/0, pas de plafond | F2 non mesuré |
| P02 | BEHAVIOR PROVEN PG | signal, dédoublonnage, reprise masquée | ouverture réelle non cliquée sur DEV |
| P03 | BEHAVIOR PROVEN PG | vue grid persistée | grille et groupes non recliqués après correction |
| P04 | BEHAVIOR PROVEN BROWSER | 5 sur 252 | pagination non cliquée |
| P05 | BEHAVIOR PROVEN PG + BROWSER | recherche PG, favoris vides, réponses périmées ignorées | saisie de recherche non rejouée après correction |
| P06 | BEHAVIOR PROVEN PG | ordre et conflit 409 | glisser-déposer et clavier non exercés au navigateur |
| P07 | BEHAVIOR PROVEN PG | favori et version | rail non peuplé sur DEV |
| P08 | BEHAVIOR PROVEN PG/HTTP | persistance E2E, isolation A/B | pas de second navigateur physique |
| P09 | BEHAVIOR PROVEN PG | archive et restauration, nom projet inchangé | dialogue non ouvert au navigateur |
| P10 | PARTIAL | shell, 401, bouton de création | viewports 1280/390/320 et zoom 200 non mesurés |

PF-A01, PF-A02, PF-A03, PF-A05, PF-A07 et PF-A08 sont couverts par cette matrice pour le présent mandat. PF-A04 et PF-A06 restent hors scope.

## Réserves

1. Fidélité F2 des 27 états : NOT RUN. Sortie : passe visuelle bornée sur le candidat publié.
2. Responsive et zoom : NOT RUN. Sortie : même passe.
3. Glisser-déposer, clavier et dialogue d'archive : implémentés, non exercés dans le navigateur. Sortie : parcours B et E sur E2E.
Ces réserves ne changent pas les données métier historiques. Aucune décision Morris supplémentaire n'est requise pour le modèle retenu.

## Verdict proposé

READY WITH RESERVES

R5 IN PROGRESS. ML5 OPEN. Livraison 1 NOT ACCEPTED. Gate C OPEN. NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.
Mandat 2 non engagé.

## Fichiers créés


### projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md

```
# As-built — Portefeuille personnel et navigation

Date : 28 novembre 2026. Mandat 1. Classe NO RELEASE.

## G2

Page Figma 14, file `itgvCulInEnFY6DvgIegvP`, session `2145537b-caa2-4645-81f0-0574d451d8a5`.
La liste nominale `1420:176` mesure 1680×970, rail 246, bandeau 70, contenu 1434×900, synthèse 1354×136, reprise 1354×158, lignes de 50 px.
La synthèse `1420:250` utilise le panneau `#151d2c`, le filet `#273248`, l'encre `#f2f4fc` et le texte secondaire `#a5b1c5`.
Les compteurs de démonstration Figma ne sont pas des données produit. Sans signal d'ouverture, la carte de reprise est absente. L'archive est personnelle et ne met rien en lecture seule.

Les 27 états applicables sont construits par la même surface. La mesure F2 des 27 références n'est pas une preuve de ce cycle.

## G3

Deux tables additives, sans colonne sur `projects` ni `preparations` :

- `pilot_portfolio_preferences` : vue, tri explicite, version d'organisation.
- `pilot_space_organization` : favori, archive, dernière ouverture, clé de navigation, position.

Un tri non enregistré affiche l'activité récente dès qu'une ouverture existe, sinon la date de création. Un tri choisi reste celui du Pilote.
L'ordre personnalisé réécrit des positions entières sur la collection courante, dans une transaction, et refuse une version périmée.
Le GET ne crée aucune préférence. Une préparation rattachée sort de la projection autonome. Son favori n'est pas transféré.

## Signal d'ouverture

Le signal est envoyé par la page de préparation ou de projet après admission, une fois par navigation.
Un rechargement, la même clé, ou un espace archivé ne changent pas l'horodatage. L'échec du signal ne bloque pas la page.

## Migration

`028_pilot_portfolio_organization.sql`. Le runner historique reste inchangé de 001 à 027.
027 était présent sur `sfia_next_e2e` et `sfia_next_dev` avant application.
La migration a été rejouée sur E2E. DEV a été sauvegardé, puis migré. Le contrôle de restauration a relu 233 projets sur une base isolée ensuite supprimée.
Après migration, DEV conserve 233 projets et 265 préparations.

## Hors de ce mandat

Renommage, suppression, nommage Nora, journal, compositeur, FinOps et dictée ne sont pas activés. Les actions de renommage et de suppression sont affichées indisponibles.
```


### projects/sfia-studio-next/web/src/db/migrations/028_pilot_portfolio_organization.sql

```
-- D1 personal portfolio organization. Additive. No business-root columns.
-- Does not archive, delete, or lock projects or preparations.

CREATE TABLE IF NOT EXISTS pilot_portfolio_preferences (
  owner_pilot_id text PRIMARY KEY REFERENCES pilots(id),
  view text NOT NULL DEFAULT 'list',
  sort_mode text,
  organization_version integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT pilot_portfolio_preferences_view_chk
    CHECK (view IN ('list', 'grid', 'grouped')),
  CONSTRAINT pilot_portfolio_preferences_sort_chk
    CHECK (sort_mode IS NULL OR sort_mode IN ('recent', 'name', 'created', 'custom'))
);

CREATE TABLE IF NOT EXISTS pilot_space_organization (
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  space_type text NOT NULL,
  space_id text NOT NULL,
  favorite boolean NOT NULL DEFAULT false,
  archived_at timestamptz,
  last_opened_at timestamptz,
  navigation_key text,
  custom_position integer,
  row_version integer NOT NULL DEFAULT 0,
  PRIMARY KEY (owner_pilot_id, space_type, space_id),
  CONSTRAINT pilot_space_organization_type_chk
    CHECK (space_type IN ('project', 'preparation'))
);

CREATE INDEX IF NOT EXISTS pilot_space_organization_owner_idx
  ON pilot_space_organization (owner_pilot_id);
```


### projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts

```
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
```


### projects/sfia-studio-next/web/src/app/api/portfolio/favorites/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listFavoriteSpaces } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET() {
  try {
    const session = await requireStudioSession();
    const favorites = await listFavoriteSpaces(session.pilotId);
    return NextResponse.json(
      { favorites },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### projects/sfia-studio-next/web/src/app/api/portfolio/order/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { movePersonalSpace, parseSpaceType } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json()) as {
      spaceType?: string;
      spaceId?: string;
      expectedVersion?: number;
      direction?: "up" | "down";
      beforeSpaceId?: string | null;
      beforeSpaceType?: string | null;
    };
    if (!body.spaceType || !body.spaceId || !Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await movePersonalSpace(session.pilotId, {
      spaceType: parseSpaceType(body.spaceType),
      spaceId: body.spaceId,
      expectedVersion: body.expectedVersion as number,
      direction: body.direction,
      beforeSpaceId: body.beforeSpaceId,
      beforeSpaceType: body.beforeSpaceType ? parseSpaceType(body.beforeSpaceType) : null,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
```


### projects/sfia-studio-next/web/src/app/api/portfolio/preferences/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { updatePortfolioPreferences, type PortfolioSort, type PortfolioView } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function PATCH(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json()) as {
      view?: PortfolioView;
      sort?: PortfolioSort | null;
      expectedVersion?: number;
    };
    if (!Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await updatePortfolioPreferences(session.pilotId, {
      view: body.view,
      sort: body.sort,
      expectedVersion: body.expectedVersion as number,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
```


### projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/favorite/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, setSpaceFavorite } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json()) as { favorite?: boolean; expectedVersion?: number };
    if (typeof body.favorite !== "boolean" || !Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await setSpaceFavorite(session.pilotId, parseSpaceType(type), id, {
      favorite: body.favorite,
      expectedVersion: body.expectedVersion as number,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
```


### projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/archive/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, setSpaceArchive } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json()) as {
      archived?: boolean;
      expectedVersion?: number;
      confirm?: boolean;
    };
    if (typeof body.archived !== "boolean" || !Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await setSpaceArchive(session.pilotId, parseSpaceType(type), id, {
      archived: body.archived,
      expectedVersion: body.expectedVersion as number,
      confirm: body.confirm === true,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
```


### projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/opened/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, recordSpaceOpened } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json()) as { navigationKey?: string };
    const result = await recordSpaceOpened(
      session.pilotId,
      parseSpaceType(type),
      id,
      body.navigationKey || "",
    );
    return NextResponse.json(
      { ok: true, ...result },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx

```
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
import "./personal-portfolio.css";

type BoardResponse = {
  board?: PersonalBoard;
  error?: string;
};

function formatCount(value: number | null): string {
  if (value === null) return "…";
  return value < 10 ? String(value).padStart(2, "0") : String(value);
}

function formatWhen(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function hrefFor(space: PersonalSpace): string {
  return space.spaceType === "project"
    ? `/projects/${space.id}?surface=travail`
    : `/preparations/${space.id}?resume=1`;
}

export function PersonalPortfolio() {
  const router = useRouter();
  const [board, setBoard] = useState<PersonalBoard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [uncertain, setUncertain] = useState("");
  const [creating, setCreating] = useState(false);
  const [pending, setPending] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PortfolioFilter>("all");
  const [scope, setScope] = useState<"current" | "archive">("current");
  const [expanded, setExpanded] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
  const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
  const requestSeq = useRef(0);

  useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

  const load = useCallback(async (cursor?: string | null) => {
    const requestId = ++requestSeq.current;
    const params = new URLSearchParams();
    if (scope === "archive") params.set("scope", "archive");
    if (filter !== "all") params.set("filter", filter);
    if (query.trim()) params.set("q", query.trim());
    if (expanded) params.set("expanded", "1");
    if (cursor) params.set("cursor", cursor);
    const response = await fetch(`/api/portfolio?${params.toString()}`);
    if (requestId !== requestSeq.current) return;
    const body = (await response.json()) as BoardResponse;
    if (requestId !== requestSeq.current) return;
    if (response.status === 401) {
      router.push("/login");
      return;
    }
    if (!response.ok || !body.board) {
      setError(body.error || "Lecture du portefeuille impossible.");
      setLoading(false);
      return;
    }
    setBoard((prev) =>
      cursor && prev ? { ...body.board!, items: [...prev.items, ...body.board!.items] } : body.board!,
    );
    setError("");
    setLoading(false);
  }, [expanded, filter, query, router, scope]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setLoading(true);
      void load();
    }, 180);
    return () => clearTimeout(handle);
  }, [load]);

  async function mutate(path: string, method: string, payload: unknown) {
    setPending(path);
    setUncertain("");
    setNotice("");
    try {
      const response = await fetch(path, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
      if (response.status === 409) {
        setNotice(body.message || "Conflit : une autre modification a été enregistrée.");
        await load();
        return;
      }
      if (!response.ok) {
        setNotice(body.message || body.error || "La modification n'a pas abouti.");
        return;
      }
      await load();
    } catch {
      setUncertain("Résultat incertain. Le portefeuille va être relu, sans relancer l'action.");
      await load();
    } finally {
      setPending("");
      setConfirm(null);
      setConfirmRestore(null);
    }
  }

  async function startPreparation() {
    setUncertain("");
    const outcome = await runOpenPreparation(async (result) => {
      if (result.kind === "opened") {
        router.push(`/preparations/${result.preparationId}`);
        return;
      }
      if (result.kind === "unauthorized") router.push("/login");
      else if (result.kind === "refused") setError(result.message);
      else {
        await load();
        setUncertain(result.message);
      }
    });
    if (outcome.kind === "busy") return;
  }

  if (loading && !board) {
    return <div className="personal-portfolio" data-testid="portfolio-loading">Chargement du portefeuille…</div>;
  }
  if (error && !board) {
    return (
      <div className="personal-portfolio" role="alert" data-testid="portfolio-page">
        <p>Portefeuille indisponible.</p>
        <button type="button" onClick={() => void load()}>Réessayer</button>
      </div>
    );
  }
  if (!board) return null;
  const groups = board.preferences.view === "grouped"
    ? (["project", "preparation"] as const).map((type) => ({
        type,
        items: board.items.filter((item) => item.spaceType === type),
      }))
    : null;

  function renderSpace(space: PersonalSpace) {
    const activity = space.lastOpenedAt
      ? `Dernière ouverture · ${formatWhen(space.lastOpenedAt)}`
      : `Créé le ${formatWhen(space.createdAt)}`;
    return (
      <article
        key={`${space.spaceType}-${space.id}`}
        className={board!.preferences.view === "grid" ? "personal-portfolio-card" : "personal-portfolio-row"}
        draggable={board!.preferences.sort === "custom" && filter === "all" && !query}
        onDragStart={(event) => event.dataTransfer.setData("text/plain", `${space.spaceType}:${space.id}`)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          const raw = event.dataTransfer.getData("text/plain");
          const [spaceType, spaceId] = raw.split(":");
          if (!spaceId || spaceId === space.id) return;
          void mutate("/api/portfolio/order", "POST", {
            spaceType,
            spaceId,
            beforeSpaceType: space.spaceType,
            beforeSpaceId: space.id,
            expectedVersion: board!.preferences.version,
          });
        }}
        data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
      >
        <a href={hrefFor(space)}>{space.label}</a>
        <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
        <span className="personal-portfolio-meta">{activity}</span>
        <span>
          <button
            type="button"
            aria-pressed={space.favorite}
            aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            onClick={() =>
              void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", {
                favorite: !space.favorite,
                expectedVersion: space.rowVersion,
              })
            }
          >
            {space.favorite ? "★" : "☆"}
          </button>
          {board!.preferences.sort === "custom" ? (
            <>
              <button type="button" aria-label="Monter" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version })}>↑</button>
              <button type="button" aria-label="Descendre" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version })}>↓</button>
            </>
          ) : null}
          <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
          {menu === space.id ? (
            <div className="personal-portfolio-menu" role="menu">
              <button type="button" disabled aria-disabled="true" title="Le renommage n'est pas disponible dans cette version.">Renommer — indisponible</button>
              <button type="button" onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
                {scope === "archive" ? "Restaurer" : "Archiver"}
              </button>
              <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible dans cette version.">Supprimer — indisponible</button>
            </div>
          ) : null}
        </span>
      </article>
    );
  }

  return (
    <div className="personal-portfolio" data-testid="portfolio-page" data-figma-node="1420:176">
      <header className="personal-portfolio-header">
        <div>
          <p className="personal-portfolio-kicker">ESPACE PERSONNEL</p>
          <h1 className="personal-portfolio-title">Portefeuille</h1>
          <p className="personal-portfolio-sub">Retrouvez et organisez vos projets et préparations.</p>
        </div>
        <div className="personal-portfolio-grow" />
        <button type="button" className="btn" id="nouvelle-preparation" data-testid="portfolio-new-prep" disabled={creating} onClick={() => void startPreparation()}>
          {creating ? "Création…" : "Nouveau projet"}
        </button>
      </header>

      {error ? <p role="alert">{error}</p> : null}
      {notice ? <p role="status" data-testid="portfolio-conflict">{notice}</p> : null}
      {uncertain ? <p role="status" data-testid="portfolio-creation-uncertainty">{uncertain}</p> : null}
      {pending ? <p role="status">Modification en cours…</p> : null}

      <section className="personal-portfolio-synthesis" aria-label="Synthèse du portefeuille">
        <div className="personal-portfolio-stat"><span>Projets</span><strong data-testid="portfolio-count-projects">{formatCount(board.counters.projects)}</strong><em>Espaces de travail</em></div>
        <div className="personal-portfolio-rule" />
        <div className="personal-portfolio-stat"><span>Préparations</span><strong data-testid="portfolio-count-preparations">{formatCount(board.counters.preparations)}</strong><em>À reprendre</em></div>
        <div className="personal-portfolio-rule" />
        <div className="personal-portfolio-stat"><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></div>
      </section>

      {board.resume && scope === "current" ? (
        <section className="personal-portfolio-resume" data-testid="portfolio-resume">
          <div>
            <p className="personal-portfolio-kicker">REPRENDRE LE TRAVAIL</p>
            <h2>{board.resume.label}</h2>
            <p>{board.resume.activityLabel} · {formatWhen(board.resume.lastOpenedAt || board.resume.createdAt)}</p>
          </div>
          <div className="personal-portfolio-grow" />
          <a className="btn" href={hrefFor(board.resume)}>Continuer</a>
        </section>
      ) : null}

      <div className="personal-portfolio-tools">
        <div className="personal-portfolio-filters" role="tablist" aria-label="Filtres">
          {([
            ["all", "Tout"],
            ["projects", "Projets"],
            ["preparations", "Préparations"],
            ["favorites", "Favoris"],
          ] as const).map(([key, label]) => (
            <button key={key} type="button" aria-pressed={filter === key} onClick={() => { setFilter(key); setExpanded(false); }}>
              {label}
              {key === "all" ? ` · ${board.counters.projects + board.counters.preparations}` : ""}
              {key === "projects" ? ` · ${board.counters.projects}` : ""}
              {key === "preparations" ? ` · ${board.counters.preparations}` : ""}
              {key === "favorites" ? ` · ${board.counters.favorites}` : ""}
            </button>
          ))}
        </div>
        <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
        <select
          aria-label="Tri"
          value={board.preferences.sort}
          onChange={(event) =>
            void mutate("/api/portfolio/preferences", "PATCH", {
              sort: event.target.value as PortfolioSort,
              expectedVersion: board.preferences.version,
            })
          }
        >
          <option value="recent">Activité récente</option>
          <option value="name">Nom A–Z</option>
          <option value="created">Date de création</option>
          <option value="custom">Ordre personnalisé</option>
        </select>
        <div className="personal-portfolio-views">
          {([
            ["list", "Liste"],
            ["grid", "Grille"],
            ["grouped", "Groupes"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={board.preferences.view === key}
              aria-label={label}
              onClick={() =>
                void mutate("/api/portfolio/preferences", "PATCH", {
                  view: key as PortfolioView,
                  expectedVersion: board.preferences.version,
                })
              }
            >
              {label}
            </button>
          ))}
        </div>
        <button type="button" aria-pressed={scope === "archive"} onClick={() => setScope(scope === "archive" ? "current" : "archive")}>
          {scope === "archive" ? "Retour aux espaces" : "Archives"}
        </button>
      </div>

      <section className="personal-portfolio-library" aria-label="Mes espaces">
        <h2>Mes espaces</h2>
        {board.items.length === 0 ? (
          <p data-testid="portfolio-empty">{query ? "Aucun résultat." : scope === "archive" ? "Aucune archive." : filter === "favorites" ? "Aucun favori." : "Aucun espace pour le moment."}</p>
        ) : board.preferences.view === "grid" ? (
          <div className="personal-portfolio-grid">{board.items.map(renderSpace)}</div>
        ) : groups ? (
          groups.map((group) => (
            <div key={group.type} className="personal-portfolio-group">
              <h3>{group.type === "project" ? "Projets" : "Préparations"}</h3>
              {group.items.map(renderSpace)}
            </div>
          ))
        ) : (
          <div>
            <div className="personal-portfolio-columns"><span>NOM</span><span>TYPE</span><span>ACTIVITÉ</span><span /></div>
            {board.items.map(renderSpace)}
          </div>
        )}
        <p>{board.items.length} sur {board.filteredTotal} espaces</p>
        {!expanded && board.filteredTotal > board.items.length ? (
          <button type="button" onClick={() => setExpanded(true)}>Voir tous les espaces</button>
        ) : null}
        {expanded ? <button type="button" onClick={() => setExpanded(false)}>Réduire la liste</button> : null}
        {expanded && board.nextCursor ? (
          <button type="button" data-testid="portfolio-load-more" onClick={() => void load(board.nextCursor)}>Charger la suite</button>
        ) : null}
      </section>

      {confirm ? (
        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer l'archivage">
          <p>Archiver « {confirm.label} » retire cet espace de l’accueil. Le projet, ses documents et ses droits restent inchangés.</p>
          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirm.spaceType}/${confirm.id}/archive`, "PUT", { archived: true, confirm: true, expectedVersion: confirm.rowVersion })}>Archiver</button>
          <button type="button" onClick={() => setConfirm(null)}>Annuler</button>
        </div>
      ) : null}
      {confirmRestore ? (
        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer la restauration">
          <p>Restaurer « {confirmRestore.label} » le replace dans le portefeuille courant, avec le même identifiant.</p>
          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion })}>Restaurer</button>
          <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
        </div>
      ) : null}
    </div>
  );
}
```


### projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx

```
"use client";

import { useEffect, useState } from "react";
import type { PersonalSpace } from "@/domains/identity/portfolio-organization";

export function PersonalRailFavorites() {
  const [items, setItems] = useState<PersonalSpace[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    void fetch("/api/portfolio/favorites")
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { favorites?: PersonalSpace[] } | null) => {
        if (!cancelled) setItems(body?.favorites ?? []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!items || items.length === 0) return null;
  return (
    <div data-testid="portfolio-rail-favorites">
      <div className="studio-rail-section">Favoris</div>
      {items.map((item) => (
        <a
          key={`${item.spaceType}-${item.id}`}
          className="studio-rail-nav-item"
          href={item.spaceType === "project" ? `/projects/${item.id}?surface=travail` : `/preparations/${item.id}?resume=1`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
```


### projects/sfia-studio-next/web/src/components/portfolio/PersonalSpaceOpenSignal.tsx

```
"use client";

import { useEffect } from "react";

/**
 * Records one voluntary opening after the space is admitted.
 * A reload, a retry of the same navigation key, or a surface change
 * inside the same document does not advance the timestamp.
 */
export function PersonalSpaceOpenSignal(props: {
  spaceType: "project" | "preparation";
  spaceId: string;
  admitted: boolean;
}) {
  const { spaceType, spaceId, admitted } = props;
  useEffect(() => {
    if (!admitted || !spaceId) return;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "reload") return;
    const key = `${spaceType}:${spaceId}:${nav?.type || "navigate"}:${Math.floor(performance.timeOrigin)}`;
    const storageKey = `sfia-space-open:${spaceType}:${spaceId}`;
    if (sessionStorage.getItem(storageKey) === key) return;
    sessionStorage.setItem(storageKey, key);
    void fetch(`/api/portfolio/spaces/${spaceType}/${encodeURIComponent(spaceId)}/opened`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ navigationKey: key }),
    }).catch(() => undefined);
  }, [admitted, spaceId, spaceType]);
  return null;
}
```


### projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css

```
.personal-portfolio {
  --pf-ink: #f2f4fc;
  --pf-muted: #a5b1c5;
  --pf-panel: #151d2c;
  --pf-border: #273248;
  --pf-bg: #0d1220;
  color: var(--pf-ink);
  min-width: 0;
}
.personal-portfolio-header,
.personal-portfolio-synthesis,
.personal-portfolio-resume,
.personal-portfolio-tools,
.personal-portfolio-library {
  margin: 0 40px;
}
.personal-portfolio-header {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  min-height: 92px;
  padding-top: 24px;
}
.personal-portfolio-kicker {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--pf-muted);
}
.personal-portfolio-title {
  margin: 5px 0 0;
  font-size: 34px;
  line-height: 46px;
  font-weight: 600;
}
.personal-portfolio-sub {
  margin: 4px 0 0;
  color: var(--pf-muted);
  font-size: 15px;
  line-height: 21px;
}
.personal-portfolio-grow { flex: 1; }
.personal-portfolio-synthesis {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  align-items: center;
  height: 136px;
  margin-top: 8px;
  background: var(--pf-panel);
  border: 1px solid var(--pf-border);
  border-radius: 12px;
}
.personal-portfolio-stat { padding: 14px 16px 14px 24px; }
.personal-portfolio-stat span { display: block; color: var(--pf-muted); font-size: 15px; line-height: 21px; }
.personal-portfolio-stat strong {
  font-size: 46px;
  line-height: 63px;
  font-weight: 600;
  margin-right: 12px;
}
.personal-portfolio-stat em { font-style: normal; color: var(--pf-muted); font-size: 13px; }
.personal-portfolio-rule { background: var(--pf-border); height: 92px; }
.personal-portfolio-resume {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 158px;
  margin-top: 8px;
  padding: 0 25px;
  background: var(--pf-panel);
  border: 1px solid var(--pf-border);
  border-radius: 12px;
}
.personal-portfolio-resume h2 { margin: 0; font-size: 26px; line-height: 36px; }
.personal-portfolio-resume p { margin: 6px 0 0; color: var(--pf-muted); }
.personal-portfolio-tools {
  display: flex;
  gap: 12px;
  align-items: center;
  min-height: 40px;
  margin-top: 8px;
}
.personal-portfolio-filters, .personal-portfolio-views { display: flex; gap: 2px; }
.personal-portfolio-filters button,
.personal-portfolio-views button,
.personal-portfolio-tools select,
.personal-portfolio-tools input,
.personal-portfolio button.btn {
  border: 1px solid var(--pf-border);
  background: transparent;
  color: var(--pf-ink);
  border-radius: 8px;
  min-height: 35px;
}
.personal-portfolio-filters button[aria-pressed="true"],
.personal-portfolio-views button[aria-pressed="true"] {
  background: #243044;
}
.personal-portfolio-tools input { width: 236px; padding: 0 12px; }
.personal-portfolio-library { margin-top: 8px; }
.personal-portfolio-row, .personal-portfolio-columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 158px 170px 120px;
  align-items: center;
  gap: 8px;
  min-height: 50px;
  border-bottom: 1px solid var(--pf-border);
}
.personal-portfolio-columns { min-height: 30px; color: var(--pf-muted); font-size: 11px; letter-spacing: 0.06em; }
.personal-portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 8px;
}
.personal-portfolio-card {
  min-height: 120px;
  padding: 16px;
  background: var(--pf-panel);
  border: 1px solid var(--pf-border);
  border-radius: 12px;
}
.personal-portfolio-group h3 { margin: 12px 0 4px; font-size: 14px; color: var(--pf-muted); }
.personal-portfolio-menu {
  position: absolute;
  right: 0;
  z-index: 2;
  min-width: 220px;
  padding: 8px;
  background: var(--pf-panel);
  border: 1px solid var(--pf-border);
  border-radius: 10px;
}
.personal-portfolio-dialog {
  margin-top: 8px;
  padding: 16px;
  border: 1px solid var(--pf-border);
  border-radius: 12px;
  background: var(--pf-panel);
}
@media (max-width: 1279px) {
  .personal-portfolio-header,
  .personal-portfolio-synthesis,
  .personal-portfolio-resume,
  .personal-portfolio-tools,
  .personal-portfolio-library { margin-left: 16px; margin-right: 16px; }
  .personal-portfolio-tools { flex-wrap: wrap; }
  .personal-portfolio-synthesis { height: auto; grid-template-columns: 1fr; }
  .personal-portfolio-rule { display: none; }
}
@media (max-width: 390px) {
  .personal-portfolio-columns, .personal-portfolio-row { grid-template-columns: minmax(0, 1fr) auto; }
  .personal-portfolio-columns span:nth-child(2),
  .personal-portfolio-columns span:nth-child(3),
  .personal-portfolio-row .personal-portfolio-meta { display: none; }
}
```


### projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts

```
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
```


## Diffs des fichiers modifiés


### projects/sfia-studio-next/construction/delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 69e70fdd..f5f32d59 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — mandat 1, portefeuille personnel et navigation
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `d215a5272025b2d1c7aa8391dd14f6442ea512fe`
+- **commit**: `feat(next): add personal portfolio and navigation`
+- **schema_revision**: `028_pilot_portfolio_organization` — additive, after 027 on E2E then DEV
+- **scope**: tableau de bord, reprise, trois vues, recherche, tri, favoris, archive personnelle, signal d'ouverture
+- **classe**: NO RELEASE · compatible additive · LIVE NOT RUN · CI NOT RUN
+
 ## delivery_id: DELIV-2026-11-28-ML5-DICTATION-GA-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
```


### projects/sfia-studio-next/web/scripts/db-migrate.sh

```diff
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 8c0dbdf3..3b43b331 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -45,4 +45,5 @@ apply "024_provider_admin_snapshot_provenance.sql"
 apply "025_provider_admin_security_and_canon.sql"
 apply "026_admin_collector_ops_and_password_null.sql"
 apply "027_derived_embedding_chunks.sql"
-echo "db:migrate OK (001→027)"
\ No newline at end of file
+apply "028_pilot_portfolio_organization.sql"
+echo "db:migrate OK (001→028)"
\ No newline at end of file
```


### projects/sfia-studio-next/web/src/app/api/portfolio/route.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
index 20825fdc..ab2e74e4 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
@@ -1,24 +1,43 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { loadPortfolio } from "@/domains/identity/portfolio";
+import { loadPersonalBoard } from "@/domains/identity/portfolio-organization";
 import { studioErrorResponse } from "@/lib/http-errors";

+export const dynamic = "force-dynamic";
+
+function json(body: unknown, status = 200) {
+  return NextResponse.json(body, {
+    status,
+    headers: { "cache-control": "private, no-store" },
+  });
+}
+
 export async function GET(req: Request) {
   try {
     const session = await requireStudioSession();
     const url = new URL(req.url);
-    const preparationsCursor = url.searchParams.get("preparationsCursor");
-    const portfolio = await loadPortfolio(session.pilotId, { preparationsCursor });
-    return NextResponse.json({
+    const portfolio = await loadPortfolio(session.pilotId, {
+      preparationsCursor: url.searchParams.get("preparationsCursor"),
+    });
+    const board = await loadPersonalBoard(session.pilotId, {
+      scope: url.searchParams.get("scope"),
+      filter: url.searchParams.get("filter"),
+      query: url.searchParams.get("q"),
+      cursor: url.searchParams.get("cursor"),
+      preview: url.searchParams.get("expanded") !== "1",
+    });
+    return json({
       session: {
         pilotId: session.pilotId,
         displayName: session.displayName,
         authMode: session.authMode,
       },
       portfolio,
+      board,
     });
   } catch (e) {
     const mapped = studioErrorResponse(e);
-    return NextResponse.json(mapped.body, { status: mapped.status });
+    return json(mapped.body, mapped.status);
   }
 }
```


### projects/sfia-studio-next/web/src/app/portfolio/page.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index 93f7a706..3bb85476 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -1,390 +1,7 @@
 "use client";

-import { useCallback, useEffect, useRef, useState } from "react";
-import { useRouter } from "next/navigation";
-import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
-import {
-  runOpenPreparation,
-  subscribeOpenPreparationBusy,
-} from "@/lib/open-preparation";
-
-type PreparationSummary = {
-  id: string;
-  previewName: string;
-  previewSummary: string;
-  createdAt: string;
-  status: "OPEN";
-};
-
-type PortfolioResponse = {
-  session?: { displayName: string; authMode: string };
-  portfolio?:
-    | {
-        kind: "empty";
-        openPreparations: number;
-        preparations: { items: PreparationSummary[]; nextCursor: string | null };
-      }
-    | {
-        kind: "ready";
-        projects: Array<{ id: string; name: string }>;
-        openPreparations: number;
-        preparations: { items: PreparationSummary[]; nextCursor: string | null };
-      }
-    | { kind: "unavailable"; reason: string };
-  error?: string;
-  errorCategory?: string;
-};
-
-/**
- * ML4C S01 — portfolio labels must come from owner truth, never list index.
- * Decorative progression (Actif / En réflexion / À reprendre by index) is forbidden.
- */
-function statusForOwnedProject(): { label: string; tone: string } {
-  return { label: "Accessible", tone: "fig-tag-ok" };
-}
-
-function formatPrepCreatedAt(iso: string): string {
-  try {
-    const d = new Date(iso);
-    if (Number.isNaN(d.getTime())) return iso;
-    return d.toLocaleDateString("fr-FR", {
-      day: "2-digit",
-      month: "short",
-      year: "numeric",
-    });
-  } catch {
-    return iso;
-  }
-}
-
-function padCount(n: number): string {
-  return String(Math.min(Math.max(n, 0), 99)).padStart(2, "0");
-}
+import { PersonalPortfolio } from "@/components/portfolio/PersonalPortfolio";

 export default function PortfolioPage() {
-  const router = useRouter();
-  const [data, setData] = useState<PortfolioResponse | null>(null);
-  const [items, setItems] = useState<PreparationSummary[]>([]);
-  const [nextCursor, setNextCursor] = useState<string | null>(null);
-  const [error, setError] = useState<string>("");
-  const [pageNotice, setPageNotice] = useState<string>("");
-  const [creationUncertainty, setCreationUncertainty] = useState<string>("");
-  const [loadingMore, setLoadingMore] = useState(false);
-  const [creating, setCreating] = useState(false);
-  const knownPrepIdsRef = useRef<Set<string>>(new Set());
-
-  useEffect(() => subscribeOpenPreparationBusy(setCreating), []);
-
-  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
-    setData(j);
-    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
-    if (prep) {
-      setItems((prev) => {
-        const next = append ? [...prev, ...prep.items] : prep.items;
-        knownPrepIdsRef.current = new Set(next.map((p) => p.id));
-        return next;
-      });
-      setNextCursor(prep.nextCursor);
-    } else if (!append) {
-      setItems([]);
-      setNextCursor(null);
-      knownPrepIdsRef.current = new Set();
-    }
-  }, []);
-
-  const reloadPortfolio = useCallback(async (): Promise<PortfolioResponse | null> => {
-    try {
-      const r = await fetch("/api/portfolio");
-      const j = (await r.json()) as PortfolioResponse;
-      if (r.status === 401) {
-        router.push("/login");
-        return null;
-      }
-      if (r.status === 400) {
-        setError(j.error ?? "INVALID_CURSOR");
-        return null;
-      }
-      if (!r.ok) {
-        setError(j.error ?? j.errorCategory ?? `erreur ${r.status}`);
-        return null;
-      }
-      applyPortfolio(j, false);
-      setError("");
-      return j;
-    } catch {
-      setError("Réseau indisponible — rechargement du portefeuille impossible.");
-      return null;
-    }
-  }, [router, applyPortfolio]);
-
-  useEffect(() => {
-    void reloadPortfolio();
-  }, [reloadPortfolio]);
-
-  async function loadMore() {
-    if (!nextCursor || loadingMore) return;
-    setLoadingMore(true);
-    setPageNotice("");
-    try {
-      const res = await fetch(
-        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
-      );
-      const j = (await res.json().catch(() => ({}))) as PortfolioResponse;
-      if (res.status === 400) {
-        setPageNotice(j.error ?? "INVALID_CURSOR");
-        return;
-      }
-      if (res.status === 401) {
-        router.push("/login");
-        return;
-      }
-      if (!res.ok) {
-        setPageNotice(j.error ?? j.errorCategory ?? `pagination HTTP ${res.status}`);
-        return;
-      }
-      applyPortfolio(j, true);
-    } catch {
-      setPageNotice("Réseau indisponible pendant la pagination — réessayez.");
-    } finally {
-      setLoadingMore(false);
-    }
-  }
-
-  async function startPreparation() {
-    setCreationUncertainty("");
-    setError("");
-    const outcome = await runOpenPreparation(async (result) => {
-      if (result.kind === "opened") {
-        router.push(`/preparations/${result.preparationId}`);
-        return;
-      }
-      if (result.kind === "unauthorized") {
-        router.push("/login");
-        return;
-      }
-      if (result.kind === "refused") {
-        setCreationUncertainty("");
-        setError(result.message);
-        return;
-      }
-      // UNCERTAIN: refresh list for reprise aid; never confirm creation or navigate by guess.
-      await reloadPortfolio();
-      setCreationUncertainty(result.message);
-    });
-    if (outcome.kind === "busy") return;
-  }
-
-  function resumePreparation(id: string) {
-    router.push(`/preparations/${id}?resume=1`);
-  }
-
-  if (error && !data) {
-    return (
-      <div className="fig-page" data-figma-frame="591:425">
-        <div className="fig-panel space-y-3" role="alert">
-          <div>Portefeuille indisponible: {error}</div>
-          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
-            Réessayer (GET)
-          </button>
-        </div>
-      </div>
-    );
-  }
-  if (!data) {
-    return (
-      <div className="muted" data-testid="portfolio-loading">
-        Chargement du portefeuille…
-      </div>
-    );
-  }
-
-  const p = data.portfolio;
-  const projects = p && p.kind === "ready" ? p.projects : [];
-  const openPreparations = p && "openPreparations" in p ? p.openPreparations : 0;
-  const hasProjects = projects.length > 0;
-  const frameId = hasProjects ? "591:425" : "591:661";
-
-  return (
-    <div className="fig-page portfolio-page" data-figma-frame={frameId} data-testid="portfolio-page">
-      <header>
-        <p className="fig-kicker">Votre espace</p>
-        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
-        <p className="fig-hero-sub">
-          Retrouvez vos projets ou reprenez une préparation avec Nora, sans mélanger leurs contextes.
-        </p>
-      </header>
-
-      {error ? (
-        <p className="text-sm text-[var(--bad)]" role="alert">
-          {error}
-        </p>
-      ) : null}
-      {creationUncertainty ? (
-        <div className="fig-alert" data-testid="portfolio-creation-uncertainty" role="status">
-          {creationUncertainty}
-          <div className="mt-2">
-            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
-              Relire le portefeuille
-            </button>
-          </div>
-        </div>
-      ) : null}
-
-      <section className="fig-stat-grid" aria-label="Synthèse portefeuille">
-        <div className="fig-stat">
-          <div className="fig-stat-label">Mes projets</div>
-          <div className="fig-stat-value">{padCount(projects.length)}</div>
-          <div className="fig-stat-hint">Projets accessibles</div>
-        </div>
-        <div className="fig-stat">
-          <div className="fig-stat-label">Préparations ouvertes</div>
-          <div className="fig-stat-value">{padCount(openPreparations)}</div>
-          <div className="fig-stat-hint">Préparations en cours</div>
-        </div>
-        <div className="fig-stat fig-stat-access">
-          <div className="fig-stat-label">Accès</div>
-          <div className="fig-stat-value fig-stat-value-text">Personnel</div>
-          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
-        </div>
-      </section>
-
-      <section className="space-y-4" data-testid="portfolio-projects-section">
-        <div className="fig-section-head">
-          <h2 className="fig-section-title">Mes projets</h2>
-          <button
-            id="nouvelle-preparation"
-            className="btn"
-            disabled={creating}
-            data-testid="portfolio-new-prep"
-            onClick={() => void startPreparation()}
-          >
-            {creating ? "Création…" : "Créer un projet"}
-          </button>
-        </div>
-
-        {!hasProjects ? (
-          <div className="portfolio-empty-projects" data-testid="portfolio-empty-projects">
-            <div className="portfolio-empty-glyph" aria-hidden>
-              +
-            </div>
-            <div className="min-w-0">
-              <h3 className="portfolio-empty-title">Aucun projet pour le moment</h3>
-              <p className="portfolio-empty-copy">
-                Créez un projet pour démarrer avec Nora. La création reste un acte explicite dans le
-                sas de préparation.
-              </p>
-              <button
-                type="button"
-                className="btn mt-3"
-                disabled={creating}
-                onClick={() => void startPreparation()}
-              >
-                {creating ? "Création…" : "Créer un projet"}
-              </button>
-            </div>
-          </div>
-        ) : (
-          <ul className="fig-card-grid" data-testid="portfolio-projects">
-            {projects.map((proj) => {
-              const st = statusForOwnedProject();
-              return (
-                <li key={proj.id} className="fig-card portfolio-project-card">
-                  <div className="fig-card-top">
-                    <div className="fig-card-title truncate" title={proj.name}>
-                      {proj.name}
-                    </div>
-                    <span className={`fig-tag ${st.tone}`} data-testid="portfolio-project-status">
-                      {st.label}
-                    </span>
-                  </div>
-                  <p className="fig-card-desc text-sm muted">Espace de travail accessible</p>
-                  <div className="fig-card-sep" aria-hidden />
-                  <p className="fig-card-meta">Accéder à votre espace projet</p>
-                  <a
-                    className="btn mt-auto inline-flex justify-center"
-                    href={`/projects/${proj.id}?surface=travail`}
-                    data-testid={`open-project-${proj.id}`}
-                  >
-                    Ouvrir le projet
-                  </a>
-                </li>
-              );
-            })}
-          </ul>
-        )}
-      </section>
-
-      {p?.kind === "empty" || p?.kind === "ready" ? (
-        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="591:425">
-          <div className="fig-section-head">
-            <h2 className="fig-section-title">Préparations à reprendre</h2>
-            <span className="muted text-sm" data-testid="portfolio-open-count">
-              {padCount(openPreparations)} ouverte{openPreparations === 1 ? "" : "s"}
-            </span>
-          </div>
-          {items.length === 0 ? (
-            <div className="fig-panel portfolio-empty-preps" data-testid="portfolio-empty-preps">
-              <p className="text-sm muted m-0">
-                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
-                création de projet.
-              </p>
-            </div>
-          ) : (
-            <ul className="portfolio-prep-list">
-              {items.map((prep) => (
-                <li key={prep.id} className="portfolio-prep-row">
-                  <span className="portfolio-prep-icon" aria-hidden>
-                    ○
-                  </span>
-                  <div className="min-w-0 flex-1">
-                    <div className="portfolio-prep-title truncate">
-                      {preparationDisplayLabel(prep)}
-                    </div>
-                    <div className="portfolio-prep-meta">
-                      Ouverte · Créée le {formatPrepCreatedAt(prep.createdAt)}
-                    </div>
-                  </div>
-                  <button
-                    type="button"
-                    className="btn secondary shrink-0 portfolio-prep-resume"
-                    data-testid={`resume-prep-${prep.id}`}
-                    onClick={() => resumePreparation(prep.id)}
-                  >
-                    Reprendre
-                  </button>
-                </li>
-              ))}
-            </ul>
-          )}
-          {pageNotice ? <p className="text-sm muted">{pageNotice}</p> : null}
-          {nextCursor ? (
-            <button
-              type="button"
-              className="btn secondary"
-              disabled={loadingMore}
-              data-testid="portfolio-load-more"
-              onClick={() => void loadMore()}
-            >
-              {loadingMore ? "Chargement…" : "Charger plus"}
-            </button>
-          ) : null}
-        </section>
-      ) : null}
-
-      {p?.kind === "unavailable" ? (
-        <div className="fig-panel" role="alert">
-          <div className="font-medium">Portefeuille indisponible</div>
-          <p className="muted text-sm mt-1">{p.reason}</p>
-        </div>
-      ) : null}
-
-      <footer className="fig-banner portfolio-continuity">
-        <h3>Continuité personnelle</h3>
-        <p>
-          Les conversations et les décisions restent propres à chaque projet. Un dépôt Git partagé ne
-          fusionne pas les contextes.
-        </p>
-      </footer>
-    </div>
-  );
+  return <PersonalPortfolio />;
 }
```


### projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 48525afa..fb00e400 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -4,6 +4,7 @@ import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PreparationConversation } from "@/components/figma/PreparationConversation";
+import { PersonalSpaceOpenSignal } from "@/components/portfolio/PersonalSpaceOpenSignal";
 import { PreparationProposal } from "@/components/figma/PreparationProposal";
 import { SasCreateProgressPopup } from "@/components/figma/SasCreateProgressPopup";
 import { contextPreloadVerdict } from "@/lib/project-projection-sync";
@@ -1082,6 +1083,7 @@ export default function PreparationPage() {
       data-sas-resume={isResumedPrep ? "1" : "0"}
       data-testid="sas-page"
     >
+      <PersonalSpaceOpenSignal spaceType="preparation" spaceId={preparationId} admitted />
       <header className="sas-stage">
         <p className="sas-stage-kicker" data-testid="sas-stage-kicker">
           {presentation.kicker}
```


### projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 5b5d60fb..fb1dc9d4 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -3,6 +3,7 @@
 import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
+import { PersonalSpaceOpenSignal } from "@/components/portfolio/PersonalSpaceOpenSignal";
 import { NoraConversation } from "@/components/figma/NoraConversation";
 import { CursorRealizationSurface } from "@/components/figma/CursorRealizationSurface";
 import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
@@ -3664,6 +3665,11 @@ export default function ProjectPage() {
       documentHero={documentHero}
       travailHero={travailHero}
     >
+      <PersonalSpaceOpenSignal
+        spaceType="project"
+        spaceId={params.projectId}
+        admitted={projectLoadState === "ready"}
+      />
       {surface === "projet" ? (
         <ProjectOverview
           projectId={params.projectId}
```


### projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 60b380d1..38450a53 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -25,6 +25,7 @@ import {
   SETTINGS_INTEGRATIONS_HREF,
 } from "./PersonalRailSettingsMenu";
 import "./studio-shell.css";
+import { PersonalRailFavorites } from "@/components/portfolio/PersonalRailFavorites";

 /** Figma 652:* rail glyphs — decorative, paired with visible labels. */
 function railNavGlyph(key: string): string {
@@ -326,6 +327,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                 {prepNotice}
               </p>
             ) : null}
+            {personalSpace && !projectId ? <PersonalRailFavorites /> : null}

             {projectId && projectSpaceReady ? (
               <div className="mt-1 space-y-0.5" data-testid="rail-acces-directs">
```


### projects/sfia-studio-next/web/src/db/schema.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index 1196d004..87099823 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -1228,4 +1228,37 @@ export const providerAdminUsageSnapshots = pgTable(
   ],
 );

-export const schemaRevision = "026_admin_collector_ops_and_password_null";
\ No newline at end of file
+/** Personal portfolio preferences. Absent row means unset, not a stored default. */
+export const pilotPortfolioPreferences = pgTable("pilot_portfolio_preferences", {
+  ownerPilotId: text("owner_pilot_id")
+    .primaryKey()
+    .references(() => pilots.id),
+  view: text("view").notNull().default("list"),
+  sortMode: text("sort_mode"),
+  organizationVersion: integer("organization_version").notNull().default(0),
+  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
+});
+
+/** Personal organization of an existing project or preparation. Not a business entity. */
+export const pilotSpaceOrganization = pgTable(
+  "pilot_space_organization",
+  {
+    ownerPilotId: text("owner_pilot_id")
+      .notNull()
+      .references(() => pilots.id),
+    spaceType: text("space_type").notNull(),
+    spaceId: text("space_id").notNull(),
+    favorite: boolean("favorite").notNull().default(false),
+    archivedAt: timestamp("archived_at", { withTimezone: true }),
+    lastOpenedAt: timestamp("last_opened_at", { withTimezone: true }),
+    navigationKey: text("navigation_key"),
+    customPosition: integer("custom_position"),
+    rowVersion: integer("row_version").notNull().default(0),
+  },
+  (t) => [
+    uniqueIndex("pilot_space_organization_pk").on(t.ownerPilotId, t.spaceType, t.spaceId),
+    index("pilot_space_organization_owner_idx").on(t.ownerPilotId),
+  ],
+);
+
+export const schemaRevision = "028_pilot_portfolio_organization";
\ No newline at end of file
```
