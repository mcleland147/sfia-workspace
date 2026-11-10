import { NextResponse } from "next/server";
import { resumeMissionAfterPublicationAuthorize } from "@/domains/conversation/mission-continuity";
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
      /** When false, skip automatic post-authorization dispatch (tests / inspection-only). Default true. */
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
    // P0: authorize IS the Pilot act (creates HD APPLICABLE). Then resume dispatch automatically.
    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    if (body.autoResumeMission !== false && result.status === "AUTHORIZED") {
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: session.pilotId,
        projectId,
        attemptId,
        decisionId: result.decisionId,
      });
    }
    return NextResponse.json({ ...result, missionResume });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
