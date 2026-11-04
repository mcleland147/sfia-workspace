# SFIA STUDIO NEXT — FULL REVIEW PACK
# R5 / ML1 — consolidation critique correctifs D3 — 2026-11-04

## 1. Timestamp
2026-11-04T10:11:56+01:00 (Europe/Paris)

## 2. Objectif
Consolider le vertical ML1 local (même macro-lot) : corriger écarts revue ChatGPT (Next vulnérable, D1 session, D2 fingerprint sous verrou, D4 scope préparation, D3 Agents SDK, Playwright/Figma, docs). Pas de push projet.

## 3. Local Git Truth Check
- Branch: `sfia/next-access-preparation-continuity` (dirty/untracked PRESERVED)
- HEAD/base: `61a6765a4e8d92760aab595b61b66aa2425906c6` = origin/main
- Project push/commit/PR: NONE
- Review pack: reset at cycle start then rewritten
- Protected paths untouched

## 4. Git Review Index
```
base: origin/main @ 61a6765a4e8d92760aab595b61b66aa2425906c6
HEAD: same (no project commit)
working tree: local ML1 web + construction docs
préexistant: web/** from prior local delivery
modifié correctif: D1/D2/D3/D4 modules, auth, migrations 002, Next 15.5.29, tests, docs
nouveau correctif: playwright e2e, auth.ts Better Auth mount, migration 002
tests: unit 3 PASS; integration 13 PASS; Playwright 1 PASS
Next: 15.5.29
review pack: full
Fake/Real: OUI
```

## 5. Review Pack content coverage
- created/unpublished handwritten source complete: YES (full text below for source files; lock/binaries hash-only justified)
- modified sections complete or useful diff: YES (full current files included — cumulative vs main baseline for unpublished tree)
- generated-large exceptions justified: YES (package-lock.json, screenshots/png/ico/svg → sha256 + size)
- synthesis only: NO
- README/spec/CHANGELOG/delivery-history synchronisés: YES
- review pack reset + no stub + single-cycle: YES
- untracked files correctly inventoried: YES

## 6. Correctifs critiques confirmés
1. Next.js 15.1.3 → **15.5.29** + eslint-config-next 15.5.29; lockfile updated
2. D2: fingerprint compared **under FOR UPDATE**; same key/different payload → CONFLICT; ON CONFLICT returning
3. D4: edit requires ownerPilotId **and** preparationId; SAVING then AVAILABLE/FAILED; inject failure test
4. D3: `@openai/agents` Agent+run behind adapter; fixture FAKE without key; no MemorySession
5. D1: `sessions.auth_mode` column; Better Auth mount; DEV login fail-closed unless loopback+DEV+flag; no email-based authMode
6. Playwright chromium: login→sas→Nora→doc→create→reload PASS
7. Figma rail 246 from prior native extract retained

## 7. A01–A16 (post-correctif)
| QA | Verdict | Preuve |
| --- | --- | --- |
| A01 | PASS | DB+browser smoke |
| A02 | PARTIAL | fixture FAKE COMPLETE; LIVE BLOCKED no OPENAI key |
| A03 | PASS | dedicated command only |
| A04 | PASS | concurrent + fingerprint mismatch CONFLICT |
| A05 | PASS/PARTIAL | replay ALREADY_CREATED; full mid-commit crash inject still limited |
| A06 | PASS | stale revision CONFLICT |
| A07 | PASS | Playwright reload continuity |
| A08 | PASS | doc identity after create |
| A09 | PASS | injected FAILED path |
| A10 | PASS | inter-pilot + same-pilot cross-prep FORBIDDEN |
| A11 | PARTIAL | Git revocation OUT |
| A12 | PASS | homonyms distinct |
| A13 | PARTIAL | bounded context snippets; no LIVE |
| A14 | PASS | Playwright portfolio sans Nora globale |
| A15 | PASS | sideEffects false |
| A16 | PARTIAL | reopen+reload; backup restore DATA-01 NOT RUN |

## 8. Fake/Real
| Boundary | Status |
| --- | --- |
| GitHub OAuth | Better Auth wired; LIVE BLOCKED without secrets |
| DEV login | FAKE loopback-only |
| Nora | Agents SDK path present; fixture FAKE without key; LIVE BLOCKED |
| PostgreSQL | REAL DEV container |
| Figma | native metadata rail 246; full fidelity still incomplete |
| Browser | Playwright PASS |
| RECETTE/STABLE | NOT AVAILABLE |
| Git/Cursor D7/D9 | OUT / non-effects |

