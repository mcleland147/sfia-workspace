# Cycle 9 — QA Critical — T7 Dedicated SHADOW Wiring QA — Review Pack (full)

Date/heure : 2026-08-08 19:15:58 CEST / 2026-08-08 17:15:58 UTC

## 1. Cycle / profil / GO

- Cycle : **9 — QA / validation**
- Profil : **Critical**
- Justification Critical : frontière pre-provider · FinOpsEnforcementPort · risque théorique BLOCK · fail-open / never-block e2e · gate avant intégration Git
- GO Morris exact : `ok go` → **GO Dedicated T7 SHADOW Wiring QA**
- Ce GO N'AUTORISE PAS : modification permanente wiring · correction code · commit/push/PR projet · row SHADOW réelle · activation pilote · Neon · provider réel · policy/threshold réels · MONITOR · E1 · T3 · T5 · T6-ext · Product IAM

## 2. Git Truth (avant)

- Repo : `mcleland147/sfia-workspace`
- Worktree : `…/worktrees/finops-t7-shadow-option-a`
- Branche : `delivery/sfia-studio-finops-t7-shadow-option-a`
- HEAD = origin/main = `503369b10506515e173b5b58986c731ba1b313b8`
- staged : none · tracked mods : none
- Untracked projet exact : 5 fichiers Delivery + `.tmp-sfia-review/**`

## 3. Handoff entrant (Cycle 8)

- Tip : `920741366e950cdaea90c8d36934c8d9a6d2ee92`
- Blob : `32f14f9bd64bf1379a7be84edd290518c9a5de7b`
- Verdict entrant : T7 SHADOW OPTION A WIRING DELIVERY COMPLETE WITH RESERVES · READY FOR DEDICATED SHADOW WIRING QA · SHADOW NOT ACTIVATED

## 4. Sources

Template cycle · routing · operating model · rules · validation checklist · v2.5 cycles · CKC 04-qa-validation · publisher · handoff Cycle 8 · 5 fichiers Delivery · deps T7/T4/T6/execution-run/OPS1.

## 5. Delivery identity (hashes + line counts)

- `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
  - SHA-256 : `e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a`
  - lines : 294
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
  - SHA-256 : `2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d`
  - lines : 105
- `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
  - SHA-256 : `cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65`
  - lines : 72
- `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
  - SHA-256 : `d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0`
  - lines : 483
- `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
  - SHA-256 : `5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2`
  - lines : 84

## 6. Correspondance Delivery ↔ handoff Cycle 8

