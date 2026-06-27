import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import {
  DATABASE_ENV_KEYS,
  EXPORT_FILE_NAMES,
  getConfiguredExportTypes,
  getDatabaseId,
  getExportsDir,
  normalizeExportType,
} from '../config.js';
import { queryDatabasePages, retrieveDatabase } from '../notionClient.js';

function extractDatabaseTitle(database) {
  if (!database.title?.length) {
    return 'Sans titre';
  }
  return database.title.map((part) => part.plain_text).join('').trim() || 'Sans titre';
}

function parsePropertyValue(property) {
  if (!property) return null;

  switch (property.type) {
    case 'title':
      return property.title.map((part) => part.plain_text).join('');
    case 'rich_text':
      return property.rich_text.map((part) => part.plain_text).join('');
    case 'select':
      return property.select?.name ?? null;
    case 'status':
      return property.status?.name ?? null;
    case 'multi_select':
      return property.multi_select.map((item) => item.name);
    case 'date':
      return property.date
        ? { start: property.date.start, end: property.date.end ?? null }
        : null;
    case 'url':
      return property.url;
    case 'email':
      return property.email;
    case 'phone_number':
      return property.phone_number;
    case 'number':
      return property.number;
    case 'checkbox':
      return property.checkbox;
    case 'people':
      return property.people.map((person) => ({
        id: person.id,
        name: person.name ?? null,
      }));
    case 'relation':
      return property.relation.map((item) => item.id);
    case 'files':
      return property.files.map((file) => ({
        name: file.name ?? null,
        url: file.type === 'external' ? file.external?.url : file.file?.url ?? null,
      }));
    case 'formula':
      return property.formula[property.formula.type] ?? null;
    case 'rollup':
      return property.rollup[property.rollup.type] ?? null;
    case 'created_time':
      return property.created_time;
    case 'last_edited_time':
      return property.last_edited_time;
    case 'created_by':
      return property.created_by?.id ?? null;
    case 'last_edited_by':
      return property.last_edited_by?.id ?? null;
    default:
      return null;
  }
}

function parsePageProperties(properties) {
  const parsed = {};

  for (const [name, property] of Object.entries(properties)) {
    parsed[name] = parsePropertyValue(property);
  }

  return parsed;
}

function extractPageTitle(properties) {
  for (const property of Object.values(properties)) {
    if (property.type === 'title') {
      return property.title.map((part) => part.plain_text).join('').trim() || 'Sans titre';
    }
  }
  return 'Sans titre';
}

function mapPageToEntry(page) {
  const properties = parsePageProperties(page.properties);

  return {
    id: page.id,
    title: extractPageTitle(page.properties),
    properties,
    url: page.url,
    createdAt: page.created_time,
    updatedAt: page.last_edited_time,
  };
}

async function exportDatabase(objectType) {
  const databaseId = getDatabaseId(objectType);
  const database = await retrieveDatabase(databaseId);
  const pages = await queryDatabasePages(databaseId);
  const entries = pages.map(mapPageToEntry);

  return {
    objectType,
    databaseId,
    databaseTitle: extractDatabaseTitle(database),
    fileName: EXPORT_FILE_NAMES[objectType],
    count: entries.length,
    entries,
  };
}

function buildExportPayload(result) {
  return {
    exportedAt: new Date().toISOString(),
    objectType: result.objectType,
    databaseId: result.databaseId,
    databaseTitle: result.databaseTitle,
    count: result.count,
    entries: result.entries,
  };
}

function buildManifest(exportedBases) {
  const totalObjects = exportedBases.reduce((sum, base) => sum + base.count, 0);

  return {
    exportedAt: new Date().toISOString(),
    version: '1.1.0',
    bases: exportedBases.map((base) => ({
      objectType: base.objectType,
      file: base.fileName,
      databaseId: base.databaseId,
      databaseTitle: base.databaseTitle,
      count: base.count,
    })),
    totalObjects,
  };
}

async function confirmOverwrite(existingFiles) {
  const rl = createInterface({ input, output });

  try {
    console.log('\nFichiers existants détectés :');
    existingFiles.forEach((file) => console.log(`  - ${file}`));
    const answer = await rl.question('\nÉcraser ces fichiers ? [o/N] ');
    return /^o(ui)?$/i.test(answer.trim());
  } finally {
    rl.close();
  }
}

function getTargetFiles(objectTypes, exportsDir) {
  const files = objectTypes.map((type) => join(exportsDir, EXPORT_FILE_NAMES[type]));
  files.push(join(exportsDir, 'export-manifest.json'));
  return files;
}

function writeExportFiles(exportsDir, results, manifest) {
  mkdirSync(exportsDir, { recursive: true });

  for (const result of results) {
    const filePath = join(exportsDir, result.fileName);
    writeFileSync(filePath, `${JSON.stringify(buildExportPayload(result), null, 2)}\n`, 'utf-8');
  }

  const manifestPath = join(exportsDir, 'export-manifest.json');
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf-8');

  return manifestPath;
}

export async function runExport({ type, yes = false } = {}) {
  const objectTypes = type
    ? [normalizeExportType(type)]
    : getConfiguredExportTypes();

  if (objectTypes.length === 0) {
    throw new Error('Aucune base configurée dans .env. Lancez `node src/cli.js discover` d\'abord.');
  }

  const exportsDir = getExportsDir();
  const targetFiles = getTargetFiles(objectTypes, exportsDir);
  const existingFiles = targetFiles.filter((file) => existsSync(file));

  if (existingFiles.length > 0 && !yes) {
    const shouldOverwrite = await confirmOverwrite(existingFiles);
    if (!shouldOverwrite) {
      console.log('Export annulé — aucun fichier modifié.');
      return { cancelled: true, results: [], manifest: null };
    }
  }

  console.log(`Export Notion → JSON (lecture seule)\n`);

  const results = [];
  const skipped = [];

  for (const objectType of objectTypes) {
    const envKey = DATABASE_ENV_KEYS[objectType];
    if (!process.env[envKey]?.trim()) {
      skipped.push({ objectType, reason: `${envKey} non configuré` });
      continue;
    }

    try {
      const result = await exportDatabase(objectType);
      results.push(result);
      console.log(`✔ ${result.fileName} — ${result.count} objet(s)`);
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      console.log(`✖ ${EXPORT_FILE_NAMES[objectType]} — ${message}`);
    }
  }

  if (skipped.length > 0) {
    skipped.forEach((item) => {
      console.log(`○ ${item.objectType} ignoré (${item.reason})`);
    });
  }

  if (results.length === 0) {
    throw new Error('Aucune base exportée.');
  }

  const manifest = buildManifest(results);
  const manifestPath = writeExportFiles(exportsDir, results, manifest);

  console.log(`\nManifeste : ${manifestPath}`);
  console.log(`${manifest.totalObjects} objet(s) exporté(s) dans ${results.length} base(s).`);

  return { cancelled: false, results, manifest, manifestPath };
}
