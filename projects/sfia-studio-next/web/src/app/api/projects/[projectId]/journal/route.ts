import { NextResponse } from "next/server";
import { getJournalProjection } from "@/domains/knowledge/journal";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const projection = await getJournalProjection(session.pilotId, projectId);
    const k = projection.knowledge;
    return NextResponse.json({
      ...projection,
      knowledge: {
        preparationIds: k.preparationIds,
        subjects: k.subjects.map((s) => ({
          id: s.id,
          title: s.title,
          status: s.status,
          parentSubjectId: s.parentSubjectId,
          originatedFromSubjectId: s.originatedFromSubjectId,
          summary: k.summariesBySubjectId[s.id]
            ? {
                revisionNumber: k.summariesBySubjectId[s.id]!.revisionNumber,
                summaryMarkdown: k.summariesBySubjectId[s.id]!.summaryMarkdown,
              }
            : null,
        })),
        acquis: k.acquis.map((a) => ({
          id: a.id,
          kind: a.kind,
          statement: a.statement,
          status: a.status,
          subjectId: a.subjectId,
          provenanceJson: a.provenanceJson,
        })),
        openPoints: k.openPoints.map((o) => ({
          id: o.id,
          statement: o.statement,
          status: o.status,
          subjectId: o.subjectId,
          provenanceJson: o.provenanceJson,
        })),
      },
      decisions: projection.decisions.map((d) => ({
        ...d,
        effectiveAt:
          d.effectiveAt instanceof Date ? d.effectiveAt.toISOString() : d.effectiveAt,
        createdAt: d.createdAt instanceof Date ? d.createdAt.toISOString() : d.createdAt,
      })),
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}