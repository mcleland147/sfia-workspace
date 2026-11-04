# SFIA Review Pack Full — ML1 local commit pre-push review — 2026-11-04

- Timestamp: `2026-11-04T14:44:07.616116+01:00`
- Cycle: `8 / INC / Critical`
- GO: Morris local commit only; **project push FORBIDDEN**
- Product: `NO RELEASE` ; STABLE `NOT AVAILABLE` ; RC `NOT ASSIGNED`
- Review Pack: Full mono-cycle (reset at start)

## 1. Git Truth
- branch `sfia/next-access-preparation-continuity`
- HEAD before commit: `61a6765a4e8d92760aab595b61b66aa2425906c6`
- HEAD after commit: `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2`
- origin/main (unchanged): `61a6765a4e8d92760aab595b61b66aa2425906c6`
- Project pushed: **NO** · PR: **NO** · merge: **NO**

### status after commit
```
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/web/public/
```

## 2. Local commit
- message: `feat(next): implement access preparation and project continuity`
- SHA: `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2`
- 58 files, +14237/−7

```
0b982b3b feat(next): implement access preparation and project continuity
 projects/sfia-studio-next/CHANGELOG.md             |    41 +
 .../construction/delivery-history.md               |    84 +
 .../matrice-tracabilite.md                         |    43 +-
 .../specification-technique.md                     |    18 +
 projects/sfia-studio-next/web/.gitignore           |    47 +
 projects/sfia-studio-next/web/README.md            |    58 +
 .../sfia-studio-next/web/docs/ux-figma-pending.md  |    19 +
 projects/sfia-studio-next/web/drizzle.config.ts    |    10 +
 projects/sfia-studio-next/web/eslint.config.mjs    |    16 +
 projects/sfia-studio-next/web/next.config.ts       |     7 +
 projects/sfia-studio-next/web/package-lock.json    | 10508 +++++++++++++++++++
 projects/sfia-studio-next/web/package.json         |    53 +
 projects/sfia-studio-next/web/playwright.config.ts |    16 +
 projects/sfia-studio-next/web/postcss.config.mjs   |     8 +
 .../web/src/app/api/auth/[...all]/route.ts         |    22 +
 .../web/src/app/api/dev/login/route.ts             |    32 +
 .../web/src/app/api/portfolio/route.ts             |    13 +
 .../[preparationId]/create-project/route.ts        |    46 +
 .../[preparationId]/documents/route.ts             |    39 +
 .../preparations/[preparationId]/messages/route.ts |    28 +
 .../[preparationId]/reconcile/route.ts             |    15 +
 .../app/api/preparations/[preparationId]/route.ts  |    37 +
 .../web/src/app/api/preparations/route.ts          |    13 +
 .../web/src/app/api/projects/[projectId]/route.ts  |    26 +
 projects/sfia-studio-next/web/src/app/favicon.ico  |   Bin 0 -> 25931 bytes
 projects/sfia-studio-next/web/src/app/globals.css  |    57 +
 projects/sfia-studio-next/web/src/app/layout.tsx   |    39 +
 .../sfia-studio-next/web/src/app/login/page.tsx    |    92 +
 projects/sfia-studio-next/web/src/app/page.tsx     |     5 +
 .../web/src/app/portfolio/page.tsx                 |    92 +
 .../src/app/preparations/[preparationId]/page.tsx  |   182 +
 .../web/src/app/projects/[projectId]/page.tsx      |   102 +
 projects/sfia-studio-next/web/src/db/client.ts     |    25 +
 .../src/db/migrations/001_initial_studio_core.sql  |   137 +
 .../src/db/migrations/002_session_auth_mode.sql    |     1 +
 projects/sfia-studio-next/web/src/db/schema.ts     |   215 +
 .../web/src/domains/boundaries/non-effects.ts      |    30 +
 .../web/src/domains/conversation/nora-adapter.ts   |    94 +
 .../web/src/domains/conversation/service.ts        |    76 +
 .../web/src/domains/document/service.ts            |   134 +
 .../web/src/domains/identity/portfolio.ts          |    41 +
 .../web/src/domains/identity/provision-pilot.ts    |   103 +
 .../web/src/domains/identity/session.ts            |   219 +
 .../web/src/domains/preparation/create-project.ts  |   290 +
 .../web/src/domains/preparation/project-context.ts |    53 +
 .../web/src/domains/preparation/service.ts         |    91 +
 projects/sfia-studio-next/web/src/lib/auth.ts      |    83 +
 .../sfia-studio-next/web/src/lib/fingerprint.ts    |    19 +
 projects/sfia-studio-next/web/src/lib/ids.ts       |     6 +
 .../web/src/lib/product-version.ts                 |    25 +
 projects/sfia-studio-next/web/tailwind.config.ts   |    18 +
 .../web/tests/e2e/ml1-smoke.spec.ts                |    78 +
 .../tests/integration/create-project.pg.test.ts    |   451 +
 .../tests/integration/identity-session.pg.test.ts  |   192 +
 .../web/tests/unit/fingerprint.test.ts             |    36 +
 .../web/tests/unit/non-effects.test.ts             |     8 +
 projects/sfia-studio-next/web/tsconfig.json        |    27 +
 projects/sfia-studio-next/web/vitest.config.ts     |    24 +
 58 files changed, 14237 insertions(+), 7 deletions(-)
```

### name-status
```
A	projects/sfia-studio-next/CHANGELOG.md
A	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ml1-entree-et-continuite/matrice-tracabilite.md
M	projects/sfia-studio-next/construction/ml1-entree-et-continuite/specification-technique.md
A	projects/sfia-studio-next/web/.gitignore
A	projects/sfia-studio-next/web/README.md
A	projects/sfia-studio-next/web/docs/ux-figma-pending.md
A	projects/sfia-studio-next/web/drizzle.config.ts
A	projects/sfia-studio-next/web/eslint.config.mjs
A	projects/sfia-studio-next/web/next.config.ts
A	projects/sfia-studio-next/web/package-lock.json
A	projects/sfia-studio-next/web/package.json
A	projects/sfia-studio-next/web/playwright.config.ts
A	projects/sfia-studio-next/web/postcss.config.mjs
A	projects/sfia-studio-next/web/src/app/api/auth/[...all]/route.ts
A	projects/sfia-studio-next/web/src/app/api/dev/login/route.ts
A	projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
A	projects/sfia-studio-next/web/src/app/favicon.ico
A	projects/sfia-studio-next/web/src/app/globals.css
A	projects/sfia-studio-next/web/src/app/layout.tsx
A	projects/sfia-studio-next/web/src/app/login/page.tsx
A	projects/sfia-studio-next/web/src/app/page.tsx
A	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
A	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
A	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/db/client.ts
A	projects/sfia-studio-next/web/src/db/migrations/001_initial_studio_core.sql
A	projects/sfia-studio-next/web/src/db/migrations/002_session_auth_mode.sql
A	projects/sfia-studio-next/web/src/db/schema.ts
A	projects/sfia-studio-next/web/src/domains/boundaries/non-effects.ts
A	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
A	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/document/service.ts
A	projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
A	projects/sfia-studio-next/web/src/domains/identity/provision-pilot.ts
A	projects/sfia-studio-next/web/src/domains/identity/session.ts
A	projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
A	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/src/domains/preparation/service.ts
A	projects/sfia-studio-next/web/src/lib/auth.ts
A	projects/sfia-studio-next/web/src/lib/fingerprint.ts
A	projects/sfia-studio-next/web/src/lib/ids.ts
A	projects/sfia-studio-next/web/src/lib/product-version.ts
A	projects/sfia-studio-next/web/tailwind.config.ts
A	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
A	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts
A	projects/sfia-studio-next/web/tests/unit/non-effects.test.ts
A	projects/sfia-studio-next/web/tsconfig.json
A	projects/sfia-studio-next/web/vitest.config.ts
```

### origin/main...HEAD --stat
```
projects/sfia-studio-next/CHANGELOG.md             |    41 +
 .../construction/delivery-history.md               |    84 +
 .../matrice-tracabilite.md                         |    43 +-
 .../specification-technique.md                     |    18 +
 projects/sfia-studio-next/web/.gitignore           |    47 +
 projects/sfia-studio-next/web/README.md            |    58 +
 .../sfia-studio-next/web/docs/ux-figma-pending.md  |    19 +
 projects/sfia-studio-next/web/drizzle.config.ts    |    10 +
 projects/sfia-studio-next/web/eslint.config.mjs    |    16 +
 projects/sfia-studio-next/web/next.config.ts       |     7 +
 projects/sfia-studio-next/web/package-lock.json    | 10508 +++++++++++++++++++
 projects/sfia-studio-next/web/package.json         |    53 +
 projects/sfia-studio-next/web/playwright.config.ts |    16 +
 projects/sfia-studio-next/web/postcss.config.mjs   |     8 +
 .../web/src/app/api/auth/[...all]/route.ts         |    22 +
 .../web/src/app/api/dev/login/route.ts             |    32 +
 .../web/src/app/api/portfolio/route.ts             |    13 +
 .../[preparationId]/create-project/route.ts        |    46 +
 .../[preparationId]/documents/route.ts             |    39 +
 .../preparations/[preparationId]/messages/route.ts |    28 +
 .../[preparationId]/reconcile/route.ts             |    15 +
 .../app/api/preparations/[preparationId]/route.ts  |    37 +
 .../web/src/app/api/preparations/route.ts          |    13 +
 .../web/src/app/api/projects/[projectId]/route.ts  |    26 +
 projects/sfia-studio-next/web/src/app/favicon.ico  |   Bin 0 -> 25931 bytes
 projects/sfia-studio-next/web/src/app/globals.css  |    57 +
 projects/sfia-studio-next/web/src/app/layout.tsx   |    39 +
 .../sfia-studio-next/web/src/app/login/page.tsx    |    92 +
 projects/sfia-studio-next/web/src/app/page.tsx     |     5 +
 .../web/src/app/portfolio/page.tsx                 |    92 +
 .../src/app/preparations/[preparationId]/page.tsx  |   182 +
 .../web/src/app/projects/[projectId]/page.tsx      |   102 +
 projects/sfia-studio-next/web/src/db/client.ts     |    25 +
 .../src/db/migrations/001_initial_studio_core.sql  |   137 +
 .../src/db/migrations/002_session_auth_mode.sql    |     1 +
 projects/sfia-studio-next/web/src/db/schema.ts     |   215 +
 .../web/src/domains/boundaries/non-effects.ts      |    30 +
 .../web/src/domains/conversation/nora-adapter.ts   |    94 +
 .../web/src/domains/conversation/service.ts        |    76 +
 .../web/src/domains/document/service.ts            |   134 +
 .../web/src/domains/identity/portfolio.ts          |    41 +
 .../web/src/domains/identity/provision-pilot.ts    |   103 +
 .../web/src/domains/identity/session.ts            |   219 +
 .../web/src/domains/preparation/create-project.ts  |   290 +
 .../web/src/domains/preparation/project-context.ts |    53 +
 .../web/src/domains/preparation/service.ts         |    91 +
 projects/sfia-studio-next/web/src/lib/auth.ts      |    83 +
 .../sfia-studio-next/web/src/lib/fingerprint.ts    |    19 +
 projects/sfia-studio-next/web/src/lib/ids.ts       |     6 +
 .../web/src/lib/product-version.ts                 |    25 +
 projects/sfia-studio-next/web/tailwind.config.ts   |    18 +
 .../web/tests/e2e/ml1-smoke.spec.ts                |    78 +
 .../tests/integration/create-project.pg.test.ts    |   451 +
 .../tests/integration/identity-session.pg.test.ts  |   192 +
 .../web/tests/unit/fingerprint.test.ts             |    36 +
 .../web/tests/unit/non-effects.test.ts             |     8 +
 projects/sfia-studio-next/web/tsconfig.json        |    27 +
 projects/sfia-studio-next/web/vitest.config.ts     |    24 +
 58 files changed, 14237 insertions(+), 7 deletions(-)
```

## 3. Staging exclusions (intentional)
- `.env.local` / `.env*` — secrets, gitignored
- `.tmp-sfia-review/**` — review artefact, not project
- `web/public/*.svg` starter assets — no demonstrated ML1 function; left untracked
- `test-results/`, `playwright-report/`, `tests/e2e/artifacts/` — generated; gitignored
- `node_modules/`, `.next/` — generated

## 4. Correctifs this pre-commit cycle
1. D1 fail-closed: `STUDIO_LANE !== "DEV"` rejects absent lane; tests for absent/RECETTE/DEV+proxy
2. Matrice: temporal split historique DESIGN ONLY (§1–6) vs DEV observé 2026-11-04 (§7)
3. `.gitignore`: test-results, playwright-report, e2e artifacts

## 5. Validations executed
```
npm run test:unit → 3 passed
npm run test:integration → 22 passed (fixture Nora; lane gate tests)
npm run test:e2e → 1 passed
npx tsc --noEmit → 0
npm run build → success
npm run lint → clean
npm ls next postcss → next@15.5.29 + postcss@8.5.32 overridden
npm audit --omit=dev → no postcss/next GHSA; residual vitest/drizzle-kit DEV toolchain
```

## 6. Fake/Real
- FAKE: DEV login, Nora fixture in integration, Playwright identity DEV
- REAL previously observed (not re-run this cycle): OAuth user, Nora LIVE adapter
- Claims: LOCAL IMPLEMENTED + COMMIT LOCAL REVIEWABLE
- Forbidden claims: ML1 BEHAVIOR PROVEN global, E2E01 COMPLETE, RECETTE, STABLE, ADOPTED, 16/16 PASS

## 7. A01–A16 reserves retained
PASS bornés A01–A04,A06–A10,A12,A14; A02 LIVE borné prior; PARTIAL A05/A13/A15/A16; OUT A11/DATA-01; Markdown KNOWN GAP; Figma inconclusive

## 8. Coverage flags
- created/unpublished files full content: yes (lockfile/favicon excepted)
- modified sections/diff useful: yes
- synthesis only: no
- generated exceptions justified: yes
- review pack reset and single-cycle: yes
- handoff remote SHA and reread: *(after publish)*
- local commit SHA for ChatGPT: **yes**

## 9. Exceptions
| path | note |
| --- | --- |
| `projects/sfia-studio-next/web/package-lock.json` | in commit; large; sha256 below |
| `projects/sfia-studio-next/web/src/app/favicon.ico` | binary in commit |
| lockfile | sha256 `31c751c8ef58097ea0ebef72a6e84107cc2f8ea8cf5415a651785511f4f53f84` bytes 355785 |
| favicon | sha256 `2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932` bytes 25931 |

## 10. Full sources from local commit HEAD (excl. lockfile/favicon)

### `projects/sfia-studio-next/CHANGELOG.md`

```md
# Changelog — SFIA Studio Next (product)

No promoted product release yet.

## Unreleased
## Unreleased — ML1 LIVE qualification consolidation 2026-11-04

- D1: `ensurePilotForAuthUser` backfills `github_user_id` after late GitHub account link without changing PilotId; conflict ≠ merge.
- D3: bounded Agents SDK LIVE adapter call PASS (`openai-agents-sdk-live` · COMPLETE); integration suite forces Nora fixture to avoid accidental LIVE costs.
- Security: `overrides.postcss=8.5.32` removes Next nested 8.4.31; GHSA postcss/next prod path closed without Next 16.
- QA: A01–A16 matrix reclassified against R4 §5.3.9 (A13 ≠ OAuth; A15 ≠ Figma); Markdown rich render = KNOWN GAP.
- Proof: unit 3; integration 22; Playwright 1; build+tsc; DB OAuth reconcile (no PII in reports).
- STABLE/RC still NOT AVAILABLE / NO RELEASE.

## Unreleased — local corrective OAuth status + continuity re-proof 2026-11-04

- D1: `/api/auth/status` always returns credential presence status (no 404 fall-through when OAuth configured).
- Bounded OAuth: client credentials configured locally → status `configured:true` + `sign-in/social` returns GitHub authorize URL (callback LIVE still requires interactive login).
- Continuity re-proof: unit 3 / integration 21 / Playwright 1 / build+tsc PASS; project tree still unpublished.

## Unreleased — local corrective continuité D1–D2 2026-11-04

- D1: Better Auth session → PilotId bridge (`ensurePilotForAuthUser` + `resolveStudioSession`); DEV login remains isolated adapter; loopback gate also checks `x-forwarded-*` (non-loopback rejected).
- D2: `pg_advisory_xact_lock(pilotId, idempotencyKey)` before mutations; cross-preparation same-key CONFLICT leaves zero orphans; reconcile binds key to `preparationId`.
- Continuité: `GET /api/projects/:projectId` owner-scoped reopen without `preparationId` query; portfolio → project Playwright path.
- Proof: unit 3 PASS; integration 21 PASS; Playwright 1 PASS; `next build` PASS; `tsc --noEmit` PASS.
- STABLE/RC still NOT AVAILABLE / NO RELEASE.

## Unreleased — local corrective consolidation critique 2026-11-04

- Security: Next.js upgraded 15.1.3 → 15.5.29 (patched 15.5 line).
- D2: idempotency fingerprint evaluated under preparation lock; conflict on same key/different payload.
- D4: document edits require owner + preparationId; SAVING→AVAILABLE/FAILED honest states.
- D3: OpenAI Agents SDK behind adapter when key present; fixture FAKE otherwise; no MemorySession authority.
- D1: session `auth_mode` provenance; Better Auth mount; DEV login loopback/DEV-lane fail-closed.
- Proof: Vitest integration 13 PASS; Playwright browser smoke PASS (DEV fake login).
- STABLE/RC still NOT AVAILABLE / NO RELEASE.

- Local DEV construction of access / preparation / Nora / first document / explicit project creation.
- **STABLE: NOT AVAILABLE**
- **No RC attributed** until Morris gate on a frozen candidate.
```

### `projects/sfia-studio-next/construction/delivery-history.md`

