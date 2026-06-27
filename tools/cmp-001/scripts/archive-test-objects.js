#!/usr/bin/env node

/**
 * Consolidation SFIA — archive les objets de test sans suppression.
 * Lecture + mise à jour ciblée uniquement sur les titres [TEST SFIA Sync].
 */

import { getConfiguredExportTypes, getDatabaseId } from '../src/config.js';
import { getNotionClient, queryDatabasePages, retrieveDatabase } from '../src/notionClient.js';

const TEST_PREFIX = '[TEST SFIA Sync]';
const ARCHIVED_PREFIX = '[ARCHIVED TEST]';

const TITLE_PROPERTIES = {
  experiment: 'Experiment',
  component: 'Component',
  prompt: 'Prompt',
  template: 'Name',
  standard: 'Name',
  adr: 'ADR',
  rex: 'REX',
  kpi: 'KPI',
  knowledge: 'Article',
  project: 'Project',
};

const ARCHIVED_STATUS_TYPES = new Set(['rex', 'kpi', 'knowledge']);

function extractPageTitle(page) {
  for (const property of Object.values(page.properties)) {
    if (property.type === 'title') {
      return property.title.map((part) => part.plain_text).join('').trim();
    }
  }
  return '';
}

function buildArchivedTitle(title) {
  if (title.startsWith(ARCHIVED_PREFIX)) {
    return null;
  }
  if (!title.startsWith(TEST_PREFIX)) {
    return null;
  }
  return title.replace(TEST_PREFIX, ARCHIVED_PREFIX);
}

function buildUpdateProperties(objectType, newTitle, useArchivedStatus) {
  const titleProperty = TITLE_PROPERTIES[objectType];
  const properties = {
    [titleProperty]: {
      title: [{ type: 'text', text: { content: newTitle.slice(0, 2000) } }],
    },
  };

  if (useArchivedStatus) {
    properties.Status = { status: { name: 'Archived' } };
  }

  return properties;
}

async function archiveTestObjects() {
  const notion = getNotionClient();
  const results = [];

  for (const objectType of getConfiguredExportTypes()) {
    const databaseId = getDatabaseId(objectType);
    const database = await retrieveDatabase(databaseId);
    const pages = await queryDatabasePages(databaseId);
    const useArchivedStatus = ARCHIVED_STATUS_TYPES.has(objectType);

    for (const page of pages) {
      const title = extractPageTitle(page);
      const newTitle = buildArchivedTitle(title);

      if (!newTitle) {
        continue;
      }

      const action = useArchivedStatus ? 'status_archived' : 'title_prefixed';

      await notion.pages.update({
        page_id: page.id,
        properties: buildUpdateProperties(objectType, newTitle, useArchivedStatus),
      });

      results.push({
        objectType,
        pageId: page.id,
        previousTitle: title,
        newTitle,
        action,
        status: useArchivedStatus ? 'Archived' : null,
        url: page.url,
      });

      console.log(`✔ ${objectType} — ${action} — ${newTitle}`);
    }
  }

  return results;
}

archiveTestObjects()
  .then((results) => {
    console.log(`\n${results.length} objet(s) de test archivé(s) ou marqué(s).`);
    if (results.length === 0) {
      console.log('Aucun objet [TEST SFIA Sync] trouvé.');
    }
  })
  .catch((error) => {
    console.error(`Erreur : ${error?.body?.message || error.message}`);
    process.exitCode = 1;
  });
