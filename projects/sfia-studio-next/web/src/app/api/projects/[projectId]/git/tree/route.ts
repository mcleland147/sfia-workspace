import { NextResponse } from "next/server";
import { listGitDirectory } from "@/domains/integrations/resource-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const repositoryId = url.searchParams.get("repositoryId");
    const ref = url.searchParams.get("ref");
    if (!repositoryId || !ref) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const path = url.searchParams.get("path") ?? "";
    const result = await listGitDirectory({
      pilotId: session.pilotId,
      projectId,
      repositoryId,
      path,
      ref,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}