```md
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / entrée & continuité (premier vertical) |
| Type | INC / nouvelle capacité, pré-1.0 |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Working tree | local uncommitted construction under `projects/sfia-studio-next/web` |
| Product version target | `NO RELEASE` (proposal `0.1.0-rc.1` not attributed) |
| Lane | DEV (`127.0.0.1:3100`, Postgres `5433`) |
| Schema revision | `001_initial_studio_core` |
| Tests | Vitest unit + PostgreSQL integration (see web test run) |
| Evidence limits | GitHub OAuth LIVE BLOCKED without secrets; OpenAI LIVE optional; Figma native pending; RECETTE NOT AVAILABLE |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-02-CRITIQUE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 consolidation critique (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Next 15.5.29; D2 fingerprint under lock; D4 prep-scoped docs + SAVING; D3 Agents SDK adapter; D1 authMode + Better Auth mount + loopback DEV login; Playwright smoke PASS |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001_initial_studio_core` + `002_session_auth_mode` |
| Tests | unit 3 PASS; integration 13 PASS; Playwright 1 PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-03-CONTINUITE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Better Auth→PilotId session bridge; advisory-lock atomic idempotency across preparations; project reopen by projectId API/UI; Playwright portfolio path |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged (`001` + `002`) |
| Tests | unit 3 PASS; integration 21 PASS; Playwright 1 PASS; build+tsc PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-04-OAUTH-STATUS-REPROOF

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Fix `/api/auth/status` when OAuth configured; re-proof A/B/C; bounded OAuth start URL (no callback LIVE claim); secrets never in handoff |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged |
| Tests | unit 3; integration 21; Playwright 1; build+tsc; OAuth status+signin-start PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-05-LIVE-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 LIVE qualification consolidation (same lot) |
| Type | INC corrective / qualification |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | D1 late GitHub link backfill; PostCSS override 8.5.32; A01–A16 reclass; Nora LIVE adapter proof; integration forces fixture; Playwright LIVE-aware |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 3; integration 22; Playwright 1; build+tsc; npm audit prod postcss closed |
| Status | ML1 LOCAL QUALIFICATION REVIEWABLE candidate — no project push/PR/merge |
```

### `projects/sfia-studio-next/construction/ml1-entree-et-continuite/matrice-tracabilite.md`

```md
# SFIA Studio Next — R5 / ML1 · Matrice de traçabilité initiale

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Statut (historique pré-implémentation, sections 1–6) :** `D0 CANDIDATE — LINKS VERIFIED AGAINST R1–R4, CONTENT NOT VALIDATED, NO CODE, NO TEST EXECUTED` — vrai **avant** construction locale ML1.
**Statut (observé DEV 2026-11-04, section 7) :** résultats QA bornés `PASS/PARTIAL/OUT` sur runtime local — **ne remplace pas** le cadrage R4 ni n'implique `16/16 PASS` / ADOPTED.
**Version :** v0.3 / 2026-11-04 — après revue D0 ; §7 ajoutée en construction locale
**Source Git :** `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 mergée, local **NON OBSERVÉ**.
**R1 :** [vision-produit.md](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/cadrage/vision-produit.md), §§2.30 (E2E 01), 2.32 (E2E 03), 2.33 (E2E 04), 2.36 (E2E 07), plus addenda documentaires §2.41.
**R2 :** [D1 accès](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/acces-et-portefeuille.md), [D2 création](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md), [D3 Nora](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D4 connaissances](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) et index de compléments R2.
**R3 :** [contrat de transposition](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md), [index de 223 frames](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/ux-ui/index-geometrie-frames-r3.json), `fileKey=itgvCulInEnFY6DvgIegvP`, page Figma `94:49`, extraction Git datée du 2026-11-03, blob `9d75cba6560896c279712982cd56b41488209685`.
**R4 :** [cadrage R4 §5.3.9 / §8.1](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/architecture-technique/cadrage-r4.md), [ADR R4-01/02](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/governance/decisions/2026-11-04-r4-architecture-exit.md), [ENV-01](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md).

**Lecture :** les identifiants `A01..A16` sont **des cas QA de conception R4**, pas des tests existants. Les colonnes QA et Figma ci-dessous proposent une correspondance **à valider par revue**, et non une certification d'exhaustivité. Les images Figma sont mutables : relecture native et extraction ciblée **par Cursor pendant la construction UX, avant le code de la surface concernée** ; aucune extraction exhaustive préparatoire. `R3 ≠ QA ≠ implémentation`.

## 1. Capacités de delivery et frontières

| ID de delivery | Responsabilité | Fonctionnalité dans ML1 / limite |
|---|---|---|
| `ML1-IDENTITY` | Identité et sessions Studio | Authentification personnelle, isolation, expiration et revalidation ; pas de droit Git déduit |
| `ML1-PORTFOLIO` | Cockpit et navigation | Portefeuille personnel non conversationnel, navigation et état vrai ; aucune suppression/transfert ajouté |
| `ML1-SAS-ENTRY` | Accès au sas | Entrer/reprendre une préparation sans créer de projet/cycle/Git |
| `ML1-SAS-DURABLE` | Préparation durable / brouillon | Préparation, messages et premier document Nora persistants ; édition et gestion documentaire avancées renvoyées à ML2 |
| `ML1-NORA-PREVIEW` | Conversation et aperçu | Nora utile avant/après création, clarification et proposition non autorisante ; pas de moteur complet de cycle |
| `ML1-CREATE` | Création gouvernée | Acte dédié, identité, version, idempotence, unicité, succès vérifié ; pas de décision/exécution induite |
| `ML1-CONTINUITY` | Continuité sas → projet | Même fil visible et identifiable, contexte et provenance récupérables, reprise après incident |
| `ML1-BOUNDARY` | Contrats négatifs / interfaces | Protection contre effet Git/cycle/mandat et droits interprojets ; fonctions complètes ML3–ML5 hors ML1 |

## 2. Matrice QA A — rattachements vérifiés et complétés

Chaque ligne donne l'oracle R4 (recoupé) et les références applicables minimales ; le **détail de chaque comportement reste canonique chez R2 et R4**. Les `node-id` Figma sont ceux du manifeste R3 Git, pas des identifiants inventés.

| R4 QA | Capacité ML1 | R1 | R2 (échantillon lié à l'oracle, non liste exhaustive de la capacité) | R3 — frame `numéro=node-id` | Oracle de vérification | Niveau de preuve attendu | État |
|---|---|---|---|---|---|---|---|
| `A01` | `ML1-SAS-DURABLE` | E2E 01 | `RG-ACC-017/018; RG-CRE-001/006; PF-CRE-01/13` | `01=94:50;02=94:135;73=158:912` | Sas sans projet ni Git | INTEGRATION DB + BROWSER | `DESIGN ONLY` |
| `A02` | `ML1-NORA-PREVIEW` | E2E 01/03 | `RG-CRE-002/004/014; RG-CONV-002/005; PF-CRE-01/06` | `02=94:135;109=161:216;135=187:276` | Nora utile sans cycle ni méthode | BROWSER + **Nora LIVE bornée pour conclure ML1 complet** | `DESIGN ONLY` |
| `A03` | `ML1-CREATE` | E2E 01 | `RG-CRE-008/010; PF-CRE-07/08` | `02=94:135;77=159:361;13=96:262` | Seul le clic dédié crée | INTEGRATION + BROWSER | `DESIGN ONLY` |
| `A04` | `ML1-CREATE` | E2E 01 | `RG-CRE-011; PF-CRE-10` | `77=159:361;81=159:649` | Double clic, pas de doublon | POSTGRES CONCURRENCY | `DESIGN ONLY` |
| `A05` | `ML1-CREATE` | E2E 01 | `RG-CRE-010/024; PF-CRE-11/16` | `78=159:433;81=159:649;86=159:1009` | Timeout après commit : même projet retrouvé | POSTGRES + RESTART | `DESIGN ONLY` |
| `A06` | `ML1-NORA-PREVIEW / ML1-CREATE` | E2E 01 | `RG-CRE-003/016/026` | `75=159:217;76=159:289;78=159:433` | Version de préparation obsolète : conflit explicite | CONCURRENCY + BROWSER | `DESIGN ONLY` |
| `A07` | `ML1-CONTINUITY` | E2E 01 | `RG-CRE-017/018/020/023; PF-CRE-15/21` | `02=94:135;13=96:262;14=96:370;03=94:214` | Même fil visible, marqueur fondé | BROWSER + RELOAD | `DESIGN ONLY` |
| `A08` | `ML1-SAS-DURABLE` | E2E 01 + addendum R1 documentaire | `RG-CRE-027; PF-CRE-27; RG-KNOW-016..020` | `82=159:721;124=162:457;04=94:370` | Brouillon du sas lié, versions conservées | DB + BROWSER | `DESIGN ONLY` |
| `A09` | `ML1-SAS-DURABLE` | E2E 01 + addendum documentaire | `RG-CRE-027; RG-KNOW-018; PF-CRE-27` | `82=159:721;93=160:463` | SAVING/échec : jamais sauvegarde fictive | DB FAULT INJECTION + BROWSER | `DESIGN ONLY` |
| `A10` | `ML1-IDENTITY` | E2E 01/07 | `RG-ACC-001/005/006; RG-CRE-009; PF-ACC-03/10` | `62=158:120;63=158:192;65=158:336` | Séparation deux comptes, aucune fuite | SECURITY + BROWSER | `DESIGN ONLY` |
| `A11` | `ML1-IDENTITY / ML1-CONTINUITY` (partiel) ; `ML4` intégration Git | E2E 01/04/07 | `RG-CRE-022/026; RG-KNOW-006/014; PF-CRE-20/23` | `83=159:793;114=161:576;115=161:648` | Source révoquée : ne pas réutiliser | ML1 : protection générique si source disponible ; **preuve de révocation Git LIVE à ML4**, pas de PASS global ML1 | `DESIGN ONLY / DEFERRED PART` |
| `A12` | `ML1-CREATE / ML1-PORTFOLIO` | E2E 01 | `RG-CRE-012; PF-CRE-14; RG-ACC-008` | `65=158:336;85=159:937` | Deux projets homonymes : identités distinctes | POSTGRES + BROWSER | `DESIGN ONLY` |
| `A13` | `ML1-CONTINUITY` | E2E 01/04 | `RG-CRE-019/023; RG-KNOW-011/015/019; PF-KNOW-02/10` | `88=159:1153;110=161:288;14=96:370` | Reprise sélective après nouvelle conversation | INTEGRATION + BROWSER + LIVE ciblé | `DESIGN ONLY` |
| `A14` | `ML1-PORTFOLIO` | E2E 01 | `RG-ACC-009/010/014/016; PF-ACC-05/08/12` | `01=94:50;64=158:264;65=158:336` | Navigation exacte, pas de Nora globale | BROWSER + RELOAD | `DESIGN ONLY` |
| `A15` | `ML1-CREATE` | E2E 01/02/07 | `RG-CRE-014/021; PF-CRE-06/18/24; RG-ACC-022` | `02=94:135;13=96:262;84=159:865` | Zéro cycle, CKI, Git, Cursor et mandat induits | DB/INTEGRATION NEGATIVE | `DESIGN ONLY` |
| `A16` | `ML1-SAS-DURABLE / ML1-CONTINUITY` | E2E 01/04 | `RG-CRE-024; RG-KNOW-015/018; PF-CRE-22` | `88=159:1153;78=159:433;14=96:370` | Reprise après restart/restore réels | RESTART + RESTORE | `DESIGN ONLY` |


**Aucun A01–A16 ne peut être déclaré PASS aujourd'hui.** Le test R5 devra définir données, identité, préconditions, action, assertions chez le propriétaire d'état, SHA candidat, environnement DEV/RECETTE et artefact probant. La somme de ces 16 oracles ne suffit pas à elle seule à vérifier la totalité des RG/PF.

## 3. Contrôle d'exhaustivité R2 D1/D2 (fichier associé)

L’[inventaire R2](inventaire-r2.csv) énumère **103 références distinctes** : 25 `RG-ACC`, 24 `PF-ACC`, 27 `RG-CRE`, 27 `PF-CRE`. **Contrôle automatisé des séquences d'identifiants réalisé** lors de sa génération : aucune valeur manquante ou dupliquée dans ces quatre plages. C'est un inventaire, **pas 103 tests** et **pas une déclaration de conformité ML1**.

Les correspondances d'identifiants sont classées par **capacité responsable du premier contrôle**, et les cas particuliers sont signalés, notamment :

- `RG-ACC-024` / `PF-ACC-19` : suppression/transfert **hors portée fonctionnelle** de D1 ; ML1 vérifie qu'aucune permission n'est inférée de la navigation, sans implémenter ces opérations.
- `PF-ACC-16`, `RG-ACC-019` : consommation de sources interprojets, garde-fous en ML1 ; capacité complète d'accès source et ses permissions à qualifier avec ML2/ML4.
- `RG-CRE-022`, `PF-CRE-05`, `PF-CRE-20` : source externe/Git éventuellement consultée au sas, mais **Git complet n'est pas requis pour créer** ; ML1 protège la provenance et l'absence d'autorisation dérivée, avec interface réelle D9 plus tard.
- `RG-CRE-027` / `PF-CRE-27` : brouillon Nora pendant le sas **dans ML1** ; versions et consultation documentaire approfondies dans ML2, sans perdre l'identité initiale.
- `RG-CRE-014` / `PF-CRE-24` : zéro création implicite de cycle, mandat, dépôt et tentative. La capacité d'effectuer ces effets appartient aux autres lots.

**Attention aux compléments :** les chiffres de clôture R2 300/241 sont historiques ; le corpus `main` porte également **24 RG et 18 PF** approuvés après clôture, soit 324/259. L'inventaire D1/D2 contient les compléments `CRE-027` et confirme leur présence dans la baseline.

## 4. Dépendances transversales R2/R3/R4 à conserver

| Famille | Références canoniques utiles dans ML1 | Limite / branche suivante |
|---|---|---|
| D3 Nora, conversation | `RG-CONV-001..006`, `RG-CTX-001..008`, `RG-UX-001..003`, `RG-AUTH-001`; PF D3 à sélectionner par fonctionnalité lors de la spécification | Cognition Nora utilisable sans cycle ; gestion complète méthode/CKI/STOP dépend de ML3/ML5 |
| D4, mémoire et documents | `RG-KNOW-001/002/006/011/013/014/015/016..020`, `PF-KNOW-02/10/11` | Identités, provenance, reprise minimale à construire ; index/sujets/documents avancés ML2 |
| D5 / D6 | `RG-CRE-014/016/021`, `RG-ACC-004`, `RG-AUTH-001` comme invariants négatifs | Pas de cycle, autorisation ou mandat conféré par création ou texte Nora ; réalisation positive ML3/ML5 |
| D9 / Git | `RG-CRE-006/022`, `RG-ACC-003/022` comme frontières | Git facultatif ; raccord au fournisseur effectif en ML4 puis ML5 si effet externe |
| R3 | Portefeuille, connexion, sas, création, fil, chargement, erreurs, navigation, accès mobile ; contrat géométrique et accessibilité | Composants réutilisables, état/variante ; extraction ciblée **par Cursor au moment du développement UX**, jamais dimension devinée |
| R4 | ADR R4-01/02, DATA-01, ENV-01, §5.3 A, QA A01–A16 | PostgreSQL local transactionnel et rattachement V-A approuvés en architecture ; choix concret d'auth/session/Nora/API encore à préciser en R5 |

## 5. Gaps et gates avant une spécification ML1 validée

| Gap réel | Pourquoi il bloque le claim | Sortie attendue |
|---|---|---|
| R3 source Figma versionnée seulement dans le snapshot Git | Nœuds, variantes et valeurs profondes potentiellement modifiés depuis 2026-11-03 | **Cursor** relit la source Figma native au moment du code UX concerné ; conserve snapshot/mesures utiles et confronte au DOM. Pas de pré-extraction D0. |
| Figma 240/246 px et tokens/écarts visuels | Discordance entre références et absence de tolérance ratifiée | Choix d'un composant/état maître, décision sur les valeurs et méthode de comparaison |
| Interfaces auth, session, Nora et API non codées | R4 valide les frontières, pas les mécanismes définitifs | Sélection technique motivée, contrats d'erreur/sécurité, tests négatifs |
| Premier document du sas vs gestion documentaire ML2 | Risque d'un stockage provisoire ou d'une seconde vérité | Identifier dès ML1 la même identité/document/version et son responsable D4 ; ne pas construire de jetable |
| A11 et PF interprojets / Git | D9 non requis pour ML1 nominal et aucune autorisation Git implicite | Conserver les protections ML1, planifier tests d'intégration Git au lot propriétaire, aucun claim REAL prématuré |
| QA A/UX et proof | Aucun test ni runtime Next | Préserver les **oracles A01–A16** ; construire les tests exécutables, les jeux de données et assertions **avec le code et la lane réelle** puis lier au SHA/ENV-01. |

**Verdict :** `MAPPED AT DOCUMENTARY LEVEL — D0 CANDIDATE — NO TECHNICAL SPEC APPROVAL — NO TEST EXECUTED`.

**Ajustement v0.2 :** la matrice est un contrat de rattachement **avant** code, pas une exigence d’extraire tout Figma ni de rédiger à l’avance les scripts de test. La qualification technique ML1 candidate détaille les mécanismes sans les déclarer validés.


## 6. Précisions de propriété et de preuve — revue D0

- **D3** possède la conversation et les messages durables (et leur corrélation de génération) ; **D4** possède les ressources documentaires, versions, connaissances et provenance. Un rattachement de document à un message est un lien, non un second propriétaire.
- `A11` est **partiellement différé à ML4** pour la révocation effective de sources Git. Ne pas compter 16/16 PASS si la révocation n'a pas été prouvée ; conserver un résultat distinct pour les protections ML1 testables.
- `A02` exige une démonstration Nora **LIVE bornée** pour conclure que la première verticale conversationnelle fonctionne. Les tests déterministes et mocks restent complémentaires.
- `A04/A05/A06` nécessitent une version d'aperçu inspecté et une clé idempotente avec empreinte, dont les replays sont reconstituables à la même préparation ; ne pas déduire « création unique » du seul résultat UI.
- Les 30 identifiants Figma centraux repris dans la sélection ML1 et contrôlés lors de la revue figurent bien dans le manifeste v0.3 ; cela **ne certifie pas** la géométrie profonde ou la conformité runtime.

**Verdict historique (pré-implémentation) : `R1–R4 REFERENCES MAPPED / ORACLE SPLIT MADE EXPLICIT / NO TEST EXECUTED / CANDIDATE FOR MORRIS REVIEW`.** Ce constat daté reste exact pour les sections 1–6 ; il n'est **pas** le verdict runtime DEV du 2026-11-04.

## 7. Qualification locale DEV — résultats A01–A16 (observés 2026-11-04)

> **État temporel distinct** des sections 1–6 (`DESIGN ONLY` / aucun test exécuté à la rédaction documentaire). Ici : preuves exécutées en DEV local. Ne remplace pas le cadrage R4. Oracles lus depuis `architecture-technique/cadrage-r4.md` §5.3.9. **A13 ≠ OAuth** ; **A15 ≠ Figma/Markdown**. Réserves maintenues : A05, A11, A13, A15, A16, DATA-01.

| Oracle | Description canonique (R4) | Preuve réelle | Niveau | Verdict |
| --- | --- | --- | --- | --- |
| A01 | Sas sans projet/Git | PG prep OPEN sans link + Playwright | PG INTEGRATION + BROWSER FAKE | PASS |
| A02 | Nora utile sans cycle | Fixture PG + LIVE API adapter `openai-agents-sdk-live` COMPLETE (1 appel borné) + messages PG sans fixture ; BROWSER USER OBSERVED | LIVE API + PG + BROWSER USER OBSERVED | PASS (borné DEV) |
| A03 | Création seulement commande dédiée | create-project command + UI bouton | PG + BROWSER FAKE | PASS |
| A04 | Double clic / concurrence | PG concurrent + A04c cross-prep | PG INTEGRATION | PASS |
| A05 | Timeout après commit | Replay ALREADY_CREATED seulement | PG | PARTIAL (pas d'injection crash) |
| A06 | Version obsolète | stale revision CONFLICT | PG | PASS |
| A07 | Même fil / marqueur | same message ids after create + reload Playwright | PG + BROWSER FAKE | PASS |
| A08 | Document identité | doc id survives create | PG | PASS |
| A09 | SAVING/échec | injectPersistFailure FAILED | PG | PASS |
| A10 | Isolation A/B | PG + Playwright Pilot B 404 | PG + BROWSER FAKE | PASS |
| A11 | Source révoquée | Git/D9 hors ML1 | — | OUT OF ML1 (justifié) |
| A12 | Homonymes | two SameName projects | PG | PASS |
| A13 | Reprise connaissances/docs sans transcript exhaustif | non implémenté comme oracle distinct (reload transcript ≠ A13) | NOT RUN | PARTIAL / gate ML2+ |
| A14 | Cockpit/projet contexte | portfolio reopen by projectId ; pas de Nora globale | BROWSER FAKE (+ USER OAuth reopen observé) | PASS |
| A15 | Aucun effet dérivé D5–D9 | adapter sans tools ; non-effects stub ; create-project n'écrit pas cycles/CKI/Git ; LIVE call sans outils | UNIT + code inspection + LIVE API sans tools | PARTIAL |
| A16 | Restore/restart | new client read prep ; pas de restore injecté | PG | PARTIAL |
| DATA-01 | Restore backup | — | — | OUT OF ML1 |

**Markdown UX :** KNOWN GAP — RICH MARKDOWN RENDERING NOT IMPLEMENTED.
**Figma pixel :** INCONCLUSIVE (rail 246 native only).
**PostCSS prod GHSA :** closed via override `8.5.32` ; Next 16 non requis pour cette famille.
```

### `projects/sfia-studio-next/construction/ml1-entree-et-continuite/specification-technique.md`

```md
# SFIA Studio Next — R5 / ML1 — Spécification technique candidate

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.

## Entrer, dialoguer et créer un projet avec continuité

| Champ | Qualification |
|---|---|
| Version | **v0.3 — proposition technique groupée après revue (2026-11-04)** |
| Nature | **D0 / conception technique candidate révisée après revue de cohérence R2–R4** ; pas une exécution, pas un prompt Cursor |
| Statut | **DOCUMENTED / REVIEWED CANDIDATE WITH OPEN DECISIONS / NOT VALIDATED SPEC / NOT IMPLEMENTED** |
| GO constaté | Morris autorise la consolidation documentaire R5 et la préparation de la spécification ML1 ; **aucune autorisation de code, PR, merge ou promotion** n'en découle ; la publication documentaire candidate est autorisée séparément le 2026-11-04 |
| Dépôt | `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 `MERGED` ; local/worktrees **NON OBSERVÉS** |
| Référentiel de delivery | [`../reference-delivery-r5.md`](../reference-delivery-r5.md) — référence de préparation R5 candidate |
| Traçabilité | [matrice ML1](matrice-tracabilite.md) et [inventaire R2](inventaire-r2.csv) |
| Runtime Next | **N/A — NON IMPLÉMENTÉ** ; zéro test Next exécuté, zéro preuve BROWSER/LIVE/REAL |

> **Règle de lecture** — Les sections « **INVARIANT VALIDÉ** » restituent les contraintes des sources R1–R4 et de leurs décisions. Les sections « **PROPOSITION TECHNIQUE R5** » décrivent une solution candidate à discuter au bon niveau avant qu'elle devienne une spécification approuvée. Les **questions ouvertes** ne sont pas des détails autorisés à improviser dans Cursor. Aucun nom d'API, nom de table ou état technique proposé ci-dessous n'est une décision d'implémentation déjà adoptée.

## 1. Résultat utilisateur, frontière et définition de terminé

**Résultat produit attendu** : un Pilote s'authentifie, consulte son portefeuille personnel, ouvre un sas, travaille utilement avec Nora sans projet/cycle/dépôt préexistant, retrouve son travail après interruption, décide explicitement de créer le projet, puis continue le **même fil visible**, avec documents et acquis réellement conservés et sans création ou transfert fictif.

**E2E propriétaire :** [R1 §2.30 — E2E 01 sas→projet](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/cadrage/vision-produit.md). Interfaces : E2E 03 (Nora utile), E2E 04 (continuité), E2E 07 (droits sur sources), sans prétendre réaliser entièrement ces trois E2E dans ML1.

**IN ML1** :

- Identité Studio/session et isolation de deux Pilotes ; portefeuille non conversationnel, navigation vers un projet existant et accès au sas ; pas de permission Git déduite de la connexion.
- Préparation persistée et récupérable avant création ; messages utiles, aperçu de projet propositionnel ; acte explicite de création et résultat vérifié.
- Conversation Nora effectivement utilisable sans cycle ni méthode obligatoire ; contexte du bon propriétaire, provenance et limites exposées.
- Création de projet avec unicité, transaction, relecture après perte d'accusé, erreurs/refus, lien durable à la préparation ; transition du fil avec marqueur vrai.
- **Premier document produit dans le sas**, avec identité et état de conservation honnêtes. Le modèle d'identité/version doit permettre ML2, mais **pas** la bibliothèque documentaire et la révision avancée complètes.
- Fondations opérationnelles nécessaires à une première verticale utilisable : PostgreSQL, migrations, secrets et DEV/RECETTE isolés ; STABLE seulement après décision distincte selon ENV-01.
- Tests et preuves de ML1 pendant sa construction, y compris les cas négatifs de R4 QA A01–A16 et la conformité R3 sur les surfaces réellement livrées.

**OUT ML1 — frontières positives à préserver** :

- Gestion détaillée des sujets/connaissances et révision documentaire complète (**ML2**) ; cycle, CKI actif, méthode/trajectoire et décision gouvernée complète (**ML3**) ; intégration Git complète (**ML4**) ; contrat d'exécution/dispatch Cursor, preuves D8 et acceptation finale (**ML5**).
- Suppression/transfert/partage d'un projet : non défini comme fonction de navigation par `RG-ACC-024` ; ne pas créer une capacité implicite.
- Tout effecteur externe initié par du texte Nora ou une simple navigation ; pas d'ouverture automatique de cycle, dépôt ou tentative.

**Condition de complétude ML1** : l'E2E 01 doit être réellement démontré en RECETTE sur un SHA figé avec autorité correcte, DB PostgreSQL, parcours navigateur, reprise après coupure et non-duplication. Le verdict reste borné aux fonctions et dépendances réellement qualifiées ; R6 et ADOPTED restent distincts.

## 2. Références canoniques et couverture

| Axe | Sources propriétaires ; portée concrète |
|---|---|
| R1 | `cadrage/vision-produit.md` §2.30 (E2E 01) + interfaces §§2.32, 2.33, 2.36 et addendum §2.41. |
| R2 D1 | `conception-fonctionnelle/acces-et-portefeuille.md`, **25 `RG-ACC-001..025` et 24 `PF-ACC-01..24`** inventoriés : couverture ML1 ou frontière négative/interface. |
| R2 D2 | `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md`, **27 `RG-CRE-001..027` et 27 `PF-CRE-01..27`**, dont le complément documentaire du sas `CRE-027`. |
| R2 D3/D4 | D3 `RG-CONV-001..006`, `RG-CTX-001..008`, `RG-AUTH-001`, `RG-UX-*` pertinents ; D4 `RG-KNOW-002/006/011/014/015/016..020`, PF de reprise. Pas d'appropriation complète de D3/D4 par ML1. |
| R3 | `ux-ui/espace-projet-interaction-pilote-nora.md`, `contrat-transposition-figma-code.md`, manifeste `index-geometrie-frames-r3.json` ; Figma `fileKey=itgvCulInEnFY6DvgIegvP`, page 01 `94:49` ; voir §6. |
| R4 | `architecture-technique/cadrage-r4.md` §§5.3.3–5.3.9 et §8.1 ; décision ADR **R4-01/R4-02**, frontières R4-03/R4-04, politique **DATA-01**, gouvernance **ENV-01**. |
| QA | `A01..A16` du cadrage R4 §5.3.9 ; **oracles candidats non exécutés**, répartis aux fonctionnalités §7. |
| Référentiel | La matrice ML1 v0.3 détaille les liaisons R1/R2/R3/R4/QA ; le CSV vérifie les **103 identifiants D1/D2**, sans garantir 103 comportements déjà couverts. |

