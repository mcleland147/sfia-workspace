import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import {
  dictationSessionMatchesScope,
  getDictationSession,
} from "@/domains/conversation/composer-dictation-session";
import { getDictationFixtureTransport } from "@/domains/conversation/composer-dictation-transport-fixture";

function dictationFixturePushAllowed(env: NodeJS.ProcessEnv = process.env): boolean {
  if ((env.STUDIO_LANE ?? "").trim() !== "DEV") return false;
  if (env.VITEST === "true") return true;
  if ((env.SFIA_DICTATION_SUBSTITUTED ?? "").trim() === "1") return true;
  return false;
}

/** DEV-only inject — push a substituted provider event into an active fixture session. */
export async function POST(
  req: Request,
  ctx: {
    params: Promise<{ projectId: string; sessionId: string }>;
  },
) {
  try {
    if (!dictationFixturePushAllowed()) {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_PUSH_FORBIDDEN" },
        { status: 403 },
      );
    }
    if ((process.env.SFIA_DICTATION_TRANSPORT || "").trim() !== "fixture") {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_TRANSPORT_INACTIVE" },
        { status: 403 },
      );
    }
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
      return NextResponse.json({ ok: false, code: "NOT_FOUND" }, { status: 404 });
    }

    const transport = getDictationFixtureTransport(sessionId);
    if (!transport) {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_TRANSPORT_NOT_ACTIVE" },
        { status: 404 },
      );
    }

    const body = (await req.json().catch(() => ({}))) as {
      event?: Record<string, unknown>;
    };
    if (!body.event || typeof body.event !== "object") {
      return NextResponse.json(
        { ok: false, code: "INVALID_BODY", message: "event object required" },
        { status: 400 },
      );
    }

    transport.push(body.event);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}