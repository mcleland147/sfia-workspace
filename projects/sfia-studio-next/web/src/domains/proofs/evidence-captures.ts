/**
 * G07 / Cycle 8 B3 — original evidence captures bound to a Cursor attempt.
 * Local DEV store; SHA integrity; PNG/JPEG magic checks; path safety.
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { newId } from "@/lib/ids";

const MAX_BYTES = 2_000_000;

export type EvidenceCaptureMeta = {
  id: string;
  attemptId: string;
  projectId: string;
  pilotId: string;
  source: "BROWSER" | "PLAYWRIGHT" | "FIGMA_ORACLE" | "MANUAL" | "CLIENT_UPLOAD";
  environment: "DEV" | "RECETTE" | "STABLE" | "TEST";
  createdAt: string;
  viewport: { w: number; h: number } | null;
  buildSha: string | null;
  contentSha256: string;
  mimeType: string;
  label: string;
  relativePath: string;
  byteLength: number;
};

function evidenceRoot(): string {
  const root = process.env.SFIA_EVIDENCE_ROOT?.trim() || join(process.cwd(), ".sfia-evidence");
  if (!existsSync(root)) mkdirSync(root, { recursive: true });
  return root;
}

export function sha256Buffer(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

export function detectImageMime(buf: Buffer): "image/png" | "image/jpeg" | null {
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return "image/png";
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return "image/jpeg";
  }
  return null;
}

function safeAttemptSegment(attemptId: string): string {
  const base = basename(attemptId);
  if (!/^efx_[a-z0-9-]+$/i.test(base) && !/^[a-z0-9_-]+$/i.test(base)) {
    throw new Error("UNSAFE_ATTEMPT_ID");
  }
  return base;
}

export function storeEvidenceCapture(input: {
  attemptId: string;
  projectId: string;
  pilotId: string;
  bytes: Buffer;
  mimeType?: string;
  label: string;
  source?: EvidenceCaptureMeta["source"];
  environment?: EvidenceCaptureMeta["environment"];
  viewport?: { w: number; h: number } | null;
  buildSha?: string | null;
}): EvidenceCaptureMeta {
  if (!input.bytes?.length) throw new Error("CAPTURE_EMPTY");
  if (input.bytes.length > MAX_BYTES) throw new Error("CAPTURE_TOO_LARGE");
  const detected = detectImageMime(input.bytes);
  if (!detected) throw new Error("CAPTURE_NOT_PNG_OR_JPEG");
  if (input.mimeType && input.mimeType !== detected) {
    throw new Error("CAPTURE_MIME_MISMATCH");
  }
  const attemptSeg = safeAttemptSegment(input.attemptId);
  const id = newId("ecap");
  const contentSha256 = sha256Buffer(input.bytes);
  const ext = detected === "image/jpeg" ? "jpg" : "png";
  const relativePath = join(attemptSeg, `${id}.${ext}`);
  const absDir = join(evidenceRoot(), attemptSeg);
  if (!existsSync(absDir)) mkdirSync(absDir, { recursive: true });
  writeFileSync(join(evidenceRoot(), relativePath), input.bytes);
  const meta: EvidenceCaptureMeta = {
    id,
    attemptId: input.attemptId,
    projectId: input.projectId,
    pilotId: input.pilotId,
    source: input.source ?? "BROWSER",
    environment: input.environment ?? "DEV",
    createdAt: new Date().toISOString(),
    viewport: input.viewport ?? null,
    buildSha: input.buildSha ?? null,
    contentSha256,
    mimeType: detected,
    label: input.label.slice(0, 200),
    relativePath,
    byteLength: input.bytes.length,
  };
  writeFileSync(join(absDir, `${id}.json`), JSON.stringify(meta, null, 2));
  return meta;
}

export function listEvidenceCapturesForAttempt(attemptId: string): EvidenceCaptureMeta[] {
  let attemptSeg: string;
  try {
    attemptSeg = safeAttemptSegment(attemptId);
  } catch {
    return [];
  }
  const dir = join(evidenceRoot(), attemptSeg);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        return JSON.parse(readFileSync(join(dir, f), "utf8")) as EvidenceCaptureMeta;
      } catch {
        return null;
      }
    })
    .filter((m): m is EvidenceCaptureMeta => Boolean(m && m.attemptId === attemptId));
}

export function readEvidenceCaptureBytes(meta: EvidenceCaptureMeta): Buffer | null {
  const abs = join(evidenceRoot(), meta.relativePath);
  if (!existsSync(abs)) return null;
  const buf = readFileSync(abs);
  if (sha256Buffer(buf) !== meta.contentSha256) return null;
  if (!detectImageMime(buf)) return null;
  return buf;
}
