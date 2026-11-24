# As-built — ML5 operational RECETTE parity (2026-11-24)

**Class:** NO RELEASE · Cycle 8 Delivery / INC Critical  
**Branch:** `sfia/next-ml5-integrated-delivery-20261123`  
**Policy version:** `ml5-cog-policy-v3-recette-operational-provisional`

## Intent

Make RECETTE represent the target ML5 product for Morris UAT:

1. Nora nominal cognition = `OPERATIONAL_PROVISIONAL` (explicit) on DEV **and** RECETTE.
2. Indispensable ML5 capabilities regularized (WEB catalog feed, Cursor LIVE config).
3. Cursor SDK LIVE available in RECETTE under existing workspace confinement + D6 authority.

## Code owners touched

| Area | Path | Change |
| --- | --- | --- |
| D3 policy | `web/src/domains/conversation/cognitive-policy.ts` | Allow `OPERATIONAL_PROVISIONAL` on `DEV\|RECETTE`; refuse `STABLE/PROD/UNKNOWN`; bump policy version |
| D3 adapter | `web/src/domains/conversation/nora-adapter.ts` | Boundary envelope uses `COGNITIVE_POLICY_VERSION` |
| D3 WEB | `web/src/domains/conversation/public-web-registry.ts` | Default public topic catalog on RECETTE (same templates as DEV) |
| D7 confinement | `web/src/domains/execution/workspace-resolver.ts` | Refuse Cursor roots inside product/method trees |
| Probe | `web/scripts/probe-cursor-live-confinement.mjs` | Bounded LIVE key + confinement check (no dispatch) |

## Budgets (unchanged ceilings)

- Work caps default: `SFIA_COGNITIVE_MAX_SEGMENTS=24`, `SFIA_COGNITIVE_MAX_TOKENS=200000` (`cognitive-work.ts`).
- Profile budgets: `OPERATIONAL_BUDGETS_PROVISIONAL` (DEV reference, **not** production-validated).
- `TEST_BOUNDARY` remains for explicit stress tests only.
- `OPERATIONAL_VALIDATED` still refused.

## RECETTE configuration (non-secret)

| Variable | Target |
| --- | --- |
| `STUDIO_LANE` | `RECETTE` |
| `SFIA_COG_PROFILE_TYPE` | `OPERATIONAL_PROVISIONAL` |
| `SFIA_COGNITIVE_MAX_SEGMENTS` | `24` |
| `SFIA_COGNITIVE_MAX_TOKENS` | `200000` |
| `SFIA_CURSOR_EFFECT_MODE` | `LIVE` |
| `SFIA_CURSOR_WORKSPACE_ROOT` | `/tmp/sfia-ml5-recette-cursor-live-ws` (outside product trees) |
| `SFIA_CURSOR_MODEL_ID` | `composer-2.5` |
| `STUDIO_DEV_AUTO_SESSION` | unset / forbidden |
| `STUDIO_DEV_TEST_LOGIN` | `0` |

Cursor API key: FileCredentialStore or dedicated `CURSOR_API_KEY` — never committed.

## Explicit non-goals

- No new cognitive regime; no budget raise; no D8 OS sandbox; no product push/PR/STABLE.
- No exhaustive UAT-01…10 closure; UAT-01/09 activity gaps remain open.
- Dispatch of Cursor remains subject to D6 HumanDecision — GO engineering ≠ mandate.

## Verdict target

`RECETTE OPERATIONAL PARITY — READY FOR MORRIS UAT` when served SHA/build match this candidate and LIVE/confinement probes pass.
