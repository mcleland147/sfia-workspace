/**
 * Ensemble 05 / M3 — composer draft in sessionStorage (tab-scoped).
 * Partition: pilot + (project | preparation) + lane. No server sync. No cross-device recovery.
 * C.2 — project and prep drafts never share a key (isolation pilot/project/prep).
 */

export type ComposerDraftRecord = {
  schemaVersion: "e05-composer-draft-v1";
  pilotId: string;
  projectId: string;
  lane: string;
  text: string;
  /** Monotonic local version — ACK may clear only if versions still match. */
  version: number;
  /** Version that was submitted; late ACK clears only when current === sent. */
  sentVersion: number | null;
  updatedAt: string;
};

/** Prep (sas) draft — separate namespace from travail project drafts. */
export type PrepComposerDraftRecord = {
  schemaVersion: "e05-prep-composer-draft-v1";
  pilotId: string;
  preparationId: string;
  lane: string;
  text: string;
  version: number;
  sentVersion: number | null;
  updatedAt: string;
};

export function studioClientLane(): string {
  if (typeof window === "undefined") return "ssr";
  const port = window.location.port || (window.location.protocol === "https:" ? "443" : "80");
  // ENV-01: DEV :3100 vs RECETTE :3200 must not share drafts.
  return `host:${window.location.hostname}:${port}`;
}

export function composerDraftStorageKey(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): string {
  const lane = input.lane ?? studioClientLane();
  return `sfia.travail.draft:v1:${lane}:${input.pilotId}:${input.projectId}`;
}

export function prepComposerDraftStorageKey(input: {
  pilotId: string;
  preparationId: string;
  lane?: string;
}): string {
  const lane = input.lane ?? studioClientLane();
  return `sfia.prep.draft:v1:${lane}:${input.pilotId}:${input.preparationId}`;
}

export function readPrepComposerDraft(input: {
  pilotId: string;
  preparationId: string;
  lane?: string;
}): PrepComposerDraftRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  if (!input.pilotId || !input.preparationId) return null;
  try {
    const raw = sessionStorage.getItem(prepComposerDraftStorageKey(input));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PrepComposerDraftRecord;
    if (parsed.schemaVersion !== "e05-prep-composer-draft-v1") return null;
    if (
      parsed.pilotId !== input.pilotId ||
      parsed.preparationId !== input.preparationId
    ) {
      return null;
    }
    const lane = input.lane ?? studioClientLane();
    if (parsed.lane !== lane) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writePrepComposerDraft(record: PrepComposerDraftRecord): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(
    prepComposerDraftStorageKey({
      pilotId: record.pilotId,
      preparationId: record.preparationId,
      lane: record.lane,
    }),
    JSON.stringify(record),
  );
}

export function clearPrepComposerDraft(input: {
  pilotId: string;
  preparationId: string;
  lane?: string;
}): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(prepComposerDraftStorageKey(input));
}

export function readComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): ComposerDraftRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  if (!input.pilotId || !input.projectId) return null;
  try {
    const raw = sessionStorage.getItem(composerDraftStorageKey(input));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ComposerDraftRecord;
    if (parsed.schemaVersion !== "e05-composer-draft-v1") return null;
    if (parsed.pilotId !== input.pilotId || parsed.projectId !== input.projectId) return null;
    const lane = input.lane ?? studioClientLane();
    if (parsed.lane !== lane) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeComposerDraft(record: ComposerDraftRecord): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(
    composerDraftStorageKey({
      pilotId: record.pilotId,
      projectId: record.projectId,
      lane: record.lane,
    }),
    JSON.stringify(record),
  );
}

export function clearComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(composerDraftStorageKey(input));
}

/**
 * Clear after successful send only when the composer still holds the sent version.
 * A newer edit (version > sentVersion) must survive a late ACK.
 */
export function clearDraftAfterAck(input: {
  pilotId: string;
  projectId: string;
  sentVersion: number;
  currentVersion: number;
  lane?: string;
}): boolean {
  if (input.currentVersion !== input.sentVersion) return false;
  clearComposerDraft(input);
  return true;
}

export function purgeComposerDraftsForPilot(pilotId: string): void {
  if (typeof sessionStorage === "undefined") return;
  const prefixes = ["sfia.travail.draft:v1:", "sfia.prep.draft:v1:"];
  const keys: string[] = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    const k = sessionStorage.key(i);
    if (
      k &&
      prefixes.some((p) => k.startsWith(p)) &&
      k.includes(`:${pilotId}:`)
    ) {
      keys.push(k);
    }
  }
  for (const k of keys) sessionStorage.removeItem(k);
}

/**
 * C3 — explicit logout / identity switch in the same tab.
 * Clears every Travail + prep draft key in this tab's sessionStorage.
 * Does not touch other origins or localStorage.
 */
export function purgeAllComposerDraftsInTab(): void {
  if (typeof sessionStorage === "undefined") return;
  const prefixes = ["sfia.travail.draft:v1:", "sfia.prep.draft:v1:"];
  const keys: string[] = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    const k = sessionStorage.key(i);
    if (k && prefixes.some((p) => k.startsWith(p))) keys.push(k);
  }
  for (const k of keys) sessionStorage.removeItem(k);
}
