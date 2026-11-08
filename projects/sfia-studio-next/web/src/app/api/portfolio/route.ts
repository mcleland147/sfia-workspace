import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { loadPortfolio } from "@/domains/identity/portfolio";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const preparationsCursor = url.searchParams.get("preparationsCursor");
    const portfolio = await loadPortfolio(session.pilotId, { preparationsCursor });
    return NextResponse.json({
      session: {
        pilotId: session.pilotId,
        displayName: session.displayName,
        authMode: session.authMode,
      },
      portfolio,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
