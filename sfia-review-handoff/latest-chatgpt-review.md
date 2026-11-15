# SFIA Review Pack FULL — ML4C S05 browser real-api triage

## A. Date / heure

2026-11-15 ~04:10 CET (Europe/Paris) — republication FULL complète pour ChatGPT

Republication L3 : pack FULL avec **contenu complet** des fichiers modifiés (fixture + spec), pour revue ChatGPT. Aucun nouveau changement produit depuis `a30d47d2`.

## B. GO / profil / cycle

- GO Morris : SFIA STUDIO NEXT — ML4C — TRIAGE ET REMÉDIATION DES TESTS NAVIGATEUR S05 REAL API
- Contrat : SFIA v2.6
- Cycle : 6 — Delivery projet
- Profil : CRITICAL
- Typologie : INC / RUN CORRECTIVE
- Produit : `projects/sfia-studio-next/`
- Version technique : `0.0.0-dev`
- Classification : PATCH corrective candidate / NO RELEASE
- STABLE : NOT AVAILABLE
- Republication handoff : OUI (contenu complet demandé)

## C. Git Truth initial / final

### Initial (avant correction — baseline Phase A)

| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| tree | `90ae38e3b0c4536bd3f4d062725ce460ce01e06c` |
| parent | `a2d37d1f600836f353f44061687f0795cdc10377` |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| handoff au démarrage cycle | `sfia/review-handoff@9fe6f63cd44aa64ed14a66974e4b97ee71b28e7e` blob `7d57f65b…` |
| PR #676 | OPEN / NOT MERGED — HEAD `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| status | clean hors `.tmp-sfia-review/` |

Git Truth initial : **PASS**.

### Final (état produit au moment de cette republication)

| Champ | Valeur |
| --- | --- |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| tree | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| parent | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| message | `test(next): align S05 browser fixtures with effect-risk policy` |
| status | clean hors `.tmp-sfia-review/chatgpt-review.md` |
| Push produit | **NON** |
| PR / merge | **NON** |
| RECETTE | **inchangée** |
| Handoff précédent publié | `cfde3e99` blob `eecbd099` (synthèse ; remplacé par la présente republication complète) |

## D. Sources lues et refs

- Conception corrective : branche `docs/next-ml4c-d4-continuity-corrective-design-20261114` commit `c883db07` blob `da397424`
- INV-01…INV-10 ; politique S05 ; QA-01…QA-20 ; G-01…G-10
- Runtime **lecture seule** : `s05-pending-policy.ts`, `service.ts`, `turn-command.ts`, `semantic-qualification.ts`, `intent-conduction.ts`, `e2e-fixture-gate.ts`
- Handoffs : `9fe6f63c` (P3), `c3ec20fb` (knowledge), `66b44bc2` (owner probe), `cfde3e99` (1ère publication ce cycle)
- Code local `a30d47d2` prime sur PR #676 non synchronisée

## E. Reproduction exacte des trois FAIL

Commande Phase A (HEAD `6c50a144`, aucune modification) :

```bash
cd projects/sfia-studio-next/web
npx playwright test tests/e2e/ml4c-s05-real-api.spec.ts --reporter=line
```

ENV-01 : Web `127.0.0.1:3101`, DB `sfia_next_e2e` (container `sfia-next-dev-pg` port `5433`), Nora fixture, RECETTE non utilisée.

Baseline : **4 PASS / 3 FAIL** (26.5s).

### FAIL 1 — S05-REAL-01/02/03/04/06/08/09

- Assertion : `ml4c-s05-real-api.spec.ts:134` — `expect(bodyCycle.pendingEffectBlocked).toBe(true)`
- Attendu : `true` / Observé : `false`
- Fixture A : `seed_unknown` = UNKNOWN + QUALIFIED + `d3.converse` + EXPLORE
- Message B : « Ouvre le cycle cadrage. » via API messages réelle
- Divergence : S05 → `PROVEN_NO_EFFECT` → pas de blocage
- Classification : **oracle obsolète** (pas défaut runtime)

### FAIL 2 — S05-REAL-07

- Assertion : L242 — `expect(body.pendingEffectBlocked).toBe(true)`
- Attendu : `true` malgré lying sessionStorage pending / Observé : `false`
- Même sibling SAFE ; hint client non autorité
- Classification : **oracle obsolète** (RISK seed manquant)

### FAIL 3 — S05-REAL-10

- Assertion : L414 — `expect(body.pilotageEffect?.attempted).not.toBe(true)`
- Attendu : not `true` / Observé : `true` (owner D5 atteint sous SAFE)
- Classification : **oracle obsolète** ; runtime conforme

## F. Matrice ancien oracle / contrat actuel

