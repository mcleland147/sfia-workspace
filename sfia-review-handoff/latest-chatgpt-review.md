# SFIA Review Pack FULL — ML1 Project Branch Push + PR Open

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 16:05:19 CET |
| GO Morris | Push branche projet + ouverture PR (2026-11-04) — **AUCUN MERGE** |
| Cycle | 8 / INC / CRITICAL |
| Product | `projects/sfia-studio-next/` |
| Branch | `sfia/next-access-preparation-continuity` |
| Base main | `61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Tip C3 published | `0db58be8240a00593092048ee74299f19374f489` |
| PR | [#649](https://github.com/mcleland147/sfia-workspace/pull/649) |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE / RC NOT ASSIGNED |
| Lane | DEV only (ENV-01) |

## Verdict (Cursor)

`PROJECT BRANCH PUBLISHED + PR OPENED — READY FOR CHATGPT GIT REVIEW`

## Instruction ChatGPT (mandatory)

Relire PR [#649](https://github.com/mcleland147/sfia-workspace/pull/649) et ses commits Git directement, vérifier les contrôles observés à l'instant, le handoff distant et les preuves avant tout GO Morris merge/RECETTE.

**Règle :** `PUSH + OPEN PR ≠ CI PASS ≠ MERGE ≠ RECETTE ≠ STABLE ≠ ADOPTED`

## Git Review Index

| Ref | SHA / value |
| --- | --- |
| origin/main | 61a6765a4e8d92760aab595b61b66aa2425906c6 |
| C1 | 0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2 |
| C2 | 8767185234bab9b2cad7800771a6bfc0ae1d19e4 |
| C3 / remote tip / PR head | 0db58be8240a00593092048ee74299f19374f489 |
| Remote branch | `origin/sfia/next-access-preparation-continuity` = 0db58be8240a00593092048ee74299f19374f489 (bit-exact) |
| Prior handoff | 1de86b304fb1e0a3250a9d41bb312e1d6f8e6e78 |

### Pre-push local state
- Branch exact, HEAD C3 exact, ancestry C1→C2→C3, merge-base = main
- Remote branch **ABSENT** before push → created by this cycle
- Dirty residual preserved (not published): `.tmp-sfia-review/chatgpt-review.md`, `web/public/*.svg` starter
- Scope: 67 paths, all under `projects/sfia-studio-next/`
- Secret heuristics on committed blobs: no private key / ghp_ / long sk- hits
- No `.env*` under `projects/sfia-studio-next/web/` in Git (local `.env.example` ignored by `.env*` — documented debt)

### Post-push / PR
- `git push -u origin sfia/next-access-preparation-continuity` (no force) OK
- ls-remote / fetch: remote tip = C3
- PR #649 OPEN, not draft, not merged; base `main`; headRefOid = C3
- Three commits present on PR
- statusCheckRollup at report time: **Detect SFIA Studio changes** = `QUEUED` / PENDING (workflow SFIA Studio CI) — **not** claimed PASS
- mergeStateStatus observed: `BLOCKED` (expected; no merge attempted)
- Code changes this cycle: **none** (publish-only)

## Pre-push re-validation at C3 (this cycle)

| Check | Class | Result |
| --- | --- | --- |
| test:unit | UNIT | 22 PASS |
| test:integration | POSTGRES ISOLATED (+ DEV) | 26 PASS |
| test:e2e | BROWSER FAKE | 1 PASS |
| tsc / build / lint | UNIT | PASS |
| Test 1 preserved | POSTGRES DEV | count=1 |
| Nora LIVE / OAuth interactive | LIVE USER PREVIOUS / NOT RUN | not re-run |
| CI on PR | PENDING | QUEUED at observation time |

## PR body factual summary (opened)

Title: `feat(next): ML1 access, durable preparation, Nora and project continuity`

Covers: ML1 vertical D1–D4, guardrails C2/C3, proofs at C3, open reserves A05/A13/A15/A16/DATA-01, Markdown KNOWN GAP, Figma INCONCLUSIVE, `.env.example` debt, NO RELEASE, gates for merge/RECETTE still separate.

## Diff inventory (main...C3)

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
A	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/scripts/e2e-preflight.ts
A	projects/sfia-studio-next/web/scripts/e2e-web-server.sh
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
A	projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
A	projects/sfia-studio-next/web/src/lib/fingerprint.ts
A	projects/sfia-studio-next/web/src/lib/ids.ts
A	projects/sfia-studio-next/web/src/lib/product-version.ts
A	projects/sfia-studio-next/web/tailwind.config.ts
A	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
A	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
A	projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
A	projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts
A	projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts
A	projects/sfia-studio-next/web/tests/unit/non-effects.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
A	projects/sfia-studio-next/web/tsconfig.json
A	projects/sfia-studio-next/web/vitest.config.ts
```

## Diff stat
```
 projects/sfia-studio-next/web/src/db/schema.ts     |   215 +
 .../web/src/domains/boundaries/non-effects.ts      |    30 +
 .../web/src/domains/conversation/nora-adapter.ts   |   151 +
 .../web/src/domains/conversation/service.ts        |    76 +
 .../web/src/domains/document/service.ts            |   134 +
 .../web/src/domains/identity/portfolio.ts          |    41 +
 .../web/src/domains/identity/provision-pilot.ts    |   103 +
 .../web/src/domains/identity/session.ts            |   272 +
 .../web/src/domains/preparation/create-project.ts  |   290 +
 .../web/src/domains/preparation/project-context.ts |    53 +
 .../web/src/domains/preparation/service.ts         |    91 +
 projects/sfia-studio-next/web/src/lib/auth.ts      |    83 +
 .../sfia-studio-next/web/src/lib/e2e-pg-gate.ts    |   159 +
 .../sfia-studio-next/web/src/lib/fingerprint.ts    |    19 +
 projects/sfia-studio-next/web/src/lib/ids.ts       |     6 +
 .../web/src/lib/product-version.ts                 |    25 +
 projects/sfia-studio-next/web/tailwind.config.ts   |    18 +
 .../web/tests/e2e/ml1-smoke.spec.ts                |    79 +
 .../tests/integration/create-project.pg.test.ts    |   451 +
 .../tests/integration/identity-session.pg.test.ts  |   247 +
 .../tests/integration/migrations-fresh.pg.test.ts  |   151 +
 .../web/tests/unit/dev-login-host.test.ts          |   112 +
 .../web/tests/unit/e2e-pg-gate.test.ts             |    71 +
 .../web/tests/unit/fingerprint.test.ts             |    36 +
 .../web/tests/unit/next-dist-dir.test.ts           |    25 +
 .../web/tests/unit/non-effects.test.ts             |     8 +
 .../web/tests/unit/nora-e2e-fixture.test.ts        |   103 +
 projects/sfia-studio-next/web/tsconfig.json        |    27 +
 projects/sfia-studio-next/web/vitest.config.ts     |    24 +
 67 files changed, 15241 insertions(+), 7 deletions(-)
```

## Exclusions (not published)
- `.tmp-sfia-review/**`
- `projects/sfia-studio-next/web/public/*.svg` starter untracked
- `.env.local` / secrets
- `.next` / `.next-e2e` / test-results

## Reserves retained
- A05/A13/A15/A16, DATA-01; Nora cognition ML2+; Markdown rich KNOWN GAP; Figma INCONCLUSIVE
- RECETTE/STABLE NOT AVAILABLE; no ADOPTED; no ML1 closure
- CI PENDING at observation — do not invent PASS

## STOP / exceptions
None. NO MERGE / NO RELEASE / NO TAG / NO PROMOTION performed.


## Key published excerpts (C3 tip) — guardrails

### next.config.ts
```ts
import type { NextConfig } from "next";

/**
 * Operator DEV (:3100) keeps default `.next`.
 * Playwright E2E runner sets STUDIO_E2E=1 → dedicated `.next-e2e` cache.
 */
