/**
 * Process-local override slot for tests only.
 * Not durable. Production always reads env via isLocalOaExclusiveMode().
 */
export const localOaExclusiveModeOverrideSlot: {
  current: boolean | null;
} = {
  current: null,
};
