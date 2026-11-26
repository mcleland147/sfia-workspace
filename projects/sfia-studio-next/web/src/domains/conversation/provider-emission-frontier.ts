/**
 * S1 — Common provider emission frontier (technical controls only).
 *
 * Not an orchestrator / not cognitive strategy / not D6 authority / not B1 admission.
 * Applies: lane identity, model/effort admission checks, campaign envelope reservation,
 * attempt identity, and post-emission reconciliation hooks.
 *
 * Campaign envelopes are explicit and isolated — never confused with D3 budgets or FinOps caps.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { createHash, randomBytes } from "node:crypto";
import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import {
  admitModelEffort,
  type CognitiveEffort,
  type CognitiveModelId,
  type ResourceAdmissionMode,
} from "./cognitive-resources";

function admissionModeFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): ResourceAdmissionMode {
  const raw = (env.SFIA_COGNITIVE_ADMISSION_MODE || "").trim().toLowerCase();
  if (raw === "calibration") return "calibration";
  return "operational";
}

export type EmissionAttemptKind =
  | "nora.generate_reply"
  | "public_web.isolated_search"
  | "internal.qualification"
  | "campaign.probe"
  | "other";

export type CampaignEnvelope = {
  campaignId: string;
  /** Max real provider emission attempts (retries included). */
  maxAttempts: number;
  attemptsReserved: number;
  attemptsCommitted: number;
  attemptsReleased: number;
  suspended: boolean;
  suspendReason: string | null;
};

export type EmissionReservation =
  | {
      ok: true;
      attemptId: string;
      campaignId: string | null;
      reservedSlots: number;
      keyFingerprint: string;
      lane: string;
    }
  | {
      ok: false;
      reasonCode:
        | "LANE_GUARD_FAILED"
        | "MODEL_EFFORT_NOT_ADMITTED"
        | "CAMPAIGN_ENVELOPE_EXHAUSTED"
        | "CAMPAIGN_SUSPENDED"
        | "INVALID_REQUEST";
      reason: string;
    };

type FrontierStore = {
  campaign: CampaignEnvelope | null;
  /** Test oracle — counts true emit calls that passed reserve. */
  emissionsObserved: number;
};

const als = new AsyncLocalStorage<FrontierStore>();

function store(): FrontierStore {
  return als.getStore() ?? { campaign: null, emissionsObserved: 0 };
}

export function newAttemptId(): string {
  return `att_${randomBytes(8).toString("hex")}`;
}

export function beginCampaignEnvelope(input: {
  campaignId?: string;
  maxAttempts: number;
}): CampaignEnvelope {
  const campaign: CampaignEnvelope = {
    campaignId: input.campaignId ?? `camp_${randomBytes(6).toString("hex")}`,
    maxAttempts: Math.max(0, Math.floor(input.maxAttempts)),
    attemptsReserved: 0,
    attemptsCommitted: 0,
    attemptsReleased: 0,
    suspended: false,
    suspendReason: null,
  };
  const cur = store();
  cur.campaign = campaign;
  return campaign;
}

export function getActiveCampaignEnvelope(): CampaignEnvelope | null {
  return store().campaign;
}

export function suspendCampaignEnvelope(reason: string): void {
  const c = store().campaign;
  if (!c) return;
  c.suspended = true;
  c.suspendReason = reason.slice(0, 200);
}

export function campaignSlotsRemaining(c: CampaignEnvelope | null = store().campaign): number {
  if (!c) return Number.POSITIVE_INFINITY;
  if (c.suspended) return 0;
  return Math.max(0, c.maxAttempts - c.attemptsReserved);
}

/**
 * Reserve before contacting the provider. A scenario counter or maxTurns is NOT sufficient —
 * callers must reserve here for every real emission (including retries and worker calls).
 */
export function reserveProviderEmission(input: {
  kind: EmissionAttemptKind;
  modelId?: string | null;
  effort?: string | null;
  /** Slots to reserve (default 1). Retries that will re-contact must reserve again. */
  slots?: number;
  /** When true, skip model admission (deterministic fixture / no provider). */
  skipModelAdmission?: boolean;
  env?: NodeJS.ProcessEnv;
}): EmissionReservation {
  const slots = Math.max(1, Math.floor(input.slots ?? 1));
  const env = input.env ?? process.env;
  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    return {
      ok: false,
      reasonCode: "LANE_GUARD_FAILED",
      reason: `${laneGuard.reasonCode}:${laneGuard.reason}`,
    };
  }

  if (!input.skipModelAdmission) {
    const model = ((input.modelId ?? "").trim() || "gpt-6.1-terra") as CognitiveModelId;
    const effort = ((input.effort ?? "").trim() || "medium") as CognitiveEffort;
    const admission = admitModelEffort(model, effort, admissionModeFromEnv(env));
    if (!admission.admitted) {
      return {
        ok: false,
        reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
        reason: admission.reasonCode,
      };
    }
  }

  const campaign = store().campaign;
  if (campaign) {
    if (campaign.suspended) {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_SUSPENDED",
        reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
      };
    }
    if (campaign.attemptsReserved + slots > campaign.maxAttempts) {
      campaign.suspended = true;
      campaign.suspendReason = "CAMPAIGN_ENVELOPE_EXHAUSTED";
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason: `reserved=${campaign.attemptsReserved}+${slots} max=${campaign.maxAttempts}`,
      };
    }
    campaign.attemptsReserved += slots;
  }

  const attemptId = newAttemptId();
  return {
    ok: true,
    attemptId,
    campaignId: campaign?.campaignId ?? null,
    reservedSlots: slots,
    keyFingerprint: laneGuard.keyFingerprint,
    lane: laneGuard.lane,
  };
}

/** Mark that a reserved emission actually contacted the provider (or attempted to). */
export function commitProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
}): void {
  const campaign = store().campaign;
  if (campaign) {
    campaign.attemptsCommitted += reservation.reservedSlots;
  }
  const s = store();
  s.emissionsObserved += reservation.reservedSlots;
  void reservation.attemptId;
}

/** Release unused reservation (failed before contact). Does not free committed attempts. */
export function releaseProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
  contacted: boolean;
}): void {
  const campaign = store().campaign;
  if (!campaign) return;
  if (reservation.contacted) {
    campaign.attemptsCommitted += reservation.reservedSlots;
    store().emissionsObserved += reservation.reservedSlots;
    return;
  }
  // Before contact: release reservation so the slot can be reused only if not already counted.
  campaign.attemptsReserved = Math.max(
    0,
    campaign.attemptsReserved - reservation.reservedSlots,
  );
  campaign.attemptsReleased += reservation.reservedSlots;
  void reservation.attemptId;
}

export function getEmissionsObservedForTests(): number {
  return store().emissionsObserved;
}

export function __resetProviderEmissionFrontierForTests(): void {
  const s = store();
  s.campaign = null;
  s.emissionsObserved = 0;
}

/**
 * Run work inside an isolated frontier store (campaign + oracle counters).
 * Production request handlers may call this once per campaign script.
 */
export function runWithProviderEmissionStore<T>(fn: () => T): T {
  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
}

export async function runWithProviderEmissionStoreAsync<T>(
  fn: () => Promise<T>,
): Promise<T> {
  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
}

/** Stable fingerprint of payload fields that must not mutate after authorization. */
export function canonicalPayloadFingerprint(fields: Record<string, string>): string {
  const keys = Object.keys(fields).sort();
  const blob = keys.map((k) => `${k}=${fields[k]}`).join("\n");
  return createHash("sha256").update(blob, "utf8").digest("hex").slice(0, 32);
}
