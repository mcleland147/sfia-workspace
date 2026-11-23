import { NextResponse } from "next/server";
import { requestStopCursorExecution } from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const result = await requestStopCursorExecution({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
