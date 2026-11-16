import { redirect } from "next/navigation";
import { resolveStudioSession } from "@/domains/identity/session";

export const dynamic = "force-dynamic";

/**
 * Public entry: unauthenticated visitors land on UX-003 /login.
 * Authenticated Pilotes resume at the portfolio cockpit.
 */
export default async function Home() {
  try {
    const session = await resolveStudioSession();
    redirect(session ? "/portfolio" : "/login");
  } catch {
    // Dependency failure must not invent a session — send to login surface.
    redirect("/login");
  }
}
