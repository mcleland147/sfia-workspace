import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import { appendDictationAudio } from "@/domains/conversation/composer-dictation-session";

/** Append base64 PCM16 mono 24 kHz chunk — no durable storage. */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    await assertOwnedProject(session.pilotId, projectId);
    const body = (await req.json().catch(() => ({}))) as {
      pcmBase64?: string;
      seq?: number;
    };
    const pcmBase64 = String(body.pcmBase64 || "");
    if (!pcmBase64) {
      return NextResponse.json({ ok: false, code: "EMPTY" }, { status: 400 });
    }
    const result = appendDictationAudio({
      sessionId,
      pilotId: session.pilotId,
      projectId,
      pcmBase64,
      seq: body.seq,
    });
    if (!result.ok) {
      return NextResponse.json(result, { status: result.code === "FORBIDDEN" ? 403 : 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
