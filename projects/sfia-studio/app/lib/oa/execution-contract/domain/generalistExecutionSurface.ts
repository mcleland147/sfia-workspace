/**
 * Canonical generic Product ExecutionContract surface (PJ-REPROOF-05 / Morris).
 *
 * ONE quartet for ANY authorized Product mission. Cursor owns HOW.
 * These tokens describe the durable EC contract surface — not AgentDescriptor
 * infrastructure and not a Product task catalogue.
 *
 * Owned by execution-contract domain. Consumers (Product prepare semantics,
 * AgentDescriptor builders) MUST import from this module (or the public
 * execution-contract barrel) — never duplicate the string literals.
 */

/** Single generic Product capability — not a task catalogue. */
export const STUDIO_CURSOR_GENERALIST_CAPABILITY =
  "cap:studio.cursor.generalist" as const;
export const STUDIO_CURSOR_GENERALIST_ACTION =
  "studio.cursor.generalist.execute" as const;
export const STUDIO_CURSOR_GENERALIST_TARGET =
  "studio.cursor.generalist.workspace" as const;
export const STUDIO_CURSOR_GENERALIST_SCOPE =
  "studio.cursor.generalist.authorized_contract" as const;