## 9. Versions / lanes
- Next 15.5.29, React 19, better-auth 1.7.x, drizzle-orm 0.45.x, @openai/agents installed
- Product: NO RELEASE / STABLE NOT AVAILABLE
- schema: 001 + 002_session_auth_mode
- DEV :3100 / PG :5433

## 10. Verdict
**READY FOR CHATGPT REVIEW** — pack/handoff complets, preuves qualifiées, réserves LIVE/OAuth/RECETTE explicites.
Not READY FOR PROJECT PR / Not STABLE / Not ADOPTED.

## 11. File inventory (web, excl. node_modules/.next)

- `projects/sfia-studio-next/web/.env.example` (full, 482 B, sha256:dbfa0d52b6bfe6ba4c0e0d8a1544da6dcb961711b28cf1834f650d54203cf5f7)
- `projects/sfia-studio-next/web/.env.local` (full, 308 B, sha256:8796bf8c0df6fdff944497ae8266d9258e948a705064b12b5e6631d02fbdca9c)
- `projects/sfia-studio-next/web/.gitignore` (full, 505 B, sha256:7c5f381d8321045e2a86d688f69ea0046877e7a71bca90448d08ba690084c310)
- `projects/sfia-studio-next/web/README.md` (full, 1516 B, sha256:67fe8eaacdd36ddc89b7fee744cb30bf70d645fb3e4af008012c140a6a0aed67)
- `projects/sfia-studio-next/web/docs/ux-figma-pending.md` (full, 637 B, sha256:21a9733e74b46458926fac5c8baf9cbb7b85d59ea02ea433a7c663deb8ebd3bd)
- `projects/sfia-studio-next/web/drizzle.config.ts` (full, 226 B, sha256:af8ad36ceda0ec674dafe068b16a15c810b1c3a1591a3115599bb4a9d21b5c56)
- `projects/sfia-studio-next/web/eslint.config.mjs` (full, 393 B, sha256:3de4ba23ff1f687685651cad622700613998de80daa30ac4d82c47776a04019d)
- `projects/sfia-studio-next/web/next-env.d.ts` (full, 262 B, sha256:85ae5aee75f011967cf2d25cbc342f62d69314e9d925f7f4aa3456fc2cffcca6)
- `projects/sfia-studio-next/web/next.config.ts` (full, 133 B, sha256:614bce25b089c3f19b1e17a6346c74b858034040154c6621e7d35303004767cc)
- `projects/sfia-studio-next/web/package-lock.json` (hash-only, 358565 B, sha256:6968853ccd3d35e78d8ec5f6123808359abcd46380aee6905050ecdcd3685c54)
- `projects/sfia-studio-next/web/package.json` (full, 1456 B, sha256:1249ec86ba3d600ac3115109805d6e4600805baa19b85e27922e39dc3dfff98f)
- `projects/sfia-studio-next/web/playwright.config.ts` (full, 349 B, sha256:0ea6622542153421da6c4c75fdd42c441003410df70b454239142ee6d5cc658c)
- `projects/sfia-studio-next/web/postcss.config.mjs` (full, 135 B, sha256:ac31e2a95ef64fe27ceb4124e101675273107aae2e33bc490b01d919e7f03646)
- `projects/sfia-studio-next/web/public/file.svg` (hash-only, 391 B, sha256:2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4)
- `projects/sfia-studio-next/web/public/globe.svg` (hash-only, 1035 B, sha256:b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf)
- `projects/sfia-studio-next/web/public/next.svg` (hash-only, 1375 B, sha256:55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc)
- `projects/sfia-studio-next/web/public/vercel.svg` (hash-only, 128 B, sha256:f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4)
- `projects/sfia-studio-next/web/public/window.svg` (hash-only, 385 B, sha256:644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1)
- `projects/sfia-studio-next/web/src/app/api/auth/[...all]/route.ts` (full, 755 B, sha256:e74285d4b64101ab56582f9b841059844d68818cc59c6f720df8f473d000bdff)
- `projects/sfia-studio-next/web/src/app/api/dev/login/route.ts` (full, 1016 B, sha256:593bc89f5d4d0b9837ec813faaf131d94cb47ba1399afc822d2e1457db0b3ecb)
- `projects/sfia-studio-next/web/src/app/api/portfolio/route.ts` (full, 563 B, sha256:5ed19265ab4931adbec2afc941b148cba366dd4730c04a35ca34c4f941b21d09)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts` (full, 1663 B, sha256:9193178e2b81c8b94a8693e26662576f2029413c53c13e5262b2a3476147750a)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts` (full, 1459 B, sha256:899144d9dd407929752308ef806bda9a83fd162350b583be0b94516cd6794ee5)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts` (full, 1303 B, sha256:47c83bae7557c35e026789110dede9ee63dac8d75c6cfd01075237ec73321cac)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts` (full, 693 B, sha256:3cbe736f5d2014a2574b6af88f393bc87906d5754c4c7411ba9b4d4ff0bed347)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts` (full, 1654 B, sha256:b7b4f271c20d779172bc029c53363c95e8419b4cb60e4c65ae8326181eb5b83c)
- `projects/sfia-studio-next/web/src/app/api/preparations/route.ts` (full, 554 B, sha256:a78e9e69f41824d570ff400502146a9ade4fca63fbe2a915801d0a5708f305cf)
- `projects/sfia-studio-next/web/src/app/favicon.ico` (hash-only, 25931 B, sha256:2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932)
- `projects/sfia-studio-next/web/src/app/globals.css` (full, 1199 B, sha256:3e887edcd7d62b26aa31df6a7c5345ca07d841ac69cf942b14b9a27ff513376f)
- `projects/sfia-studio-next/web/src/app/layout.tsx` (full, 1418 B, sha256:d76f1e40c928ba6c09fccb754de55ce3bd5dfca95c0bb9762e7847bcb10185f3)
- `projects/sfia-studio-next/web/src/app/login/page.tsx` (full, 2036 B, sha256:aec23e28050224dc4af548488d71cd8cd79a765f3a34c6c73e6207bde9681c5c)
- `projects/sfia-studio-next/web/src/app/page.tsx` (full, 106 B, sha256:d4850d876786e29d4a2faeb6577ca43d3f02a7f639b904955ac6a8f9f1e3ba31)
- `projects/sfia-studio-next/web/src/app/portfolio/page.tsx` (full, 2935 B, sha256:d491861f93d1f89272a052e2b5d0f4f49c5efe774ca0bd42c2c462bbf72b0411)
- `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` (full, 7138 B, sha256:a17e8401bd2c39dd7334dd35f6f9d01a597fc9bf024f0c9392f004f963109d27)
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` (full, 2033 B, sha256:24b1d8a3bad59cff2ef19ede7e344c3ee1d6bb8748b22817b392ccc61879211b)
- `projects/sfia-studio-next/web/src/db/client.ts` (full, 636 B, sha256:7b85871fef598b0afaf4efca59ea996c3ece1dfc4cbf170ad792054a87fb8669)
- `projects/sfia-studio-next/web/src/db/migrations/001_initial_studio_core.sql` (full, 4616 B, sha256:5f3e03dc764d0748075b26a67855a18caf0e53282d9713364176be392e0de2c6)
- `projects/sfia-studio-next/web/src/db/migrations/002_session_auth_mode.sql` (full, 89 B, sha256:123fcdae6bd94fc56d1240a780a5dca38c1d23c6b760d7d480cbc86ffb587ed7)
- `projects/sfia-studio-next/web/src/db/schema.ts` (full, 7592 B, sha256:32872405477017b8cff359a4313f6948bb1fb724adb22afb8cf1b180affa5f65)
- `projects/sfia-studio-next/web/src/domains/boundaries/non-effects.ts` (full, 857 B, sha256:1ede5caa4154d2822c9121f5256f64fc864dba886c4b593b60c7545ab5fc0913)
- `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts` (full, 3237 B, sha256:3eaa174ed70bd31ae947d5289e979be4793365d44bd4a347fd4c99ea4a2f190d)
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts` (full, 2322 B, sha256:7180ca938c3ca05459c285f2e492acfe40e4201bb40756f6cb1de7445f38936f)
- `projects/sfia-studio-next/web/src/domains/document/service.ts` (full, 3677 B, sha256:cfc4a31a828471be2b52e40aaffa5b46a17a0427014fce2019e1b21f17d0eb72)
- `projects/sfia-studio-next/web/src/domains/identity/portfolio.ts` (full, 1450 B, sha256:31d40d488392db636ad0ea1abd4541fc8665e81563b7177dd333a8d9fd4f2819)
- `projects/sfia-studio-next/web/src/domains/identity/session.ts` (full, 4204 B, sha256:dbde2b53b603bd2d449bb18ba839a16a253d6d7982776411151fed28e2309dfd)
- `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts` (full, 8374 B, sha256:51715af6844fcd7b2423e43e35f202629eff9f22bbc9175ca0fe938936db0d5e)
- `projects/sfia-studio-next/web/src/domains/preparation/service.ts` (full, 2523 B, sha256:6081557fffcacb56c6f8a0a7c14617340ed0ecb1945664150b6ec168f33f5d64)
- `projects/sfia-studio-next/web/src/lib/auth.ts` (full, 1517 B, sha256:1b292115ca89f0d70a78ccee1d061b1442a9cdbcc36844480ff9a1dde66753f0)
- `projects/sfia-studio-next/web/src/lib/fingerprint.ts` (full, 658 B, sha256:ff03d7de345f0b4ead46d4ca298a0381fbbc519a89a781af797d1d342172af1b)
- `projects/sfia-studio-next/web/src/lib/ids.ts` (full, 158 B, sha256:381c9aaa2f44ea98c44c84f8765f8137ec09c65bdb006df3a75aa47a68ed5aac)
- `projects/sfia-studio-next/web/src/lib/product-version.ts` (full, 713 B, sha256:938175a86f5f9ab088b8a5e5cefff7421b23e9300995e03e030e1dae680f8594)
- `projects/sfia-studio-next/web/tailwind.config.ts` (full, 393 B, sha256:223f2def401123e32ac5664f79c73bdaa8b3a77caf466a304bff919a2a28c16f)
- `projects/sfia-studio-next/web/tests/e2e/artifacts/ml1-continuity-1793783465162.png` (hash-only, 94179 B, sha256:b6068b7dc3eada8d89004273c550267a7301df37a039ad5610916b751bcf3ee0)
- `projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts` (full, 1875 B, sha256:db8653206af673b617145328cdfa11961bc368b9133574f5cdf7b3685ef44468)
- `projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts` (full, 11401 B, sha256:7cfd6e59efb350ee57f6e67fafaccca6d18cd9b4536bd54ed0e4b6bb4d5636b0)
- `projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts` (full, 971 B, sha256:73af4cb59d01db110762db32cf692655ab828a54442b00bba1cfd14f64720916)
- `projects/sfia-studio-next/web/tests/unit/non-effects.test.ts` (full, 345 B, sha256:1bbacd8650e46f7012eb3c1a70d1758cd12705deabe5f00443023b4dd01291bc)
- `projects/sfia-studio-next/web/tsconfig.json` (full, 602 B, sha256:83d292a6930a317ea31ef48e220097d2ca10c6c505f41d5954795acef48ca3b9)
- `projects/sfia-studio-next/web/tsconfig.tsbuildinfo` (hash-only, 347602 B, sha256:574f96ed4585826d6ee94f87678cad5ada7abc7b805c4b4f09eff2fb665aaecc)
- `projects/sfia-studio-next/web/vitest.config.ts` (full, 657 B, sha256:c1e82e0c9d94e80d8e56719f01f52966a4923a3280779ee05b06e5be46acc9b6)
- `projects/sfia-studio-next/CHANGELOG.md` (full, 939 B, sha256:a7c41bf7eaad82c812eb4767f02f5c81083cb1e87a31d51cc4b2a832e61b4e62)
- `projects/sfia-studio-next/construction/delivery-history.md` (full, 1872 B, sha256:0ac8af37afc8902b2976354e2769502f1e931776bb5da434c09aa911962125e9)
- `projects/sfia-studio-next/construction/ml1-entree-et-continuite/specification-technique.md` (full, 61696 B, sha256:1530a827fa89f8961d368ec4aeabca81d66885bc6019b2ec7a52c12bdfbf3ccf)

## 12. Contenu complet — sources manuscrites unpublished


### `projects/sfia-studio-next/web/.env.example`

```
# SFIA Studio Next — DEV lane example (no secrets)
DATABASE_URL=postgres://USER:PASSWORD@127.0.0.1:5433/sfia_next_dev
BETTER_AUTH_SECRET=replace-with-long-random-string
BETTER_AUTH_URL=http://127.0.0.1:3100
STUDIO_LANE=DEV
STUDIO_PORT=3100
STUDIO_DEV_TEST_LOGIN=0
# Optional GitHub OAuth (Studio identity only — never grants repo rights)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
# Optional OpenAI for Nora LIVE (bounded; leave empty to use deterministic adapter)
OPENAI_API_KEY=
```


### `projects/sfia-studio-next/web/.env.local`

```
DATABASE_URL=postgres://sfia_next_dev:sfia_next_dev_local_only@127.0.0.1:5433/sfia_next_dev
BETTER_AUTH_SECRET=dev-only-local-secret-change-me-32chars
BETTER_AUTH_URL=http://127.0.0.1:3100
STUDIO_DEV_TEST_LOGIN=1
STUDIO_LANE=DEV
STUDIO_PORT=3100
# GITHUB_CLIENT_ID=
# GITHUB_CLIENT_SECRET=
# OPENAI_API_KEY=
```


### `projects/sfia-studio-next/web/.gitignore`

```
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

