import { NextResponse } from "next/server";
import {
  createDevAutoSession,
  isDevAutoSessionAllowed,
  resolveStudioSession,
  STUDIO_SESSION_COOKIE,
} from "@/domains/identity/session";
import { probeDevListenConfinement } from "@/domains/identity/dev-listen-probe";

function gateFrom(req: Request) {
  return {
    host: req.headers.get("host"),
    forwardedHost: req.headers.get("x-forwarded-host"),
    forwardedFor: req.headers.get("x-forwarded-for"),
    realIp: req.headers.get("x-real-ip"),
  };
}

async function assertListenConfinedOr403() {
  const port = Number(process.env.STUDIO_PORT || "3100");
  const bind = process.env.STUDIO_DEV_BIND || "";
  const probe = await probeDevListenConfinement({ port, declaredBind: bind });
  if (!probe.ok) {
    return NextResponse.json(
      {
        ok: false,
        autoSessionAvailable: false,
        error: "DEV_AUTO_SESSION_LISTEN_NOT_CONFINED",
        reason: probe.reason,
      },
      { status: 403 },
    );
  }
  return null;
}

function safeNext(raw: string | null): string {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/portfolio";
  if (raw.startsWith("/api/")) return "/portfolio";
  return raw.slice(0, 512);
}

/**
 * DÉC-ML5-DEV — establish Pilot A test session without /login UI.
 * GET: capability + optional redirect when auto-session allowed.
 * POST: issue cookie (idempotent if already authenticated).
 * Fail-closed outside DEV + loopback + STUDIO_DEV_AUTO_SESSION=1.
 */
export async function GET(req: Request) {
  const gate = gateFrom(req);
  const url = new URL(req.url);
  const next = safeNext(url.searchParams.get("next"));
  const allowed = isDevAutoSessionAllowed(gate);
  if (!allowed) {
    return NextResponse.json(
      {
        ok: false,
        autoSessionAvailable: false,
        error: "DEV_AUTO_SESSION_UNAVAILABLE",
      },
      { status: 403 },
    );
  }
  const listenBlock = await assertListenConfinedOr403();
  if (listenBlock) return listenBlock;
  const existing = await resolveStudioSession().catch(() => null);
  if (existing) {
    if (url.searchParams.has("next")) {
      return NextResponse.redirect(new URL(next, req.url));
    }
    return NextResponse.json({
      ok: true,
      alreadyAuthenticated: true,
      pilotId: existing.pilotId,
      authMode: existing.authMode,
      autoSessionAvailable: true,
    });
  }
  try {
    const created = await createDevAutoSession(gate);
    if (url.searchParams.has("next")) {
      const res = NextResponse.redirect(new URL(next, req.url));
      res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: false,
      });
      return res;
    }
    const res = NextResponse.json({
      ok: true,
      alreadyAuthenticated: false,
      pilotId: created.pilotId,
      authMode: "dev-test-login",
      which: created.which,
      autoSessionAvailable: true,
      notice:
        "FAKE/REAL: DEV auto-session — NOT GitHub OAuth — NOT REAL auth — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    return NextResponse.json({ ok: false, error: msg, autoSessionAvailable: false }, { status: 403 });
  }
}

export async function POST(req: Request) {
  const gate = gateFrom(req);
  if (!isDevAutoSessionAllowed(gate)) {
    return NextResponse.json(
      { ok: false, error: "DEV_AUTO_SESSION_UNAVAILABLE", autoSessionAvailable: false },
      { status: 403 },
    );
  }
  const listenBlock = await assertListenConfinedOr403();
  if (listenBlock) return listenBlock;
  // C21 — resume LIVE Cursor supervisors after process boot (observation only).
  try {
    const { ensureLiveSupervisorsResumedOnce } = await import(
      "@/domains/execution/cursor-live-supervisor"
    );
    await ensureLiveSupervisorsResumedOnce();
  } catch {
    /* boot resume must not block auto-session */
  }
  const existing = await resolveStudioSession().catch(() => null);
  if (existing) {
    return NextResponse.json({
      ok: true,
      alreadyAuthenticated: true,
      pilotId: existing.pilotId,
      authMode: existing.authMode,
      autoSessionAvailable: true,
    });
  }
  try {
    const created = await createDevAutoSession(gate);
    const res = NextResponse.json({
      ok: true,
      alreadyAuthenticated: false,
      pilotId: created.pilotId,
      authMode: "dev-test-login",
      which: created.which,
      autoSessionAvailable: true,
      notice:
        "FAKE/REAL: DEV auto-session — NOT GitHub OAuth — NOT REAL auth — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    return NextResponse.json({ ok: false, error: msg }, { status: 403 });
  }
}