| Scénario | Ancien oracle E2E | Contrat S05 actuel | Décision |
| --- | --- | --- | --- |
| UNKNOWN + EXPLORE + owner probe vide | Bloquer tout effet B | `PROVEN_NO_EFFECT` | Corriger oracle SAFE |
| UNKNOWN + REQUEST_EFFECT actionnable, issue non réconciliée | Non couvert | `UNKNOWN_EFFECT_RISK` | Ajouter fixture RISK |
| AWAITING_PILOT_ACT | Bloquer effets | Garde mission | Conserver |
| clientPendingHint falsifié | Bloquer si A « pending » | Hint jamais autorité | RISK seed |
| Concurrence sous SAFE A | Interdire attempt D5 | S05 non-bloqueur | RISK seed pour no-métier |

## G. Qualification des fixtures

| Action | Statut | Qualification | Effet métier | Classe S05 |
| --- | --- | --- | --- | --- |
| `seed_unknown` | UNKNOWN | QUALIFIED / d3.converse / EXPLORE | Aucun | PROVEN_NO_EFFECT |
| `seed_unknown_effect_risk` | UNKNOWN | QUALIFIED / d5.pilotage_command / REQUEST_EFFECT / OPEN_CYCLE | Aucun | UNKNOWN_EFFECT_RISK |
| `seed_awaiting_mission` | COMPLETE | mission AWAITING_PILOT_ACT | Aucun | Garde mission |
| `oracle` | — | lecture DB | — | — |

Gardes : `e2eFixtureMutationsAllowed()`, session Pilote, ownership préparation, pas d'exception ID, pas de schéma, pas d'effet métier dans le seed RISK.

## H. Cas UNKNOWN sans effet (SAFE)

Test `S05-SAFE-01/08/09` : dialogue indépendant OK ; intention effet **non** bloquée par S05 sur A ; hint effacé sans autorité ; A recoverable après reload.

## I. Cas UNKNOWN à effet incertain (RISK)

Test `S05-RISK-01/02/03/04/06` + fixture : fixture refuse OK si ≠ `UNKNOWN_EFFECT_RISK` ; OPEN_CYCLE / create / document bloqués ; zéro mutation oracle ; dialogue indépendant OK ; hint effacé → protection inchangée.

## J. Cas AWAITING_PILOT_ACT

`S05-REAL-05 / S05-M01` + `S05-M02` PASS : `S05_MISSION_BLOCKS_EFFECT` ; question indépendante sans terminer la mission.

## K. Cas pending hint frauduleux

`S05-RISK-07` : lying `ctk_lying_pending` + RISK → blocage serveur + cmds inchangés.

## L. Cas concurrence

`S05-RISK-10` : 2 POST concurrentes sous RISK → 200/409 ; aucun `pilotageEffect.attempted=true` ; cmds/revision stables.

## M. Cas isolation Pilote

FIX-05/07 : action inconnue 400 ; anon 401/403 (oracle + seed_unknown_effect_risk).
FIX-06 : Pilote B 403/404 sur oracle / seed_awaiting / seed_unknown_effect_risk de A.

## N. Fichiers créés

Aucun fichier nouveau. Action ajoutée dans le route handler DEV/E2E existant.

## O. Fichiers modifiés — contenu complet

Allowlist uniquement (4 fichiers). Runtime S05 / D2–D7 / schema : **NON MODIFIÉS**.

| Fichier | Blob @ `a30d47d2` | Δ |
| --- | --- | --- |
| `…/s05-fixture/route.ts` | `ef283fa98f873895df3587285ec6b89b4c57d99e` | +152 / −2 approx |
| `…/ml4c-s05-real-api.spec.ts` | `a1f7916ddc7204805407eff0856e215b7ceb8f42` | +151 / −109 approx |
| as-built …20261112.md | (commit) | +54 |
| delivery-history.md | (commit) | +18 |

### O.1 CONTENU COMPLET — `s05-fixture/route.ts`

Path : `projects/sfia-studio-next/web/src/app/api/dev/e2e/s05-fixture/route.ts`
Blob : `ef283fa98f873895df3587285ec6b89b4c57d99e`

