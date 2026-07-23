/**
 * Feature flag — D1 Shared Platform Integration (tools + canonical context).
 * Default ON. Set D1_PLATFORM_INTEGRATION=0 to force legacy complete()-only path.
 */
export function isD1PlatformIntegrationEnabled(): boolean {
  return process.env.D1_PLATFORM_INTEGRATION !== "0";
}

/** Test helper — temporarily force flag via env (caller restores). */
export function setD1PlatformIntegrationForTests(enabled: boolean | null): void {
  if (enabled === null) {
    delete process.env.D1_PLATFORM_INTEGRATION;
    return;
  }
  process.env.D1_PLATFORM_INTEGRATION = enabled ? "1" : "0";
}
