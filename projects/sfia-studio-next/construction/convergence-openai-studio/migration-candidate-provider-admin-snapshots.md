# Migration candidate — provider Admin Usage/Costs snapshots

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — NOT APPLIED** |
| Gate | GO Morris migration structurante (mandat §5 / §10.5) |
| Motif | Persistance idempotente des agrégats fournisseur pour rapprochement FinOps |

## Besoin

Le collecteur Admin (`provider-admin-usage-collector.ts`) maintient aujourd’hui une vue **in-process** pour tests et readiness. Une représentation PostgreSQL distincte du ledger `provider_usage_observations` est nécessaire pour :

- survie au redémarrage ;
- fraîcheur consultable par l’UI FinOps ;
- idempotence multi-collecte.

Ce n’est **pas** un second ledger métier.

## Schéma minimal proposé

```sql
-- CANDIDATE ONLY — do not apply without GO.
CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
  id uuid PRIMARY KEY,
  collected_at timestamptz NOT NULL,
  collection_id text NOT NULL,
  source text NOT NULL, -- openai.organization.usage | openai.organization.costs
  organization_scope text NOT NULL,
  interval_start_utc timestamptz NOT NULL,
  interval_end_utc timestamptz NOT NULL,
  granularity text NOT NULL, -- hour | day
  dimensions_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  unit text NOT NULL,
  currency text,
  value numeric(24, 10) NOT NULL,
  completeness text NOT NULL, -- complete | partial
  schema_version text NOT NULL DEFAULT '1',
  UNIQUE (
    source,
    organization_scope,
    interval_start_utc,
    interval_end_utc,
    granularity,
    unit,
    currency,
    dimensions_json
  )
);

CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
  collection_id text PRIMARY KEY,
  started_at timestamptz NOT NULL,
  finished_at timestamptz,
  status text NOT NULL,
  pages_fetched integer NOT NULL DEFAULT 0,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_error text
);
```

## Transition

1. GO migration DEV only.
2. Apply additive migration.
3. Brancher repository PG derrière le collecteur.
4. Ne pas backfill inventé.
5. Rollback = stop collect + drop tables si jamais écrites en RECETTE (RECETTE non touchée ici).
