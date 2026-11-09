import { NextResponse } from "next/server";
import { completeGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { assertScriptedGithubAuthAllowed } from "@/domains/integrations/scripted-github-guard";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * SCRIPTED completion only — gated by central SCRIPTED guard.
 * Never creates REAL CONNECTED. Client cannot force scripted=true for REAL.
 */
export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const host = req.headers.get("host");
    assertScriptedGithubAuthAllowed({ requestHost: host });

    const body = (await req.json().catch(() => ({}))) as {
      state?: string;
      installationId?: string;
    };
    if (!body.state) {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "state required" }, { status: 400 });
    }
    // installationId from body is rejected inside complete unless it matches fixture.
    const status = await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state: body.state,
      studioSessionId: session.sessionId,
      installationId: body.installationId,
      requestHost: host,
    });
    return NextResponse.json(status);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
