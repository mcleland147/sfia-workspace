/**
 * D4 Option A — legacy Project navigation under local OA-exclusive mode.
 * Inactive when isLocalOaExclusiveMode() is false.
 */

import { notFound, redirect } from "next/navigation";
import { isLocalOaExclusiveMode } from "./localOaExclusiveMode";

/** Generic legacy entry → Product Studio home. */
export function redirectLegacyGenericEntryToStudioIfExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  redirect("/studio");
}

/**
 * Historical project deep link (proj-* or any D1 id): explicit absence.
 * Never maps to prj:* / never fabricates an OA project.
 */
export function denyLegacyProjectDeepLinkIfExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  notFound();
}