```typescript
/**
 * DEV/E2E-only fixture for S05 real-API proofs.
 * Seeds UNKNOWN / AWAITING_PILOT_ACT test preconditions and returns DB oracles.
 * Does NOT mock conversation HTTP responses. Does NOT create HumanDecision / Git REAL.
 */
import { NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  documents,
  humanDecisions,
  preparations,
} from "@/db/schema";
import { resolveStudioSession } from "@/domains/identity/session";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  commitTurnTerminal,
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { loadLatestMissionsByIntentKey } from "@/domains/conversation/intent-conduction";
import {
  classifySiblingEffectRisk,
  parseSiblingResultEvidence,
} from "@/domains/conversation/s05-pending-policy";
import {
  effectIntents,
  extractPilotageBinding,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { e2eFixtureMutationsAllowed } from "@/lib/e2e-fixture-gate";
import { newId } from "@/lib/ids";

export async function POST(req: Request) {
  const gate = e2eFixtureMutationsAllowed();
  if (!gate.ok) {
    return NextResponse.json(
      { error: "E2E_FIXTURE_FORBIDDEN", reason: gate.reason },
      { status: 403 },
    );
  }
  const session = await resolveStudioSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as {
    action?: string;
    preparationId?: string;
  };
  const action = (body.action ?? "").trim();
  const preparationId = (body.preparationId ?? "").trim();
  if (!preparationId) {
    return NextResponse.json({ error: "preparationId required" }, { status: 400 });
  }
  if (
    !["oracle", "seed_unknown", "seed_unknown_effect_risk", "seed_awaiting_mission"].includes(
      action,
    )
  ) {
    return NextResponse.json({ error: "unknown action" }, { status: 400 });
  }

  // Ownership: preparation must belong to authenticated Pilot (getPreparationContext enforces).
  let ctx: Awaited<ReturnType<typeof getPreparationContext>>;
  try {
    ctx = await getPreparationContext(session.pilotId, preparationId);
  } catch {
    return NextResponse.json({ error: "preparation not found or not owned" }, { status: 404 });
  }
  if (!ctx.conversation?.id) {
    return NextResponse.json({ error: "conversation missing" }, { status: 404 });
  }

  if (action === "oracle") {
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
    const docCount =
      (
        await db
          .select({ n: sql<number>`count(*)::int` })
          .from(documents)
          .where(eq(documents.preparationId, preparationId))
      )[0]?.n ?? 0;
    const hdCount = ctx.project?.id
      ? (
          await db
            .select({ n: sql<number>`count(*)::int` })
            .from(humanDecisions)
            .where(eq(humanDecisions.projectId, ctx.project.id))
        )[0]?.n ?? 0
      : 0;
    const missions = await loadLatestMissionsByIntentKey(ctx.conversation.id);
    const missionList = [...missions.values()].map((m) => ({
      clientIntentKey: m.clientIntentKey,
      status: m.status,
      preparationId: m.preparationId ?? null,
    }));
    return NextResponse.json({
      ok: true,
      fixture: "DEV_E2E_ORACLE",
      preparationId,
      projectId: ctx.project?.id ?? null,
      conversationId: ctx.conversation.id,
      creationRevision: prep?.creationRevision ?? null,
      businessCommandCount: Number(cmdCount),
      documentCount: Number(docCount),
      humanDecisionCount: Number(hdCount),
      turns: turns.map((t) => ({
        id: t.id,
        status: t.status,
        clientTurnKey: t.clientTurnKey,
      })),
      unknownTurns: turns.filter((t) => t.status === "UNKNOWN").map((t) => t.clientTurnKey),
      missions: missionList,
      awaitingMissions: missionList.filter((m) => m.status === "AWAITING_PILOT_ACT"),
    });
  }

  if (action === "seed_unknown") {
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

  if (action === "seed_unknown_effect_risk") {
    // UNKNOWN sibling with QUALIFIED REQUEST_EFFECT (D5 OPEN_CYCLE) and no owner row.
    // Must classify UNKNOWN_EFFECT_RISK — never silently equivalent to seed_unknown (EXPLORE).
    const clientTurnKey = `e2e-s05-risk-${Date.now()}`;
    const qualificationRaw = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "open cycle cadrage (E2E S05 effect-risk seed)",
      intents: [
        {
          id: "i-d5-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN_CYCLE CADRAGE",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Cycle cadrage demandé — issue propriétaire non réconciliée (seed).",
    };
    const validated = validateNoraTurnQualification(qualificationRaw);
    if (!validated.ok) {
      return NextResponse.json(
        { error: `qualification invalid: ${validated.reason}` },
        { status: 500 },
      );
    }
    if (effectIntents(validated.value).length === 0) {
      return NextResponse.json(
        { error: "seed failed — REQUEST_EFFECT not actionable" },
        { status: 500 },
      );
    }
    const pilotage = extractPilotageBinding(validated.value);
    if (
      pilotage == null ||
      "ambiguous" in pilotage ||
      pilotage.operation !== "OPEN_CYCLE"
    ) {
      return NextResponse.json(
        { error: "seed failed — OPEN_CYCLE binding not extractable" },
        { status: 500 },
      );
    }

    const reserved = await reserveTurnCommand({
      conversationId: ctx.conversation.id,
      ownerPilotId: session.pilotId,
      clientTurnKey,
      content: "Acte A E2E S05 — UNKNOWN effect-risk (seed fixture)",
    });
    if (reserved.kind !== "fresh") {
      return NextResponse.json({ error: `reserve ${reserved.kind}` }, { status: 409 });
    }
    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(validated.value),
    });
    if (!stashed.applied) {
      return NextResponse.json({ error: "stash qualification failed" }, { status: 500 });
    }
    await markTurnUnknown(
      reserved.commandId,
      "E2E_S05_SEED_UNKNOWN_EFFECT_RISK",
      reserved.ownerToken,
    );
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
    const parsed = parseSiblingResultEvidence(row.resultJson);
    const s05RiskClass = classifySiblingEffectRisk(
      {
        id: row.id,
        clientTurnKey,
        status: "UNKNOWN",
        createdAtMs: row.createdAt.getTime(),
        qualificationStatus: parsed.qualificationStatus,
        qualification: parsed.qualification,
        documentSaveStatus: parsed.documentSaveStatus,
        pilotageEffectAttempted: parsed.pilotageEffectAttempted,
        humanDecisionCreated: parsed.humanDecisionCreated,
        // Complete empty owner probe — no métier row created by this seed.
        ownerEffectsFound: false,
        correlationKeys: [],
      },
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    if (s05RiskClass !== "UNKNOWN_EFFECT_RISK") {
      return NextResponse.json(
        {
          error: "seed failed — expected UNKNOWN_EFFECT_RISK",
          s05RiskClass,
          qualificationStatus: parsed.qualificationStatus,
        },
        { status: 500 },
      );
    }
    // No businessCommands / documents / humanDecisions / pilotage journal writes.
    return NextResponse.json({
      ok: true,
      fixture: "DEV_E2E_SEED_UNKNOWN_EFFECT_RISK",
      noraBoundary: "FIXTURE_PROVIDER_ONLY",
      commandId: reserved.commandId,
      clientTurnKey,
      userMessageId: reserved.userMessageId,
      status: "UNKNOWN",
      s05RiskClass,
      capabilityId: "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      pilotageOperation: "OPEN_CYCLE",
      preparationId,
      projectId: ctx.project?.id ?? null,
      conversationId: ctx.conversation.id,
    });
  }

  if (action === "seed_awaiting_mission") {
    // Persist a COMPLETE turn whose missionProjection is AWAITING_PILOT_ACT.
    // Readable by loadLatestMissionsByIntentKey (COMPLETE only). No UNKNOWN sibling.
    const clientTurnKey = `e2e-s05-await-${Date.now()}`;
    const clientIntentKey = `mission:await:${clientTurnKey}`;
    const reserved = await reserveTurnCommand({
      conversationId: ctx.conversation.id,
      ownerPilotId: session.pilotId,
      clientTurnKey,
      content: "Intention A — acte Pilote requis (seed AWAITING_PILOT_ACT)",
    });
    if (reserved.kind !== "fresh") {
      return NextResponse.json({ error: `reserve ${reserved.kind}` }, { status: 409 });
    }
    const missionProjection = {
      clientIntentKey,
      status: "AWAITING_PILOT_ACT" as const,
      goalSummary: "Créer le projet (seed E2E S05-REAL-05)",
      steps: [
        {
          id: "d2-create",
          capabilityId: "d2.create_project",
          status: "WAITING" as const,
          reason: "E2E_SEED_AWAITING_PILOT_ACT",
        },
      ],
      restitution: "PENDING" as const,
      preparationId,
      proposedProjectName: "E2E Awaiting Seed",
      ownerActBinding: {
        clientIntentKey,
        suggestedIdempotencyKey: `create-${preparationId}`,
      },
      originalUserText: "Je veux créer un projet.",
    };
    const assistantId = newId("msg");
    const applied = await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      conversationId: ctx.conversation.id,
      generationId: `gen-e2e-await-${Date.now()}`,
      resultJson: JSON.stringify({
        status: "COMPLETE",
        userMessageId: reserved.userMessageId,
        assistantMessageId: assistantId,
        idempotentReplay: false,
        humanDecisionCreated: false,
        missionProjection,
        nextTurnKind: "INTENTION_EFFET",
        pendingEffectBlocked: false,
        semanticQualification: {
          schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
          status: "QUALIFIED",
          goal: "create project",
          intents: [
            {
              id: "i-d2",
              capabilityId: "d2.create_project",
              mode: "REQUEST_EFFECT",
              summary: "create",
              parameters: { projectName: "E2E Awaiting Seed" },
              constraints: [],
              dependsOn: [],
              sourceEvidence: [],
            },
          ],
          clarifications: [],
          replyDraft: "Acte Pilote requis.",
        },
      }),
      assistant: {
        id: assistantId,
        content: "Acte Pilote explicite requis — seed E2E AWAITING_PILOT_ACT.",
        messageStatus: "COMPLETE",
        generationId: `gen-e2e-await-${Date.now()}`,
        ordinal: reserved.ordinalAssistant,
      },
    });
    if (!applied.applied) {
      return NextResponse.json({ error: "commit awaiting mission failed" }, { status: 500 });
    }
    const missions = await loadLatestMissionsByIntentKey(ctx.conversation.id);
    const found = missions.get(clientIntentKey);
    if (!found || found.status !== "AWAITING_PILOT_ACT") {
      return NextResponse.json(
        { error: "seed failed — mission not readable as AWAITING_PILOT_ACT" },
        { status: 500 },
      );
    }
    const unknownCount = (
      await db
        .select({ n: sql<number>`count(*)::int` })
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, ctx.conversation.id),
            eq(conversationTurnCommands.status, "UNKNOWN"),
          ),
        )
    )[0]?.n;
    return NextResponse.json({
      ok: true,
      fixture: "DEV_E2E_SEED_AWAITING_MISSION",
      noraBoundary: "FIXTURE_PROVIDER_ONLY",
      commandId: reserved.commandId,
      clientTurnKey,
      clientIntentKey,
      userMessageId: reserved.userMessageId,
      turnStatus: "COMPLETE",
      missionStatus: found.status,
      unknownSiblingCount: Number(unknownCount ?? 0),
      preparationId,
      projectId: ctx.project?.id ?? null,
      conversationId: ctx.conversation.id,
    });
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 });
}

```

