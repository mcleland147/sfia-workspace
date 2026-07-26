import { createHash } from "node:crypto";
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { ActorReference } from "../domain/types";
import type { IdGeneratorPort } from "../ports/idGenerator";
import { IDEMPOTENCY_KEY_MIN_LENGTH } from "../domain/invariants";

export function fingerprintCommand(payload: unknown): string {
  return createHash("sha256")
    .update(stableStringify(payload))
    .digest("hex");
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((v) => stableStringify(v)).join(",")}]`;
  }
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys
    .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
    .join(",")}}`;
}

export function assertIdempotencyKey(key: string): boolean {
  return typeof key === "string" && key.length >= IDEMPOTENCY_KEY_MIN_LENGTH;
}

export function buildProvenance(input: {
  ids: IdGeneratorPort;
  actor: ActorReference;
  source: ProvenanceRecord["source"];
  timestamp: string;
  correlationId: string;
  projectId?: string;
  cycleInstanceId?: string;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: input.ids.newProvenanceId(),
    actor: { ...input.actor },
    source: input.source,
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

/** Register/ingest fingerprint ignores volatile actor display fields beyond actorId+role. */
export function registerFingerprintBody(
  request: Record<string, unknown>,
): Record<string, unknown> {
  const rest: Record<string, unknown> = { ...request };
  delete rest.nowIso;
  delete rest.correlationId;
  const actor = rest.actor as ActorReference | undefined;
  delete rest.actor;
  return {
    ...rest,
    actor: actor
      ? {
          actorId: actor.actorId,
          role: actor.role,
        }
      : undefined,
  };
}
