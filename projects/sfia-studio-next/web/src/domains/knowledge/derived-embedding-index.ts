/**
 * ML2 E = lexical + local embeddings — derived file index (no PG / no pgvector).
 * Reconstructible from authorized D4 sources. Mobilization filters rights,
 * revocation, version freshness, and provenance before any Nora exposure.
 *
 * Root: web/.sfia-derived/embedding-index/<projectId>/
 * Migration 027 candidate documented separately — NOT applied here.
 */
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

export const DERIVED_EMBEDDING_MODEL = "text-embedding-3-small";
export const DERIVED_INDEX_SCHEMA = "ml2-derived-emb-v1";

export type DerivedSourceKind = "acquis" | "subject" | "open_point" | "document_excerpt";

export type DerivedIndexEntry = {
  sourceId: string;
  sourceKind: DerivedSourceKind;
  projectId: string;
  preparationId: string;
  contentFingerprint: string;
  model: string;
  dims: number;
  revoked: boolean;
  deleted: boolean;
  versionLabel: string | null;
  /** Opaque index ref — citation must carry exact sourceId + versionLabel. */
  indexRef: string;
  updatedAt: string;
  /** Text used for embedding — never cross-project. */
  text: string;
};

export type DerivedIndexManifest = {
  schema: typeof DERIVED_INDEX_SCHEMA;
  projectId: string;
  model: string;
  updatedAt: string;
  entries: Omit<DerivedIndexEntry, "text">[];
};

export type MobilizableHit = {
  sourceId: string;
  sourceKind: DerivedSourceKind;
  score: number;
  versionLabel: string | null;
  indexRef: string;
  preparationId: string;
  snippet: string;
};

export function derivedIndexRoot(
  projectId: string,
  baseDir = join(process.cwd(), ".sfia-derived", "embedding-index"),
): string {
  return join(baseDir, projectId);
}

export function contentFingerprint(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, 32);
}

export function makeIndexRef(entry: {
  projectId: string;
  sourceId: string;
  contentFingerprint: string;
}): string {
  return `deri://${entry.projectId}/${entry.sourceId}@${entry.contentFingerprint}`;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i] ?? 0;
    const y = b[i] ?? 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
}

/** Gate: only non-revoked, non-deleted, same project, matching model. */
export function isMobilizable(
  entry: Pick<
    DerivedIndexEntry,
    "projectId" | "revoked" | "deleted" | "model"
  >,
  projectId: string,
  model = DERIVED_EMBEDDING_MODEL,
): boolean {
  if (entry.projectId !== projectId) return false;
  if (entry.revoked || entry.deleted) return false;
  if (entry.model !== model) return false;
  return true;
}

export function loadManifest(projectId: string): DerivedIndexManifest | null {
  const p = join(derivedIndexRoot(projectId), "manifest.json");
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf8")) as DerivedIndexManifest;
  } catch {
    return null;
  }
}

export function loadVectors(
  projectId: string,
): Map<string, number[]> {
  const p = join(derivedIndexRoot(projectId), "vectors.jsonl");
  const out = new Map<string, number[]>();
  if (!existsSync(p)) return out;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line.trim()) continue;
    try {
      const row = JSON.parse(line) as { sourceId: string; vector: number[] };
      if (row.sourceId && Array.isArray(row.vector)) {
        out.set(row.sourceId, row.vector);
      }
    } catch {
      /* skip bad line */
    }
  }
  return out;
}

/**
 * Atomic rewrite of manifest + vectors for a project.
 * Callers must pass only sources already rights-checked for the project.
 */
export function writeDerivedIndex(input: {
  projectId: string;
  model?: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): DerivedIndexManifest {
  const model = input.model ?? DERIVED_EMBEDDING_MODEL;
  const root = derivedIndexRoot(input.projectId);
  mkdirSync(root, { recursive: true });
  const updatedAt = new Date().toISOString();
  const manifest: DerivedIndexManifest = {
    schema: DERIVED_INDEX_SCHEMA,
    projectId: input.projectId,
    model,
    updatedAt,
    entries: input.entries.map(({ text: _t, ...meta }) => meta),
  };
  const tmpManifest = join(root, "manifest.json.tmp");
  const tmpVectors = join(root, "vectors.jsonl.tmp");
  writeFileSync(tmpManifest, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  const lines: string[] = [];
  for (const e of input.entries) {
    const v = input.vectors.get(e.sourceId);
    if (!v) continue;
    lines.push(JSON.stringify({ sourceId: e.sourceId, vector: v }));
  }
  writeFileSync(tmpVectors, lines.join("\n") + (lines.length ? "\n" : ""), "utf8");
  renameSync(tmpManifest, join(root, "manifest.json"));
  renameSync(tmpVectors, join(root, "vectors.jsonl"));
  return manifest;
}

/**
 * Rank mobilizable sources by cosine similarity to query vector.
 * Never returns revoked/deleted/foreign-project hits.
 */
export function searchDerivedIndex(input: {
  projectId: string;
  queryVector: number[];
  limit?: number;
  /** Optional text snippets by sourceId for citation. */
  snippets?: Map<string, string>;
}): MobilizableHit[] {
  const manifest = loadManifest(input.projectId);
  if (!manifest || manifest.projectId !== input.projectId) return [];
  const vectors = loadVectors(input.projectId);
  const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
  const hits: MobilizableHit[] = [];
  for (const e of manifest.entries) {
    if (!isMobilizable(e, input.projectId, manifest.model)) continue;
    const v = vectors.get(e.sourceId);
    if (!v) continue;
    const score = cosineSimilarity(input.queryVector, v);
    hits.push({
      sourceId: e.sourceId,
      sourceKind: e.sourceKind as DerivedSourceKind,
      score,
      versionLabel: e.versionLabel,
      indexRef: e.indexRef,
      preparationId: e.preparationId,
      snippet: (input.snippets?.get(e.sourceId) ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Mark source revoked/deleted in-place without re-embedding (lifecycle F23). */
export function markSourceLifecycle(
  projectId: string,
  sourceId: string,
  patch: { revoked?: boolean; deleted?: boolean },
): boolean {
  const manifest = loadManifest(projectId);
  if (!manifest) return false;
  let changed = false;
  for (const e of manifest.entries) {
    if (e.sourceId !== sourceId) continue;
    if (patch.revoked != null && e.revoked !== patch.revoked) {
      e.revoked = patch.revoked;
      changed = true;
    }
    if (patch.deleted != null && e.deleted !== patch.deleted) {
      e.deleted = patch.deleted;
      changed = true;
    }
    if (changed) e.updatedAt = new Date().toISOString();
  }
  if (!changed) return false;
  manifest.updatedAt = new Date().toISOString();
  const root = derivedIndexRoot(projectId);
  const tmp = join(root, "manifest.json.tmp");
  writeFileSync(tmp, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  renameSync(tmp, join(root, "manifest.json"));
  return true;
}

export function derivedEmbeddingSearchEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_DERIVED_EMBEDDING_SEARCH || "").trim() === "1";
}