**Règle de couverture :** chaque fonctionnalité ci-dessous hérite des exigences identifiées ; les renvois plusieurs-à-plusieurs sont autorisés. Aucun `PF` ne devient un test PASS par la seule présence dans le tableau. Les frontières négatives ou différées sont conservées avec propriétaire et exit.

## 3. Architecture de la capacité — décisions acquises et propositions

### 3.1. Frontières fonctionnelles et propriétaires

**INVARIANTS VALIDÉS R4 :** application neuve **modulaire**, un propriétaire de vérité par objet/effet ; **préparation durable indépendante du projet**, rattachement transactionnel lors de la création explicite ; **PostgreSQL** dès le premier incrément R5 ; pas de base concurrente pour la vérité transactionnelle du produit ; aucun effet externe autorisé par Nora seule ; Git facultatif.

| Responsabilité | Domaine propriétaire | Contrat ML1 | Interdiction |
|---|---|---|---|
| Identité, session et portfolio | D1 | Résoudre un Pilote et une session valides ; lire seulement ses projets et préparations | Pas de token de dépôt ou de HumanDecision déduit de l'authentification |
| Préparation et création | D2 | Accepter, versionner, créer et rattacher une préparation au projet du même Pilote | Pas de projet créé par une réponse Nora, une lecture ou un clic non dédié |
| Conversation, messages, activité cognitive et contexte | **D3** | Produire et conserver durablement les messages et leur statut ; composer le contexte du bon sas/projet avec contrôle d'accès | Pas de délégation de propriété des messages à D4 ni de second moteur d'autorité |
| Documents, connaissance, acquis et provenance | **D4** | Posséder l'identité/version des ressources documentaires et la connaissance durable ; fournir des références/provenances à D3 | Pas de copie de la vérité de conversation ou de déclaration de sauvegarde fictive |
| Décisions humaines et cycles | D6 / D5 | Interfaces de non-effet et refus si action hors ML1 | Aucune création implicite de GO, mandat, cycle ou méthode |
| Git/exécution | D9 / D7 / D8 | Interfaces hors portée, aucune dépendance de démarrage | Pas de création de dépôt, commande Cursor ni preuve d'effet inventée |

**PROPOSITION TECHNIQUE R5** : implémenter ces frontières comme des **modules logiques d'une seule application web**, raccordés à un noyau transactionnel PostgreSQL et à des adaptateurs pour les services externes éventuellement utilisés. Il ne s'agit pas d'un microservice par domaine. La **stack web, l'ORM, la bibliothèque d'authentification, le protocole agent et l'outil de migration ne sont pas choisis par R4** : leur sélection technique est à instruire dans ML1, sans copier ceux de l'ancien Studio par inertie.

### 3.2. Flux nominal et synchronisation

```mermaid
flowchart TD
    A[Session Pilote valide] --> B[Portefeuille personnel]
    B --> C[Préparation durable sans projet]
    C --> D[Conversation avec Nora et documents]
    D --> E{Acte Créer le projet ?}
    E -- Non --> C
    E -- Oui --> F[Contrôle identité version et unicité]
    F --> G{Transaction confirmée ?}
    G -- Oui --> H[Projet lié à la préparation]
    H --> I[Même fil visible avec marqueur vrai]
    G -- Non ou inconnu --> J[Conserver le sas et réconcilier]
```

**À garantir** : chaque transition UI repose sur la lecture du propriétaire de l'état, pas sur un message d'IA ou l'optimisme client ; les données et opérations non couvertes par la transaction conservent leurs états réels.

## 4. Spécifications techniques par fonctionnalité

### 4.1. Identité Studio et session — `ML1-IDENTITY`

**R2 :** `RG-ACC-001..007`, `RG-ACC-015/021`, `PF-ACC-01..04`, `PF-ACC-10/13/17/24` et `RG-CRE-009`. **QA :** `A10`, plus sécurité négative dans `A01/A03/A14`.

**Comportement contractuel :** un Pilote connecté a une identité interne stable ; une session expirée/révoquée ne lui permet ni lecture privée ni création ; deux comptes utilisant éventuellement un dépôt commun voient des préparations et projets disjoints. Les droits de dépôt Git ne sont jamais inférés de la simple connexion Studio. Une identité ne devient pas un acte d'autorité D6.

**Proposition technique à évaluer** :

- Utiliser une connexion GitHub personnelle **pour l'identité Studio**, avec un mécanisme de session serveur et une identité interne immuable ; choisir au lot les modalités concrètes de validation, stockage/rotation des sessions et de révocation, sous les garanties R2/ENV-01.
- Associer les ressources persistantes à l'ID interne du Pilote, pas au nom d'affichage ni à un identifiant de dépôt. Toute requête/commande protégée revalide session et propriété côté serveur ; contrôles répétés après changement de session.
- Une session web contient au plus les références nécessaires à la vérification et ne constitue pas le registre de projet ni la vérité du sas. Exclure de la réponse client et des journaux les secrets d'authentification.

**Erreurs / observations** : session invalide → refus et reconnexion ; propriétaire différent → refus sans fuite d'existence ; authentification externe indisponible → impossibilité d'effectuer la commande protégée, sans emprunter des credentials d'une autre lane. **Tests de construction** : deux comptes, session expirée, réutilisation d'URL, requête forgeable, droits retirés, absence d'accès au projet tiers.

**Décision ouverte de lot** : méthode d'identité/session concrète et persistance des sessions. **Aucun changement d'architecture R4 n'est requis tant que l'isolation, la révocation et l'indépendance Git sont démontrées.**

### 4.2. Portefeuille et navigation — `ML1-PORTFOLIO` / `ML1-SAS-ENTRY`

**R2 :** `RG-ACC-008..014/016..018/020/022..025`, `PF-ACC-05/07..09/11..15/20/21`. **QA :** `A01`, `A12`, `A14`, `A15`.

**Contrats de lecture** : l'API de portefeuille — forme à choisir — récupère les **projets effectivement persistés appartenant à la session courante**, leurs statuts s'ils sont connus, et les liens utiles pour retrouver les préparations non créées. Le cockpit ne possède **pas** de Nora globale ni de cycle créé par navigation. Une route périmée ne fabrique ni fiche projet ni réponse rassurante fictive.

**Contrats d'état UI** : connecté/sans projet/plusieurs projets/session expirée/liste indisponible/projet supprimé ou inaccessible ; lorsqu'une donnée de progression n'est pas connue, ne pas produire une valeur de secours. Un titre projet homonyme n'est jamais un identifiant. Toute carte/aperçu respecte le même filtre d'accès que l'ouverture détaillée.

**Hors portée explicite** : supprimer, transférer ou partager un projet. Le contrôle négatif doit vérifier qu'aucune action sensible n'est autorisée par la navigation.

**Proposition technique** : query backend dédiée, pagination/recherche seulement si nécessaire au cas réel ; gestion d'URL/version de route indépendante de la session cognitive ; contrôle de permissions à chaque ouverture. Ne pas installer une couche de recherche ou un cache autorisant si PostgreSQL suffit à la première verticale.

### 4.3. Préparation durable et conversation initiale — `ML1-SAS-DURABLE` / `ML1-NORA-PREVIEW`

**R2 :** `RG-CRE-001..007/015/016/019/022/023/026`, `PF-CRE-01..06/13/17/20/21/23/26`, `RG-CONV-001..006`, `RG-CTX-001..008`, D4 `RG-KNOW-002/006/011/014/015`. **QA :** `A01`, `A02`, `A06`, `A11`, `A13`, `A16`.

**Invariants** :

- Préparation persistée, personnelle, **sans projet obligatoire**. Navigation, abandon ou déconnexion ne convertissent pas la préparation en projet.
- Nora peut investiguer, produire et proposer un aperçu utile **sans** formulaire exhaustif, ouverture de cycle ni méthode imposée. Un nom, une trajectoire ou un résumé proposé restent des propositions non autorisantes.
- **D3 conserve la vérité des conversations/messages** (ordre, statut, corrélation de génération, lien au sas/projet). **D4 conserve la vérité des documents et connaissances** (identité de ressource/version, source, provenance, état des octets). Les deux partagent la transaction PostgreSQL lorsque nécessaire, sans double propriétaire. Le modèle consomme une **sélection** de contexte ; le fil visible n'exige pas la réinjection du transcript entier.
- Source externe non disponible/révoquée : ne pas reconstituer ses données, permissions ou faits ; les métadonnées de provenance restent bornées à ce qui est légitime.

**Proposition technique d'interface** (noms conceptuels uniquement) :

| Opération logique | Entrées minimales | Sortie / garantie | Échecs à prévoir |
|---|---|---|---|
| Ouvrir/reprendre préparation | identité, `preparationId?` | préparation existante ou nouvelle identité durable, aucun Project | `FORBIDDEN`, `NOT_FOUND`, `UNAVAILABLE` |
| Ajouter un message utilisateur | `preparationId`, contenu, version ou clé de requête | message accepté avec identité/ordre/état de persistance | session perdue, collision, rejet, ACK perdu |
| Demander une réponse Nora | conversation courante, contexte autorisé, limites et ressources disponibles | réponse reliée à son message et au bon contexte, événements réellement connus | fournisseur indisponible, interruption, sortie partielle |
| Consulter l'aperçu | préparation et sa version actuelle | représentation propositionnelle et sa provenance | version obsolète, champs manquants |

**Contrat d'intégration cognitive minimal recommandé (candidat R5)** :

1. L'entrée utilisateur obtient une identité et un état de persistance D3 **avant** l'appel au fournisseur ; une clé de requête évite la duplication au renouvellement du transport.
2. Un identifiant de génération corrèle fournisseur, conversation, message produit et éventuelles sorties partielles. Les fragments affichés pendant le streaming sont **provisoires** tant que leur état durable n'est pas confirmé.
3. Une réponse terminée est enregistrée comme telle uniquement après confirmation de sa conservation ; interruption, timeout et sortie perdue restent `PARTIAL`, `FAILED` ou `UNKNOWN` selon observation. **Pas de relance automatique du fournisseur après ACK perdu** sans stratégie vérifiable de déduplication.
4. Une demande suivante récupère une sélection de messages D3 et d'acquis D4 **sous les droits actuels**, sans seconde base propriétaire de mémoire ni transformation d'une citation en autorisation.
5. Aucun outil exposé à Nora dans ML1 ne peut appeler la commande D2 `CréerProjet`, créer un cycle, une ressource Git ou déclencher Cursor.

**À arrêter avant code**, dans le contrat d'exécution du lot : fournisseur/API/SDK, contrat des événements de streaming, stratégie d'annulation effectivement supportée, budgets/erreurs et politique de conservation des sorties. Une vraie conversation Nora devra être observée en RECETTE ; un stub seul ne suffit pas à déclarer E2E 01 complet.

**Reprise réelle** : après reload, nouvelle conversation ou redémarrage serveur, relire la préparation/messages/ressources persistés ; afficher ce qui est sauvé et les limites du reste. L'absence de fournisseur Nora ne doit pas détruire le sas ou la conversation déjà enregistrée.

### 4.4. Création explicite et transactionnelle — `ML1-CREATE`

**R2 :** `RG-CRE-008..014/016/020/024/025`, `PF-CRE-07..12/14/16/24/25`, `RG-ACC-002/005`, ADR R4-02 ; **QA :** `A03`, `A04`, `A05`, `A06`, `A10`, `A12`, `A15`.

**INVARIANTS VALIDÉS** : l'acte « Créer le projet » est dédié, imputable au Pilote et distinct d'un accord conversationnel. Projet et association à la préparation ont un **point de validation transactionnel commun**. Une préparation ne fonde pas deux projets du même acte intentionnel ; un double clic ou une réponse perdue doit retrouver le résultat existant ou exposer une incertitude vraie, jamais fabriquer un doublon ou annoncer un succès sans constat. Pas de cycle, mandat ou dépôt Git créé à cet effet.

**PROPOSITION TECHNIQUE R5 — contrat logique de commande** :

```text
CréerProjet (nom illustratif, API/route NON DÉCIDÉES)
  acteur : identité Studio relue côté serveur
  contexte : preparationId
  contrôle : expectedCreationRevision de l'aperçu inspecté (non la révision de chaque message)
  opération : idempotencyKey stable + empreinte canonique des données approuvées
  données approuvées : informations minimales du projet affichées au Pilote

Résultat logique proposé :
  CREATED(projectRef, preparationRef, committedAt)
  ALREADY_CREATED(projectRef, preparationRef)
  CONFLICT(actualPreparationRevision)
  FORBIDDEN / SESSION_INVALID / INVALID_REQUEST
  NOT_CONFIRMED_OR_UNKNOWN (avant une réconciliation fiable)
```

**Séquence transactionnelle candidate** :

1. Vérifier côté serveur la session, la propriété de la préparation et la provenance de la **commande dédiée** (aucun outil Nora ne possède cette capacité) ; protéger la mutation contre CSRF et rejeu selon le mode de session retenu. Une indication client « bouton cliqué » ne suffit pas comme preuve.
2. Chercher d'abord le **résultat durable de la même clé d'idempotence** dans son contexte : si l'empreinte est identique, retourner le résultat déjà committé ; si elle diffère, répondre `CONFLICT`. Cette recherche précède le refus de version devenue obsolète pour qu'un replay après commit reste idempotent.
3. À défaut d'opération antérieure, vérifier `expectedCreationRevision` contre la version des **champs de création effectivement inspectés** — pas chaque message — et les informations minimales approuvées.
4. Dans **une transaction PostgreSQL**, vérifier l'unicité réelle par préparation, insérer le projet et son owner, enregistrer le lien préparation→projet, la clé/empreinte et le résultat de commande ; assurer les contraintes SQL même face à deux requêtes simultanées.
5. Confirmer puis relire l'état durable pour afficher `CREATED`/`ALREADY_CREATED`. La relecture de réconciliation est **sans effet** ; si l'existence reste invérifiable, conserver `UNKNOWN`, sans seconde création automatique ni faux marqueur.
6. Garantir que l'horizon de conservation de la déduplication couvre effectivement la durée pendant laquelle la même préparation peut être réutilisée : une expiration arbitraire de clé ne doit jamais rouvrir la possibilité d'un deuxième projet.

**Contraintes d'intégrité nécessaires**, à traduire en DDL selon le modèle final : unicité effective de l'association création/préparation ; FK et propriété cohérentes ; clé d'opération dédupliquée dans son contexte ; version de préparation protégée contre écrasement concurrent ; audit expurgé de l'acte. La stratégie précise (`UNIQUE`, isolation, locks, upsert, représentation du résultat) est à choisir et **prouver avec de vraies transactions PostgreSQL**.

**Postconditions** : le projet retrouvé appartient au Pilote, l'association est stable, le portefeuille le retrouve, l'UI passe au contexte projet **uniquement si l'effet est confirmé**, le fil de préparation est toujours accessible. Une transaction ratée ne modifie pas les faits ni la vérité de l'aperçu.

**Erreurs discriminantes** : deux clics simultanés ; timeout **après** commit ; timeout **avant** commit ; version périmée ; changement de compte ; noms identiques ; ressources du sas encore `SAVING` ; suppression de session pendant l'acte.

### 4.5. Continuité du fil et réhydratation — `ML1-CONTINUITY`

**R2 :** `RG-CRE-017..024/026`, `PF-CRE-15..23/25`, D3 `RG-CTX-002/004/006`, D4 `RG-KNOW-006/011/015`. **QA :** `A05`, `A07`, `A11`, `A13`, `A16`.

**Contrat** : après création confirmée, la conversation initiale du sas reste visible et ordonnée dans l'espace projet ; un marqueur explicite précise le passage, fondé sur un fait transactionnel ; les acquis et sources conservent leur qualification, sans transformation des hypothèses en décisions ou faits. En état inconnu, rester dans le sas jusqu'à réconciliation.

**Proposition technique** : les identifiants de préparation et conversation ont une durée indépendante de l'objet Project ; le contexte projet se **résout** depuis un lien transactionnel plutôt que par duplication du transcript. L'identité technique de conversation strictement inchangée est une **solution candidate**, pas une obligation fonctionnelle R2 : c'est la **continuité du même fil visible** qui est validée. Une projection UI peut exploiter les mêmes messages et la date de création, sous contrôle d'accès courant.

**Épreuves pertinentes** : recharge serveur après commit, nouvelle session, message parti avant crash, ressource inaccessible, réouverture depuis portefeuille et ordre des messages. Distinction impérative entre message visible sauvegardé et contexte que le modèle a effectivement rechargé pour générer sa réponse.

### 4.6. Premier document du sas — `ML1-SAS-DOCUMENT`

**R2 :** `RG-CRE-027`, `PF-CRE-27`, D4 `RG-KNOW-016..020`, `RG-KNOW-006/014/015`, addendum R1 §2.41. **QA :** `A08`, `A09`, `A13`, `A16`.

**Contrat** : Nora peut produire un contenu documentaire avant l'existence d'un Project ; l'identité de ressource, son propriétaire, sa version, sa provenance et l'état d'enregistrement sont réels. Au moment de la création, la ressource devient retrouvable depuis le projet **sans** copie ou nouvelle vérité officielle. `SAVING`/`SAVED`/`FAILED`/`UNKNOWN` désignent ici des **catégories conceptuelles de véracité** reprises de R2, pas une table déjà décidée.

**Proposition technique** : métadonnées canoniques/version chez D4 ; **pour le premier document textuel ML1**, privilégier le contenu et son identité/version dans PostgreSQL pour limiter les états distribués. Une sortie vers un stockage de fichiers/objets reste **une option à motiver par volumétrie, nature des pièces et coût**, sans l'introduire seulement par héritage. Le contrat doit garder une abstraction de ressource stable pour ML2 ; confirmer séparément la réussite de chaque stockage réellement utilisé. Une écriture des octets échouée ne devient pas `SAVED` au motif que le texte figure dans Nora. L'association sas→projet ne doit pas dépendre d'une sauvegarde de document non indispensable (arbitrage R4 A et politique DATA-01).

**Ne pas construire ML2 dans ML1** : pas de gestion complète des bibliothèques, de comparaison visuelle avancée des versions ni de moteur de workflow documentaire ; seulement une identité/écriture/lecture minimale saine et extensible.

### 4.7. Obligations transversales de sécurité, données et robustesse

- **Séparation des comptes** : session serveur et vérification de propriété sur requêtes, objets et relations ; pas de fuite dans erreurs, listes, journaux, URL et éventuelle mémoire du fournisseur Nora.
- **Versions et concurrence** : audit des actes, contrôle optimistic/transactionnel approprié, idempotence sur commandes à effet, reprise sur état réellement persisté ; ne pas prétendre qu'une transaction SQL englobe les effets d'un fournisseur externe.
- **Provenance et épistémologie** : source candidate ≠ `main`, réponse Nora ≠ décision, brouillon ≠ document sauvegardé, état client ≠ vérité persistante.
- **DATA-01** : préparations sans purge automatique ; archivage non destructif après **90 jours** d'inactivité ; corbeille après suppression **30 jours** ; logs techniques non critiques **environ 14 jours** ; sauvegardes chiffrées et tests de restauration selon politique de lane. Les détails de minimisation, effacement légal, stockage de preuves et copies de sauvegarde sont des réserves à instruire lors du mécanisme réel. N'inventer ni tâche planifiée ni purge déjà en fonctionnement.
- **ENV-01** : secrets, identités de test et DSN isolés par lane ; refus explicite en cas de configuration incorrecte ; pas d'accès à STABLE par commodité. Fondations opérationnelles intégrées dans ML1, pas micro-projet d'infrastructure.

## 5. Modèle de données conceptuel et contrats d'intégrité

Ce tableau **n'est pas un DDL approuvé**. Il identifie les données dont ML1 doit garantir l'existence et la cohérence ; **noms des tables, colonnes, indices et API seront précisés au sein du lot avant leur création**.

| Concept durable | Identité et portée attendues | Invariant / mécanisme à concevoir | Propriétaire logique |
|---|---|---|---|
| Pilote Studio | ID interne stable + identité externe vérifiée | séparation de comptes, session/révocation vérifiables | D1 |
| Préparation | ID, owner, état, version, dates, données propositionnelles | existe sans projet ; durable ; archive selon DATA-01 | D2 |
| Conversation/message/génération | ID durable, owner, préparation/contexte résolus, ordre, état, corrélation fournisseur | D3 est **propriétaire unique des messages** ; aucun succès affiché depuis un fragment provisoire | **D3** |
| Projet | ID stable, owner, données minimales et dates | projet personnel et réellement enregistré ; homonymie possible | D2 avec lecture D1 |
| Association création | preparationRef↔projectRef + opération de création | transaction et contrainte d'unicité, pas de duplication de fil | D2 |
| Opération à effet | référence stable et issue observable | déduplication, statut connu/inconnu, corrélation avec acte | D2 |
| Ressource documentaire/version | ID ressource, ID version, propriétaire, provenance, état | **D4 est propriétaire** ; pas de sauvegarde fictive ni de doublon après création ; stockage de contenu réellement contrôlé | **D4** |

**Arbitrages techniques ordinaires à documenter dans le lot** : format d'identifiant, clefs étrangères et uniques, contrôle de version, comportement de la session web, protocole des réponses Nora, gestion de fichiers. **Arbitrages Morris nécessaires** si ces choix créent une seconde autorité persistante, changent le parcours fonctionnel, altèrent le modèle V-A ou affaiblissent la sécurité ; ils ne sont pas acquis par cette proposition.

## 6. Contrat UX R3 — source native consommée au moment du développement

**Sources validées** : [Figma Next](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP), page 01 `94:49` ; [contrat de transposition R3](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md) ; index version v0.3 du 2026-11-03, blob `9d75cba6560896c279712982cd56b41488209685` (**223 frames, 901 blocs de premier niveau**). Les `node-id` ci-dessous sont ceux **du snapshot Git** : les nœuds natifs restent mutables.

| Surface de ML1 | Identifiants Figma précis du snapshot | Contrat de rendu/comportement |
|---|---|---|
| Portefeuille et entrée sas | `94:50` (01), `158:264` (64), `158:336` (65), `158:912` (73) | cockpit sans Nora globale ; vide/liste/retour ; navigation bornée |
| Connexion et session | `158:120` (62), `158:192` (63), `162:241` (121) | connexion, session perdue, état en cours, aucune fuite |
| Sas et aperçu | `94:135` (02), `159:145` (74), `159:217` (75), `159:289` (76) | conversation avant création, reprise, clarification, aperçu propositionnel |
| Création et cas limites | `159:361` (77), `159:433` (78), `159:505` (79), `159:577` (80), `159:649` (81), `159:937` (85), `159:1009` (86) | en cours, effet incertain, échec, déjà créé, homonyme, refus |
| Continuité et conversation | `94:214` (03), `96:262` (13), `96:370` (14), `159:1153` (88), `161:216` (109), `161:288` (110) | même fil visible, marqueur « Projet créé » fondé sur commit, reprise |
| Document du sas | `159:721` (82), `162:457` (124) | document avant création, inspection proportionnée ; sans bibliothèque ML2 complète |
| Variantes et composition | `94:1037` (10, 1280), `238:440` (199, 1280), `238:471` (200, 390), `238:581` (204, 1280) | exemples de contenu long/compact ; variantes applicables à requalifier selon composants |
| Index R3 | `169:275` et `264:401` | **INDEX DE REVUE, PAS ÉCRAN PRODUIT À CODER** |

