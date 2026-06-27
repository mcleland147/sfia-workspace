import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

export const DATABASE_ENV_KEYS = {
  experiment: 'NOTION_DATABASE_EXPERIMENTS',
  component: 'NOTION_DATABASE_COMPONENTS',
  prompt: 'NOTION_DATABASE_PROMPTS',
  template: 'NOTION_DATABASE_TEMPLATES',
  standard: 'NOTION_DATABASE_STANDARDS',
  adr: 'NOTION_DATABASE_ADR',
  rex: 'NOTION_DATABASE_REX',
  kpi: 'NOTION_DATABASE_KPI',
  knowledge: 'NOTION_DATABASE_KNOWLEDGE',
  project: 'NOTION_DATABASE_PROJECTS',
  'reference-page': 'NOTION_DATABASE_REFERENCE_PAGES',
};

export const ENV_FILE_KEYS = [
  'NOTION_TOKEN',
  ...Object.values(DATABASE_ENV_KEYS),
];

export function getEnvFilePath() {
  return join(__dirname, '..', '.env');
}

export function getNotionToken() {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    throw new Error('NOTION_TOKEN manquant. Copiez .env.example vers .env et renseignez votre token.');
  }
  return token;
}

export function getDatabaseId(objectType) {
  const normalized = objectType.toLowerCase();
  const envKey = DATABASE_ENV_KEYS[normalized];

  if (!envKey) {
    const supported = Object.keys(DATABASE_ENV_KEYS).join(', ');
    throw new Error(`Type d'objet inconnu : "${objectType}". Types supportés : ${supported}`);
  }

  const databaseId = process.env[envKey];
  if (!databaseId) {
    throw new Error(`${envKey} manquant dans .env pour le type "${normalized}".`);
  }

  return databaseId;
}

export function getSupportedTypes() {
  return Object.keys(DATABASE_ENV_KEYS);
}

export const EXPORT_FILE_NAMES = {
  experiment: 'experiments.json',
  component: 'components.json',
  prompt: 'prompts.json',
  template: 'templates.json',
  standard: 'standards.json',
  adr: 'adr.json',
  rex: 'rex.json',
  kpi: 'kpi.json',
  knowledge: 'knowledge.json',
  project: 'projects.json',
  'reference-page': 'reference-pages.json',
};

export const EXPORT_TYPE_ALIASES = {
  experiment: 'experiment',
  experiments: 'experiment',
  component: 'component',
  components: 'component',
  prompt: 'prompt',
  prompts: 'prompt',
  template: 'template',
  templates: 'template',
  standard: 'standard',
  standards: 'standard',
  adr: 'adr',
  adrs: 'adr',
  rex: 'rex',
  rexes: 'rex',
  kpi: 'kpi',
  kpis: 'kpi',
  knowledge: 'knowledge',
  project: 'project',
  projects: 'project',
  'reference-page': 'reference-page',
  'reference-pages': 'reference-page',
};

export function getExportsDir() {
  return join(__dirname, '..', 'exports');
}

export function getConfiguredExportTypes() {
  return Object.keys(DATABASE_ENV_KEYS).filter((type) => {
    const envKey = DATABASE_ENV_KEYS[type];
    return Boolean(process.env[envKey]?.trim());
  });
}

export function normalizeExportType(type) {
  const key = type.toLowerCase().trim();
  const normalized = EXPORT_TYPE_ALIASES[key];
  if (!normalized) {
    const supported = [...new Set(Object.values(EXPORT_TYPE_ALIASES))].join(', ');
    throw new Error(`Type d'export inconnu : "${type}". Types supportés : ${supported}`);
  }
  return normalized;
}
