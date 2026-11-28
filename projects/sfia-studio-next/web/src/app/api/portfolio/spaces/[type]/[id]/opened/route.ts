import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, recordSpaceOpened } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json()) as { navigationKey?: string };
    const result = await recordSpaceOpened(
      session.pilotId,
      parseSpaceType(type),
      id,
      body.navigationKey || "",
    );
    return NextResponse.json(
      { ok: true, ...result },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
