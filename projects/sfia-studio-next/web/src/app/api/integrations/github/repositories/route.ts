import { NextResponse } from "next/server";
import { getIntegrationStatus } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET() {
  try {
    const session = await requireStudioSession();
    const status = await getIntegrationStatus(session.pilotId);
    return NextResponse.json({ repositories: status.repositories, status: status.status });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
