/**
 * Ensemble 05 / T02+consolidation+corrective — additive visual composition contract.
 * Validated structured blocks only — never executable HTML/JS from the model.
 * Stored inside turnProjection (result_json) — no migration.
 *
 * Fidelity rule (P1-A): a composition owns the on-screen body only when every
 * declared block and field is conserved without silent truncation/drop.
 * Otherwise parse fails closed → replyDraft Markdown fallback.
 *
 * Provenance rule (P1-B): declarative fields never authorize consultation;
 * Studio resolves against canonical turn references.
 */

import { z } from "zod";

export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;

export type VisualBlockKind =
  | "comparison"
  | "sequence"
  | "relations"
  | "synthesis"
  | "text"
  | "choices"
  | "references";

/** Semantic role — Studio maps to icon/colour; never invents authority. */
export type VisualSemanticRole =
  | "information"
  | "observation"
  | "fact"
  | "hypothesis"
  | "risk"
  | "recommendation"
  | "decision"
  | "dependency"
  | "step"
  | "source";

/** Allowlisted icon ids only — no arbitrary SVG/URL from the model. */
export type VisualIconId =
  | "info"
  | "observe"
  | "fact"
  | "hypothesis"
  | "risk"
  | "recommend"
  | "decision"
  | "link"
  | "step"
  | "source";

export const VISUAL_ICON_IDS: readonly VisualIconId[] = [
  "info",
  "observe",
  "fact",
  "hypothesis",
  "risk",
  "recommend",
  "decision",
  "link",
  "step",
  "source",
] as const;

export const ROLE_DEFAULT_ICON: Record<VisualSemanticRole, VisualIconId> = {
  information: "info",
  observation: "observe",
  fact: "fact",
  hypothesis: "hypothesis",
  risk: "risk",
  recommendation: "recommend",
  decision: "decision",
  dependency: "link",
  step: "step",
  source: "source",
};

/**
 * Provenance: label alone is descriptive.
 * Consultation requires resolution against canonical turn references (P1-B).
 */
export type VisualProvenance = {
  label: string;
  note?: string;
  kind?: "document" | "git" | "external";
  resourceId?: string;
  revisionId?: string;
  repositoryId?: string;
  path?: string;
  ref?: string;
  commit?: string;
  href?: string;
};

/** Structural twin of TurnReference — kept here to avoid import cycles. */
export type CanonicalReference = {
  kind: "document" | "git" | "external";
  label: string;
  resourceId?: string;
  revisionId?: string;
  repositoryId?: string;
  path?: string;
  ref?: string;
  commit?: string;
  href?: string;
  available?: boolean;
};

export type ComparisonAlternative = {
  id: string;
  title: string;
  summary: string;
  pros?: string[];
  cons?: string[];
};

export type ComparisonCriterion = {
  id: string;
  label: string;
  values: Record<string, string>;
};

