import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, preparations } from "@/db/schema";
import { listActivityEvents } from "@/domains/conversation/activity-projection";
import { requireStudioSession } from "@/domains/identity/session";
import { StudioError, studioErrorResponse } from "@/lib/http-errors";

/**
 * C1 transverse — polling Nora activity for a preparation turn (sas / pre-project).
 * Same durable events as project-scoped activity; ownership via preparation → conversation.
 */
export async function GET(
  req: Request,
  ctx: {
    params: Promise<{ preparationId: string; turnCommandId: string }>;
  },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, turnCommandId } = await ctx.params;

    const prep = (
      await db
        .select()
        .from(preparations)
        .where(
          and(
            eq(preparations.id, preparationId),
            eq(preparations.ownerPilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");

    const turn = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, turnCommandId))
        .limit(1)
    )[0];
    if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
    if (turn.ownerPilotId !== session.pilotId) {
      throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
    }

    const conv = (
      await db
        .select()
        .from(conversations)
        .where(eq(conversations.id, turn.conversationId))
        .limit(1)
    )[0];
    if (!conv || conv.preparationId !== preparationId) {
      throw new StudioError("ACCESS_DENIED", "Tour hors préparation");
    }

    const url = new URL(req.url);
    const afterRaw = url.searchParams.get("afterSequence");
    const afterSequence = afterRaw != null ? Number(afterRaw) : undefined;
    const result = await listActivityEvents({
      ownerPilotId: session.pilotId,
      turnCommandId,
      afterSequence: Number.isFinite(afterSequence) ? afterSequence : undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