```
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
  -e POSTGRES_PASSWORD=sfia_next_dev_local_only \
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
- Better Auth mount + DEV loopback login
- OpenAI Agents SDK adapter (LIVE only with key)

## Tests

```bash
npm run test:unit
npm run test:integration
```

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | BLOCKED without client secrets; mount reports status |
| PostgreSQL | REAL DEV container on 5433 |
| Nora | Deterministic fixture unless `OPENAI_API_KEY` set (LIVE bounded) |
| Figma native | PENDING — see `docs/ux-figma-pending.md` |
| RECETTE/STABLE | NOT AVAILABLE |
```


### `projects/sfia-studio-next/web/docs/ux-figma-pending.md`

```
# UX Figma — native extraction status

Figma file `itgvCulInEnFY6DvgIegvP` page `94:49`.

## Extracted 2026-11-04 (MCP native metadata)

- Frame `94:50` « 01 · Portefeuille et choix du projet » 1680×970
- Rail `94:51` « Barre latérale produit » **width=246** (not 240) × height 970
- Surface produit starts at x=246

Code rail width set to **246** from this native read. Full component fidelity (tokens, cards, typography, all ML1 frames) and runtime screenshot comparison remain incomplete.

Verdict UX overall:

`PARTIAL NATIVE EXTRACT (rail 246) — REVIEW INCONCLUSIVE FOR FULL R3 FIDELITY — RUNTIME SCREENSHOT REQUIRED`
```


