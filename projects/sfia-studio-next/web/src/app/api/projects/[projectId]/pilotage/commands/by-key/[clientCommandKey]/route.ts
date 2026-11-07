import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCommandByClientKey } from "@/domains/pilotage/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _: Request,
  ctx: { params: Promise<{ projectId: string; clientCommandKey: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, clientCommandKey } = await ctx.params;
    const result = await reconcileCommandByClientKey(
      session.pilotId,
      projectId,
      decodeURIComponent(clientCommandKey),
    );
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
