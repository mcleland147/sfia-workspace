import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import {
  DATABASE_ENV_KEYS,
  ENV_FILE_KEYS,
  getEnvFilePath,
  getNotionToken,
} from '../config.js';
import { searchAccessibleDatabases } from '../notionClient.js';

const TYPE_NAME_PATTERNS = {
  experiment: [/\bexperiments?\b/i, /\bexpériences?\b/i],
  component: [/\bcomponents?\b/i, /\bcomposants?\b/i],
  prompt: [/\bprompts?\b/i],
  template: [/\btemplates?\b/i, /\bmodèles?\b/i],
  standard: [/\bstandards?\b/i, /\bnormes?\b/i],
  adr: [/\badrs?\b/i, /architecture\s+decision/i, /\bdécisions?\b/i],
  rex: [/\brexs?\b/i, /retour(?:s)?\s+d['']expérience/i, /lessons?\s+learned/i],
  kpi: [/\bkpis?\b/i, /\bindicateurs?\b/i],
  knowledge: [/knowledge/i, /\barticles?\b/i, /documentation/i],
  project: [/\bprojects?\b/i, /\bprojets?\b/i],
  'reference-page': [/reference\s*pages?/i, /pages?\s+de\s+r[eé]f[eé]rence/i, /\breferences?\b/i],
};

function scoreDatabaseForType(databaseTitle, objectType) {
  const patterns = TYPE_NAME_PATTERNS[objectType] || [];
  const title = databaseTitle.toLowerCase();

  for (const pattern of patterns) {
    if (pattern.test(title)) {
      return 10;
    }
  }

  if (title.includes(objectType)) {
    return 5;
  }

  return 0;
}

export function suggestEnvMappings(databases) {
  const suggestions = [];
  const usedDatabaseIds = new Set();
  const usedEnvKeys = new Set();

  const candidates = [];

  for (const [objectType, envKey] of Object.entries(DATABASE_ENV_KEYS)) {
    for (const database of databases) {
      const score = scoreDatabaseForType(database.title, objectType);
      if (score > 0) {
        candidates.push({ objectType, envKey, database, score });
      }
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  for (const candidate of candidates) {
    if (usedDatabaseIds.has(candidate.database.id) || usedEnvKeys.has(candidate.envKey)) {
      continue;
    }

    suggestions.push({
      envKey: candidate.envKey,
      objectType: candidate.objectType,
      databaseId: candidate.database.id,
      databaseTitle: candidate.database.title,
    });

    usedDatabaseIds.add(candidate.database.id);
    usedEnvKeys.add(candidate.envKey);
  }

  return suggestions;
}

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return {};
  }

  const content = readFileSync(filePath, 'utf-8');
  const values = {};

  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    values[key] = value;
  }

  return values;
}

export function buildEnvContent(values) {
  return `${ENV_FILE_KEYS.map((key) => `${key}=${values[key] ?? ''}`).join('\n')}\n`;
}

export function writeEnvFile(suggestions, { token } = {}) {
  const envPath = getEnvFilePath();
  const currentValues = parseEnvFile(envPath);
  const nextValues = { ...currentValues };

  if (token) {
    nextValues.NOTION_TOKEN = token;
  }

  for (const suggestion of suggestions) {
    nextValues[suggestion.envKey] = suggestion.databaseId;
  }

  writeFileSync(envPath, buildEnvContent(nextValues), 'utf-8');
  return envPath;
}

async function confirmWrite() {
  const rl = createInterface({ input, output });

  try {
    const answer = await rl.question('\nÉcrire ces valeurs dans .env ? [o/N] ');
    return /^o(ui)?$/i.test(answer.trim());
  } finally {
    rl.close();
  }
}

function printDatabases(databases) {
  if (databases.length === 0) {
    console.log('Aucune base Notion accessible trouvée.');
    console.log('Vérifiez NOTION_TOKEN et que l\'intégration est connectée à vos bases.');
    return;
  }

  console.log(`Bases Notion accessibles (${databases.length}) :\n`);

  databases.forEach((database, index) => {
    console.log(`  ${index + 1}. ${database.title}`);
    console.log(`     ID: ${database.id}`);
    if (database.url) {
      console.log(`     URL: ${database.url}`);
    }
    console.log('');
  });
}

function printSuggestions(suggestions) {
  if (suggestions.length === 0) {
    console.log('Aucune correspondance automatique détectée entre les noms de bases et les types SFIA.');
    console.log('Renommez vos bases (ex. "SFIA Experiments") ou complétez .env manuellement.');
    return;
  }

  console.log('Correspondances proposées :\n');

  for (const suggestion of suggestions) {
    console.log(`  ${suggestion.envKey}`);
    console.log(`    → ${suggestion.databaseTitle}`);
    console.log(`    → ${suggestion.databaseId}`);
    console.log('');
  }
}

export async function runDiscover({ yes = false } = {}) {
  const token = getNotionToken();
  const databases = await searchAccessibleDatabases();

  printDatabases(databases);

  const suggestions = suggestEnvMappings(databases);
  printSuggestions(suggestions);

  if (suggestions.length === 0) {
    return { databases, suggestions, written: false };
  }

  const shouldWrite = yes || (await confirmWrite());

  if (!shouldWrite) {
    console.log('Aucune modification du fichier .env.');
    return { databases, suggestions, written: false };
  }

  const envPath = writeEnvFile(suggestions, { token });
  console.log(`\nFichier .env mis à jour : ${envPath}`);

  return { databases, suggestions, written: true, envPath };
}
