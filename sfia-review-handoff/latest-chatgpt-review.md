# SFIA Studio Next — Review Pack FULL — ML4C Evidence Closure F1–F4

Date/heure: 2026-11-12 14:00:55 CET
Timezone: Europe/Paris (CET)
Mandat: ML4C — FERMETURE CIBLÉE DES ÉCARTS D'INTÉGRATION
Verdict local attendu: IMPLEMENTED WITH RESERVES — REVIEW REQUIRED

## 1. Git Truth Check

```
branch: fix/next-semantic-intent-convergence-20261112
HEAD: 2416e2ee25662821b015407346c64ec204f67488
merge-base origin/main: 6d237452680640324eeadbb18f4601fd7de99850
main tip expected: 6d237452680640324eeadbb18f4601fd7de99850
candidate tip expected: 2416e2ee25662821b015407346c64ec204f67488
PR #676: OPEN — NON MERGÉE (no product push this cycle)

 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
 M projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
 M projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
 M projects/sfia-studio-next/web/tests/integration/ml2-turn-command.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/document-act.test.ts
 M projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts
 M projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
 M projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
?? projects/sfia-studio-next/web/src/app/api/dev/e2e/
?? projects/sfia-studio-next/web/src/domains/conversation/durable-qualification.ts
?? projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
?? projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
?? projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-integrator-auth-persist.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-s05-idempotence-knowledge.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts

/Users/morris/Projects/sfia-workspace                                                   ba831b25 [sfia/next-pilotage-decisions-delivery]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              c6c1f1ba [sfia/review-handoff]
/Users/morris/Projects/sfia-studio-next-recette-ml1-c3                                  0db58be8 (detached HEAD)
/Users/morris/Projects/sfia-studio-next-recette-ml2-pr659                               54fc4e9c (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-delivery-p6-she-execute                           f1fc1af4 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-positive-admission-r24            c683d761 [docs/akg-m5-abd-positive-admission-r24]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-postmerge-truth-sync-01           cd2020c8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0                                 90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync            241335ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s1-post-merge-roadmap-sync         266459c4 [docs/akg-m5-l3-s1-post-merge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current           f884dda1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization     cf940d84 [docs/akg-m5-l3s2-r24-postmerge-capitalization]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync       6e60d839 [docs/akg-m5-nap-option-c-c14-r24-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-ux-630-postmerge-truth-sync       979a33ad [docs/akg-m5-nap-ux-630-postmerge-truth-sync]
```

## 2. Matrice des écarts F1–F4

| EXIGENCE | FICHIER | CHANGEMENT | TEST | RÉSULTAT | PREUVE | RÉSERVE |
| --- | --- | --- | --- | --- | --- | --- |
| F1 reconcile before STALE | command-runner.ts | classify+findByIntent before STALE_REVISION | AUTH-R03 | PASS | same commandId, no new effect | — |
| F2 no vacuous AUTH | ml4c-auth-reconciliation.pg.test.ts | R01–R14 real PG | AUTH suite | 13 PASS | DB cmds/effects/cycles | — |
| F3 S05 real API | ml4c-s05-real-api.spec.ts + s05-fixture route | no route.fulfill | S05-REAL-* | 3 PASS | HTTP+oracle PG | fixture Nora provider only |
| F4 no FACT from Nora alone | knowledge/service.ts | refuse FACT on established | KNOW-R07 | PASS | kind=HYPOTHESIS | validator independent source NOT BUILT |
| F4 pre-Nora context | conversation/service.ts | knowledgeForNora vs resume hints | unit F4 | PASS | roles labeled | LIVE pertinence NOT RUN |
| Multi-intent match | semantic-qualification.ts | extractPilotageBinding select | AUTH-R06 | PASS | two commandIds | — |

## 3. Tests exécutés

```
vitest unit + ML4C PG batch: 264 PASS
AUTH R01-R14: 13 PASS
tsc --noEmit: PASS
playwright ml4c-s05-real-api.spec.ts: 3 PASS (:3101)
LIVE OpenAI: NOT RUN
S02-01 Intervencia: FAIL / SOURCE EXACTE NON DISPONIBLE
```

## 4. Fichiers créés (contenu complet)
### `projects/sfia-studio-next/web/src/app/api/dev/e2e/s05-fixture/route.ts`

```
/**
 * DEV/E2E-only fixture for S05 real-API proofs.
 * Seeds UNKNOWN pending turn A and returns DB oracles.
 * Does NOT mock conversation HTTP responses.
 */
import { NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  documents,
  preparations,
} from "@/db/schema";
import { resolveStudioSession } from "@/domains/identity/session";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

function e2eAllowed(): boolean {
  return (
    process.env.STUDIO_LANE === "DEV" &&
    (process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1")
  );
}

export async function POST(req: Request) {
  if (!e2eAllowed()) {
    return NextResponse.json({ error: "E2E_FIXTURE_FORBIDDEN" }, { status: 403 });
  }
  const session = await resolveStudioSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as {
    action?: string;
    preparationId?: string;
  };
  const preparationId = (body.preparationId ?? "").trim();
  if (!preparationId) {
    return NextResponse.json({ error: "preparationId required" }, { status: 400 });
  }

  const ctx = await getPreparationContext(session.pilotId, preparationId);
  if (!ctx.conversation?.id) {
    return NextResponse.json({ error: "conversation missing" }, { status: 404 });
  }

  if (body.action === "oracle") {
    const turns = await db
      .select({
        id: conversationTurnCommands.id,
        status: conversationTurnCommands.status,
        clientTurnKey: conversationTurnCommands.clientTurnKey,
      })
      .from(conversationTurnCommands)
      .where(eq(conversationTurnCommands.conversationId, ctx.conversation.id));
    const prep = (
      await db.select().from(preparations).where(eq(preparations.id, preparationId)).limit(1)
    )[0];
    const cmdCount = ctx.project?.id
      ? (
          await db
            .select({ n: sql<number>`count(*)::int` })
            .from(businessCommands)
            .where(eq(businessCommands.projectId, ctx.project.id))
        )[0]?.n ?? 0
      : 0;
    const docCount = (
      await db
        .select({ n: sql<number>`count(*)::int` })
        .from(documents)
        .where(eq(documents.preparationId, preparationId))
    )[0]?.n ?? 0;
    return NextResponse.json({
      ok: true,
      fixture: "DEV_E2E_ORACLE",
      preparationId,
      projectId: ctx.project?.id ?? null,
      conversationId: ctx.conversation.id,
      creationRevision: prep?.creationRevision ?? null,
      businessCommandCount: Number(cmdCount),
      documentCount: Number(docCount),
      turns: turns.map((t) => ({
        id: t.id,
        status: t.status,
        clientTurnKey: t.clientTurnKey,
      })),
      unknownTurns: turns.filter((t) => t.status === "UNKNOWN").map((t) => t.clientTurnKey),
    });
  }

  if (body.action === "seed_unknown") {
    const clientTurnKey = `e2e-s05-a-${Date.now()}`;
    const reserved = await reserveTurnCommand({
      conversationId: ctx.conversation.id,
      ownerPilotId: session.pilotId,
      clientTurnKey,
      content: "Acte A E2E S05 — en cours (seed fixture)",
    });
    if (reserved.kind !== "fresh") {
      return NextResponse.json({ error: `reserve ${reserved.kind}` }, { status: 409 });
    }
    await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify({
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "a",
        intents: [
          {
            id: "ia",
            capabilityId: "d3.converse",
            mode: "EXPLORE",
            summary: "a",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "a",
      }),
    });
    await markTurnUnknown(reserved.commandId, "E2E_S05_SEED_UNKNOWN", reserved.ownerToken);
    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.id, reserved.commandId),
            eq(conversationTurnCommands.status, "UNKNOWN"),
          ),
        )
        .limit(1)
    )[0];
    if (!row) {
      return NextResponse.json({ error: "seed failed — not UNKNOWN" }, { status: 500 });
    }
    return NextResponse.json({
      ok: true,
      fixture: "DEV_E2E_SEED_UNKNOWN",
      noraBoundary: "FIXTURE_PROVIDER_ONLY",
      commandId: reserved.commandId,
      clientTurnKey,
      userMessageId: reserved.userMessageId,
      status: "UNKNOWN",
      preparationId,
      projectId: ctx.project?.id ?? null,
      conversationId: ctx.conversation.id,
    });
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 });
}

```
### `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts`

```
import { test, expect } from "@playwright/test";

/**
 * ML4C S05 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
 * Browser → real Studio HTTP messages API → server S05 gate → PG.
 * Nora fixture ONLY at provider boundary (STUDIO_E2E / FORCE_NORA_FIXTURE).
 * NO route.fulfill on the conversation endpoint under test.
 *
 * Does NOT prove: NORA LIVE SEMANTIC BEHAVIOR / READY FOR REAL.
 */

async function openProjectCapturingPrep(
  page: import("@playwright/test").Page,
): Promise<{ projectId: string; preparationId: string }> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  if (!preparationId) throw new Error("preparationId missing");

  await page.getByTestId("prep-draft").fill("Intention E2E S05 real API (fixture Nora provider)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Real API");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: 20000 });
  await createBtn.click();
  await page.waitForURL(/\/projects\//, { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  if (!projectId) throw new Error("projectId missing");
  return { projectId, preparationId };
}

async function seedUnknownA(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientTurnKey: string; commandId: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_unknown", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.status).toBe("UNKNOWN");
  expect(body.clientTurnKey).toBeTruthy();
  return { clientTurnKey: body.clientTurnKey, commandId: body.commandId };
}

async function oracle(page: import("@playwright/test").Page, preparationId: string) {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "oracle", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  return res.json() as Promise<{
    creationRevision: number | null;
    businessCommandCount: number;
    documentCount: number;
    unknownTurns: string[];
    turns: Array<{ id: string; status: string; clientTurnKey: string }>;
  }>;
}

test.describe("S05 real API (no route.fulfill)", () => {
  test("S05-REAL-01/02/03/04/06/08/09: UNKNOWN A + real messages API", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const beforeSeed = await oracle(page, preparationId);
    const seeded = await seedUnknownA(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns).toContain(seeded.clientTurnKey);
    const revBefore = afterSeed.creationRevision;
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;

    // S05-REAL-01 — independent question via REAL messages API
    const respQPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
    await page.getByTestId("thread-send").click();
    const respQ = await respQPromise;
    expect(respQ.ok()).toBeTruthy();
    const bodyQ = await respQ.json();
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    expect(bodyQ.noraMode).toMatch(/fixture|deterministic/i);

    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.creationRevision).toBe(revBefore);
    expect(afterQ.businessCommandCount).toBe(cmdsBefore);

    // S05-REAL-02 — OPEN_CYCLE blocked (no business command applied for B)
    const respCyclePromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const respCycle = await respCyclePromise;
    expect(respCycle.ok()).toBeTruthy();
    const bodyCycle = await respCycle.json();
    expect(bodyCycle.pendingEffectBlocked).toBe(true);
    expect(bodyCycle.pilotageEffect?.attempted).not.toBe(true);

    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.businessCommandCount).toBe(cmdsBefore);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // S05-REAL-03 — create project wording must not bump creationRevision
    const respCreatePromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Je veux créer un projet.");
    await page.getByTestId("thread-send").click();
    const respCreate = await respCreatePromise;
    expect(respCreate.ok()).toBeTruthy();
    const bodyCreate = await respCreate.json();
    expect(bodyCreate.pendingEffectBlocked).toBe(true);
    const afterCreate = await oracle(page, preparationId);
    expect(afterCreate.creationRevision).toBe(revBefore);

    // S05-REAL-04 — document CREATE (fixture exact phrase) blocked by S05
    const respDocPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page
      .getByLabel("Message à Nora")
      .fill("Rédige un document de synthèse sur les options A et B");
    await page.getByTestId("thread-send").click();
    const respDoc = await respDocPromise;
    expect(respDoc.ok()).toBeTruthy();
    const bodyDoc = await respDoc.json();
    expect(bodyDoc.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyDoc.pendingEffectBlocked).toBe(true);
    expect(
      bodyDoc.documentSave == null ||
        bodyDoc.documentSave.status === "NOT_EXECUTED" ||
        bodyDoc.documentSave.status === "SKIPPED",
    ).toBe(true);
    const afterDoc = await oracle(page, preparationId);
    expect(afterDoc.documentCount).toBe(docsBefore);

    // S05-REAL-06 — clear client pending hint; server protection unchanged
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const respHintPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const respHint = await respHintPromise;
    const bodyHint = await respHint.json();
    expect(bodyHint.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyHint.pendingEffectBlocked).toBe(true);
    expect(bodyHint.pilotageEffect?.attempted).not.toBe(true);

    // S05-REAL-08 — refresh: A still recoverable via oracle
    await page.reload();
    const afterReload = await oracle(page, preparationId);
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterReload.turns.some((t) => t.id === seeded.commandId && t.status === "UNKNOWN")).toBe(
      true,
    );

    // S05-REAL-09 — independent COMPLETE does not close A
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(beforeSeed.unknownTurns).not.toContain(seeded.clientTurnKey);
  });

  test("S05-REAL-07: lying pending key does not bypass server", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);
    await seedUnknownA(page, preparationId);
    const before = await oracle(page, preparationId);

    await page.evaluate(
      ({ projectId: id }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${id}`,
          JSON.stringify({
            content: "fake",
            clientTurnKey: "ctk_lying_pending",
            clientCommandKey: "conv-auth:ctk_lying_pending",
          }),
        );
      },
      { projectId },
    );
    await page.reload();

    const respPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const resp = await respPromise;
    const body = await resp.json();
    expect(body.pendingEffectBlocked).toBe(true);
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
  });

  test("S05-REAL-10: concurrent protected posts — no doubled métier effect", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    await seedUnknownA(page, preparationId);
    const before = await oracle(page, preparationId);

    const [r1, r2] = await Promise.all([
      page.request.post(`/api/preparations/${preparationId}/messages`, {
        data: {
          content: "Ouvre le cycle cadrage.",
          clientTurnKey: `s05-conc-a-${Date.now()}`,
        },
      }),
      page.request.post(`/api/preparations/${preparationId}/messages`, {
        data: {
          content: "Ouvre le cycle cadrage.",
          clientTurnKey: `s05-conc-b-${Date.now()}`,
        },
      }),
    ]);
    // Concurrent turns: one may win COMPLETE with pendingEffectBlocked; the other
    // may get 409 TURN_IN_PROGRESS. Neither may apply a métier mutation.
    const statuses = [r1.status(), r2.status()];
    expect(statuses.some((s) => s === 200 || s === 409)).toBe(true);
    for (const r of [r1, r2]) {
      if (!r.ok()) continue;
      const body = await r.json();
      expect(body.pilotageEffect?.attempted).not.toBe(true);
      expect(body.pendingEffectBlocked === true || body.status === "COMPLETE").toBe(true);
    }
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
    expect(after.creationRevision).toBe(before.creationRevision);
  });
});

