# 05 — Environments, Configuration & Boundaries

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
**Primary source:** `app/.env.example` + `process.env` harvest (no secret values).

## Distinction

| Kind | Meaning |
|---|---|
| Configuration | Paths, provider selection, feature gates |
| Capability | What an agent *can* do technically |
| Authority | What a Pilot/Morris *may* authorize |

## Inventory (selected, factual)

| Name | Purpose | Required | Default/notes | Boundaries |
|---|---|---|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B; **worktree-sensitive** |
| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | yes Product local | fail-closed if absent | config |
| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | yes Product local | fail-closed | config |
| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | optional | `main` | config |
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed clone root | yes for REAL docs_write | fail-closed if blank | config |
| `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | Local Pilot N3 gate | yes single-user profile | fail-closed | TEMPORARY WITH EXIT |
| `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | Deprecated alias | compat | prefer canonical | TEMPORARY |
| `SFIA_STUDIO_CURSOR_REAL` | Enable Cursor REAL | optional default OFF | exclusive vs deterministic boundary | REAL gate |
| `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` | Test double Cursor | test only | must not combine with REAL=1 | Fake boundary |
| `OPS1_CONVERSATION_PROVIDER` | `fake` / openai | tests often `fake` | | Fake/Real cognition |
| `OPENAI_API_KEY` / `OPENAI_MODEL` / `OPENAI_REASONING_EFFORT` | Live provider | REAL cognition | never commit secrets | REAL |
| `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` | Auth | yes for auth routes | secret | auth |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | OAuth | yes auth | secret | auth |
| `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS` | Allowlist | optional local | | authz |
| `OPS1_EXEC_ROOT` | Ops1 exec root | ops1 | | ops |
| `SFIA_V2_RUNTIME_ALLOW_RESET` | Test reset | tests | | test only |

## Fake / Real architecture

- **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
- **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
- **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.

## Server vs client

- Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
- Browser must not supply repository binding or Pilot authority claims.
