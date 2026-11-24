import { NextResponse } from "next/server";
import { qualifyTechnicalContractReadyServerSide } from "@/domains/execution/technical-contract-server-ready";
import { getTechnicalContract } from "@/domains/execution/technical-contract";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; contractId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, contractId } = await ctx.params;
    // Body intentionally unused for authority: client preparationId / sufficiency flags ignored.
    await _req.json().catch(() => ({}));
    const existing = await getTechnicalContract({
      pilotId: session.pilotId,
      projectId,
      contractId,
    });
    // CF-02 / CA-04: preparation linkage from persisted contract only.
    const result = await qualifyTechnicalContractReadyServerSide({
      pilotId: session.pilotId,
      projectId,
      contractId,
      preparationId: existing.preparationId ?? undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
