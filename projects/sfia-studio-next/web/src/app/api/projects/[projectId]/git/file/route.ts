import { NextResponse } from "next/server";
import { readGitFile } from "@/domains/integrations/resource-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const repositoryId = url.searchParams.get("repositoryId");
    const path = url.searchParams.get("path");
    const ref = url.searchParams.get("ref");
    if (!repositoryId || !path) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await readGitFile({
      pilotId: session.pilotId,
      projectId,
      repositoryId,
      path,
      ref: ref ?? undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
