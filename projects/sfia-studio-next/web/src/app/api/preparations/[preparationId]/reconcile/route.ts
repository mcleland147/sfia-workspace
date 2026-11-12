import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCreateProject } from "@/domains/preparation/create-project";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const key = new URL(req.url).searchParams.get("idempotencyKey") ?? undefined;
    const result = await reconcileCreateProject(session.pilotId, preparationId, key);
    return NextResponse.json(result);
  } catch (e) {
    // ML4C S02 — preserve real error taxonomy (401 only for session).
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
