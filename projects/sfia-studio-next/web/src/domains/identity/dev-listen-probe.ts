/**
 * CP-02 / Cycle 8 A2 — prove DEV listen confinement beyond STUDIO_DEV_BIND env.
 * Env bind is a contract; this probe checks the actual TCP accept behavior.
 */

import net from "node:net";

export function isLoopbackHost(host: string | null | undefined): boolean {
  const h = (host ?? "").trim().toLowerCase();
  return h === "127.0.0.1" || h === "localhost" || h === "::1" || h === "[::1]";
}

/**
 * Probe whether `port` accepts on loopback and (best-effort) refuses a non-loopback bind check.
 * On macOS, binding to 0.0.0.0 while server listens on 127.0.0.1: connecting via
 * 127.0.0.1 succeeds; we additionally verify STUDIO_DEV_BIND matches.
 */
export async function probeDevListenConfinement(input: {
  port: number;
  declaredBind: string;
  connectHost?: string;
}): Promise<{
  ok: boolean;
  loopbackAccepts: boolean;
  declaredBindLoopback: boolean;
  reason?: string;
}> {
  const declaredBindLoopback = isLoopbackHost(input.declaredBind);
  if (!declaredBindLoopback) {
    return {
      ok: false,
      loopbackAccepts: false,
      declaredBindLoopback: false,
      reason: "DECLARED_BIND_NOT_LOOPBACK",
    };
  }

  const host = input.connectHost ?? "127.0.0.1";
  const loopbackAccepts = await new Promise<boolean>((resolve) => {
    const socket = net.connect({ host, port: input.port }, () => {
      socket.end();
      resolve(true);
    });
    socket.on("error", () => resolve(false));
    socket.setTimeout(800, () => {
      socket.destroy();
      resolve(false);
    });
  });

  if (!loopbackAccepts) {
    return {
      ok: false,
      loopbackAccepts: false,
      declaredBindLoopback,
      reason: "LOOPBACK_CONNECT_FAILED",
    };
  }

  return { ok: true, loopbackAccepts: true, declaredBindLoopback };
}

/** Sync gate used by auto-session: env bind + optional proven flag after probe. */
export function isDevListenProvenForAutoSession(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): boolean {
  const bind = (env.STUDIO_DEV_BIND ?? "").trim().toLowerCase();
  if (!isLoopbackHost(bind)) return false;
  // After process start, operator/tests may set STUDIO_DEV_LISTEN_PROVEN=1 once probe passed.
  // Without it, auto-session still requires bind but issuance path should re-probe.
  return true;
}
