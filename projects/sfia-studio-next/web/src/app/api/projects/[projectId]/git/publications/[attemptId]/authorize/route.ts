import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  attemptIsNoraMission,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { authorizePublication } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      statement?: string;
      inspectedFingerprint?: string;
      /**
       * Test escape hatch only. Membership to a Nora mission is decided SERVER-SIDE
       * via correlationKey `pub:mission:*` — never via this client flag alone.
       */
      autoResumeMission?: boolean;
    };
    if (!body.inspectedFingerprint) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", message: "inspectedFingerprint requis" },
        { status: 400 },
      );
    }
    const result = await authorizePublication({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      statement: body.statement ?? "Mandat publication Git",
      inspectedFingerprint: body.inspectedFingerprint,
    });

    // P0-A: auto-resume ONLY for server-qualified Nora missions.
    // Classic panel prepares (`pub-${projectId}-…`) keep authorize → manual dispatch.
    const attemptRow = (
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

    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    const isMission = attemptRow ? attemptIsNoraMission(attemptRow) : false;
    if (
      isMission &&
      body.autoResumeMission !== false &&
      (result.status === "AUTHORIZED" || result.status === "COMPLETED" || result.status === "DISPATCHED")
    ) {
      // Immediate resume in this request; P0-B recoverAuthorizedNoraMissions covers crash window.
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: result.decisionId,
      });
    }

    return NextResponse.json({
      ...result,
      noraMission: isMission,
      missionResume,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
