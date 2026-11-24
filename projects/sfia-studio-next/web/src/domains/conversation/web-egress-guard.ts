/**
 * WEB B1 P0 — egress controls at the real exit point (C15/C16).
 * DNS pre-check alone is insufficient: connection must target asserted addresses,
 * and the wall-clock timeout covers headers + bounded body read.
 */

import { lookup } from "node:dns/promises";
import https from "node:https";
import { isIP } from "node:net";
import { assertPublicHttpsUrl } from "./public-web-search-frontier";

function isPrivateOrLocalIp(ip: string): boolean {
  const v = ip.toLowerCase();
  if (v === "::1" || v === "0:0:0:0:0:0:0:1") return true;
  if (v.startsWith("fe80:") || v.startsWith("fc") || v.startsWith("fd")) return true;
  // IPv4-mapped IPv6
  const mapped = /^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/i.exec(v);
  if (mapped) return isPrivateOrLocalIp(mapped[1]!);
  const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(v);
  if (!m) return false;
  const a = Number(m[1]);
  const b = Number(m[2]);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 169 && b === 254) ||
    // 100.64/10 CGNAT, 198.18/15 benchmarking, metadata-adjacent
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 198 && (b === 18 || b === 19))
  );
}

export type EgressDnsCheck =
  | { ok: true; hostname: string; addresses: string[] }
  | { ok: false; reason: string; hostname?: string };

/** Resolve hostname and refuse private/link-local/metadata destinations. */
export async function assertPublicDnsEgress(url: string): Promise<EgressDnsCheck> {
  const checked = assertPublicHttpsUrl(url);
  if (!checked.ok) return { ok: false, reason: checked.reason };
  let hostname: string;
  try {
    hostname = new URL(checked.url).hostname;
  } catch {
    return { ok: false, reason: "URL_PARSE" };
  }
  if (isIP(hostname)) {
    if (isPrivateOrLocalIp(hostname)) {
      return { ok: false, reason: "URL_PRIVATE_IP", hostname };
    }
    return { ok: true, hostname, addresses: [hostname] };
  }
  try {
    const records = await lookup(hostname, { all: true, verbatim: true });
    const addresses = records.map((r) => r.address);
    if (!addresses.length) return { ok: false, reason: "DNS_EMPTY", hostname };
    for (const addr of addresses) {
      if (isPrivateOrLocalIp(addr)) {
        return { ok: false, reason: "DNS_RESOLVED_PRIVATE", hostname };
      }
    }
    return { ok: true, hostname, addresses };
  } catch {
    return { ok: false, reason: "DNS_LOOKUP_FAILED", hostname };
  }
}

export type PinnedFetchResult = {
  status: number;
  headers: Headers;
  body: ReadableStream<Uint8Array> | null;
  url: string;
  pinnedAddress: string;
};

/**
 * HTTPS GET pinned to previously asserted public addresses.
 * Custom lookup refuses any address outside the allowlist (TOCTOU mitigation).
 * Timeout signal must remain active through body consumption by the caller.
 */
