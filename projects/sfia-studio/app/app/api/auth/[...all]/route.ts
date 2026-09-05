import type { NextRequest } from "next/server";
import { toNextJsHandler } from "better-auth/next-js";
import { getSfiaAuth } from "@/lib/auth/auth";

async function handler(request: NextRequest) {
  const auth = getSfiaAuth();
  const nextHandler = toNextJsHandler(auth);
  const method = request.method.toUpperCase();
  if (method === "GET") return nextHandler.GET(request);
  if (method === "POST") return nextHandler.POST(request);
  if (method === "PATCH" && nextHandler.PATCH) return nextHandler.PATCH(request);
  if (method === "PUT" && nextHandler.PUT) return nextHandler.PUT(request);
  if (method === "DELETE" && nextHandler.DELETE) return nextHandler.DELETE(request);
  return new Response("Method Not Allowed", { status: 405 });
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
