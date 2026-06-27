import { Client } from '@notionhq/client';
import { getNotionToken } from './config.js';

let client;

export function getNotionClient() {
  if (!client) {
    client = new Client({ auth: getNotionToken() });
  }
  return client;
}

function richText(content) {
  if (!content) return undefined;
  const text = String(content);
  if (!text.trim()) return undefined;
  return {
    rich_text: [{ type: 'text', text: { content: text.slice(0, 2000) } }],
  };
}

function title(content) {
  const text = String(content || 'Sans titre').trim() || 'Sans titre';
  return {
    title: [{ type: 'text', text: { content: text.slice(0, 2000) } }],
  };
}

function select(value) {
  if (!value) return undefined;
  return { select: { name: String(value) } };
}

function statusValue(value) {
  if (!value) return undefined;
  return { status: { name: String(value) } };
}

function multiSelect(values) {
  if (!Array.isArray(values) || values.length === 0) return undefined;
  return {
    multi_select: values.map((name) => ({ name: String(name) })),
  };
}

function dateValue(value) {
  if (!value) return undefined;
  return { date: { start: String(value) } };
}

function url(value) {
  if (!value) return undefined;
  return { url: String(value) };
}

function checkbox(value) {
  if (value === undefined || value === null) return undefined;
  return { checkbox: Boolean(value) };
}

function number(value) {
  if (value === undefined || value === null) return undefined;
  return { number: Number(value) };
}

const FIELD_BUILDERS = {
  title,
  rich_text: richText,
  select,
  status: statusValue,
  multi_select: multiSelect,
  date: dateValue,
  url,
  checkbox,
  number,
};

export function buildNotionProperties(payload, schema) {
  const properties = {};

  for (const [fieldName, definition] of Object.entries(schema.properties)) {
    const notionProperty = definition.notionProperty || fieldName;
    const value = payload[fieldName];

    if (definition.notionType === 'page_content') {
      continue;
    }

    const builder = FIELD_BUILDERS[definition.notionType];

    if (!builder) {
      throw new Error(`Type Notion non supporté pour "${fieldName}" : ${definition.notionType}`);
    }

    const built = builder(value);
    if (built !== undefined) {
      properties[notionProperty] = built;
    }
  }

  return properties;
}

function richTextChunks(text) {
  const content = String(text);
  const chunks = [];

  for (let index = 0; index < content.length; index += 2000) {
    chunks.push({
      type: 'text',
      text: { content: content.slice(index, index + 2000) },
    });
  }

  return chunks.length > 0 ? chunks : [{ type: 'text', text: { content: '' } }];
}

function paragraphBlock(text) {
  return {
    object: 'block',
    type: 'paragraph',
    paragraph: { rich_text: richTextChunks(text) },
  };
}

function headingBlock(level, text) {
  const type = `heading_${level}`;
  return {
    object: 'block',
    type,
    [type]: { rich_text: richTextChunks(text) },
  };
}

export function markdownToNotionBlocks(markdown) {
  const blocks = [];

  for (const line of String(markdown).split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('### ')) {
      blocks.push(headingBlock(3, trimmed.slice(4)));
    } else if (trimmed.startsWith('## ')) {
      blocks.push(headingBlock(2, trimmed.slice(3)));
    } else if (trimmed.startsWith('# ')) {
      blocks.push(headingBlock(1, trimmed.slice(2)));
    } else if (trimmed.startsWith('- ')) {
      blocks.push({
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: { rich_text: richTextChunks(trimmed.slice(2)) },
      });
    } else {
      blocks.push(paragraphBlock(trimmed));
    }
  }

  return blocks;
}

export async function appendPageBlocks(pageId, blocks) {
  if (!blocks.length) return;

  const notion = getNotionClient();

  for (let index = 0; index < blocks.length; index += 100) {
    await notion.blocks.children.append({
      block_id: pageId,
      children: blocks.slice(index, index + 100),
    });
  }
}

export async function listPageBlocks(pageId) {
  const notion = getNotionClient();
  const blocks = [];
  let startCursor;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: startCursor,
    });

    blocks.push(...response.results);
    startCursor = response.has_more ? response.next_cursor : undefined;
  } while (startCursor);

  return blocks;
}

export async function clearPageBlocks(pageId) {
  const notion = getNotionClient();
  const blocks = await listPageBlocks(pageId);

  for (const block of blocks) {
    await notion.blocks.delete({ block_id: block.id });
  }
}

export async function replacePageBlocks(pageId, blocks) {
  await clearPageBlocks(pageId);
  await appendPageBlocks(pageId, blocks);
}

export function buildPageContentBlocks(payload, schema) {
  const blocks = [];
  const summary = payload.summary;
  const content = payload.content;

  if (summary) {
    blocks.push(headingBlock(2, 'Résumé'));
    blocks.push(paragraphBlock(summary));
    blocks.push({ object: 'block', type: 'divider', divider: {} });
  }

  if (content) {
    blocks.push(...markdownToNotionBlocks(content));
  }

  return blocks;
}

export async function createNotionPage(databaseId, properties) {
  const notion = getNotionClient();

  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties,
  });

  return response;
}

export async function updateNotionPage(pageId, properties) {
  const notion = getNotionClient();

  const response = await notion.pages.update({
    page_id: pageId,
    properties,
  });

  return response;
}

function extractDatabaseTitle(database) {
  if (!database.title?.length) {
    return 'Sans titre';
  }
  return database.title.map((part) => part.plain_text).join('').trim() || 'Sans titre';
}

export async function searchAccessibleDatabases() {
  const notion = getNotionClient();
  const databases = [];
  let startCursor;

  do {
    const response = await notion.search({
      filter: { property: 'object', value: 'database' },
      page_size: 100,
      start_cursor: startCursor,
    });

    for (const item of response.results) {
      if (item.object !== 'database') continue;
      databases.push({
        id: item.id,
        title: extractDatabaseTitle(item),
        url: item.url,
      });
    }

    startCursor = response.has_more ? response.next_cursor : undefined;
  } while (startCursor);

  return databases.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
}

export async function retrieveDatabase(databaseId) {
  const notion = getNotionClient();
  return notion.databases.retrieve({ database_id: databaseId });
}

export async function queryDatabasePages(databaseId) {
  const notion = getNotionClient();
  const pages = [];
  let startCursor;

  do {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
      start_cursor: startCursor,
    });

    pages.push(...response.results);
    startCursor = response.has_more ? response.next_cursor : undefined;
  } while (startCursor);

  return pages;
}
