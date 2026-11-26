import { NextResponse } from "next/server";
import { getWebPageSessionByViewerToken } from "@/domains/conversation/public-web-page-session";
import { assertPdfViewerAccess } from "@/domains/documents/pdf-viewer-authorization";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * Authorized PDF bytes for the in-app viewer — distinct from Nora cognitive payloads.
 * Re-checks project habilitation, identity, lane, work scope, expiry, and version on every GET.
 * viewerToken alone is never sufficient authority.
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

    const access = await assertPdfViewerAccess({
      session,
      page,
      processLane: process.env.STUDIO_LANE,
    });
    if (!access.ok) {
      const body: Record<string, unknown> = {
        error: access.error,
        limits: access.limits,
      };
      if (access.error === "PDF_BYTES_UNAVAILABLE") {
        body.contentFingerprint = page.contentFingerprint;
        body.pageCount = page.pageCount ?? null;
      }
      return NextResponse.json(body, { status: access.status });
    }

    const pdfBytes = page.pdfBytes!;
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(pdfBytes.byteLength),
        "Cache-Control": "no-store",
        "X-Content-Fingerprint": access.contentFingerprint,
        "X-Pdf-Page-Count": String(page.pageCount ?? ""),
        "X-Viewer-Session-Id": access.sessionId,
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}