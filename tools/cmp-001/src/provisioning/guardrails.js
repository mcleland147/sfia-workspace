/**
 * Safety guardrails for Notion Provisioning Engine.
 * Default: no-delete, no legacy import, apply disabled unless explicitly enabled in future cycles.
 */

export const DEFAULT_STRATEGY = {
  mode: 'create-only',
  allowUpdate: false,
  allowDelete: false,
  importLegacyCsv: false,
  reuseLegacyPayloads: false,
};

export const APPLY_DISABLED_MESSAGE = 'APPLY_DISABLED_IN_THIS_CYCLE';

export function mergeStrategy(configStrategy = {}) {
  return { ...DEFAULT_STRATEGY, ...configStrategy };
}

export function assertDryRunSafe(strategy) {
  if (strategy.allowDelete) {
    throw new Error('Configuration invalide : allowDelete=true interdit en dry-run.');
  }
  if (strategy.importLegacyCsv) {
    throw new Error('Configuration invalide : importLegacyCsv=true interdit.');
  }
  if (strategy.reuseLegacyPayloads) {
    throw new Error('Configuration invalide : reuseLegacyPayloads=true interdit.');
  }
}

export function blockApply() {
  const error = new Error(APPLY_DISABLED_MESSAGE);
  error.code = 'APPLY_DISABLED';
  throw error;
}