### O.2 CONTENU COMPLET — `ml4c-s05-real-api.spec.ts`

Path : `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts`
Blob : `a1f7916ddc7204805407eff0856e215b7ceb8f42`

```typescript
import { test, expect } from "@playwright/test";

/**
 * ML4C S05 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
 * Browser → real Studio HTTP messages API → server S05 gate → PG.
 * Nora fixture ONLY at provider boundary (STUDIO_E2E / FORCE_NORA_FIXTURE).
 * NO route.fulfill on the conversation endpoint under test.
 *
 * Distinguishes:
 * - SAFE UNKNOWN (seed_unknown): QUALIFIED / d3.converse EXPLORE → PROVEN_NO_EFFECT
 * - RISK UNKNOWN (seed_unknown_effect_risk): QUALIFIED REQUEST_EFFECT D5 → UNKNOWN_EFFECT_RISK
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

async function seedUnknownEffectRisk(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientTurnKey: string; commandId: string; s05RiskClass: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_unknown_effect_risk", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.status).toBe("UNKNOWN");
  expect(body.s05RiskClass).toBe("UNKNOWN_EFFECT_RISK");
  expect(body.capabilityId).toBe("d5.pilotage_command");
  expect(body.mode).toBe("REQUEST_EFFECT");
  expect(body.clientTurnKey).toBeTruthy();
  return {
    clientTurnKey: body.clientTurnKey,
    commandId: body.commandId,
    s05RiskClass: body.s05RiskClass,
  };
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
    humanDecisionCount?: number;
    unknownTurns: string[];
    turns: Array<{ id: string; status: string; clientTurnKey: string }>;
    awaitingMissions?: Array<{ clientIntentKey: string; status: string }>;
    missions?: Array<{ clientIntentKey: string; status: string }>;
  }>;
}

async function seedAwaitingMission(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientIntentKey: string; commandId: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_awaiting_mission", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.missionStatus).toBe("AWAITING_PILOT_ACT");
  expect(body.turnStatus).toBe("COMPLETE");
  expect(body.unknownSiblingCount).toBe(0);
  expect(body.clientIntentKey).toBeTruthy();
  return { clientIntentKey: body.clientIntentKey, commandId: body.commandId };
}

async function postThreadMessage(
  page: import("@playwright/test").Page,
  preparationId: string,
  content: string,
) {
  const respPromise = page.waitForResponse(
    (r) =>
      r.url().includes(`/api/preparations/${preparationId}/messages`) &&
      r.request().method() === "POST",
  );
  await page.getByLabel("Message à Nora").fill(content);
  await page.getByTestId("thread-send").click();
  const resp = await respPromise;
  expect(resp.ok()).toBeTruthy();
  return resp.json();
}

test.describe("S05 real API (no route.fulfill)", () => {
  test("S05-SAFE-01/08/09: UNKNOWN EXPLORE A allows independent progress", async ({ page }) => {
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

    // Independent question — S05 must not block dialogue.
    const bodyQ = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    expect(bodyQ.noraMode).toMatch(/fixture|deterministic/i);

    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.creationRevision).toBe(revBefore);

    // Independent effect intention — S05 must NOT block on PROVEN_NO_EFFECT sibling A.
    // Owner retains final authority (may refuse or apply); that is not an S05 failure.
    const bodyCycle = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyCycle.pendingEffectBlocked).not.toBe(true);
    expect(String(bodyCycle.pendingBlockReason ?? "")).not.toMatch(
      new RegExp(`S05_PENDING_BLOCKS.*:${seeded.clientTurnKey}`),
    );

    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // Clear client pending hint — server authority unchanged (still no S05 block from A).
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const bodyHint = await postThreadMessage(
      page,
      preparationId,
      "Je veux créer un projet.",
    );
    expect(bodyHint.pendingEffectBlocked).not.toBe(true);
    expect(String(bodyHint.pendingBlockReason ?? "")).not.toMatch(
      new RegExp(`S05_PENDING_BLOCKS.*:${seeded.clientTurnKey}`),
    );

    // Refresh: A still recoverable via oracle
    await page.reload();
    const afterReload = await oracle(page, preparationId);
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterReload.turns.some((t) => t.id === seeded.commandId && t.status === "UNKNOWN")).toBe(
      true,
    );
    expect(beforeSeed.unknownTurns).not.toContain(seeded.clientTurnKey);
  });

  test("S05-RISK-01/02/03/04/06: UNKNOWN REQUEST_EFFECT A blocks concurrent effects", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const seeded = await seedUnknownEffectRisk(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns).toContain(seeded.clientTurnKey);
    const revBefore = afterSeed.creationRevision;
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;

    // Independent question still allowed.
    const bodyQ = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.businessCommandCount).toBe(cmdsBefore);

    // OPEN_CYCLE blocked by UNKNOWN_EFFECT_RISK sibling.
    const bodyCycle = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyCycle.pendingEffectBlocked).toBe(true);
    expect(String(bodyCycle.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
    expect(bodyCycle.pilotageEffect?.attempted).not.toBe(true);
    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.businessCommandCount).toBe(cmdsBefore);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // Create-project wording must not bump creationRevision.
    const bodyCreate = await postThreadMessage(page, preparationId, "Je veux créer un projet.");
    expect(bodyCreate.pendingEffectBlocked).toBe(true);
    const afterCreate = await oracle(page, preparationId);
    expect(afterCreate.creationRevision).toBe(revBefore);

    // Document CREATE (fixture exact phrase) blocked by S05.
    const bodyDoc = await postThreadMessage(
      page,
      preparationId,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(bodyDoc.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyDoc.pendingEffectBlocked).toBe(true);
    expect(
      bodyDoc.documentSave == null ||
        bodyDoc.documentSave.status === "NOT_EXECUTED" ||
        bodyDoc.documentSave.status === "SKIPPED",
    ).toBe(true);
    const afterDoc = await oracle(page, preparationId);
    expect(afterDoc.documentCount).toBe(docsBefore);

    // Clear client pending hint; server protection unchanged.
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const bodyHint = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyHint.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyHint.pendingEffectBlocked).toBe(true);
    expect(bodyHint.pilotageEffect?.attempted).not.toBe(true);
    expect(afterDoc.unknownTurns).toContain(seeded.clientTurnKey);
  });

  test("S05-RISK-07: lying pending key does not bypass server", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);
    await seedUnknownEffectRisk(page, preparationId);
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

    const body = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(body.pendingEffectBlocked).toBe(true);
    expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
    expect(body.pilotageEffect?.attempted).not.toBe(true);
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
  });

  test("S05-REAL-05 / S05-M01: AWAITING_PILOT_ACT blocks effect B (no UNKNOWN)", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const before = await oracle(page, preparationId);
    expect(before.unknownTurns.length).toBe(0);
    const seeded = await seedAwaitingMission(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns.length).toBe(0);
    expect(afterSeed.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;
    const hdBefore = afterSeed.humanDecisionCount ?? 0;
    const revBefore = afterSeed.creationRevision;

    const body = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(body.nextTurnKind).toBe("INTENTION_EFFET");
    expect(body.pendingEffectBlocked).toBe(true);
    expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_MISSION_BLOCKS_EFFECT/i);
    expect(body.pilotageEffect?.attempted).not.toBe(true);
    expect(body.humanDecisionCreated).not.toBe(true);

    const after = await oracle(page, preparationId);
    expect(after.unknownTurns.length).toBe(0);
    expect(after.businessCommandCount).toBe(cmdsBefore);
    expect(after.documentCount).toBe(docsBefore);
    expect(after.humanDecisionCount ?? 0).toBe(hdBefore);
    expect(after.creationRevision).toBe(revBefore);
    expect(after.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );

    // S05-M05 — clear/falsify client hint; server still blocks via mission.
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const body2 = await postThreadMessage(
      page,
      preparationId,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(body2.pendingEffectBlocked).toBe(true);
    expect(body2.documentSave == null || body2.documentSave.status === "NOT_EXECUTED").toBe(true);
    const after2 = await oracle(page, preparationId);
    expect(after2.documentCount).toBe(docsBefore);
    expect(after2.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
  });

  test("S05-M02: AWAITING mission + independent question leaves A intact", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    const seeded = await seedAwaitingMission(page, preparationId);

    const body = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
    expect(body.status).toBe("COMPLETE");
    expect(body.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(body.pendingEffectBlocked).not.toBe(true);
    const after = await oracle(page, preparationId);
    expect(after.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
  });

  test("FIX-05/07: fixture requires session; invalid action controlled", async ({ page, browser }) => {
    test.setTimeout(90_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);

    const badAction = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "drop_all", preparationId },
    });
    expect(badAction.status()).toBe(400);

    const anon = await browser.newContext();
    const anonPage = await anon.newPage();
    const unauth = await anonPage.request.post("http://127.0.0.1:3101/api/dev/e2e/s05-fixture", {
      data: { action: "oracle", preparationId },
    });
    expect([401, 403]).toContain(unauth.status());
    const unauthRisk = await anonPage.request.post("http://127.0.0.1:3101/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown_effect_risk", preparationId },
    });
    expect([401, 403]).toContain(unauthRisk.status());
    await anon.close();
  });

  test("FIX-06: Pilot B cannot oracle/seed Pilot A preparation", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const cross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "oracle", preparationId },
    });
    expect([403, 404]).toContain(cross.status());
    const seedCross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_awaiting_mission", preparationId },
    });
    expect([403, 404]).toContain(seedCross.status());
    const seedRiskCross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown_effect_risk", preparationId },
    });
    expect([403, 404]).toContain(seedRiskCross.status());
  });

  test("S05-RISK-10: concurrent protected posts — no doubled métier effect", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    await seedUnknownEffectRisk(page, preparationId);
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
      if (body.pendingEffectBlocked === true) {
        expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
      }
    }
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
    expect(after.creationRevision).toBe(before.creationRevision);
  });
});

```

