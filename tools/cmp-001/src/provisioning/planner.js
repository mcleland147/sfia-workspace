import { assertDryRunSafe } from './guardrails.js';
import { getParentPageId } from './configLoader.js';

function normalizeId(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function buildPlan(config) {
  assertDryRunSafe(config.strategy);

  const parentPageId = getParentPageId(config);
  const actions = [];

  actions.push({
    type: 'create_page',
    target: 'root',
    title: config.rootPage.title,
    parent: parentPageId ? { page_id: parentPageId } : { type: 'env', key: 'NOTION_PARENT_PAGE_ID' },
    introBlocks: config.rootPage.introBlocks || [],
    repoLinks: config.rootPage.repoLinks || [],
  });

  for (const section of config.sections) {
    actions.push({
      type: 'create_page',
      target: 'section',
      id: section.id || normalizeId(section.title),
      title: section.title,
      parent: { ref: 'rootPage' },
      introBlocks: section.introBlocks || [],
      repoLinks: section.repoLinks || [],
      subPages: (section.subPages || []).map((sub) => ({
        type: 'create_page',
        target: 'sub_page',
        id: sub.id || normalizeId(sub.title),
        title: sub.title,
        parent: { ref: section.id || normalizeId(section.title) },
        introBlocks: sub.introBlocks || [],
        repoLinks: sub.repoLinks || [],
        status: sub.status || 'planned',
      })),
    });
  }

  for (const database of config.databases) {
    actions.push({
      type: 'create_database',
      target: 'database',
      id: database.id || normalizeId(database.name),
      name: database.name,
      titleProperty: database.titleProperty || 'Nom',
      parent: database.parentSection
        ? { ref: database.parentSection }
        : { ref: 'rootPage' },
      properties: database.properties || [],
      initialEntries: database.initialEntries || [],
      notes: database.notes || null,
    });
  }

  return {
    workspace: config.workspace,
    strategy: config.strategy,
    parentPageId,
    rootPageTitle: config.rootPage.title,
    sectionCount: config.sections.length,
    databaseCount: config.databases.length,
    subPageCount: config.sections.reduce(
      (sum, section) => sum + (section.subPages?.length || 0),
      0,
    ),
    actions,
    forbidden: {
      delete: !config.strategy.allowDelete,
      legacyCsvImport: !config.strategy.importLegacyCsv,
      legacyPayloadReuse: !config.strategy.reuseLegacyPayloads,
      applyInThisCycle: true,
    },
  };
}
