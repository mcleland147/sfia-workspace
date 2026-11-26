import { NextResponse } from "next/server";
import { loadFinOpsWorkDetail } from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ workId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { workId } = await ctx.params;
    const detail = await loadFinOpsWorkDetail(session.pilotId, workId);
    return NextResponse.json(detail);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}