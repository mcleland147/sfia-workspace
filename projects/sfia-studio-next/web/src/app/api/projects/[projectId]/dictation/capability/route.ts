import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — product flag preview for composer dictation (no transport open). */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    await assertOwnedProject(session.pilotId, projectId);
    const enabled = composerDictationEnabled();
    return NextResponse.json({
      ok: true,
      enabled,
      admittedPreview: enabled,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}