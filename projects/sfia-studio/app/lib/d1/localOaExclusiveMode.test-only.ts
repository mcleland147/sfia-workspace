import { localOaExclusiveModeOverrideSlot } from "./localOaExclusiveMode.store";

/** Test-only. Never import from production barrels. */
export function resetLocalOaExclusiveModeForTests(): void {
  localOaExclusiveModeOverrideSlot.current = null;
}

/** Test-only. Pass null to clear override (env wins). */
export function setLocalOaExclusiveModeForTests(active: boolean | null): void {
  localOaExclusiveModeOverrideSlot.current = active;
}
