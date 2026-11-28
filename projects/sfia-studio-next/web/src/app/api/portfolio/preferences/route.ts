import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { updatePortfolioPreferences, type PortfolioSort, type PortfolioView } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function PATCH(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json()) as {
      view?: PortfolioView;
      sort?: PortfolioSort | null;
      expectedVersion?: number;
    };
    if (!Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await updatePortfolioPreferences(session.pilotId, {
      view: body.view,
      sort: body.sort,
      expectedVersion: body.expectedVersion as number,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
