import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db/client";
import { preparationProjectLinks, preparations, projects } from "@/db/schema";
import { requireStudioSession } from "@/domains/identity/session";
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
} from "@/domains/conversation/history-tools";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * J-C13 — exact message re-read under project-authorized history scope.
 * Rights revalidated at read time; never auto-sends.
 */
export async function GET(
  _: Request,
  ctx: { params: Promise<{ projectId: string; messageId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, messageId } = await ctx.params;

    const project = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, session.pilotId)))
        .limit(1)
    )[0];
    if (!project) {
      return NextResponse.json(
        { status: "NOT_FOUND", reason: "Projet introuvable", message: null },
        { status: 404 },
      );
    }

    const link = (
      await db
        .select({ preparationId: preparationProjectLinks.preparationId })
        .from(preparationProjectLinks)
        .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
        .where(
          and(
            eq(preparationProjectLinks.projectId, projectId),
            eq(preparations.ownerPilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!link) {
      return NextResponse.json(
        { status: "NOT_FOUND", reason: "Aucune préparation liée", message: null },
        { status: 404 },
      );
    }

    const scope = await resolveAuthorizedHistoryScope({
      pilotId: session.pilotId,
      preparationId: link.preparationId,
    });
    if ("denied" in scope) {
      return NextResponse.json(
        { status: "DENIED", reason: scope.reason, message: null },
        { status: 403 },
      );
    }
    const read = await readConversationMessages({
      scope,
      messageIds: [messageId],
    });
    const item = read.items[0] ?? null;
    if (!item) {
      return NextResponse.json(
        {
          status: "NOT_FOUND",
          reason: "message absent, hors périmètre, ou inaccessible",
          message: null,
          coverage: read.coverage,
        },
        { status: 404 },
      );
    }
    return NextResponse.json({
      status: "AVAILABLE",
      message: item,
      coverage: read.coverage,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
