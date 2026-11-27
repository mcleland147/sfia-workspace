/**
 * ML2 ADAPT — punctual Vision for complex docs / scans / schemas.
 * Complements KEEP pdf-extract + viewer. No durable fileId. store=false.
 * Gate: SFIA_DOCUMENT_VISION_PUNCTUAL=1 (OFF by default).
 */
import { createHash } from "node:crypto";

export const DOCUMENT_VISION_SCHEMA = "ml2-document-vision-punctual-v1";

export type VisionPunctualMode = "image" | "pdf_bytes";

export type VisionPunctualRequest = {
  mode: VisionPunctualMode;
  /** Local bytes only — never a remote fileId. */
  bytes: Buffer;
  filename: string;
  ask: string;
  mimeHint?: string;
};

export type VisionPunctualResult = {
  schema: typeof DOCUMENT_VISION_SCHEMA;
  ok: boolean;
  text: string;
  parsed: Record<string, unknown> | null;
  limits: string[];
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    model?: string;
  };
  reason?: string;
};

export function documentVisionPunctualEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_DOCUMENT_VISION_PUNCTUAL || "").trim() === "1";
}

export type VisionResponsesClient = {
  responses: {
    create: (body: Record<string, unknown>) => Promise<{
      output_text?: string;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
};

/**
 * One-shot Vision via Responses input_image / input_file.
 * Caller must have already authorized PDF/viewer rights for the bytes.
 */
export async function runDocumentVisionPunctual(input: {
  client: VisionResponsesClient;
  request: VisionPunctualRequest;
  model?: string;
  effort?: string;
  maxOutputTokens?: number;
}): Promise<VisionPunctualResult> {
  const req = input.request;
  const limits = [
    "NO_DURABLE_FILE_ID",
    "STORE_FALSE",
    "PUNCTUAL_BYTES_ONLY",
    "NOT_A_PDF_EXTRACT_REPLACEMENT",
  ];
  const b64 = req.bytes.toString("base64");
  const content: unknown[] = [{ type: "input_text", text: req.ask }];
  if (req.mode === "pdf_bytes" || req.filename.toLowerCase().endsWith(".pdf")) {
    content.push({
      type: "input_file",
      filename: req.filename,
      file_data: `data:application/pdf;base64,${b64}`,
    });
  } else {
    const mime = req.mimeHint ?? "image/png";
    content.push({
      type: "input_image",
      image_url: `data:${mime};base64,${b64}`,
    });
  }

  try {
    const resp = await input.client.responses.create({
      model: input.model ?? "gpt-6.1-terra",
      store: false,
      max_output_tokens: input.maxOutputTokens ?? 512,
      reasoning: { effort: input.effort ?? "medium" },
      input: [{ role: "user", content }],
    });
    const text = resp.output_text ?? "";
    let parsed: Record<string, unknown> | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]) as Record<string, unknown>;
    } catch {
      parsed = null;
    }
    const usage = {
      inputTokens: resp.usage?.input_tokens,
      outputTokens: resp.usage?.output_tokens,
      model: input.model ?? "gpt-6.1-terra",
    };
    try {
      const { recordProviderUsageObservation, buildIdempotencyKey } =
        await import("@/domains/conversation/usage-accounting");
      const fp = visionBytesFingerprint(req.bytes);
      await recordProviderUsageObservation({
        operation: "vision.punctual",
        modelRequested: usage.model,
        modelApplied: usage.model,
        inputTokens: usage.inputTokens ?? null,
        outputTokens: usage.outputTokens ?? null,
        status: text.trim().length > 0 ? "succeeded" : "failed",
        granularity: "REQUEST",
        costCoverage: "PARTIAL",
        idempotencyKey: buildIdempotencyKey({
          granularity: "REQUEST",
          lane: process.env.STUDIO_LANE || "DEV",
          operation: "vision.punctual",
          callOrdinal: Number.parseInt(fp.slice(0, 8), 16) % 100000,
        }),
        limits: [...limits, `BYTES_FP_${fp}`],
      });
    } catch {
      /* FinOps best-effort */
    }
    return {
      schema: DOCUMENT_VISION_SCHEMA,
      ok: text.trim().length > 0,
      text,
      parsed,
      limits,
      usage,
    };
  } catch (e) {
    return {
      schema: DOCUMENT_VISION_SCHEMA,
      ok: false,
      text: "",
      parsed: null,
      limits,
      reason: e instanceof Error ? e.message.slice(0, 240) : "VISION_ERROR",
    };
  }
}

export function visionBytesFingerprint(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex").slice(0, 24);
}
