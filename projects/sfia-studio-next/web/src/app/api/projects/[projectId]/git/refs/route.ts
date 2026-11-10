import { NextResponse } from "next/server";
import { listGitRefs } from "@/domains/integrations/resource-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const repositoryId = url.searchParams.get("repositoryId");
    if (!repositoryId) return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    const result = await listGitRefs({
      pilotId: session.pilotId,
      projectId,
      repositoryId,
      refPrefix: url.searchParams.get("refPrefix") ?? undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
