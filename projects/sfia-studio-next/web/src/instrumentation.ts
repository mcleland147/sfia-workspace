/**
 * C22 — Next.js process boot hook.
 * Resume LIVE Cursor supervisors and incomplete autonomous restitutions.
 * Observation / collect only — never a second SDK send.
 */

export async function register() {
  if (process.env.NEXT_RUNTIME === "edge") return;
  try {
    const { ensureLiveSupervisorsResumedOnce } = await import(
      "@/domains/execution/cursor-live-supervisor"
    );
    await ensureLiveSupervisorsResumedOnce();
  } catch {
    /* boot must not crash */
  }
  try {
    const { resumeIncompleteRestitutions } = await import(
      "@/domains/execution/cursor-autonomous-restitution"
    );
    await resumeIncompleteRestitutions();
  } catch {
    /* boot must not crash */
  }
}
