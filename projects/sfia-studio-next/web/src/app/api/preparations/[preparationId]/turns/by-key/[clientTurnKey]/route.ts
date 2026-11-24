import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { lookupDurableTurnByClientKey } from "@/domains/conversation/service";
import { studioErrorResponse } from "@/lib/http-errors";
import { emitObs, newRequestId } from "@/lib/observability";

/**
 * GET — R05 cognitive recovery read path.
 * Returns durable turn status by clientTurnKey. Never mutates, never calls Nora.
 */
export async function GET(
  _: Request,
  ctx: { params: Promise<{ preparationId: string; clientTurnKey: string }> },
) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId, clientTurnKey } = await ctx.params;
    const decoded = decodeURIComponent(clientTurnKey);
    const result = await lookupDurableTurnByClientKey(
      session.pilotId,
      preparationId,
      decoded,
    );
    emitObs({
      event_name: "d3.turn.durable_lookup",
      component: "api.turns.by_key",
      request_id: requestId,
      operation_id: result.operationId ?? undefined,
      generation_id: result.generationId ?? undefined,
      outcome: result.found ? "SUCCESS" : "UNKNOWN",
      meta: {
        status: result.status,
        found: result.found,
        effect_attempted: Boolean(result.pilotageEffect?.attempted),
      },
    });
    if (!result.found) {
      return NextResponse.json(
        {
          found: false,
          status: null,
          pilotageEffect: null,
          requestId,
          errorCategory: "TURN_NOT_FOUND",
        },
        { status: 404 },
      );
    }
    return NextResponse.json({
      found: true,
      turnCommandId: result.turnCommandId,
      status: result.status,
      generationId: result.generationId,
      operationId: result.operationId,
      userMessageId: result.userMessageId,
      assistantMessageId: result.assistantMessageId,
      pilotageEffect: result.pilotageEffect,
      idempotentReplay: true,
      noraMode: result.noraMode,
      requestId,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.turns.by_key_error",
      component: "api.turns.by_key",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
