import { auth, githubOAuthStatus } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  // Always answer our status probe — never fall through to Better Auth (404 when configured).
  // Does not claim LIVE callback success; only reports whether client credentials are present.
  if (url.pathname.endsWith("/api/auth/status")) {
    return Response.json(githubOAuthStatus());
  }
  if (url.pathname.endsWith("/api/auth/github")) {
    const status = githubOAuthStatus();
    if (!status.configured) {
      return Response.json(status, { status: 503 });
    }
  }
  return handler.GET(req);
};

export const POST = handler.POST;
