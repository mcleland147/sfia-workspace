import { NextResponse } from "next/server";
import {
  completeGitHubAuthorization,
  peekOauthState,
} from "@/domains/integrations/authorization-service";
import { mapOauthCallbackError, safeReturnPath } from "@/domains/integrations/oauth-return-path";
import { assertScriptedGithubAuthAllowed } from "@/domains/integrations/scripted-github-guard";
import { requireStudioSession } from "@/domains/identity/session";
import { isStudioError, studioErrorResponse } from "@/lib/http-errors";

/**
 * GitHub App user-to-server callback (D9) — distinct from Better Auth D1 callback.
 * Never echoes code/token. Never trusts installation_id or scripted=1 from query for flow choice.
 * Flow is taken from server-stored oauth state.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get("host");
  try {
    const session = await requireStudioSession();
    const state = url.searchParams.get("state");
    if (!state) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=invalid_state`, url.origin),
      );
    }

    const oauth = await peekOauthState(state);
    if (!oauth || oauth.pilotId !== session.pilotId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=access_denied`, url.origin),
      );
    }
    if (oauth.studioSessionId && oauth.studioSessionId !== session.sessionId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=session_mismatch`, url.origin),
      );
    }

    const returnPath = safeReturnPath(oauth.returnPath);
    const storedFlow = oauth.flow === "github_app_user_oauth" ? "real" : "scripted";

    if (storedFlow === "scripted") {
      assertScriptedGithubAuthAllowed({ requestHost: host });
      await completeGitHubAuthorization({
        pilotId: session.pilotId,
        state,
        studioSessionId: session.sessionId,
        requestHost: host,
      });
      return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
    }

    // REAL flow — require code; ignore scripted=1 and installation_id from query.
    const code = url.searchParams.get("code") ?? undefined;
    if (!code) {
      const ghError = url.searchParams.get("error");
      const errCode = ghError === "access_denied" ? "access_denied" : "missing_code";
      return NextResponse.redirect(
        new URL(`${returnPath}?connected=0&error=${errCode}`, url.origin),
      );
    }

    await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state,
      studioSessionId: session.sessionId,
      code,
      requestHost: host,
    });
    return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
  } catch (e) {
    if (isStudioError(e) && e.code === "NOT_CONFIGURED") {
      const mapped = studioErrorResponse(e);
      return NextResponse.json(mapped.body, { status: mapped.status });
    }
    const errCode = mapOauthCallbackError(e);
    return NextResponse.redirect(
      new URL(`/settings/integrations?connected=0&error=${errCode}`, url.origin),
    );
  }
}
