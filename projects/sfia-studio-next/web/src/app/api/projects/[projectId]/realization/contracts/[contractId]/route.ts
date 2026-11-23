import { NextResponse } from "next/server";
import { getTechnicalContract } from "@/domains/execution/technical-contract";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; contractId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, contractId } = await ctx.params;
    const contract = await getTechnicalContract({
      pilotId: session.pilotId,
      projectId,
      contractId,
    });
    return NextResponse.json({ contract });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