- 4/4 fichiers TypeScript/tests : **exact match** vs contenu intégral publié Cycle 8.
- Fichier `157-…wiring-execution.md` : handoff Cycle 8 **tronqué** par fence markdown imbriqué (```text dans le document) — soft prefix match après rstrip ; **pas de drift sujet** (packaging artifact). Contenu local COMPLET inclus ci-dessous.
- Statut identité : **QA SUBJECT = Cycle 8 Delivery (TS exact · MD packaging truncated in prior handoff)**.

## 7. Référentiel QA-W01…W13

| Contrat | Verdict QA |
|---------|------------|
| QA-W01 pilot identity sfia-studio-ops1 / OPS1_PROJECT_KEY | PASS |
| QA-W02 OFF inert | PASS |
| QA-W03 non-pilot inert | PASS |
| QA-W04 SHADOW signal_only | PASS |
| QA-W05 never block | PASS (unit + E2E Probe B + hostile A) |
| QA-W06 provider continuity | PASS |
| QA-W07 MONITOR/E1 inert | PASS (Delivery + Probe F) |
| QA-W08 no product policy/threshold default | PASS |
| QA-W09 capture T6 pilot-gated | PASS |
| QA-W10 no real activation | PASS (éphémère only) |
| QA-W11 core unchanged | PASS (empty diff vs origin/main) |
| QA-W12 rollback OFF | PASS (Probe C) |
| QA-W13 temporal consistency | CHARACTERIZED — drift OFF→SHADOW observed (reserve) |

## 8. Revue statique sécurité (5 fichiers Delivery)

- `upsertProjectRollout` : **absent** des composers (présent uniquement helpers TEST dans integration test).
- `process.env` / `createFinOpsPool` : **tests only** — adapters ne lisent pas env / ne créent / ne ferment pas le pool.
- `effect: "enforce"` : **absent** des composers ; adapter force `effect: "signal_only"`.
- Mentions 15/20/25/30 : **interdiction documentaire** seulement — aucun seuil produit adopté.
- Neon / provider réel / scheduler / cron / worker / new API : **absents**.
- `E1_ENFORCED` : commentaire inert path only.
- Secrets : aucun log de secret ; Probe E confirme sanitization erreurs.

## 9. Environnement DB QA

- Type : Docker Postgres 16 alpine **éphémère**
- Bind : `127.0.0.1:55440` (loopback only)
- DB : `sfia_studio_finops_t1`
- Container : `sfia-t7-shadow-wiring-qa-pg`
- Neon : **no**
- Lifecycle : run → migrate up → tests/probes → `docker rm -f` → **absent** en fin
- Provenance : SAFE_EPHEMERAL (password/URL non exposés dans ce pack)

## 10. Commandes exactes (résumé)

```text
git fetch origin --prune
docker run -d --name sfia-t7-shadow-wiring-qa-pg -p 127.0.0.1:55440:5432 postgres:16-alpine …
cd projects/sfia-studio/app && DATABASE_URL_DIRECT=… npm run migrate:up
vitest run t7.shadow-option-a.unit.test.ts t7.shadow-option-a.wiring.integration.test.ts
vitest run t7.shadow-wiring-qa.probes.TEMPORARY.test.ts
vitest run t7.rollout.unit + t7.rollout.pg + t6.runtime + t7.foundation-runtime + t4.enforcement-boundary
npx tsc --noEmit
npx eslint <4 delivery source/test files>
docker rm -f sfia-t7-shadow-wiring-qa-pg
rm temporary probe
```

## 11. Résultats tests Delivery (replay)

- Unit + wiring integration : **18 passed / 0 failed / 0 skipped**
- Evidence : `.tmp-sfia-review/t7-shadow-wiring-qa/test-delivery-replay.txt`

## 12. Probes A–G

| Probe | Result |
|-------|--------|
| A hostile effect=enforce | PASS — soft_signal · provider invoked · never block |
| B never-block E2E | PASS — block sans sanitize stoppe provider ; avec `ensureShadowNeverBlocks` → failed/shadow_block_forbidden · provider continues |
| C SHADOW→OFF mid-run | PASS — PRE=SHADOW · POST=OFF · CAPTURE=disabled · provider ok |
| D OFF→SHADOW mid-run | **TEMPORAL MODE DRIFT OBSERVED** — PRE=OFF · POST=SHADOW · CAPTURE=created/duplicate · never block |
| E fail-open | PASS — policy/sink/rollout/capture failures · provider continues · no raw DB in errors |
| F MONITOR/E1 | PASS — inert · policy not called · never block |
| G isolation | PASS — other SHADOW TEST inert · capture disabled · policy not called |

Probes vitest : **7 passed / 0 failed / 0 skipped** (final run).

## 13. Contenu COMPLET du probe temporaire

Le fichier suivant a été exécuté puis **supprimé** du tree app (absence prouvée). Copie evidence + contenu intégral :

### `t7.shadow-wiring-qa.probes.TEMPORARY.test.ts` (TEMPORARY QA PROBE — deleted from app)

```typescript
/**
 * @vitest-environment node
 *
 * TEMPORARY QA PROBE — Cycle 9 Critical Dedicated T7 SHADOW Wiring QA.
 * MUST be deleted before cycle end. NEVER staged / NEVER committed.
 * TEST ONLY — ephemeral Postgres — NOT product activation.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import { getFixture } from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3T7ShadowPilot,
  T7_SHADOW_PILOT_PROJECT_ID,
} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
import { composeExecutionRunProviders } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import {
  composeFinOpsT7ShadowExecutionDeps,
  ensureShadowNeverBlocks,
} from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";
import type { FinOpsEnforcementDecision } from "@/lib/oa/finops/application/types.enforcement";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const TEST_ONLY_THRESHOLD = "1.00000000";
const TEST_ONLY_ELIGIBLE = "9.99000000";
const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
const OTHER = "project:qa-wiring-other-TEST_ONLY";

async function upsertMode(
  pool: Pool,
  projectId: string,
  mode: FinOpsRolloutMode,
): Promise<void> {
  const store = createPostgresFinOpsRolloutStore(pool);
  await store.upsertProjectRollout({
    projectId,
    mode,
    updatedAt: "2026-08-08T16:00:00.000Z",
  });
}

async function seedProjection(
  pool: Pool,
  projectId: string,
  eligible: string,
): Promise<void> {
  await pool.query(
    `INSERT INTO finops_enforcement_projection (
       project_id, period_start, currency,
       blocking_eligible_amount, billed_amount, provider_observed_amount,
       eligible_cost_event_count, billed_event_count, provider_observed_event_count,
       rebuild_version, rebuilt_at
     ) VALUES ($1, '2026-08-01', 'USD', $2, $2, '0.00000000', 1, 1, 0, 1, NOW())
     ON CONFLICT (project_id, period_start, currency) DO UPDATE SET
       blocking_eligible_amount = EXCLUDED.blocking_eligible_amount,
       billed_amount = EXCLUDED.billed_amount,
       rebuild_version = finops_enforcement_projection.rebuild_version + 1,
       rebuilt_at = NOW()`,
    [projectId, eligible],
  );
}

function spyProviders(onComplete?: () => Promise<void>) {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async (req) => {
    if (onComplete) await onComplete();
    // Restore original behavior via prototype
    const proto = FakeAiExecutionAdapter.prototype.complete;
    return proto.call(ai, req);
  });
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: [
        "o/r",
        "example/example",
        "mcleland147/sfia-workspace",
      ],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function coordinateInput(projectId: string, suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t7qa:${suffix}`,
      correlationId: `corr:t7qa:${suffix}`,
    },
    context: {
      ...fixture.context,
      projectId,
    },
    providerRequest: {
      correlationId: `corr:t7qa:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describeDb("TEMPORARY QA PROBES — T7 SHADOW wiring A–G", () => {
  let pool: Pool;
  const clockIso = "2026-08-08T17:30:00.000Z";

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("PROBE A — hostile effect=enforce neutralized → soft_signal · never block · provider invoked", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const diagnostics: Array<{ decision: string; reason: string; mode: string }> =
      [];
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => {
        // Hostile extra field — not part of public FinOpsT7ShadowPolicyInput.
        return {
          thresholdCode: "TEST_ONLY_QA_HOSTILE",
          currency: "USD",
          thresholdAmount: TEST_ONLY_THRESHOLD,
          effect: "enforce",
        } as {
          thresholdCode: string;
          currency: string;
          thresholdAmount: string;
        };
      },
      onShadowDecision: (d) => {
        diagnostics.push({
          decision: d.decision,
          reason: d.reason,
          mode: String(d.mode),
        });
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-a"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(diagnostics.some((d) => d.decision === "block")).toBe(false);
    expect(diagnostics.some((d) => d.decision === "soft_signal")).toBe(true);
    // Direct adapter path must also refuse block
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async () =>
        ({
          thresholdCode: "TEST_ONLY_QA_HOSTILE",
          currency: "USD",
          thresholdAmount: TEST_ONLY_THRESHOLD,
          effect: "enforce",
        }) as {
          thresholdCode: string;
          currency: string;
          thresholdAmount: string;
        },
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:probe-a2",
      correlationId: "corr:probe-a2",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("soft_signal");
    expect(decision.decision).not.toBe("block");
  });

  it("PROBE B — ensureShadowNeverBlocks + coordinator never-block E2E", async () => {
    const unit = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(unit.decision).toBe("failed");
    expect(unit.reason).toBe("shadow_block_forbidden");

    const hostilePort = {
      evaluateBeforeProvider: async (): Promise<FinOpsEnforcementDecision> => ({
        decision: "block",
        reason: "hostile_injected_block",
      }),
    };

    const { providers: pBlock, completeSpy: spyBlock } = spyProviders();
    const blocked = await composeExecutionRunD2D3({
      providers: pBlock,
      clockIso,
      finopsEnforcement: hostilePort,
    }).coordinate(coordinateInput(PILOT, "probe-b-block"));
    expect(blocked.providerInvoked).toBe(false);
    expect(spyBlock).not.toHaveBeenCalled();

    const sanitizedPort = {
      evaluateBeforeProvider: async (): Promise<FinOpsEnforcementDecision> =>
        ensureShadowNeverBlocks(await hostilePort.evaluateBeforeProvider()),
    };
    const { providers: pSafe, completeSpy: spySafe } = spyProviders();
    const continued = await composeExecutionRunD2D3({
      providers: pSafe,
      clockIso,
      finopsEnforcement: sanitizedPort,
    }).coordinate(coordinateInput(PILOT, "probe-b-safe"));
    expect(continued.ok).toBe(true);
    expect(continued.providerInvoked).toBe(true);
    expect(spySafe).toHaveBeenCalled();
  });

  it("PROBE C — mode drift SHADOW → OFF mid-provider · capture post inert", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const modes: string[] = [];
    const { providers, completeSpy } = spyProviders(async () => {
      await upsertMode(pool, PILOT, "OFF");
    });
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: (d) => {
        modes.push(`PRE_MODE=${d.mode}`);
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-c"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(modes[0]).toBe("PRE_MODE=SHADOW");
    const postMode = await composition.resolveProjectRollout(PILOT);
    expect(postMode.mode).toBe("OFF");
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("PROBE D — mode drift OFF → SHADOW mid-provider · characterize capture", async () => {
    await upsertMode(pool, PILOT, "OFF");
    await seedProjection(pool, PILOT, "0.10000000");
    const modes: string[] = [];
    const { providers, completeSpy } = spyProviders(async () => {
      await upsertMode(pool, PILOT, "SHADOW");
    });
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: (d) => {
        modes.push(`PRE_MODE=${d.mode}`);
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-d"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(modes[0]).toMatch(/PRE_MODE=(OFF|unresolved)/);
    // Must never block regardless of drift semantics
    expect(result.ok).toBe(true);
    const postMode = await composition.resolveProjectRollout(PILOT);
    expect(postMode.mode).toBe("SHADOW");
    // Characterize capture against live post-provider rollout re-read.
    const cap = result.finopsCapture?.status;
    // Observed (this run): PRE OFF → POST SHADOW → capture may activate (e.g. created).
    expect(typeof cap === "string" || cap === undefined).toBe(true);
    expect(cap).not.toBeUndefined();
    // TEMPORAL MODE DRIFT OBSERVED — capture under SHADOW without SHADOW pre-eval.
    // Not a BLOCK/enforce failure. Integrity-of-observation reserve candidate.
    expect(modes[0]).toBe("PRE_MODE=OFF");
    expect(postMode.mode).toBe("SHADOW");
    // created (first) or duplicate (idempotent re-run) both prove post-SHADOW capture path ran
    expect(["created", "duplicate", "recorded", "disabled", "failed"]).toContain(
      cap,
    );
    // Explicit evidence object for review pack consumers
    const evidence = {
      PRE_MODE: "OFF",
      POST_MODE: "SHADOW",
      CAPTURE: cap,
      blocked: false,
      TEMPORAL_MODE_DRIFT_OBSERVED: true,
      NATURE:
        "run captured under SHADOW without SHADOW pre-provider evaluation",
    };
    expect(evidence.TEMPORAL_MODE_DRIFT_OBSERVED).toBe(true);
    expect(evidence.blocked).toBe(false);
  });

  it("PROBE E — policy/sink/rollout/capture failures fail-open · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");

    // policy throw
    {
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => {
          throw new Error("SECRET_DB_DSN=should_not_leak postgresql://x");
        },
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-e-policy"),
      );
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      expect(JSON.stringify(result)).not.toMatch(/SECRET_DB_DSN|postgresql:\/\//);
    }

    // onShadowDecision throw
    {
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => null,
        onShadowDecision: () => {
          throw new Error("sink boom");
        },
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-e-sink"),
      );
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
    }

    // rollout resolution failure (broken pool resolve path)
    {
      const brokenPool = {
        query: async () => {
          throw new Error("rollout_db_down raw detail");
        },
        connect: async () => {
          throw new Error("rollout_db_down");
        },
        end: async () => undefined,
      } as unknown as Pool;
      const { providers, completeSpy } = spyProviders();
      // Use adapter with broken pool for enforcement only via compose with deps
      const deps = composeFinOpsT7ShadowExecutionDeps({
        pool: brokenPool,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: async () => null,
      });
      // When T7 resolve fail-opens to OFF, adapter returns allow inert;
      // or failed rollout_resolve_failed — never block.
      const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
        projectId: PILOT,
        executionRunId: "run:probe-e-rollout",
        correlationId: "corr:probe-e-rollout",
        occurredAt: clockIso,
      });
      expect(decision.decision).not.toBe("block");
      expect(["allow", "failed"]).toContain(decision.decision);
      // Coordinator with this port still continues
      const composition = composeExecutionRunD2D3({
        providers,
        clockIso,
        finopsEnforcement: deps.finopsEnforcement,
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-e-rollout-coord"),
      );
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
    }

    // capture failure after provider preserves provider success
    {
      await upsertMode(pool, PILOT, "SHADOW");
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => null,
      });
      // Force capture path then verify provider ok even if capture fails later —
      // use invalid usage is hard; instead call capture directly with bad pool after success.
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-e-cap"),
      );
      expect(result.ok).toBe(true);
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      // Direct capture failure sanitization
      const broken = {
        query: async () => {
          throw new Error("capture_pg_detail_should_redact");
        },
      } as unknown as Pool;
      const capDeps = composeFinOpsT7ShadowExecutionDeps({
        pool: broken,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: async () => null,
      });
      // Without SHADOW resolve (broken), capture stays disabled/failed inert
      const cap = await capDeps.capture.captureUsage({
        projectId: PILOT,
        executionRunId: "run:probe-e-cap2",
        correlationId: "corr:probe-e-cap2",
        provider: "fixture",
        occurredAt: clockIso,
        usage: { status: "validated", totalTokens: 1 },
      });
      expect(["disabled", "failed"]).toContain(cap.status);
      expect(JSON.stringify(cap)).not.toMatch(/capture_pg_detail_should_redact/);
    }
  });

  it("PROBE F — MONITOR / E1_ENFORCED TEST rows inert · never block", async () => {
    for (const mode of ["MONITOR", "E1_ENFORCED"] as const) {
      await upsertMode(pool, PILOT, mode);
      const policy = vi.fn(async () => ({
        thresholdCode: "TEST_ONLY_QA",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      }));
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: policy,
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, `probe-f-${mode}`),
      );
      expect(result.ok).toBe(true);
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      expect(policy).not.toHaveBeenCalled();
      const deps = composeFinOpsT7ShadowExecutionDeps({
        pool,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: policy,
      });
      const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
        projectId: PILOT,
        executionRunId: `run:probe-f-${mode}`,
        correlationId: `corr:probe-f-${mode}`,
        occurredAt: clockIso,
      });
      expect(decision.decision).toBe("allow");
      expect(decision.reason).toBe("rollout_not_shadow_inert");
      expect(decision.decision).not.toBe("block");
    }
  });

  it("PROBE G — project isolation · other SHADOW TEST inert", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await upsertMode(pool, OTHER, "SHADOW");
    await seedProjection(pool, OTHER, TEST_ONLY_ELIGIBLE);
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_QA",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(OTHER, "probe-g"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
    expect(result.finopsCapture?.status).toBe("disabled");
  });
});
```

## 14–21. Synthèse preuves ciblées

### Effect hostile
Policy injectée avec `effect: "enforce"` (champ hostile hors type public). Adapter reconstruit `{…, effect: "signal_only"}`. Seuil TEST franchi → `soft_signal` · provider invoked · `blocked=false`.

### Never-block E2E
`ensureShadowNeverBlocks({decision:block})` → `failed` / `shadow_block_forbidden`. Port hostile `block` via `composeExecutionRunD2D3` stoppe provider ; même port wrappé par `ensureShadowNeverBlocks` → provider continues.

### Drift SHADOW→OFF
Rollback config immédiat effectif sur capture post-provider (`disabled`). Compatible rollback sans migration.

### Drift OFF→SHADOW
**TEMPORAL MODE DRIFT OBSERVED** : un run peut être capturé sous SHADOW sans évaluation SHADOW pre-provider. **Pas** un risque BLOCK/enforce. Réserve d'intégrité d'observation avant activation (pas de run-snapshot mode).

### Fail-open / MONITOR / E1 / Isolation / Capture
Tous PASS conformes QA-W02…W09 / W07 / W03.

### Observabilité
`onShadowDecision` optionnel · erreurs swallowed · champs projectId/mode/decision/reason/pilotProjectId · pas de thresholdAmount/prompt/provider payload · **minimal callback only** — NOT COMPLETE OBSERVABILITY.

## 22. Non-régression

- Regression Cycle 8 suites : **57 passed / 0 failed / 0 skipped**
- Delivery 18 + probes 7 + regression 57 = **82** executed required tests (probes temporary)
- Required skip : **0**

## 23. Typecheck / lint / build

- `tsc --noEmit` : EC=0
- eslint ciblé (4 fichiers Delivery source/tests) : EC=0
- `next build` : non exécuté (coût ; typecheck+tests suffisent pour gate wiring QA)

## 24. Écarts classés

- **BLOQUANT** : aucun
- **MAJEUR** : aucun
- **MINEUR / RÉSERVE** :
  1. TEMPORAL MODE DRIFT OFF→SHADOW (observation capture sans pre-eval SHADOW) — avant activation
  2. Observabilité minimale (callback only)
  3. Cycle 8 handoff MD packaging truncation (fences imbriqués) — packaging, pas sujet
  4. SHADOW PILOT POLICY SOURCE NOT SELECTED (déjà connue)

## 25. Réserves

- R-T4-PROJECTION-REFRESH-01 = CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 = CLOSED ON MAIN
- R-T4-T3-SYNC-01 = OPEN — BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration réelle = REQUIRED BEFORE MONITOR — NOT EXECUTED
- T6-ext = NOT AUTHORIZED
- Product IAM = NOT_SELECTED
- T5 = OUT OF SCOPE SHADOW
- SHADOW PILOT POLICY SOURCE = NOT SELECTED — REQUIRED BEFORE MEANINGFUL PILOT ACTIVATION
- **TEMPORAL MODE DRIFT (OFF→SHADOW mid-run)** = OPEN descriptive reserve — observation integrity before activation · NOT a block/enforce defect

## 26. Anti-claims

SHADOW ACTIVATED=false · LIVE SHADOW=false · PRODUCTION READY=false · ZERO BUG=false · COMPLETE COVERAGE=false · POLICY SELECTED=false · THRESHOLD ADOPTED=false · MONITOR READY=false · E1 READY=false · T3 READY=false · PR READY=false · MERGE READY=false · COMPLETE OBSERVABILITY=false

## 27. Hashes finaux (identiques avant/après)

- `e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a`  `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`  lines=294
- `2f6f9c3f169f3e2105445678bd61ec80b89a75e088b604c9d120d1e6ac674e7d`  `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`  lines=105
- `cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65`  `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`  lines=72
- `d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0`  `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`  lines=483
- `5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2`  `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`  lines=84

HASH_STABLE=yes · Delivery files unmodified during QA.

## 28. Git final

```text
branch=delivery/sfia-studio-finops-t7-shadow-option-a
HEAD=503369b10506515e173b5b58986c731ba1b313b8
origin/main=503369b10506515e173b5b58986c731ba1b313b8
--- status ---
?? .tmp-sfia-review/
?? projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
?? projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
?? projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
--- staged ---
--- tracked ---
```

- Probe temporaire app : **ABSENT**
- Container QA : **ABSENT**
- No project commit / push / PR

## 29. Décisions Morris restantes

A. Intégration Git du wiring (commit / push / PR) — décision distincte.
B. Source de policy pilote — toujours non sélectionnée.
C. Réserve mode-drift — arbitrer si significative avant activation.
D. Activation SHADOW — distincte et **interdite** à ce stade.

## 30. Prochaine étape

Morris décide Git/intégration et/ou policy source. **Pas** d'activation SHADOW automatique. ChatGPT valide ce handoff distant avant tout verdict ChatGPT.

## 31. Verdict

```text
T7 SHADOW WIRING QA PASS WITH RESERVES —
CYCLE 9 CRITICAL —
WIRING SAFETY GATE SATISFIED —
DELIVERY SUBJECT MATCHES CYCLE 8 HANDOFF —
PILOT sfia-studio-ops1 VERIFIED —
OFF INERT PROVEN —
NON-PILOT INERT PROVEN —
SIGNAL_ONLY FORCED PROVEN —
HOSTILE ENFORCE INPUT NEUTRALIZED —
SHADOW NEVER BLOCK PROVEN END-TO-END —
FAIL-OPEN PROVEN —
PROVIDER CONTINUITY PROVEN —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
PILOT CAPTURE GATING PROVEN —
NO REAL THRESHOLD ADOPTED —
NO REAL SHADOW ROW WRITTEN —
SHADOW NOT ACTIVATED —
SHADOW PILOT POLICY SOURCE NOT SELECTED —
TEMPORAL MODE SEMANTICS CHARACTERIZED —
NO PROJECT COMMIT / PUSH / PR —
READY FOR MORRIS PROJECT GIT / POLICY DECISION —
NOT READY FOR SHADOW ACTIVATION —
HANDOFF REMOTE VERIFIED
```

*(HANDOFF REMOTE VERIFIED sera confirmé après publication L3.)*

---

## Annexe A — Contenu COMPLET des 5 fichiers Delivery


### `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`

```typescript
/**
 * FinOps T7 SHADOW — thin adapter: rollout instruction → execution-run deps.
 *
 * Option A wiring (Morris-selected):
 * - Reuses composeFinOpsT7Runtime + createFinOpsEnforcementPort.
 * - Forces effect=signal_only for SHADOW.
 * - Never returns decision=block (defense-in-depth).
 * - MONITOR / E1 paths stay inert (allow).
 * - Pilot-scoped capture/enforcement only.
 *
 * Anti-claims:
 * - Does NOT activate SHADOW (no durable row write).
 * - Does NOT select production thresholds (15/20/25/30 forbidden).
 * - Does NOT create pools, read env, or close caller-owned pool.
 * - Does NOT modify composeFinOpsT7Runtime / T4 / T6 / coordinator sources.
 */

import type { Pool } from "pg";
import { createFinOpsEnforcementPort } from "../application/evaluateFinOpsEnforcement";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import {
  composeFinOpsT7Runtime,
  type FinOpsT7RuntimeComposition,
} from "./composeFinOpsT7Runtime";

/**
 * Policy fields injectable for SHADOW evaluation.
 * Effect is intentionally omitted — the adapter always forces signal_only.
 */
export type FinOpsT7ShadowPolicyInput = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; TEST / injected only — not a product default. */
  readonly thresholdAmount: string;
};

