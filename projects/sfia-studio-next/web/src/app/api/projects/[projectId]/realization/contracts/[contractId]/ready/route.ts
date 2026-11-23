import { NextResponse } from "next/server";
import { markTechnicalContractReady } from "@/domains/execution/technical-contract";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; contractId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, contractId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      unknownRestrictions?: string[];
      sourcesSufficient?: boolean;
    };
    const result = await markTechnicalContractReady({
      pilotId: session.pilotId,
      projectId,
      contractId,
      unknownRestrictions: body.unknownRestrictions,
      sourcesSufficient: body.sourcesSufficient,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