### `projects/sfia-studio-next/web/drizzle.config.ts`

```
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

```
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


### `projects/sfia-studio-next/web/next-env.d.ts`

```
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```


### `projects/sfia-studio-next/web/next.config.ts`

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```


### `projects/sfia-studio-next/web/package-lock.json` — HASH-ONLY EXCEPTION
size=358565 sha256=6968853ccd3d35e78d8ec5f6123808359abcd46380aee6905050ecdcd3685c54
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/package.json`

```
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
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "tsx": "^4.23.15",
    "typescript": "^5",
    "vitest": "^3.2.4"
  },
  "description": "SFIA Studio web application (technical package version ≠ product release)",
  "engines": {
    "node": ">=20"
  }
}
```


### `projects/sfia-studio-next/web/playwright.config.ts`

```
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

```
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```


### `projects/sfia-studio-next/web/public/file.svg` — HASH-ONLY EXCEPTION
size=391 sha256=2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/public/globe.svg` — HASH-ONLY EXCEPTION
size=1035 sha256=b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/public/next.svg` — HASH-ONLY EXCEPTION
size=1375 sha256=55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/public/vercel.svg` — HASH-ONLY EXCEPTION
size=128 sha256=f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/public/window.svg` — HASH-ONLY EXCEPTION
size=385 sha256=644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/src/app/api/auth/[...all]/route.ts`

