import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import {
  listKnowledge,
  mergeSubjects,
  renameSubject,
  splitSubject,
} from "@/domains/knowledge/service";
import { reparentSubject } from "@/domains/knowledge/journal";
import { getPreparationContext } from "@/domains/preparation/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const knowledge = await listKnowledge(session.pilotId, preparationId);
    return NextResponse.json({ knowledge });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      action?: "rename" | "merge" | "split" | "reparent";
      subjectId?: string;
      newTitle?: string;
      targetSubjectId?: string;
      sourceSubjectId?: string;
      parentSubjectId?: string | null;
      acquisIds?: string[];
      openPointIds?: string[];
    };

    if (body.action === "rename" && body.subjectId && body.newTitle) {
      const result = await renameSubject(
        session.pilotId,
        preparationId,
        body.subjectId,
        body.newTitle,
      );
      return NextResponse.json(result);
    }
    if (body.action === "merge" && body.targetSubjectId && body.sourceSubjectId) {
      const result = await mergeSubjects(
        session.pilotId,
        preparationId,
        body.targetSubjectId,
        body.sourceSubjectId,
      );
      return NextResponse.json(result);
    }
    if (body.action === "split" && body.subjectId && body.newTitle) {
      const result = await splitSubject(session.pilotId, preparationId, body.subjectId, {
        newTitle: body.newTitle,
        acquisIds: body.acquisIds ?? [],
        openPointIds: body.openPointIds ?? [],
      });
      return NextResponse.json(result);
    }
    // E1 B.2 — Pilote/UI reparent; Nora path uses d4.record_knowledge capitalisation.
    if (body.action === "reparent" && body.subjectId) {
      const ctxPrep = await getPreparationContext(session.pilotId, preparationId);
      const projectId = ctxPrep.project?.id;
      if (!projectId) {
        return NextResponse.json(
          { error: "PROJECT_REQUIRED", errorCategory: "INVALID_REQUEST" },
          { status: 400 },
        );
      }
      const parentSubjectId =
        body.parentSubjectId === undefined ? null : body.parentSubjectId;
      const result = await reparentSubject(
        session.pilotId,
        projectId,
        body.subjectId,
        parentSubjectId,
      );
      return NextResponse.json(result);
    }
    return NextResponse.json(
      { error: "INVALID_REQUEST", errorCategory: "INVALID_REQUEST" },
      { status: 400 },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
