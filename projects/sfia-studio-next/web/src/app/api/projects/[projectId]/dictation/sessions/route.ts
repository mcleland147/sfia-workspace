import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { createDictationSession } from "@/domains/conversation/composer-dictation-session";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — admit a Studio-controlled Realtime transcription session. */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      baselineDraft?: string;
      insertOffset?: number | null;
      conversationKey?: string;
    };
    if (!composerDictationEnabled()) {
      return NextResponse.json(
        { ok: false, code: "FLAG_OFF", message: "Dictation disabled" },
        { status: 403 },
      );
    }
    const created = await createDictationSession({
      pilotId: session.pilotId,
      projectId,
      conversationKey: (body.conversationKey || projectId).slice(0, 120),
      baselineDraft: String(body.baselineDraft ?? ""),
      insertOffset: body.insertOffset ?? null,
    });
    if (!created.ok) {
      return NextResponse.json(
        { ok: false, code: created.code, message: created.message },
        { status: created.code === "FLAG_OFF" ? 403 : 400 },
      );
    }
    return NextResponse.json({
      ok: true,
      sessionId: created.session.sessionId,
      model: created.session.modelRequested,
      status: created.session.status,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