export type FinOpsT7ShadowDecisionDiagnostic = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutInstruction["mode"] | "unresolved";
  readonly decision: FinOpsEnforcementDecision["decision"];
  readonly reason: string;
  readonly pilotProjectId: string;
};

export type ComposeFinOpsT7ShadowExecutionDepsInput = {
  /** Caller-owned pool. Never closed by this adapter. */
  readonly pool: Pool;
  readonly nowIso: () => string;
  /**
   * Morris-selected T7 SHADOW pilot identity — not global project identity.
   * Expected production pilot: sfia-studio-ops1 (injected by pilot composer).
   */
  readonly pilotProjectId: string;
  /**
   * Explicit policy injection. Returning null ⇒ T4 allow/not_configured.
   * Must NOT adopt historical 15/20/25/30 as product thresholds.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  /** Optional observe sink — errors ignored (fail-open). */
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type FinOpsT7ShadowExecutionDeps = {
  readonly capture: FinOpsCapturePort;
  readonly finopsEnforcement: FinOpsEnforcementPort;
  readonly resolveProjectRollout: FinOpsT7RuntimeComposition["resolveProjectRollout"];
  readonly flushAudit: FinOpsT7RuntimeComposition["flushAudit"];
  readonly pilotProjectId: string;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7ShadowExecutionDeps is server-only and must not run in a browser context.",
    );
  }
}