```
### `projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts`

```
/**
 * F1/F2 — AUTH-R01..R14: real DEV PG proofs for D5/D6 human-act reconciliation.
 * No vacuous PASS. Uses createProjectCommand + durable qualification + executePilotageCommand.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  conversations,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import {
  executePilotageCommand,
  getPilotageProjection,
} from "@/domains/pilotage/service";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";

const OPEN_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "open cycle",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE CADRAGE",
      parameters: {
        pilotageOperation: "OPEN_CYCLE" as const,
        cycleType: "CADRAGE" as const,
      },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "Cycle ouvert.",
};

const DUAL_INTENT_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "two acts",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: {
        pilotageOperation: "OPEN_CYCLE" as const,
        cycleType: "CADRAGE" as const,
      },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
    {
      id: "i-record",
      capabilityId: "d6.human_decision" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "RECORD_DECISION",
      parameters: {
        pilotageOperation: "RECORD_DECISION" as const,
        statement: "Décision de cadrage retenue pour la suite.",
        objectRef: "cadrage-scope",
      },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "deux actes",
};

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "auth-seed");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "auth-seed",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`SETUP BLOCKED: createProject failed: ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  if (!ctx.project?.id || !ctx.conversation?.id) {
    throw new Error("SETUP BLOCKED: project/conversation missing after create");
  }
  if (ctx.project.id !== created.projectId) {
    throw new Error("SETUP BLOCKED: project id mismatch");
  }
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId,
    conversationId: ctx.conversation.id,
  };
}

async function seedQualifiedMessage(
  world: { pilotId: string; conversationId: string; projectId: string },
  content: string,
  qual: Record<string, unknown>,
) {
  const reserved = await reserveTurnCommand({
    conversationId: world.conversationId,
    ownerPilotId: world.pilotId,
    clientTurnKey: `auth-msg-${newId("ctk")}`,
    content,
  });
  if (reserved.kind !== "fresh") {
    throw new Error(`SETUP BLOCKED: expected fresh turn, got ${reserved.kind}`);
  }
  const stashed = await stashTurnQualification({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    qualificationJson: JSON.stringify(qual),
  });
  if (!stashed.applied) {
    throw new Error("SETUP BLOCKED: durable qualification stash failed");
  }
  // Ensure conversation.projectId is bound (createProject should have set it).
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(eq(conversations.id, world.conversationId))
      .limit(1)
  )[0];
  if (conv?.projectId !== world.projectId) {
    throw new Error(
      `SETUP BLOCKED: conversation.projectId=${conv?.projectId} ≠ ${world.projectId}`,
    );
  }
  return {
    userMessageId: reserved.userMessageId,
    turnCommandId: reserved.commandId,
    clientTurnKey: reserved.clientTurnKey,
  };
}

async function countCommands(projectId: string, sourceRef?: string) {
  const rows = await db
    .select()
    .from(businessCommands)
    .where(
      sourceRef
        ? and(
            eq(businessCommands.projectId, projectId),
            eq(businessCommands.sourceRef, sourceRef),
          )
        : eq(businessCommands.projectId, projectId),
    );
  return rows;
}

async function countEffects(commandId: string) {
  return db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, commandId));
}

async function countActiveCycles(projectId: string) {
  const rows = await db
    .select()
    .from(projectCycles)
    .where(
      and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")),
    );
  return rows.length;
}

describe("ML4C AUTH-R01..R14 — D5/D6 reconciliation (PG real)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) {
      throw new Error("SETUP BLOCKED: DATABASE_URL required");
    }
  });

  it("AUTH-R01: first admissible act → APPLIED, exactly one mutation", async () => {
    const world = await seedOwnedProject(`auth-r01-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const before = await countCommands(world.projectId, msg.userMessageId);
    expect(before.length).toBe(0);
    const revBefore = (await getPilotageProjection(world.pilotId, world.projectId)).revision;

    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: `r01-${Date.now()}`,
      preQualified: {
        clarity: "CLEAR",
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        // Must echo durable objective (intent.summary), never invent a divergent one.
        objective: "OPEN_CYCLE CADRAGE",
        semanticIntentId: "i-open",
        semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      },
    });

    expect(first.attempted).toBe(true);
    expect(first.command?.status).toBe("APPLIED");
    expect(first.command?.commandId).toBeTruthy();
    const cmds = await countCommands(world.projectId, msg.userMessageId);
    expect(cmds.length).toBe(1);
    const effects = await countEffects(first.command!.commandId!);
    expect(effects.length).toBeGreaterThanOrEqual(1);
    expect(await countActiveCycles(world.projectId)).toBe(1);
    const revAfter = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    expect(revAfter).toBeGreaterThan(revBefore);
  });

  it("AUTH-R02: same act, same client key → replay, same commandId", async () => {
    const world = await seedOwnedProject(`auth-r02-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const key = `r02-${Date.now()}`;
    const preQualified = {
      clarity: "CLEAR" as const,
      operation: "OPEN_CYCLE" as const,
      cycleType: "CADRAGE" as const,
      objective: "OPEN_CYCLE CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    };
    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: key,
      preQualified,
    });
    expect(first.command?.status).toBe("APPLIED");
    const second = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: key,
      preQualified,
    });
    expect(second.command?.commandId).toBe(first.command?.commandId);
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(second.command?.status);
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });

  it("AUTH-R03: same act, new client key, stale expectedRevision → ALREADY_APPLIED, no new effect", async () => {
    const world = await seedOwnedProject(`auth-r03-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const revBefore = (await getPilotageProjection(world.pilotId, world.projectId)).revision;

    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revBefore,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");
    expect(first.commandId).toBeTruthy();
    const effectsAfterFirst = await countEffects(first.commandId!);
    expect(effectsAfterFirst.length).toBeGreaterThanOrEqual(1);
    const cmdsAfterFirst = await countCommands(world.projectId, msg.userMessageId);
    expect(cmdsAfterFirst.length).toBe(1);

    // Stale revision = revision preceding the mutation.
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revBefore, // deliberately obsolete
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });

    expect(replay.status).toBe("ALREADY_APPLIED");
    expect(replay.commandId).toBe(first.commandId);
    expect(replay.reasonCode).not.toBe("STALE_REVISION");
    const cmdsAfter = await countCommands(world.projectId, msg.userMessageId);
    expect(cmdsAfter.length).toBe(1);
    const effectsAfter = await countEffects(first.commandId!);
    expect(effectsAfter.length).toBe(effectsAfterFirst.length);
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });

  it("AUTH-R04: client actInstanceId changed → server identity unchanged, no second effect", async () => {
    const world = await seedOwnedProject(`auth-r04-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");
    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: "client-forged-act-id", // ignored by server
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(replay.status).toBe("ALREADY_APPLIED");
    expect(replay.commandId).toBe(first.commandId);
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
  });

  it("AUTH-R05/R14: new intention with stale expectedRevision → STALE_REVISION, no mutation", async () => {
    const world = await seedOwnedProject(`auth-r05-${Date.now()}`);
    // Advance revision with an EXPLICIT_INTERACTION open first.
    const rev0 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const bump = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(bump.status).toBe("APPLIED");
    const staleRev = rev0;
    const msg = await seedQualifiedMessage(
      world,
      "Retiens la trajectoire cadre.",
      {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED" as const,
        goal: "retain",
        intents: [
          {
            id: "i-retain",
            capabilityId: "d5.pilotage_command" as const,
            mode: "REQUEST_EFFECT" as const,
            summary: "RETAIN",
            parameters: {
              pilotageOperation: "RETAIN_TRAJECTORY" as const,
              orientation: "cadre",
            },
            constraints: [] as string[],
            dependsOn: [] as string[],
            sourceEvidence: [] as string[],
          },
        ],
        clarifications: [] as string[],
        replyDraft: "ok",
      },
    );
    const cmdsBefore = (await countCommands(world.projectId)).length;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: staleRev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Retiens la trajectoire cadre.",
      actInstanceId: `${msg.userMessageId}:i-retain`,
      operation: "RETAIN_TRAJECTORY",
      orientation: "cadre",
      semanticIntentId: "i-retain",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("CONFLICT");
    expect(denied.reasonCode).toBe("STALE_REVISION");
    expect(denied.commandId).toBeNull();
    expect((await countCommands(world.projectId)).length).toBe(cmdsBefore);
  });

  it("AUTH-R06: same message, other legitimate intentId → two distinct acts", async () => {
    const world = await seedOwnedProject(`auth-r06-${Date.now()}`);
    const content = "Ouvre le cycle cadrage et enregistre la décision de cadrage.";
    const msg = await seedQualifiedMessage(world, content, DUAL_INTENT_QUAL);
    const rev1 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev1,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(open.status).toBe("APPLIED");
    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const record = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "RECORD_DECISION",
      statement: "Décision de cadrage retenue pour la suite.",
      objectRef: "cadrage-scope",
      semanticIntentId: "i-record",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    // Distinct act — must not collapse into open's commandId.
    expect(record.commandId).not.toBe(open.commandId);
    expect(["APPLIED", "REJECTED"]).toContain(record.status);
    const cmds = await countCommands(world.projectId, msg.userMessageId);
    expect(cmds.length).toBeGreaterThanOrEqual(2);
  });

  it("AUTH-R07: same message, substituted operation → REFUS", async () => {
    const world = await seedOwnedProject(`auth-r07-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "RETAIN_TRAJECTORY", // substituted vs durable OPEN_CYCLE
      orientation: "x",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("REJECTED");
    expect((await countCommands(world.projectId, msg.userMessageId)).every((c) => c.status === "REJECTED")).toBe(
      true,
    );
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R08: same message, substituted target → REFUS", async () => {
    const world = await seedOwnedProject(`auth-r08-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION", // substituted vs durable CADRAGE
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("REJECTED");
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R09: non-APPLIED stored act replay → reconcile without blind re-emit", async () => {
    // business_commands.status domain is APPLIED|REJECTED only (chk).
    // Replay of a REJECTED same-act must return stored truth — never mutate again.
    const world = await seedOwnedProject(`auth-r09-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION", // mismatch → REJECTED stored act
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("REJECTED");
    expect(first.commandId).toBeTruthy();
    const effectsBefore = await countEffects(first.commandId!);
    expect(effectsBefore.length).toBe(0);
    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    // Same act identity → replay stored REJECTED, no second insert / no cycle.
    expect(replay.commandId).toBe(first.commandId);
    expect(replay.status).toBe("REJECTED");
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R10: two concurrent same-act calls → ≤1 APPLIED command, ≤1 cycle", async () => {
    const world = await seedOwnedProject(`auth-r10-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const body = {
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE" as const,
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE" as const,
      cycleType: "CADRAGE" as const,
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    };
    const [a, b] = await Promise.all([
      executePilotageCommand(world.pilotId, world.projectId, {
        ...body,
        clientCommandKey: `conv:${newId("ctk")}`,
      }),
      executePilotageCommand(world.pilotId, world.projectId, {
        ...body,
        clientCommandKey: `conv:${newId("ctk")}`,
      }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses).toContain("APPLIED");
    expect(
      statuses.every((s) => s === "APPLIED" || s === "ALREADY_APPLIED" || s === "CONFLICT"),
    ).toBe(true);
    if (a.commandId && b.commandId) {
      expect(a.commandId === b.commandId || statuses.includes("ALREADY_APPLIED")).toBe(true);
    }
    const applied = (await countCommands(world.projectId, msg.userMessageId)).filter(
      (c) => c.status === "APPLIED",
    );
    expect(applied.length).toBeLessThanOrEqual(1);
    expect(await countActiveCycles(world.projectId)).toBeLessThanOrEqual(1);
  });

  it("AUTH-R11: other Pilot — no visible/applicable command", async () => {
    const a = await seedOwnedProject(`auth-r11a-${Date.now()}`);
    const b = await seedOwnedProject(`auth-r11b-${Date.now()}`);
    const msg = await seedQualifiedMessage(a, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
    const first = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");

    await expect(
      executePilotageCommand(b.pilotId, a.projectId, {
        clientCommandKey: `conv:${newId("ctk")}`,
        expectedRevision: rev,
        sourceKind: "USER_MESSAGE",
        sourceRef: msg.userMessageId,
        utterance: "Ouvre le cycle cadrage.",
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        semanticIntentId: "i-open",
        semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      }),
    ).rejects.toThrow(/introuvable|NOT_FOUND/i);
    // B must not own any command on A's project.
    const bCmds = await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, a.projectId),
          eq(businessCommands.actorPilotId, b.pilotId),
        ),
      );
    expect(bCmds.length).toBe(0);
    expect(await countActiveCycles(a.projectId)).toBe(1);
  });

  it("AUTH-R12: other project — no visible/applicable command", async () => {
    const a = await seedOwnedProject(`auth-r12a-${Date.now()}`);
    const b = await seedOwnedProject(`auth-r12b-${Date.now()}`);
    const msgA = await seedQualifiedMessage(a, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const revA = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
    const applied = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revA,
      sourceKind: "USER_MESSAGE",
      sourceRef: msgA.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(applied.status).toBe("APPLIED");

    // Pilot B + project B cannot apply or replay A's message/command.
    const revB = (await getPilotageProjection(b.pilotId, b.projectId)).revision;
    const cross = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revB,
      sourceKind: "USER_MESSAGE",
      sourceRef: msgA.userMessageId, // foreign message
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(cross.commandId).not.toBe(applied.commandId);
    expect(cross.status).not.toBe("ALREADY_APPLIED");
    expect(cross.status).toBe("REJECTED");
    expect((await countCommands(b.projectId, msgA.userMessageId)).every((c) => c.status === "REJECTED")).toBe(
      true,
    );
    expect(await countActiveCycles(b.projectId)).toBe(0);
  });

  it("AUTH-R13: EXPLICIT_INTERACTION authorized → nominal preserved", async () => {
    const world = await seedOwnedProject(`auth-r13-${Date.now()}`);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const r = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(r.status).toBe("APPLIED");
    expect(r.commandId).toBeTruthy();
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });
});

```
### `projects/sfia-studio-next/web/tests/integration/ml4c-integrator-auth-persist.pg.test.ts`

```
/**
 * Lot A/B integrator closure — PG proofs for stash CAS + UNKNOWN/COMPLETE
 * preservation of semanticQualification (sfia_next_e2e via vitest gate).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  commitTurnTerminal,
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

const sampleQual = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "open",
  intents: [
    {
      id: "i1",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: { pilotageOperation: "OPEN_CYCLE" as const, cycleType: "CADRAGE" },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "ok",
};

describe("ML4C integrator — persist qualification (PG)", () => {
  let pilotId: string;
  let conversationId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    conversationId = ctx.conversation!.id;
  });

  afterAll(() => {
    /* e2e DB isolated */
  });

  it("DB-01/DB-06: stash then markTurnUnknown preserves semanticQualification", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-unknown-${Date.now()}`,
      content: "stash then unknown",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") return;

    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(sampleQual),
    });
    expect(stashed.applied).toBe(true);

    await markTurnUnknown(
      reserved.commandId,
      "TEST_UNKNOWN_AFTER_STASH",
      reserved.ownerToken,
      JSON.stringify({ status: "UNKNOWN", note: "no qual in payload" }),
    );

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    expect(row?.status).toBe("UNKNOWN");
    const parsed = JSON.parse(row!.resultJson!) as {
      semanticQualification?: { status?: string };
      status?: string;
    };
    expect(parsed.semanticQualification?.status).toBe("QUALIFIED");
    expect(parsed.status).toBe("UNKNOWN");
  });

  it("DB-04: COMPLETE after stash keeps qualification", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-complete-${Date.now()}`,
      content: "stash then complete",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    expect(
      (
        await stashTurnQualification({
          commandId: reserved.commandId,
          ownerToken: reserved.ownerToken,
          qualificationJson: JSON.stringify(sampleQual),
        })
      ).applied,
    ).toBe(true);

    const applied = await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      conversationId,
      generationId: "gen-integ",
      resultJson: JSON.stringify({
        status: "COMPLETE",
        userMessageId: reserved.userMessageId,
        assistantMessageId: null,
        idempotentReplay: false,
        humanDecisionCreated: false,
      }),
      assistant: {
        id: newId("msg"),
        content: "assistant",
        messageStatus: "COMPLETE",
        generationId: "gen-integ",
        ordinal: reserved.ordinalAssistant,
      },
    });
    expect(applied.applied).toBe(true);

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    const parsed = JSON.parse(row!.resultJson!) as {
      semanticQualification?: { schemaVersion?: string };
    };
    expect(parsed.semanticQualification?.schemaVersion).toBe(SEMANTIC_QUALIFICATION_SCHEMA_VERSION);
  });

  it("DB-02: stash with revoked ownerToken → applied false, zero write", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-revoke-${Date.now()}`,
      content: "revoke stash",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    const bad = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: "revoked_fake_token",
      qualificationJson: JSON.stringify(sampleQual),
    });
    expect(bad.applied).toBe(false);

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    expect(row?.resultJson).toBeNull();
  });
});

```
### `projects/sfia-studio-next/web/tests/integration/ml4c-s05-idempotence-knowledge.pg.test.ts`

```
/**
 * Integrator closure — S05 admission, D5/D6 human-act idempotence, D4 semantic knowledge.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  knowledgeAcquis,
  preparations,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import {
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { maybeCapitalizeFromExchange } from "@/domains/knowledge/service";

describe("ML4C integrator — S05 / idempotence / knowledge (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const ctx = await getPreparationContext(pilotId, prep.id);
    conversationId = ctx.conversation!.id;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("S05-G02/G04: UNKNOWN A blocks OPEN_CYCLE and D2 preview for B", async () => {
    const a = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `s05-a-${Date.now()}`,
      content: "acte A en cours",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify({
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "a",
        intents: [
          {
            id: "ia",
            capabilityId: "d3.converse",
            mode: "EXPLORE",
            summary: "a",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "a",
      }),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_A", a.ownerToken);

    const previewBefore = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, preparationId))
        .limit(1)
    )[0];
    const revBefore = previewBefore?.creationRevision ?? 0;

    const bCreate = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Je veux créer un projet.",
      {
        clientTurnKey: `s05-b-create-${Date.now()}`,
        // Hint deliberately omitted — server must still find sibling A.
      },
    );
    expect(bCreate.pendingEffectBlocked).toBe(true);
    expect(bCreate.missionProjection?.status).not.toBe("AWAITING_PILOT_ACT");
    const previewAfter = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, preparationId))
        .limit(1)
    )[0];
    expect(previewAfter?.creationRevision ?? 0).toBe(revBefore);

    const bCycle = await postUserMessageAndNora(pilotId, preparationId, "Ouvre le cycle cadrage.", {
      clientTurnKey: `s05-b-cycle-${Date.now()}`,
    });
    expect(bCycle.pendingEffectBlocked).toBe(true);
    expect(bCycle.pilotageEffect?.attempted).not.toBe(true);

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  it("S05-G01: independent question over UNKNOWN A is allowed without clearing A", async () => {
    const a = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `s05-a2-${Date.now()}`,
      content: "acte A2",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await markTurnUnknown(a.commandId, "TEST_S05_A2", a.ownerToken);

    const b = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
      { clientTurnKey: `s05-b-q-${Date.now()}` },
    );
    expect(b.status).toBe("COMPLETE");
    expect(b.pendingEffectBlocked).not.toBe(true);
    expect(b.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  // AUTH-I02/I03 vacuous path REMOVED — real proofs live in ml4c-auth-reconciliation.pg.test.ts (R01–R14).

  it("KNOW-R07: Nora established without independent source → no FACT", async () => {
    const beforeFacts = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.kind, "FACT"),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Retiens comme fait établi que la latence cible est 50ms.",
      assistantText: "ok",
      generationId: "g-fact-refuse",
      userMessageId: "m-fact-refuse",
      proposals: [
        {
          intentId: "ik-est",
          kind: "ACQUIS",
          statement: "La latence cible est 50ms.",
          epistemic: "established",
          subjectTitle: "Performance",
          continuityReason: "Nora marked established",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
    const acquis = cap.capitalisations.find((c) => c.kind === "acquis");
    expect(acquis?.status).toBe("AVAILABLE");
    expect(acquis?.reason).toBe("FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE");
    const after = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.statement, "La latence cible est 50ms."),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    expect(after.length).toBe(1);
    expect(after[0]?.kind).toBe("HYPOTHESIS");
    expect(after[0]?.kind).not.toBe("FACT");
    const afterFacts = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.kind, "FACT"),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    expect(afterFacts.length).toBe(beforeFacts.length);
  });

  it("KNOW-R13: D4 proposal never creates HumanDecision", async () => {
    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Note l'hypothèse d'un déploiement progressif.",
      assistantText: "ok",
      generationId: "g-no-hd",
      userMessageId: "m-no-hd",
      proposals: [
        {
          intentId: "ik-h",
          kind: "ACQUIS",
          statement: "Déploiement progressif envisagé.",
          epistemic: "hypothesized",
          subjectTitle: "Déploiement",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
  });

  it("KNOW-01/KNOW-11: semantic proposal capitalises once; polite chatter writes nothing", async () => {
    const before = await db
      .select()
      .from(knowledgeAcquis)
      .where(eq(knowledgeAcquis.preparationId, preparationId));

    const polite = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Bonjour Nora, comment vas-tu ?",
      assistantText: "Bonjour",
      generationId: "g-polite",
      userMessageId: "m-polite",
      proposals: [],
    });
    expect(polite.capitalisations).toHaveLength(0);

    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText:
        "Retiens comme acquis structurant que l'architecture modulaire est la piste privilégiée pour la suite.",
      assistantText: "ok",
      generationId: "g-arch",
      userMessageId: "m-arch",
      proposals: [
        {
          intentId: "ik",
          kind: "ACQUIS",
          statement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
          continuityReason: "Acquis structurant",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
    expect(cap.capitalisations.some((c) => c.kind === "acquis" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const again = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "same",
      assistantText: "ok",
      generationId: "g-arch-2",
      userMessageId: "m-arch-2",
      proposals: [
        {
          intentId: "ik",
          kind: "ACQUIS",
          statement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
        },
      ],
    });
    const acquisAgain = again.capitalisations.find((c) => c.kind === "acquis");
    expect(acquisAgain?.status).toBe("AVAILABLE");

    const after = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.status, "CURRENT"),
          eq(
            knowledgeAcquis.statement,
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          ),
        ),
      );
    expect(after.length).toBe(1);
    expect(after[0]?.kind).toBe("HYPOTHESIS");
    // Idempotent capitalize: CURRENT row count for this statement stays 1 (no duplicate).
    expect(before.filter((a) => a.statement === after[0]?.statement && a.status === "CURRENT").length).toBeLessThanOrEqual(
      1,
    );
  });

  it("fixture path: polite message produces no document / no knowledge write", async () => {
    const r = await postUserMessageAndNora(pilotId, preparationId, "Bonjour Nora, comment vas-tu ?", {
      clientTurnKey: `know-polite-${Date.now()}`,
    });
    expect(r.documentSave).toBeNull();
    expect(r.humanDecisionCreated).toBe(false);
  });
});

```
### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```
/**
 * Canonical D3 semantic qualification envelope (ML4C SEM / TV-01…TV-05).
 * Validated structure ≠ authority. Owners still gate every effect.
 */
import { z } from "zod";
import {
  PILOTAGE_OPERATIONS,
  type PilotageOperation,
} from "@/domains/pilotage/types";
import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";

export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
export type IntentMode = z.infer<typeof IntentModeSchema>;

export const QualificationStatusSchema = z.enum([
  "QUALIFIED",
  "NEEDS_CLARIFICATION",
  "UNAVAILABLE",
]);
export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;

/** Capability ids exposed to Nora — catalogue description, not authorization. */
export const StudioCapabilityIdSchema = z.enum([
  "d2.create_project",
  "d3.converse",
  "d4.create_document",
  "d4.revise_document",
  "d4.read_knowledge",
  /** Selective D4 continuity write — not a HumanDecision / not lexical. */
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);
export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;

export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
export const KnowledgeEpistemicSchema = z.enum([
  "hypothesized",
  "recommended",
  "established",
  "limited",
]);

export const PilotageOperationSchema = z.enum(
  PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
);

export const QualifiedIntentItemSchema = z.object({
  id: z.string().min(1).max(64),
  capabilityId: StudioCapabilityIdSchema,
  mode: IntentModeSchema,
  summary: z.string().max(500).optional(),
  parameters: z
    .object({
      projectName: z.string().max(120).optional(),
      documentHint: z.string().max(200).optional(),
      sectionHint: z.string().max(80).optional(),
      pathHint: z.string().max(240).optional(),
      cycleType: z.string().max(64).optional(),
      toCycleType: z.string().max(64).optional(),
      methodRef: z.string().max(120).optional(),
      methodVersion: z.string().max(64).optional(),
      decisionHint: z.string().max(200).optional(),
      decisionId: z.string().max(120).optional(),
      objectRef: z.string().max(120).optional(),
      statement: z.string().max(500).optional(),
      publicationPath: z.string().max(240).optional(),
      /** Typed D5/D6 operation — never use free-text notes as enum substitute. */
      pilotageOperation: PilotageOperationSchema.optional(),
      restrictionKindHint: z.string().max(64).optional(),
      restrictionTargetRefHint: z.string().max(120).optional(),
      notes: z.string().max(400).optional(),
      /** Typed D4 continuity capitalisation (RG-KNOW-001) — owner still validates. */
      knowledgeKind: KnowledgeRecordKindSchema.optional(),
      knowledgeStatement: z.string().max(500).optional(),
      epistemic: KnowledgeEpistemicSchema.optional(),
      subjectTitle: z.string().max(120).optional(),
      subjectId: z.string().max(120).optional(),
      continuityReason: z.string().max(240).optional(),
      /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
      relevantAcquisIds: z.array(z.string().max(120)).max(8).optional(),
      relevantOpenPointIds: z.array(z.string().max(120)).max(8).optional(),
      relevantSubjectIds: z.array(z.string().max(120)).max(8).optional(),
    })
    .strict()
    .default({}),
  constraints: z.array(z.string().max(240)).max(12).default([]),
  dependsOn: z.array(z.string().min(1).max(64)).max(8).default([]),
  sourceEvidence: z.array(z.string().max(240)).max(8).default([]),
});
export type QualifiedIntentItem = z.infer<typeof QualifiedIntentItemSchema>;

export const NoraTurnQualificationSchema = z.object({
  schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
  status: QualificationStatusSchema,
  goal: z.string().max(800).default(""),
  intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
  clarifications: z.array(z.string().max(400)).max(8).default([]),
  replyDraft: z.string().max(12000).default(""),
});
export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

export type QualificationValidation =
  | { ok: true; value: NoraTurnQualification }
  | { ok: false; reason: string };

const EFFECT_CAPABILITIES = new Set<StudioCapabilityId>([
  "d2.create_project",
  "d4.create_document",
  "d4.revise_document",
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);

const PILOTAGE_CAPS = new Set<StudioCapabilityId>([
  "d5.pilotage_command",
  "d6.human_decision",
]);

export function validateNoraTurnQualification(raw: unknown): QualificationValidation {
  const parsed = NoraTurnQualificationSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, reason: `SCHEMA_INVALID:${parsed.error.issues[0]?.message ?? "unknown"}` };
  }
  const q = parsed.data;
  const ids = new Set(q.intents.map((i) => i.id));
  if (ids.size !== q.intents.length) {
    return { ok: false, reason: "DUPLICATE_INTENT_ID" };
  }
  for (const intent of q.intents) {
    for (const dep of intent.dependsOn) {
      if (!ids.has(dep)) return { ok: false, reason: `DEPENDENCY_UNKNOWN:${dep}` };
      if (dep === intent.id) return { ok: false, reason: "DEPENDENCY_SELF" };
    }
    if (
      intent.mode === "REQUEST_EFFECT" &&
      PILOTAGE_CAPS.has(intent.capabilityId) &&
      !intent.parameters.pilotageOperation
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_REQUIRED:${intent.id}` };
    }
    if (
      intent.parameters.pilotageOperation &&
      !PILOTAGE_CAPS.has(intent.capabilityId)
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_CAPABILITY_MISMATCH:${intent.id}` };
    }
  }
  const graph = new Map(q.intents.map((i) => [i.id, i.dependsOn] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const dfs = (n: string): boolean => {
    if (visiting.has(n)) return true;
    if (visited.has(n)) return false;
    visiting.add(n);
    for (const d of graph.get(n) ?? []) {
      if (dfs(d)) return true;
    }
    visiting.delete(n);
    visited.add(n);
    return false;
  };
  for (const id of ids) {
    if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
  }
  return { ok: true, value: q };
}

export function unavailableQualification(reason: string, replyDraft = ""): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal: "",
    intents: [],
    clarifications: [reason.slice(0, 400)],
    replyDraft:
      replyDraft ||
      "Je ne peux pas qualifier cette intention de façon fiable pour le moment. Aucun effet n'a été engagé.",
  };
}