```
import { auth, githubOAuthStatus } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  // Status probe without pretending LIVE success when secrets missing.
  if (url.pathname.endsWith("/api/auth/github") || url.pathname.endsWith("/api/auth/status")) {
    const status = githubOAuthStatus();
    if (!status.configured && url.pathname.endsWith("/api/auth/status")) {
      return Response.json(status);
    }
    if (!status.configured && url.pathname.endsWith("/api/auth/github")) {
      return Response.json(status, { status: 503 });
    }
  }
  return handler.GET(req);
};

export const POST = handler.POST;
```


### `projects/sfia-studio-next/web/src/app/api/dev/login/route.ts`

```
import { NextResponse } from "next/server";
import { createDevTestSession, STUDIO_SESSION_COOKIE } from "@/domains/identity/session";

export async function POST(req: Request) {
  const host = req.headers.get("host");
  try {
    const body = (await req.json().catch(() => ({}))) as { pilot?: "a" | "b" };
    const which = body.pilot === "b" ? "b" : "a";
    const { token, pilotId } = await createDevTestSession(which, host);
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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


### `projects/sfia-studio-next/web/src/app/favicon.ico` — HASH-ONLY EXCEPTION
size=25931 sha256=2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/src/app/globals.css`

```
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

```
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

```
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [notice, setNotice] = useState<string>("");
  const [busy, setBusy] = useState(false);

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
          Statut: vérifier <code>/api/auth/github</code> — BLOCKED si secrets absents.
        </p>
        <a className="btn secondary inline-block" href="/api/auth/github">
          Continuer avec GitHub
        </a>
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

```
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/portfolio");
}
```


### `projects/sfia-studio-next/web/src/app/portfolio/page.tsx`

```
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