export async function fetchPublicHttpsPinned(input: {
  url: string;
  addresses: string[];
  signal: AbortSignal;
  headers?: Record<string, string>;
}): Promise<PinnedFetchResult> {
  const checked = assertPublicHttpsUrl(input.url);
  if (!checked.ok) {
    throw new Error(`EGRESS_URL_BLOCKED:${checked.reason}`);
  }
  const allow = new Set(input.addresses);
  if (allow.size === 0) throw new Error("EGRESS_NO_PINNED_ADDRESS");
  const target = new URL(checked.url);

  return new Promise<PinnedFetchResult>((resolve, reject) => {
    if (input.signal.aborted) {
      reject(new Error("EGRESS_ABORTED"));
      return;
    }
    const onAbort = () => {
      req.destroy(new Error("EGRESS_ABORTED"));
      reject(new Error("EGRESS_ABORTED"));
    };
    input.signal.addEventListener("abort", onAbort, { once: true });

    const req = https.request(
      {
        protocol: "https:",
        hostname: target.hostname,
        port: target.port || 443,
        path: `${target.pathname}${target.search}`,
        method: "GET",
        headers: {
          Host: target.host,
          Accept: "text/html,text/plain;q=0.9,*/*;q=0.1",
          "User-Agent": "SFIA-Studio-Next-PublicWeb/1.0",
          ...(input.headers ?? {}),
        },
        // Pin connection to asserted public IPs only.
        lookup: (hostname, options, callback) => {
          const cb = callback as (
            err: NodeJS.ErrnoException | null,
            address: string,
            family: number,
          ) => void;
          const first = [...allow][0]!;
          if (!allow.has(first)) {
            cb(Object.assign(new Error("EGRESS_LOOKUP_REFUSED"), { code: "EGRESS_LOOKUP_REFUSED" }), "", 4);
            return;
          }
          // Prefer IPv4 when present.
          const v4 = [...allow].find((a) => isIP(a) === 4);
          const chosen = v4 ?? first;
          if (isPrivateOrLocalIp(chosen) || !allow.has(chosen)) {
            cb(Object.assign(new Error("EGRESS_PRIVATE_REFUSED"), { code: "EGRESS_PRIVATE_REFUSED" }), "", 4);
            return;
          }
          cb(null, chosen, isIP(chosen) === 6 ? 6 : 4);
          void hostname;
          void options;
        },
      },
      (res) => {
        input.signal.removeEventListener("abort", onAbort);
        const headerBag = new Headers();
        for (const [k, v] of Object.entries(res.headers)) {
          if (v == null) continue;
          headerBag.set(k, Array.isArray(v) ? v.join(", ") : v);
        }
        const pinnedAddress = (res.socket as { remoteAddress?: string } | null)?.remoteAddress ?? "unknown";
        if (pinnedAddress !== "unknown" && isPrivateOrLocalIp(pinnedAddress)) {
          res.destroy();
          reject(new Error("EGRESS_CONNECTED_PRIVATE"));
          return;
        }
        const stream = new ReadableStream<Uint8Array>({
          start(controller) {
            res.on("data", (chunk: Buffer) => {
              if (input.signal.aborted) {
                res.destroy();
                controller.error(new Error("EGRESS_ABORTED"));
                return;
              }
              controller.enqueue(new Uint8Array(chunk));
            });
            res.on("end", () => controller.close());
            res.on("error", (err) => controller.error(err));
          },
          cancel() {
            res.destroy();
          },
        });
        resolve({
          status: res.statusCode ?? 0,
          headers: headerBag,
          body: stream,
          url: checked.url,
          pinnedAddress,
        });
      },
    );
    req.on("error", (err) => {
      input.signal.removeEventListener("abort", onAbort);
      reject(err);
    });
    req.end();
  });
}

/**
 * Read response body with hard byte cap — cancel stream before full download.
 * Does not treat the page as fully consulted.
 */
export async function readBoundedResponseText(
  res: { body: ReadableStream<Uint8Array> | null; arrayBuffer?: () => Promise<ArrayBuffer>; headers: Headers },
  opts?: { maxBytes?: number; excerptChars?: number; signal?: AbortSignal },
): Promise<{ text: string; bytesRead: number; truncated: boolean }> {
  const maxBytes = opts?.maxBytes ?? 200_000;
  const excerptChars = opts?.excerptChars ?? 8_000;
  const cl = res.headers.get("content-length");
  if (cl && Number(cl) > maxBytes * 4) {
    return { text: "", bytesRead: 0, truncated: true };
  }
  if (!res.body) {
    const buf = Buffer.from(await (res.arrayBuffer?.() ?? Promise.resolve(new ArrayBuffer(0))));
    const slice = buf.subarray(0, maxBytes);
    return {
      text: slice.toString("utf8").slice(0, excerptChars),
      bytesRead: slice.length,
      truncated: buf.length > maxBytes,
    };
  }
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytesRead = 0;
  let truncated = false;
  while (true) {
    if (opts?.signal?.aborted) {
      try {
        await reader.cancel("WEB_TIMEOUT");
      } catch {
        /* ignore */
      }
      throw new Error("EGRESS_ABORTED");
    }
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    const remain = maxBytes - bytesRead;
    if (remain <= 0) {
      truncated = true;
      try {
        await reader.cancel("WEB_BYTE_BUDGET");
      } catch {
        /* ignore */
      }
      break;
    }
    if (value.byteLength > remain) {
      chunks.push(value.subarray(0, remain));
      bytesRead += remain;
      truncated = true;
      try {
        await reader.cancel("WEB_BYTE_BUDGET");
      } catch {
        /* ignore */
      }
      break;
    }
    chunks.push(value);
    bytesRead += value.byteLength;
  }
  const buf = Buffer.concat(chunks.map((c) => Buffer.from(c)));
  let text = buf.toString("utf8");
  text = text
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, excerptChars);
  if (/ignore\s+previous\s+instructions|<\/?system>/i.test(text)) {
    text = text.replace(/ignore\s+previous\s+instructions/gi, "[hostile-marker]");
  }
  return { text, bytesRead, truncated };
}