### O.3 DIFF COMPLET — as-built

```diff
commit a30d47d295979b93fbb0093ca38db1d3ccd20c5c
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 15 00:04:31 2026 +0100

    test(next): align S05 browser fixtures with effect-risk policy

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index ba712298..837ee641 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -348,3 +348,57 @@ Assertions alignées sur NOT_EXECUTED + conservation des contrôles négatifs
 | BUILD | PASS |
 | BROWSER | PASS ciblé Playwright `:3101` E2E isolé (sas / continuity / S05) — fixture |
 | LIVE Nora | NOT RUN — harness E2E force fixture ; operator DEV `:3100` non démarré (RECETTE `:3200` présente) |
+
+## DELIV 2026-11-14 — S05 browser real-api oracle reconciliation
+
+Date: 2026-11-15 ~00:05 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `6c50a1446734341b43a4f110aacde21c727fb2b1` (LOCAL ONLY)
+Profil: Critical PATCH test/fixture / NO RELEASE / runtime inchangé
+
+### Reproduction Phase A (HEAD `6c50a144`)
+
+`ml4c-s05-real-api.spec.ts` — 4 PASS / 3 FAIL :
+
+| Test | Assertion | Attendu (ancien oracle) | Observé |
+| --- | --- | --- | --- |
+| S05-REAL-01/02/… | L134 `pendingEffectBlocked` | `true` après `seed_unknown` + OPEN_CYCLE | `false` |
+| S05-REAL-07 | L242 `pendingEffectBlocked` | `true` (lying hint) | `false` |
+| S05-REAL-10 | L414 `pilotageEffect.attempted` | not `true` | `true` (owner reached) |
+
+Cause unique prouvée : `seed_unknown` = QUALIFIED / `d3.converse` / EXPLORE →
+owner probe vide → `PROVEN_NO_EFFECT`. L'ancien oracle exigeait encore le
+blocage global S05. Runtime conforme au contrat S05 actuel.
+
+### Corrections (allowlist)
+
+1. Fixture `seed_unknown_effect_risk` (DEV/E2E only) : UNKNOWN + QUALIFIED
+   `d5.pilotage_command` REQUEST_EFFECT OPEN_CYCLE, **sans** effet métier ;
+   vérifie `UNKNOWN_EFFECT_RISK` avant retour.
+2. Spec : scénarios SAFE (`seed_unknown`) vs RISK (`seed_unknown_effect_risk`)
+   séparés ; AWAITING / isolation / concurrence conservés.
+
+### Oracles
+
+| Fixture | Qualification | Classe S05 | Effet B indépendant |
+| --- | --- | --- | --- |
+| `seed_unknown` | EXPLORE d3 | PROVEN_NO_EFFECT | S05 ne bloque pas ; propriétaire décide |
+| `seed_unknown_effect_risk` | REQUEST_EFFECT d5 | UNKNOWN_EFFECT_RISK | `pendingEffectBlocked=true` ; zéro mutation |
+| `seed_awaiting_mission` | mission AWAITING | garde mission | `S05_MISSION_BLOCKS_EFFECT` |
+
+### Preuves
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | 351 PASS |
+| PG `test:integration` | 468 PASS |
+| BUILD | PASS |
+| Playwright `ml4c-s05-real-api` | **8 PASS** (SAFE+RISK+AWAITING+FIX) |
+| Continuity E2E | 3 PASS (independent-pending / document-continuity / g4-sas) |
+| LIVE Nora | NOT RUN |
+| RECETTE | non mutée |
+
+### Réserves
+
+- DETERMINISTIC E2E BEHAVIOR only — NORA LIVE NOT PROVEN.
+- USER RECETTE NOT RUN ; ML4C not ACCEPTED ; GATE C not closed.

```

