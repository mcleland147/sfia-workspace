import { validatePayload } from '../validate.js';
import {
  buildNotionProperties,
  buildPageContentBlocks,
  replacePageBlocks,
  updateNotionPage,
} from '../notionClient.js';

export function updateObjectService(objectType) {
  return async function update(pageId, payload) {
    const schema = validatePayload(objectType, payload);
    const properties = buildNotionProperties(payload, schema);
    const page = await updateNotionPage(pageId, properties);
    const pageBlocks = buildPageContentBlocks(payload, schema);

    if (pageBlocks.length > 0) {
      await replacePageBlocks(pageId, pageBlocks);
    }

    return {
      objectType,
      pageId: page.id,
      url: page.url,
      title: payload.title,
    };
  };
}
