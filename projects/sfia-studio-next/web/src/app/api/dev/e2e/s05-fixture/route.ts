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
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
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
  if (!["oracle", "seed_unknown", "seed_awaiting_mission"].includes(action)) {
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