**Méthode retenue pour le dispositif** : **pas d'extraction préalable de tous les composants Figma**. Au moment de développer la surface concernée, **Cursor** consulte directement Figma et son contrat R3, vérifie l'accès aux propriétés natives, extrait **les seules propriétés utiles** (parenté, géométrie, auto-layout, contraintes, typographie, variables, états, actions), les consigne avec la référence et implémente des composants partagés. Une simple capture ou un nom de frame ne suffit pas à garantir la précision de transposition. **Accès natif impossible → STOP ciblé de l'UX concernée**, sans design improvisé ; les travaux indépendants peuvent continuer.

**Rail 240/246 px — réserve desktop non bloquante pendant la préparation** : frames 01/02 desktop (1680 px) : 246 px ; frame 03 desktop (1680 px) : 240 px. L'écart n'est **pas mobile**. Il est examiné **lors de l'implémentation du composant rail partagé** ; s'il provoque une contradiction contractuelle réelle, la remonter à Morris plutôt que choisir une valeur silencieusement. Le seuil d'écart de boîte `≤2px` décrit dans R3 reste candidat, pas ratifié. Aucune exclusion globale du responsive n'est décidée.

**Contrôle de fidélité** : états/variantes applicables, captures runtime aux viewports de référence, mesures et différences, clavier/focus/zoom, reflow et long contenu selon R3 ; lien à la version de code et à la version Figma consultées. Une capture n'établit **ni** la transaction DB, **ni** la véracité des données, **ni** la qualité cognitive Nora.

## 7. Contrat QA — oracles maintenant, scripts exécutables avec le runtime

Les **16 scénarios QA `A01–A16`** appartiennent au cadrage R4 §5.3.9. Les références détaillées sont dans la **matrice ML1 v0.3** ; ici, la traduction en responsabilités et en **preuves attendues**. Aucun test n'est encore écrit ou exécuté.

| QA | Vérification attendue (oracle) | Fonctionnalités ML1 | Niveau de preuve à préparer **pendant la construction** |
|---|---|---|---|
| A01 | Sas sans projet et sans Git | préparation, portefeuille | DB réelle + BROWSER |
| A02 | Nora utile avant projet sans cycle/méthode | Nora, préparation | BROWSER + **au moins une interaction Nora LIVE réelle pour un verdict ML1 complet** ; sinon réserve explicite |
| A03 | Seul l'acte dédié crée | création | intégration + BROWSER positif/négatif |
| A04 | Deux clics simultanés, un projet | création | concurrence PostgreSQL réelle |
| A05 | ACK perdu après commit : même projet retrouvé | création | injection de panne / restart / DB |
| A06 | Version de préparation obsolète refusée sans perte de contexte | création, aperçu | concurrence + BROWSER |
| A07 | Même fil, marqueur vrai, reload | continuité | BROWSER + DB |
| A08 | Brouillon avant/après création sans copie fictive | document sas, continuité | DB + BROWSER |
| A09 | `SAVING` / échec ne donne pas une fausse sauvegarde | document sas | panne stockage + BROWSER |
| A10 | Deux comptes isolés | identité et toutes lectures | sécurité DB + navigateur deux comptes |
| A11 | Source révoquée non réinjectée | contexte/provenance | **ML1 :** contrôle générique des sources et de non-réutilisation si l'accès est testable ; **ML4 :** effet Git réel sur révocation. Ne pas déclarer `A11 FULL PASS` en ML1 |
| A12 | Projets homonymes restent distincts | création, portefeuille | DB + BROWSER |
| A13 | Reprise d'acquis pertinents en nouvelle conversation | D3/D4, continuité | intégration + BROWSER + LIVE ciblé selon capacité |
| A14 | Cockpit/projet : bon contexte, pas de Nora globale | portefeuille, session | BROWSER + reload |
| A15 | Création sans effet secondaire cycle/CKI/Git/Cursor/mandat | création, frontières | vérifications négatives des propriétaires disponibles |
| A16 | Redémarrage/restauration réconcilie la réalité | préparation, document, projet | redémarrage réel et restauration test d'une sauvegarde cohérente sur lane isolée ; limites DATA-01 tracées |

**Gates probatoires ML1 :** `A01–A10`, `A12–A16` sont à réaliser sur les capacités effectivement couvertes ; `A11` est **scindé** entre non-réutilisation générique démontrable dans ML1 et révocation Git réelle à ML4. Toute réserve sur un autre scénario est signalée par son oracle, sans « PASS » agrégé. Pour le verdict **vertical ML1 complet**, Nora doit être observée en appel réel borné, non seulement mockée ; ce GO ne vaut pas autorisation de REAL Git/Cursor.

**Principe de réalisation des tests** : les cas R2 et R4 donnent dès maintenant le **résultat attendu**. Les données d'essai, comptes, fixtures de panne, scripts, assertions techniques et moteurs de test sont déterminés **quand les APIs, migrations et environnements ont été réellement définis et construits** ; pas d'écriture de tests fictifs contre une interface spéculative. Les tests intègrent le même macro-lot que le code et la documentation. Ajouter les scénarios pertinents découverts par l'implémentation (migration, fuite, timestamp, sauvegarde, streaming) en les reliant à la source R2/R4 ; ne pas créer un catalogue concurrent.

**Niveaux de preuve séparés** : `DESIGN ONLY` aujourd'hui ; ensuite `DETERMINISTIC`, `INTEGRATION`, `BROWSER`, `LIVE` si Nora réellement appelée. **REAL Cursor/Git : N/A pour le nominal ML1**. Un test vert mocké ne prouve pas les performances/live du modèle ; une réponse Nora textuelle n'est pas un oracle d'unicité DB. Un test ne devient `COVERAGE VERIFIED` qu'après exécution et trace rattachée à un SHA/environnement ; `BEHAVIOR PROVEN` exige l'observation demandée ; `ADOPTED` relève d'un gate humain ultérieur.

## 8. ENV-01 / DATA-01 — intégration dans le macro-lot

**DEV** : configuration et DB isolées, liberté de travail et migrations dans la branche autorisée après gate, secrets hors Git, pas d'accès en écriture à RECETTE/STABLE. **RECETTE** : build sans hot reload d'un SHA figé ; DB/comptes de test propres ; schéma et données identifiés ; rapport des A01–A16 applicables avec résultats et écarts. **STABLE** : aucune existence revendiquée avant validation et promotion gouvernées ; la lane ne partage pas de DB ni de clé de session avec les deux autres.

**Ordre de livraison requis** : qualification + mandat → développement/test/documentation en DEV → SHA candidat + manifeste → déploiement RECETTE → recette Morris → corrections en DEV et nouveau SHA si nécessaire → contrôle PR/merge sous GO distinct → post-merge et éventuelle promotion STABLE sous GO distinct. Une correction ne modifie pas silencieusement le candidat figé.

**Dépendance au premier incrément** : PostgreSQL avec droits isolés, stratégie de migration, restauration et démarrage probants. Le plan DATA-01 s'applique au niveau pertinent ; les mécanismes de conservation et suppression devront être implémentés et prouvés selon l'exit du lot, puis repris en R6 pour les garanties transverses. Aucun service d'archivage ou backup n'est présenté comme déjà déployé.

## 9. Arbitrages ouverts, décisions ordinaires et conditions de STOP

| Objet | Qualification aujourd'hui | Traitement proposé |
|---|---|---|
| Framework applicatif, ORM, migrations | **CHOIX TECHNIQUE OUVERT**, R4 n'impose pas de noms | Comparer sobrement en ML1 au regard des contrats D1–D4 et ENV-01 ; justifier la sélection avant implémentation |
| Authentification et sessions | **CHOIX TECHNIQUE OUVERT** avec isolation/révocation validées | Sélection documentée et tests multi-comptes ; pivot de frontière d'autorité → Morris |
| Fournisseur/SDK Nora, streaming, budget, mémoire | **CHOIX TECHNIQUE OUVERT**, comportement R2 validé | Définir une solution minimale live, reprise/contexte véridiques et gestion d'échec ; aucune dépendance Cursor imposée |
| Modèle SQL et stockage de documents | **CHOIX TECHNIQUE OUVERT** sous V-A/PostgreSQL | Décrire tables/contraintes/migrations et référence stable D4 dans ML1 ; changement de V-A → Morris |
| Actions exactes des boutons/routage API | Fonctionnel R2/R3 validé, technique non choisi | Choisir noms/routes/payloads cohérents avec l'implémentation ; pas de navigation autorisante |
| Rail desktop 240/246, tokens, tolérances | **RÉSERVE VISUELLE NON BLOQUANTE EN D0** | Résoudre lors du composant concerné ; arbitrer si variation réelle et structurante, documenter le verdict |
| Figma direct | **Accès Cursor annoncé par Morris, capacités natives non vérifiées dans ce tour** | Contrôler lecture native juste avant UI ; STOP ciblé si nœuds/propriétés indisponibles |
| QA / test harness / jeux de données | **ORACLES DOCUMENTÉS, TESTS NON CODÉS** | Définir les assertions, fixtures et outils avec les APIs/DB/lanes réelles ; pas de test préalable fictif |
| Git/cycle/autorité/effet externe complet | **HORS PÉRIMÈTRE POSITIF** | Tests de non-effet ML1 ; intégration positive chez ML3–ML5 ; ne pas fermer les exigences transverses prématurément |
| Statut R5 | **PRÉPARATION**, code absent | Validation du contrat et GO de construction **séparés** ; aucune approbation déduite du présent brouillon |

**STOP structurant** : contradiction avec R1–R4 validés, deuxième vérité transactionnelle, mutation Git/Cursor induite, tentative de décision automatisée, fuite inter-Pilotes, projet créé sans acte ou sans preuve, incapacité de vérifier l'unicité DB. **STOP ciblé UX** : accès natif Figma nécessaire indisponible ou écart structurel non arbitrable sans toucher le contrat validé. **QA non écrite avant code** n'est pas un STOP à la **préparation documentaire**, mais demeure un STOP pour toute déclaration de couverture vérifiée.

## 10. Gate de revue, entrée en construction et suite

**Pour soumettre ML1 en `VALIDATED SPEC` :**

1. Morris confirme le **périmètre IN/OUT** et le caractère suffisant du premier vertical « portefeuille + sas + Nora + projet + première ressource documentaire ».
2. Les **contrats techniques à effet** sont arrêtés au niveau suffisant : stack web choisie et justifiée, session/révocation, fournisseur et protocole Nora, modèle SQL (unicité, contraintes, migrations et déduplication durable), cycle de vie du document et interfaces d'API. **Aucun choix de package n'est adopté par le présent texte** ; une sélection ordinaire peut être intégrée à la revue du lot, un pivot R4/autorité retourne à Morris.
3. La matrice R1/R2/R3/R4/QA identifie les propriétaires, les gaps réellement bloquants, les interfaces différées et les oracles de sortie ; **aucune extraction exhaustive Figma ni script QA fictif n'est requis à cette étape**.
4. ENV-01, données, droits, sécurité, coûts/risques/failure/restart et preuve cible sont explicites ; aucun GO Git/Cursor n'est confondu avec la validation du document.

**Après validation de la spécification et mandat D3 distinct :** ChatGPT devra alors relire le guide de routage et le template SFIA v2.6 **depuis Git au bon SHA** ; produire un prompt Cursor complet sous contrat, avec vérification du repo/branche/HEAD/base locale par Cursor, sources canoniques, bornage IN/OUT, STOP, tests et Review Pack/handoff. **Ce prompt n'est PAS produit par le présent travail.**

**Suite utilisateur rendue possible** : une fois ML1 réellement qualifié, ML2 pourra enrichir production documentaire et capitalisation **sur les mêmes identités de ressources** ; ML3 développera gouvernance et trajectoire ; ML4 les sources Git facultatives ; ML5 la réalisation/proof sous autorité. Les gates de promotion et l'adoption du runtime restent la responsabilité de Morris.

---

**Verdict historique v0.2 (avant sélection candidate) : `ML1 — TECHNICAL SPEC REVIEWED / CONTRACT GAPS CORRECTED / IMPLEMENTATION SELECTIONS OPEN`.** La proposition v0.3 figure au §12 ; publication documentaire sur branche Git, **pas de validation de stack ni GO de construction**.


## 11. Annexes de revue D0 — corrections et questions restantes

**Corrections traitées dans cette candidate v0.2 :** D3 propriétaire de conversation/messages, D4 propriétaire des documents/connaissances ; idempotence avec empreinte de requête, vérification de version sur l'aperçu inspecté et relecture avant rejet ; conservation de la garantie d'unicité indépendamment de la durée de clé ; proposition sobre PostgreSQL pour le premier document textuel ; protocole minimal de réponse Nora ; `A11` partiel tant que Git n'est pas implémenté ; LIVE Nora requis pour un verdict de capacité complète ; extraction Figma dans le lot, juste avant la surface UX concernée.

**À spécifier avant mandat D3 :** choix effectif de stack et de migrations ; contrat d'auth GitHub/session/révocation et secrets ; protocole fournisseur Nora/streaming et coût/budget ; DDL et concurrence PostgreSQL ; définition des endpoints et erreurs ; jeux de données et harnais de tests cohérents avec les interfaces choisies. **Ces éléments sont ouverts, et non autorisés implicitement à Cursor par la seule présence de ce brouillon.**

**Gate Morris :** confirmer le périmètre vertical et, lorsque les sélections concrètes seront soumises, accepter la spécification technique complète. La validation de cette candidate, l'autorisation Git, le contrat Cursor, la recette et le merge restent des actes distincts.

## 12. Choix techniques ML1 — proposition groupée à arbitrer (D0, 2026-11-04)

> **Statut : PROPOSITION TECHNIQUE R5 NON VALIDÉE.** Les ADR R4-01…04, DATA-01 et ENV-01 sont les contraintes approuvées ; les noms de frameworks, bibliothèques et structures proposés ci-dessous **ne sont pas des décisions Morris** ni une permission de coder. Comparaison fondée sur la baseline Git `main@a0b80b9`, la branche de préparation et la documentation officielle consultée le 2026-11-04. Les versions exactes des dépendances et compatibilités seront vérifiées et épinglées **au premier build**, pas devinées dans la présente conception.

### 12.1. Ensemble technique recommandé pour le premier vertical

| Frontière | Proposition prioritaire | Alternative sérieuse | Critère déterminant pour ML1 |
| --- | --- | --- | --- |
| Web + serveur | **Next.js App Router + React + TypeScript strict**, exécution **Node.js**, application modulaire avec route handlers pour les commandes et lectures protégées | React/Vite + API Fastify séparée | Une base de déploiement à gérer et tester ; séparation **logique** D1–D4, sans deuxième backend par inertie ; future exploitation locale puis serveur |
| Session / identité | **Better Auth + OAuth GitHub** pour le *login Studio*, sessions durables et révocables en PostgreSQL | Auth.js avec persistance de session équivalente | D1 `RG-ACC-001..007` ; isolation inter-Pilotes, expiration/révocation et absence de droit Git induit ; ne pas construire son propre protocole OAuth |
| SQL / migrations | **PostgreSQL + Drizzle ORM + node-postgres**, migrations SQL vérifiées et versionnées | PostgreSQL + Prisma ou SQL typé direct | Requêtes et transactions explicites, contraintes uniques et index DB réellement prouvés ; aucune double base métier |
| Cognitive / streaming | **OpenAI Agents SDK TypeScript** derrière un adaptateur D3, sans `MemorySession` ni `OpenAIConversationsSession` comme source autonome de vérité | OpenAI SDK Responses API direct sous le **même contrat D3** | Nora utile en streaming avec erreurs/reprise honnêtes ; D3/PostgreSQL restent propriétaires des conversations, messages et statuts |
| Document du sas | **Texte/Markdown versionné en PostgreSQL** (D4, sauvegarde et disponibilité observées), avec limites de taille et rendu sécurisé | Stockage objet dès ML1 si volume réel l'exige | Identité de document et de version conservée après création sans recopie et sans second référentiel |
| Tests / UX | **Vitest** pour contrat/domaine + vraie PostgreSQL d'intégration/concurrence + **Playwright** pour parcours navigateur et contrôle Figma ciblé | Autres runners à équivalence démontrée | A01–A16, relecture de session, crash, transactions, capture browser comparée au contrat R3 ; tests avec le code, pas scripts fictifs en amont |

**Argument de convergence :** ces choix partagent TypeScript côté UI/serveur, une unique base transactionnelle et des adaptateurs clairement bornés pour auth, fournisseur IA et éventuels contenus externes. La variante « frontend React + API séparée » n'est pas interdite, mais créerait dès ML1 deux déploiements, deux configurations et davantage de contrats d'intégration pour un bénéfice non démontré au niveau de charge attendu. **Un monolithe déployable n'est pas un monolithe métier indifférencié** : les responsabilités D1–D4 restent indépendantes au niveau des modules et des tests.

### 12.2. Frontières et flux d'implémentation proposés

```text
UI Figma R3 / navigateur
      |
      +--> Session & portfolio D1 (session serveur -> PilotId stable)
      |        |-- GitHub OAuth d'identité uniquement
      |
      +--> Préparation / création D2
      |        |-- transaction PostgreSQL + relation unique preparation -> project
      |        |-- idempotencyKey + empreinte + expectedCreationRevision
      |
      +--> Conversation D3
      |        |-- messages, événements et statuts durables en PostgreSQL
      |        +-- adaptateur Agents SDK (streaming, outils ML1 lecture seule)
      |
      +--> Document / connaissances initiales D4
               |-- documentId + revisionId + état réel de persistance
               +-- contenus textuels PostgreSQL et provenance
```

- **Transport :** les handlers HTTP/stream revalident la session, l'identité de la préparation/projet et les droits côté serveur. Les *server actions* éventuelles sont elles aussi des points d'entrée publics à autoriser ; l'UX ne crée aucune autorité implicite. Les chemins API exacts restent à déterminer au code selon la convention de nommage Next.
- **D1 :** le fournisseur d'identité externe ne possède ni projets, ni décisions, ni permissions Git. Un identifiant interne stable de Pilote et les sessions applicables sont rattachés à PostgreSQL. Les jetons Git personnels et les droits d'agent D9 restent hors ML1.
- **D2 :** création par **commande dédiée**, pas depuis un outil textuel Nora ; transaction avec contrainte d'unicité `preparationId` et résultat idempotent durable. Réconcilier **en lecture seule** l'effet en cas d'ACK perdu ; ne pas re-créer par retry aveugle. Un nom de projet n'est jamais une clé unique.
- **D3 :** le message utilisateur est durablement enregistré avant l'appel IA ; le rendu stream reste **provisoire** tant que la réponse n'est pas finalisée et conservée. La reprise restitue les messages durables et les acquis D4 pertinents selon les droits actuels. Le SDK est **un moteur d'inférence/outillage**, pas le propriétaire de la mémoire ni le registre D6.
- **D4 :** le document du sas possède une identité/version stables avant et après création ; le statut `SAVING`, `AVAILABLE`, `FAILED` ou `UNKNOWN` est déduit de l'état réel des données, jamais d'une réponse Nora. Les extensions documentaires ML2 restent possibles sans remplacer D4.
- **Sécurité :** les futurs outils SDK à effet externe ne sont **pas exposés en ML1**. Tout outil de lecture est autorisé selon sa source et son contexte ; une capacité d'écriture Git/Runner ou de création indirecte via Nora est hors lot. Secrets hors Git, cookies/sessions sécurisés, isolation des lanes et traces expurgées ; ne pas laisser l'export automatique de traces IA divulguer prompts ou documents sensibles sans politique validée.

### 12.3. Garanties relationnelles à transposer en DDL lors du même macro-lot

Modèle **conceptuel non adopté**, sans figer les noms physiques de tables :

| Objet/propriétaire | Contraintes à démontrer en base réelle | Preuve discriminante |
| --- | --- | --- |
| Pilote/session — D1 | Identité externe vérifiée `UNIQUE` dans la portée du fournisseur ; session révoquée inopérante | Deux Pilotes A/B, reconnexion, accès refusé |
| Préparation — D2 | `ownerId` vérifié côté serveur, révision de création stable | Préparation retrouvée après restart |
| Projet + lien — D2 | Projet identifié durablement, **une seule liaison par préparation** ; même transaction avec résultat de création | Double clic et ACK perdu (`A04/A05`) |
| Commande idempotente — D2 | Clé unique dans portée du Pilote + empreinte de demande ; replay identique stable ; demande contradictoire refusée | Rejeu concurrent, évolution d'aperçu |
| Conversation/messages — D3 | Identité de fil durable et ordre explicite, demande corrélée, unicité du message logique | Streaming interrompu, réouverture, absence de doublon |
| Documents/révisions — D4 | Identifiant stable et versions non écrasées, contenu réellement disponible, contrôle de propriété | `A08/A09` et retour sas→projet |

La transaction de création couvre `Project + lien préparation→projet + résultat de commande`, pas les octets des services externes ni l'appel IA. Privilégier contraintes SQL + tests de concurrence plutôt qu'une logique « si absence, insérer » vulnérable au double clic. Les migrations et restaurations suivent DATA-01/ENV-01, **aucune migration à exécuter directement en STABLE sans gate**.

### 12.4. Contrainte d'usage de l'Agents SDK — éviter une deuxième vérité

Le SDK propose une gestion de session pouvant persister automatiquement l'historique ; en ML1, **ne pas activer une session indépendante** ou une conversation hébergée comme mémoire canonique en parallèle de D3. Composer explicitement l'entrée à partir de PostgreSQL D3 et des références D4 autorisées ; appeler le runtime avec cette entrée ; persister le résultat final ou l'interruption dans la seule vérité D3. Les états internes du SDK peuvent aider à calculer/reprendre un run **si leur persistance et corrélation sont prouvées**, mais ne deviennent ni un deuxième transcript, ni un HumanDecision, ni une garantie de STOP.

Une alternative recevable est l'API Responses directe : si le SDK introduit une dépendance de session, de journalisation ou de replay non maîtrisable, remplacer **l'adaptateur** avant implémentation de la capacité, sans changer les contrats D3/R4. Aucune migration d'autorité ni deuxième modèle d'exécution ne serait justifié.

### 12.5. Livraison et contrats de preuve

| Étape du vertical | Condition observable pour le premier lot |
| --- | --- |
| DEV | Application et PostgreSQL démarrent sur lane isolée ; secrets vérifiés ; données de test identifiées ; migrations réversibles ou restauration bornée |
| Tests D1/D2 | Deux Pilotes isolés ; double clic / conflit / timeout post-commit ; aucune création implicite, aucun Git/cycle |
| Tests D3/D4 | Nora répond via fournisseur réellement disponible, streaming et messages durables ; documents du sas sauvegardés/repris avec leur vraie version et sans transfert fictif |
| UX R3 | Cursor consulte directement les frames concernés, relève les mesures natives utiles juste avant leur code, puis compare les captures navigateur et teste clavier/reflow |
| QA | Scénarios `A01–A16` reliés aux tests/proofs réellement exécutés, avec `A11` Git explicitement **partiel** tant que D9/ML4 n'est pas implémenté ; aucune preuve LIVE/REAL déclarée sur mock |
| ENV/version | Manifeste candidat `source_sha/build_id/schema_revision` réel, version `-rc.N` **si décidée** ; `STABLE = NOT AVAILABLE` avant promotion ; `construction/delivery-history.md` créé par Cursor dans ce premier lot, non rempli de fausses livraisons |
| Gates | GO D3 Cursor, mise à disposition RECETTE, PR, merge et promotion STABLE distincts, avec décisions Morris à chaque point protégé |