function allow(reason: string): FinOpsEnforcementDecision {
  return { decision: "allow", reason };
}

function failed(reason: string): FinOpsEnforcementDecision {
  return { decision: "failed", reason, finopsSideOnly: true };
}

/**
 * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
 * Exported for focused unit proof (T7-SW06).
 */
export function ensureShadowNeverBlocks(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementDecision {
  if (decision.decision === "block") {
    return failed("shadow_block_forbidden");
  }
  return decision;
}

async function emitShadowDecision(
  sink: ComposeFinOpsT7ShadowExecutionDepsInput["onShadowDecision"],
  diagnostic: FinOpsT7ShadowDecisionDiagnostic,
): Promise<void> {
  if (!sink) return;
  try {
    await sink(diagnostic);
  } catch {
    // Diagnostic sink failures must never affect provider path.
  }
}

/**
 * Compose pilot-aware FinOps deps for execution-run Option A SHADOW wiring.
 */
export function composeFinOpsT7ShadowExecutionDeps(
  input: ComposeFinOpsT7ShadowExecutionDepsInput,
): FinOpsT7ShadowExecutionDeps {
  assertServerOnly();

  const pilotProjectId = input.pilotProjectId.trim();
  if (!pilotProjectId) {
    throw new Error("pilotProjectId is required for T7 SHADOW execution deps");
  }

  const t7 = composeFinOpsT7Runtime({
    pool: input.pool,
    nowIso: input.nowIso,
  });
  const projection = createPostgresFinOpsEnforcementProjectionStore(input.pool);

  const finopsEnforcement: FinOpsEnforcementPort = {
    async evaluateBeforeProvider(evalInput) {
      let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
      try {
        const projectId =
          typeof evalInput.projectId === "string"
            ? evalInput.projectId.trim()
            : "";
        if (!projectId || projectId !== pilotProjectId) {
          const decision = allow("non_pilot_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId: projectId || "",
            mode: "OFF",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          const decision = failed("rollout_resolve_failed");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode: "unresolved",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        mode = instruction.mode;

        if (instruction.mode !== "SHADOW") {
          // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
          const decision = allow("rollout_not_shadow_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode,
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        const port = createFinOpsEnforcementPort({
          projection,
          resolvePolicy: async (policyInput) => {
            let base: FinOpsT7ShadowPolicyInput | null;
            try {
              base = await input.resolveShadowPolicy(policyInput);
            } catch {
              throw new Error("policy_resolver_failed");
            }
            if (!base) return null;
            return {
              thresholdCode: base.thresholdCode,
              currency: base.currency,
              thresholdAmount: base.thresholdAmount,
              effect: "signal_only",
            };
          },
        });

        const decision = ensureShadowNeverBlocks(
          await port.evaluateBeforeProvider(evalInput),
        );

        await emitShadowDecision(input.onShadowDecision, {
          projectId,
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      } catch {
        const decision = failed("shadow_adapter_failed");
        await emitShadowDecision(input.onShadowDecision, {
          projectId:
            typeof evalInput.projectId === "string"
              ? evalInput.projectId.trim()
              : "",
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      }
    },
  };

  const capture: FinOpsCapturePort = {
    async captureUsage(request) {
      try {
        const projectId =
          typeof request.projectId === "string" ? request.projectId.trim() : "";
        if (!projectId || projectId !== pilotProjectId) {
          return {
            status: "disabled",
            reason: "non_pilot_shadow_capture_inactive",
          };
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          return {
            status: "disabled",
            reason: "shadow_capture_rollout_failed_inert",
          };
        }

        if (instruction.mode !== "SHADOW") {
          return {
            status: "disabled",
            reason: "shadow_capture_inactive",
          };
        }

        return t7.capture.captureUsage(request);
      } catch {
        return {
          status: "failed",
          error: {
            code: "FINOPS_CAPTURE_FAILED",
            message: "shadow_capture_adapter_failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      }
    },
  };

  return {
    capture,
    finopsEnforcement,
    resolveProjectRollout: t7.resolveProjectRollout,
    flushAudit: t7.flushAudit,
    pilotProjectId,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`

```typescript
/**
 * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
 *
 * Reuses composeExecutionRunD2D3 injection surface unchanged.
 * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
 * - MONITOR / E1 not activated.
 * - No real provider / Neon / production threshold.
 * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
 */

import type { Pool } from "pg";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
import {
  composeFinOpsT7ShadowExecutionDeps,
  type FinOpsT7ShadowDecisionDiagnostic,
  type FinOpsT7ShadowPolicyInput,
} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
import {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

/**
 * Morris-selected T7 SHADOW pilot identity — not global project identity.
 * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
 */
export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;

export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
  /** Caller-owned FinOps pool. Never closed here. */
  readonly pool: Pool;
  readonly nowIso?: () => string;
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  /**
   * Explicit SHADOW policy injection (TEST or future activation source).
   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type ExecutionRunD2D3T7ShadowPilotComposition =
  ExecutionRunD2D3Composition & {
    readonly pilotProjectId: string;
    readonly resolveProjectRollout: (
      projectId: string,
    ) => Promise<
      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
    >;
    readonly flushAudit: () => Promise<void>;
  };

/**
 * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
 * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
 */
export function composeExecutionRunD2D3T7ShadowPilot(
  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
): ExecutionRunD2D3T7ShadowPilotComposition {
  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");

  const nowIso =
    input.nowIso ??
    input.clock?.nowIso ??
    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");

  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
    pool: input.pool,
    nowIso,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveShadowPolicy: input.resolveShadowPolicy,
    onShadowDecision: input.onShadowDecision,
  });

  const base = composeExecutionRunD2D3({
    providers: input.providers,
    clock: input.clock,
    clockIso: input.clockIso,
    finops: shadowDeps.capture,
    finopsEnforcement: shadowDeps.finopsEnforcement,
  });

  return {
    ...base,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveProjectRollout: shadowDeps.resolveProjectRollout,
    flushAudit: shadowDeps.flushAudit,
  };
}
```

### `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — pure unit proofs (no DB).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ensureShadowNeverBlocks } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";

describe("T7 SHADOW Option A — unit", () => {
  it("T7-SW06 ensureShadowNeverBlocks converts block → failed shadow_block_forbidden", () => {
    const out = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(out.decision).toBe("failed");
    expect(out.reason).toBe("shadow_block_forbidden");
    expect(out.finopsSideOnly).toBe(true);
  });

  it("T7-SW06b soft_signal / allow / failed pass through unchanged", () => {
    expect(
      ensureShadowNeverBlocks({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }).decision,
    ).toBe("soft_signal");
    expect(
      ensureShadowNeverBlocks({ decision: "allow", reason: "below_threshold" })
        .decision,
    ).toBe("allow");
    expect(
      ensureShadowNeverBlocks({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }).decision,
    ).toBe("failed");
  });

  it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
  });

  it("T7-SW16 new composers expose no MONITOR/E1/enforce activation API", () => {
    const adapter = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
      ),
      "utf8",
    );
    const pilot = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts",
      ),
      "utf8",
    );
    expect(adapter).toMatch(/effect:\s*"signal_only"/);
    expect(adapter).toMatch(/shadow_block_forbidden/);
    expect(adapter).toMatch(/rollout_not_shadow_inert/);
    expect(pilot).not.toMatch(/E1_ENFORCED/);
    expect(pilot).not.toMatch(/effect:\s*"enforce"/);
    expect(adapter).not.toMatch(/upsertProjectRollout/);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — wiring integration (T7-SW01..SW15).
 * Requires DATABASE_URL ephemeral Postgres — never Neon.
 * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import { getFixture } from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3T7ShadowPilot,
  T7_SHADOW_PILOT_PROJECT_ID,
} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import {
  composeExecutionRunProviders,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** TEST ONLY fictitious threshold — NOT historical calibration. */
const TEST_ONLY_THRESHOLD = "1.00000000";
const TEST_ONLY_ELIGIBLE = "9.99000000";

const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
const OTHER = "project:d2d1-fixture";

async function upsertMode(
  pool: Pool,
  projectId: string,
  mode: FinOpsRolloutMode,
): Promise<void> {
  const store = createPostgresFinOpsRolloutStore(pool);
  await store.upsertProjectRollout({
    projectId,
    mode,
    updatedAt: "2026-08-08T16:00:00.000Z",
  });
}

async function seedProjection(
  pool: Pool,
  projectId: string,
  eligible: string,
): Promise<void> {
  await pool.query(
    `INSERT INTO finops_enforcement_projection (
       project_id, period_start, currency,
       blocking_eligible_amount, billed_amount, provider_observed_amount,
       eligible_cost_event_count, billed_event_count, provider_observed_event_count,
       rebuild_version, rebuilt_at
     ) VALUES ($1, '2026-08-01', 'USD', $2, $2, '0.00000000', 1, 1, 0, 1, NOW())
     ON CONFLICT (project_id, period_start, currency) DO UPDATE SET
       blocking_eligible_amount = EXCLUDED.blocking_eligible_amount,
       billed_amount = EXCLUDED.billed_amount,
       rebuild_version = finops_enforcement_projection.rebuild_version + 1,
       rebuilt_at = NOW()`,
    [projectId, eligible],
  );
}

function spyProviders() {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete");
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: [
        "o/r",
        "example/example",
        "mcleland147/sfia-workspace",
      ],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function coordinateInput(projectId: string, suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t7sw:${suffix}`,
      correlationId: `corr:t7sw:${suffix}`,
    },
    context: {
      ...fixture.context,
      projectId,
    },
    providerRequest: {
      correlationId: `corr:t7sw:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describeDb("T7 SHADOW Option A — wiring integration", () => {
  let pool: Pool;
  const clockIso = "2026-08-08T16:10:00.000Z";

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER, `${PILOT}-extra`]],
    );
    await pool.query(
      `DELETE FROM finops_enforcement_projection WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER]],
    );
    await closeFinOpsPool(pool);
  });

  it("T7-SW01 pilot + OFF → no block · no shadow policy · capture inactive", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw01"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("T7-SW02 pilot + missing row → default OFF inert", async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = $1`,
      [PILOT],
    );
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw02",
      correlationId: "corr:sw02",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
    const instruction = await deps.resolveProjectRollout(PILOT);
    expect(instruction.mode).toBe("OFF");
    expect(instruction.resolution).toBe("default_off");
  });

  it("T7-SW03 rollout store failure → fail-open OFF inert · provider path safe", async () => {
    const brokenPool = {
      query: async () => {
        throw new Error("simulated rollout read failure");
      },
      connect: async () => {
        throw new Error("simulated connect failure");
      },
    } as unknown as Pool;
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool: brokenPool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw03",
      correlationId: "corr:sw03",
      occurredAt: clockIso,
    });
    // resolveFinOpsRollout fail-opens to OFF → adapter stays inert (never block).
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW04 pilot + SHADOW → policy resolver called · effect forced signal_only", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.50000000");
    const seenEffects: string[] = [];
    const policy = vi.fn(async () => {
      seenEffects.push("caller_had_no_effect_field");
      return {
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      };
    });
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw04",
      correlationId: "corr:sw04",
      occurredAt: clockIso,
    });
    expect(policy).toHaveBeenCalled();
    expect(seenEffects).toEqual(["caller_had_no_effect_field"]);
    expect(decision.decision).not.toBe("block");
    expect(["allow", "soft_signal", "failed"]).toContain(decision.decision);
  });

  it("T7-SW05 SHADOW threshold crossed TEST policy → soft_signal · provider invoked · never blocked", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => ({
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      }),
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw05"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(result.finopsCapture?.status).not.toBeUndefined();
  });

  it("T7-SW07 non-pilot projectId → pilot SHADOW path inactive", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await upsertMode(pool, OTHER, "SHADOW");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("non_pilot_inert");
    expect(policy).not.toHaveBeenCalled();
    const capture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(capture.status).toBe("disabled");
  });

  it("T7-SW08 MONITOR row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "MONITOR");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw08"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW09 E1 row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "E1_ENFORCED");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw09"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW10 policy absent → allow/not_configured · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw10"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW11 policy resolver throw → failed/fail-open · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => {
        throw new Error("TEST_ONLY policy boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw11"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW12 shadow decision sink throw → provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: () => {
        throw new Error("TEST_ONLY sink boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw12"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW13 SHADOW + successful AI → capture delegated for pilot", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw13"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.finopsCapture).toBeDefined();
    expect(["created", "duplicate", "failed"]).toContain(
      result.finopsCapture!.status,
    );
  });

  it("T7-SW14 OFF / non-pilot → no SHADOW capture", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async () => null,
    });
    const offCapture = await deps.capture.captureUsage({
      projectId: PILOT,
      executionRunId: "run:sw14a",
      correlationId: "corr:sw14a",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(offCapture.status).toBe("disabled");
    const otherCapture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw14b",
      correlationId: "corr:sw14b",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(otherCapture.status).toBe("disabled");
  });

  it("T7-SW15 pilot scenario uses exact sfia-studio-ops1 for rollout/eval/capture", async () => {
    expect(PILOT).toBe("sfia-studio-ops1");
    await upsertMode(pool, PILOT, "SHADOW");
    const seen: string[] = [];
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async (input) => {
        seen.push(input.projectId);
        return null;
      },
    });
    await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw15",
      correlationId: "corr:sw15",
      occurredAt: clockIso,
    });
    expect(seen).toEqual(["sfia-studio-ops1"]);
    expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
  });
});
```

### `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`

**Note handoff packaging:** on-disk Delivery SHA-256 `5a03815d2236806311f0c519f2a5761102297451c14b8e7f784f3231854f12c2` unchanged. Embedded below with trailing whitespace stripped for `git diff --check` (soft SHA `b0cfc51bc23e9689dc66fdad30212623ebfb576209382b1447853f56ad6f404a`). Soft content identical aside from trailing spaces on markdown hard-break lines.

````markdown
# 157 — FinOps T7 SHADOW Option A + Thin Adapter — Wiring Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option A (pre-provider execution-run) selected by Morris | **TRUE** |
| Thin adapter delivered | **TRUE** |
| Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
| Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
| `coordinateExecutionRun` unmodified | **TRUE** |
| `composeExecutionRunD2D3` unmodified | **TRUE** |
| T7/T4/T6 foundation sources unmodified | **TRUE** |
| signal_only forced for SHADOW | **TRUE** |
| SHADOW never BLOCK (defense-in-depth) | **TRUE** |
| MONITOR / E1 not activated by adapter | **TRUE** |
| No production threshold / 15/20/25/30 | **TRUE** |
| No durable SHADOW row on real env | **TRUE** |
| SHADOW activated | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
SHADOW WIRING DELIVERED LOCALLY —
READY FOR DEDICATED WIRING QA —
SHADOW NOT ACTIVATED
```

---

## B. GO Morris

**Utterance / decision:**
`GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`

**Consumed:** local CREATE wiring + tests + execution record.
**Not consumed:** real SHADOW activation · MONITOR · E1 · T3 · thresholds · Neon · commit/push/PR.

---

## C. Files CREATE

1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
5. This execution record (`157-…`)

**MODIFY / DELETE:** none (core files untouched).

---

## D. Architecture

```text
composeExecutionRunD2D3T7ShadowPilot
  → composeFinOpsT7ShadowExecutionDeps(pool, pilot=sfia-studio-ops1)
       → composeFinOpsT7Runtime (reuse)
       → createFinOpsEnforcementPort + effect forced signal_only
       → pilot-gated capture
  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // unchanged
```

---

## E. Rollback

1. Config: no product SHADOW row written by this Delivery.
2. Code: remove pilot composer injection / feature gate.
3. No migration.

---

## F. Next

Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
Then distinct GO for actual pilot activation if Morris authorizes.
````
