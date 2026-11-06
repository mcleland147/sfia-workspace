import { NextResponse } from "next/server";
import { listDecisionJournal } from "@/domains/decisions/service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const decisions = await listDecisionJournal(session.pilotId, projectId);
    return NextResponse.json({ decisions });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
