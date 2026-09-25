import { NextRequest, NextResponse } from "next/server";

/**
 * Progressive-enhancement GitHub OAuth start (works without client JS hydration).
 * Lives under /api/auth/* so middleware public allowlist applies (no middleware edit).
 * Proxies Better Auth sign-in/social and forwards Set-Cookie (OAuth state).
 */
export async function GET(request: NextRequest) {
  const from = request.nextUrl.searchParams.get("from");
  const callbackURL =
    from && from.startsWith("/") && !from.startsWith("//") ? from : "/studio";
  const origin = request.nextUrl.origin;

  try {
    const res = await fetch(`${origin}/api/auth/sign-in/social`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie: request.headers.get("cookie") ?? "",
        origin,
      },
      body: JSON.stringify({ provider: "github", callbackURL }),
      redirect: "manual",
      cache: "no-store",
    });

    const data = (await res.json().catch(() => null)) as {
      url?: string;
    } | null;

    if (!data?.url || typeof data.url !== "string") {
      return NextResponse.redirect(
        new URL("/login?error=AUTH_CONFIG_ERROR", origin),
      );
    }

    const redirect = NextResponse.redirect(data.url);
    const setCookies =
      typeof res.headers.getSetCookie === "function"
        ? res.headers.getSetCookie()
        : [];
    if (setCookies.length > 0) {
      for (const cookie of setCookies) {
        redirect.headers.append("Set-Cookie", cookie);
      }
    } else {
      const single = res.headers.get("set-cookie");
      if (single) redirect.headers.append("Set-Cookie", single);
    }
    return redirect;
  } catch {
    return NextResponse.redirect(
      new URL("/login?error=AUTH_CONFIG_ERROR", origin),
    );
  }
}