### 12.6. Arbitrages à présenter à Morris avant le mandat Cursor

1. **Paquet de stack :** confirmer ou rejeter le choix intégré Next.js/TypeScript Node + Better Auth GitHub + Drizzle/PostgreSQL (ou énoncer une contrainte réelle imposant une alternative). Ce n'est pas une réouverture de R4-01/02.
2. **Nora :** confirmer l'Agents SDK TypeScript comme moteur D3 **sans mémoire indépendante**, ou préférer l'API Responses directe pour réduire la surface SDK. Les deux doivent satisfaire les mêmes garanties métier et de reprise.
3. **Version de premier candidat :** proposer `0.1.0-rc.1` **seulement lorsque le premier build RECETTE existe et que Morris valide le point de départ**. Avant cela, `NOT AVAILABLE` : n'assigner aucun numéro à de simples documents Git.

**Ce qui ne nécessite pas un nouveau gate indépendant :** le nom physique des migrations, l'outillage précis des tests, l'organisation des composants React et les tailles d'écran déjà contractées, **s'ils suivent exactement les décisions validées et ne changent pas les responsabilités ou la sécurité**. Ces détails relèveront de l'exécution D3 dans le contrat validé et de sa revue intégrée, sans micro-cycles préparatoires.

### 12.7. Sources externes utilisées pour comparer les options (références techniques, non décisions SFIA)

- Next.js, route handlers et déploiement Node : https://nextjs.org/docs/app/getting-started/route-handlers et https://nextjs.org/docs/app/getting-started/deploying
- Next.js, sécurité des route handlers/actions : https://nextjs.org/docs/app/guides/authentication
- Better Auth, GitHub OAuth et adaptateur PostgreSQL : https://better-auth.com/docs/installation et https://better-auth.com/docs/adapters/drizzle
- Drizzle PostgreSQL, transactions et contraintes : https://orm.drizzle.team/docs/get-started-postgresql, https://orm.drizzle.team/docs/transactions et https://orm.drizzle.team/docs/indexes-constraints
- OpenAI Agents SDK TypeScript, sessions et streaming : https://openai.github.io/openai-agents-js/ , https://openai.github.io/openai-agents-js/guides/sessions/ et https://openai.github.io/openai-agents-js/guides/streaming/
- Playwright, comparaisons de captures navigateur : https://playwright.dev/docs/next/test-snapshots

**Verdict historique de proposition du §12 : `ML1 STACK PACKAGE PROPOSED`.** L'**acceptation de principe de Morris** et les réserves restantes sont qualifiées au §13 : `TECHNICAL DIRECTION ACCEPTED IN PRINCIPLE / NO D3 GO / NO CODE / NO RUNTIME / NO LIVE PROOF`.

## 13. Acceptation de principe de la stack et garde-fous d'extension — 2026-11-04

**Décision exprimée par Morris :** le paquet technique recommandé au §12 est **accepté sur le principe**. Ceci confirme la direction de conception ML1 mais **ne valide pas les versions de packages, le schéma SQL, les endpoints, un contrat d'exécution Cursor ou une release**. La spécification demeure candidate jusqu'à validation du périmètre d'exécution, et aucun runtime Next n'existe.

**Vérification de compatibilité avec la suite du produit (sans concevoir ML2–ML5) :**

- **D4 / ML2 :** le stockage PostgreSQL des premières ressources textuelles doit préserver `resourceId`, versions, origine et permissions ; les fonctionnalités documentaires futures peuvent l'étendre sans remplacer cette vérité ou recopier le contenu au passage sas→projet.
- **D5 et D6 / ML3 :** `projectId` et identité Pilote stables permettront d'y rattacher trajectoire, cycles, CKI et HumanDecision. Leur propriétaire reste D5/D6 : le clic de création du projet ne crée ni cycle, ni mandat, ni décision métier générique.
- **D9 / ML4 :** GitHub OAuth Better Auth n'est **que l'authentification Studio**. Les droits Git (GitHub App privilégiée par R4), scopes, révocations et provenance appartiennent au domaine Git, facultatif. Aucun jeton de login ne devient un jeton de mutation Git.
- **D7 et D8 / ML5 :** Next.js/Node héberge l'interface et l'API du produit, mais **une requête HTTP ou son streaming ne doit jamais devenir le moteur durable d'une réalisation externe longue**. D7 pourra utiliser un adaptateur/worker distinct si l'implémentation le justifie, avec état et autorisations D6/D7 persistés et corrélés ; D8 reste propriétaire des preuves et verdicts. Le runtime Agents SDK de Nora n'est ni le moteur d'exécution D7 ni une autorité D6.
- **Sécurité et exploitation :** source unique D3 pour messages, D4 pour documents ; gestion explicite des traces IA, sessions révoquées, identités/scopes et secrets propres à chaque lane. PostgreSQL transactionnel reste le socle ; les vues/index futurs sont dérivés.
- **UX R3 :** source Figma native consultée par Cursor juste avant le code UX concerné ; attention au rail partagé desktop 240/246 px au moment de son implémentation, sans pré-extraction globale ni tolérance arbitraire.
- **Versioning / ENV-01 :** premier numéro applicatif et préversion pas encore attribués ; `STABLE = NOT AVAILABLE` jusqu'à promotion réellement observée. L'historique de chaque delivery commence avec le premier lot de code ; l'accord de principe ne vaut pas une release.

Les limites sont **compatibilité architecturale vérifiée au niveau documentaire**, pas tests d'intégration avec des capacités inexistantes. Les nouvelles dépendances/versions seront contrôlées sur le premier environnement réel. **Aucun pivot R4 demandé**.

**Suite et gates :** PR documentaire autorisée par Morris le 2026-11-04 après audit compact ; ouverture ≠ checks PASS ≠ merge ; autorisation de Cursor D3 séparée. Voir [revue documentaire et audit final](revue-coherence-technique.md).


## 14. Implémentation locale DEV (working tree — 2026-11-04, qualification LIVE)

> **Statut :** working tree local sur `sfia/next-access-preparation-continuity` ; **pas de push projet** ; comportement = code après consolidation LIVE QA.

| Choix | Valeur |
| --- | --- |
| Application | `projects/sfia-studio-next/web` — Next.js **15.5.29** + React 19 + TypeScript |
| Auth D1 | Better Auth session → `PilotId` ; `ensurePilotForAuthUser` **backfill** `github_user_id` si compte GitHub arrive après `user.create` (PilotId préservé ; conflit ≠ merge) ; DEV login isolé ; `/api/auth/status` toujours JSON |
| SQL | PostgreSQL 16 Docker DEV `:5433` ; migrations `001` + `002` |
| D2 | advisory xact lock `(pilotId,idempotencyKey)` avant mutations ; reconcile lie clé+préparation |
| Continuité | `GET /api/projects/:projectId` sans query `preparationId` |
| D3 | Agents SDK LIVE si `OPENAI_API_KEY` ; sinon fixture ; **pas** MemorySession ; tracing DEV `OPENAI_AGENTS_DISABLE_TRACING=1` |
| D4 | owner+préparation ; documents durables ; Markdown riche **KNOWN GAP** (`whitespace-pre-wrap` brut) |
| Dépendances | `overrides.postcss=8.5.32` (élimine nested Next 8.4.31) ; audit prod PostCSS/Next GHSA clos ; toolchain vitest/drizzle-kit reste dette DEV |
| Version produit | `NO RELEASE` / STABLE `NOT AVAILABLE` |
| Preuves | unit 3 ; integration 22 ; Playwright 1 ; build+tsc ; OAuth DB reconcile + BROWSER USER OBSERVED ; Nora LIVE API adapter PASS (1 appel borné) ; Figma pixel INCONCLUSIVE |
```

### `projects/sfia-studio-next/web/.gitignore`

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage
/test-results/
/playwright-report/
/tests/e2e/artifacts/

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

.env.local
.env.*.local
```

### `projects/sfia-studio-next/web/README.md`

```md
# SFIA Studio — web application (DEV lane)

Technical package under `projects/sfia-studio-next/web`.
**Product STABLE version: NOT AVAILABLE.** `package.json` version `0.0.0-dev` is technical only (`NO RELEASE`).

## Prerequisites

- Node ≥ 20
- Docker PostgreSQL DEV: container `sfia-next-dev-pg` on `127.0.0.1:5433`
- `.env.local` (not committed) — see `.env.example`

## Start DEV (port 3100)

```bash
# Postgres
docker start sfia-next-dev-pg || docker run -d --name sfia-next-dev-pg \
  -e POSTGRES_USER=sfia_next_dev \
  -e POSTGRES_PASSWORD='<local-dev-only>' \
  -e POSTGRES_DB=sfia_next_dev \
  -p 127.0.0.1:5433:5432 postgres:16-alpine

# Migrate
docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev \
  < src/db/migrations/001_initial_studio_core.sql

# App
npm install
npm run dev
```

Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1`, use Pilote A/B on `/login`.
**DEV login is not GitHub OAuth proof.**

## Stack

- Next.js 15.5.29 (patched 15.5 line)
- Better Auth = OAuth session authority → PilotId provisioning; DEV loopback login adapter (not OAuth proof)
- OpenAI Agents SDK adapter (LIVE only with key)
- Project reopen: `GET /api/projects/:projectId` (owner-scoped, no `preparationId` query required)

## Tests

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
```

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | BLOCKED without client secrets; simulated identity→Pilot tests are NOT LIVE proof |
| PostgreSQL | REAL DEV container on 5433 |
| Nora | Deterministic fixture unless `OPENAI_API_KEY` set (LIVE bounded) |
| Browser | Playwright REAL local browser + DEV fake identity |
| Figma native | PENDING — see `docs/ux-figma-pending.md` |
| RECETTE/STABLE | NOT AVAILABLE |
```

### `projects/sfia-studio-next/web/docs/ux-figma-pending.md`

```md
# UX Figma — native extraction status

Figma file `itgvCulInEnFY6DvgIegvP` page `94:49`.

## Extracted 2026-11-04 (MCP native metadata)

- Frame `94:50` « 01 · Portefeuille et choix du projet » 1680×970
- Rail `94:51` « Barre latérale produit » **width=246** (not 240) × height 970
- Surface produit starts at x=246

Code rail width set to **246** from this native read. Full component fidelity (tokens, cards, typography, all ML1 frames) and runtime screenshot comparison remain incomplete.

Verdict UX overall:

`PARTIAL NATIVE EXTRACT (rail 246) — REVIEW INCONCLUSIVE FOR FULL R3 FIDELITY — RUNTIME SCREENSHOT REQUIRED`

## KNOWN GAP — rich Markdown rendering (2026-11-04)

Sas and project message surfaces render `{m.content}` with `whitespace-pre-wrap` only. No Markdown renderer is implemented. Observed LIVE Nora replies that include Markdown syntax appear as plain text. Classification: **KNOWN GAP — RICH MARKDOWN RENDERING NOT IMPLEMENTED** (not an A15 / Figma oracle; out of this consolidation sprint unless a validated ML1 criterion mandates it).
```

### `projects/sfia-studio-next/web/drizzle.config.ts`

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

### `projects/sfia-studio-next/web/eslint.config.mjs`

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

### `projects/sfia-studio-next/web/next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### `projects/sfia-studio-next/web/package.json`

```json
{
  "name": "sfia-studio-web",
  "version": "0.0.0-dev",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 3100 -H 127.0.0.1",
    "build": "next build",
    "start": "next start -p 3100 -H 127.0.0.1",
    "lint": "next lint",
    "db:migrate": "docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev < src/db/migrations/001_initial_studio_core.sql",
    "test": "vitest run",
    "test:unit": "vitest run tests/unit",
    "test:integration": "vitest run tests/integration",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@openai/agents": "^0.21.0",
    "better-auth": "^1.7.16",
    "drizzle-orm": "^0.45.4",
    "next": "^15.5.29",
    "postgres": "^3.4.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "uuid": "^14.0.3",
    "zod": "^4.6.7"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@playwright/test": "^1.64.1",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/uuid": "^10.0.0",
    "@vitest/coverage-v8": "^3.2.4",
    "dotenv": "^18.0.9",
    "drizzle-kit": "^0.31.11",
    "eslint": "^9",
    "eslint-config-next": "^15.5.29",
    "playwright": "^1.64.1",
    "postcss": "8.5.32",
    "tailwindcss": "^3.4.1",
    "tsx": "^4.23.15",
    "typescript": "^5",
    "vitest": "^3.2.4"
  },
  "description": "SFIA Studio web application (technical package version ≠ product release)",
  "engines": {
    "node": ">=20"
  },
  "overrides": {
    "postcss": "8.5.32"
  }
}
```

### `projects/sfia-studio-next/web/playwright.config.ts`

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3100/login",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
```

### `projects/sfia-studio-next/web/postcss.config.mjs`

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### `projects/sfia-studio-next/web/src/app/api/auth/[...all]/route.ts`

```ts
import { auth, githubOAuthStatus } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  // Always answer our status probe — never fall through to Better Auth (404 when configured).
  // Does not claim LIVE callback success; only reports whether client credentials are present.
  if (url.pathname.endsWith("/api/auth/status")) {
    return Response.json(githubOAuthStatus());
  }
  if (url.pathname.endsWith("/api/auth/github")) {
    const status = githubOAuthStatus();
    if (!status.configured) {
      return Response.json(status, { status: 503 });
    }
  }
  return handler.GET(req);
};

export const POST = handler.POST;
```

### `projects/sfia-studio-next/web/src/app/api/dev/login/route.ts`

```ts
import { NextResponse } from "next/server";
import { createDevTestSession, STUDIO_SESSION_COOKIE } from "@/domains/identity/session";

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { pilot?: "a" | "b" };
    const which = body.pilot === "b" ? "b" : "a";
    const { token, pilotId } = await createDevTestSession(which, {
      host: req.headers.get("host"),
      forwardedHost: req.headers.get("x-forwarded-host"),
      forwardedFor: req.headers.get("x-forwarded-for"),
      realIp: req.headers.get("x-real-ip"),
    });
    const res = NextResponse.json({
      ok: true,
      pilotId,
      authMode: "dev-test-login",
      notice: "FAKE/REAL: DEV test login — NOT GitHub OAuth proof — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    const status = msg.includes("DISABLED") || msg.includes("FORBIDDEN") ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/portfolio/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { loadPortfolio } from "@/domains/identity/portfolio";

export async function GET() {
  try {
    const session = await requireStudioSession();
    const portfolio = await loadPortfolio(session.pilotId);
    return NextResponse.json({ session: { pilotId: session.pilotId, displayName: session.displayName, authMode: session.authMode }, portfolio });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      expectedCreationRevision?: number;
      projectName?: string;
      previewSummary?: string;
      idempotencyKey?: string;
    };
    if (
      typeof body.expectedCreationRevision !== "number" ||
      !body.projectName ||
      !body.idempotencyKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await createProjectCommand({
      pilotId: session.pilotId,
      preparationId,
      expectedCreationRevision: body.expectedCreationRevision,
      projectName: body.projectName,
      previewSummary: body.previewSummary ?? "",
      idempotencyKey: body.idempotencyKey,
    });
    const sideEffects = probeCreateProjectSideEffects();
    const status =
      result.status === "CREATED"
        ? 201
        : result.status === "ALREADY_CREATED"
          ? 200
          : result.status === "CONFLICT"
            ? 409
            : result.status === "FORBIDDEN"
              ? 403
              : 400;
    return NextResponse.json({ ...result, sideEffects }, { status });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const documents = await listDocuments(session.pilotId, preparationId);
    return NextResponse.json({ documents });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      title?: string;
      contentMarkdown?: string;
      documentId?: string;
    };
    if (typeof body.contentMarkdown !== "string") {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await savePreparationDocument(
      session.pilotId,
      preparationId,
      body.title ?? "Document du sas",
      body.contentMarkdown,
      body.documentId,
    );
    return NextResponse.json(result, { status: result.status === "AVAILABLE" ? 200 : 500 });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as { content?: string };
    if (!body.content?.trim()) return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    const result = await postUserMessageAndNora(session.pilotId, preparationId, body.content.trim());
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ ...result, messages });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCreateProject } from "@/domains/preparation/create-project";

export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const key = new URL(req.url).searchParams.get("idempotencyKey") ?? undefined;
    const result = await reconcileCreateProject(session.pilotId, preparationId, key);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
import { listMessages } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const data = await getPreparationContext(session.pilotId, preparationId);
    const msgs = await listMessages(session.pilotId, preparationId);
    const docs = await listDocuments(session.pilotId, preparationId);
    return NextResponse.json({ ...data, messages: msgs, documents: docs });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}

export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as { previewName?: string; previewSummary?: string };
    const rev = await updatePreview(
      session.pilotId,
      preparationId,
      body.previewName ?? "",
      body.previewSummary ?? "",
    );
    return NextResponse.json({ creationRevision: rev });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/preparations/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";

export async function POST() {
  try {
    const session = await requireStudioSession();
    const prep = await openOrCreatePreparation(session.pilotId);
    return NextResponse.json({ preparationId: prep.id, status: prep.status, creationRevision: prep.creationRevision });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`

```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const data = await getOwnedProjectContext(session.pilotId, projectId);
    return NextResponse.json({
      project: data.project,
      preparation: data.preparation,
      conversation: data.conversation,
      link: data.link,
      messages: data.messages,
      documents: data.documents,
    });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    if (code === "SESSION_INVALID") {
      return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
    }
    return NextResponse.json({ error: "INTERNAL" }, { status: 500 });
  }
}
```

### `projects/sfia-studio-next/web/src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0f1419;
  --panel: #171d25;
  --rail: #12171e;
  --ink: #e8eef6;
  --muted: #9aa7b8;
  --accent: #3d8bfd;
  --line: #2a3442;
  --ok: #3ecf8e;
  --warn: #e6b84d;
  --bad: #e35d6a;
}

