# Cycle 9 — QA / validation — T7 Dedicated Activation QA — Review Pack (light)

Date/heure : 2026-08-08 17:28:37 CEST / 2026-08-08 15:28:37 UTC

## Objectif

Évaluer, par preuves reproductibles et tests négatifs sur main, si la T7 Foundation Default-OFF satisfait le gate QA préalable à une éventuelle décision Morris SHADOW distincte.

**CE CYCLE N'ACTIVE PAS SHADOW.**

## Cycle / profil / GO

- Cycle projet : **9 — QA / validation**
- Profil SFIA : **Standard**
- CKC : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` (candidate 0.1.0 — guidance only)
- GO Morris : **`ok go`**
- Contexte résolu : GO **DEDICATED ACTIVATION QA T7** après Cycle 14 Post-merge COMPLETE WITH RESERVES
- Couvre : inspection read-only · tests T7 · Postgres éphémère local · lignes mode TEST ≠ activation · probe temporaire · review pack · handoff L3
- Ne couvre PAS : SHADOW/MONITOR/E1 activation · Neon · prod · provider réel · execution-run réel · commit/PR projet · calibration · T3 sync Delivery

## Local Git Truth

- Repo : `mcleland147/sfia-workspace`
- Worktree : `…/worktrees/finops-t2-main`
- branch : `main`
- HEAD = origin/main = `503369b10506515e173b5b58986c731ba1b313b8`
- Delivery `75d9402…` ancêtre : YES
- Tracked/staged : none
- Untracked : `.tmp-sfia-review/` only

## Handoff entrant consulté

- Tip : `eda2d567c9108204b9eb55fa6861dacc91723e99`
- Blob : `72b9eee610cc37cb3361d21ddf581d3fdf8b66b3`
- Titre : Cycle 14 — Post-merge T7 Foundation Default-OFF — Final Cleanup
- Verdict entrant : POST-MERGE COMPLETE WITH RESERVES · Activation QA NOT EXECUTED · SHADOW NOT ACTIVATED

## Référentiel QA — SHADOW entry gate

Contrats A–J du prompt exécutés via suites T7 (+ probe rollback + T4/T6 ciblés). Mode rows in TEST DB ≠ product activation.

## Environnement DB (SANS secret)

- ENV_TYPE : docker ephemeral postgres
- HOST_CLASS : loopback `127.0.0.1`
- PORT : `55433`
- DB_NAME : `sfia_studio_finops_t1`
- IMAGE : `postgres:16-alpine`
- CONTAINER : `sfia-t7-activation-qa-pg` (dédié campagne)
- NEON : no
- SHARED_REMOTE : no
- LIFECYCLE : docker run → migrate up → tests → docker rm
- PROVENANCE : **SAFE_EPHEMERAL**
- DATABASE_URL : **not logged / not copied**

## Commandes exécutées (exactes)

```
docker run -d --name sfia-t7-activation-qa-pg -e POSTGRES_USER=sfia_ci -e POSTGRES_PASSWORD=[REDACTED] -e POSTGRES_DB=sfia_studio_finops_t1 -p 55433:5432 postgres:16-alpine
cd projects/sfia-studio/app && npm ci
npm run migrate:up
npx vitest run __tests__/oa/finops/t7.rollout.unit.test.ts
npx vitest run __tests__/oa/finops/postgres/t7.rollout.integration.test.ts
npx vitest run __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts
npx vitest run __tests__/oa/finops/postgres/t7.rollback-activation-qa.probe.test.ts
npx vitest run __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts
npx tsc --noEmit -p tsconfig.json   # after probe delete
rm -f __tests__/oa/finops/postgres/t7.rollback-activation-qa.probe.test.ts
docker rm -f sfia-t7-activation-qa-pg
```

## Résultats tests

| Suite | Tests | Exit / résultat | Skipped |
|-------|-------|-----------------|---------|
| migrate:up (T1→T7) | Migrations complete | SUCCESS | 0 |
| t7.rollout.unit.test.ts | **10 passed** | SUCCESS | 0 |
| t7.rollout.integration.test.ts | **12 passed** | SUCCESS | 0 |
| t7.foundation-runtime.integration.test.ts | **16 passed** | SUCCESS | 0 |
| t7.rollback-activation-qa.probe.test.ts (temp) | **1 passed** | SUCCESS | 0 |
| t4.projection-refresh + t6.runtime-composition | **12 passed** (8+4) | SUCCESS | 0 |
| typecheck after probe delete | clean (0 bytes stderr) | SUCCESS | — |

Aucun required test skipped faute de DATABASE_URL.

CI historique post-merge (contexte, non substitut) : run `31262204448` success @ `503369b…`.

## Matrice nominal / négatif / bords (extraits)

| Preuve | Statut | Source |
|--------|--------|--------|
| default-OFF absent config | PASS | T7-U01, T7-PG01, T7-R01 |
| fail-open OFF on store throw | PASS | T7-U02 |
| project isolation A≠B | PASS | T7-PG05 |
| invalid DB mode rejected | PASS | T7-PG06 |
| no global/default seed | PASS | T7-PG07 |
| SHADOW never BLOCK | PASS | T7-U04, T7-R13 |
| MONITOR configured_not_activated, no activation | PASS | T7-U05, T7-R14 |
| E1 configured_not_activated, no active consumer | PASS | T7-U06, T7-R15 |
| no provider invocation | PASS | T7-U09, T7-R09 |
| no execution-run wiring | PASS | T7-R10 |
| no T3 side effect | PASS | T7-R11 |
| no threshold/monetary policy required | PASS | T7-U10, T7-R12 |
| T2 success → T4 refresh | PASS | T7-R03/R04 + t4.projection-refresh |
| T4 refresh failure visible, T2 preserved | PASS | T7-R05 |
| T2 failure → no refresh | PASS | T7-R06 |
| T6 capture/flushAudit | PASS | T7-R02/R16 + t6.runtime-composition |
| rollback SHADOW→OFF→absent default_off | PASS | QA-RB01 probe |
| atomic UPSERT concurrency | PASS | T7-PG11/PG12 |

## Matrice qualitative (15 catégories)

| # | Catégorie | Statut | Note |
|---|-----------|--------|------|
| 1 | no false block | PASS | SHADOW/MONITOR never blockingAllowed true; OFF inert |
| 2 | API_USAGE never blocks | N/A | hors maturité gate SHADOW foundation (pas de consumer) |
| 3 | estimation / parametric never blocks | N/A | idem |
| 4 | projection freshness | PASS | T7-R03..R06 + t4 suite |
| 5 | rebuild failure fail-open | PASS | T7-R05 refresh failure visible, no BLOCK |
| 6 | technical failure ≠ BLOCK | PASS | fail-open OFF; T2 fail no refresh |
| 7 | decision provenance | PASS | resolution/mode/activationState explicites |
| 8 | audit completeness (T6 scope) | PASS | capture + flushAudit |
| 9 | T3 synchronization when activated | N/A / BEFORE MONITOR | R-T4-T3-SYNC-01 OPEN — not required for SHADOW gate |
| 10 | override behavior when T5 available | N/A / BEFORE E1 | |
| 11 | rollback OFF | PASS | QA-RB01 |
| 12 | provider-call behavior | PASS | no provider invocation |
| 13 | multi-currency isolation | PASS (partial) | T4 refresh projections currency path exercised |
| 14 | incident diagnostics | DEFERRED | métriques quantitatives hors campagne |
| 15 | human review evidence | N/A / MONITOR | |

Durée / volume / false-positive rate : **DEFERRED**.

## Preuve rollback OFF

QA-RB01 (probe temporaire) :
SHADOW upsert → resolve SHADOW (`blockingAllowed=false`, `configured_not_activated`) → OFF upsert → resolve OFF inert (`evaluateT4=false`) → DELETE row → `default_off`.

## Preuve no provider / no execution-run

T7-U09, T7-R09, T7-R10 ; composition n'expose pas `evaluateBeforeProvider` / `coordinateExecutionRun` / `composeExecutionRun`.

## Preuve SHADOW never BLOCK

T7-U04, T7-R13 : `blockingAllowed=false` ; activationState `configured_not_activated`.

## Preuve configured_not_activated

SHADOW / MONITOR / E1 rows TEST : `activationState=configured_not_activated` (U04–U06, R13–R15).

## Projection freshness

T7-R03..R06 + `t4.projection-refresh.integration.test.ts` (8 passed).
R-T4-PROJECTION-REFRESH-01 reste **CLOSED — wiring only**.

## T6 runtime composition

T7-R02/R16 + `t6.runtime-composition.integration.test.ts` (4 passed).
R-T6-RUNTIME-COMPOSITION-01 reste **CLOSED ON MAIN**.
T6-ext : **NOT AUTHORIZED**.

## Réserves (inchangées)

- R-T4-PROJECTION-REFRESH-01 : CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 : CLOSED ON MAIN
- R-T4-T3-SYNC-01 : OPEN — BEFORE MONITOR
- R-PR-T2-API-01 : OPEN MINOR
- T6-ext-T3T4 : NOT AUTHORIZED
- Product IAM : NOT_SELECTED
- Calibration réelle : REQUIRED BEFORE MONITOR — NOT EXECUTED

## Limites de campagne

- Pas de charge / metrics quantitatives
- Pas de provider réel / Neon / prod
- Pas d'activation produit
- Typecheck pendant présence du probe montrait des erreurs TS locales au probe ; typecheck **après suppression** = clean
- Probe utilisait `composeFinOpsT7Runtime({ pool })` comme les suites runtime existantes (runtime PASS)

## Fichiers temporaires

Créés sous `.tmp-sfia-review/t7-dedicated-activation-qa/**` (preuves locales).

Probe temporaire (CONTENU COMPLET — avant suppression) :

```typescript
/**
 * @vitest-environment node
 *
 * TEMPORARY Dedicated Activation QA probe — NOT a permanent suite.
 * Proves SHADOW → OFF rollback and row-absent → default OFF on ephemeral TEST DB.
 * Must remain untracked and be deleted before cycle end.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  closeFinOpsPool,
  createFinOpsPool,
  type FinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import { resolveFinOpsRollout } from "@/lib/oa/finops/application/resolveFinOpsRollout";
import { composeFinOpsT7Runtime } from "@/lib/oa/finops/server/composeFinOpsT7Runtime";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("T7 Dedicated Activation QA — temporary rollback probe", () => {
  let pool: FinOpsPool;
  const prefix = `t7-qa-rollback-${Date.now()}`;

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id LIKE $1`,
      [`${prefix}%`],
    );
    await closeFinOpsPool(pool);
  });

  it("QA-RB01 SHADOW upsert → resolve SHADOW non-blocking → OFF upsert → resolve OFF inert → delete row → default_off", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const rt = composeFinOpsT7Runtime({ pool });
    const projectId = `${prefix}-rb01`;

    await store.upsertProjectRollout({
      projectId,
      mode: "SHADOW",
      updatedAt: "2026-08-08T15:00:00.000Z",
    });
    const shadow = await rt.resolveProjectRollout(projectId);
    expect(shadow.mode).toBe("SHADOW");
    expect(shadow.blockingAllowed).toBe(false);
    expect(shadow.activationState).toBe("configured_not_activated");
    expect(shadow.requiresT3Sync).toBe(false);

    await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T15:01:00.000Z",
    });
    const off = await rt.resolveProjectRollout(projectId);
    expect(off.mode).toBe("OFF");
    expect(off.blockingAllowed).toBe(false);
    expect(off.evaluateT4).toBe(false);
    expect(off.resolution).toBe("persisted");

    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      projectId,
    ]);
    const absent = await resolveFinOpsRollout({ rollout: store }, projectId);
    expect(absent.mode).toBe("OFF");
    expect(absent.resolution).toBe("default_off");
    expect(absent.blockingAllowed).toBe(false);
    expect(absent.evaluateT4).toBe(false);
  });
});
```

Suppression probe : **DONE** — path absent · absent de `git status`.

## Git status final

- HEAD / origin/main : `503369b…`
- tracked/staged : none
- untracked : `.tmp-sfia-review/` only
- fichiers projet : **aucun modifié / créé versionné**
- commits projet : **aucun**

## Anti-claims

- SHADOW NOT ACTIVATED
- MONITOR NOT ACTIVATED
- E1 NOT AUTHORIZED
- NO GO SHADOW (décision humaine distincte restante)
- NO PRODUCTION READY / ZERO BUG / COMPLETE COVERAGE claims
- T6-ext NOT AUTHORIZED
- Product IAM NOT_SELECTED
- real calibration NOT EXECUTED
- 15/20/25/30 NOT adopted

## Décisions Morris restantes

**DISTINCT MORRIS SHADOW DECISION** (GO SHADOW ou NO-GO SHADOW) — non lancée ici.

## Review pack content coverage

- project created : N/A
- project modified : N/A
- probe temporary full content : YES (ci-dessus)
- synthesis only : **no**
- review pack verdict : **complete**

## Verdict unique

```
T7 DEDICATED ACTIVATION QA PASS WITH RESERVES —
SHADOW ENTRY QA SATISFIED —
DEFAULT-OFF PRESERVED —
FAIL-OPEN OFF PROVEN —
PROJECT-SCOPED ISOLATION PROVEN —
SHADOW NEVER BLOCK PROVEN —
SHADOW CONFIGURED_NOT_ACTIVATED PROVEN —
ROLLBACK TO OFF PROVEN —
T4 PROJECTION FRESHNESS PATH PROVEN —
T6 RUNTIME COMPOSITION PROVEN —
NO PROVIDER INVOCATION PROVEN —
NO EXECUTION-RUN WIRING PROVEN —
NO T3 SIDE EFFECT REQUIRED BEFORE SHADOW —
R-T4-PROJECTION-REFRESH-01 CLOSED — WIRING ONLY —
R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
R-T4-T3-SYNC-01 OPEN — BEFORE MONITOR —
R-PR-T2-API-01 OPEN MINOR —
REAL CALIBRATION NOT EXECUTED —
T6-EXT NOT AUTHORIZED —
PRODUCT IAM NOT_SELECTED —
SHADOW NOT ACTIVATED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
READY FOR DISTINCT MORRIS SHADOW DECISION —
HANDOFF REMOTE VERIFIED
```

## Review Handoff Git (contenu destiné à publication)

- Mode : publish-in-cycle
- Source : `.tmp-sfia-review/chatgpt-review.md`
- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message prévu : `docs(review-handoff): publish T7 dedicated activation QA`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- Remote handoff BEFORE : tip `eda2d567c9108204b9eb55fa6861dacc91723e99` / blob `72b9eee610cc37cb3361d21ddf581d3fdf8b66b3`
- Final remote tip/blob verified externally after publication; see Cursor final report and Git remote verification.