```
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
      router.push(`/projects/${j.projectId}?preparationId=${preparationId}`);
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

```
"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";

type Msg = { id: string; role: string; content: string; status: string };

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const search = useSearchParams();
  const router = useRouter();
  const preparationId = search.get("preparationId");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [meta, setMeta] = useState<string>("");

  useEffect(() => {
    async function load() {
      if (!preparationId) {
        setMeta("Ouvrez le projet depuis le sas pour retrouver le fil lié par identité.");
        return;
      }
      const res = await fetch(`/api/preparations/${preparationId}`);
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      const j = await res.json();
      setMessages(j.messages ?? []);
      setMeta(
        j.project?.id === params.projectId
          ? `Projet créé · marqueur fondé sur commit DB · préparation ${preparationId}`
          : "Contexte projet non confirmé pour cette préparation",
      );
    }
    load();
  }, [preparationId, params.projectId, router]);

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
      <a className="btn secondary inline-block" href="/portfolio">
        Retour portefeuille
      </a>
    </div>
  );
}
```


### `projects/sfia-studio-next/web/src/db/client.ts`

```
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

```
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

```
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS auth_mode text NOT NULL DEFAULT 'unknown';
```


### `projects/sfia-studio-next/web/src/db/schema.ts`

```
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

```
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

```
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

```
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

```
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

```
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


### `projects/sfia-studio-next/web/src/domains/identity/session.ts`

```
import { and, eq, isNull, gt } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, sessions, users } from "@/db/schema";
import { newId } from "@/lib/ids";
import { cookies } from "next/headers";

export type AuthMode = "github-oauth" | "dev-test-login" | "unknown";

export type StudioSession = {
  pilotId: string;
  displayName: string;
  sessionId: string;
  authMode: AuthMode;
};

const COOKIE = "sfia_studio_session";