### O.4 DIFF COMPLET — delivery-history

```diff
commit a30d47d295979b93fbb0093ca38db1d3ccd20c5c
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 15 00:04:31 2026 +0100

    test(next): align S05 browser fixtures with effect-risk policy

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 47e6d013..4568fd28 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,24 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-15-ML4C-S05-BROWSER-ORACLE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-15 ~00:05 CET (Europe/Paris) |
+| Macro-lot | ML4C — Triage/remédiation oracles E2E S05 real-api (SAFE vs RISK UNKNOWN) |
+| Type | PATCH test/fixture Critical (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `6c50a1446734341b43a4f110aacde21c727fb2b1` (LOCAL ONLY) |
+| Design | `c883db07` / blob `da397424` |
+| Prior handoff | `sfia/review-handoff@9fe6f63c` blob `7d57f65b` |
+| Lane | Playwright E2E `:3101`/`sfia_next_e2e` ; UNIT/PG DEV ; RECETTE `:3200` non mutée |
+| Changes | `seed_unknown_effect_risk` + oracles SAFE/RISK dans `ml4c-s05-real-api.spec.ts` ; runtime inchangé |
+| Schema | unchanged |
+| Tests | UNIT 351 ; PG 468 ; BUILD PASS ; real-api 8 PASS ; continuity 3 PASS ; LIVE NOT RUN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-14-ML4C-P3-ASSERTION-CLOSURE

 | Field | Value |

```

