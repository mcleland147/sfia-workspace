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
 */
let processLocalRuntime: RuntimeApplicationService | null = null;
let processLocalOptions: RuntimeApplicationServiceOptions | undefined;

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
  if (!processLocalRuntime) {
    processLocalOptions = options ?? defaultSingletonOptions();
    processLocalRuntime = createRuntimeApplicationService(processLocalOptions);
  }
  return processLocalRuntime;
}

export function isRuntimeApplicationServiceInitialized(): boolean {
  return processLocalRuntime !== null;
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
  processLocalRuntime = null;
  processLocalOptions = undefined;
}
