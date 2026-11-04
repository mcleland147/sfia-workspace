import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCreateProject } from "@/domains/preparation/create-project";

export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const key = new URL(req.url).searchParams.get("idempotencyKey") ?? undefined;
    const result = await reconcileCreateProject(session.pilotId, preparationId, key);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
