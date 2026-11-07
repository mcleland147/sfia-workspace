import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCommand } from "@/domains/pilotage/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string; commandId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId, commandId } = await ctx.params;
    const result = await reconcileCommand(session.pilotId, projectId, commandId);
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
