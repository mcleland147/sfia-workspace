import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, readPersonalSpaceRecord } from "@/domains/identity/portfolio-organization";
import { deleteOwnedSpace } from "@/domains/preparation/delete-owned-space";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const record = await readPersonalSpaceRecord(session.pilotId, parseSpaceType(type), id);
    return NextResponse.json(record, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function DELETE(
  req: Request,
  ctx: { params: Promise<{ type: string; id: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as { confirm?: boolean };
    if (body.confirm !== true) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", message: "La confirmation est requise." },
        { status: 400, headers: { "cache-control": "private, no-store" } },
      );
    }
    const result = await deleteOwnedSpace(session.pilotId, parseSpaceType(type), id);
    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