export type ComparisonBlock = {
  kind: "comparison";
  id: string;
  title: string;
  alternatives: ComparisonAlternative[];
  criteria?: ComparisonCriterion[];
  recommendation?: string | null;
  textAlternative: string;
  provenance?: VisualProvenance[];
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

export type SequenceStep = {
  id: string;
  title: string;
  detail?: string;
  dependsOn?: string[];
  dateLabel?: string | null;
  role?: VisualSemanticRole;
};

export type SequenceBlock = {
  kind: "sequence";
  id: string;
  title: string;
  steps: SequenceStep[];
  textAlternative: string;
  provenance?: VisualProvenance[];
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

export type RelationNodeKind =
  | "fact"
  | "hypothesis"
  | "unknown"
  | "cause"
  | "finding"
  | "observation";

export type RelationNode = {
  id: string;
  label: string;
  kind: RelationNodeKind;
};

export type RelationEdge = {
  from: string;
  to: string;
  label?: string;
};

export type RelationsBlock = {
  kind: "relations";
  id: string;
  title: string;
  nodes: RelationNode[];
  edges: RelationEdge[];
  textAlternative: string;
  provenance?: VisualProvenance[];
  preferListFallback?: boolean;
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

export type SynthesisItemTone =
  | "priority"
  | "finding"
  | "risk"
  | "watch"
  | "observation"
  | "hypothesis";

export type SynthesisItem = {
  id: string;
  label: string;
  detail?: string;
  tone: SynthesisItemTone;
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

export type SynthesisBlock = {
  kind: "synthesis";
  id: string;
  title: string;
  items: SynthesisItem[];
  textAlternative: string;
  provenance?: VisualProvenance[];
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

export type TextBlock = {
  kind: "text";
  id: string;
  markdown: string;
  role?: VisualSemanticRole;
  icon?: VisualIconId;
};

/** Presentation anchor — identity/lifetime still owned by TurnProjection.choices. */
export type ChoicesAnchorBlock = {
  kind: "choices";
  id: string;
  /** Optional subset of choice ids; omit = all remaining unclaimed choices. */
  choiceIds?: string[];
};

/** Presentation anchor — authority remains TurnProjection.references. */
export type ReferencesAnchorBlock = {
  kind: "references";
  id: string;
  /** Optional canonical resourceId / repositoryId keys; omit = all remaining. */
  resourceIds?: string[];
};

export type VisualBlock =
  | ComparisonBlock
  | SequenceBlock
  | RelationsBlock
  | SynthesisBlock
  | TextBlock
  | ChoicesAnchorBlock
  | ReferencesAnchorBlock;

export type VisualComposition = {
  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
  blocks: VisualBlock[];
};

/**
 * Agents SDK / OpenAI structured-output schema for visualComposition.
 * MUST NOT use z.unknown()/z.any() — those serialize to empty `{}` under
 * strict json_schema and the provider rejects the request (PROVIDER_ERROR).
 * Runtime authority remains parseVisualComposition (fail-closed sanitize).
 */
const VisualProvenanceAgentSchema = z.object({
  label: z.string().max(200),
  note: z.string().max(240).optional(),
  kind: z.enum(["document", "git", "external"]).optional(),
  resourceId: z.string().max(128).optional(),
  revisionId: z.string().max(128).optional(),
  repositoryId: z.string().max(128).optional(),
  path: z.string().max(400).optional(),
  ref: z.string().max(120).optional(),
  commit: z.string().max(64).optional(),
  href: z.string().max(800).optional(),
});

const VisualRoleAgentSchema = z.enum([
  "information",
  "observation",
  "fact",
  "hypothesis",
  "risk",
  "recommendation",
  "decision",
  "dependency",
  "step",
  "source",
]);

const VisualIconAgentSchema = z.enum([
  "info",
  "observe",
  "fact",
  "hypothesis",
  "risk",
  "recommend",
  "decision",
  "link",
  "step",
  "source",
]);

export const VisualCompositionAgentOutputSchema = z.object({
  schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
  blocks: z
    .array(
      z.discriminatedUnion("kind", [
        z.object({
          kind: z.literal("text"),
          id: z.string().max(64),
          markdown: z.string().max(4000),
          role: VisualRoleAgentSchema.optional(),
          icon: VisualIconAgentSchema.optional(),
        }),
        z.object({
          kind: z.literal("comparison"),
          id: z.string().max(64),
          title: z.string().max(160),
          textAlternative: z.string().max(2000),
          alternatives: z
            .array(
              z.object({
                id: z.string().max(64),
                title: z.string().max(160),
                summary: z.string().max(400),
                pros: z.array(z.string().max(200)).max(4).optional(),
                cons: z.array(z.string().max(200)).max(4).optional(),
              }),
            )
            .max(5),
          criteria: z
            .array(
              z.object({
                id: z.string().max(64),
                label: z.string().max(200),
                values: z.record(z.string(), z.string().max(400)),
              }),
            )
            .max(6)
            .optional(),
          recommendation: z.string().max(800).nullable().optional(),
          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
          role: VisualRoleAgentSchema.optional(),
          icon: VisualIconAgentSchema.optional(),
        }),
        z.object({
          kind: z.literal("sequence"),
          id: z.string().max(64),
          title: z.string().max(160),
          textAlternative: z.string().max(2000),
          steps: z
            .array(
              z.object({
                id: z.string().max(64),
                title: z.string().max(160),
                detail: z.string().max(400).optional(),
                dependsOn: z.array(z.string().max(64)).max(8).optional(),
                dateLabel: z.string().max(80).nullable().optional(),
                role: VisualRoleAgentSchema.optional(),
              }),
            )
            .max(8),
          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
          role: VisualRoleAgentSchema.optional(),
          icon: VisualIconAgentSchema.optional(),
        }),
        z.object({
          kind: z.literal("relations"),
          id: z.string().max(64),
          title: z.string().max(160),
          textAlternative: z.string().max(2000),
          nodes: z
            .array(
              z.object({
                id: z.string().max(64),
                label: z.string().max(200),
                kind: z.enum([
                  "fact",
                  "hypothesis",
                  "unknown",
                  "cause",
                  "finding",
                  "observation",
                ]),
              }),
            )
            .max(10),
          edges: z
            .array(
              z.object({
                from: z.string().max(64),
                to: z.string().max(64),
                label: z.string().max(200).optional(),
              }),
            )
            .max(16),
          preferListFallback: z.boolean().optional(),
          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
          role: VisualRoleAgentSchema.optional(),
          icon: VisualIconAgentSchema.optional(),
        }),
        z.object({
          kind: z.literal("synthesis"),
          id: z.string().max(64),
          title: z.string().max(160),
          textAlternative: z.string().max(2000),
          items: z
            .array(
              z.object({
                id: z.string().max(64),
                label: z.string().max(200),
                detail: z.string().max(400).optional(),
                tone: z.enum([
                  "priority",
                  "finding",
                  "risk",
                  "watch",
                  "observation",
                  "hypothesis",
                ]),
                role: VisualRoleAgentSchema.optional(),
                icon: VisualIconAgentSchema.optional(),
              }),
            )
            .max(8),
          provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
          role: VisualRoleAgentSchema.optional(),
          icon: VisualIconAgentSchema.optional(),
        }),
        z.object({
          kind: z.literal("choices"),
          id: z.string().max(64),
          choiceIds: z.array(z.string().max(64)).max(12).optional(),
        }),
        z.object({
          kind: z.literal("references"),
          id: z.string().max(64),
          resourceIds: z.array(z.string().max(128)).max(12).optional(),
        }),
      ]),
    )
    .max(10),
});

export type ParseVisualCompositionResult =
  | { ok: true; value: VisualComposition }
  | { ok: false; reason: string };

const MAX_BLOCKS = 10;
const MAX_ALTS = 5;
const MAX_STEPS = 8;
const MAX_NODES = 10;
const MAX_EDGES = 16;
const MAX_ITEMS = 8;
const MAX_PROS_CONS = 4;
const MAX_CRITERIA = 6;
const MAX_PROVENANCE = 4;
const MAX_STR = 400;
const MAX_TEXT_ALT = 2000;
const MAX_MD = 4000;
const MAX_TITLE = 160;
const MAX_ID = 64;
const MAX_LABEL = 200;
const MAX_NOTE = 240;
const MAX_HREF = 800;

const ROLES = new Set<VisualSemanticRole>(Object.keys(ROLE_DEFAULT_ICON) as VisualSemanticRole[]);
const ICONS = new Set<VisualIconId>(VISUAL_ICON_IDS);

type FitCtx = { truncated: boolean; overflow: boolean };

function asString(v: unknown): string | null {
  return typeof v === "string" && v.trim() ? v.trim() : null;
}

/** Fail-closed fit: never silently truncate significant content. */
function fit(s: string, max: number, ctx: FitCtx): string | null {
  const t = s.trim();
  if (!t) return null;
  if (t.length > max) {
    ctx.truncated = true;
    return null;
  }
  return t;
}

function parseRole(v: unknown): VisualSemanticRole | undefined {
  const s = asString(v) as VisualSemanticRole | null;
  return s && ROLES.has(s) ? s : undefined;
}

function parseIcon(v: unknown): VisualIconId | undefined {
  const s = asString(v) as VisualIconId | null;
  return s && ICONS.has(s) ? s : undefined;
}

export function resolveVisualIcon(input: {
  icon?: VisualIconId | null;
  role?: VisualSemanticRole | null;
}): VisualIconId {
  if (input.icon && ICONS.has(input.icon)) return input.icon;
  if (input.role && ROLES.has(input.role)) return ROLE_DEFAULT_ICON[input.role];
  return "info";
}

/**
 * Declarative provenance alone is NEVER consultable (P1-B).
 * Kept for backward-compatible call sites; always false without canonical resolution.
 */
export function provenanceIsConsultable(_p: VisualProvenance): boolean {
  return false;
}

/**
 * Resolve a graphic provenance against canonical turn references.
 * Returns the canonical reference (authority) or null → descriptive mention only.
 */
export function resolveProvenanceReference(
  p: VisualProvenance,
  canonical: readonly CanonicalReference[],
): CanonicalReference | null {
  if (!p.kind || !canonical.length) return null;

  if (p.kind === "document") {
    if (!p.resourceId) return null;
    const matches = canonical.filter(
      (c) => c.kind === "document" && c.resourceId === p.resourceId,
    );
    if (!matches.length) return null;
    if (p.revisionId) {
      const exact = matches.find((c) => c.revisionId === p.revisionId);
      return exact ?? null;
    }
    // Prefer a single unambiguous resource match; if several revisions, require revisionId.
    if (matches.length === 1) return matches[0]!;
    const withRev = matches.filter((c) => c.revisionId);
    if (withRev.length === 1 && matches.length === withRev.length) return withRev[0]!;
    // Multiple revisions without a requested revision → not safely consultable as one link.
    return matches.length === 1 ? matches[0]! : null;
  }

  if (p.kind === "git") {
    // Path/ref alone is insufficient; require repositoryId at minimum.
    if (!p.repositoryId) return null;
    const matches = canonical.filter((c) => {
      if (c.kind !== "git" || c.repositoryId !== p.repositoryId) return false;
      if (p.path && c.path !== p.path) return false;
      if (p.ref && c.ref !== p.ref) return false;
      if (p.commit && c.commit !== p.commit) return false;
      return true;
    });
    return matches.length === 1 ? matches[0]! : null;
  }

  if (p.kind === "external") {
    // HTTPS syntax alone is insufficient — must match an admitted canonical external ref.
    if (!p.href || !/^https?:\/\//i.test(p.href)) return null;
    const matches = canonical.filter((c) => c.kind === "external" && c.href === p.href);
    return matches.length === 1 ? matches[0]! : null;
  }

  return null;
}

function parseProvenance(
  raw: unknown,
  ctx: FitCtx,
): VisualProvenance[] | undefined | "FAIL" {
  if (raw === undefined || raw === null) return undefined;
  if (!Array.isArray(raw)) return "FAIL";
  if (raw.length > MAX_PROVENANCE) {
    ctx.overflow = true;
    return "FAIL";
  }
  const out: VisualProvenance[] = [];
  for (const p of raw) {
    if (!p || typeof p !== "object") return "FAIL";
    const o = p as Record<string, unknown>;
    const label = asString(o.label);
    if (!label) return "FAIL";
    const fittedLabel = fit(label, 160, ctx);
    if (!fittedLabel) return "FAIL";
    const kindRaw = asString(o.kind);
    const kind =
      kindRaw === "document" || kindRaw === "git" || kindRaw === "external" ? kindRaw : undefined;
    if (kindRaw && !kind) return "FAIL";
    const noteRaw = asString(o.note);
    const note = noteRaw ? fit(noteRaw, MAX_NOTE, ctx) : undefined;
    if (noteRaw && !note) return "FAIL";
    const resourceIdRaw = asString(o.resourceId);
    const resourceId = resourceIdRaw ? fit(resourceIdRaw, 128, ctx) : undefined;
    if (resourceIdRaw && !resourceId) return "FAIL";
    const revisionIdRaw = asString(o.revisionId);
    const revisionId = revisionIdRaw ? fit(revisionIdRaw, 128, ctx) : undefined;
    if (revisionIdRaw && !revisionId) return "FAIL";
    const repositoryIdRaw = asString(o.repositoryId);
    const repositoryId = repositoryIdRaw ? fit(repositoryIdRaw, 128, ctx) : undefined;
    if (repositoryIdRaw && !repositoryId) return "FAIL";
    const pathRaw = asString(o.path);
    const path = pathRaw ? fit(pathRaw, 400, ctx) : undefined;
    if (pathRaw && !path) return "FAIL";
    const refRaw = asString(o.ref);
    const ref = refRaw ? fit(refRaw, 120, ctx) : undefined;
    if (refRaw && !ref) return "FAIL";
    const commitRaw = asString(o.commit);
    const commit = commitRaw ? fit(commitRaw, 64, ctx) : undefined;
    if (commitRaw && !commit) return "FAIL";
    const hrefRaw = asString(o.href);
    if (hrefRaw && hrefRaw.length > MAX_HREF) {
      ctx.truncated = true;
      return "FAIL";
    }
    out.push({
      label: fittedLabel,
      note: note ?? undefined,
      kind,
      resourceId: resourceId ?? undefined,
      revisionId: revisionId ?? undefined,
      repositoryId: repositoryId ?? undefined,
      path: path ?? undefined,
      ref: ref ?? undefined,
      commit: commit ?? undefined,
      href: hrefRaw ?? undefined,
    });
  }
  return out.length ? out : undefined;
}

function parseStringList(
  raw: unknown,
  maxItems: number,
  maxLen: number,
  ctx: FitCtx,
): string[] | undefined | "FAIL" {
  if (raw === undefined || raw === null) return undefined;
  if (!Array.isArray(raw)) return "FAIL";
  if (raw.length > maxItems) {
    ctx.overflow = true;
    return "FAIL";
  }
  const out: string[] = [];
  for (const x of raw) {
    const s = asString(x);
    if (!s) return "FAIL";
    const f = fit(s, maxLen, ctx);
    if (!f) return "FAIL";
    out.push(f);
  }
  return out;
}

function parseComparison(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): ComparisonBlock | null {
  const titleRaw = asString(o.title);
  const textAltRaw = asString(o.textAlternative);
  if (!titleRaw || !textAltRaw || !Array.isArray(o.alternatives)) return null;
  if (o.alternatives.length > MAX_ALTS) {
    ctx.overflow = true;
    return null;
  }
  const title = fit(titleRaw, MAX_TITLE, ctx);
  const textAlternative = fit(textAltRaw, MAX_TEXT_ALT, ctx);
  if (!title || !textAlternative) return null;

  const alternatives: ComparisonAlternative[] = [];
  for (const raw of o.alternatives) {
    if (!raw || typeof raw !== "object") return null;
    const a = raw as Record<string, unknown>;
    const aid = asString(a.id);
    const at = asString(a.title);
    const summaryRaw = asString(a.summary);
    if (!aid || !at || !summaryRaw) return null;
    const idF = fit(aid, MAX_ID, ctx);
    const titleF = fit(at, 120, ctx);
    const summary = fit(summaryRaw, MAX_STR, ctx);
    if (!idF || !titleF || !summary) return null;
    const pros = parseStringList(a.pros, MAX_PROS_CONS, 160, ctx);
    if (pros === "FAIL") return null;
    const cons = parseStringList(a.cons, MAX_PROS_CONS, 160, ctx);
    if (cons === "FAIL") return null;
    alternatives.push({
      id: idF,
      title: titleF,
      summary,
      pros: pros?.length ? pros : undefined,
      cons: cons?.length ? cons : undefined,
    });
  }
  if (alternatives.length < 2) return null;
  const altIds = new Set(alternatives.map((a) => a.id));

  let criteria: ComparisonCriterion[] | undefined;
  if (o.criteria !== undefined && o.criteria !== null) {
    if (!Array.isArray(o.criteria)) return null;
    if (o.criteria.length > MAX_CRITERIA) {
      ctx.overflow = true;
      return null;
    }
    criteria = [];
    for (const raw of o.criteria) {
      if (!raw || typeof raw !== "object") return null;
      const c = raw as Record<string, unknown>;
      const cid = asString(c.id);
      const labelRaw = asString(c.label);
      if (!cid || !labelRaw || !c.values || typeof c.values !== "object") return null;
      const cidF = fit(cid, MAX_ID, ctx);
      const label = fit(labelRaw, 120, ctx);
      if (!cidF || !label) return null;
      const values: Record<string, string> = {};
      for (const [k, v] of Object.entries(c.values as Record<string, unknown>)) {
        if (!altIds.has(k)) return null;
        const s = asString(v);
        if (!s) return null;
        const vf = fit(s, 80, ctx);
        if (!vf) return null;
        values[k] = vf;
      }
      if (Object.keys(values).length === 0) return null;
      criteria.push({ id: cidF, label, values });
    }
  }

  let recommendation: string | null = null;
  const recRaw = asString(o.recommendation);
  if (recRaw) {
    const rec = fit(recRaw, MAX_STR, ctx);
    if (!rec) return null;
    recommendation = rec;
  }

  const provenance = parseProvenance(o.provenance, ctx);
  if (provenance === "FAIL") return null;

  return {
    kind: "comparison",
    id,
    title,
    alternatives,
    criteria: criteria?.length ? criteria : undefined,
    recommendation,
    textAlternative,
    provenance: provenance ?? undefined,
    role: parseRole(o.role) ?? "information",
    icon: parseIcon(o.icon),
  };
}

function parseSequence(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): SequenceBlock | null {
  const titleRaw = asString(o.title);
  const textAltRaw = asString(o.textAlternative);
  if (!titleRaw || !textAltRaw || !Array.isArray(o.steps)) return null;
  if (o.steps.length > MAX_STEPS) {
    ctx.overflow = true;
    return null;
  }
  const title = fit(titleRaw, MAX_TITLE, ctx);
  const textAlternative = fit(textAltRaw, MAX_TEXT_ALT, ctx);
  if (!title || !textAlternative) return null;

  const steps: SequenceStep[] = [];
  const ids = new Set<string>();
  for (const raw of o.steps) {
    if (!raw || typeof raw !== "object") return null;
    const s = raw as Record<string, unknown>;
    const sid = asString(s.id);
    const st = asString(s.title);
    if (!sid || !st) return null;
    const sidF = fit(sid, MAX_ID, ctx);
    const stF = fit(st, MAX_TITLE, ctx);
    if (!sidF || !stF) return null;
    ids.add(sidF);
    let detail: string | undefined;
    const detailRaw = asString(s.detail);
    if (detailRaw) {
      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
      if (!detail) return null;
    }
    let dependsOn: string[] | undefined;
    if (s.dependsOn !== undefined && s.dependsOn !== null) {
      const deps = parseStringList(s.dependsOn, 4, MAX_ID, ctx);
      if (deps === "FAIL") return null;
      dependsOn = deps;
    }
    let dateLabel: string | null | undefined;
    const dateRaw = asString(s.dateLabel);
    if (dateRaw) {
      dateLabel = fit(dateRaw, 80, ctx);
      if (!dateLabel) return null;
    } else if (s.dateLabel === null) {
      dateLabel = null;
    }
    steps.push({
      id: sidF,
      title: stF,
      detail,
      dependsOn,
      dateLabel,
      role: parseRole(s.role),
    });
  }
  if (steps.length < 2) return null;
  for (const step of steps) {
    if (step.dependsOn) {
      const filtered = step.dependsOn.filter((d) => ids.has(d) && d !== step.id);
      if (filtered.length !== step.dependsOn.length) {
        // Declared dependency pointing nowhere = incomplete transport.
        return null;
      }
      step.dependsOn = filtered.length ? filtered : undefined;
    }
  }

  const provenance = parseProvenance(o.provenance, ctx);
  if (provenance === "FAIL") return null;

  return {
    kind: "sequence",
    id,
    title,
    steps,
    textAlternative,
    provenance: provenance ?? undefined,
    role: parseRole(o.role) ?? "step",
    icon: parseIcon(o.icon),
  };
}

const NODE_KINDS = new Set<RelationNodeKind>([
  "fact",
  "hypothesis",
  "unknown",
  "cause",
  "finding",
  "observation",
]);

function parseRelations(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): RelationsBlock | null {
  const titleRaw = asString(o.title);
  const textAltRaw = asString(o.textAlternative);
  if (!titleRaw || !textAltRaw || !Array.isArray(o.nodes)) return null;
  if (o.nodes.length > MAX_NODES) {
    ctx.overflow = true;
    return null;
  }
  const title = fit(titleRaw, MAX_TITLE, ctx);
  const textAlternative = fit(textAltRaw, MAX_TEXT_ALT, ctx);
  if (!title || !textAlternative) return null;

  const nodes: RelationNode[] = [];
  const ids = new Set<string>();
  for (const raw of o.nodes) {
    if (!raw || typeof raw !== "object") return null;
    const n = raw as Record<string, unknown>;
    const nid = asString(n.id);
    const labelRaw = asString(n.label);
    const kind = asString(n.kind) as RelationNodeKind | null;
    if (!nid || !labelRaw || !kind || !NODE_KINDS.has(kind)) return null;
    const nidF = fit(nid, MAX_ID, ctx);
    const label = fit(labelRaw, MAX_TITLE, ctx);
    if (!nidF || !label) return null;
    ids.add(nidF);
    nodes.push({ id: nidF, label, kind });
  }
  if (nodes.length < 2) return null;

  const edges: RelationEdge[] = [];
  if (o.edges !== undefined && o.edges !== null) {
    if (!Array.isArray(o.edges)) return null;
    if (o.edges.length > MAX_EDGES) {
      ctx.overflow = true;
      return null;
    }
    for (const raw of o.edges) {
      if (!raw || typeof raw !== "object") return null;
      const e = raw as Record<string, unknown>;
      const from = asString(e.from);
      const to = asString(e.to);
      if (!from || !to || from === to) return null;
      if (!ids.has(from) || !ids.has(to)) return null;
      const fromF = fit(from, MAX_ID, ctx);
      const toF = fit(to, MAX_ID, ctx);
      if (!fromF || !toF) return null;
      let label: string | undefined;
      const labelRaw = asString(e.label);
      if (labelRaw) {
        label = fit(labelRaw, 80, ctx) ?? undefined;
        if (!label) return null;
      }
      edges.push({ from: fromF, to: toF, label });
    }
  }

  const provenance = parseProvenance(o.provenance, ctx);
  if (provenance === "FAIL") return null;

  const preferListFallback =
    Boolean(o.preferListFallback) || nodes.length > 7 || edges.length > 10;

  return {
    kind: "relations",
    id,
    title,
    nodes,
    edges,
    textAlternative,
    provenance: provenance ?? undefined,
    preferListFallback,
    role: parseRole(o.role) ?? "information",
    icon: parseIcon(o.icon),
  };
}

const TONES = new Set<SynthesisItemTone>([
  "priority",
  "finding",
  "risk",
  "watch",
  "observation",
  "hypothesis",
]);

function parseSynthesis(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): SynthesisBlock | null {
  const titleRaw = asString(o.title);
  const textAltRaw = asString(o.textAlternative);
  if (!titleRaw || !textAltRaw || !Array.isArray(o.items)) return null;
  if (o.items.length > MAX_ITEMS) {
    ctx.overflow = true;
    return null;
  }
  const title = fit(titleRaw, MAX_TITLE, ctx);
  const textAlternative = fit(textAltRaw, MAX_TEXT_ALT, ctx);
  if (!title || !textAlternative) return null;

  const items: SynthesisItem[] = [];
  for (const raw of o.items) {
    if (!raw || typeof raw !== "object") return null;
    const it = raw as Record<string, unknown>;
    const iid = asString(it.id);
    const labelRaw = asString(it.label);
    const tone = asString(it.tone) as SynthesisItemTone | null;
    if (!iid || !labelRaw || !tone || !TONES.has(tone)) return null;
    const iidF = fit(iid, MAX_ID, ctx);
    const label = fit(labelRaw, MAX_LABEL, ctx);
    if (!iidF || !label) return null;
    let detail: string | undefined;
    const detailRaw = asString(it.detail);
    if (detailRaw) {
      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
      if (!detail) return null;
    }
    items.push({
      id: iidF,
      label,
      detail,
      tone,
      role: parseRole(it.role),
      icon: parseIcon(it.icon),
    });
  }
  if (!items.length) return null;

  const provenance = parseProvenance(o.provenance, ctx);
  if (provenance === "FAIL") return null;

  return {
    kind: "synthesis",
    id,
    title,
    items,
    textAlternative,
    provenance: provenance ?? undefined,
    role: parseRole(o.role) ?? "information",
    icon: parseIcon(o.icon),
  };
}

function parseText(o: Record<string, unknown>, id: string, ctx: FitCtx): TextBlock | null {
  const markdownRaw = asString(o.markdown);
  if (!markdownRaw) return null;
  const markdown = fit(markdownRaw, MAX_MD, ctx);
  if (!markdown) return null;
  return {
    kind: "text",
    id,
    markdown,
    role: parseRole(o.role),
    icon: parseIcon(o.icon),
  };
}

function parseChoicesAnchor(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): ChoicesAnchorBlock | null {
  if (o.choiceIds === undefined || o.choiceIds === null) {
    return { kind: "choices", id };
  }
  const ids = parseStringList(o.choiceIds, 6, MAX_ID, ctx);
  if (ids === "FAIL") return null;
  return { kind: "choices", id, choiceIds: ids?.length ? ids : undefined };
}

function parseRefsAnchor(
  o: Record<string, unknown>,
  id: string,
  ctx: FitCtx,
): ReferencesAnchorBlock | null {
  if (o.resourceIds === undefined || o.resourceIds === null) {
    return { kind: "references", id };
  }
  const ids = parseStringList(o.resourceIds, 8, 128, ctx);
  if (ids === "FAIL") return null;
  return {
    kind: "references",
    id,
    resourceIds: ids?.length ? ids : undefined,
  };
}

function parseBlock(
  raw: unknown,
  idx: number,
  ctx: FitCtx,
): VisualBlock | null | "UNKNOWN" {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const kind = asString(o.kind);
  const idRaw = asString(o.id) ?? `block-${idx + 1}`;
  const id = fit(idRaw, MAX_ID, ctx);
  if (!id) return null;
  if (!kind) return null;
  switch (kind) {
    case "comparison":
      return parseComparison(o, id, ctx);
    case "sequence":
      return parseSequence(o, id, ctx);
    case "relations":
      return parseRelations(o, id, ctx);
    case "synthesis":
      return parseSynthesis(o, id, ctx);
    case "text":
      return parseText(o, id, ctx);
    case "choices":
      return parseChoicesAnchor(o, id, ctx);
    case "references":
      return parseRefsAnchor(o, id, ctx);
    default:
      return "UNKNOWN";
  }
}

/**
 * Fail-closed parse: any truncation, overflow, unknown/invalid block, or duplicate id
 * rejects the entire composition (replyDraft remains the safe body).
 */
export function parseVisualCompositionDetailed(raw: unknown): ParseVisualCompositionResult {
  if (!raw || typeof raw !== "object") {
    return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
  }
  const o = raw as Record<string, unknown>;
  if (o.schemaVersion !== VISUAL_COMPOSITION_SCHEMA) {
    return { ok: false, reason: "VISUAL_COMPOSITION_SCHEMA_MISMATCH" };
  }
  if (!Array.isArray(o.blocks)) {
    return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
  }
  if (o.blocks.length === 0) {
    return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
  }
  if (o.blocks.length > MAX_BLOCKS) {
    return { ok: false, reason: "VISUAL_COMPOSITION_BLOCK_OVERFLOW" };
  }

  const ctx: FitCtx = { truncated: false, overflow: false };
  const blocks: VisualBlock[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < o.blocks.length; i += 1) {
    const b = parseBlock(o.blocks[i], i, ctx);
    if (ctx.truncated) {
      return { ok: false, reason: "VISUAL_COMPOSITION_TRUNCATION" };
    }
    if (ctx.overflow) {
      return { ok: false, reason: "VISUAL_COMPOSITION_FIELD_OVERFLOW" };
    }
    if (b === "UNKNOWN") {
      return { ok: false, reason: "VISUAL_COMPOSITION_UNKNOWN_BLOCK" };
    }
    if (!b) {
      return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_BLOCK" };
    }
    if (seen.has(b.id)) {
      return { ok: false, reason: "VISUAL_COMPOSITION_DUPLICATE_BLOCK_ID" };
    }
    seen.add(b.id);
    blocks.push(b);
  }

  if (!blocks.length) {
    return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
  }
  return {
    ok: true,
    value: { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks },
  };
}

export function parseVisualComposition(raw: unknown): VisualComposition | null {
  const r = parseVisualCompositionDetailed(raw);
  return r.ok ? r.value : null;
}

export function validateVisualComposition(raw: unknown): {
  ok: true;
  value: VisualComposition;
} | { ok: false; reason: string } {
  const parsed = parseVisualCompositionDetailed(raw);
  if (!parsed.ok) {
    return {
      ok: false,
      reason: parsed.reason || "VISUAL_COMPOSITION_INVALID_OR_EMPTY",
    };
  }
  return { ok: true, value: parsed.value };
}

export function hasGraphicBlocks(c: VisualComposition | null | undefined): boolean {
  return Boolean(
    c?.blocks.some((b) => b.kind !== "text" && b.kind !== "choices" && b.kind !== "references"),
  );
}

/**
 * Ownership only after a fail-closed complete parse (P1-A).
 * Callers must only pass compositions already accepted by parseVisualComposition.
 */
export function compositionOwnsBody(c: VisualComposition | null | undefined): boolean {
  return Boolean(c?.blocks.some((b) => b.kind === "text" || hasGraphicBlocks(c)));
}

export function compositionAnchorsChoices(c: VisualComposition | null | undefined): boolean {
  return Boolean(c?.blocks.some((b) => b.kind === "choices"));
}

export function compositionAnchorsReferences(c: VisualComposition | null | undefined): boolean {
  return Boolean(c?.blocks.some((b) => b.kind === "references"));
}

export function blockOrderKinds(c: VisualComposition): string[] {
  return c.blocks.map((b) => b.kind);
}

/** Match a references-anchor key to a canonical ref by identity — never by label alone. */
export function matchReferenceByAnchorKey(
  r: CanonicalReference,
  key: string,
): boolean {
  if (r.resourceId && r.resourceId === key) return true;
  if (r.repositoryId && r.repositoryId === key) return true;
  return false;
}

/** Stable identity key for deduplicating consultable references in one message. */
export function canonicalReferenceKey(r: CanonicalReference): string {
  if (r.kind === "document" && r.resourceId) {
    return `document:${r.resourceId}:${r.revisionId ?? ""}`;
  }
  if (r.kind === "git" && r.repositoryId) {
    return `git:${r.repositoryId}:${r.path ?? ""}:${r.ref ?? ""}:${r.commit ?? ""}`;
  }
  if (r.kind === "external" && r.href) {
    return `external:${r.href}`;
  }
  return `${r.kind}:label:${r.label}`;
}

/** Collect consultable identities already exposed via block provenance. */
export function provenanceConsultableKeys(
  blocks: VisualBlock[],
  canonical: readonly CanonicalReference[],
): Set<string> {
  const keys = new Set<string>();
  for (const b of blocks) {
    if (
      b.kind !== "comparison" &&
      b.kind !== "sequence" &&
      b.kind !== "relations" &&
      b.kind !== "synthesis"
    ) {
      continue;
    }
    for (const p of b.provenance ?? []) {
      const resolved = resolveProvenanceReference(p, canonical);
      if (resolved) keys.add(canonicalReferenceKey(resolved));
    }
  }
  return keys;
}

/**
 * Deterministic partition of choices across anchors (first-claim wins).
 * Unclaimed choices are returned as residual for a safe footer inside the composition.
 */
export function partitionChoicesForAnchors<T extends { id: string }>(
  blocks: VisualBlock[],
  choices: readonly T[],
): { byAnchorId: Map<string, T[]>; residual: T[]; claimedIds: Set<string> } {
  const byAnchorId = new Map<string, T[]>();
  const claimedIds = new Set<string>();
  const byId = new Map(choices.map((c) => [c.id, c] as const));

  for (const b of blocks) {
    if (b.kind !== "choices") continue;
    const subset: T[] = [];
    if (b.choiceIds?.length) {
      for (const id of b.choiceIds) {
        if (claimedIds.has(id)) continue;
        const c = byId.get(id);
        if (!c) continue;
        claimedIds.add(id);
        subset.push(c);
      }
    } else {
      for (const c of choices) {
        if (claimedIds.has(c.id)) continue;
        claimedIds.add(c.id);
        subset.push(c);
      }
    }
    byAnchorId.set(b.id, subset);
  }

  const residual = choices.filter((c) => !claimedIds.has(c.id));
  return { byAnchorId, residual, claimedIds };
}

/**
 * Deterministic partition of references across anchors (first-claim wins, identity keys only).
 */
export function partitionReferencesForAnchors(
  blocks: VisualBlock[],
  references: readonly CanonicalReference[],
): {
  byAnchorId: Map<string, CanonicalReference[]>;
  residual: CanonicalReference[];
  claimed: Set<CanonicalReference>;
} {
  const byAnchorId = new Map<string, CanonicalReference[]>();
  const claimed = new Set<CanonicalReference>();

  for (const b of blocks) {
    if (b.kind !== "references") continue;
    const subset: CanonicalReference[] = [];
    if (b.resourceIds?.length) {
      for (const key of b.resourceIds) {
        for (const r of references) {
          if (claimed.has(r)) continue;
          if (!matchReferenceByAnchorKey(r, key)) continue;
          claimed.add(r);
          subset.push(r);
        }
      }
    } else {
      for (const r of references) {
        if (claimed.has(r)) continue;
        claimed.add(r);
        subset.push(r);
      }
    }
    byAnchorId.set(b.id, subset);
  }

  const residual = references.filter((r) => !claimed.has(r));
  return { byAnchorId, residual, claimed };
}