const isE2E = process.env.STUDIO_E2E === "1";

const nextConfig: NextConfig = {
  distDir: isE2E ? ".next-e2e" : ".next",
};

export default nextConfig;
```

### mustUseNoraFixture / boundary (nora-adapter excerpt)
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

function isDevLane(): boolean {
  return process.env.STUDIO_LANE === "DEV";
}

function fixtureFlagsRequested(): boolean {
  return process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1";
}

/**
 * True only when intentional fixture is allowed: DEV lane + E2E/force flag.
 * Outside DEV, flags never silently activate fixture (see generateNoraReply fail-closed).
 */
export function mustUseNoraFixture(): boolean {
  return isDevLane() && fixtureFlagsRequested();
}

/** Flags set while lane is not DEV — caller must fail closed (no FAKE COMPLETE, no LIVE). */
export function noraFixtureFlagsOutsideDev(): boolean {
  return fixtureFlagsRequested() && !isDevLane();
}

function boundaryFail(generationId: string, reason: string): NoraGenerateResult {
  return {
    generationId,
    // mode marks that no OpenAI network path was taken
    mode: "deterministic-fixture",
    status: "FAILED",
    streamingProvisional: false,
    content: `Nora boundary FAILED: ${reason}. Aucun appel OpenAI; aucune réponse FAKE utilisable.`,
  };
}

function fixtureReply(input: NoraGenerateInput, generationId: string): NoraGenerateResult {
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

/**
 * D3 adapter — OpenAI Agents SDK behind this boundary when LIVE key present.
 * NEVER activates MemorySession / ConversationsSession as authority.
 *
 * Boundaries:
 * - STUDIO_E2E / STUDIO_FORCE_NORA_FIXTURE → fixture COMPLETE only when STUDIO_LANE=DEV
 * - Same flags outside DEV → FAILED (no LIVE, no FAKE COMPLETE)
 * - Missing OPENAI_API_KEY in DEV → fixture COMPLETE (local DEV convenience)
 * - Missing OPENAI_API_KEY outside DEV → FAILED (never silent FAKE in RECETTE/STABLE)
 */
export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
  const generationId = newId("gen");

  if (noraFixtureFlagsOutsideDev()) {
    return boundaryFail(
      generationId,
      "NORA_FIXTURE_LANE_FORBIDDEN (STUDIO_E2E/FORCE requires STUDIO_LANE=DEV)",
    );
  }

  if (mustUseNoraFixture()) {
    return fixtureReply(input, generationId);
  }

  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    if (!isDevLane()) {
      return boundaryFail(
        generationId,
        "NORA_LIVE_KEY_REQUIRED outside DEV (no silent FAKE fallback)",
      );
    }
    return fixtureReply(input, generationId);
  }

  try {
    // Dynamic import keeps fixture/boundary paths free of SDK side-effects.
    const { Agent, run } = await import("@openai/agents");
    const agent = new Agent({
      name: "Nora",
      instructions: SYSTEM_INSTRUCTIONS,
      // No tools → no D5–D9 side effects via Nora.
    });

    const prompt =
      `${input.userText}\n\nContexte autorisé (borné):\n` +
      (input.contextSnippets.length ? input.contextSnippets.join("\n") : "(vide)");

    const result = await run(agent, prompt, {
      maxTurns: 1,
    });

    const content =
      typeof result.finalOutput === "string"
```

