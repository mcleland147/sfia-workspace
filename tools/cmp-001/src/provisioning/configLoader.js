import { readFileSync } from 'fs';
import { resolve } from 'path';
import { mergeStrategy } from './guardrails.js';

const REQUIRED_TOP_LEVEL = ['version', 'workspace', 'rootPage', 'sections', 'databases'];

function resolveEnvPlaceholder(value) {
  if (typeof value !== 'string') return value;
  const match = value.match(/^\$\{([A-Z0-9_]+)\}$/);
  if (!match) return value;
  return process.env[match[1]] || value;
}

export function loadProvisioningConfig(configPath) {
  const absolutePath = resolve(process.cwd(), configPath);
  let raw;

  try {
    raw = readFileSync(absolutePath, 'utf-8');
  } catch {
    throw new Error(`Fichier de configuration introuvable : ${absolutePath}`);
  }

  let config;
  try {
    config = JSON.parse(raw);
  } catch {
    throw new Error(`Configuration JSON invalide : ${absolutePath}`);
  }

  for (const key of REQUIRED_TOP_LEVEL) {
    if (!config[key]) {
      throw new Error(`Configuration incomplète : champ "${key}" manquant.`);
    }
  }

  if (!Array.isArray(config.sections) || config.sections.length === 0) {
    throw new Error('Configuration invalide : sections doit être un tableau non vide.');
  }

  if (!Array.isArray(config.databases) || config.databases.length === 0) {
    throw new Error('Configuration invalide : databases doit être un tableau non vide.');
  }

  config.strategy = mergeStrategy(config.strategy);

  if (config.environment) {
    for (const [key, value] of Object.entries(config.environment)) {
      config.environment[key] = resolveEnvPlaceholder(value);
    }
  }

  config._meta = {
    configPath: absolutePath,
    loadedAt: new Date().toISOString(),
  };

  return config;
}

export function getParentPageId(config) {
  const fromEnv = config.environment?.parentPageId;
  const placeholder = '${NOTION_PARENT_PAGE_ID}';

  if (fromEnv && fromEnv !== placeholder && fromEnv.trim()) {
    return fromEnv.trim();
  }

  const envValue = process.env.NOTION_PARENT_PAGE_ID;
  if (envValue?.trim()) {
    return envValue.trim();
  }

  return null;
}
