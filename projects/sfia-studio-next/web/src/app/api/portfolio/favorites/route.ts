import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listFavoriteSpaces } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET() {
  try {
    const session = await requireStudioSession();
    const favorites = await listFavoriteSpaces(session.pilotId);
    return NextResponse.json(
      { favorites },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
