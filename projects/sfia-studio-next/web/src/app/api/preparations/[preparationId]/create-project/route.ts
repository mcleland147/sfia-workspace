import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireStudioSession } from "@/domains/identity/session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";
import {
  authorizeMissionBoundD2Create,
  continueAfterProjectCreated,
} from "@/domains/conversation/intent-conduction";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * G1 — authority before effect:
 * when the client binds a mission (clientIntentKey), verify server-side BEFORE
 * any D2 mutation. Mismatch / forbidden ⇒ zero project from this request.
 * Classic create (no clientIntentKey) stays create-only without mission binding.
 */
export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      expectedCreationRevision?: number;
      projectName?: string;
      previewSummary?: string;
      idempotencyKey?: string;
      /** Hint only — server verifies against durable awaiting mission. */
      clientIntentKey?: string;
    };
    if (
      typeof body.expectedCreationRevision !== "number" ||
      !body.projectName ||
      !body.idempotencyKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }

    const beforeRows = await db
      .select({ id: projects.id })
      .from(projects)
      .where(eq(projects.ownerPilotId, session.pilotId));
    const countBefore = beforeRows.length;

    const auth = await authorizeMissionBoundD2Create({
      pilotId: session.pilotId,
      preparationId,
      clientIntentKey: body.clientIntentKey ?? null,
      projectName: body.projectName,
    });

    if (auth.outcome === "FORBIDDEN") {
      const afterRows = await db
        .select({ id: projects.id })
        .from(projects)
        .where(eq(projects.ownerPilotId, session.pilotId));
      return NextResponse.json(
        {
          status: "FORBIDDEN",
          missionBindingError: auth.code,
          reason: auth.reason,
          projectsCreatedByRequest: afterRows.length - countBefore,
          sideEffects: probeCreateProjectSideEffects(),
          missionContinue: null,
        },
        { status: auth.code === "NO_CONVERSATION" ? 404 : 409 },
      );
    }

    const idempotencyKey =
      auth.outcome === "CLASSIC" ? body.idempotencyKey : auth.idempotencyKey;

    const result = await createProjectCommand({
      pilotId: session.pilotId,
      preparationId,
      expectedCreationRevision: body.expectedCreationRevision,
      projectName: body.projectName,
      previewSummary: body.previewSummary ?? "",
      idempotencyKey,
    });
    const sideEffects = probeCreateProjectSideEffects();

    let missionContinue: Awaited<ReturnType<typeof continueAfterProjectCreated>> | null = null;
    if (
      auth.outcome !== "CLASSIC" &&
      (result.status === "CREATED" || result.status === "ALREADY_CREATED") &&
      "projectId" in result &&
      result.projectId
    ) {
      try {
        missionContinue = await continueAfterProjectCreated({
          pilotId: session.pilotId,
          preparationId,
          projectId: result.projectId,
          projectName: body.projectName,
          clientIntentKey: auth.mission.clientIntentKey,
        });
      } catch {
        missionContinue = {
          continued: false,
          missionProjection: null,
          documentSave: null,
          assistantMessageId: null,
          reason: "CONTINUE_FAILED",
        };
      }
    }

    const status =
      result.status === "CREATED"
        ? 201
        : result.status === "ALREADY_CREATED"
          ? 200
          : result.status === "CONFLICT"
            ? 409
            : result.status === "FORBIDDEN"
              ? 403
              : 400;
    return NextResponse.json(
      {
        ...result,
        sideEffects,
        missionContinue,
        missionBinding: auth.outcome,
      },
      { status },
    );
  } catch (e) {
    // ML4C S02 — do not map every failure to 401 (session vs métier/dependency).
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