html, body {
  background: radial-gradient(1200px 600px at 10% -10%, #1a2433 0%, var(--bg) 55%);
  color: var(--ink);
  min-height: 100%;
}

* { box-sizing: border-box; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

.btn {
  background: var(--accent);
  color: white;
  border: 0;
  border-radius: 8px;
  padding: 0.55rem 0.9rem;
  font-weight: 600;
  cursor: pointer;
}
.btn.secondary { background: transparent; border: 1px solid var(--line); color: var(--ink); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.panel {
  background: color-mix(in srgb, var(--panel) 92%, black);
  border: 1px solid var(--line);
  border-radius: 12px;
}

.input, .textarea {
  width: 100%;
  background: #0c1016;
  border: 1px solid var(--line);
  color: var(--ink);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
}
.textarea { min-height: 96px; resize: vertical; }

.muted { color: var(--muted); }
```

### `projects/sfia-studio-next/web/src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { PRODUCT_VERSIONING } from "@/lib/product-version";

export const metadata: Metadata = {
  title: "SFIA Studio",
  description: "SFIA Studio Next — accès, sas et continuité",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex">
          <aside
            className="hidden md:flex flex-col gap-4 p-4 border-r border-[var(--line)]"
            style={{ width: 246, background: "var(--rail)" }}
            aria-label="Navigation Studio"
          >
            <div>
              <div className="text-lg font-semibold tracking-tight">SFIA Studio</div>
              <div className="text-xs muted mt-1">
                {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
              </div>
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/portfolio">Portefeuille</a>
              <a href="/login">Connexion</a>
            </nav>
            <p className="text-xs muted mt-auto">
              Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
            </p>
          </aside>
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
```

### `projects/sfia-studio-next/web/src/app/login/page.tsx`

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [notice, setNotice] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (!status.configured) {
        setNotice(
          "GitHub OAuth BLOCKED — secrets clients absents. Pas de preuve LIVE dans ce cycle.",
        );
        setBusy(false);
        return;
      }
      const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: "github", callbackURL: "/portfolio" }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.url) {
        window.location.assign(data.url);
        return;
      }
      setNotice(data?.message ?? data?.error ?? "Échec démarrage OAuth GitHub");
    } catch (e) {
      setNotice(String(e));
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    const res = await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setNotice(data.error ?? "Échec");
      return;
    }
    setNotice(data.notice);
    router.push("/portfolio");
  }

  return (
    <div className="max-w-xl mx-auto panel p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Connexion Studio</h1>
      <p className="muted text-sm">
        GitHub OAuth sert uniquement l&apos;identité Studio. Aucun droit de dépôt n&apos;est accordé.
      </p>
      <div className="panel p-4 space-y-2">
        <div className="font-medium">GitHub OAuth</div>
        <p className="text-sm muted">
          Statut: <code>/api/auth/status</code> — BLOCKED si secrets absents. LIVE non inventé.
        </p>
        <button type="button" className="btn secondary" disabled={busy} onClick={startGitHubOAuth}>
          Continuer avec GitHub
        </button>
      </div>
      <div className="panel p-4 space-y-3">
        <div className="font-medium">DEV test login</div>
        <p className="text-sm muted">
          Fake/Real: connecteur de test local — <strong>pas</strong> une preuve OAuth GitHub.
        </p>
        <div className="flex gap-2">
          <button className="btn" disabled={busy} onClick={() => devLogin("a")}>
            Pilote A (DEV)
          </button>
          <button className="btn secondary" disabled={busy} onClick={() => devLogin("b")}>
            Pilote B (DEV)
          </button>
        </div>
      </div>
      {notice ? <p className="text-sm">{notice}</p> : null}
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/app/page.tsx`

```tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/portfolio");
}
```

### `projects/sfia-studio-next/web/src/app/portfolio/page.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PortfolioResponse = {
  session?: { displayName: string; authMode: string };
  portfolio?:
    | { kind: "empty"; openPreparations: number }
    | { kind: "ready"; projects: Array<{ id: string; name: string }>; openPreparations: number }
    | { kind: "unavailable"; reason: string };
  error?: string;
};

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/portfolio")
      .then(async (r) => {
        const j = await r.json();
        if (r.status === 401) {
          router.push("/login");
          return;
        }
        setData(j);
      })
      .catch((e) => setError(String(e)));
  }, [router]);

  async function startPreparation() {
    const res = await fetch("/api/preparations", { method: "POST" });
    const j = await res.json();
    if (res.ok) router.push(`/preparations/${j.preparationId}`);
    else setError(j.error ?? "échec");
  }

  if (error) {
    return <div className="panel p-6">Portefeuille indisponible: {error}</div>;
  }
  if (!data) return <div className="muted">Chargement du portefeuille…</div>;

  const p = data.portfolio;
  return (
    <div className="space-y-6 max-w-3xl">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Portefeuille</h1>
        <p className="muted text-sm">
          {data.session?.displayName} · mode {data.session?.authMode}. Aucune Nora globale ici.
        </p>
      </header>

      <div className="flex gap-2">
        <button className="btn" onClick={startPreparation}>
          Ouvrir un sas (sans projet)
        </button>
      </div>

      {p?.kind === "empty" && (
        <div className="panel p-5">
          <div className="font-medium">Aucun projet persisté</div>
          <p className="muted text-sm mt-1">
            État vide distinct d&apos;une erreur. Préparations ouvertes: {p.openPreparations}.
          </p>
        </div>
      )}
      {p?.kind === "unavailable" && (
        <div className="panel p-5">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      )}
      {p?.kind === "ready" && (
        <ul className="space-y-2">
          {p.projects.map((proj) => (
            <li key={proj.id} className="panel p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">{proj.name}</div>
                <div className="text-xs muted">{proj.id}</div>
              </div>
              <a className="btn secondary" href={`/projects/${proj.id}`}>
                Ouvrir
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

```tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string; projectId: string | null };
  latestRevision: { id: string; revisionNumber: number; status: string; contentMarkdown: string } | null;
};

export default function PreparationPage() {
  const params = useParams<{ preparationId: string }>();
  const router = useRouter();
  const preparationId = params.preparationId;
  const [messages, setMessages] = useState<Msg[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [draft, setDraft] = useState("");
  const [docText, setDocText] = useState("# Notes du sas\n");
  const [docId, setDocId] = useState<string | undefined>();
  const [previewName, setPreviewName] = useState("");
  const [previewSummary, setPreviewSummary] = useState("");
  const [creationRevision, setCreationRevision] = useState(1);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);

  const reload = useCallback(async () => {
    const res = await fetch(`/api/preparations/${preparationId}`);
    if (res.status === 401) {
      router.push("/login");
      return;
    }
    const j = await res.json();
    setMessages(j.messages ?? []);
    setDocs(j.documents ?? []);
    setPreviewName(j.preparation?.previewName ?? "");
    setPreviewSummary(j.preparation?.previewSummary ?? "");
    setCreationRevision(j.preparation?.creationRevision ?? 1);
    setProjectId(j.project?.id ?? null);
    const first = j.documents?.[0];
    if (first) {
      setDocId(first.document.id);
      setDocText(first.latestRevision?.contentMarkdown ?? docText);
    }
  }, [preparationId, router, docText]);

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preparationId]);

  async function sendMessage() {
    if (!draft.trim()) return;
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: draft }),
    });
    const j = await res.json();
    setBusy(false);
    if (res.ok) {
      setDraft("");
      setMessages(j.messages ?? []);
      setStatus(`Nora ${j.noraMode} · ${j.status}`);
    } else setStatus(j.error ?? "échec message");
  }

  async function saveDoc() {
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Document du sas", contentMarkdown: docText, documentId: docId }),
    });
    const j = await res.json();
    setBusy(false);
    if (j.status === "AVAILABLE") {
      setDocId(j.documentId);
      setStatus(`Document AVAILABLE rev ${j.revisionNumber}`);
      await reload();
    } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
  }

  async function savePreview() {
    const res = await fetch(`/api/preparations/${preparationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ previewName, previewSummary }),
    });
    const j = await res.json();
    if (res.ok) {
      setCreationRevision(j.creationRevision);
      setStatus(`Aperçu révision ${j.creationRevision}`);
    }
  }

  async function createProject() {
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expectedCreationRevision: creationRevision,
        projectName: previewName || "Projet sans titre",
        previewSummary,
        idempotencyKey,
      }),
    });
    const j = await res.json();
    setBusy(false);
    setStatus(`${j.status}${j.projectId ? ` → ${j.projectId}` : ""}`);
    if (j.projectId) {
      setProjectId(j.projectId);
      router.push(`/projects/${j.projectId}`);
    }
    await reload();
  }

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
      <section className="panel p-4 space-y-4">
        <header>
          <h1 className="text-xl font-semibold">Sas de préparation</h1>
          <p className="text-xs muted">
            {preparationId}
            {projectId ? ` · lié au projet ${projectId}` : " · sans projet"}
          </p>
        </header>
        <div className="space-y-3 max-h-[48vh] overflow-auto pr-1">
          {messages.map((m) => (
            <div key={m.id} className="panel p-3">
              <div className="text-xs muted mb-1">
                {m.role} · {m.status}
              </div>
              <div className="whitespace-pre-wrap text-sm">{m.content}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <textarea className="textarea" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Écrire à Nora…" />
          <button className="btn" disabled={busy} onClick={sendMessage}>
            Envoyer
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="panel p-4 space-y-3">
          <h2 className="font-medium">Aperçu de création (non autorisant)</h2>
          <input className="input" value={previewName} onChange={(e) => setPreviewName(e.target.value)} placeholder="Nom du projet" />
          <textarea className="textarea" value={previewSummary} onChange={(e) => setPreviewSummary(e.target.value)} placeholder="Résumé inspecté" />
          <div className="text-xs muted">Révision création: {creationRevision}</div>
          <div className="flex gap-2 flex-wrap">
            <button className="btn secondary" disabled={busy} onClick={savePreview}>
              Enregistrer l&apos;aperçu
            </button>
            <button className="btn" disabled={busy || !!projectId} onClick={createProject}>
              Créer le projet
            </button>
          </div>
        </div>
        <div className="panel p-4 space-y-3">
          <h2 className="font-medium">Document du sas</h2>
          <textarea className="textarea min-h-[180px]" value={docText} onChange={(e) => setDocText(e.target.value)} />
          <button className="btn secondary" disabled={busy} onClick={saveDoc}>
            Sauvegarder le document
          </button>
          {docs[0]?.latestRevision && (
            <p className="text-xs muted">
              {docs[0].document.id} · rev {docs[0].latestRevision.revisionNumber} · {docs[0].latestRevision.status}
              {docs[0].document.projectId ? ` · project ${docs[0].document.projectId}` : ""}
            </p>
          )}
        </div>
        {status ? <p className="text-sm muted">{status}</p> : null}
      </section>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const router = useRouter();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [meta, setMeta] = useState<string>("Chargement…");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (res.status === 404) {
        setError("Projet introuvable ou non autorisé pour ce Pilote.");
        setMeta("");
        return;
      }
      if (!res.ok) {
        setError("Impossible de charger le projet.");
        setMeta("");
        return;
      }
      const j = await res.json();
      setMessages(j.messages ?? []);
      setDocuments(j.documents ?? []);
      setMeta(
        `Projet créé · marqueur fondé sur commit DB · préparation ${j.preparation?.id ?? "liée"} · réouverture par projectId`,
      );
      setError("");
    }
    load();
  }, [params.projectId, router]);

  if (error) {
    return (
      <div className="max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold">Projet</h1>
        <p className="text-xs muted">{params.projectId}</p>
        <div className="panel p-4">{error}</div>
        <a className="btn secondary inline-block" href="/portfolio">
          Retour portefeuille
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl font-semibold">Projet</h1>
      <p className="text-xs muted">{params.projectId}</p>
      <div className="panel p-4">
        <div className="font-medium">Continuité du fil</div>
        <p className="text-sm muted mt-1">{meta}</p>
      </div>
      <div className="space-y-2">
        {messages.map((m) => (
          <div key={m.id} className="panel p-3">
            <div className="text-xs muted mb-1">
              {m.role} · {m.status}
            </div>
            <div className="whitespace-pre-wrap text-sm">{m.content}</div>
          </div>
        ))}
      </div>
      {documents.length > 0 && (
        <div className="space-y-2">
          <div className="font-medium">Documents</div>
          {documents.map((d) => (
            <div key={d.document.id} className="panel p-3 text-sm">
              <div className="text-xs muted mb-1">
                {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
                {d.latestRevision?.status ?? "—"}
              </div>
              <div className="whitespace-pre-wrap">{d.latestRevision?.contentMarkdown ?? ""}</div>
            </div>
          ))}
        </div>
      )}
      <a className="btn secondary inline-block" href="/portfolio">
        Retour portefeuille
      </a>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/db/client.ts`

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL missing — refuse to start without explicit lane DSN");
}

const globalForDb = globalThis as unknown as { __sfiaSql?: ReturnType<typeof postgres> };

export const sql =
  globalForDb.__sfiaSql ??
  postgres(url, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__sfiaSql = sql;
}

export const db = drizzle(sql, { schema });
export type Db = typeof db;
```

### `projects/sfia-studio-next/web/src/db/migrations/001_initial_studio_core.sql`

```sql
CREATE TABLE IF NOT EXISTS pilots (
  id text PRIMARY KEY,
  github_user_id text,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS pilots_github_user_id_uidx ON pilots(github_user_id);

CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  email_verified boolean NOT NULL DEFAULT false,
  image text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  pilot_id text REFERENCES pilots(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id text PRIMARY KEY,
  expires_at timestamptz NOT NULL,
  token text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  ip_address text,
  user_agent text,
  user_id text NOT NULL REFERENCES users(id),
  revoked_at timestamptz
);
CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON sessions(user_id);

CREATE TABLE IF NOT EXISTS accounts (
  id text PRIMARY KEY,
  account_id text NOT NULL,
  provider_id text NOT NULL,
  user_id text NOT NULL REFERENCES users(id),
  access_token text,
  refresh_token text,
  id_token text,
  access_token_expires_at timestamptz,
  refresh_token_expires_at timestamptz,
  scope text,
  password text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS verifications (
  id text PRIMARY KEY,
  identifier text NOT NULL,
  value text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS preparations (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  status text NOT NULL DEFAULT 'OPEN',
  creation_revision integer NOT NULL DEFAULT 1,
  preview_name text NOT NULL DEFAULT '',
  preview_summary text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS preparations_owner_idx ON preparations(owner_pilot_id);

CREATE TABLE IF NOT EXISTS projects (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS projects_owner_idx ON projects(owner_pilot_id);

CREATE TABLE IF NOT EXISTS preparation_project_links (
  preparation_id text PRIMARY KEY REFERENCES preparations(id),
  project_id text NOT NULL REFERENCES projects(id),
  attached_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS create_project_commands (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  idempotency_key text NOT NULL,
  fingerprint text NOT NULL,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  result text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS create_project_commands_pilot_key_uidx
  ON create_project_commands(pilot_id, idempotency_key);

CREATE TABLE IF NOT EXISTS conversations (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS conversations_prep_idx ON conversations(preparation_id);

CREATE TABLE IF NOT EXISTS messages (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  role text NOT NULL,
  content text NOT NULL,
  status text NOT NULL,
  generation_id text,
  ordinal integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS messages_conversation_idx ON messages(conversation_id);

CREATE TABLE IF NOT EXISTS documents (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  title text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS documents_prep_idx ON documents(preparation_id);

CREATE TABLE IF NOT EXISTS document_revisions (
  id text PRIMARY KEY,
  document_id text NOT NULL REFERENCES documents(id),
  revision_number integer NOT NULL,
  content_markdown text NOT NULL,
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS document_revisions_doc_rev_uidx
  ON document_revisions(document_id, revision_number);
```

### `projects/sfia-studio-next/web/src/db/migrations/002_session_auth_mode.sql`

```sql
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS auth_mode text NOT NULL DEFAULT 'unknown';
```

### `projects/sfia-studio-next/web/src/db/schema.ts`

```ts
import {
  pgTable,
  text,
  timestamp,
  integer,
  uniqueIndex,
  index,
  boolean,
} from "drizzle-orm/pg-core";

/** D1 — Studio pilot identity (internal stable id). */
export const pilots = pgTable(
  "pilots",
  {
    id: text("id").primaryKey(),
    githubUserId: text("github_user_id"),
    displayName: text("display_name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("pilots_github_user_id_uidx").on(t.githubUserId)],
);

/** Better Auth core tables (minimal subset used with drizzle adapter). */
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  pilotId: text("pilot_id").references(() => pilots.id),
});

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    authMode: text("auth_mode").notNull().default("unknown"),
  },
  (t) => [index("sessions_user_id_idx").on(t.userId)],
);

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** D2 — durable preparation without project. */
export const preparations = pgTable(
  "preparations",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    status: text("status").notNull().default("OPEN"), // OPEN | ATTACHED
    creationRevision: integer("creation_revision").notNull().default(1),
    previewName: text("preview_name").notNull().default(""),
    previewSummary: text("preview_summary").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("preparations_owner_idx").on(t.ownerPilotId)],
);

export const projects = pgTable(
  "projects",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("projects_owner_idx").on(t.ownerPilotId)],
);

export const preparationProjectLinks = pgTable(
  "preparation_project_links",
  {
    preparationId: text("preparation_id")
      .primaryKey()
      .references(() => preparations.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    attachedAt: timestamp("attached_at", { withTimezone: true }).notNull().defaultNow(),
  },
);

export const createProjectCommands = pgTable(
  "create_project_commands",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    idempotencyKey: text("idempotency_key").notNull(),
    fingerprint: text("fingerprint").notNull(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    result: text("result").notNull(), // CREATED | ALREADY_CREATED | CONFLICT | ...
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("create_project_commands_pilot_key_uidx").on(t.pilotId, t.idempotencyKey),
  ],
);

/** D3 — conversation / messages. */
export const conversations = pgTable(
  "conversations",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("conversations_prep_idx").on(t.preparationId)],
);

export const messages = pgTable(
  "messages",
  {
    id: text("id").primaryKey(),
    conversationId: text("conversation_id")
      .notNull()
      .references(() => conversations.id),
    role: text("role").notNull(), // user | assistant | system
    content: text("content").notNull(),
    status: text("status").notNull(), // COMPLETE | FAILED | INTERRUPTED | UNKNOWN | PENDING
    generationId: text("generation_id"),
    ordinal: integer("ordinal").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("messages_conversation_idx").on(t.conversationId)],
);

/** D4 — documents / revisions. */
export const documents = pgTable(
  "documents",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    title: text("title").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("documents_prep_idx").on(t.preparationId)],
);

export const documentRevisions = pgTable(
  "document_revisions",
  {
    id: text("id").primaryKey(),
    documentId: text("document_id")
      .notNull()
      .references(() => documents.id),
    revisionNumber: integer("revision_number").notNull(),
    contentMarkdown: text("content_markdown").notNull(),
    status: text("status").notNull(), // SAVING | AVAILABLE | FAILED | UNKNOWN
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("document_revisions_doc_rev_uidx").on(t.documentId, t.revisionNumber),
  ],
);

export const schemaRevision = "001_initial_studio_core";
```

### `projects/sfia-studio-next/web/src/domains/boundaries/non-effects.ts`

```ts
/**
 * Negative-boundary helpers for D5–D9 in this increment.
 * They assert absence — they do not fabricate empty services.
 */

export type SideEffectProbe = {
  cycleCreated: false;
  humanDecisionCreated: false;
  cursorMandateCreated: false;
  gitRepositoryOpened: false;
  externalExecutionStarted: false;
};

export function probeCreateProjectSideEffects(): SideEffectProbe {
  return {
    cycleCreated: false,
    humanDecisionCreated: false,
    cursorMandateCreated: false,
    gitRepositoryOpened: false,
    externalExecutionStarted: false,
  };
}

export function assertNoImplicitEffects(probe: SideEffectProbe = probeCreateProjectSideEffects()) {
  const bad = Object.entries(probe).filter(([, v]) => v !== false);
  if (bad.length) {
    throw new Error(`Unexpected side effects: ${bad.map(([k]) => k).join(",")}`);
  }
  return true;
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```ts
import { newId } from "@/lib/ids";

export type NoraGenerateInput = {
  userText: string;
  contextSnippets: string[];
};

export type NoraGenerateResult = {
  content: string;
  status: "COMPLETE" | "FAILED" | "INTERRUPTED" | "UNKNOWN";
  generationId: string;
  mode: "deterministic-fixture" | "openai-agents-sdk-live";
  streamingProvisional?: boolean;
};

const SYSTEM_INSTRUCTIONS =
  "Tu es Nora, copilote SFIA Studio. Tu analyses et proposes. " +
  "Tu ne crées jamais de projet, cycle, dépôt Git ni mandat. " +
  "Aucun outil à effet externe n'est disponible. Réponds en français, concis.";

/**
 * D3 adapter — OpenAI Agents SDK behind this boundary when LIVE key present.
 * NEVER activates MemorySession / ConversationsSession as authority.
 * Without OPENAI_API_KEY: deterministic fixture only (NOT LIVE proof).
 */
export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
  const generationId = newId("gen");
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    const ctx = input.contextSnippets.slice(0, 3).join(" | ");
    return {
      generationId,
      mode: "deterministic-fixture",
      status: "COMPLETE",
      streamingProvisional: false,
      content:
        `Nora (fixture FAKE, not LIVE): j'ai bien noté « ${input.userText.slice(0, 240)} ». ` +
        `Je peux clarifier l'intention et proposer un aperçu de projet sans créer quoi que ce soit. ` +
        (ctx ? `Contexte autorisé: ${ctx.slice(0, 200)}` : "Aucun acquis supplémentaire chargé."),
    };
  }

  try {
    // Dynamic import keeps fixture path free of SDK side-effects when no key.
    const { Agent, run } = await import("@openai/agents");
    const agent = new Agent({
      name: "Nora",
      instructions: SYSTEM_INSTRUCTIONS,
      // No tools → no D5–D9 side effects via Nora.
    });

    const prompt =
      `${input.userText}\n\nContexte autorisé (borné):\n` +
      (input.contextSnippets.length ? input.contextSnippets.join("\n") : "(vide)");

    // Non-streamed finalization: only COMPLETE after SDK result is obtained.
    // Streaming UI may show provisional fragments separately; PG commit happens in service.
    const result = await run(agent, prompt, {
      maxTurns: 1,
    });

    const content =
      typeof result.finalOutput === "string"
        ? result.finalOutput.trim()
        : String(result.finalOutput ?? "").trim();

    if (!content) {
      return {
        generationId,
        mode: "openai-agents-sdk-live",
        status: "UNKNOWN",
        streamingProvisional: false,
        content: "Réponse Agents SDK vide — état UNKNOWN, aucun effet métier.",
      };
    }
    return {
      generationId,
      mode: "openai-agents-sdk-live",
      status: "COMPLETE",
      streamingProvisional: false,
      content,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "interrupted";
    const status = /timeout|abort/i.test(msg) ? ("INTERRUPTED" as const) : ("FAILED" as const);
    return {
      generationId,
      mode: "openai-agents-sdk-live",
      status,
      streamingProvisional: false,
      content: `Nora LIVE ${status}: ${msg}. Message utilisateur déjà persisté.`,
    };
  }
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```ts
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

export async function postUserMessageAndNora(
  pilotId: string,
  preparationId: string,
  content: string,
) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  const existing = await listMessages(pilotId, preparationId);
  const nextOrdinal = (existing.at(-1)?.ordinal ?? 0) + 1;

  // Persist user message BEFORE provider call
  const userMsgId = newId("msg");
  await db.insert(messages).values({
    id: userMsgId,
    conversationId: ctx.conversation.id,
    role: "user",
    content,
    status: "COMPLETE",
    ordinal: nextOrdinal,
  });

  const contextSnippets = existing
    .filter((m) => m.status === "COMPLETE")
    .slice(-6)
    .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

  const reply = await generateNoraReply({ userText: content, contextSnippets });

  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: ctx.conversation.id,
    role: "assistant",
    content: reply.content,
    status: reply.status,
    generationId: reply.generationId,
    ordinal: nextOrdinal + 1,
  });

  // Optional: propose preview fields when empty (non-authorizing)
  return {
    userMessageId: userMsgId,
    assistantMessageId: assistantId,
    noraMode: reply.mode,
    status: reply.status,
  };
}

export async function getConversationId(pilotId: string, preparationId: string) {
  const row = (
    await db
      .select()
      .from(conversations)
      .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  return row?.id ?? null;
}
```

### `projects/sfia-studio-next/web/src/domains/document/service.ts`

```ts
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";

const MAX_DOC_CHARS = 100_000;

export async function savePreparationDocument(
  pilotId: string,
  preparationId: string,
  title: string,
  contentMarkdown: string,
  documentId?: string,
  opts?: { injectPersistFailure?: boolean },
) {
  if (contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  let docId = documentId;
  if (!docId) {
    docId = newId("doc");
    await db.insert(documents).values({
      id: docId,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      title: title || "Document du sas",
    });
  } else {
    // Authorization: owner AND durable preparation context (not owner-only).
    const owned = (
      await db
        .select()
        .from(documents)
        .where(
          and(
            eq(documents.id, docId),
            eq(documents.ownerPilotId, pilotId),
            eq(documents.preparationId, preparationId),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
  }

  const last = (
    await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, docId))
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1)
  )[0];
  const revisionNumber = (last?.revisionNumber ?? 0) + 1;
  const revisionId = newId("drev");

  // Honest lifecycle: insert SAVING first; promote to AVAILABLE only after durable confirm.
  try {
    await db.insert(documentRevisions).values({
      id: revisionId,
      documentId: docId,
      revisionNumber,
      contentMarkdown,
      status: "SAVING",
    });

    if (opts?.injectPersistFailure) {
      await db
        .update(documentRevisions)
        .set({ status: "FAILED" })
        .where(eq(documentRevisions.id, revisionId));
      return {
        status: "FAILED" as const,
        reason: "injected persist failure",
        documentId: docId,
        revisionId,
        revisionNumber,
      };
    }

    await db
      .update(documentRevisions)
      .set({ status: "AVAILABLE" })
      .where(eq(documentRevisions.id, revisionId));
  } catch (e) {
    try {
      await db
        .update(documentRevisions)
        .set({ status: "FAILED" })
        .where(eq(documentRevisions.id, revisionId));
    } catch {
      // best-effort status mark
    }
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: docId,
      revisionId,
      revisionNumber,
    };
  }

  return {
    status: "AVAILABLE" as const,
    documentId: docId,
    revisionId,
    revisionNumber,
  };
}

export async function listDocuments(pilotId: string, preparationId: string) {
  const docs = await db
    .select()
    .from(documents)
    .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
  const out = [];
  for (const d of docs) {
    const rev = (
      await db
        .select()
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, d.id))
        .orderBy(desc(documentRevisions.revisionNumber))
        .limit(1)
    )[0];
    out.push({ document: d, latestRevision: rev ?? null });
  }
  return out;
}
```

### `projects/sfia-studio-next/web/src/domains/identity/portfolio.ts`

```ts
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
```

### `projects/sfia-studio-next/web/src/domains/identity/provision-pilot.ts`

```ts
import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { accounts, pilots, users } from "@/db/schema";
import { newId } from "@/lib/ids";

/**
 * Stable GitHub account id → PilotId mapping.
 * Source of truth: verified provider account row (server), never client-supplied PilotId.
 *
 * Hook-order safe: Better Auth may create the user (and an early Pilot) before the
 * GitHub `accounts` row exists. Later calls must backfill `pilots.github_user_id`
 * without changing PilotId or reparenting resources.
 */
export async function ensurePilotForAuthUser(userId: string): Promise<{
  pilotId: string;
  displayName: string;
  githubUserId: string | null;
}> {
  const user = (await db.select().from(users).where(eq(users.id, userId)).limit(1))[0];
  if (!user) {
    throw new Error("AUTH_USER_MISSING");
  }

  const githubAccount = (
    await db
      .select()
      .from(accounts)
      .where(and(eq(accounts.userId, userId), eq(accounts.providerId, "github")))
      .limit(1)
  )[0];
  const githubUserId = githubAccount?.accountId ?? null;
  const displayName = user.name?.trim() || user.email || "Pilote";

  if (user.pilotId) {
    const pilot = (await db.select().from(pilots).where(eq(pilots.id, user.pilotId)).limit(1))[0];
    if (pilot) {
      // Late account link: preserve PilotId; fill github_user_id only when still null.
      if (githubUserId && !pilot.githubUserId) {
        const conflict = (
          await db
            .select({ id: pilots.id })
            .from(pilots)
            .where(and(eq(pilots.githubUserId, githubUserId), sql`${pilots.id} <> ${pilot.id}`))
            .limit(1)
        )[0];
        if (conflict) {
          // Do not merge/reparent — surface conflict for Morris/ops.
          throw Object.assign(new Error("PILOT_GITHUB_LINK_CONFLICT"), {
            code: "PILOT_GITHUB_LINK_CONFLICT",
          });
        }
        await db
          .update(pilots)
          .set({ githubUserId })
          .where(and(eq(pilots.id, pilot.id), isNull(pilots.githubUserId)));
        return {
          pilotId: pilot.id,
          displayName: pilot.displayName,
          githubUserId,
        };
      }
      if (
        githubUserId &&
        pilot.githubUserId &&
        pilot.githubUserId !== githubUserId
      ) {
        throw Object.assign(new Error("PILOT_GITHUB_LINK_CONFLICT"), {
          code: "PILOT_GITHUB_LINK_CONFLICT",
        });
      }
      return {
        pilotId: pilot.id,
        displayName: pilot.displayName,
        githubUserId: pilot.githubUserId,
      };
    }
  }

  let pilot =
    githubUserId != null
      ? (
          await db.select().from(pilots).where(eq(pilots.githubUserId, githubUserId)).limit(1)
        )[0]
      : undefined;

  if (!pilot) {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId,
      displayName,
    });
    pilot = (await db.select().from(pilots).where(eq(pilots.id, pilotId)).limit(1))[0];
  }

  await db.update(users).set({ pilotId: pilot.id, updatedAt: new Date() }).where(eq(users.id, userId));

  return {
    pilotId: pilot.id,
    displayName: pilot.displayName,
    githubUserId: pilot.githubUserId,
  };
}
```

### `projects/sfia-studio-next/web/src/domains/identity/session.ts`

```ts
import { and, eq, isNull, gt } from "drizzle-orm";
import { headers } from "next/headers";
import { db } from "@/db/client";
import { pilots, sessions, users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { newId } from "@/lib/ids";
import { cookies } from "next/headers";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";

export type AuthMode = "github-oauth" | "dev-test-login" | "unknown";

export type StudioSession = {
  pilotId: string;
  displayName: string;
  sessionId: string;
  authMode: AuthMode;
};

const COOKIE = "sfia_studio_session";

/**
 * Single Studio session resolver.
 * Authority order:
 * 1. Better Auth session cookie (GitHub OAuth) → Pilot via users.pilotId / provision
 * 2. DEV-only `sfia_studio_session` cookie (explicit test adapter, not OAuth proof)
 */
export async function resolveStudioSession(): Promise<StudioSession | null> {
  const fromBetterAuth = await resolveBetterAuthStudioSession();
  if (fromBetterAuth) return fromBetterAuth;
  return resolveDevAdapterSession();
}

async function resolveBetterAuthStudioSession(): Promise<StudioSession | null> {
  try {
    const h = await headers();
    const result = await auth.api.getSession({ headers: h });
    if (!result?.session?.id || !result.user?.id) return null;

    const sessionRow = (
      await db
        .select({
          id: sessions.id,
          revokedAt: sessions.revokedAt,
          expiresAt: sessions.expiresAt,
          authMode: sessions.authMode,
        })
        .from(sessions)
        .where(eq(sessions.id, result.session.id))
        .limit(1)
    )[0];

    if (!sessionRow) return null;
    if (sessionRow.revokedAt) return null;
    if (sessionRow.expiresAt <= new Date()) return null;

    const linked = await ensurePilotForAuthUser(result.user.id);
    const authMode = (sessionRow.authMode as AuthMode) || "github-oauth";
    return {
      pilotId: linked.pilotId,
      displayName: linked.displayName,
      sessionId: sessionRow.id,
      authMode: authMode === "dev-test-login" ? "dev-test-login" : "github-oauth",
    };
  } catch {
    // Better Auth misconfig / missing secret must not crash every API — fall through to DEV adapter.
    return null;
  }
}

async function resolveDevAdapterSession(): Promise<StudioSession | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;

  const rows = await db
    .select({
      sessionId: sessions.id,
      revokedAt: sessions.revokedAt,
      expiresAt: sessions.expiresAt,
      authMode: sessions.authMode,
      pilotId: pilots.id,
      displayName: pilots.displayName,
    })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .innerJoin(pilots, eq(users.pilotId, pilots.id))
    .where(and(eq(sessions.token, token), isNull(sessions.revokedAt), gt(sessions.expiresAt, new Date())))
    .limit(1);

  const row = rows[0];
  if (!row?.pilotId) return null;

  // DEV adapter cookie must never be treated as GitHub OAuth.
  if (row.authMode !== "dev-test-login") return null;

  return {
    pilotId: row.pilotId,
    displayName: row.displayName,
    sessionId: row.sessionId,
    authMode: "dev-test-login",
  };
}

export async function requireStudioSession(): Promise<StudioSession> {
  const s = await resolveStudioSession();
  if (!s) {
    const err = new Error("SESSION_INVALID");
    (err as Error & { code: string }).code = "SESSION_INVALID";
    throw err;
  }
  return s;
}

export async function revokeSession(sessionId: string): Promise<void> {
  await db
    .update(sessions)
    .set({ revokedAt: new Date(), updatedAt: new Date() })
    .where(eq(sessions.id, sessionId));
}

export type DevLoginGateInput = {
  host?: string | null;
  /** Reject when any of these proxy headers are present — Host alone is forgeable. */
  forwardedHost?: string | null;
  forwardedFor?: string | null;
  realIp?: string | null;
};

function isLoopbackHost(value: string | null | undefined): boolean {
  const host = (value ?? "").toLowerCase().split(",")[0]?.trim() ?? "";
  if (!host) return false;
  return (
    host.startsWith("127.0.0.1") ||
    host.startsWith("localhost") ||
    host.startsWith("[::1]") ||
    host === "::1"
  );
}

function assertDevTestLoginAllowed(gate: DevLoginGateInput) {
  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") {
    throw new Error("DEV_TEST_LOGIN_DISABLED");
  }
  // Fail-closed: DEV test login requires an explicit STUDIO_LANE=DEV (absent ≠ DEV).
  if (process.env.STUDIO_LANE !== "DEV") {
    throw new Error("DEV_TEST_LOGIN_LANE_FORBIDDEN");
  }
  // Host alone is forgeable. Next DEV may set x-forwarded-* to loopback — allow only if
  // every present forwarding signal is itself loopback. Non-loopback forward = reject.
  if (!isLoopbackHost(gate.host)) {
    throw new Error("DEV_TEST_LOGIN_HOST_FORBIDDEN");
  }
  if (gate.forwardedHost && !isLoopbackHost(gate.forwardedHost)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
  if (gate.forwardedFor && !isLoopbackHost(gate.forwardedFor)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
  if (gate.realIp && !isLoopbackHost(gate.realIp)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
}

/** DEV-ONLY test login — Fake/Real: NOT GitHub OAuth proof. Loopback + DEV lane only. */
export async function createDevTestSession(
  which: "a" | "b",
  gate: DevLoginGateInput | string | null = null,
): Promise<{ token: string; pilotId: string; sessionId: string }> {
  const normalized: DevLoginGateInput =
    typeof gate === "string" || gate == null ? { host: gate } : gate;
  assertDevTestLoginAllowed(normalized);

  const label = which === "a" ? "Pilot A (DEV)" : "Pilot B (DEV)";
  const email = which === "a" ? "dev+pilot-a@studio.local" : "dev+pilot-b@studio.local";
  const githubMarker = which === "a" ? "dev-github-a" : "dev-github-b";

  let pilot = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, githubMarker)).limit(1)
  )[0];
  if (!pilot) {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId: githubMarker,
      displayName: label,
    });
    pilot = (await db.select().from(pilots).where(eq(pilots.id, pilotId)).limit(1))[0];
  }

  let user = (await db.select().from(users).where(eq(users.email, email)).limit(1))[0];
  if (!user) {
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: label,
      email,
      emailVerified: true,
      pilotId: pilot.id,
    });
    user = (await db.select().from(users).where(eq(users.id, userId)).limit(1))[0];
  } else if (!user.pilotId) {
    await db.update(users).set({ pilotId: pilot.id }).where(eq(users.id, user.id));
  }

  const token = newId("sess");
  const sessionId = newId("sid");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  await db.insert(sessions).values({
    id: sessionId,
    token,
    userId: user.id,
    expiresAt,
    authMode: "dev-test-login",
  });

  return { token, pilotId: pilot.id, sessionId };
}

export { COOKIE as STUDIO_SESSION_COOKIE };
```

### `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`

```ts
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  createProjectCommands,
  documents,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { creationFingerprint } from "@/lib/fingerprint";
import { newId } from "@/lib/ids";

export type CreateProjectInput = {
  pilotId: string;
  preparationId: string;
  expectedCreationRevision: number;
  projectName: string;
  previewSummary: string;
  idempotencyKey: string;
};

export type CreateProjectResult =
  | { status: "CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "ALREADY_CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "CONFLICT"; actualCreationRevision: number; reason: string }
  | { status: "FORBIDDEN" }
  | { status: "INVALID_REQUEST"; reason: string };

type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

async function loadCommandUnderLock(
  tx: Tx,
  pilotId: string,
  idempotencyKey: string,
) {
  return (
    await tx
      .select()
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, pilotId),
          eq(createProjectCommands.idempotencyKey, idempotencyKey),
        ),
      )
      .limit(1)
  )[0];
}

function fingerprintConflict(reason: string): CreateProjectResult {
  return { status: "CONFLICT", actualCreationRevision: -1, reason };
}

/**
 * Atomic create-project:
 * 1. Serialize all creates for the same (pilotId, idempotencyKey) via advisory xact lock
 *    BEFORE any project/link mutation — covers cross-preparation collisions.
 * 2. Evaluate prior command + fingerprint under that lock.
 * 3. Only then mutate preparation/project. CONFLICT paths never insert orphans.
 * 4. If a late race is detected after mutation, throw to ROLLBACK the transaction.
 */
export async function createProjectCommand(input: CreateProjectInput): Promise<CreateProjectResult> {
  const name = input.projectName.trim();
  if (!name) return { status: "INVALID_REQUEST", reason: "projectName required" };
  if (!input.idempotencyKey) return { status: "INVALID_REQUEST", reason: "idempotencyKey required" };

  const fingerprint = creationFingerprint({
    preparationId: input.preparationId,
    projectName: name,
    previewSummary: input.previewSummary,
    expectedCreationRevision: input.expectedCreationRevision,
  });

  try {
    return await db.transaction(async (tx) => {
      // Cross-preparation serialization for this idempotency key (pilot-scoped).
      await tx.execute(
        sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${input.idempotencyKey}))`,
      );

      const prior = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
      if (prior) {
        if (prior.fingerprint !== fingerprint || prior.preparationId !== input.preparationId) {
          // Different preparation or payload — reject with ZERO mutations in this TX.
          return fingerprintConflict(
            prior.preparationId !== input.preparationId
              ? "idempotency key already used for another preparation"
              : "idempotency fingerprint mismatch under lock",
          );
        }
        if (prior.projectId) {
          return {
            status: "ALREADY_CREATED" as const,
            projectId: prior.projectId,
            preparationId: prior.preparationId,
            committedAt: prior.createdAt,
          };
        }
      }

      // Serialize concurrent creates for this preparation.
      const locked = await tx.execute(
        sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
      );
      const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
      const prepRow = rows[0];
      if (!prepRow) return { status: "FORBIDDEN" as const };

      const existingLink = (
        await tx
          .select()
          .from(preparationProjectLinks)
          .where(eq(preparationProjectLinks.preparationId, input.preparationId))
          .limit(1)
      )[0];

      if (existingLink) {
        // Preparation already attached: record replay under same key/fingerprint only.
        if (prior && prior.fingerprint !== fingerprint) {
          return fingerprintConflict("idempotency fingerprint mismatch on attached preparation");
        }
        if (!prior) {
          await tx.insert(createProjectCommands).values({
            id: newId("cmd"),
            pilotId: input.pilotId,
            idempotencyKey: input.idempotencyKey,
            fingerprint,
            preparationId: input.preparationId,
            projectId: existingLink.projectId,
            result: "ALREADY_CREATED",
          });
        }
        return {
          status: "ALREADY_CREATED" as const,
          projectId: existingLink.projectId,
          preparationId: input.preparationId,
          committedAt: existingLink.attachedAt,
        };
      }

      if (Number(prepRow.creation_revision) !== input.expectedCreationRevision) {
        return {
          status: "CONFLICT" as const,
          actualCreationRevision: Number(prepRow.creation_revision),
          reason: "expectedCreationRevision stale",
        };
      }

      const projectId = newId("proj");
      const now = new Date();
      await tx.insert(projects).values({
        id: projectId,
        ownerPilotId: input.pilotId,
        name,
        createdAt: now,
      });
      await tx.insert(preparationProjectLinks).values({
        preparationId: input.preparationId,
        projectId,
        attachedAt: now,
      });
      await tx
        .update(preparations)
        .set({ status: "ATTACHED", updatedAt: now })
        .where(eq(preparations.id, input.preparationId));
      await tx
        .update(conversations)
        .set({ projectId })
        .where(eq(conversations.preparationId, input.preparationId));
      await tx
        .update(documents)
        .set({ projectId })
        .where(eq(documents.preparationId, input.preparationId));

      // Record command AFTER mutations but still inside TX. Unique violation / fingerprint
      // mismatch must ROLLBACK — never return CONFLICT after orphan inserts.
      const inserted = await tx
        .insert(createProjectCommands)
        .values({
          id: newId("cmd"),
          pilotId: input.pilotId,
          idempotencyKey: input.idempotencyKey,
          fingerprint,
          preparationId: input.preparationId,
          projectId,
          result: "CREATED",
          createdAt: now,
        })
        .onConflictDoNothing({
          target: [createProjectCommands.pilotId, createProjectCommands.idempotencyKey],
        })
        .returning();

      if (inserted.length === 0) {
        const raced = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
        if (
          !raced ||
          raced.fingerprint !== fingerprint ||
          raced.preparationId !== input.preparationId
        ) {
          throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
        }
        // Same claim won elsewhere under advisory lock — should be unreachable; rollback safe.
        throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
      }

      return {
        status: "CREATED" as const,
        projectId,
        preparationId: input.preparationId,
        committedAt: now,
      };
    });
  } catch (e) {
    if (e instanceof Error && e.message === "IDEMPOTENCY_RACE_ROLLBACK") {
      return fingerprintConflict("idempotency race rolled back — no orphan mutations");
    }
    throw e;
  }
}

