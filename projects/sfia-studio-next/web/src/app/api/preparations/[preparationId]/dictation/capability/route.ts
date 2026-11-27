import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — product flag preview for composer dictation (no transport open). */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
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