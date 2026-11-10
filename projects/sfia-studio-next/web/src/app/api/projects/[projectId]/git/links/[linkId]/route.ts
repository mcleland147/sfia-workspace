import { NextResponse } from "next/server";
import { detachProjectLink } from "@/domains/integrations/project-link-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; linkId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, linkId } = await ctx.params;
    const result = await detachProjectLink(session.pilotId, projectId, linkId);
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
