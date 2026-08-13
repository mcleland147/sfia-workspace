import "./serverGuard";
import {
  createRuntimeApplicationService,
  type RuntimeApplicationService,
  type RuntimeApplicationServiceOptions,
} from "./service";

/**
 * D-V2-02: process-local singleton holder.
 * Business state lives in the underlying V1 in-memory stores for this process only.
 * Not safe across serverless multi-instance deployments — disclosures say so.
 *
 * Anchored on `globalThis` so Next.js route/chunk graphs that reload this module
 * still share one process-local instance (create on /new → get on /[id]).
 * This is not durable persistence and not a cross-process store.
 */
const RUNTIME_GLOBAL_KEY = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__" as const;

type ProcessLocalRuntimeSlot = {
  service: RuntimeApplicationService | null;
  options: RuntimeApplicationServiceOptions | undefined;
};

function getProcessLocalRuntimeSlot(): ProcessLocalRuntimeSlot {
  const g = globalThis as typeof globalThis & {
    [RUNTIME_GLOBAL_KEY]?: ProcessLocalRuntimeSlot;
  };
  if (!g[RUNTIME_GLOBAL_KEY]) {
    g[RUNTIME_GLOBAL_KEY] = { service: null, options: undefined };
  }
  return g[RUNTIME_GLOBAL_KEY];
}

function envAuditMode(): RuntimeApplicationServiceOptions["auditMode"] {
  const raw = process.env.SFIA_V2_RUNTIME_AUDIT?.trim().toLowerCase();
  if (raw === "memory" || raw === "sqlite" || raw === "noop") return raw;
  return "noop";
}

function defaultSingletonOptions(): RuntimeApplicationServiceOptions {
  return {
    auditMode: envAuditMode(),
    nowIso: process.env.SFIA_V2_RUNTIME_NOW_ISO || undefined,
  };
}

/**
 * Returns the process-local RuntimeApplicationService, creating it once.
 * Optional `options` apply only on first creation (or after test reset).
 */
export function getRuntimeApplicationService(
  options?: RuntimeApplicationServiceOptions,
): RuntimeApplicationService {
  const slot = getProcessLocalRuntimeSlot();
  if (!slot.service) {
    slot.options = options ?? defaultSingletonOptions();
    slot.service = createRuntimeApplicationService(slot.options);
  }
  return slot.service;
}

export function isRuntimeApplicationServiceInitialized(): boolean {
  return getProcessLocalRuntimeSlot().service !== null;
}

/**
 * Test-only reset. Throws outside test / explicit allow flag.
 */
export function resetRuntimeApplicationServiceForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error(
      "resetRuntimeApplicationServiceForTests is only allowed in test environments.",
    );
  }
  const slot = getProcessLocalRuntimeSlot();
  try {
    slot.service?.dispose();
  } catch {
    /* ignore */
  }
  slot.service = null;
  slot.options = undefined;
}
