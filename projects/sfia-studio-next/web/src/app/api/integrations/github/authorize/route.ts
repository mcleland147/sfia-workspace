import { NextResponse } from "next/server";
import { startGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json().catch(() => ({}))) as { returnPath?: string };
    const host = req.headers.get("host");
    const result = await startGitHubAuthorization(
      session.pilotId,
      body.returnPath ?? "/settings/integrations",
      session.sessionId,
      { requestHost: host },
    );
    return NextResponse.json({
      ...result,
      // Reflect server-chosen flow — never trust client to pick SCRIPTED.
      providerMode: result.flow === "scripted" ? "SCRIPTED" : "REAL",
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