## P. UNIT

```
Test Files  48 passed (48)
Tests       351 passed (351)
```

`npm run test:unit` — GREEN.

## Q. PostgreSQL

```
Test Files  28 passed (28)
Tests       468 passed (468)
```

`npm run test:integration` — GREEN (0 FAIL).

## R. BUILD

`npm run build` — PASS (`Compiled successfully`).

## S. Playwright et traces

| Suite | Résultat |
| --- | --- |
| Baseline Phase A `ml4c-s05-real-api` @ `6c50a144` | 4 PASS / 3 FAIL |
| Après correction `ml4c-s05-real-api` | **8 PASS** (28.3s) |
| `ml4c-s05-independent-pending` | PASS |
| `ml4c-document-continuity` | PASS |
| `g4-chat-first-sas` | PASS |

API conversation réelle (pas de `route.fulfill`). Nora = fixture provider only.

## T. Fake / Real Qualification

| Niveau | Statut |
| --- | --- |
| IMPLEMENTED | Oui |
| COVERAGE VERIFIED | Oui (SAFE / RISK / AWAITING / hint / concurrence / isolation) |
| DETERMINISTIC BEHAVIOR PROVEN | Oui |
| LIVE BEHAVIOR NOT PROVEN | Confirmé |
| USER RECETTE NOT RUN | Confirmé |
| NORA LIVE PROVEN | **NON** |
| ML4C ACCEPTED | **NON** |
| GATE C CLOSED | **NON** |
| STABLE / ADOPTED | **NON** |

