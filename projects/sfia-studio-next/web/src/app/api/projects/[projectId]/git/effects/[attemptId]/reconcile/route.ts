import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  attemptIsNoraMission,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { reconcileAttempt } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * Nominal recovery surface (P0-B): for Nora-mission attempts left AUTHORIZED
 * after a crash between D6 commit and dispatch, reconcile triggers mission resume.
 * Classic (non-mission) attempts keep pure reconcileAttempt behavior.
 */
export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;

    const row = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, attemptId),
            eq(effectAttempts.projectId, projectId),
            eq(effectAttempts.pilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];

    if (row && attemptIsNoraMission(row) && (row.status === "AUTHORIZED" || row.status === "DISPATCHED")) {
      const missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: row.decisionId,
      });
      return NextResponse.json({
        attemptId,
        status: missionResume.status,
        noraMission: true,
        missionResume,
      });
    }

    const result = await reconcileAttempt(session.pilotId, projectId, attemptId);
    return NextResponse.json({ ...result, noraMission: false });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
