import { NextResponse } from "next/server";
import { prepareCursorExecution } from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as {
      contractId?: string;
      correlationKey?: string;
      workspaceCwd?: string;
      mcpRequired?: string[];
    };
    if (!body.contractId || !body.correlationKey || !body.workspaceCwd) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await prepareCursorExecution({
      pilotId: session.pilotId,
      projectId,
      contractId: body.contractId,
      correlationKey: body.correlationKey,
      workspaceCwd: body.workspaceCwd,
      mcpRequired: body.mcpRequired,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