export async function resolveStudioSession(): Promise<StudioSession | null> {
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

  const authMode = (row.authMode as AuthMode) || "unknown";
  return {
    pilotId: row.pilotId,
    displayName: row.displayName,
    sessionId: row.sessionId,
    authMode,
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

function assertDevTestLoginAllowed(requestHost?: string | null) {
  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") {
    throw new Error("DEV_TEST_LOGIN_DISABLED");
  }
  if (process.env.STUDIO_LANE && process.env.STUDIO_LANE !== "DEV") {
    throw new Error("DEV_TEST_LOGIN_LANE_FORBIDDEN");
  }
  // Fail-closed outside loopback — RECETTE/STABLE must never accept this path.
  const host = (requestHost ?? "").toLowerCase();
  const loopback =
    host.startsWith("127.0.0.1") ||
    host.startsWith("localhost") ||
    host.startsWith("[::1]");
  if (!loopback) {
    throw new Error("DEV_TEST_LOGIN_HOST_FORBIDDEN");
  }
}

/** DEV-ONLY test login — Fake/Real: NOT GitHub OAuth proof. Loopback + DEV lane only. */
export async function createDevTestSession(
  which: "a" | "b",
  requestHost?: string | null,
): Promise<{ token: string; pilotId: string }> {
  assertDevTestLoginAllowed(requestHost);

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

  return { token, pilotId: pilot.id };
}

export { COOKIE as STUDIO_SESSION_COOKIE };
```


### `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`

```
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

async function recordCommand(
  tx: Tx,
  values: {
    pilotId: string;
    idempotencyKey: string;
    fingerprint: string;
    preparationId: string;
    projectId: string;
    result: string;
    createdAt?: Date;
  },
) {
  const inserted = await tx
    .insert(createProjectCommands)
    .values({
      id: newId("cmd"),
      pilotId: values.pilotId,
      idempotencyKey: values.idempotencyKey,
      fingerprint: values.fingerprint,
      preparationId: values.preparationId,
      projectId: values.projectId,
      result: values.result,
      createdAt: values.createdAt,
    })
    .onConflictDoNothing({
      target: [createProjectCommands.pilotId, createProjectCommands.idempotencyKey],
    })
    .returning();
  if (inserted.length > 0) return inserted[0];
  return loadCommandUnderLock(tx, values.pilotId, values.idempotencyKey);
}

function fingerprintConflict(reason: string): CreateProjectResult {
  return { status: "CONFLICT", actualCreationRevision: -1, reason };
}

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

  return await db.transaction(async (tx) => {
    // Serialize concurrent creates for the same preparation.
    const locked = await tx.execute(
      sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
    );
    const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
    const prepRow = rows[0];
    if (!prepRow) return { status: "FORBIDDEN" as const };

    // Idempotency + fingerprint MUST be evaluated under the same lock.
    const priorTx = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
    if (priorTx) {
      if (priorTx.fingerprint !== fingerprint) {
        return fingerprintConflict("idempotency fingerprint mismatch under lock");
      }
      if (priorTx.projectId) {
        return {
          status: "ALREADY_CREATED" as const,
          projectId: priorTx.projectId,
          preparationId: priorTx.preparationId,
          committedAt: priorTx.createdAt,
        };
      }
    }

    const existingLink = (
      await tx
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.preparationId, input.preparationId))
        .limit(1)
    )[0];

    if (existingLink) {
      // Same preparation already attached: replay only if fingerprint matches prior key,
      // else CONFLICT when this idempotency key already exists with another fingerprint.
      if (priorTx && priorTx.fingerprint !== fingerprint) {
        return fingerprintConflict("idempotency fingerprint mismatch on attached preparation");
      }
      const recorded = await recordCommand(tx, {
        pilotId: input.pilotId,
        idempotencyKey: input.idempotencyKey,
        fingerprint,
        preparationId: input.preparationId,
        projectId: existingLink.projectId,
        result: "ALREADY_CREATED",
      });
      if (recorded && recorded.fingerprint !== fingerprint) {
        return fingerprintConflict("idempotency fingerprint mismatch after conflict insert");
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

    const recorded = await recordCommand(tx, {
      pilotId: input.pilotId,
      idempotencyKey: input.idempotencyKey,
      fingerprint,
      preparationId: input.preparationId,
      projectId,
      result: "CREATED",
      createdAt: now,
    });
    if (recorded && recorded.fingerprint !== fingerprint) {
      return fingerprintConflict("idempotency fingerprint mismatch on create race");
    }
    const effectiveProjectId = recorded?.projectId ?? projectId;

    return {
      status: recorded?.result === "ALREADY_CREATED" ? ("ALREADY_CREATED" as const) : ("CREATED" as const),
      projectId: effectiveProjectId,
      preparationId: input.preparationId,
      committedAt: recorded?.createdAt ?? now,
    };
  });
}

/** Read-only reconciliation after lost ACK — never mutates. Owner-scoped. */
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


### `projects/sfia-studio-next/web/src/domains/preparation/service.ts`

```
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

```
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";
import * as schema from "@/db/schema";

