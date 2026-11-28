import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, setSpaceFavorite } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "cache-control": "private, no-store" } });
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json()) as { favorite?: boolean; expectedVersion?: number };
    if (typeof body.favorite !== "boolean" || !Number.isInteger(body.expectedVersion)) {
      return json({ error: "INVALID_REQUEST" }, 400);
    }
    const result = await setSpaceFavorite(session.pilotId, parseSpaceType(type), id, {
      favorite: body.favorite,
      expectedVersion: body.expectedVersion as number,
    });
    return json({ ok: true, ...result });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return json(mapped.body, mapped.status);
  }
}
