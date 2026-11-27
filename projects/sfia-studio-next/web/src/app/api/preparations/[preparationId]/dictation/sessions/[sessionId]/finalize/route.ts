import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { finalizeDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, sessionId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const result = await finalizeDictationSession({
      sessionId,
      pilotId: session.pilotId,
      preparationId,
    });
    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.code === "FORBIDDEN" ? 403 : 400,
      });
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}