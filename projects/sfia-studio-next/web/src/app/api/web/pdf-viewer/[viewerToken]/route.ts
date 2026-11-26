import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { getWebPageSessionByViewerToken } from "@/domains/conversation/public-web-page-session";

/**
 * Authorized PDF bytes for the in-app viewer — distinct from Nora cognitive payloads.
 * Re-checks session expiry, fingerprint, and PDF kind on every consultation.
 * Never returns content into LLM prompts/checkpoints.
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ viewerToken: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { viewerToken } = await ctx.params;
    const token = (viewerToken || "").trim();
    if (!token || token.length < 16 || token.length > 128) {
      return NextResponse.json({ error: "INVALID_VIEWER_TOKEN" }, { status: 400 });
    }

    const page = getWebPageSessionByViewerToken(token);
    if (!page) {
      return NextResponse.json({ error: "VIEWER_SESSION_NOT_FOUND" }, { status: 404 });
    }
    if (Date.parse(page.expiresAt) <= Date.now()) {
      return NextResponse.json({ error: "VIEWER_SESSION_EXPIRED" }, { status: 410 });
    }
    if (page.kind !== "pdf") {
      return NextResponse.json({ error: "VIEWER_NOT_PDF" }, { status: 415 });
    }
    // ViewerToken alone is not authority — owner + lane + project must be opposable.
    const owner = (page.scope.ownerPilotId || "").trim();
    if (!owner) {
      return NextResponse.json(
        { error: "VIEWER_OWNER_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
        { status: 403 },
      );
    }
    if (owner !== session.pilotId) {
      return NextResponse.json({ error: "VIEWER_OWNER_MISMATCH" }, { status: 403 });
    }
    const lane = (page.scope.lane || "").trim();
    const processLane = (process.env.STUDIO_LANE || "").trim();
    if (!lane || lane === "UNKNOWN" || (processLane && lane !== processLane)) {
      return NextResponse.json(
        { error: "VIEWER_LANE_MISMATCH", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
        { status: 403 },
      );
    }
    if (!(page.scope.projectId || "").trim()) {
      return NextResponse.json(
        { error: "VIEWER_PROJECT_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
        { status: 403 },
      );
    }
    if (!page.pdfBytes || page.pdfBytes.byteLength < 5) {
      return NextResponse.json(
        {
          error: "PDF_BYTES_UNAVAILABLE",
          contentFingerprint: page.contentFingerprint,
          pageCount: page.pageCount ?? null,
          limits: [...page.limits, "VIEWER_BYTES_SERVER_ONLY_WHEN_PRESENT"],
        },
        { status: 404 },
      );
    }

    return new NextResponse(Buffer.from(page.pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(page.pdfBytes.byteLength),
        "Cache-Control": "no-store",
        "X-Content-Fingerprint": page.contentFingerprint,
        "X-Pdf-Page-Count": String(page.pageCount ?? ""),
        "X-Viewer-Session-Id": page.sessionId,
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
