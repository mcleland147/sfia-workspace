import { NextResponse } from "next/server";
import { getJournalProjection } from "@/domains/knowledge/journal";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const projection = await getJournalProjection(session.pilotId, projectId);
    return NextResponse.json(projection);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}