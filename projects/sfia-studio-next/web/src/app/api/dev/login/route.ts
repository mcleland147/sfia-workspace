import { NextResponse } from "next/server";
import { createDevTestSession, STUDIO_SESSION_COOKIE } from "@/domains/identity/session";

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { pilot?: "a" | "b" };
    const which = body.pilot === "b" ? "b" : "a";
    const { token, pilotId } = await createDevTestSession(which, {
      host: req.headers.get("host"),
      forwardedHost: req.headers.get("x-forwarded-host"),
      forwardedFor: req.headers.get("x-forwarded-for"),
      realIp: req.headers.get("x-real-ip"),
    });
    const res = NextResponse.json({
      ok: true,
      pilotId,
      authMode: "dev-test-login",
      notice: "FAKE/REAL: DEV test login — NOT GitHub OAuth proof — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    const status = msg.includes("DISABLED") || msg.includes("FORBIDDEN") ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
