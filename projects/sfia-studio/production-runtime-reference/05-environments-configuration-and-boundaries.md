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
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
| `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms when `process.env` value **after `trim()`** equals `"1"` (code: `isLocalOaExclusiveMode`) ; `"1"` / `" 1 "` → ON ; unset / `"0"` / other → OFF (historical D1) | Server-only · **not** global across worktrees · code **CURRENT ON MAIN** (PR #614) · default OFF · **G-ACTIVATION** required to arm · **NOT ACTIVATED** by merge |
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
- **Tool-First R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Product gate ≠ technical sandbox. Env flag alone does not prove REAL BOUNDARY. **OPEN:** `TOOL-FIRST-REAL-NOWRITE`. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic proof path for those missions at tested scope.

## Server vs client

- Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
- Browser must not supply repository binding or Pilot authority claims.

## Overlay — AKG-M5 L2-D2 exclusive marker + Option A paths (CURRENT ON MAIN — PR #614; 2026-10-24)

| Rule | Detail |
|---|---|
| Activation predicate | Env value **trimmed** must equal `"1"` — matches `isLocalOaExclusiveMode()` (`trim() === "1"`). Examples: `"1"` ON · `" 1 "` ON · `"0"` OFF · unset OFF · other strings OFF |
| Default | OFF / unset — preserves historical D1 operator behavior on main |
| Binding | Server-only ; documented in `app/.env.example` ; **never** `NEXT_PUBLIC_*` |
| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |
| Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start remains a distinct preparation |
| Merge effect | Code integrated — **does not** arm marker, create definitive DBs, or start Studio |
| Anti-claims | Exclusive **not** ACTIVATED · cutover LIVE **not** proven · G-ACTIVATION **OPEN** |
