# Changelog — SFIA Studio Next (product)

No promoted product release yet.

## Unreleased
## Unreleased — ML1 targeted pre-push corrections 2026-11-04

- D1: exact loopback Host/XFF parsing (reject `localhost.attacker.example` and multi-value XFF); DEV adapter consume fail-closed when lane ≠ DEV or test login disabled.
- DB: `npm run db:migrate` applies `001` then `002` with `ON_ERROR_STOP`; fresh isolated container migration test.
- E2E: owned Playwright server `:3101` + DB `sfia_next_e2e`; `STUDIO_E2E=1` forces Nora fixture; LIVE mode is FAIL in smoke.
- STABLE/RC still NOT AVAILABLE / NO RELEASE.

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
