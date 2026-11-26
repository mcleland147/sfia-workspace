import { NextResponse } from "next/server";
import {
  loadFinOpsFilterOptions,
  loadFinOpsSummary,
} from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const summary = await loadFinOpsSummary(session.pilotId, {
      period: url.searchParams.get("period"),
      projectId: url.searchParams.get("projectId"),
      model: url.searchParams.get("model"),
    });
    const filterOptions = await loadFinOpsFilterOptions(session.pilotId);
    return NextResponse.json({ summary, filterOptions });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}