### e2e-pg-gate expected constants
```ts
/**
 * Fail-closed gate for Playwright E2E Postgres targeting.
 * Pure validation — no CREATE DATABASE, no migrations, no network to OpenAI.
 */

export const E2E_PG_EXPECTED = {
  hosts: ["127.0.0.1", "localhost"] as const,
  port: 5433,
  operatorDatabase: "sfia_next_dev",
  e2eDatabase: "sfia_next_e2e",
  container: "sfia-next-dev-pg",
} as const;

export type E2ePgGateErrorCode =
  | "E2E_PG_URL_MISSING"
  | "E2E_PG_URL_INVALID"
  | "E2E_PG_PROTOCOL_FORBIDDEN"
  | "E2E_PG_HOST_FORBIDDEN"
  | "E2E_PG_PORT_FORBIDDEN"
  | "E2E_PG_SOURCE_DB_FORBIDDEN"
  | "E2E_PG_TARGET_FORBIDDEN"
  | "E2E_PG_TARGET_EQ_SOURCE"
  | "E2E_PG_USERINFO_AMBIGUOUS"
  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN";

export class E2ePgGateError extends Error {
  readonly code: E2ePgGateErrorCode;
  constructor(code: E2ePgGateErrorCode, message: string) {
    super(message);
    this.code = code;
    this.name = "E2ePgGateError";
  }
}

function databaseNameFromPathname(pathname: string): string {
  const raw = pathname.replace(/^\//, "");
  const db = raw.split("/")[0] ?? "";
  return decodeURIComponent(db);
}

```

### package.json scripts + postcss override (excerpt)
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
    "db:migrate": "bash scripts/db-migrate.sh",
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