## U. ENV-01 et versioning

- Lane : DEV/E2E isolé `127.0.0.1:3101` / `sfia_next_e2e` / PG `:5433`
- Nora : FIXTURE_PROVIDER_ONLY
- Operator DEV `:3100` : non démarré
- RECETTE `:3200` / PG `:5434` : non mutée, non utilisée
- OpenAI LIVE : non appelé
- Version : `0.0.0-dev` / NO RELEASE

## V. Git Review Index

| Artefact | Ref |
| --- | --- |
| Parent produit | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| Commit produit LOCAL | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| Tree produit | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| Fixture blob | `ef283fa98f873895df3587285ec6b89b4c57d99e` |
| Spec blob | `a1f7916ddc7204805407eff0856e215b7ceb8f42` |
| Conception | `c883db07` / blob `da397424` |
| Handoff précédent (synthèse) | `cfde3e99` / blob `eecbd099` |
| Branche handoff | `sfia/review-handoff` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` (L3) |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| PR #676 HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` OPEN |

Blob / commit handoff de **cette** republication : après publish L3.

## W. Réserves

1. Preuve = DETERMINISTIC E2E only — Nora LIVE NOT PROVEN.
2. Sous SAFE, D5 peut tenter OPEN_CYCLE — attendu ; non revendiqué LIVE.
3. Produit non poussé ; PR #676 non mise à jour.
4. Fixture RISK = absence d'effet propriétaire, pas mid-flight D5 partiel.
5. Republication motivée : pack précédent trop synthétique sur le contenu modifié.

## X. Verdict unique

**S05 BROWSER CONTRACT RECONCILED — DETERMINISTIC E2E GREEN**

- IMPLEMENTED
- COVERAGE VERIFIED
- DETERMINISTIC BEHAVIOR PROVEN
- LIVE BEHAVIOR NOT PROVEN
- USER RECETTE NOT RUN

## Y. Prochain gate Morris

1. Relire ce handoff distant (SHA/blob vérifiés) — contenu complet fixture+spec.
2. Qualifier éventuellement Nora LIVE DEV sous mandat distinct + ENV-01.
3. Aucun GO RECETTE inclus.
4. Pas de push produit / PR / merge dans ce cycle.
