import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { loadPortfolio } from "@/domains/identity/portfolio";

export async function GET() {
  try {
    const session = await requireStudioSession();
    const portfolio = await loadPortfolio(session.pilotId);
    return NextResponse.json({ session: { pilotId: session.pilotId, displayName: session.displayName, authMode: session.authMode }, portfolio });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
