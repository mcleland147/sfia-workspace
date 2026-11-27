import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { finalizeDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    const result = await finalizeDictationSession({
      sessionId,
      pilotId: session.pilotId,
      projectId,
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
