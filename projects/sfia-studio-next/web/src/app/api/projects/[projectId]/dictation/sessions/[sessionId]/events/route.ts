import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import {
  dictationSessionMatchesScope,
  getDictationSession,
  subscribeDictationSession,
} from "@/domains/conversation/composer-dictation-session";

/** SSE stream of dictation events for the authenticated owner. */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    await assertOwnedProject(session.pilotId, projectId);
    const rec = getDictationSession(sessionId);
    if (
      !rec ||
      !dictationSessionMatchesScope(rec, {
        pilotId: session.pilotId,
        projectId,
      })
    ) {
      return new Response(JSON.stringify({ ok: false, code: "NOT_FOUND" }), {
        status: 404,
        headers: { "content-type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    let unsubscribe: (() => void) | null = null;
    const stream = new ReadableStream({
      start(controller) {
        const send = (data: unknown) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };
        send({ type: "sse.open", sessionId, status: rec.status });
        unsubscribe = subscribeDictationSession(sessionId, session.pilotId, (ev) => {
          send(ev);
          if (
            ev.type === "session.finalized" ||
            ev.type === "session.cancelled" ||
            ev.type === "session.error" ||
            ev.type === "session.expired"
          ) {
            try {
              controller.close();
            } catch {
              /* */
            }
          }
        });
        if (!unsubscribe) {
          send({ type: "session.error", code: "SUBSCRIBE_FAILED", sessionId });
          controller.close();
        }
      },
      cancel() {
        unsubscribe?.();
      },
    });

    return new Response(stream, {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