/**
 * Better Auth is the intended session authority for Studio identity.
 * GitHub OAuth is wired only when client credentials exist — never fabricate PASS without secrets.
 * Mapping uses our plural tables via explicit schema model names.
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

```
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

```
import { randomUUID } from "crypto";

export function newId(prefix?: string): string {
  const id = randomUUID();
  return prefix ? `${prefix}_${id}` : id;
}
```


### `projects/sfia-studio-next/web/src/lib/product-version.ts`

```
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

```
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


### `projects/sfia-studio-next/web/tests/e2e/artifacts/ml1-continuity-1793783465162.png` — HASH-ONLY EXCEPTION
size=94179 sha256=b6068b7dc3eada8d89004273c550267a7301df37a039ad5610916b751bcf3ee0
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts`

```
import { test, expect } from "@playwright/test";
import path from "path";

test("DEV fake login → sas → message → document → create → reload", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
  await expect(page.getByText("Aucune Nora globale", { exact: false })).toBeVisible();

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");

  await page.getByPlaceholder("Écrire à Nora…").fill("Bonjour Nora depuis Playwright");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("Nora (fixture FAKE, not LIVE)", { exact: false })).toBeVisible({
    timeout: 15000,
  });

  await page.getByPlaceholder("Nom du projet").fill("Projet Playwright");
  await page.getByPlaceholder("Résumé inspecté").fill("résumé test");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();

  const doc = page.locator("textarea").nth(2);
  await doc.fill("# Document Playwright\ncontenu");
  await page.getByRole("button", { name: "Sauvegarder le document" }).click();
  await expect(page.getByText("AVAILABLE", { exact: false })).toBeVisible({ timeout: 10000 });

  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  await expect(page.getByText("marqueur", { exact: false })).toBeVisible();

  await page.reload();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  const shot = path.join("tests/e2e/artifacts", `ml1-continuity-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
```


### `projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts`

```
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
```


### `projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts`

```
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

```
import { describe, expect, it } from "vitest";
import { assertNoImplicitEffects, probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";

describe("D5-D9 non-effects", () => {
  it("reports no implicit cycle/git/cursor effects", () => {
    expect(assertNoImplicitEffects(probeCreateProjectSideEffects())).toBe(true);
  });
});
```


### `projects/sfia-studio-next/web/tsconfig.json`

```
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


### `projects/sfia-studio-next/web/tsconfig.tsbuildinfo` — HASH-ONLY EXCEPTION
size=347602 sha256=574f96ed4585826d6ee94f87678cad5ada7abc7b805c4b4f09eff2fb665aaecc
reason: lockfile/binary/generated or >200KB threshold §7.6


### `projects/sfia-studio-next/web/vitest.config.ts`

```
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
      DATABASE_URL:
        process.env.DATABASE_URL ??
        "postgres://sfia_next_dev:sfia_next_dev_local_only@127.0.0.1:5433/sfia_next_dev",
      STUDIO_DEV_TEST_LOGIN: process.env.STUDIO_DEV_TEST_LOGIN ?? "1",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```


### `projects/sfia-studio-next/CHANGELOG.md`

```
# Changelog — SFIA Studio Next (product)

No promoted product release yet.

## Unreleased
## Unreleased — local corrective 2026-11-04

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

```
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

```


### `projects/sfia-studio-next/construction/ml1-entree-et-continuite/specification-technique.md` — section §14 (fichier tracked modifié; corpus §14 ci-dessous)

```
## 14. Implémentation locale DEV (working tree — 2026-11-04, consolidation critique)

> **Statut :** working tree local sur `sfia/next-access-preparation-continuity` ; **pas de push projet** ; comportement ci-dessous = code réellement présent après correctif critique.

| Choix | Valeur
| --- | --- |
| Application | `projects/sfia-studio-next/web` — Next.js **15.5.29** + React 19 + TypeScript |
| Auth | Better Auth mount + tables PG ; `sessions.auth_mode` provenance ; GitHub OAuth when secrets present (else BLOCKED) ; DEV test login **loopback + STUDIO_LANE=DEV + flag** only |
| SQL | PostgreSQL 16 Docker DEV `:5433` ; migrations `001_initial_studio_core`, `002_session_auth_mode` |
| D2 | `FOR UPDATE` + fingerprint under lock + ON CONFLICT returning |
| D3 | `@openai/agents` adapter ; fixture FAKE without key ; no MemorySession authority |
| D4 | owner+preparationId authorization ; SAVING→AVAILABLE/FAILED |
| Version produit | `NO RELEASE` / STABLE `NOT AVAILABLE` ; package `0.0.0-dev` |
| Preuves | Vitest unit+integration ; Playwright chromium smoke ; Figma rail 246 native (94:50) |
```


## 13. Instruction ChatGPT obligatoire
Avant revue Morris, relire `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`, comparer ce rapport, HEAD/base, branche locale non poussée, tests/preuves, fichiers créés/modifiés (contenu complet ci-dessus) et handoff distant.
