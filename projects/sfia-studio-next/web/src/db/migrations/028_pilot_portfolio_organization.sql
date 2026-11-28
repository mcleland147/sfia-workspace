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
