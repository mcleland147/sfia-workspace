import { NextResponse } from "next/server";
import { listCursorAttempts } from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const attempts = await listCursorAttempts({
      pilotId: session.pilotId,
      projectId,
    });
    return NextResponse.json({ attempts });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
