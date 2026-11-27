# Procédure — qualification Admin LIVE bornée (Intervention 2)

| Champ | Valeur |
|---|---|
| Statut | **GO CONDITIONNEL MORRIS — exécutable après préflight PASS** |
| Gates | G-ADMIN-SECRET + G-ADMIN-LIVE (consommés dans ce cycle après préflight) |
| Date | 2026-11-27 |

## Préflight (Cursor — sans secret)

1. Rôles `*_login` : NOLOGIN + PASSWORD NULL (026)
2. Rôle ops `sfia_admin_collector_ops` créé, grants bornés
3. Transport LIVE fail-closed + destination fixe + redirects refusés
4. Enveloppe LIVE : Costs + Completions Usage ; fenêtre ≤24h terminée ; 1 project_id ; ≤3 pages ; deadline
5. Collecteur refuse `DATABASE_URL` owner ; exige `SFIA_ADMIN_COLLECTOR_DATABASE_URL` ops
6. FinOps disclosure fail-closed (ownership + projet configuré)

## Provisionnement opérateur (Morris — hors agent)

### A. Mot de passe PostgreSQL ops (pas la clé OpenAI)

```bash
# Terminal.app — hors Cursor
security add-generic-password -a sfia_admin_collector_ops \
  -s sfia-next-dev-pg-collector -w   # génère / saisit un NOUVEAU mot de passe
cd /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web
STUDIO_LANE=DEV ./scripts/finops-admin-collector-db-provision.sh
```

Noter le `dsn_template` JSON (sans secret) et construire localement :
`SFIA_ADMIN_COLLECTOR_DATABASE_URL=postgresql://sfia_admin_collector_ops:<NOUVEAU>@127.0.0.1:5433/sfia_next_dev`

### B. Clé Admin OpenAI

1. Créer la clé sur le portail OpenAI (hors chat).
2. Stocker uniquement dans `~/.sfia/operator/admin-live-dev.env` (untracked) ou Keychain.
3. **Ne jamais** coller la clé dans Cursor, chat, Git, argv, `.env.local` partagé.

Fichier opérateur exemple (local only) :

```bash
export STUDIO_LANE=DEV
export SFIA_ADMIN_COLLECTOR_PROCESS=1
export SFIA_ADMIN_USAGE_LIVE=1
export OPENAI_ADMIN_KEY='…'   # jamais transmis à Cursor
export SFIA_ADMIN_COLLECTOR_DATABASE_URL='postgresql://sfia_admin_collector_ops:…@127.0.0.1:5433/sfia_next_dev'
```

### C. Collecte LIVE bornée

Choisir une journée UTC **terminée** (Costs `1d`) compatible Studio.

```bash
source ~/.sfia/operator/admin-live-dev.env
cd …/projects/sfia-studio-next/web
./scripts/finops-admin-live-operator.sh \
  --path /organization/costs \
  --start-time <unix_start> \
  --end-time <unix_end> \
  --project-id <proj_DEV> \
  --max-pages 3
# optionnel second endpoint:
./scripts/finops-admin-live-operator.sh \
  --path /organization/usage/completions \
  --start-time <unix_start> \
  --end-time <unix_end> \
  --project-id <proj_DEV> \
  --max-pages 3
```

Cursor lit uniquement le JSON non sensible (status, collectionId, pages, limits).

### D. Après campagne

1. `unset OPENAI_ADMIN_KEY SFIA_ADMIN_USAGE_LIVE`
2. Révoquer/désactiver la clé sur le portail
3. Optionnel : `ALTER ROLE sfia_admin_collector_ops NOLOGIN` (opérateur)

## Enveloppe maximale

| Paramètre | Valeur |
|---|---|
| Org | DEV autorisée uniquement |
| Projet | un `project_id` explicite |
| Endpoints | `/organization/costs` et `/organization/usage/completions` |
| Fenêtre | UTC terminée ≤ 24h |
| Pages | ≤ 3 / endpoint |
| Retries | ≤ 3 ; re-check GO |
| group_by | `project_id` |

## STOP

401/403 inattendu · projet hors scope · balayage org · malformé · fuite secret · PARTIAL nécessitant nouveau mandat · contamination RECETTE

## Non-présomptions

- Clé Admin ≠ read-only garantie OpenAI ; consommateur limité aux GET allowlistés.
- Coûts peuvent arriver en retard — rejeu idempotent, pas d’invention.
