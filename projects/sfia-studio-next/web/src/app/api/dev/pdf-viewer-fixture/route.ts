import { readFileSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * DEV-only fixture bytes for PdfViewer browser qualification.
 * Fail-closed outside STUDIO_LANE=DEV.
 */
export async function GET() {
  try {
    await requireStudioSession();
    const lane = String(process.env.STUDIO_LANE || "").trim().toUpperCase();
    if (lane !== "DEV") {
      return NextResponse.json({ error: "DEV_ONLY" }, { status: 403 });
    }
    const fixture = path.resolve(
      process.cwd(),
      "tests/fixtures/ml5-progressive-8p.pdf",
    );
    const bytes = readFileSync(fixture);
    return NextResponse.json({
      lane: "DEV",
      base64: bytes.toString("base64"),
      byteLength: bytes.byteLength,
      pageCountHint: 8,
      fixture: "ml5-progressive-8p.pdf",
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