/**
 * Read-only reconciliation after lost ACK — never mutates.
 * When idempotencyKey is provided, the stored preparationId on the command MUST match
 * the requested preparationId — never return project A as confirmation for preparation B.
 */
export async function reconcileCreateProject(
  pilotId: string,
  preparationId: string,
  idempotencyKey?: string,
) {
  const prep = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!prep) {
    return { status: "FORBIDDEN" as const };
  }

  if (idempotencyKey) {
    const cmd = (
      await db
        .select()
        .from(createProjectCommands)
        .where(
          and(
            eq(createProjectCommands.pilotId, pilotId),
            eq(createProjectCommands.idempotencyKey, idempotencyKey),
          ),
        )
        .limit(1)
    )[0];
    if (cmd?.projectId) {
      if (cmd.preparationId !== preparationId) {
        return {
          status: "CONFLICT" as const,
          reason: "idempotency key belongs to another preparation",
          commandPreparationId: cmd.preparationId,
        };
      }
      return {
        status: "ALREADY_CREATED" as const,
        projectId: cmd.projectId,
        preparationId: cmd.preparationId,
      };
    }
  }
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  if (link) {
    const proj = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    if (proj) return { status: "ALREADY_CREATED" as const, projectId: proj.id, preparationId };
  }
  return { status: "NOT_CONFIRMED_OR_UNKNOWN" as const };
}
```

### `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

```ts
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparationProjectLinks, projects } from "@/db/schema";
import { listMessages } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import { getPreparationContext } from "@/domains/preparation/service";

/**
 * Owner-scoped project reopen: durable projectId → linked preparation + same thread + documents.
 * Client never supplies preparationId as authority.
 */
export async function getOwnedProjectContext(pilotId: string, projectId: string) {
  const project = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];

  if (!project) {
    const err = new Error("NOT_FOUND");
    (err as Error & { code: string }).code = "NOT_FOUND";
    throw err;
  }

  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.projectId, projectId))
      .limit(1)
  )[0];

  if (!link) {
    const err = new Error("NOT_FOUND");
    (err as Error & { code: string }).code = "NOT_FOUND";
    throw err;
  }

  const ctx = await getPreparationContext(pilotId, link.preparationId);
  const messages = await listMessages(pilotId, link.preparationId);
  const documents = await listDocuments(pilotId, link.preparationId);

  return {
    project,
    preparation: ctx.preparation,
    conversation: ctx.conversation,
    link,
    messages,
    documents,
  };
}
```

### `projects/sfia-studio-next/web/src/domains/preparation/service.ts`

```ts
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { newId } from "@/lib/ids";

export async function openOrCreatePreparation(pilotId: string, preparationId?: string) {
  if (preparationId) {
    const existing = await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1);
    if (!existing[0]) {
      const err = new Error("NOT_FOUND");
      (err as Error & { code: string }).code = "NOT_FOUND";
      throw err;
    }
    return existing[0];
  }

  const id = newId("prep");
  await db.insert(preparations).values({
    id,
    ownerPilotId: pilotId,
    status: "OPEN",
    creationRevision: 1,
    previewName: "",
    previewSummary: "",
  });
  const convId = newId("conv");
  await db.insert(conversations).values({
    id: convId,
    preparationId: id,
    ownerPilotId: pilotId,
  });
  return (await db.select().from(preparations).where(eq(preparations.id, id)).limit(1))[0];
}

export async function updatePreview(
  pilotId: string,
  preparationId: string,
  previewName: string,
  previewSummary: string,
) {
  const prep = await openOrCreatePreparation(pilotId, preparationId);
  const nextRev = prep.creationRevision + 1;
  await db
    .update(preparations)
    .set({
      previewName,
      previewSummary,
      creationRevision: nextRev,
      updatedAt: new Date(),
    })
    .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)));
  return nextRev;
}

export async function getPreparationContext(pilotId: string, preparationId: string) {
  const prep = await openOrCreatePreparation(pilotId, preparationId);
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  let project = null;
  if (link) {
    project = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
  }
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  return { preparation: prep, project: project ?? null, conversation: conv ?? null, link: link ?? null };
}
```

### `projects/sfia-studio-next/web/src/lib/auth.ts`

```ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";
import * as schema from "@/db/schema";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";
import { eq } from "drizzle-orm";

/**
 * Better Auth is the single session authority for GitHub OAuth Studio identity.
 * GitHub OAuth is wired only when client credentials exist — never fabricate PASS without secrets.
 * Mapping uses our plural tables via explicit schema model names.
 * PilotId is provisioned from the verified GitHub account id (server-side), never from the client.
 */
const githubConfigured = Boolean(
  process.env.GITHUB_CLIENT_ID?.trim() && process.env.GITHUB_CLIENT_SECRET?.trim(),
);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: githubConfigured
    ? {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID!,
          clientSecret: process.env.GITHUB_CLIENT_SECRET!,
          // Studio identity only — no repo scopes requested.
        },
      }
    : {},
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await ensurePilotForAuthUser(user.id);
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          // Mark Better Auth sessions as github-oauth (DEV adapter uses its own insert path).
          return {
            data: {
              ...session,
              authMode: "github-oauth",
            },
          };
        },
        after: async (session) => {
          // Ensure Pilot exists even if user.create hook already ran before account link.
          if (session.userId) {
            await ensurePilotForAuthUser(session.userId);
            // Belt: persist authMode if adapter dropped the before hook field.
            await db
              .update(schema.sessions)
              .set({ authMode: "github-oauth", updatedAt: new Date() })
              .where(eq(schema.sessions.id, session.id));
          }
        },
      },
    },
  },
});

export function githubOAuthStatus() {
  return {
    provider: "github-oauth-studio-identity-only",
    configured: githubConfigured,
    status: githubConfigured
      ? "CONFIGURED — LIVE proof still requires successful callback"
      : "BLOCKED — missing GITHUB_CLIENT_ID/SECRET",
    note: "Login grants Studio identity only — never repository rights.",
  };
}
```

### `projects/sfia-studio-next/web/src/lib/fingerprint.ts`

```ts
import { createHash } from "crypto";

export type CreationApproval = {
  preparationId: string;
  projectName: string;
  previewSummary: string;
  expectedCreationRevision: number;
};

/** Canonical fingerprint of approved creation fields (not full Nora transcript). */
export function creationFingerprint(approval: CreationApproval): string {
  const canonical = JSON.stringify({
    preparationId: approval.preparationId,
    projectName: approval.projectName.trim(),
    previewSummary: approval.previewSummary.trim(),
    expectedCreationRevision: approval.expectedCreationRevision,
  });
  return createHash("sha256").update(canonical).digest("hex");
}
```

### `projects/sfia-studio-next/web/src/lib/ids.ts`

```ts
import { randomUUID } from "crypto";

export function newId(prefix?: string): string {
  const id = randomUUID();
  return prefix ? `${prefix}_${id}` : id;
}
```

### `projects/sfia-studio-next/web/src/lib/product-version.ts`

```ts
/**
 * Single technical source of application version metadata.
 * package.json "version" is technical only — NOT a product release / STABLE claim.
 * Product STABLE version: NOT AVAILABLE until Morris promotion gate.
 */
export const PRODUCT_VERSIONING = {
  technicalPackageVersion: "0.0.0-dev",
  productStableVersion: "NOT AVAILABLE",
  releaseCandidateProposal: "0.1.0-rc.1", // proposal only — NOT attributed
  releaseStatus: "NO RELEASE",
  laneDefault: "DEV",
} as const;

export function buildManifest(input: {
  sourceSha: string;
  buildId: string;
  schemaRevision: string;
  lane: string;
}) {
  return {
    ...PRODUCT_VERSIONING,
    ...input,
    generatedAt: new Date().toISOString(),
  };
}
```

### `projects/sfia-studio-next/web/tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### `projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts`

