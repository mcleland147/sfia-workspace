import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileInitialQualification } from "@/domains/pilotage/initial-qualification";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * E07 — explicit qualification reconcile (POST only).
 * GET project context must not kick processing (E07-COR-02).
 */
export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const initialQualification = await reconcileInitialQualification(
      projectId,
      session.pilotId,
    );
    return NextResponse.json({ initialQualification });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