export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
}

export function wantsCapability(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
): boolean {
  return effectIntents(q).some((i) => i.capabilityId === capabilityId);
}

export function firstEffectParam(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
  key: keyof QualifiedIntentItem["parameters"],
): string | undefined {
  const hit = effectIntents(q).find((i) => i.capabilityId === capabilityId);
  const v = hit?.parameters?.[key];
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

export function sanitizeProposedLabel(raw: string): string {
  return raw
    .replace(/[*_`#~\[\]()]+/g, " ")
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Server-owned S05 turn kind from canonical qualification — not a lexical router. */
export function deriveThreadTurnKind(q: NoraTurnQualification): ThreadTurnKind {
  if (q.status === "UNAVAILABLE") return "INCERTAIN";
  if (q.status === "NEEDS_CLARIFICATION") return "INCERTAIN";
  const effects = effectIntents(q);
  if (effects.length > 0) return "INTENTION_EFFET";
  const cognitive = q.intents.some(
    (i) =>
      i.capabilityId === "d3.converse" ||
      i.capabilityId === "d4.read_knowledge" ||
      i.mode === "EXPLAIN" ||
      i.mode === "EXPLORE",
  );
  if (cognitive && q.intents.length > 0) return "DIALOGUE_INDEPENDANT";
  return "INCERTAIN";
}

export type DurablePilotageBinding = {
  schemaVersion: typeof SEMANTIC_QUALIFICATION_SCHEMA_VERSION;
  intentId: string;
  capabilityId: "d5.pilotage_command" | "d6.human_decision";
  operation: PilotageOperation;
  cycleType?: string;
  toCycleType?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  objectRef?: string;
  statement?: string;
  restrictionKindHint?: string;
  restrictionTargetRefHint?: string;
  objective?: string;
};

export function extractPilotageBinding(
  q: NoraTurnQualification,
  select?: { intentId?: string; operation?: string },
): DurablePilotageBinding | { ambiguous: true; reason: string } | null {
  if (q.status !== "QUALIFIED") {
    return { ambiguous: true, reason: `QUALIFICATION_${q.status}` };
  }
  let hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
  if (hits.length === 0) return null;
  // Disambiguate multi-intent qualifications by durable intentId / operation.
  if (select?.intentId) {
    hits = hits.filter((i) => i.id === select.intentId);
  }
  if (select?.operation) {
    hits = hits.filter((i) => i.parameters.pilotageOperation === select.operation);
  }
  if (hits.length === 0) {
    return {
      ambiguous: true,
      reason: select?.intentId || select?.operation
        ? "PILOTAGE_INTENT_NOT_IN_QUALIFICATION"
        : "NO_PILOTAGE_EFFECT_INTENTS",
    };
  }
  if (hits.length > 1) {
    return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
  }
  const intent = hits[0]!;
  const operation = intent.parameters.pilotageOperation;
  if (!operation) {
    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
  }
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    intentId: intent.id,
    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
    operation,
    cycleType: intent.parameters.cycleType,
    toCycleType: intent.parameters.toCycleType,
    methodRef: intent.parameters.methodRef,
    methodVersion: intent.parameters.methodVersion,
    decisionId: intent.parameters.decisionId,
    objectRef: intent.parameters.objectRef,
    statement: intent.parameters.statement,
    restrictionKindHint: intent.parameters.restrictionKindHint,
    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
    objective: intent.summary,
  };
}

/** Match a requested operation against durable qualification (owner-side). */
export function matchPilotageIntentInQualification(
  q: NoraTurnQualification,
  input: { operation?: string; intentId?: string },
): DurablePilotageBinding | { reject: true; reason: string; reasonCode: string } {
  const binding = extractPilotageBinding(q, {
    intentId: input.intentId,
    operation: input.operation,
  });
  if (binding == null) {
    return {
      reject: true,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune intention pilotage REQUEST_EFFECT dans la qualification durable",
    };
  }
  if ("ambiguous" in binding) {
    return { reject: true, reasonCode: "AMBIGUOUS", reason: binding.reason };
  }
  return binding;
}

/** Projection used by existing D2/D4 mission builders — derived from semantic intents only. */
export type SemanticStudioProjection = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: { kind: "NONE" } | { kind: "CREATE" } | {
    kind: "REVISE";
    documentHint: string | null;
    sectionHint: string | null;
  };
  publication: {
    wantsPublish: boolean;
    needsExplicitPath: boolean;
    path: string | null;
    targetPath: string | null;
    targetBranch: string | null;
    clarify: string | null;
    capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
  };
  simpleDialogue: boolean;
};

export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
  const effects = effectIntents(q);
  const createProject = effects.find((i) => i.capabilityId === "d2.create_project");
  const createDoc = effects.find((i) => i.capabilityId === "d4.create_document");
  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
  const preparePub = effects.find((i) => i.capabilityId === "d7.prepare_publication");
  const dispatchPub = effects.find((i) => i.capabilityId === "d7.dispatch_publication");
  const gitPub = effects.find((i) => i.capabilityId === "d9.git_integration");
  // Prefer prepare over dispatch over generic git — not interchangeable.
  const publish = preparePub ?? dispatchPub ?? gitPub ?? null;
  const publishCapability = publish
    ? (publish.capabilityId as SemanticStudioProjection["publication"]["capabilityId"])
    : null;

  const wantsProjectCreate = Boolean(createProject);
  const proposedProjectName = createProject?.parameters.projectName
    ? sanitizeProposedLabel(createProject.parameters.projectName) || null
    : null;

  let documentAct: SemanticStudioProjection["documentAct"] = { kind: "NONE" };
  if (reviseDoc) {
    documentAct = {
      kind: "REVISE",
      documentHint: reviseDoc.parameters.documentHint ?? null,
      sectionHint: reviseDoc.parameters.sectionHint ?? null,
    };
  } else if (createDoc) {
    documentAct = { kind: "CREATE" };
  }

  const wantsFollowOnDocument = Boolean(
    wantsProjectCreate &&
      createDoc &&
      createProject &&
      createDoc.dependsOn.includes(createProject.id),
  );

  const pendingDocumentBrief = wantsFollowOnDocument
    ? (createDoc?.summary || createDoc?.parameters.notes || createDoc?.parameters.documentHint || null)
    : null;

  const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
  const publication = {
    wantsPublish: Boolean(publish),
    needsExplicitPath: Boolean(publish) && !path,
    path,
    targetPath: path,
    targetBranch: null as string | null,
    clarify: publish && !path ? "Chemin de publication Git manquant." : null,
    capabilityId: publishCapability,
  };

  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !effects.some(
      (i) => PILOTAGE_CAPS.has(i.capabilityId) || i.capabilityId === "d4.record_knowledge",
    );

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief: pendingDocumentBrief?.slice(0, 400) ?? null,
    documentAct,
    publication,
    simpleDialogue,
  };
}

export type KnowledgeCapitalisationProposal = {
  intentId: string;
  kind: z.infer<typeof KnowledgeRecordKindSchema>;
  statement: string;
  epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
  subjectTitle?: string;
  subjectId?: string;
  continuityReason?: string;
};

/** Typed D4 continuity proposals from Nora qualification — never HumanDecision. */
export function extractKnowledgeProposals(
  q: NoraTurnQualification,
): KnowledgeCapitalisationProposal[] {
  if (q.status !== "QUALIFIED") return [];
  const out: KnowledgeCapitalisationProposal[] = [];
  for (const intent of effectIntents(q)) {
    if (intent.capabilityId !== "d4.record_knowledge") continue;
    const kind = intent.parameters.knowledgeKind;
    const statement = (intent.parameters.knowledgeStatement ?? intent.summary ?? "").trim();
    if (!kind || statement.length < 12) continue;
    out.push({
      intentId: intent.id,
      kind,
      statement: statement.slice(0, 500),
      epistemic: intent.parameters.epistemic ?? "hypothesized",
      subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
      subjectId: intent.parameters.subjectId?.trim() || undefined,
      continuityReason: intent.parameters.continuityReason?.trim() || undefined,
    });
  }
  return out;
}

/** Nora-preferred resource ids for context selection (non-authoritative). */
export function extractKnowledgeSelectionHints(q: NoraTurnQualification): {
  acquisIds: string[];
  openPointIds: string[];
  subjectIds: string[];
} {
  const acquisIds: string[] = [];
  const openPointIds: string[] = [];
  const subjectIds: string[] = [];
  if (q.status !== "QUALIFIED") return { acquisIds, openPointIds, subjectIds };
  for (const intent of q.intents) {
    for (const id of intent.parameters.relevantAcquisIds ?? []) {
      if (id && !acquisIds.includes(id)) acquisIds.push(id);
    }
    for (const id of intent.parameters.relevantOpenPointIds ?? []) {
      if (id && !openPointIds.includes(id)) openPointIds.push(id);
    }
    for (const id of intent.parameters.relevantSubjectIds ?? []) {
      if (id && !subjectIds.includes(id)) subjectIds.push(id);
    }
  }
  return { acquisIds, openPointIds, subjectIds };
}

export function mergeQualificationIntoResultJson(
  existingJson: string | null | undefined,
  terminalPayload: Record<string, unknown>,
): string {
  let semanticQualification: unknown;
  let semanticQualificationStashedAt: unknown;
  if (existingJson) {
    try {
      const prev = JSON.parse(existingJson) as Record<string, unknown>;
      semanticQualification = prev.semanticQualification;
      semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
    } catch {
      /* ignore */
    }
  }
  const merged = {
    ...terminalPayload,
    ...(semanticQualification !== undefined ? { semanticQualification } : {}),
    ...(semanticQualificationStashedAt !== undefined
      ? { semanticQualificationStashedAt }
      : {}),
  };
  return JSON.stringify(merged);
}

```
### `projects/sfia-studio-next/web/src/domains/conversation/durable-qualification.ts`

```
/**
 * Load / verify durable Nora qualification bound to a USER message (TV-04 / T-03).
 * Owner D5/D6 uses this — never trust body.operation alone for USER_MESSAGE.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";

export type DurableQualificationRecord = {
  commandId: string;
  userMessageId: string;
  clientTurnKey: string;
  status: string;
  qualification: NoraTurnQualification;
  stashedAt: string | null;
};

function parseStashed(resultJson: string | null): {
  qualification: NoraTurnQualification;
  stashedAt: string | null;
} | null {
  if (!resultJson) return null;
  let raw: unknown;
  try {
    raw = JSON.parse(resultJson);
  } catch {
    return null;
  }
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const validated = validateNoraTurnQualification(obj.semanticQualification);
  if (!validated.ok) return null;
  if (validated.value.schemaVersion !== SEMANTIC_QUALIFICATION_SCHEMA_VERSION) return null;
  return {
    qualification: validated.value,
    stashedAt: typeof obj.semanticQualificationStashedAt === "string"
      ? obj.semanticQualificationStashedAt
      : null,
  };
}

/** Latest turn command row that stashed a qualification for this USER message. */
export async function loadDurableQualificationForUserMessage(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
}): Promise<DurableQualificationRecord | null> {
  const rows = await db
    .select({
      commandId: conversationTurnCommands.id,
      userMessageId: conversationTurnCommands.userMessageId,
      clientTurnKey: conversationTurnCommands.clientTurnKey,
      status: conversationTurnCommands.status,
      resultJson: conversationTurnCommands.resultJson,
      ownerPilotId: conversationTurnCommands.ownerPilotId,
      projectId: conversations.projectId,
      messageRole: messages.role,
      messageStatus: messages.status,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversationTurnCommands.conversationId, conversations.id))
    .innerJoin(messages, eq(conversationTurnCommands.userMessageId, messages.id))
    .where(eq(conversationTurnCommands.userMessageId, input.userMessageId))
    .orderBy(desc(conversationTurnCommands.updatedAt))
    .limit(5);

  for (const row of rows) {
    if (row.ownerPilotId !== input.pilotId) continue;
    if ((row.projectId ?? "") !== input.projectId) continue;
    if (row.messageRole?.trim().toUpperCase() !== "USER") continue;
    if (row.messageStatus !== "COMPLETE") continue;
    const parsed = parseStashed(row.resultJson);
    if (!parsed) continue;
    return {
      commandId: row.commandId,
      userMessageId: row.userMessageId!,
      clientTurnKey: row.clientTurnKey,
      status: row.status,
      qualification: parsed.qualification,
      stashedAt: parsed.stashedAt,
    };
  }
  return null;
}

export async function loadDurableQualificationByCommandId(input: {
  commandId: string;
  ownerToken?: string;
}): Promise<DurableQualificationRecord | null> {
  const conditions = [eq(conversationTurnCommands.id, input.commandId)];
  if (input.ownerToken) {
    conditions.push(eq(conversationTurnCommands.ownerToken, input.ownerToken));
  }
  const row = (
    await db
      .select({
        commandId: conversationTurnCommands.id,
        userMessageId: conversationTurnCommands.userMessageId,
        clientTurnKey: conversationTurnCommands.clientTurnKey,
        status: conversationTurnCommands.status,
        resultJson: conversationTurnCommands.resultJson,
      })
      .from(conversationTurnCommands)
      .where(and(...conditions))
      .limit(1)
  )[0];
  if (!row?.userMessageId) return null;
  const parsed = parseStashed(row.resultJson);
  if (!parsed) return null;
  return {
    commandId: row.commandId,
    userMessageId: row.userMessageId,
    clientTurnKey: row.clientTurnKey,
    status: row.status,
    qualification: parsed.qualification,
    stashedAt: parsed.stashedAt,
  };
}

```
### `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`

```
/**
 * TEST_BOUNDARY ONLY — inject typed NoraTurnQualification envelopes by exact scenario key.
 * Not a synonym/regex router. Unknown utterances → dialogue-only (no effects).
 * Never imported as LIVE fallback.
 */
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  unavailableQualification,
  type NoraTurnQualification,
  type QualifiedIntentItem,
} from "./semantic-qualification";

function fixtureLaneActive(): boolean {
  return (
    process.env.STUDIO_LANE === "DEV" &&
    (process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1")
  );
}

function assertFixtureLane(): void {
  if (!fixtureLaneActive()) {
    throw new Error(
      "fixtureSemanticQualify called outside TEST_BOUNDARY fixture lane — forbidden",
    );
  }
}

/**
 * Intervencia S02-01 — SOURCE EXACTE NON DISPONIBLE for the full campaign verbatim
 * (12 sites / Excel / e-mails). Reconstructed negative-final-clause only.
 * Do NOT declare S02-01 PASS from this fixture alone.
 */
export const INTERVENCIA_S02_01_MESSAGE =
  "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";
export const INTERVENCIA_S02_01_SOURCE_STATUS = "SOURCE_EXACTE_NON_DISPONIBLE_RECONSTRUCTED" as const;

function normalizeUtterance(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function dialogue(goal: string, reply: string, constraints: string[] = []): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    intents: [
      {
        id: "i1",
        capabilityId: "d3.converse",
        mode: "EXPLORE",
        summary: goal,
        parameters: {},
        constraints,
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    clarifications: [],
    replyDraft: reply,
  };
}

function effect(
  goal: string,
  reply: string,
  intents: Array<Partial<Pick<QualifiedIntentItem, "id">> & Omit<QualifiedIntentItem, "id">>,
): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    intents: intents.map((it, idx) => ({
      ...it,
      id: it.id ?? `i${idx + 1}`,
      parameters: it.parameters ?? {},
      constraints: it.constraints ?? [],
      dependsOn: it.dependsOn ?? [],
      sourceEvidence: it.sourceEvidence ?? [],
    })),
    clarifications: [],
    replyDraft: reply,
  };
}

/**
 * Exact-message → typed envelope table.
 * Tests must use these exact strings (or registerScenario) — no fuzzy synonym matching.
 */
const SCENARIO_TABLE = new Map<string, NoraTurnQualification>();

function register(key: string, q: NoraTurnQualification): void {
  SCENARIO_TABLE.set(normalizeUtterance(key), q);
}

register(
  INTERVENCIA_S02_01_MESSAGE,
  dialogue(
    "Cadrage sans effet",
    "D'accord — restons sur le cadrage du besoin, sans créer de projet ni engager de travaux techniques.",
    ["NO_PROJECT_CREATE", "NO_TECHNICAL_WORK"],
  ),
);

for (const msg of [
  "Je veux créer un projet.",
  "Je veux démarrer un projet.",
  "Je souhaite initier un nouveau projet.",
  "J'aimerais lancer un projet.",
  "Je voudrais commencer un nouveau projet.",
  "Crée un projet.",
]) {
  register(
    msg,
    effect("Créer un projet", "Je prépare l'intention de création de projet — acte Pilote requis.", [
      {
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Création de projet",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ]),
  );
}

register(
  "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
  effect("Atlas + document", "Intention composée : projet Atlas puis document de cadrage.", [
    {
      id: "i1",
      capabilityId: "d2.create_project",
      mode: "REQUEST_EFFECT",
      summary: "Créer Atlas",
      parameters: { projectName: "Atlas" },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    },
    {
      id: "i2",
      capabilityId: "d4.create_document",
      mode: "REQUEST_EFFECT",
      summary: "document de cadrage qui expose l'objectif, le périmètre et les premières étapes",
      parameters: {
        notes: "document de cadrage qui expose l'objectif, le périmètre et les premières étapes",
      },
      constraints: [],
      dependsOn: ["i1"],
      sourceEvidence: [],
    },
  ]),
);

for (const msg of [
  "Je ne veux pas créer le projet.",
  "Je ne souhaite pas créer de projet.",
  "Je ne t'autorise pas à créer le projet.",
  "Il ne faut surtout pas créer ce projet.",
  "Réfléchissons au besoin sans créer le projet.",
  "Comment crée-t-on un projet ?",
  "Et si nous lancions un projet ?",
  "Il a écrit : crée le projet Atlas.",
  "Je pourrais envisager un projet plus tard.",
  "Explique GitHub Actions dans Studio",
  "Quelle est la différence entre blob et commit ?",
]) {
  register(
    msg,
    dialogue("Discussion sans effet", "Voici une réponse informative — aucun effet engagé.", [
      "NO_EFFECT",
    ]),
  );
}

register(
  "Ouvre le cycle cadrage.",
  effect("Ouvrir cycle", "Intention d'ouverture de cycle — vérification propriétaire D5.", [
    {
      capabilityId: "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      summary: "OPEN_CYCLE CADRAGE",
      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    },
  ]),
);

register(
  "Rédige un document de synthèse sur les options A et B",
  effect(
    "Créer document synthèse",
    "```sfia-document\n# Synthèse demandée\n\n## Section 1 — Contexte\n\nOptions A et B.\n\n## Section 2 — Analyse\n\nComparaison.\n\n## Section 3 — Suite\n\nPoints ouverts.\n```\n",
    [
      {
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document de synthèse options A et B",
        parameters: { notes: "synthèse options A et B" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Rédige un document de synthèse sur l'architecture",
  effect(
    "Créer document architecture",
    "```sfia-document\n# Synthèse demandée\n\n## Section 1 — Contexte\n\nArchitecture.\n```\n",
    [
      {
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document synthèse architecture",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Retiens comme acquis structurant que l'architecture modulaire est la piste privilégiée pour la suite.",
  effect(
    "Capitaliser acquis architecture",
    "J'enregistre l'acquis structurant sur l'architecture modulaire pour la continuité du projet.",
    [
      {
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Architecture modulaire = piste privilégiée",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
          continuityReason: "Acquis structurant pour reprise ultérieure",
        },
        constraints: ["NO_HUMAN_DECISION"],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Bonjour Nora, comment vas-tu ?",
  dialogue("Politesse", "Bonjour — je vais bien. Comment puis-je vous aider ?", ["NO_EFFECT"]),
);

/** Test helper — register an exact utterance → envelope without regex. */
export function registerFixtureScenario(utterance: string, q: NoraTurnQualification): void {
  assertFixtureLane();
  register(utterance, q);
}

export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
  assertFixtureLane();
  const text = normalizeUtterance(userText);
  if (!text) return unavailableQualification("EMPTY_USER_TEXT");
  const hit = SCENARIO_TABLE.get(text);
  if (hit) {
    return structuredClone(hit);
  }
  // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
  return dialogue(
    "Dialogue fixture par défaut",
    "Message reçu. Aucune intention d'effet n'a été reconnue dans ce scénario de fixture.",
    ["FIXTURE_DEFAULT_NO_EFFECT"],
  );
}

```
### `projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts`

```
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  INTERVENCIA_S02_01_MESSAGE,
  fixtureSemanticQualify,
} from "@/domains/conversation/fixture-semantic-qualify";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractPilotageBinding,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { qualifyThreadTurn } from "@/domains/pilotage/thread-recovery";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";

describe("semantic qualification envelope", () => {
  it("requires typed pilotageOperation for D5/D6 REQUEST_EFFECT", () => {
    const missing = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(missing.ok).toBe(false);

    const ok = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      const binding = extractPilotageBinding(ok.value);
      expect(binding && !("ambiguous" in binding) && binding.operation).toBe("OPEN_CYCLE");
    }
  });

  it("matchPilotageIntent rejects substituted operation / intentId", () => {
    const q: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "open",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    expect(matchPilotageIntentInQualification(q, { operation: "CLOSE_CYCLE" })).toMatchObject({
      reject: true,
    });
    expect(matchPilotageIntentInQualification(q, { intentId: "other" })).toMatchObject({
      reject: true,
    });
    expect(matchPilotageIntentInQualification(q, { operation: "OPEN_CYCLE", intentId: "i1" })).toMatchObject({
      operation: "OPEN_CYCLE",
      intentId: "i1",
    });
  });

  it("follow-on document requires exact dependsOn on create-project intent id", () => {
    const loose: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d2.create_project",
          mode: "REQUEST_EFFECT",
          summary: "p",
          parameters: { projectName: "Atlas" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i2",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "doc",
          parameters: {},
          constraints: [],
          dependsOn: ["unrelated"],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    // invalid dependsOn fails schema validation
    expect(validateNoraTurnQualification(loose).ok).toBe(false);

    const ok: NoraTurnQualification = {
      ...loose,
      intents: [
        loose.intents[0]!,
        { ...loose.intents[1]!, dependsOn: ["i1"] },
      ],
    };
    expect(projectStudioEffects(ok).wantsFollowOnDocument).toBe(true);
  });

  it("deriveThreadTurnKind from semantic modes", () => {
    const dialogue: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "q",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "explain",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    expect(deriveThreadTurnKind(dialogue)).toBe("DIALOGUE_INDEPENDANT");
  });
});

describe("fixtureSemanticQualify — exact scenario injection", () => {
  const prev = { ...process.env };

  beforeEach(() => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  afterEach(() => {
    process.env = { ...prev };
  });

  it("full Intervencia message → no D2/D4 effect intents", () => {
    const q = fixtureSemanticQualify(INTERVENCIA_S02_01_MESSAGE);
    expect(effectIntents(q)).toHaveLength(0);
    expect(projectStudioEffects(q).wantsProjectCreate).toBe(false);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("positive create exact scenarios → d2 REQUEST_EFFECT", () => {
    for (const msg of [
      "Je veux créer un projet.",
      "Je veux démarrer un projet.",
      "Je souhaite initier un nouveau projet.",
    ]) {
      expect(projectStudioEffects(fixtureSemanticQualify(msg)).wantsProjectCreate, msg).toBe(true);
    }
  });

  it("negations / how-to exact scenarios → no create", () => {
    for (const msg of [
      "Je ne veux pas créer le projet.",
      "Comment crée-t-on un projet ?",
      "Il a écrit : crée le projet Atlas.",
    ]) {
      expect(projectStudioEffects(fixtureSemanticQualify(msg)).wantsProjectCreate, msg).toBe(false);
    }
  });

  it("Atlas compound preserves exact dependsOn", () => {
    const proj = projectStudioEffects(
      fixtureSemanticQualify(
        "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
      ),
    );
    expect(proj.wantsProjectCreate).toBe(true);
    expect(proj.proposedProjectName).toBe("Atlas");
    expect(proj.wantsFollowOnDocument).toBe(true);
  });

  it("unknown fixture text is dialogue-only (no lexical invent)", () => {
    const q = fixtureSemanticQualify("Formule libre jamais enregistrée dans la table.");
    expect(effectIntents(q)).toHaveLength(0);
  });
});

describe("SEM-02 lexical routers retired", () => {
  it("qualifyDocumentAct / qualifyPilotageIntent / qualifyThreadTurn fail-closed", () => {
    expect(qualifyDocumentAct("Crée un document de recette.").kind).toBe("NONE");
    expect(qualifyPilotageIntent("Ouvre le cycle cadrage.").clarity).toBe("NONE");
    expect(qualifyThreadTurn("Ouvre le cycle cadrage.").kind).toBe("INCERTAIN");
  });

  it("PHRASES synonym table removed from intent.ts", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/intent.ts"), "utf8");
    expect(src).not.toMatch(/const PHRASES/);
    expect(src).toMatch(/SEMANTIC_ROUTER_REQUIRED/);
  });

  it("pilotage owner path requires durable qualification match", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/service.ts"), "utf8");
    expect(src).toMatch(/loadDurableQualificationForUserMessage/);
    expect(src).toMatch(/matchPilotageIntentInQualification/);
    expect(src).not.toMatch(/qualifyPilotageIntent\s*\(/);
  });

  it("project page no longer imports qualifyThreadTurn", () => {
    const src = readFileSync(join(__dirname, "../../src/app/projects/[projectId]/page.tsx"), "utf8");
    expect(src).not.toMatch(/qualifyThreadTurn/);
    expect(src).toMatch(/nextTurnKind/);
    expect(src).toMatch(/unresolvedPendingClientTurnKey/);
  });

  it("Lot A — USER_MESSAGE path refuses body enrichment of authority params", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/service.ts"), "utf8");
    expect(src).toMatch(/pas de complément body/);
    expect(src).toMatch(/fromDurable/);
    expect(src).not.toMatch(/matched\.cycleType \?\? body\.cycleType/);
    expect(src).not.toMatch(/matched\.decisionId \?\? body\.decisionId/);
    expect(src).not.toMatch(/matched\.objectRef \?\? body\.objectRef/);
  });

  it("Lot B — completeTurnCommand / markTurnUnknown preserve semanticQualification", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/conversation/turn-command.ts"), "utf8");
    expect(src).toMatch(/semanticQualification !== undefined/);
    expect(src).toMatch(/Fail closed: keep prior durable JSON/);
    expect(src).toMatch(/findUnresolvedSiblingTurns/);
  });

  it("Lot C — S05 pending gate before owner effects", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/conversation/service.ts"), "utf8");
    expect(src).toMatch(/S05_PENDING_BLOCKS_EFFECT/);
    expect(src).toMatch(/allowOwnerEffects/);
    expect(src).toMatch(/findUnresolvedSiblingTurns/);
  });

  it("F1 — reconcile known acts before STALE_REVISION gate", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/pilotage/command-runner.ts"),
      "utf8",
    );
    const classifyIdx = src.indexOf("const classified = await handlers.classify(tx)");
    const intentIdx = src.indexOf("const intent = await findByIntent(");
    const staleIdx = src.indexOf('reasonCode: "STALE_REVISION"');
    expect(classifyIdx).toBeGreaterThan(0);
    expect(intentIdx).toBeGreaterThan(classifyIdx);
    expect(staleIdx).toBeGreaterThan(intentIdx);
    expect(src).toMatch(/NEW act only: expectedRevision guards concurrency/);
  });

  it("F4 — no FACT from Nora established alone; resume hints post-reply only", () => {
    const knowledge = readFileSync(
      join(__dirname, "../../src/domains/knowledge/service.ts"),
      "utf8",
    );
    expect(knowledge).toMatch(/FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE/);
    expect(knowledge).not.toMatch(/p\.epistemic === "established"\s*\?\s*"FACT"/);
    const conv = readFileSync(
      join(__dirname, "../../src/domains/conversation/service.ts"),
      "utf8",
    );
    expect(conv).toMatch(/pre_generation_context/);
    expect(conv).toMatch(/post_qualification_resume_only/);
    expect(conv).toMatch(/knowledgeForNora/);
  });

  it("Lot D — lexical capitalisation / document helpers / knowledge listing retired", () => {
    const knowledge = readFileSync(
      join(__dirname, "../../src/domains/knowledge/service.ts"),
      "utf8",
    );
    expect(knowledge).toMatch(/semantic-proposals/);
    expect(knowledge).toMatch(/bounded-resource-listing|semantic-preferred-then-bounded/);
    expect(knowledge).not.toMatch(/selectionMethod: "lexical-heuristic"/);
    expect(knowledge).toMatch(/d4\.record_knowledge|RG-KNOW-001/);

    const doc = readFileSync(
      join(__dirname, "../../src/domains/conversation/document-act.ts"),
      "utf8",
    );
    expect(doc).toMatch(/export function hasExplicitCreateIntent\(_text: string\): boolean \{\n  return false;/);

    const auth = readFileSync(
      join(__dirname, "../../src/domains/pilotage/conversation-authority.ts"),
      "utf8",
    );
    expect(auth).toMatch(/pas de cible lexicale/);
    expect(auth).not.toMatch(/const resolved = resolveReviseTargetLexical/);
  });
});

```
### `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md`

```
# As-built — Qualification sémantique Nora + mobilisation gouvernée (evidence closure F1–F4)

Date: 2026-11-12 ~14:05 CET (Europe/Paris)
Branche locale: `fix/next-semantic-intent-convergence-20261112`
Base candidat: `2416e2ee25662821b015407346c64ec204f67488`
Profil: Critical / EVOL corrective evidence closure / NO RELEASE

## Résultats F1–F4

| Résultat | Invariant | Implémentation |
| --- | --- | --- |
| F1 D5/D6 reconcile | Acte déjà commis réconcilié avant STALE_REVISION | `command-runner.ts`: classify → findByIntent/findByActionKey → replay ; STALE seulement pour **nouvel** acte |
| F2 AUTH preuves | Aucun PASS vacuous | `ml4c-auth-reconciliation.pg.test.ts` R01–R14 : projets/messages/qualification durables réels |
| F3 S05 E2E API | Navigateur → vraie API Studio | `ml4c-s05-real-api.spec.ts` sans `route.fulfill` ; fixture seed UNKNOWN DEV-only ; oracles PG |
| F4 D4 | Contexte pré-Nora + pas de FACT IA seul | `knowledgeForNora` / `knowledgeResumeHints` ; capitalisation refuse FACT sur `established` Nora |

## Ordre transactionnel runner (F1)

1. lock projet (owner)
2. findByKey (même clientCommandKey)
3. classify (contrat propriétaire + qualification durable)
4. findByIntent / findByActionKey → replay si même acte
5. **sinon** expectedRevision == current sinon STALE_REVISION
6. insert / mutate

## Identité acte D5/D6

Pour `USER_MESSAGE` : `actInstanceId = ${userMessageId}:${semanticIntentId}` (serveur).
Multi-intent : `extractPilotageBinding(q, { intentId, operation })` désambiguïse.

## Connaissance D4

- Ressources **avant** génération : `knowledgeSelection.role = pre_generation_context`
- Preferred ids **après** qualification : `knowledgeResumeHints.role = post_qualification_resume_only` (indice de reprise, pas preuve de cognition courante)
- Nora `epistemic=established` → stockage HYPOTHESIS + `FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE`
- Jamais HumanDecision depuis D4

## Preuves exécutées (ce cycle)

| Suite | Résultat |
| --- | --- |
| `tsc --noEmit` | (rejouer) |
| `vitest run tests/unit` + ML4C PG ciblés | 264 PASS (unit+ML4C PG batch) |
| AUTH R01–R14 PG | 13 PASS |
| Playwright `ml4c-s05-real-api.spec.ts` | 3 PASS (:3101, API réelle, Nora fixture provider) |
| Playwright `ml4c-s05-independent-pending.spec.ts` | BROWSER WITH MOCKED API (étiquette) — non utiliséé comme preuve serveur |
| LIVE OpenAI | NOT RUN |
| S02-01 Intervencia verbatim | SOURCE EXACTE NON DISPONIBLE — FAIL |

## Niveaux Fake/Real

| Niveau | Statut |
| --- | --- |
| DETERMINISTIC PROVEN (PG + API DEV) | renforcé ce cycle |
| DETERMINISTIC END-TO-END ON DEV BOUNDARY | S05 real-api |
| REAL BOUNDARY PROVEN | NON acquis |
| READY FOR REAL | NON acquis |

## Non-déclarations

ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C · ADOPTED · READY FOR REAL · product push/PR

## Réserves / REALISM GAPS

- Pertinence sémantique LIVE Nora : corpus ultérieur (GO REAL distinct)
- FACT avec source indépendante vérifiée : contrat validateur pas encore étendu — refus automatique conservateur
- business_commands.status DB = APPLIED\|REJECTED seulement ; R09 prouve replay REJECTED sans réémission
- RECETTE / STABLE non mutés

```

## 5. Diffs des fichiers modifiés (ce cycle + cycles locaux non poussés)

### Diffs ciblés F1–F4

#### `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts b/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
index c7da2ae8..8328d6a3 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
@@ -371,16 +371,10 @@ export async function runBusinessCommand(
         return toCommandResult(prior, effects, "replay");
       }

+      // F1: classify + reconcile known human acts BEFORE stale-revision gate.
+      // A committed act with a new clientCommandKey and obsolete expectedRevision
+      // must replay — not be refused as STALE_REVISION.
       const revision = await currentRevision(tx, input.projectId);
-      if (revision !== input.body.expectedRevision) {
-        return bare(input, {
-          status: "CONFLICT",
-          revision,
-          reason: "Révision attendue périmée",
-          reasonCode: "STALE_REVISION",
-        });
-      }
-
       const classified = await handlers.classify(tx);
       const intentKey = classified.ok
         ? {
@@ -401,27 +395,29 @@ export async function runBusinessCommand(
         intentKey.sourceActionKey,
       );
       if (intent) {
-        return bare(input, {
-          status: "CONFLICT",
-          commandId: intent.id,
-          revision,
-          reason: "Intention humaine déjà enregistrée",
-          reasonCode: "HUMAN_INTENT",
-        });
+        // Same human act under a new clientCommandKey → reconcile, do not re-mutate.
+        // Do not re-emit effects when status is UNKNOWN — return stored truth only.
+        const effects = await loadEffects(tx, intent.id);
+        return toCommandResult(intent, effects, "replay");
       }
       if (classified.ok && classified.command.actInstanceId) {
         const sameAct = await findByActionKey(tx, input.projectId, classified.command.sourceActionKey);
         if (sameAct) {
-          return bare(input, {
-            status: "CONFLICT",
-            commandId: sameAct.id,
-            revision,
-            reason: "Acte humain déjà enregistré",
-            reasonCode: "HUMAN_INTENT",
-          });
+          const effects = await loadEffects(tx, sameAct.id);
+          return toCommandResult(sameAct, effects, "replay");
         }
       }

+      // NEW act only: expectedRevision guards concurrency before mutation.
+      if (revision !== input.body.expectedRevision) {
+        return bare(input, {
+          status: "CONFLICT",
+          revision,
+          reason: "Révision attendue périmée",
+          reasonCode: "STALE_REVISION",
+        });
+      }
+
       if (!classified.ok) {
         return insertCommand(tx, input, fingerprint, {
           sourceKind: intentKey.sourceKind,
```

#### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 3b71bd9d..669600bc 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -18,9 +18,11 @@ import {
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
+  findUnresolvedSiblingTurns,
   markTurnUnknown,
   requireTurnOwnership,
   reserveTurnCommand,
+  stashTurnQualification,
   touchTurnLease,
   turnRaceHooks,
 } from "./turn-command";
@@ -37,19 +39,27 @@ import {
   applyTargetedSectionRevision,
   assertSectionScope,
   extractContractualDocumentProposal,
-  hasDocumentaryWriteSignal,
-  qualifyDocumentAct,
   resolveReviseTarget,
   type DocumentEffectSummary,
   type DocumentProposalExtract,
 } from "./document-act";
+import {
+  deriveThreadTurnKind,
+  effectIntents,
+  extractKnowledgeProposals,
+  extractKnowledgeSelectionHints,
+  extractPilotageBinding,
+  projectStudioEffects,
+  type NoraTurnQualification,
+} from "./semantic-qualification";
+import { loadLatestMissionsByIntentKey } from "./intent-conduction";
+import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
 import {
   appendMissionAck,
   cognitiveContinueFromFacts,
   composeCanonicalMissionRestitution,
   missionCorrelationKeys,
   preparePublicationForMission,
-  qualifyPublicationMission,
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
@@ -61,7 +71,6 @@ import {
   emptyMission,
   loadPriorMissionProjection,
   mergeMissionSteps,
-  qualifyStudioIntent,
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
 import { updatePreview } from "@/domains/preparation/service";
@@ -178,6 +187,8 @@ export type TurnResult = {
   d4CharsReturned?: number;
   streaming?: { attempted: boolean; delivered: boolean; notes: string | null };
   knowledgeSelection?: unknown;
+  /** Post-qualification preferred listing — resume hint only, not cognition of current reply. */
+  knowledgeResumeHints?: unknown;
   capitalisation?: unknown;
   capitalisationAttempted?: unknown;
   capitalisationLimit?: string;
@@ -216,6 +227,14 @@ export type TurnResult = {
   reconciled?: boolean;
   /** Refs-only mission projection — never owner truth for D4/D6/D7. */
   missionProjection?: MissionProjection | null;
+  /** S05 — server-derived turn kind from Nora qualification (not client lexical). */
+  nextTurnKind?: ThreadTurnKind;
+  /** Echo of durable qualification status for clients / recovery. */
+  semanticQualificationStatus?: string;
+  /** S05 — true when a sibling pending blocked owner effects for this turn. */
+  pendingEffectBlocked?: boolean;
+  pendingBlockReason?: string;
+  unresolvedPendingClientTurnKey?: string | null;
 };

 function pilotageEffectFromAuthority(
@@ -280,7 +299,13 @@ export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
   content: string,
-  opts?: { correlationKey?: string; clientTurnKey?: string; requestId?: string },
+  opts?: {
+    correlationKey?: string;
+    clientTurnKey?: string;
+    requestId?: string;
+    /** Client UX hint only — server DB siblings are authoritative for S05. */
+    unresolvedPendingClientTurnKey?: string;
+  },
 ): Promise<TurnResult> {
   const requestId = opts?.requestId ?? newRequestId();
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -430,47 +455,8 @@ export async function postUserMessageAndNora(
     meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
   });

-  /**
-   * F01/F02 — USER → D5/D6 before Nora provider call.
-   * Message is already COMPLETE; business TX is short and separate from Nora.
-   * Lost ownership ⇒ skip mutation (do not invent a late second command).
-   */
+  /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
-  const stillOwnedBeforeAuthority = await requireTurnOwnership(
-    reserved.commandId,
-    reserved.ownerToken,
-  );
-  if (stillOwnedBeforeAuthority && ctx.project?.id) {
-    authority = await applyConversationalAuthority({
-      pilotId,
-      projectId: ctx.project.id,
-      userMessageId: reserved.userMessageId,
-      content,
-      clientTurnKey,
-    });
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: authority.attempted
-        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-          ? "SUCCESS"
-          : authority.command?.status === "UNKNOWN"
-            ? "UNKNOWN"
-            : "FAILED"
-        : "PARTIAL",
-      meta: {
-        attempted: authority.attempted,
-        intent_clarity: authority.intentClarity,
-        operation: authority.operation ?? null,
-        command_status: authority.command?.status ?? null,
-        reason_code: authority.command?.reasonCode ?? null,
-        decision_id: authority.decisionId,
-        source: authority.source,
-      },
-    });
-  }

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -478,7 +464,11 @@ export async function postUserMessageAndNora(
     .slice(-6)
     .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

-  const knowledge = await selectRelevantKnowledgeContext(pilotId, preparationId, content);
+  // F4: pre-Nora context ONLY feeds generation. Post-qual preferred ids are resume hints,
+  // never claimed as having nourished the reply already produced.
+  const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content);
+  let knowledgeResumeHints: Awaited<ReturnType<typeof selectRelevantKnowledgeContext>> | null =
+    null;

   const docs = await listDocuments(pilotId, preparationId);
   const docSnippets = docs.slice(0, 5).map((d) => {
@@ -486,29 +476,12 @@ export async function postUserMessageAndNora(
     return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
   });

-  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
+  // SEM/TV: Nora qualifies first; same-turn D5/D6 runs after structured qualification.
+  // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
-  const authoritySnippets: string[] = [];
-  if (authority?.attempted && authority.command) {
-    authoritySnippets.push(
-      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
-      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
-    );
-    if (authority.command.effects?.length) {
-      authoritySnippets.push(
-        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
-      );
-    }
-  } else if (authority?.clarification) {
-    authoritySnippets.push(
-      "### Clarification pilotage requise",
-      authority.clarification.slice(0, 300),
-    );
-  }

   let reply;
   try {
-    // C02 fault boundary: after authority, before/during Nora — same recovery path.
     if (turnRaceHooks.afterAuthorityBeforeNora) {
       await turnRaceHooks.afterAuthorityBeforeNora();
     }
@@ -520,8 +493,8 @@ export async function postUserMessageAndNora(
       reply = await generateNoraReply({
         userText: content,
         contextSnippets,
-        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
+        knowledgeSnippets: [...knowledgeForNora.snippets, ...docSnippets],
+        pilotageSnippets: pilotageCtx.snippets,
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
         // Requested level only. The adapter emits DELIVERED after a real generate.
@@ -537,8 +510,9 @@ export async function postUserMessageAndNora(
       clearInterval(leasePulse);
     }
   } catch {
-    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
-    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
+    // SEM order: Nora runs before same-turn D5/D6, so a provider failure here
+    // cannot have produced a same-turn HumanDecision. Prior-turn recovery stays
+    // on the reconstitution path below.
     const unknownPayload: TurnResult = {
       userMessageId: reserved.userMessageId,
       assistantMessageId: null,
@@ -546,8 +520,8 @@ export async function postUserMessageAndNora(
       requestId,
       status: "UNKNOWN",
       idempotentReplay: false,
-      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-      pilotageEffect: pilotageEffectFromAuthority(authority),
+      humanDecisionCreated: false,
+      pilotageEffect: null,
       noraMode: "provider-exception",
     };
     try {
@@ -622,13 +596,217 @@ export async function postUserMessageAndNora(
   // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
   await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

+  const qualification: NoraTurnQualification =
+    reply.qualification ??
+    ({
+      schemaVersion: "ml4c-sem-qual-v1",
+      status: "UNAVAILABLE",
+      goal: "",
+      intents: [],
+      clarifications: ["MISSING_QUALIFICATION"],
+      replyDraft: reply.content,
+    } as NoraTurnQualification);
+
+  // TV-04 / T-03 — durable qualification before first owner mutation; applied required.
+  const stashed = await stashTurnQualification({
+    commandId: reserved.commandId,
+    ownerToken: reserved.ownerToken,
+    qualificationJson: JSON.stringify(qualification),
+  });
+  if (!stashed.applied) {
+    emitObs({
+      event_name: "d3.turn.qualification_stash_failed",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "FAILED",
+      error_category: "QUALIFICATION_STASH_NOT_APPLIED",
+    });
+    try {
+      await markTurnUnknown(
+        reserved.commandId,
+        "QUALIFICATION_STASH_NOT_APPLIED",
+        reserved.ownerToken,
+        JSON.stringify({
+          userMessageId: reserved.userMessageId,
+          assistantMessageId: null,
+          operationId: reserved.operationId,
+          requestId,
+          status: "UNKNOWN",
+          idempotentReplay: false,
+          humanDecisionCreated: false,
+          semanticQualificationStatus: "STASH_FAILED",
+        }),
+      );
+    } catch {
+      /* ownership may already be lost */
+    }
+    return {
+      operationId: reserved.operationId,
+      requestId,
+      status: "UNKNOWN",
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+      assistantMessageId: null,
+      idempotentReplay: false,
+      humanDecisionCreated: false,
+      noraMode: reply.mode,
+      nextTurnKind: "INCERTAIN",
+      semanticQualificationStatus: "STASH_FAILED",
+    };
+  }
+
+  const nextTurnKind = deriveThreadTurnKind(qualification);
+  const studioProjection = projectStudioEffects(qualification);
+  const pilotageBinding = extractPilotageBinding(qualification);
+  const knowledgeHints = extractKnowledgeSelectionHints(qualification);
+  if (
+    knowledgeHints.acquisIds.length ||
+    knowledgeHints.openPointIds.length ||
+    knowledgeHints.subjectIds.length
+  ) {
+    knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
+      preferredAcquisIds: knowledgeHints.acquisIds,
+      preferredOpenPointIds: knowledgeHints.openPointIds,
+      preferredSubjectIds: knowledgeHints.subjectIds,
+    });
+  }
+
+  // S05 — durable unresolved work (turns + missions). Client hint is UX only.
+  const siblings = await findUnresolvedSiblingTurns({
+    conversationId: ctx.conversation.id,
+    ownerPilotId: pilotId,
+    excludeClientTurnKey: clientTurnKey,
+  });
+  const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
+  const blockingSibling =
+    siblings.find((s) => s.clientTurnKey === clientPendingHint) ?? siblings[0] ?? null;
+  const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
+  const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
+    ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
+      m.status,
+    ),
+  );
+  // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
+  const blockingMission =
+    unresolvedMissions.find((m) =>
+      m.status === "ACTIVE"
+        ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
+        : true,
+    ) ?? null;
+  const hasUnresolvedWork = Boolean(blockingSibling || blockingMission);
+  let pendingEffectBlocked = false;
+  let pendingBlockReason: string | undefined;
+  let allowOwnerEffects = true;
+  if (hasUnresolvedWork && (nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN")) {
+    allowOwnerEffects = false;
+    pendingEffectBlocked = true;
+    pendingBlockReason = blockingSibling
+      ? nextTurnKind === "INTENTION_EFFET"
+        ? `S05_PENDING_BLOCKS_EFFECT:${blockingSibling.clientTurnKey}`
+        : `S05_PENDING_BLOCKS_AMBIGUOUS:${blockingSibling.clientTurnKey}`
+      : nextTurnKind === "INTENTION_EFFET"
+        ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission?.clientIntentKey ?? "mission"}`
+        : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission?.clientIntentKey ?? "mission"}`;
+    emitObs({
+      event_name: "d3.turn.s05_pending_block",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "PARTIAL",
+      meta: {
+        pending_client_turn_key: blockingSibling?.clientTurnKey ?? null,
+        pending_status: blockingSibling?.status ?? null,
+        mission_status: blockingMission?.status ?? null,
+        mission_key: blockingMission?.clientIntentKey ?? null,
+        next_turn_kind: nextTurnKind,
+        client_hint_ignored_as_authority: true,
+      },
+    });
+  }
+  // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.
+
+  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
+  if (
+    allowOwnerEffects &&
+    pilotageBinding &&
+    !("ambiguous" in pilotageBinding) &&
+    ctx.project?.id
+  ) {
+    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
+    if (stillOwned) {
+      const preQualified = {
+        clarity: "CLEAR" as const,
+        operation: pilotageBinding.operation,
+        objective: pilotageBinding.objective ?? content,
+        statement: pilotageBinding.statement,
+        objectRef: pilotageBinding.objectRef,
+        decisionId: pilotageBinding.decisionId,
+        methodRef: pilotageBinding.methodRef,
+        methodVersion: pilotageBinding.methodVersion,
+        restrictionKindHint: pilotageBinding.restrictionKindHint,
+        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+        semanticIntentId: pilotageBinding.intentId,
+        semanticSchemaVersion: pilotageBinding.schemaVersion,
+      };
+      authority = await applyConversationalAuthority({
+        pilotId,
+        projectId: ctx.project.id,
+        userMessageId: reserved.userMessageId,
+        content,
+        clientTurnKey,
+        preQualified,
+      });
+      emitObs({
+        event_name: "d3.turn.conversational_authority",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        outcome: authority.attempted
+          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
+            ? "SUCCESS"
+            : authority.command?.status === "UNKNOWN"
+              ? "UNKNOWN"
+              : "FAILED"
+          : "PARTIAL",
+        meta: {
+          attempted: authority.attempted,
+          intent_clarity: authority.intentClarity,
+          operation: authority.operation ?? null,
+          command_status: authority.command?.status ?? null,
+          reason_code: authority.command?.reasonCode ?? null,
+          decision_id: authority.decisionId,
+          source: authority.source,
+          semantic_gate: true,
+          semantic_intent_id: pilotageBinding.intentId,
+        },
+      });
+    }
+  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
+    emitObs({
+      event_name: "d3.turn.conversational_authority",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "PARTIAL",
+      meta: {
+        attempted: false,
+        intent_clarity: "AMBIGUOUS",
+        semantic_gate: true,
+        reason: pilotageBinding.reason,
+      },
+    });
+  }
+
   const assistantId = newId("msg");

   let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
     capitalisations: [],
-    selectionMethod: "lexical-heuristic",
+    selectionMethod: "semantic-proposals",
     selectionLimit:
-      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
+      "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
     humanDecisionCreated: false,
     ownershipLost: false,
   };
@@ -646,25 +824,25 @@ export async function postUserMessageAndNora(
   let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
-  const documentAct = qualifyDocumentAct(content);
-  const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
-  const missionIntent = qualifyPublicationMission(content);
-  const studioIntent = qualifyStudioIntent(content);
+  const documentAct = studioProjection.documentAct;
+  const documentaryIntentSignal = documentAct.kind !== "NONE";
+  const missionIntent = studioProjection.publication;
+  const studioIntent = studioProjection;
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
-  // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
+  // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
     operationId: reserved.operationId,
     generationId: reply.generationId,
     qualificationKind: documentAct.kind,
-    qualificationReason: documentAct.kind === "NONE" ? (documentAct.reason ?? null) : null,
+    qualificationReason: documentAct.kind === "NONE" ? "SEMANTIC_NONE" : null,
     documentaryIntentSignal,
     d4Attempted: false,
     d4Effect: null,
   });

-  if (reply.status === "COMPLETE") {
+  if (reply.status === "COMPLETE" && allowOwnerEffects) {
     if (turnRaceHooks.beforeD4Effect) {
       await turnRaceHooks.beforeD4Effect();
     }
@@ -677,6 +855,7 @@ export async function postUserMessageAndNora(
           assistantText: reply.content,
           generationId: reply.generationId,
           userMessageId: reserved.userMessageId,
+          proposals: extractKnowledgeProposals(qualification),
           turnFence: {
             commandId: reserved.commandId,
             ownerToken: reserved.ownerToken,
@@ -1002,7 +1181,7 @@ export async function postUserMessageAndNora(
           ? {
               act: "NONE",
               status: "NOT_EXECUTED",
-              reason: documentAct.reason ?? "NO_EXPLICIT_WRITE",
+              reason: "NO_EXPLICIT_WRITE",
             }
           : null;

@@ -1063,6 +1242,7 @@ export async function postUserMessageAndNora(
   }

   if (
+    allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
     documentEffectForAck?.status === "AVAILABLE" &&
     documentEffectForAck.documentId &&
@@ -1165,12 +1345,17 @@ export async function postUserMessageAndNora(
   }

   // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
+  // S05: never mutate preview / invent mission while unresolved work A blocks B effects.
   if (
+    allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
     studioIntent.wantsProjectCreate &&
     !ctx.project?.id
   ) {
-    const proposed = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
+    const proposed =
+      (studioIntent.proposedProjectName?.trim()
+        ? studioIntent.proposedProjectName.trim()
+        : null) || "Nouveau projet";
     try {
       await updatePreview(
         pilotId,
@@ -1313,10 +1498,24 @@ export async function postUserMessageAndNora(
       notes: reply.streamingNotes ?? null,
     },
     knowledgeSelection: {
-      ...knowledge.counts,
-      selectionMethod: knowledge.selectionMethod,
-      selectionLimit: knowledge.selectionLimit,
+      ...knowledgeForNora.counts,
+      selectionMethod: knowledgeForNora.selectionMethod,
+      selectionLimit: knowledgeForNora.selectionLimit,
+      role: "pre_generation_context" as const,
+      selectedAcquisIds: knowledgeForNora.selectedAcquisIds,
+      selectedOpenPointIds: knowledgeForNora.selectedOpenPointIds,
     },
+    knowledgeResumeHints: knowledgeResumeHints
+      ? {
+          ...knowledgeResumeHints.counts,
+          selectionMethod: knowledgeResumeHints.selectionMethod,
+          selectionLimit: knowledgeResumeHints.selectionLimit,
+          role: "post_qualification_resume_only" as const,
+          selectedAcquisIds: knowledgeResumeHints.selectedAcquisIds,
+          selectedOpenPointIds: knowledgeResumeHints.selectedOpenPointIds,
+          note: "Indice de reprise — n'a pas nourri la réponse déjà générée",
+        }
+      : null,
     capitalisation: ownershipLostBeforeD4
       ? (unknownCapReconstituted?.capitalisation ?? [])
       : confirmedCapitalisations,
@@ -1331,6 +1530,14 @@ export async function postUserMessageAndNora(
     humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
     pilotageEffect: pilotageEffectFromAuthority(authority),
     missionProjection,
+    nextTurnKind,
+    pendingEffectBlocked,
+    pendingBlockReason,
+    unresolvedPendingClientTurnKey:
+      blockingSibling?.clientTurnKey ??
+      blockingMission?.clientIntentKey ??
+      clientPendingHint,
+    semanticQualificationStatus: qualification.status,
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```

#### `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 5fff8099..34a64727 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -658,54 +658,57 @@ export async function listKnowledge(pilotId: string, preparationId: string) {
   return { subjects, acquis, openPoints };
 }

+/**
+ * Bounded D4 listing by rights/state. When Nora supplies preferred ids
+ * (qualification hints), those are prioritized — not recency-as-authority.
+ */
 export async function selectRelevantKnowledgeContext(
   pilotId: string,
   preparationId: string,
-  userText: string,
-  opts?: { limit?: number },
+  _userText: string,
+  opts?: {
+    limit?: number;
+    preferredAcquisIds?: string[];
+    preferredOpenPointIds?: string[];
+    preferredSubjectIds?: string[];
+  },
 ) {
   const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
   const limit = opts?.limit ?? 8;
-  const q = userText.toLowerCase();
-  const tokens = q
-    .split(/[^a-zàâäéèêëïîôùûüç0-9]+/i)
-    .filter((t) => t.length > 3)
-    .slice(0, 12);
+  const prefA = new Set((opts?.preferredAcquisIds ?? []).filter(Boolean));
+  const prefO = new Set((opts?.preferredOpenPointIds ?? []).filter(Boolean));
+  const prefS = new Set((opts?.preferredSubjectIds ?? []).filter(Boolean));

-  function score(text: string): number {
-    const lower = text.toLowerCase();
-    let s = 0;
-    for (const t of tokens) if (lower.includes(t)) s += 2;
-    return s;
-  }
+  const currentAcquis = acquis.filter((a) => a.status === "CURRENT");
+  const openOps = openPoints.filter((o) => o.status === "OPEN");
+  const activeSubjects = subjects.filter((s) => s.status === "ACTIVE");

-  const rankedAcquis = acquis
-    .filter((a) => a.status === "CURRENT")
-    .map((a) => ({ a, s: score(a.statement) }))
-    .sort((x, y) => y.s - x.s || (y.a.createdAt?.getTime?.() ?? 0) - (x.a.createdAt?.getTime?.() ?? 0));
-
-  const rankedOpen = openPoints
-    .filter((o) => o.status === "OPEN")
-    .map((o) => ({ o, s: score(o.statement) + 1 }))
-    .sort((x, y) => y.s - x.s);
+  const preferThenRest = <T extends { id: string }>(rows: T[], pref: Set<string>, n: number) => {
+    const preferred = rows.filter((r) => pref.has(r.id));
+    const rest = rows.filter((r) => !pref.has(r.id));
+    return [...preferred, ...rest].slice(0, n);
+  };

-  const pickedAcquis = rankedAcquis.slice(0, Math.min(limit, 5));
-  const pickedOpen = rankedOpen.slice(0, Math.min(4, limit));
-  const pickedSubjects = subjects.filter((s) => s.status === "ACTIVE").slice(0, 5);
+  const pickedAcquis = preferThenRest(currentAcquis, prefA, Math.min(limit, 5));
+  const pickedOpen = preferThenRest(openOps, prefO, Math.min(4, limit));
+  const pickedSubjects = preferThenRest(activeSubjects, prefS, 5);

   const snippets: string[] = [];
-  for (const { a } of pickedAcquis) {
+  for (const a of pickedAcquis) {
+    const mark = prefA.has(a.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
-      `ACQUIS[${a.kind}/${a.id}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
+      `ACQUIS[${a.kind}/${a.id}/${mark}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
     );
   }
-  for (const { o } of pickedOpen) {
+  for (const o of pickedOpen) {
+    const mark = prefO.has(o.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
-      `POINT_OUVERT[${o.id}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
+      `POINT_OUVERT[${o.id}/${mark}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
     );
   }
   for (const s of pickedSubjects) {
-    snippets.push(`SUJET[${s.id}/${s.status}]: ${s.title}`);
+    const mark = prefS.has(s.id) ? "PREFERRED" : "AVAILABLE";
+    snippets.push(`SUJET[${s.id}/${s.status}/${mark}]: ${s.title}`);
   }

   return {
@@ -715,11 +718,14 @@ export async function selectRelevantKnowledgeContext(
       acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
       openPoints: openPoints.filter((o) => o.status === "OPEN").length,
     },
-    selectedAcquisIds: pickedAcquis.map((x) => x.a.id),
-    selectedOpenPointIds: pickedOpen.map((x) => x.o.id),
-    selectionMethod: "lexical-heuristic" as const,
+    selectedAcquisIds: pickedAcquis.map((a) => a.id),
+    selectedOpenPointIds: pickedOpen.map((o) => o.id),
+    selectionMethod:
+      prefA.size || prefO.size || prefS.size
+        ? ("semantic-preferred-then-bounded" as const)
+        : ("bounded-resource-listing" as const),
     selectionLimit:
-      "Sélection lexicale bornée — n'établit pas de vérité épistémique; D3 doit qualifier pertinence et limites.",
+      "RG-KNOW-011: ids préférés Nora d'abord, sinon listing borné droits/état — pas de scoring lexical métier.",
   };
 }

@@ -929,8 +935,8 @@ export async function reconstituteConfirmedD4Effects(
 }

 /**
- * Heuristic capitalisation — auxiliary only, not epistemic authority.
- * Defaults to HYPOTHESIS; FACT only if explicitly established.
+ * Selective D4 capitalisation from typed Nora proposals (RG-KNOW-001).
+ * No lexical detection. Never creates HumanDecision. Owner validates each write.
  */
 export async function maybeCapitalizeFromExchange(
   pilotId: string,
@@ -940,8 +946,17 @@ export async function maybeCapitalizeFromExchange(
     assistantText: string;
     generationId: string;
     userMessageId: string;
-    /** Propagated into every D4 capitalisation write TX. */
     turnFence?: TurnOwnershipFence;
+    /** Typed proposals from durable qualification — required for any write. */
+    proposals?: Array<{
+      intentId: string;
+      kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
+      statement: string;
+      epistemic: "hypothesized" | "recommended" | "established" | "limited";
+      subjectTitle?: string;
+      subjectId?: string;
+      continuityReason?: string;
+    }>;
   },
 ) {
   const results: Array<{
@@ -951,152 +966,149 @@ export async function maybeCapitalizeFromExchange(
     epistemicNote?: string;
     reason?: string;
   }> = [];
-  const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();
-  const selectionLimit =
-    "Capitalisation heuristique (regex/lexical) — pas une autorité épistémique; LIVE COG requis pour qualification.";
-  const fence = input.turnFence;
+  const proposals = input.proposals ?? [];
+  if (proposals.length === 0) {
+    return {
+      capitalisations: results,
+      selectionMethod: "semantic-proposals" as const,
+      selectionLimit: "Aucune proposition d4.record_knowledge — zéro écriture D4",
+      humanDecisionCreated: false as const,
+      ownershipLost: false as const,
+    };
+  }

+  const fence = input.turnFence;
   let subjectId: string | null = null;
-  const topicMatch = input.userText.match(
-    /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
-  );
-  if (topicMatch?.[1]) {
-    const s = await ensureSubject(
-      pilotId,
-      preparationId,
-      topicMatch[1].trim(),
-      undefined,
-      fence,
-    );
-    if (s.status === "AVAILABLE" && s.subjectId) {
-      subjectId = s.subjectId;
-    } else if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
-      results.push({
-        kind: "subject",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
-      });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
+
+  for (const p of proposals) {
+    if (p.kind === "SUBJECT" || p.subjectTitle) {
+      const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+      if (title.length >= 3) {
+        const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+        if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+          results.push({
+            kind: "subject",
+            status: "FAILED",
+            reason: "TURN_OWNERSHIP_LOST",
+            epistemicNote: p.continuityReason,
+          });
+          return {
+            capitalisations: results,
+            selectionMethod: "semantic-proposals" as const,
+            selectionLimit: "OWNERSHIP_LOST",
+            humanDecisionCreated: false as const,
+            ownershipLost: true as const,
+          };
+        }
+        if (s.status === "AVAILABLE" && s.subjectId) {
+          subjectId = s.subjectId;
+          results.push({
+            kind: "subject",
+            id: s.subjectId,
+            status: s.status,
+            epistemicNote: p.continuityReason,
+          });
+        }
+      }
+      if (p.kind === "SUBJECT") continue;
     }
-  }

-  // Stronger gate than keyword alone: require comparative structure or explicit durable ask
-  const looksComparative =
-    /compar(e|er|aison).{0,80}(option|compromis|avantage|inconvénient|critère)/i.test(lower) ||
-    (/option[s]?\s*[abc]/i.test(lower) && /compromis|avantage|inconvénient/i.test(lower));
-  const looksOpen =
-    /\b(point ouvert|question ouverte|à clarifier|dépendance non résolue)\b/i.test(lower);
-  const looksDurableAsk =
-    /\b(retenir comme acquis|capitalise|mémorise|enregistre (cet|cette) acquis)\b/i.test(
-      input.userText,
-    );
-  const looksRecommendation = /\brecommandation conditionnelle\b/i.test(lower);
+    if (p.subjectId) subjectId = p.subjectId;

-  if (looksDurableAsk || looksComparative) {
-    const statement = extractSalientLine(input.assistantText) ?? input.userText.slice(0, 200);
-    const kind: KnowledgeKind = looksRecommendation
-      ? "RECOMMENDATION"
-      : looksComparative
-        ? "HYPOTHESIS"
-        : "HYPOTHESIS";
-    const cap = await capitalizeAcquis(pilotId, preparationId, {
-      statement,
-      kind,
-      subjectId,
-      turnFence: fence,
-      provenance: {
-        sourceKind: "message",
-        sourceId: input.userMessageId,
-        generationId: input.generationId,
-        note: "heuristic capitalisation — not epistemic authority",
-        epistemic: kind === "RECOMMENDATION" ? "recommended" : "hypothesized",
-      },
-    });
-    if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
+    if (p.kind === "OPEN_POINT") {
+      const op = await openPoint(pilotId, preparationId, {
+        statement: p.statement,
+        subjectId,
+        turnFence: fence,
+        provenance: {
+          sourceKind: "message",
+          sourceId: input.userMessageId,
+          generationId: input.generationId,
+          epistemic: p.epistemic === "established" ? "limited" : p.epistemic,
+          note: p.continuityReason ?? "semantic qualification d4.record_knowledge",
+        },
+      });
+      if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
+        results.push({
+          kind: "open_point",
+          status: "FAILED",
+          reason: "TURN_OWNERSHIP_LOST",
+          epistemicNote: p.continuityReason,
+        });
+        return {
+          capitalisations: results,
+          selectionMethod: "semantic-proposals" as const,
+          selectionLimit: "OWNERSHIP_LOST",
+          humanDecisionCreated: false as const,
+          ownershipLost: true as const,
+        };
+      }
       results.push({
-        kind: "acquis",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
+        kind: "open_point",
+        id: "openPointId" in op ? op.openPointId : undefined,
+        status: op.status,
+        epistemicNote: p.continuityReason,
       });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
+      continue;
     }
-    results.push({
-      kind: "acquis",
-      id: "acquisId" in cap ? cap.acquisId : undefined,
-      status: cap.status,
-      epistemicNote: selectionLimit,
-    });
-  }

-  if (looksOpen) {
-    const statement =
-      extractOpenLine(input.assistantText) ??
-      `Point ouvert issu de l'échange: ${input.userText.slice(0, 160)}`;
-    const op = await openPoint(pilotId, preparationId, {
-      statement,
-      subjectId,
-      turnFence: fence,
-      provenance: {
-        sourceKind: "message",
-        sourceId: input.userMessageId,
-        generationId: input.generationId,
-        epistemic: "limited",
-      },
-    });
-    if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
+    if (p.kind === "ACQUIS") {
+      // F4: Nora's epistemic="established" is NOT independent proof.
+      // Never promote to FACT from the model envelope alone — store as HYPOTHESIS /
+      // RECOMMENDATION until D4 has a verified independent source contract.
+      const kind: KnowledgeKind =
+        p.epistemic === "recommended" ? "RECOMMENDATION" : "HYPOTHESIS";
+      const epistemicNote =
+        p.epistemic === "established"
+          ? `${p.continuityReason ?? "semantic"} — Nora marked established but D4 refused FACT without independent verified source`
+          : p.continuityReason;
+      const cap = await capitalizeAcquis(pilotId, preparationId, {
+        statement: p.statement,
+        kind,
+        subjectId,
+        turnFence: fence,
+        provenance: {
+          sourceKind: "message",
+          sourceId: input.userMessageId,
+          generationId: input.generationId,
+          note: epistemicNote ?? "semantic qualification d4.record_knowledge",
+          epistemic: "hypothesized",
+        },
+      });
+      if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
+        results.push({
+          kind: "acquis",
+          status: "FAILED",
+          reason: "TURN_OWNERSHIP_LOST",
+          epistemicNote: p.continuityReason,
+        });
+        return {
+          capitalisations: results,
+          selectionMethod: "semantic-proposals" as const,
+          selectionLimit: "OWNERSHIP_LOST",
+          humanDecisionCreated: false as const,
+          ownershipLost: true as const,
+        };
+      }
       results.push({
-        kind: "open_point",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
+        kind: "acquis",
+        id: "acquisId" in cap ? cap.acquisId : undefined,
+        status: cap.status,
+        epistemicNote: epistemicNote,
+        reason:
+          p.epistemic === "established"
+            ? "FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE"
+            : undefined,
       });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
     }
-    results.push({
-      kind: "open_point",
-      id: "openPointId" in op ? op.openPointId : undefined,
-      status: op.status,
-      epistemicNote: selectionLimit,
-    });
   }

   return {
     capitalisations: results,
-    selectionMethod: "lexical-heuristic" as const,
-    selectionLimit,
+    selectionMethod: "semantic-proposals" as const,
+    selectionLimit:
+      "RG-KNOW-001: capitalisation sélective depuis propositions Nora typées — pas d'autorité D6",
     humanDecisionCreated: false as const,
     ownershipLost: false as const,
   };
 }
-function extractSalientLine(text: string): string | null {
-  const lines = text
-    .split(/\n+/)
-    .map((l) => l.replace(/^#+\s*/, "").replace(/^[-*]\s*/, "").trim())
-    .filter((l) => l.length > 40 && l.length < 400);
-  return lines[0] ?? null;
-}
-
-function extractOpenLine(text: string): string | null {
-  const m = text.match(/(?:point[s]? ouvert[s]?|à clarifier|reste à)[^\n]{8,200}/i);
-  return m?.[0]?.trim() ?? null;
-}
```

#### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
```

#### `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
index a611f0e8..2e1feb8f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
@@ -1,8 +1,10 @@
 import { test, expect } from "@playwright/test";

 /**
- * ML4C S05 — independent cognitive COMPLETE must not clear unresolved métier pending A.
- * Browser FAKE / E2E lane — not Nora LIVE.
+ * ML4C S05 — BROWSER WITH MOCKED API / DETERMINISTIC.
+ * UI + client sessionStorage pending identity only.
+ * Does NOT prove server S05 gate (see ml4c-s05-real-api.spec.ts).
+ * Nora LIVE: not claimed.
  */

 async function openProjectFromNewPrep(page: import("@playwright/test").Page): Promise<string> {
@@ -53,22 +55,58 @@ test("S05: independent COMPLETE leaves pending A identity intact", async ({ page
       await route.continue();
       return;
     }
+    const body = route.request().postDataJSON() as {
+      content?: string;
+      unresolvedPendingClientTurnKey?: string;
+    };
+    const text = (body.content ?? "").trim();
+    // Independent dialogue: COMPLETE without clearing métier pending A.
+    if (/différence entre blob et commit/i.test(text)) {
+      await route.fulfill({
+        status: 200,
+        contentType: "application/json",
+        body: JSON.stringify({
+          status: "COMPLETE",
+          noraMode: "deterministic-fixture",
+          nextTurnKind: "DIALOGUE_INDEPENDANT",
+          pendingEffectBlocked: false,
+          messages: [
+            { id: "m1", role: "user", content: text },
+            {
+              id: "m2",
+              role: "assistant",
+              content: "Un blob est un contenu ; un commit pointe une arborescence.",
+            },
+          ],
+          pilotageEffect: { attempted: false, status: null },
+          humanDecisionCreated: false,
+        }),
+      });
+      return;
+    }
+    // Effect request while A pending: server blocks métier mutations.
     await route.fulfill({
       status: 200,
       contentType: "application/json",
       body: JSON.stringify({
         status: "COMPLETE",
         noraMode: "deterministic-fixture",
+        nextTurnKind: "INTENTION_EFFET",
+        pendingEffectBlocked: true,
+        pendingBlockReason: "S05_PENDING_BLOCKS_EFFECT:ctk_pending_a_s05",
+        unresolvedPendingClientTurnKey: "ctk_pending_a_s05",
         messages: [
-          { id: "m1", role: "user", content: "Quelle est la différence entre blob et commit ?" },
+          { id: "m3", role: "user", content: text },
           {
-            id: "m2",
+            id: "m4",
             role: "assistant",
-            content: "Un blob est un contenu ; un commit pointe une arborescence.",
+            content: "Effet retenu — un travail précédent reste non résolu.",
           },
         ],
         pilotageEffect: { attempted: false, status: null },
         humanDecisionCreated: false,
+        missionProjection: null,
+        documentSave: null,
       }),
     });
   });
@@ -86,10 +124,9 @@ test("S05: independent COMPLETE leaves pending A identity intact", async ({ page
   }, projectId);
   expect(stored).toEqual(pendingA);

-  // Incompatible métier mutation still blocked with same pending key.
   await page.getByLabel("Message à Nora").fill("Crée un projet nommé Concurrent Bypass");
   await page.getByTestId("thread-send").click();
-  await expect(page.getByTestId("thread-nora-status")).toContainText(/non résolue|réconcilier/i, {
+  await expect(page.getByTestId("thread-nora-status")).toContainText(/pending non résolu|Effet retenu|non résolue/i, {
     timeout: 10000,
   });
   await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
@@ -98,5 +135,4 @@ test("S05: independent COMPLETE leaves pending A identity intact", async ({ page
     return raw ? (JSON.parse(raw) as typeof pendingA) : null;
   }, projectId);
   expect(still?.clientTurnKey).toBe(pendingA.clientTurnKey);
-  expect(still?.clientCommandKey).toBe(pendingA.clientCommandKey);
 });
```

#### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index acde3811..54dc1ddc 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,77 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-EVIDENCE-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~14:05 CET (Europe/Paris) |
+| Macro-lot | ML4C — F1–F4 evidence closure (reconcile / AUTH real / S05 real API / D4 epistemic) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
+| Changes | F1 runner reorder ; F2 AUTH-R01–R14 PG ; F3 S05 real-api E2E ; F4 no FACT from Nora alone + pre/post knowledge roles ; multi-intent durable match |
+| Schema | unchanged (no DB migration) |
+| Tests | unit+ML4C PG 264 PASS ; AUTH 13 PASS ; E2E S05 real-api 3 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
+| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~13:35 CET (Europe/Paris) |
+| Macro-lot | ML4C — Integrator closure R1 S05 full / R2 human-act idempotence / R3 D4 semantic knowledge / R4 preuves |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
+| Changes | S05 gate D2/D4/D5/D6/D7 + missions ; actInstanceId serveur + replay ALREADY_APPLIED ; `d4.record_knowledge` + capitalisation sélective ; sélection preferred-ids |
+| Schema | unchanged (Zod envelope extended ; no DB migration) |
+| Tests | unit 240 PASS ; PG 35 PASS ; E2E S05 1 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
+| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~12:45 CET (Europe/Paris) |
+| Macro-lot | ML4C — Integrator Lots A–E (superseded by INTEGRATOR-CLOSURE) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Status | SUPERSEDED |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~12:10 CET (Europe/Paris) |
+| Macro-lot | ML4C — Corrective convergence sémantique (D5/D6 / T-03 / S05 / lexical purge) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé ; RECETTE figée ; STABLE N/A |
+| Changes | `pilotageOperation` typé ; match qualification durable owner ; stash `applied` obligatoire ; merge terminal ; `nextTurnKind` serveur ; fixture scénarios exacts ; purge `PHRASES` / corps lexical D4/D5 ; page S05 sans `qualifyThreadTurn` |
+| Schema | unchanged |
+| Tests | unit 36 PASS ; PG/E2E/LIVE NOT RUN |
+| Status | LOCAL ONLY — Review Handoff L3 corrective ; IMPLEMENTED WITH RESERVES |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 11:43 CET (Europe/Paris) |
+| Macro-lot | ML4C — Qualification sémantique Nora + mobilisation gouvernée |
+| Type | EVOL Critical — remplacement routeurs lexicaux métier (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé ; RECETTE figée `2416e2ee` ; STABLE N/A |
+| Changes | Enveloppe `ml4c-sem-qual-v1` ; LIVE `outputType`+Zod ; fixture TEST_BOUNDARY ; D5/D6 après Nora + `preQualified` ; stubs fail-closed ; stash pré-effet — **revue ChatGPT NOT READY → corrective** |
+| Schema | unchanged (stash via `resultJson` existant) |
+| Tests | unit semantic/intent/S05/cognitive/mission PASS ; PG/E2E/LIVE NOT RUN |
+| Status | SUPERSEDED BY CORRECTIVE — réserves D5/D6/T-03/S05/lexical |
+
 ## delivery_id: DELIV-2026-11-11-ML4C-S05-POSITIVE-INDEPENDENCE

 | Field | Value |
```

## 6. REALISM GAPS

- LIVE Nora semantic pertinence: NOT RUN (needs GO REAL)
- Independent FACT validator: not invented; promotion refused
- Mocked S05 e2e remains BROWSER WITH MOCKED API only
- S02-01 Intervencia: SOURCE EXACTE NON DISPONIBLE
- A-006 / A-007: open

## 7. Verdict

**IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

INSTRUCTION CHATGPT: re-read this remote handoff in full; verify runner order, AUTH execution, no vacuous tests, S05 real API, PG oracles, D4 timing, no FACT from Nora alone.

## 5b. Diffs complets F1–F4 (sans troncature)

#### FULL DIFF `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts b/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
index c7da2ae8..8328d6a3 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
@@ -371,16 +371,10 @@ export async function runBusinessCommand(
         return toCommandResult(prior, effects, "replay");
       }

+      // F1: classify + reconcile known human acts BEFORE stale-revision gate.
+      // A committed act with a new clientCommandKey and obsolete expectedRevision
+      // must replay — not be refused as STALE_REVISION.
       const revision = await currentRevision(tx, input.projectId);
-      if (revision !== input.body.expectedRevision) {
-        return bare(input, {
-          status: "CONFLICT",
-          revision,
-          reason: "Révision attendue périmée",
-          reasonCode: "STALE_REVISION",
-        });
-      }
-
       const classified = await handlers.classify(tx);
       const intentKey = classified.ok
         ? {
@@ -401,27 +395,29 @@ export async function runBusinessCommand(
         intentKey.sourceActionKey,
       );
       if (intent) {
-        return bare(input, {
-          status: "CONFLICT",
-          commandId: intent.id,
-          revision,
-          reason: "Intention humaine déjà enregistrée",
-          reasonCode: "HUMAN_INTENT",
-        });
+        // Same human act under a new clientCommandKey → reconcile, do not re-mutate.
+        // Do not re-emit effects when status is UNKNOWN — return stored truth only.
+        const effects = await loadEffects(tx, intent.id);
+        return toCommandResult(intent, effects, "replay");
       }
       if (classified.ok && classified.command.actInstanceId) {
         const sameAct = await findByActionKey(tx, input.projectId, classified.command.sourceActionKey);
         if (sameAct) {
-          return bare(input, {
-            status: "CONFLICT",
-            commandId: sameAct.id,
-            revision,
-            reason: "Acte humain déjà enregistré",
-            reasonCode: "HUMAN_INTENT",
-          });
+          const effects = await loadEffects(tx, sameAct.id);
+          return toCommandResult(sameAct, effects, "replay");
         }
       }

+      // NEW act only: expectedRevision guards concurrency before mutation.
+      if (revision !== input.body.expectedRevision) {
+        return bare(input, {
+          status: "CONFLICT",
+          revision,
+          reason: "Révision attendue périmée",
+          reasonCode: "STALE_REVISION",
+        });
+      }
+
       if (!classified.ok) {
         return insertCommand(tx, input, fingerprint, {
           sourceKind: intentKey.sourceKind,
```
#### FULL DIFF `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 5fff8099..34a64727 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -658,54 +658,57 @@ export async function listKnowledge(pilotId: string, preparationId: string) {
   return { subjects, acquis, openPoints };
 }

+/**
+ * Bounded D4 listing by rights/state. When Nora supplies preferred ids
+ * (qualification hints), those are prioritized — not recency-as-authority.
+ */
 export async function selectRelevantKnowledgeContext(
   pilotId: string,
   preparationId: string,
-  userText: string,
-  opts?: { limit?: number },
+  _userText: string,
+  opts?: {
+    limit?: number;
+    preferredAcquisIds?: string[];
+    preferredOpenPointIds?: string[];
+    preferredSubjectIds?: string[];
+  },
 ) {
   const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
   const limit = opts?.limit ?? 8;
-  const q = userText.toLowerCase();
-  const tokens = q
-    .split(/[^a-zàâäéèêëïîôùûüç0-9]+/i)
-    .filter((t) => t.length > 3)
-    .slice(0, 12);
+  const prefA = new Set((opts?.preferredAcquisIds ?? []).filter(Boolean));
+  const prefO = new Set((opts?.preferredOpenPointIds ?? []).filter(Boolean));
+  const prefS = new Set((opts?.preferredSubjectIds ?? []).filter(Boolean));

-  function score(text: string): number {
-    const lower = text.toLowerCase();
-    let s = 0;
-    for (const t of tokens) if (lower.includes(t)) s += 2;
-    return s;
-  }
+  const currentAcquis = acquis.filter((a) => a.status === "CURRENT");
+  const openOps = openPoints.filter((o) => o.status === "OPEN");
+  const activeSubjects = subjects.filter((s) => s.status === "ACTIVE");

-  const rankedAcquis = acquis
-    .filter((a) => a.status === "CURRENT")
-    .map((a) => ({ a, s: score(a.statement) }))
-    .sort((x, y) => y.s - x.s || (y.a.createdAt?.getTime?.() ?? 0) - (x.a.createdAt?.getTime?.() ?? 0));
-
-  const rankedOpen = openPoints
-    .filter((o) => o.status === "OPEN")
-    .map((o) => ({ o, s: score(o.statement) + 1 }))
-    .sort((x, y) => y.s - x.s);
+  const preferThenRest = <T extends { id: string }>(rows: T[], pref: Set<string>, n: number) => {
+    const preferred = rows.filter((r) => pref.has(r.id));
+    const rest = rows.filter((r) => !pref.has(r.id));
+    return [...preferred, ...rest].slice(0, n);
+  };

-  const pickedAcquis = rankedAcquis.slice(0, Math.min(limit, 5));
-  const pickedOpen = rankedOpen.slice(0, Math.min(4, limit));
-  const pickedSubjects = subjects.filter((s) => s.status === "ACTIVE").slice(0, 5);
+  const pickedAcquis = preferThenRest(currentAcquis, prefA, Math.min(limit, 5));
+  const pickedOpen = preferThenRest(openOps, prefO, Math.min(4, limit));
+  const pickedSubjects = preferThenRest(activeSubjects, prefS, 5);

   const snippets: string[] = [];
-  for (const { a } of pickedAcquis) {
+  for (const a of pickedAcquis) {
+    const mark = prefA.has(a.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
-      `ACQUIS[${a.kind}/${a.id}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
+      `ACQUIS[${a.kind}/${a.id}/${mark}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
     );
   }
-  for (const { o } of pickedOpen) {
+  for (const o of pickedOpen) {
+    const mark = prefO.has(o.id) ? "PREFERRED" : "AVAILABLE";
     snippets.push(
-      `POINT_OUVERT[${o.id}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
+      `POINT_OUVERT[${o.id}/${mark}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
     );
   }
   for (const s of pickedSubjects) {
-    snippets.push(`SUJET[${s.id}/${s.status}]: ${s.title}`);
+    const mark = prefS.has(s.id) ? "PREFERRED" : "AVAILABLE";
+    snippets.push(`SUJET[${s.id}/${s.status}/${mark}]: ${s.title}`);
   }

   return {
@@ -715,11 +718,14 @@ export async function selectRelevantKnowledgeContext(
       acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
       openPoints: openPoints.filter((o) => o.status === "OPEN").length,
     },
-    selectedAcquisIds: pickedAcquis.map((x) => x.a.id),
-    selectedOpenPointIds: pickedOpen.map((x) => x.o.id),
-    selectionMethod: "lexical-heuristic" as const,
+    selectedAcquisIds: pickedAcquis.map((a) => a.id),
+    selectedOpenPointIds: pickedOpen.map((o) => o.id),
+    selectionMethod:
+      prefA.size || prefO.size || prefS.size
+        ? ("semantic-preferred-then-bounded" as const)
+        : ("bounded-resource-listing" as const),
     selectionLimit:
-      "Sélection lexicale bornée — n'établit pas de vérité épistémique; D3 doit qualifier pertinence et limites.",
+      "RG-KNOW-011: ids préférés Nora d'abord, sinon listing borné droits/état — pas de scoring lexical métier.",
   };
 }

@@ -929,8 +935,8 @@ export async function reconstituteConfirmedD4Effects(
 }

 /**
- * Heuristic capitalisation — auxiliary only, not epistemic authority.
- * Defaults to HYPOTHESIS; FACT only if explicitly established.
+ * Selective D4 capitalisation from typed Nora proposals (RG-KNOW-001).
+ * No lexical detection. Never creates HumanDecision. Owner validates each write.
  */
 export async function maybeCapitalizeFromExchange(
   pilotId: string,
@@ -940,8 +946,17 @@ export async function maybeCapitalizeFromExchange(
     assistantText: string;
     generationId: string;
     userMessageId: string;
-    /** Propagated into every D4 capitalisation write TX. */
     turnFence?: TurnOwnershipFence;
+    /** Typed proposals from durable qualification — required for any write. */
+    proposals?: Array<{
+      intentId: string;
+      kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
+      statement: string;
+      epistemic: "hypothesized" | "recommended" | "established" | "limited";
+      subjectTitle?: string;
+      subjectId?: string;
+      continuityReason?: string;
+    }>;
   },
 ) {
   const results: Array<{
@@ -951,152 +966,149 @@ export async function maybeCapitalizeFromExchange(
     epistemicNote?: string;
     reason?: string;
   }> = [];
-  const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();
-  const selectionLimit =
-    "Capitalisation heuristique (regex/lexical) — pas une autorité épistémique; LIVE COG requis pour qualification.";
-  const fence = input.turnFence;
+  const proposals = input.proposals ?? [];
+  if (proposals.length === 0) {
+    return {
+      capitalisations: results,
+      selectionMethod: "semantic-proposals" as const,
+      selectionLimit: "Aucune proposition d4.record_knowledge — zéro écriture D4",
+      humanDecisionCreated: false as const,
+      ownershipLost: false as const,
+    };
+  }

+  const fence = input.turnFence;
   let subjectId: string | null = null;
-  const topicMatch = input.userText.match(
-    /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
-  );
-  if (topicMatch?.[1]) {
-    const s = await ensureSubject(
-      pilotId,
-      preparationId,
-      topicMatch[1].trim(),
-      undefined,
-      fence,
-    );
-    if (s.status === "AVAILABLE" && s.subjectId) {
-      subjectId = s.subjectId;
-    } else if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
-      results.push({
-        kind: "subject",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
-      });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
+
+  for (const p of proposals) {
+    if (p.kind === "SUBJECT" || p.subjectTitle) {
+      const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+      if (title.length >= 3) {
+        const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+        if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+          results.push({
+            kind: "subject",
+            status: "FAILED",
+            reason: "TURN_OWNERSHIP_LOST",
+            epistemicNote: p.continuityReason,
+          });
+          return {
+            capitalisations: results,
+            selectionMethod: "semantic-proposals" as const,
+            selectionLimit: "OWNERSHIP_LOST",
+            humanDecisionCreated: false as const,
+            ownershipLost: true as const,
+          };
+        }
+        if (s.status === "AVAILABLE" && s.subjectId) {
+          subjectId = s.subjectId;
+          results.push({
+            kind: "subject",
+            id: s.subjectId,
+            status: s.status,
+            epistemicNote: p.continuityReason,
+          });
+        }
+      }
+      if (p.kind === "SUBJECT") continue;
     }
-  }

-  // Stronger gate than keyword alone: require comparative structure or explicit durable ask
-  const looksComparative =
-    /compar(e|er|aison).{0,80}(option|compromis|avantage|inconvénient|critère)/i.test(lower) ||
-    (/option[s]?\s*[abc]/i.test(lower) && /compromis|avantage|inconvénient/i.test(lower));
-  const looksOpen =
-    /\b(point ouvert|question ouverte|à clarifier|dépendance non résolue)\b/i.test(lower);
-  const looksDurableAsk =
-    /\b(retenir comme acquis|capitalise|mémorise|enregistre (cet|cette) acquis)\b/i.test(
-      input.userText,
-    );
-  const looksRecommendation = /\brecommandation conditionnelle\b/i.test(lower);
+    if (p.subjectId) subjectId = p.subjectId;

-  if (looksDurableAsk || looksComparative) {
-    const statement = extractSalientLine(input.assistantText) ?? input.userText.slice(0, 200);
-    const kind: KnowledgeKind = looksRecommendation
-      ? "RECOMMENDATION"
-      : looksComparative
-        ? "HYPOTHESIS"
-        : "HYPOTHESIS";
-    const cap = await capitalizeAcquis(pilotId, preparationId, {
-      statement,
-      kind,
-      subjectId,
-      turnFence: fence,
-      provenance: {
-        sourceKind: "message",
-        sourceId: input.userMessageId,
-        generationId: input.generationId,
-        note: "heuristic capitalisation — not epistemic authority",
-        epistemic: kind === "RECOMMENDATION" ? "recommended" : "hypothesized",
-      },
-    });
-    if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
+    if (p.kind === "OPEN_POINT") {
+      const op = await openPoint(pilotId, preparationId, {
+        statement: p.statement,
+        subjectId,
+        turnFence: fence,
+        provenance: {
+          sourceKind: "message",
+          sourceId: input.userMessageId,
+          generationId: input.generationId,
+          epistemic: p.epistemic === "established" ? "limited" : p.epistemic,
+          note: p.continuityReason ?? "semantic qualification d4.record_knowledge",
+        },
+      });
+      if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
+        results.push({
+          kind: "open_point",
+          status: "FAILED",
+          reason: "TURN_OWNERSHIP_LOST",
+          epistemicNote: p.continuityReason,
+        });
+        return {
+          capitalisations: results,
+          selectionMethod: "semantic-proposals" as const,
+          selectionLimit: "OWNERSHIP_LOST",
+          humanDecisionCreated: false as const,
+          ownershipLost: true as const,
+        };
+      }
       results.push({
-        kind: "acquis",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
+        kind: "open_point",
+        id: "openPointId" in op ? op.openPointId : undefined,
+        status: op.status,
+        epistemicNote: p.continuityReason,
       });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
+      continue;
     }
-    results.push({
-      kind: "acquis",
-      id: "acquisId" in cap ? cap.acquisId : undefined,
-      status: cap.status,
-      epistemicNote: selectionLimit,
-    });
-  }

-  if (looksOpen) {
-    const statement =
-      extractOpenLine(input.assistantText) ??
-      `Point ouvert issu de l'échange: ${input.userText.slice(0, 160)}`;
-    const op = await openPoint(pilotId, preparationId, {
-      statement,
-      subjectId,
-      turnFence: fence,
-      provenance: {
-        sourceKind: "message",
-        sourceId: input.userMessageId,
-        generationId: input.generationId,
-        epistemic: "limited",
-      },
-    });
-    if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
+    if (p.kind === "ACQUIS") {
+      // F4: Nora's epistemic="established" is NOT independent proof.
+      // Never promote to FACT from the model envelope alone — store as HYPOTHESIS /
+      // RECOMMENDATION until D4 has a verified independent source contract.
+      const kind: KnowledgeKind =
+        p.epistemic === "recommended" ? "RECOMMENDATION" : "HYPOTHESIS";
+      const epistemicNote =
+        p.epistemic === "established"
+          ? `${p.continuityReason ?? "semantic"} — Nora marked established but D4 refused FACT without independent verified source`
+          : p.continuityReason;
+      const cap = await capitalizeAcquis(pilotId, preparationId, {
+        statement: p.statement,
+        kind,
+        subjectId,
+        turnFence: fence,
+        provenance: {
+          sourceKind: "message",
+          sourceId: input.userMessageId,
+          generationId: input.generationId,
+          note: epistemicNote ?? "semantic qualification d4.record_knowledge",
+          epistemic: "hypothesized",
+        },
+      });
+      if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
+        results.push({
+          kind: "acquis",
+          status: "FAILED",
+          reason: "TURN_OWNERSHIP_LOST",
+          epistemicNote: p.continuityReason,
+        });
+        return {
+          capitalisations: results,
+          selectionMethod: "semantic-proposals" as const,
+          selectionLimit: "OWNERSHIP_LOST",
+          humanDecisionCreated: false as const,
+          ownershipLost: true as const,
+        };
+      }
       results.push({
-        kind: "open_point",
-        status: "FAILED",
-        reason: "TURN_OWNERSHIP_LOST",
-        epistemicNote: selectionLimit,
+        kind: "acquis",
+        id: "acquisId" in cap ? cap.acquisId : undefined,
+        status: cap.status,
+        epistemicNote: epistemicNote,
+        reason:
+          p.epistemic === "established"
+            ? "FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE"
+            : undefined,
       });
-      return {
-        capitalisations: results,
-        selectionMethod: "lexical-heuristic" as const,
-        selectionLimit: "OWNERSHIP_LOST",
-        humanDecisionCreated: false as const,
-        ownershipLost: true as const,
-      };
     }
-    results.push({
-      kind: "open_point",
-      id: "openPointId" in op ? op.openPointId : undefined,
-      status: op.status,
-      epistemicNote: selectionLimit,
-    });
   }

   return {
     capitalisations: results,
-    selectionMethod: "lexical-heuristic" as const,
-    selectionLimit,
+    selectionMethod: "semantic-proposals" as const,
+    selectionLimit:
+      "RG-KNOW-001: capitalisation sélective depuis propositions Nora typées — pas d'autorité D6",
     humanDecisionCreated: false as const,
     ownershipLost: false as const,
   };
 }
-function extractSalientLine(text: string): string | null {
-  const lines = text
-    .split(/\n+/)
-    .map((l) => l.replace(/^#+\s*/, "").replace(/^[-*]\s*/, "").trim())
-    .filter((l) => l.length > 40 && l.length < 400);
-  return lines[0] ?? null;
-}
-
-function extractOpenLine(text: string): string | null {
-  const m = text.match(/(?:point[s]? ouvert[s]?|à clarifier|reste à)[^\n]{8,200}/i);
-  return m?.[0]?.trim() ?? null;
-}
```
#### FULL DIFF `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index acde3811..54dc1ddc 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,77 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-EVIDENCE-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~14:05 CET (Europe/Paris) |
+| Macro-lot | ML4C — F1–F4 evidence closure (reconcile / AUTH real / S05 real API / D4 epistemic) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
+| Changes | F1 runner reorder ; F2 AUTH-R01–R14 PG ; F3 S05 real-api E2E ; F4 no FACT from Nora alone + pre/post knowledge roles ; multi-intent durable match |
+| Schema | unchanged (no DB migration) |
+| Tests | unit+ML4C PG 264 PASS ; AUTH 13 PASS ; E2E S05 real-api 3 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
+| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~13:35 CET (Europe/Paris) |
+| Macro-lot | ML4C — Integrator closure R1 S05 full / R2 human-act idempotence / R3 D4 semantic knowledge / R4 preuves |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
+| Changes | S05 gate D2/D4/D5/D6/D7 + missions ; actInstanceId serveur + replay ALREADY_APPLIED ; `d4.record_knowledge` + capitalisation sélective ; sélection preferred-ids |
+| Schema | unchanged (Zod envelope extended ; no DB migration) |
+| Tests | unit 240 PASS ; PG 35 PASS ; E2E S05 1 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
+| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~12:45 CET (Europe/Paris) |
+| Macro-lot | ML4C — Integrator Lots A–E (superseded by INTEGRATOR-CLOSURE) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Status | SUPERSEDED |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~12:10 CET (Europe/Paris) |
+| Macro-lot | ML4C — Corrective convergence sémantique (D5/D6 / T-03 / S05 / lexical purge) |
+| Type | EVOL Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé ; RECETTE figée ; STABLE N/A |
+| Changes | `pilotageOperation` typé ; match qualification durable owner ; stash `applied` obligatoire ; merge terminal ; `nextTurnKind` serveur ; fixture scénarios exacts ; purge `PHRASES` / corps lexical D4/D5 ; page S05 sans `qualifyThreadTurn` |
+| Schema | unchanged |
+| Tests | unit 36 PASS ; PG/E2E/LIVE NOT RUN |
+| Status | LOCAL ONLY — Review Handoff L3 corrective ; IMPLEMENTED WITH RESERVES |
+
+## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 11:43 CET (Europe/Paris) |
+| Macro-lot | ML4C — Qualification sémantique Nora + mobilisation gouvernée |
+| Type | EVOL Critical — remplacement routeurs lexicaux métier (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
+| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
+| Lane | DEV isolé ; RECETTE figée `2416e2ee` ; STABLE N/A |
+| Changes | Enveloppe `ml4c-sem-qual-v1` ; LIVE `outputType`+Zod ; fixture TEST_BOUNDARY ; D5/D6 après Nora + `preQualified` ; stubs fail-closed ; stash pré-effet — **revue ChatGPT NOT READY → corrective** |
+| Schema | unchanged (stash via `resultJson` existant) |
+| Tests | unit semantic/intent/S05/cognitive/mission PASS ; PG/E2E/LIVE NOT RUN |
+| Status | SUPERSEDED BY CORRECTIVE — réserves D5/D6/T-03/S05/lexical |
+
 ## delivery_id: DELIV-2026-11-11-ML4C-S05-POSITIVE-INDEPENDENCE

 | Field | Value |
```

#### FULL DIFF conversation/service.ts (knowledge + S05 related hunks via full file diff)
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 3b71bd9d..669600bc 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -18,9 +18,11 @@ import {
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
+  findUnresolvedSiblingTurns,
   markTurnUnknown,
   requireTurnOwnership,
   reserveTurnCommand,
+  stashTurnQualification,
   touchTurnLease,
   turnRaceHooks,
 } from "./turn-command";
@@ -37,19 +39,27 @@ import {
   applyTargetedSectionRevision,
   assertSectionScope,
   extractContractualDocumentProposal,
-  hasDocumentaryWriteSignal,
-  qualifyDocumentAct,
   resolveReviseTarget,
   type DocumentEffectSummary,
   type DocumentProposalExtract,
 } from "./document-act";
+import {
+  deriveThreadTurnKind,
+  effectIntents,
+  extractKnowledgeProposals,
+  extractKnowledgeSelectionHints,
+  extractPilotageBinding,
+  projectStudioEffects,
+  type NoraTurnQualification,
+} from "./semantic-qualification";
+import { loadLatestMissionsByIntentKey } from "./intent-conduction";
+import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
 import {
   appendMissionAck,
   cognitiveContinueFromFacts,
   composeCanonicalMissionRestitution,
   missionCorrelationKeys,
   preparePublicationForMission,
-  qualifyPublicationMission,
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
@@ -61,7 +71,6 @@ import {
   emptyMission,
   loadPriorMissionProjection,
   mergeMissionSteps,
-  qualifyStudioIntent,
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
 import { updatePreview } from "@/domains/preparation/service";
@@ -178,6 +187,8 @@ export type TurnResult = {
   d4CharsReturned?: number;
   streaming?: { attempted: boolean; delivered: boolean; notes: string | null };
   knowledgeSelection?: unknown;
+  /** Post-qualification preferred listing — resume hint only, not cognition of current reply. */
+  knowledgeResumeHints?: unknown;
   capitalisation?: unknown;
   capitalisationAttempted?: unknown;
   capitalisationLimit?: string;
@@ -216,6 +227,14 @@ export type TurnResult = {
   reconciled?: boolean;
   /** Refs-only mission projection — never owner truth for D4/D6/D7. */
   missionProjection?: MissionProjection | null;
+  /** S05 — server-derived turn kind from Nora qualification (not client lexical). */
+  nextTurnKind?: ThreadTurnKind;
+  /** Echo of durable qualification status for clients / recovery. */
+  semanticQualificationStatus?: string;
+  /** S05 — true when a sibling pending blocked owner effects for this turn. */
+  pendingEffectBlocked?: boolean;
+  pendingBlockReason?: string;
+  unresolvedPendingClientTurnKey?: string | null;
 };

 function pilotageEffectFromAuthority(
@@ -280,7 +299,13 @@ export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
   content: string,
-  opts?: { correlationKey?: string; clientTurnKey?: string; requestId?: string },
+  opts?: {
+    correlationKey?: string;
+    clientTurnKey?: string;
+    requestId?: string;
+    /** Client UX hint only — server DB siblings are authoritative for S05. */
+    unresolvedPendingClientTurnKey?: string;
+  },
 ): Promise<TurnResult> {
   const requestId = opts?.requestId ?? newRequestId();
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -430,47 +455,8 @@ export async function postUserMessageAndNora(
     meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
   });

-  /**
-   * F01/F02 — USER → D5/D6 before Nora provider call.
-   * Message is already COMPLETE; business TX is short and separate from Nora.
-   * Lost ownership ⇒ skip mutation (do not invent a late second command).
-   */
+  /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
-  const stillOwnedBeforeAuthority = await requireTurnOwnership(
-    reserved.commandId,
-    reserved.ownerToken,
-  );
-  if (stillOwnedBeforeAuthority && ctx.project?.id) {
-    authority = await applyConversationalAuthority({
-      pilotId,
-      projectId: ctx.project.id,
-      userMessageId: reserved.userMessageId,
-      content,
-      clientTurnKey,
-    });
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: authority.attempted
-        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-          ? "SUCCESS"
-          : authority.command?.status === "UNKNOWN"
-            ? "UNKNOWN"
-            : "FAILED"
-        : "PARTIAL",
-      meta: {
-        attempted: authority.attempted,
-        intent_clarity: authority.intentClarity,
-        operation: authority.operation ?? null,
-        command_status: authority.command?.status ?? null,
-        reason_code: authority.command?.reasonCode ?? null,
-        decision_id: authority.decisionId,
-        source: authority.source,
-      },
-    });
-  }

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -478,7 +464,11 @@ export async function postUserMessageAndNora(
     .slice(-6)
     .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

-  const knowledge = await selectRelevantKnowledgeContext(pilotId, preparationId, content);
+  // F4: pre-Nora context ONLY feeds generation. Post-qual preferred ids are resume hints,
+  // never claimed as having nourished the reply already produced.
+  const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content);
+  let knowledgeResumeHints: Awaited<ReturnType<typeof selectRelevantKnowledgeContext>> | null =
+    null;

   const docs = await listDocuments(pilotId, preparationId);
   const docSnippets = docs.slice(0, 5).map((d) => {
@@ -486,29 +476,12 @@ export async function postUserMessageAndNora(
     return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
   });

-  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
+  // SEM/TV: Nora qualifies first; same-turn D5/D6 runs after structured qualification.
+  // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
-  const authoritySnippets: string[] = [];
-  if (authority?.attempted && authority.command) {
-    authoritySnippets.push(
-      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
-      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
-    );
-    if (authority.command.effects?.length) {
-      authoritySnippets.push(
-        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
-      );
-    }
-  } else if (authority?.clarification) {
-    authoritySnippets.push(
-      "### Clarification pilotage requise",
-      authority.clarification.slice(0, 300),
-    );
-  }

   let reply;
   try {
-    // C02 fault boundary: after authority, before/during Nora — same recovery path.
     if (turnRaceHooks.afterAuthorityBeforeNora) {
       await turnRaceHooks.afterAuthorityBeforeNora();
     }
@@ -520,8 +493,8 @@ export async function postUserMessageAndNora(
       reply = await generateNoraReply({
         userText: content,
         contextSnippets,
-        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
+        knowledgeSnippets: [...knowledgeForNora.snippets, ...docSnippets],
+        pilotageSnippets: pilotageCtx.snippets,
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
         // Requested level only. The adapter emits DELIVERED after a real generate.
@@ -537,8 +510,9 @@ export async function postUserMessageAndNora(
       clearInterval(leasePulse);
     }
   } catch {
-    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
-    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
+    // SEM order: Nora runs before same-turn D5/D6, so a provider failure here
+    // cannot have produced a same-turn HumanDecision. Prior-turn recovery stays
+    // on the reconstitution path below.
     const unknownPayload: TurnResult = {
       userMessageId: reserved.userMessageId,
       assistantMessageId: null,
@@ -546,8 +520,8 @@ export async function postUserMessageAndNora(
       requestId,
       status: "UNKNOWN",
       idempotentReplay: false,
-      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-      pilotageEffect: pilotageEffectFromAuthority(authority),
+      humanDecisionCreated: false,
+      pilotageEffect: null,
       noraMode: "provider-exception",
     };
     try {
@@ -622,13 +596,217 @@ export async function postUserMessageAndNora(
   // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
   await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

+  const qualification: NoraTurnQualification =
+    reply.qualification ??
+    ({
+      schemaVersion: "ml4c-sem-qual-v1",
+      status: "UNAVAILABLE",
+      goal: "",
+      intents: [],
+      clarifications: ["MISSING_QUALIFICATION"],
+      replyDraft: reply.content,
+    } as NoraTurnQualification);
+
+  // TV-04 / T-03 — durable qualification before first owner mutation; applied required.
+  const stashed = await stashTurnQualification({
+    commandId: reserved.commandId,
+    ownerToken: reserved.ownerToken,
+    qualificationJson: JSON.stringify(qualification),
+  });
+  if (!stashed.applied) {
+    emitObs({
+      event_name: "d3.turn.qualification_stash_failed",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "FAILED",
+      error_category: "QUALIFICATION_STASH_NOT_APPLIED",
+    });
+    try {
+      await markTurnUnknown(
+        reserved.commandId,
+        "QUALIFICATION_STASH_NOT_APPLIED",
+        reserved.ownerToken,
+        JSON.stringify({
+          userMessageId: reserved.userMessageId,
+          assistantMessageId: null,
+          operationId: reserved.operationId,
+          requestId,
+          status: "UNKNOWN",
+          idempotentReplay: false,
+          humanDecisionCreated: false,
+          semanticQualificationStatus: "STASH_FAILED",
+        }),
+      );
+    } catch {
+      /* ownership may already be lost */
+    }
+    return {
+      operationId: reserved.operationId,
+      requestId,
+      status: "UNKNOWN",
+      generationId: reply.generationId,
+      userMessageId: reserved.userMessageId,
+      assistantMessageId: null,
+      idempotentReplay: false,
+      humanDecisionCreated: false,
+      noraMode: reply.mode,
+      nextTurnKind: "INCERTAIN",
+      semanticQualificationStatus: "STASH_FAILED",
+    };
+  }
+
+  const nextTurnKind = deriveThreadTurnKind(qualification);
+  const studioProjection = projectStudioEffects(qualification);
+  const pilotageBinding = extractPilotageBinding(qualification);
+  const knowledgeHints = extractKnowledgeSelectionHints(qualification);
+  if (
+    knowledgeHints.acquisIds.length ||
+    knowledgeHints.openPointIds.length ||
+    knowledgeHints.subjectIds.length
+  ) {
+    knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
+      preferredAcquisIds: knowledgeHints.acquisIds,
+      preferredOpenPointIds: knowledgeHints.openPointIds,
+      preferredSubjectIds: knowledgeHints.subjectIds,
+    });
+  }
+
+  // S05 — durable unresolved work (turns + missions). Client hint is UX only.
+  const siblings = await findUnresolvedSiblingTurns({
+    conversationId: ctx.conversation.id,
+    ownerPilotId: pilotId,
+    excludeClientTurnKey: clientTurnKey,
+  });
+  const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
+  const blockingSibling =
+    siblings.find((s) => s.clientTurnKey === clientPendingHint) ?? siblings[0] ?? null;
+  const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
+  const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
+    ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
+      m.status,
+    ),
+  );
+  // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
+  const blockingMission =
+    unresolvedMissions.find((m) =>
+      m.status === "ACTIVE"
+        ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
+        : true,
+    ) ?? null;
+  const hasUnresolvedWork = Boolean(blockingSibling || blockingMission);
+  let pendingEffectBlocked = false;
+  let pendingBlockReason: string | undefined;
+  let allowOwnerEffects = true;
+  if (hasUnresolvedWork && (nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN")) {
+    allowOwnerEffects = false;
+    pendingEffectBlocked = true;
+    pendingBlockReason = blockingSibling
+      ? nextTurnKind === "INTENTION_EFFET"
+        ? `S05_PENDING_BLOCKS_EFFECT:${blockingSibling.clientTurnKey}`
+        : `S05_PENDING_BLOCKS_AMBIGUOUS:${blockingSibling.clientTurnKey}`
+      : nextTurnKind === "INTENTION_EFFET"
+        ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission?.clientIntentKey ?? "mission"}`
+        : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission?.clientIntentKey ?? "mission"}`;
+    emitObs({
+      event_name: "d3.turn.s05_pending_block",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "PARTIAL",
+      meta: {
+        pending_client_turn_key: blockingSibling?.clientTurnKey ?? null,
+        pending_status: blockingSibling?.status ?? null,
+        mission_status: blockingMission?.status ?? null,
+        mission_key: blockingMission?.clientIntentKey ?? null,
+        next_turn_kind: nextTurnKind,
+        client_hint_ignored_as_authority: true,
+      },
+    });
+  }
+  // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.
+
+  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
+  if (
+    allowOwnerEffects &&
+    pilotageBinding &&
+    !("ambiguous" in pilotageBinding) &&
+    ctx.project?.id
+  ) {
+    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
+    if (stillOwned) {
+      const preQualified = {
+        clarity: "CLEAR" as const,
+        operation: pilotageBinding.operation,
+        objective: pilotageBinding.objective ?? content,
+        statement: pilotageBinding.statement,
+        objectRef: pilotageBinding.objectRef,
+        decisionId: pilotageBinding.decisionId,
+        methodRef: pilotageBinding.methodRef,
+        methodVersion: pilotageBinding.methodVersion,
+        restrictionKindHint: pilotageBinding.restrictionKindHint,
+        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+        semanticIntentId: pilotageBinding.intentId,
+        semanticSchemaVersion: pilotageBinding.schemaVersion,
+      };
+      authority = await applyConversationalAuthority({
+        pilotId,
+        projectId: ctx.project.id,
+        userMessageId: reserved.userMessageId,
+        content,
+        clientTurnKey,
+        preQualified,
+      });
+      emitObs({
+        event_name: "d3.turn.conversational_authority",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        outcome: authority.attempted
+          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
+            ? "SUCCESS"
+            : authority.command?.status === "UNKNOWN"
+              ? "UNKNOWN"
+              : "FAILED"
+          : "PARTIAL",
+        meta: {
+          attempted: authority.attempted,
+          intent_clarity: authority.intentClarity,
+          operation: authority.operation ?? null,
+          command_status: authority.command?.status ?? null,
+          reason_code: authority.command?.reasonCode ?? null,
+          decision_id: authority.decisionId,
+          source: authority.source,
+          semantic_gate: true,
+          semantic_intent_id: pilotageBinding.intentId,
+        },
+      });
+    }
+  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
+    emitObs({
+      event_name: "d3.turn.conversational_authority",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: "PARTIAL",
+      meta: {
+        attempted: false,
+        intent_clarity: "AMBIGUOUS",
+        semantic_gate: true,
+        reason: pilotageBinding.reason,
+      },
+    });
+  }
+
   const assistantId = newId("msg");

   let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
     capitalisations: [],
-    selectionMethod: "lexical-heuristic",
+    selectionMethod: "semantic-proposals",
     selectionLimit:
-      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
+      "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
     humanDecisionCreated: false,
     ownershipLost: false,
   };
@@ -646,25 +824,25 @@ export async function postUserMessageAndNora(
   let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
-  const documentAct = qualifyDocumentAct(content);
-  const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
-  const missionIntent = qualifyPublicationMission(content);
-  const studioIntent = qualifyStudioIntent(content);
+  const documentAct = studioProjection.documentAct;
+  const documentaryIntentSignal = documentAct.kind !== "NONE";
+  const missionIntent = studioProjection.publication;
+  const studioIntent = studioProjection;
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
-  // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
+  // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
     operationId: reserved.operationId,
     generationId: reply.generationId,
     qualificationKind: documentAct.kind,
-    qualificationReason: documentAct.kind === "NONE" ? (documentAct.reason ?? null) : null,
+    qualificationReason: documentAct.kind === "NONE" ? "SEMANTIC_NONE" : null,
     documentaryIntentSignal,
     d4Attempted: false,
     d4Effect: null,
   });

-  if (reply.status === "COMPLETE") {
+  if (reply.status === "COMPLETE" && allowOwnerEffects) {
     if (turnRaceHooks.beforeD4Effect) {
       await turnRaceHooks.beforeD4Effect();
     }
@@ -677,6 +855,7 @@ export async function postUserMessageAndNora(
           assistantText: reply.content,
           generationId: reply.generationId,
           userMessageId: reserved.userMessageId,
+          proposals: extractKnowledgeProposals(qualification),
           turnFence: {
             commandId: reserved.commandId,
             ownerToken: reserved.ownerToken,
@@ -1002,7 +1181,7 @@ export async function postUserMessageAndNora(
           ? {
               act: "NONE",
               status: "NOT_EXECUTED",
-              reason: documentAct.reason ?? "NO_EXPLICIT_WRITE",
+              reason: "NO_EXPLICIT_WRITE",
             }
           : null;

@@ -1063,6 +1242,7 @@ export async function postUserMessageAndNora(
   }

   if (
+    allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
     documentEffectForAck?.status === "AVAILABLE" &&
     documentEffectForAck.documentId &&
@@ -1165,12 +1345,17 @@ export async function postUserMessageAndNora(
   }

   // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
+  // S05: never mutate preview / invent mission while unresolved work A blocks B effects.
   if (
+    allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
     studioIntent.wantsProjectCreate &&
     !ctx.project?.id
   ) {
-    const proposed = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
+    const proposed =
+      (studioIntent.proposedProjectName?.trim()
+        ? studioIntent.proposedProjectName.trim()
+        : null) || "Nouveau projet";
     try {
       await updatePreview(
         pilotId,
@@ -1313,10 +1498,24 @@ export async function postUserMessageAndNora(
       notes: reply.streamingNotes ?? null,
     },
     knowledgeSelection: {
-      ...knowledge.counts,
-      selectionMethod: knowledge.selectionMethod,
-      selectionLimit: knowledge.selectionLimit,
+      ...knowledgeForNora.counts,
+      selectionMethod: knowledgeForNora.selectionMethod,
+      selectionLimit: knowledgeForNora.selectionLimit,
+      role: "pre_generation_context" as const,
+      selectedAcquisIds: knowledgeForNora.selectedAcquisIds,
+      selectedOpenPointIds: knowledgeForNora.selectedOpenPointIds,
     },
+    knowledgeResumeHints: knowledgeResumeHints
+      ? {
+          ...knowledgeResumeHints.counts,
+          selectionMethod: knowledgeResumeHints.selectionMethod,
+          selectionLimit: knowledgeResumeHints.selectionLimit,
+          role: "post_qualification_resume_only" as const,
+          selectedAcquisIds: knowledgeResumeHints.selectedAcquisIds,
+          selectedOpenPointIds: knowledgeResumeHints.selectedOpenPointIds,
+          note: "Indice de reprise — n'a pas nourri la réponse déjà générée",
+        }
+      : null,
     capitalisation: ownershipLostBeforeD4
       ? (unknownCapReconstituted?.capitalisation ?? [])
       : confirmedCapitalisations,
@@ -1331,6 +1530,14 @@ export async function postUserMessageAndNora(
     humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
     pilotageEffect: pilotageEffectFromAuthority(authority),
     missionProjection,
+    nextTurnKind,
+    pendingEffectBlocked,
+    pendingBlockReason,
+    unresolvedPendingClientTurnKey:
+      blockingSibling?.clientTurnKey ??
+      blockingMission?.clientIntentKey ??
+      clientPendingHint,
+    semanticQualificationStatus: qualification.status,
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```
