import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { loadPortfolio } from "@/domains/identity/portfolio";
import { loadPersonalBoard } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "cache-control": "private, no-store" },
  });
}

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const preparationsCursor = url.searchParams.get("preparationsCursor");
    const board = await loadPersonalBoard(session.pilotId, {
      scope: url.searchParams.get("scope"),
      filter: url.searchParams.get("filter"),
      query: url.searchParams.get("q"),
      cursor: url.searchParams.get("cursor"),
      preview: url.searchParams.get("expanded") !== "1",
    });
    const portfolio = preparationsCursor
      ? await loadPortfolio(session.pilotId, { preparationsCursor })
      : null;
    return json({
      session: {
        pilotId: session.pilotId,
        displayName: session.displayName,
        authMode: session.authMode,
      },
      ...(portfolio ? { portfolio } : {}),
      board,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
