import { NextResponse } from "next/server";
import {
  assertProjectTurnActivityAccess,
  listActivityEvents,
} from "@/domains/conversation/activity-projection";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/** C1 — polling read of Nora activity for a turn. No mutation. */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ projectId: string; turnCommandId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, turnCommandId } = await ctx.params;
    await assertProjectTurnActivityAccess({
      ownerPilotId: session.pilotId,
      projectId,
      turnCommandId,
    });
    const url = new URL(req.url);
    const afterRaw = url.searchParams.get("afterSequence");
    const afterSequence = afterRaw != null ? Number(afterRaw) : undefined;
    const result = await listActivityEvents({
      ownerPilotId: session.pilotId,
      turnCommandId,
      afterSequence: Number.isFinite(afterSequence) ? afterSequence : undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