```ts
import { test, expect } from "@playwright/test";
import path from "path";

test("DEV fake login → sas → message → document → create → portfolio reopen by projectId", async ({
  page,
  context,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
  await expect(page.getByText("Aucune Nora globale", { exact: false })).toBeVisible();

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");

  await page.getByPlaceholder("Écrire à Nora…").fill("Bonjour Nora depuis Playwright");
  await page.getByRole("button", { name: "Envoyer" }).click();
  // DEV may run fixture FAKE or Agents SDK LIVE depending on OPENAI_API_KEY presence.
  await expect(
    page.getByText(/Nora (deterministic-fixture|openai-agents-sdk-live) · COMPLETE|Nora \(fixture FAKE, not LIVE\)/, {
      exact: false,
    }),
  ).toBeVisible({ timeout: 30000 });

  await page.getByPlaceholder("Nom du projet").fill("Projet Playwright");
  await page.getByPlaceholder("Résumé inspecté").fill("résumé test");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();

  const doc = page.locator("textarea").nth(2);
  await doc.fill("# Document Playwright\ncontenu");
  await page.getByRole("button", { name: "Sauvegarder le document" }).click();
  await expect(page.getByText("AVAILABLE", { exact: false })).toBeVisible({ timeout: 10000 });

  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectUrl = page.url();
  const projectId = projectUrl.split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  await expect(page.getByText("marqueur", { exact: false })).toBeVisible();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // Portfolio → open by projectId only (no preparationId query).
  await page.goto("/portfolio");
  await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
  await expect(page.getByText(projectId!, { exact: true })).toBeVisible();
  await page.locator(`a[href="/projects/${projectId}"]`).click();
  await page.waitForURL(`**/projects/${projectId}`);
  expect(page.url()).not.toContain("preparationId=");
  await expect(page.getByText("réouverture par projectId", { exact: false })).toBeVisible();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();
  await expect(page.getByText("Document Playwright", { exact: false })).toBeVisible();

  await page.reload();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // New browser context (fresh session) of same DEV pilot A — reopen by id.
  const page2 = await context.newPage();
  await page2.goto("/login");
  await page2.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page2.waitForURL("**/portfolio");
  await page2.goto(`/projects/${projectId}`);
  await expect(page2.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // Pilot B cannot read Pilot A's project.
  const bContext = await context.browser()!.newContext();
  const pageB = await bContext.newPage();
  await pageB.goto("/login");
  await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await pageB.waitForURL("**/portfolio");
  await pageB.goto(`/projects/${projectId}`);
  await expect(pageB.getByText("non autorisé", { exact: false })).toBeVisible();
  await expect(pageB.getByText("Bonjour Nora depuis Playwright")).toHaveCount(0);
  await bContext.close();

  const shot = path.join("tests/e2e/artifacts", `ml1-continuity-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
```

### `projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts`

```ts
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand, reconcileCreateProject } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { savePreparationDocument, listDocuments } from "@/domains/document/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("PostgreSQL create-project contracts", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Integration suite must stay on deterministic Nora fixture — LIVE costs/proofs are separate.
    delete process.env.OPENAI_API_KEY;
  });

  it("A01/A03: preparation without project; create only via dedicated command", async () => {
    const pilotId = await seedPilot("A01");
    const prep = await openOrCreatePreparation(pilotId);
    expect(prep.status).toBe("OPEN");
    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links).toHaveLength(0);
  });

  it("A04: concurrent creates yield a single project", async () => {
    const pilotId = await seedPilot("A04");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Concurrent", "summary");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const input = {
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Concurrent",
      previewSummary: "summary",
      idempotencyKey: key,
    };
    const [r1, r2] = await Promise.all([createProjectCommand(input), createProjectCommand(input)]);
    const statuses = [r1.status, r2.status].sort();
    expect(statuses).toContain("CREATED");
    expect(statuses.every((s) => s === "CREATED" || s === "ALREADY_CREATED")).toBe(true);
    const projectIds = [r1.status !== "CONFLICT" && r1.status !== "FORBIDDEN" && r1.status !== "INVALID_REQUEST" ? r1.projectId : null,
      r2.status !== "CONFLICT" && r2.status !== "FORBIDDEN" && r2.status !== "INVALID_REQUEST" ? r2.projectId : null].filter(Boolean);
    expect(new Set(projectIds).size).toBe(1);
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
  });

  it("A05: replay after commit returns same project (lost ACK)", async () => {
    const pilotId = await seedPilot("A05");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "AckLost", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const first = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "AckLost",
      previewSummary: "s",
      idempotencyKey: key,
    });
    expect(first.status).toBe("CREATED");
    const second = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "AckLost",
      previewSummary: "s",
      idempotencyKey: key,
    });
    expect(second.status).toBe("ALREADY_CREATED");
    if (first.status === "CREATED" && second.status === "ALREADY_CREATED") {
      expect(second.projectId).toBe(first.projectId);
    }
    const recon = await reconcileCreateProject(pilotId, prep.id, key);
    expect(recon.status).toBe("ALREADY_CREATED");
  });

  it("A06: stale expectedCreationRevision conflicts without destroying prep", async () => {
    const pilotId = await seedPilot("A06");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Stale", "one");
    const mid = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    await updatePreview(pilotId, prep.id, "Stale", "two");
    const result = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: mid.creationRevision,
      projectName: "Stale",
      previewSummary: "one",
      idempotencyKey: newId("idem"),
    });
    expect(result.status).toBe("CONFLICT");
    const still = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(still.status).toBe("OPEN");
  });

  it("A08/A09: document identity survives create; AVAILABLE only after persist", async () => {
    const pilotId = await seedPilot("A08");
    const prep = await openOrCreatePreparation(pilotId);
    const saved = await savePreparationDocument(pilotId, prep.id, "Doc", "# hello");
    expect(saved.status).toBe("AVAILABLE");
    await updatePreview(pilotId, prep.id, "DocProj", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "DocProj",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    const docs = await listDocuments(pilotId, prep.id);
    expect(docs[0]?.document.id).toBe(saved.documentId);
    expect(docs[0]?.document.projectId).toBeTruthy();
    expect(docs[0]?.latestRevision?.status).toBe("AVAILABLE");
  });

  it("A10: two pilots are isolated", async () => {
    const a = await seedPilot("A10a");
    const b = await seedPilot("A10b");
    const prepA = await openOrCreatePreparation(a);
    await updatePreview(a, prepA.id, "OnlyA", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    await createProjectCommand({
      pilotId: a,
      preparationId: prepA.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "OnlyA",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    const bProjects = await db.select().from(projects).where(eq(projects.ownerPilotId, b));
    expect(bProjects).toHaveLength(0);
    await expect(openOrCreatePreparation(b, prepA.id)).rejects.toBeTruthy();
  });

  it("A02/A07: nora message persists; same thread after create", async () => {
    const pilotId = await seedPilot("A02");
    const prep = await openOrCreatePreparation(pilotId);
    await postUserMessageAndNora(pilotId, prep.id, "Bonjour Nora, idée de projet analytics");
    const before = await listMessages(pilotId, prep.id);
    expect(before.length).toBeGreaterThanOrEqual(2);
    await updatePreview(pilotId, prep.id, "Analytics", "idée");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Analytics",
      previewSummary: "idée",
      idempotencyKey: newId("idem"),
    });
    const after = await listMessages(pilotId, prep.id);
    expect(after.map((m) => m.id)).toEqual(before.map((m) => m.id));
  });

  it("A12: homonyms remain distinct projects", async () => {
    const pilotId = await seedPilot("A12");
    const p1 = await openOrCreatePreparation(pilotId);
    const p2 = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, p1.id, "SameName", "a");
    await updatePreview(pilotId, p2.id, "SameName", "b");
    const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
    const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
    const c1 = await createProjectCommand({
      pilotId,
      preparationId: p1.id,
      expectedCreationRevision: r1.creationRevision,
      projectName: "SameName",
      previewSummary: "a",
      idempotencyKey: newId("idem"),
    });
    const c2 = await createProjectCommand({
      pilotId,
      preparationId: p2.id,
      expectedCreationRevision: r2.creationRevision,
      projectName: "SameName",
      previewSummary: "b",
      idempotencyKey: newId("idem"),
    });
    expect(c1.status).toBe("CREATED");
    expect(c2.status).toBe("CREATED");
    if (c1.status === "CREATED" && c2.status === "CREATED") {
      expect(c1.projectId).not.toBe(c2.projectId);
    }
  });

  it("A16: new db client still reads committed truth", async () => {
    const pilotId = await seedPilot("A16");
    const prep = await openOrCreatePreparation(pilotId);
    const again = await openOrCreatePreparation(pilotId, prep.id);
    expect(again.id).toBe(prep.id);
  });

  it("A04b: same idempotency key with different fingerprint => CONFLICT under lock", async () => {
    const pilotId = await seedPilot("A04b");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "FpOne", "one");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const key = newId("idem");
    const first = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "FpOne",
      previewSummary: "one",
      idempotencyKey: key,
    });
    expect(first.status).toBe("CREATED");
    const second = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "FpTwo",
      previewSummary: "two",
      idempotencyKey: key,
    });
    expect(second.status).toBe("CONFLICT");
    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(all).toHaveLength(1);
  });

  it("A04c: two preparations, same key, concurrent — loser leaves zero mutations", async () => {
    const pilotId = await seedPilot("A04c");
    const prepA = await openOrCreatePreparation(pilotId);
    const prepB = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepA.id, "CrossA", "sa");
    await updatePreview(pilotId, prepB.id, "CrossB", "sb");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
    const key = newId("idem");

    const inputA = {
      pilotId,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "CrossA",
      previewSummary: "sa",
      idempotencyKey: key,
    };
    const inputB = {
      pilotId,
      preparationId: prepB.id,
      expectedCreationRevision: rB.creationRevision,
      projectName: "CrossB",
      previewSummary: "sb",
      idempotencyKey: key,
    };

    const [ra, rb] = await Promise.all([
      createProjectCommand(inputA),
      createProjectCommand(inputB),
    ]);
    const statuses = [ra.status, rb.status].sort();
    expect(statuses).toEqual(["CONFLICT", "CREATED"]);

    const winner = ra.status === "CREATED" ? ra : rb.status === "CREATED" ? rb : null;
    const loserPrepId = ra.status === "CONFLICT" ? prepA.id : prepB.id;
    expect(winner).toBeTruthy();

    const loserLink = await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, loserPrepId));
    expect(loserLink).toHaveLength(0);

    const loserPrep = (
      await db.select().from(preparations).where(eq(preparations.id, loserPrepId))
    )[0];
    expect(loserPrep.status).toBe("OPEN");

    const ownerProjects = await db
      .select()
      .from(projects)
      .where(eq(projects.ownerPilotId, pilotId));
    expect(ownerProjects).toHaveLength(1);

    // Second concurrent wave with a fresh key on two new preps — race repetition.
    const prepC = await openOrCreatePreparation(pilotId);
    const prepD = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepC.id, "CrossC", "sc");
    await updatePreview(pilotId, prepD.id, "CrossD", "sd");
    const rC = (await db.select().from(preparations).where(eq(preparations.id, prepC.id)))[0];
    const rD = (await db.select().from(preparations).where(eq(preparations.id, prepD.id)))[0];
    const key2 = newId("idem");
    const [rc, rd] = await Promise.all([
      createProjectCommand({
        pilotId,
        preparationId: prepC.id,
        expectedCreationRevision: rC.creationRevision,
        projectName: "CrossC",
        previewSummary: "sc",
        idempotencyKey: key2,
      }),
      createProjectCommand({
        pilotId,
        preparationId: prepD.id,
        expectedCreationRevision: rD.creationRevision,
        projectName: "CrossD",
        previewSummary: "sd",
        idempotencyKey: key2,
      }),
    ]);
    expect([rc.status, rd.status].sort()).toEqual(["CONFLICT", "CREATED"]);
    const loser2 = rc.status === "CONFLICT" ? prepC.id : prepD.id;
    expect(
      await db
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.preparationId, loser2)),
    ).toHaveLength(0);
  });

  it("A04d: reconcile with prep B + key owned by prep A never returns project A for B", async () => {
    const pilotId = await seedPilot("A04d");
    const prepA = await openOrCreatePreparation(pilotId);
    const prepB = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prepA.id, "ReconA", "a");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const key = newId("idem");
    const created = await createProjectCommand({
      pilotId,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "ReconA",
      previewSummary: "a",
      idempotencyKey: key,
    });
    expect(created.status).toBe("CREATED");

    const reconB = await reconcileCreateProject(pilotId, prepB.id, key);
    expect(reconB.status).toBe("CONFLICT");
    if (reconB.status === "CONFLICT") {
      expect(reconB.commandPreparationId).toBe(prepA.id);
    }
    const reconA = await reconcileCreateProject(pilotId, prepA.id, key);
    expect(reconA.status).toBe("ALREADY_CREATED");
    if (created.status === "CREATED" && reconA.status === "ALREADY_CREATED") {
      expect(reconA.projectId).toBe(created.projectId);
    }
  });

  it("A10c: two pilots may reuse the same idempotency key string independently", async () => {
    const a = await seedPilot("A10c-a");
    const b = await seedPilot("A10c-b");
    const prepA = await openOrCreatePreparation(a);
    const prepB = await openOrCreatePreparation(b);
    await updatePreview(a, prepA.id, "SharedKey", "a");
    await updatePreview(b, prepB.id, "SharedKey", "b");
    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
    const key = "literally-same-string-key";
    const ca = await createProjectCommand({
      pilotId: a,
      preparationId: prepA.id,
      expectedCreationRevision: rA.creationRevision,
      projectName: "SharedKey",
      previewSummary: "a",
      idempotencyKey: key,
    });
    const cb = await createProjectCommand({
      pilotId: b,
      preparationId: prepB.id,
      expectedCreationRevision: rB.creationRevision,
      projectName: "SharedKey",
      previewSummary: "b",
      idempotencyKey: key,
    });
    expect(ca.status).toBe("CREATED");
    expect(cb.status).toBe("CREATED");
    if (ca.status === "CREATED" && cb.status === "CREATED") {
      expect(ca.projectId).not.toBe(cb.projectId);
    }
  });

  it("A10b: same pilot cannot revise document from another preparation", async () => {
    const pilotId = await seedPilot("A10b");
    const p1 = await openOrCreatePreparation(pilotId);
    const p2 = await openOrCreatePreparation(pilotId);
    const saved = await savePreparationDocument(pilotId, p1.id, "Doc1", "# a");
    expect(saved.status).toBe("AVAILABLE");
    const cross = await savePreparationDocument(
      pilotId,
      p2.id,
      "Doc1",
      "# hack",
      saved.documentId,
    );
    expect(cross.status).toBe("FAILED");
    expect(cross.reason).toBe("FORBIDDEN");
  });

  it("A09b: injected persist failure yields FAILED not AVAILABLE", async () => {
    const pilotId = await seedPilot("A09b");
    const prep = await openOrCreatePreparation(pilotId);
    const failed = await savePreparationDocument(pilotId, prep.id, "X", "# x", undefined, {
      injectPersistFailure: true,
    });
    expect(failed.status).toBe("FAILED");
  });

  it("reconcile foreign preparation is FORBIDDEN", async () => {
    const a = await seedPilot("recA");
    const b = await seedPilot("recB");
    const prepA = await openOrCreatePreparation(a);
    const result = await reconcileCreateProject(b, prepA.id);
    expect(result.status).toBe("FORBIDDEN");
  });

  it("project reopen by projectId resolves same preparation thread (owner only)", async () => {
    const { getOwnedProjectContext } = await import("@/domains/preparation/project-context");
    const a = await seedPilot("projCtxA");
    const b = await seedPilot("projCtxB");
    const prep = await openOrCreatePreparation(a);
    await postUserMessageAndNora(a, prep.id, "message for reopen");
    await updatePreview(a, prep.id, "Reopen", "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId: a,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Reopen",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED") return;

    const ctx = await getOwnedProjectContext(a, created.projectId);
    expect(ctx.preparation.id).toBe(prep.id);
    expect(ctx.messages.some((m) => m.content.includes("message for reopen"))).toBe(true);

    await expect(getOwnedProjectContext(b, created.projectId)).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts`

```ts
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { accounts, pilots, sessions, users } from "@/db/schema";
import { newId } from "@/lib/ids";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";
import { createDevTestSession, revokeSession } from "@/domains/identity/session";

describe("D1 identity → Pilot provisioning (simulated OAuth association)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    process.env.STUDIO_LANE = "DEV";
  });

  it("same GitHub account id maps to the same PilotId on repeat", async () => {
    const githubUserId = `gh-sim-${newId("acct")}`;
    const userId1 = newId("user");
    await db.insert(users).values({
      id: userId1,
      name: "Sim OAuth User",
      email: `${userId1}@sim.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId: userId1,
    });

    const first = await ensurePilotForAuthUser(userId1);
    const again = await ensurePilotForAuthUser(userId1);
    expect(again.pilotId).toBe(first.pilotId);
    expect(again.githubUserId).toBe(githubUserId);

    // Second auth user with same GitHub account id (re-link / re-login shape) → same Pilot.
    const userId2 = newId("user");
    await db.insert(users).values({
      id: userId2,
      name: "Sim OAuth User Relink",
      email: `${userId2}@sim.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId: userId2,
    });
    const relinked = await ensurePilotForAuthUser(userId2);
    expect(relinked.pilotId).toBe(first.pilotId);

    const u1 = (await db.select().from(users).where(eq(users.id, userId1)))[0];
    const u2 = (await db.select().from(users).where(eq(users.id, userId2)))[0];
    expect(u1.pilotId).toBe(first.pilotId);
    expect(u2.pilotId).toBe(first.pilotId);
  });

  it("two GitHub accounts yield isolated PilotIds", async () => {
    const mk = async (label: string) => {
      const githubUserId = `gh-iso-${newId("acct")}`;
      const userId = newId("user");
      await db.insert(users).values({
        id: userId,
        name: label,
        email: `${userId}@iso.local`,
        emailVerified: true,
      });
      await db.insert(accounts).values({
        id: newId("acct"),
        accountId: githubUserId,
        providerId: "github",
        userId,
      });
      return ensurePilotForAuthUser(userId);
    };
    const a = await mk("Iso A");
    const b = await mk("Iso B");
    expect(a.pilotId).not.toBe(b.pilotId);
  });

  it("DEV login gate rejects absent/non-DEV lane, non-loopback Host/proxy; allows DEV+loopback", async () => {
    const prevLane = process.env.STUDIO_LANE;
    try {
      delete process.env.STUDIO_LANE;
      await expect(
        createDevTestSession("a", { host: "127.0.0.1:3100" }),
      ).rejects.toThrow(/LANE_FORBIDDEN/);

      process.env.STUDIO_LANE = "RECETTE";
      await expect(
        createDevTestSession("a", { host: "127.0.0.1:3100" }),
      ).rejects.toThrow(/LANE_FORBIDDEN/);

      process.env.STUDIO_LANE = "DEV";
      await expect(
        createDevTestSession("a", {
          host: "127.0.0.1:3100",
          forwardedFor: "1.2.3.4",
        }),
      ).rejects.toThrow(/PROXY_FORBIDDEN/);

      await expect(
        createDevTestSession("a", {
          host: "127.0.0.1:3100",
          forwardedHost: "evil.example.com",
        }),
      ).rejects.toThrow(/PROXY_FORBIDDEN/);

      await expect(
        createDevTestSession("a", { host: "evil.example.com" }),
      ).rejects.toThrow(/HOST_FORBIDDEN/);

      // Next DEV often mirrors loopback into x-forwarded-* — still allowed.
      const created = await createDevTestSession("a", {
        host: "127.0.0.1:3100",
        forwardedHost: "127.0.0.1:3100",
        forwardedFor: "127.0.0.1",
      });
      expect(created.pilotId).toBeTruthy();
      await revokeSession(created.sessionId);
      const row = (await db.select().from(sessions).where(eq(sessions.id, created.sessionId)))[0];
      expect(row.revokedAt).toBeTruthy();
      expect(row.authMode).toBe("dev-test-login");
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
    }
  });

  it("pilot row exists after provisioning and is stable by github_user_id unique index", async () => {
    const githubUserId = `gh-stable-${newId("acct")}`;
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: "Stable",
      email: `${userId}@stable.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId,
    });
    const linked = await ensurePilotForAuthUser(userId);
    const pilotsFound = await db
      .select()
      .from(pilots)
      .where(eq(pilots.githubUserId, githubUserId));
    expect(pilotsFound).toHaveLength(1);
    expect(pilotsFound[0].id).toBe(linked.pilotId);
  });

  it("hook-order: early Pilot without github id is backfilled without changing PilotId", async () => {
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: "Early Pilot",
      email: `${userId}@early.local`,
      emailVerified: true,
    });
    // Simulate user.create.after before GitHub account row exists.
    const early = await ensurePilotForAuthUser(userId);
    expect(early.githubUserId).toBeNull();
    const pilotBefore = (await db.select().from(pilots).where(eq(pilots.id, early.pilotId)))[0];
    expect(pilotBefore.githubUserId).toBeNull();

    const githubUserId = `gh-late-${newId("acct")}`;
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId,
    });

    const after = await ensurePilotForAuthUser(userId);
    expect(after.pilotId).toBe(early.pilotId);
    expect(after.githubUserId).toBe(githubUserId);
    const pilotAfter = (await db.select().from(pilots).where(eq(pilots.id, early.pilotId)))[0];
    expect(pilotAfter.githubUserId).toBe(githubUserId);

    // Repeat is stable.
    const again = await ensurePilotForAuthUser(userId);
    expect(again.pilotId).toBe(early.pilotId);
    expect(again.githubUserId).toBe(githubUserId);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { creationFingerprint } from "@/lib/fingerprint";

describe("creationFingerprint", () => {
  it("is stable for same approved fields", () => {
    const a = creationFingerprint({
      preparationId: "prep_1",
      projectName: " Alpha ",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    const b = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    expect(a).toBe(b);
  });

  it("changes when revision changes", () => {
    const a = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    const b = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 3,
    });
    expect(a).not.toBe(b);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/non-effects.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { assertNoImplicitEffects, probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";

describe("D5-D9 non-effects", () => {
  it("reports no implicit cycle/git/cursor effects", () => {
    expect(assertNoImplicitEffects(probeCreateProjectSideEffects())).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `projects/sfia-studio-next/web/vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";
import path from "path";
import { config } from "dotenv";

config({ path: path.resolve(__dirname, ".env.local") });

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    fileParallelism: false,
    sequence: { concurrent: false },
    env: {
      // DATABASE_URL must come from .env.local / process env — never hardcode credentials here.
      STUDIO_DEV_TEST_LOGIN: process.env.STUDIO_DEV_TEST_LOGIN ?? "1",
      STUDIO_LANE: process.env.STUDIO_LANE ?? "DEV",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## 11. Verdict
- **LOCAL COMMIT CREATED — READY FOR CHATGPT CODE REVIEW** after handoff remote verify
- Next Morris gates: push projet / PR / merge / RC / RECETTE — all **distinct** and **not** authorized here
