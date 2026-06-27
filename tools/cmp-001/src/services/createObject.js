import { getDatabaseId } from '../config.js';
import {
  appendPageBlocks,
  buildNotionProperties,
  buildPageContentBlocks,
  createNotionPage,
} from '../notionClient.js';
import { validatePayload } from '../validate.js';

export function createObjectService(objectType) {
  return async function create(payload) {
    const schema = validatePayload(objectType, payload);
    const databaseId = getDatabaseId(objectType);
    const properties = buildNotionProperties(payload, schema);
    const page = await createNotionPage(databaseId, properties);
    const pageBlocks = buildPageContentBlocks(payload, schema);

    if (pageBlocks.length > 0) {
      await appendPageBlocks(page.id, pageBlocks);
    }

    return {
      objectType,
      pageId: page.id,
      url: page.url,
      title: payload.title,
    };
  };
}
