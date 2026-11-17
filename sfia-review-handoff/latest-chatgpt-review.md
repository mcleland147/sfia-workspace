# SFIA Review Pack Full — E05 Visual Grammar (T02) + Viewer Enlarge Fix (T05)

## 1. Date, profil, périmètre et GO

| Champ | Valeur |
|---|---|
| Date | 2026-11-17 |
| Type | Cycle 8 — Delivery / implémentation |
| Profil | **Critical** |
| Typologie | EVOL / correctif UAT E05 |
| Périmètre | T02 Restitution visuelle ; T05 Visionneuse agrandie |
| GO Morris | DEV uniquement — 17/11/2026 |
| Verdict | **E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED** |

Aucun commit/push produit, PR, merge, déploiement RECETTE, migration ou lib graphique externe.

---

## 2. Git Truth Check initial / final

### Initial

| | |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| TREE | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Concordance candidat | **MATCH** |
| Dirty non bloquant | review pack + PNG evidence |

### Final (après implémentation DEV — **non commité**)

| | |
|---|---|
| HEAD produit | **toujours** `cb638613…` (aucun commit produit) |
| Worktree | modifications DEV locales T02/T05 + as-built/delivery-history |
| Push produit | **AUCUN** |
| RECETTE | inchangée `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` / HTTP 307 |

---

## 3. Sources / refs / blobs

| Source | Ref |
|---|---|
| ENV-01 | blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| product-versioning | blob `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| Handoff précédent | `8bec2442` / blob `69975e2c…` (pack deploy) |
| Figma Travail | node `700-38` — référence, **non pixel-validé** pour nouvelles primitives |

---

## 4. Contrat de restitution avant / après

### Avant
- Corps Nora = `replyDraft` → `messages.content` → `SafeMarkdown` uniquement.
- Structuré = `TurnProjection` (choices / refs / activity) dans `result_json`.
- Aucun moteur de composition graphique native.

### Après
- Contrat additif **`e05-visual-composition-v1`** (blocs `text|comparison|sequence|relations|synthesis`).
- Emis optionnellement dans `NoraTurnQualification.visualComposition`.
- Persisté dans `turnProjection.visualComposition` (même `result_json`, **pas de migration**).
- Rendu Studio via `NoraVisualComposition` — données validées, jamais HTML/JS modèle.
- Omission = réponse textuelle (comportement historique préservé).

---

## 5. Évolution schéma / projection / compatibilité

| Élément | Changement |
|---|---|
| `TurnProjection` | champ optionnel `visualComposition?` |
| `parseTurnProjection` | sanitize fail-closed ; legacy sans champ OK |
| `NoraTurnQualification` | `visualComposition: z.unknown().optional()` + soft-strip si invalide |
| DB | **aucune** table/migration |
| Anciennes réponses | Markdown + projection sans visual → inchangées |

---

## 6. Composants graphiques construits

| Famille | Composant / testid |
|---|---|
| A Comparaison | `.fig-visual-comparison` / `nora-visual-comparison` |
| B Séquence | `.fig-visual-sequence` / `nora-visual-sequence` |
| C Relations | SVG simple + liste fallback / `nora-visual-relations` |
| D Synthèse | `.fig-visual-synthesis` / `nora-visual-synthesis` |
| Orchestrateur | `NoraVisualComposition` |

Stack : React + CSS tokens + SVG inline. **Aucune** lib externe.

---

## 7. Choix du rendu et fallback

- Forme optionnelle et contextualisée (fixtures exactes ; simple question sans graphic).
- Bloc invalide → droppé ; composition vide → null.
- Relations trop denses → `preferListFallback` / liste.
- Données insuffisantes (fixture) → prose explicite, **pas** de graphique trompeur.
- `textAlternative` obligatoire sur blocs graphiques (sr-only).

---

## 8–9. Fichiers créés (contenu intégral) et diffs

### CREATED `visual-composition.ts`

```typescript
/**
 * Ensemble 05 / T02 — additive visual composition contract (Nora → Studio).
 * Validated structured blocks only — never executable HTML/JS from the model.
 * Stored inside turnProjection (result_json) — no migration.
 */

export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;

export type VisualBlockKind =
  | "comparison"
  | "sequence"
  | "relations"
  | "synthesis"
  | "text";

export type VisualProvenance = {
  label: string;
  note?: string;
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
  /** Scores keyed by alternative id — qualitative labels, not invented metrics. */
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
};

export type SequenceStep = {
  id: string;
  title: string;
  detail?: string;
  dependsOn?: string[];
  dateLabel?: string | null;
};

export type SequenceBlock = {
  kind: "sequence";
  id: string;
  title: string;
  steps: SequenceStep[];
  textAlternative: string;
  provenance?: VisualProvenance[];
};

export type RelationNodeKind = "fact" | "hypothesis" | "unknown" | "cause" | "finding";

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
  /** When true, UI must prefer list fallback over SVG. */
  preferListFallback?: boolean;
};

export type SynthesisItemTone = "priority" | "finding" | "risk" | "watch";

export type SynthesisItem = {
  id: string;
  label: string;
  detail?: string;
  tone: SynthesisItemTone;
};

export type SynthesisBlock = {
  kind: "synthesis";
  id: string;
  title: string;
  items: SynthesisItem[];
  textAlternative: string;
  provenance?: VisualProvenance[];
};

export type TextBlock = {
  kind: "text";
  id: string;
  markdown: string;
};

export type VisualBlock =
  | ComparisonBlock
  | SequenceBlock
  | RelationsBlock
  | SynthesisBlock
  | TextBlock;

export type VisualComposition = {
  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
  blocks: VisualBlock[];
};

const MAX_BLOCKS = 6;
const MAX_ALTS = 5;
const MAX_STEPS = 8;
const MAX_NODES = 10;
const MAX_EDGES = 16;
const MAX_ITEMS = 8;
const MAX_STR = 400;
const MAX_TEXT_ALT = 2000;
const MAX_MD = 4000;

function clip(s: string, max: number): string {
  const t = s.trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}

function asString(v: unknown): string | null {
  return typeof v === "string" && v.trim() ? v.trim() : null;
}

function parseProvenance(raw: unknown): VisualProvenance[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const out: VisualProvenance[] = [];
  for (const p of raw.slice(0, 4)) {
    if (!p || typeof p !== "object") continue;
    const label = asString((p as Record<string, unknown>).label);
    if (!label) continue;
    const note = asString((p as Record<string, unknown>).note) ?? undefined;
    out.push({ label: clip(label, 160), note: note ? clip(note, 240) : undefined });
  }
  return out.length ? out : undefined;
}

function parseComparison(o: Record<string, unknown>, id: string): ComparisonBlock | null {
  const title = asString(o.title);
  const textAlternative = asString(o.textAlternative);
  if (!title || !textAlternative || !Array.isArray(o.alternatives)) return null;
  const alternatives: ComparisonAlternative[] = [];
  for (const raw of o.alternatives.slice(0, MAX_ALTS)) {
    if (!raw || typeof raw !== "object") continue;
    const a = raw as Record<string, unknown>;
    const aid = asString(a.id);
    const at = asString(a.title);
    const summary = asString(a.summary);
    if (!aid || !at || !summary) continue;
    alternatives.push({
      id: clip(aid, 64),
      title: clip(at, 120),
      summary: clip(summary, MAX_STR),
      pros: Array.isArray(a.pros)
        ? (a.pros as unknown[]).map((x) => asString(x)).filter(Boolean).slice(0, 4).map((x) => clip(x!, 160))
        : undefined,
      cons: Array.isArray(a.cons)
        ? (a.cons as unknown[]).map((x) => asString(x)).filter(Boolean).slice(0, 4).map((x) => clip(x!, 160))
        : undefined,
    });
  }
  if (alternatives.length < 2) return null;
  const altIds = new Set(alternatives.map((a) => a.id));
  const criteria: ComparisonCriterion[] = [];
  if (Array.isArray(o.criteria)) {
    for (const raw of o.criteria.slice(0, 6)) {
      if (!raw || typeof raw !== "object") continue;
      const c = raw as Record<string, unknown>;
      const cid = asString(c.id);
      const label = asString(c.label);
      if (!cid || !label || !c.values || typeof c.values !== "object") continue;
      const values: Record<string, string> = {};
      for (const [k, v] of Object.entries(c.values as Record<string, unknown>)) {
        if (!altIds.has(k)) continue;
        const s = asString(v);
        if (s) values[k] = clip(s, 80);
      }
      if (Object.keys(values).length === 0) continue;
      criteria.push({ id: clip(cid, 64), label: clip(label, 120), values });
    }
  }
  return {
    kind: "comparison",
    id,
    title: clip(title, 160),
    alternatives,
    criteria: criteria.length ? criteria : undefined,
    recommendation: asString(o.recommendation) ? clip(asString(o.recommendation)!, MAX_STR) : null,
    textAlternative: clip(textAlternative, MAX_TEXT_ALT),
    provenance: parseProvenance(o.provenance),
  };
}

function parseSequence(o: Record<string, unknown>, id: string): SequenceBlock | null {
  const title = asString(o.title);
  const textAlternative = asString(o.textAlternative);
  if (!title || !textAlternative || !Array.isArray(o.steps)) return null;
  const steps: SequenceStep[] = [];
  const ids = new Set<string>();
  for (const raw of o.steps.slice(0, MAX_STEPS)) {
    if (!raw || typeof raw !== "object") continue;
    const s = raw as Record<string, unknown>;
    const sid = asString(s.id);
    const st = asString(s.title);
    if (!sid || !st) continue;
    ids.add(sid);
    steps.push({
      id: clip(sid, 64),
      title: clip(st, 160),
      detail: asString(s.detail) ? clip(asString(s.detail)!, MAX_STR) : undefined,
      dependsOn: Array.isArray(s.dependsOn)
        ? (s.dependsOn as unknown[]).map((x) => asString(x)).filter(Boolean).slice(0, 4).map((x) => clip(x!, 64))
        : undefined,
      dateLabel: asString(s.dateLabel) ? clip(asString(s.dateLabel)!, 80) : null,
    });
  }
  if (steps.length < 2) return null;
  // Drop dependsOn pointing at unknown steps (no invented edges).
  for (const step of steps) {
    if (step.dependsOn) {
      step.dependsOn = step.dependsOn.filter((d) => ids.has(d) && d !== step.id);
      if (!step.dependsOn.length) delete step.dependsOn;
    }
  }
  return {
    kind: "sequence",
    id,
    title: clip(title, 160),
    steps,
    textAlternative: clip(textAlternative, MAX_TEXT_ALT),
    provenance: parseProvenance(o.provenance),
  };
}

const NODE_KINDS = new Set<RelationNodeKind>([
  "fact",
  "hypothesis",
  "unknown",
  "cause",
  "finding",
]);

function parseRelations(o: Record<string, unknown>, id: string): RelationsBlock | null {
  const title = asString(o.title);
  const textAlternative = asString(o.textAlternative);
  if (!title || !textAlternative || !Array.isArray(o.nodes)) return null;
  const nodes: RelationNode[] = [];
  const ids = new Set<string>();
  for (const raw of o.nodes.slice(0, MAX_NODES)) {
    if (!raw || typeof raw !== "object") continue;
    const n = raw as Record<string, unknown>;
    const nid = asString(n.id);
    const label = asString(n.label);
    const kind = asString(n.kind) as RelationNodeKind | null;
    if (!nid || !label || !kind || !NODE_KINDS.has(kind)) continue;
    ids.add(nid);
    nodes.push({ id: clip(nid, 64), label: clip(label, 160), kind });
  }
  if (nodes.length < 2) return null;
  const edges: RelationEdge[] = [];
  if (Array.isArray(o.edges)) {
    for (const raw of o.edges.slice(0, MAX_EDGES)) {
      if (!raw || typeof raw !== "object") continue;
      const e = raw as Record<string, unknown>;
      const from = asString(e.from);
      const to = asString(e.to);
      if (!from || !to || !ids.has(from) || !ids.has(to) || from === to) continue;
      edges.push({
        from: clip(from, 64),
        to: clip(to, 64),
        label: asString(e.label) ? clip(asString(e.label)!, 80) : undefined,
      });
    }
  }
  const preferListFallback =
    Boolean(o.preferListFallback) || nodes.length > 7 || edges.length > 10;
  return {
    kind: "relations",
    id,
    title: clip(title, 160),
    nodes,
    edges,
    textAlternative: clip(textAlternative, MAX_TEXT_ALT),
    provenance: parseProvenance(o.provenance),
    preferListFallback,
  };
}

const TONES = new Set<SynthesisItemTone>(["priority", "finding", "risk", "watch"]);

function parseSynthesis(o: Record<string, unknown>, id: string): SynthesisBlock | null {
  const title = asString(o.title);
  const textAlternative = asString(o.textAlternative);
  if (!title || !textAlternative || !Array.isArray(o.items)) return null;
  const items: SynthesisItem[] = [];
  for (const raw of o.items.slice(0, MAX_ITEMS)) {
    if (!raw || typeof raw !== "object") continue;
    const it = raw as Record<string, unknown>;
    const iid = asString(it.id);
    const label = asString(it.label);
    const tone = asString(it.tone) as SynthesisItemTone | null;
    if (!iid || !label || !tone || !TONES.has(tone)) continue;
    items.push({
      id: clip(iid, 64),
      label: clip(label, 200),
      detail: asString(it.detail) ? clip(asString(it.detail)!, MAX_STR) : undefined,
      tone,
    });
  }
  if (!items.length) return null;
  return {
    kind: "synthesis",
    id,
    title: clip(title, 160),
    items,
    textAlternative: clip(textAlternative, MAX_TEXT_ALT),
    provenance: parseProvenance(o.provenance),
  };
}

function parseText(o: Record<string, unknown>, id: string): TextBlock | null {
  const markdown = asString(o.markdown);
  if (!markdown) return null;
  return { kind: "text", id, markdown: clip(markdown, MAX_MD) };
}

function parseBlock(raw: unknown, idx: number): VisualBlock | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const kind = asString(o.kind);
  const id = asString(o.id) ?? `block-${idx + 1}`;
  if (!kind) return null;
  switch (kind) {
    case "comparison":
      return parseComparison(o, clip(id, 64));
    case "sequence":
      return parseSequence(o, clip(id, 64));
    case "relations":
      return parseRelations(o, clip(id, 64));
    case "synthesis":
      return parseSynthesis(o, clip(id, 64));
    case "text":
      return parseText(o, clip(id, 64));
    default:
      return null;
  }
}

/**
 * Fail-closed sanitize: drop invalid blocks; keep valid ones.
 * Empty / missing → null (text-only message).
 */
export function parseVisualComposition(raw: unknown): VisualComposition | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (o.schemaVersion !== VISUAL_COMPOSITION_SCHEMA) return null;
  if (!Array.isArray(o.blocks)) return null;
  const blocks: VisualBlock[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < o.blocks.length && blocks.length < MAX_BLOCKS; i += 1) {
    const b = parseBlock(o.blocks[i], i);
    if (!b) continue;
    if (seen.has(b.id)) continue;
    seen.add(b.id);
    blocks.push(b);
  }
  if (!blocks.length) return null;
  return { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks };
}

export function validateVisualComposition(raw: unknown): {
  ok: true;
  value: VisualComposition;
} | { ok: false; reason: string } {
  const parsed = parseVisualComposition(raw);
  if (!parsed) return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
  return { ok: true, value: parsed };
}

/** True when composition has at least one non-text visual block. */
export function hasGraphicBlocks(c: VisualComposition | null | undefined): boolean {
  return Boolean(c?.blocks.some((b) => b.kind !== "text"));
}

```

### CREATED `NoraVisualComposition.tsx`

```tsx
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  VisualBlock,
  VisualComposition,
} from "@/domains/conversation/visual-composition";

function Provenance({ items }: { items?: { label: string; note?: string }[] }) {
  if (!items?.length) return null;
  return (
    <ul className="fig-visual-provenance" data-testid="nora-visual-provenance">
      {items.map((p, i) => (
        <li key={`${p.label}-${i}`}>
          <span>{p.label}</span>
          {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
        </li>
      ))}
    </ul>
  );
}

function ComparisonView({ block }: { block: ComparisonBlock }) {
  return (
    <section
      className="fig-visual-block fig-visual-comparison"
      data-testid="nora-visual-comparison"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <h3 className="fig-visual-title">{block.title}</h3>
      <div className="fig-visual-comparison-grid">
        {block.alternatives.map((alt) => (
          <article key={alt.id} className="fig-visual-alt" data-alt-id={alt.id}>
            <h4>{alt.title}</h4>
            <p>{alt.summary}</p>
            {alt.pros?.length ? (
              <ul className="fig-visual-pros">
                {alt.pros.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            ) : null}
            {alt.cons?.length ? (
              <ul className="fig-visual-cons">
                {alt.cons.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
      {block.criteria?.length ? (
        <div className="fig-visual-matrix-wrap">
          <table className="fig-visual-matrix">
            <caption className="sr-only">Critères de comparaison</caption>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                {block.alternatives.map((a) => (
                  <th key={a.id} scope="col">
                    {a.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.criteria.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{c.label}</th>
                  {block.alternatives.map((a) => (
                    <td key={a.id}>{c.values[a.id] ?? "—"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {block.recommendation ? (
        <p className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <span className="fig-visual-recommendation-label">Recommandation</span>
          {block.recommendation}
        </p>
      ) : null}
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance items={block.provenance} />
    </section>
  );
}

function SequenceView({ block }: { block: SequenceBlock }) {
  return (
    <section
      className="fig-visual-block fig-visual-sequence"
      data-testid="nora-visual-sequence"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <h3 className="fig-visual-title">{block.title}</h3>
      <ol className="fig-visual-steps">
        {block.steps.map((step, idx) => (
          <li key={step.id} className="fig-visual-step" data-step-id={step.id}>
            <div className="fig-visual-step-marker" aria-hidden>
              {idx + 1}
            </div>
            <div className="fig-visual-step-body">
              <h4>{step.title}</h4>
              {step.detail ? <p>{step.detail}</p> : null}
              {step.dependsOn?.length ? (
                <p className="fig-visual-step-deps">
                  Dépend de : {step.dependsOn.join(", ")}
                </p>
              ) : null}
              {step.dateLabel ? (
                <p className="fig-visual-step-date">{step.dateLabel}</p>
              ) : null}
            </div>
            {idx < block.steps.length - 1 ? (
              <div className="fig-visual-step-connector" aria-hidden />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance items={block.provenance} />
    </section>
  );
}

function RelationsView({ block }: { block: RelationsBlock }) {
  const useSvg = !block.preferListFallback && block.nodes.length <= 7;
  const w = 360;
  const h = 220;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.34;
  const positions = block.nodes.map((n, i) => {
    const angle = (Math.PI * 2 * i) / block.nodes.length - Math.PI / 2;
    return {
      id: n.id,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      node: n,
    };
  });
  const byId = new Map(positions.map((p) => [p.id, p]));

  return (
    <section
      className="fig-visual-block fig-visual-relations"
      data-testid="nora-visual-relations"
      data-block-id={block.id}
      data-fallback={useSvg ? "0" : "1"}
      aria-label={block.title}
    >
      <h3 className="fig-visual-title">{block.title}</h3>
      {useSvg ? (
        <svg
          className="fig-visual-relations-svg"
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={block.textAlternative}
        >
          {block.edges.map((e, i) => {
            const a = byId.get(e.from);
            const b = byId.get(e.to);
            if (!a || !b) return null;
            return (
              <g key={`${e.from}-${e.to}-${i}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className="fig-visual-edge"
                />
                {e.label ? (
                  <text
                    x={(a.x + b.x) / 2}
                    y={(a.y + b.y) / 2 - 4}
                    className="fig-visual-edge-label"
                  >
                    {e.label}
                  </text>
                ) : null}
              </g>
            );
          })}
          {positions.map((p) => (
            <g key={p.id}>
              <circle
                cx={p.x}
                cy={p.y}
                r={28}
                className={`fig-visual-node fig-visual-node-${p.node.kind}`}
              />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className="fig-visual-node-label">
                {p.node.label.length > 18 ? `${p.node.label.slice(0, 16)}…` : p.node.label}
              </text>
            </g>
          ))}
        </svg>
      ) : null}
      <ul className="fig-visual-relations-list">
        {block.nodes.map((n) => (
          <li key={n.id} data-node-kind={n.kind}>
            <span className={`fig-visual-tone fig-visual-tone-${n.kind}`}>{n.kind}</span>
            {n.label}
          </li>
        ))}
      </ul>
      {block.edges.length ? (
        <ul className="fig-visual-relations-edges">
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              {e.from} → {e.to}
              {e.label ? ` (${e.label})` : ""}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance items={block.provenance} />
    </section>
  );
}

function SynthesisView({ block }: { block: SynthesisBlock }) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis"
      data-testid="nora-visual-synthesis"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <h3 className="fig-visual-title">{block.title}</h3>
      <ul className="fig-visual-synthesis-list">
        {block.items.map((it) => (
          <li key={it.id} data-tone={it.tone} className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}>
            <span className="fig-visual-synth-tone" aria-hidden>
              {it.tone === "priority"
                ? "●"
                : it.tone === "risk"
                  ? "!"
                  : it.tone === "watch"
                    ? "…"
                    : "○"}
            </span>
            <div>
              <strong>{it.label}</strong>
              {it.detail ? <p>{it.detail}</p> : null}
            </div>
          </li>
        ))}
      </ul>
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance items={block.provenance} />
    </section>
  );
}

function BlockView({ block }: { block: VisualBlock }) {
  switch (block.kind) {
    case "comparison":
      return <ComparisonView block={block} />;
    case "sequence":
      return <SequenceView block={block} />;
    case "relations":
      return <RelationsView block={block} />;
    case "synthesis":
      return <SynthesisView block={block} />;
    case "text":
      return (
        <div className="fig-visual-block fig-visual-text" data-testid="nora-visual-text">
          <SafeMarkdown content={block.markdown} />
        </div>
      );
    default:
      return null;
  }
}

/**
 * Renders validated visual composition for a Nora message.
 * Invalid / missing → caller keeps SafeMarkdown-only.
 */
export function NoraVisualComposition(props: {
  composition: VisualComposition;
  /** When true, skip duplicating prose already shown as message content. */
  skipLeadingTextEqualTo?: string;
}) {
  const blocks = props.composition.blocks.filter((b) => {
    if (
      b.kind === "text" &&
      props.skipLeadingTextEqualTo &&
      b.markdown.trim() === props.skipLeadingTextEqualTo.trim()
    ) {
      return false;
    }
    return true;
  });
  if (!blocks.length) return null;
  return (
    <div
      className="fig-visual-composition"
      data-testid="nora-visual-composition"
      data-schema={props.composition.schemaVersion}
    >
      {blocks.map((b) => (
        <BlockView key={b.id} block={b} />
      ))}
    </div>
  );
}

```

### CREATED `ensemble05-visual-composition.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  parseVisualComposition,
  validateVisualComposition,
  hasGraphicBlocks,
  VISUAL_COMPOSITION_SCHEMA,
} from "@/domains/conversation/visual-composition";
import {
  buildTurnProjection,
  parseTurnProjection,
  TURN_PROJECTION_SCHEMA,
} from "@/domains/conversation/turn-projection";
import {
  E05_VISUAL_COMPARISON,
  E05_VISUAL_INSUFFICIENT,
  E05_VISUAL_SIMPLE,
  fixtureSemanticQualify,
} from "@/domains/conversation/fixture-semantic-qualify";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("e05 visual composition contract", () => {
  it("rejects invalid / empty compositions (fail-closed)", () => {
    expect(parseVisualComposition(null)).toBeNull();
    expect(parseVisualComposition({ schemaVersion: "other", blocks: [] })).toBeNull();
    expect(
      parseVisualComposition({
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "comparison", id: "x", title: "t", alternatives: [] }],
      }),
    ).toBeNull();
    expect(validateVisualComposition({})).toEqual({
      ok: false,
      reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY",
    });
  });

  it("parses comparison with textAlternative and drops invented edges in relations", () => {
    const raw = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Liens",
          nodes: [
            { id: "a", label: "A", kind: "fact" },
            { id: "b", label: "B", kind: "hypothesis" },
          ],
          edges: [
            { from: "a", to: "b", label: "ok" },
            { from: "a", to: "ghost" },
          ],
          textAlternative: "A lié à B",
        },
      ],
    };
    const parsed = parseVisualComposition(raw);
    expect(parsed?.blocks[0]?.kind).toBe("relations");
    if (parsed?.blocks[0]?.kind === "relations") {
      expect(parsed.blocks[0].edges).toEqual([{ from: "a", to: "b", label: "ok" }]);
    }
  });

  it("stores composition additively on turn projection and preserves legacy without it", () => {
    const legacy = buildTurnProjection({
      messageId: "m1",
      status: "COMPLETE",
      finalized: true,
    });
    expect(legacy.visualComposition).toBeUndefined();
    expect(parseTurnProjection(legacy)?.messageId).toBe("m1");

    const withVisual = buildTurnProjection({
      messageId: "m2",
      status: "COMPLETE",
      finalized: true,
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "synthesis",
            id: "s1",
            title: "Synthèse",
            items: [{ id: "i1", label: "Priorité", tone: "priority" }],
            textAlternative: "Priorité unique",
          },
        ],
      },
    });
    expect(hasGraphicBlocks(withVisual.visualComposition)).toBe(true);
    const roundTrip = parseTurnProjection(withVisual);
    expect(roundTrip?.schemaVersion).toBe(TURN_PROJECTION_SCHEMA);
    expect(roundTrip?.visualComposition?.blocks[0]?.kind).toBe("synthesis");
  });

  it("fixture: simple question stays text-only; comparison carries graphics", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    const simple = fixtureSemanticQualify(E05_VISUAL_SIMPLE);
    expect(simple.visualComposition).toBeUndefined();
    const cmp = fixtureSemanticQualify(E05_VISUAL_COMPARISON);
    const v = validateNoraTurnQualification(cmp);
    expect(v.ok).toBe(true);
    if (v.ok) {
      expect(hasGraphicBlocks(parseVisualComposition(v.value.visualComposition))).toBe(true);
    }
    const insuff = fixtureSemanticQualify(E05_VISUAL_INSUFFICIENT);
    expect(insuff.visualComposition).toBeUndefined();
    expect(insuff.replyDraft.toLowerCase()).toContain("trompeur");
  });

  it("soft-strips invalid visualComposition from qualification without failing envelope", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "g",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [],
      replyDraft: "ok",
      visualComposition: { schemaVersion: "bad", blocks: [{ kind: "nope" }] },
    });
    expect(v.ok).toBe(true);
    if (v.ok) {
      expect(v.value.visualComposition).toBeUndefined();
      expect(v.value.replyDraft).toBe("ok");
    }
  });
});

```

### DIFF `turn-projection.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
index f321378c..07b87866 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
@@ -3,8 +3,14 @@
  * Stored additively in conversation_turn_commands.result_json (no migration).
  * Never parse markdown to decide mutations; choices are typed here only.
  * Clarifications ≠ continue choices (P1-A corrective).
+ * T02 — optional visualComposition is additive; omission = text-only legacy.
  */

+import {
+  parseVisualComposition,
+  type VisualComposition,
+} from "./visual-composition";
+
 export const TURN_PROJECTION_SCHEMA = "e05-turn-projection-v1" as const;

 export type TurnChoiceKind = "continue";
@@ -46,6 +52,11 @@ export type TurnProjection = {
   choices: TurnChoice[];
   references: TurnReference[];
   activity?: TurnActivitySummary | null;
+  /**
+   * Optional validated visual composition (T02).
+   * Absent on historical turns — SafeMarkdown-only remains valid.
+   */
+  visualComposition?: VisualComposition | null;
 };

 export type MessageProjectionView = TurnProjection & {
@@ -74,6 +85,8 @@ export function buildTurnProjection(input: {
   toolCallsObserved?: number | null;
   d4CharsReturned?: number | null;
   documentSave?: { documentId?: string; revisionId?: string; status?: string } | null;
+  /** Optional T02 visual composition — sanitized; invalid → omitted. */
+  visualComposition?: unknown;
 }): TurnProjection {
   const choices: TurnChoice[] = [];
   const seen = new Set<string>();
@@ -127,6 +140,8 @@ export function buildTurnProjection(input: {
     };
   }

+  const visualComposition = parseVisualComposition(input.visualComposition);
+
   return {
     schemaVersion: TURN_PROJECTION_SCHEMA,
     messageId: input.messageId,
@@ -136,6 +151,7 @@ export function buildTurnProjection(input: {
     choices,
     references,
     activity,
+    ...(visualComposition ? { visualComposition } : {}),
   };
 }

@@ -156,6 +172,7 @@ export function parseTurnProjection(raw: unknown): TurnProjection | null {
   const o = raw as Record<string, unknown>;
   if (o.schemaVersion !== TURN_PROJECTION_SCHEMA) return null;
   if (!Array.isArray(o.choices)) return null;
+  const visualComposition = parseVisualComposition(o.visualComposition);
   return {
     schemaVersion: TURN_PROJECTION_SCHEMA,
     messageId: typeof o.messageId === "string" ? o.messageId : null,
@@ -165,6 +182,7 @@ export function parseTurnProjection(raw: unknown): TurnProjection | null {
     choices: (o.choices as unknown[]).filter(isContinueChoice),
     references: Array.isArray(o.references) ? (o.references as TurnReference[]) : [],
     activity: (o.activity as TurnActivitySummary | null | undefined) ?? null,
+    ...(visualComposition ? { visualComposition } : {}),
   };
 }


```

### DIFF `semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index f36a2362..4d17bc00 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -8,6 +8,7 @@ import {
   type PilotageOperation,
 } from "@/domains/pilotage/types";
 import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
+import { parseVisualComposition } from "./visual-composition";

 export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

@@ -193,6 +194,11 @@ export const NoraTurnQualificationSchema = z.object({
   preparationAssessmentExplanation: z.string().max(800).optional(),
   documentProposal: DocumentProposalSchema.optional(),
   documentSource: DocumentSourceSchema.optional(),
+  /**
+   * Ensemble 05 / T02 — optional visual composition (structured blocks).
+   * Omission = text-only reply. Never HTML/JS. Studio re-validates before persist/render.
+   */
+  visualComposition: z.unknown().optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

@@ -267,6 +273,15 @@ export function validateNoraTurnQualification(raw: unknown): QualificationValida
   for (const id of ids) {
     if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
   }
+  // T02 — soft-sanitize visual composition; never fail the whole qualification on bad visuals.
+  if (q.visualComposition !== undefined) {
+    const cleaned = parseVisualComposition(q.visualComposition);
+    if (cleaned) {
+      (q as { visualComposition?: unknown }).visualComposition = cleaned;
+    } else {
+      delete (q as { visualComposition?: unknown }).visualComposition;
+    }
+  }
   return { ok: true, value: q };
 }


```

### DIFF `service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 282734b1..bce0571c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2370,6 +2370,7 @@ export async function postUserMessageAndNora(
       toolCallsObserved: reply.toolCallsObserved,
       d4CharsReturned: reply.d4CharsReturned,
       documentSave,
+      visualComposition: qualification.visualComposition,
     }),
   };


```

### DIFF `nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index bcc0c40d..68dfd858 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -444,6 +444,7 @@ async function runLiveWithTools(
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
+    "- visualComposition (optionnel, schema e05-visual-composition-v1) = composition ordonnée de blocs text|comparison|sequence|relations|synthesis. Omettre pour une réponse purement textuelle. N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",

```

### DIFF `NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 37d43fa4..2ad654cf 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -2,6 +2,7 @@

 import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { NoraVisualComposition } from "@/components/figma/NoraVisualComposition";
 import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
 import type {
   MessageProjectionView,
@@ -153,6 +154,12 @@ export function NoraConversation(props: {
                 {isNora ? (
                   <div className="fig-msg-body">
                     <SafeMarkdown content={m.content} />
+                    {proj?.visualComposition ? (
+                      <NoraVisualComposition
+                        composition={proj.visualComposition}
+                        skipLeadingTextEqualTo={m.content}
+                      />
+                    ) : null}
                   </div>
                 ) : (
                   <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>

```

### DIFF `fixture-semantic-qualify.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 6585c4c7..1e8b4e37 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -50,6 +50,7 @@ type QualExtras = Partial<
     | "resourceReferences"
     | "preparationAssessment"
     | "preparationAssessmentExplanation"
+    | "visualComposition"
   >
 >;

@@ -84,6 +85,7 @@ function dialogue(
     resourceReferences: extras?.resourceReferences,
     preparationAssessment: extras?.preparationAssessment,
     preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
+    visualComposition: extras?.visualComposition,
   };
   if (extras?.omitClarifications) {
     // Raw incomplete envelope: clarifications key absent (R2-C).
@@ -606,6 +608,273 @@ register(
   dialogue("Politesse", "Bonjour — je vais bien. Comment puis-je vous aider ?", ["NO_EFFECT"]),
 );

+/** Ensemble 05 / T02 — exact utterances for visual composition (TEST_BOUNDARY). */
+export const E05_VISUAL_SIMPLE =
+  "E05_VISUAL_SIMPLE Quelle est la capitale de la France ?";
+export const E05_VISUAL_COMPARISON =
+  "E05_VISUAL_COMPARISON Compare les approches A, B et C pour le périmètre V1.";
+export const E05_VISUAL_SEQUENCE =
+  "E05_VISUAL_SEQUENCE Propose un parcours en étapes dépendantes pour démarrer.";
+export const E05_VISUAL_RELATIONS =
+  "E05_VISUAL_RELATIONS Montre les relations entre constats, hypothèses et causes.";
+export const E05_VISUAL_SYNTHESIS =
+  "E05_VISUAL_SYNTHESIS Synthétise les priorités et risques du cadrage actuel.";
+export const E05_VISUAL_COMPOSITE =
+  "E05_VISUAL_COMPOSITE Donne une synthèse visuelle puis une comparaison A/B.";
+export const E05_VISUAL_INSUFFICIENT =
+  "E05_VISUAL_INSUFFICIENT Dessine un graphique sans données fiables.";
+
+register(
+  E05_VISUAL_SIMPLE,
+  dialogue(
+    "Question simple — réponse textuelle",
+    "Paris est la capitale de la France. Aucune représentation graphique n'est nécessaire ici.",
+    ["NO_EFFECT", "TEXT_ONLY"],
+  ),
+);
+
+register(
+  E05_VISUAL_COMPARISON,
+  dialogue(
+    "Comparaison visuelle A/B/C",
+    "Voici une comparaison des trois approches pour le périmètre V1. La recommandation est séparée des faits.",
+    ["NO_EFFECT", "VISUAL_COMPARISON"],
+    {
+      visualComposition: {
+        schemaVersion: "e05-visual-composition-v1",
+        blocks: [
+          {
+            kind: "comparison",
+            id: "cmp-v1",
+            title: "Approches pour le périmètre V1",
+            alternatives: [
+              {
+                id: "a",
+                title: "Approche A — Manuel",
+                summary: "Saisie guidée, faible couplage outillage.",
+                pros: ["Simple à démarrer"],
+                cons: ["Effort manuel"],
+              },
+              {
+                id: "b",
+                title: "Approche B — Semi-auto",
+                summary: "Import périodique + revue Pilote.",
+                pros: ["Équilibre effort/valeur"],
+                cons: ["Intégrations partielles"],
+              },
+              {
+                id: "c",
+                title: "Approche C — Automatisée",
+                summary: "Connecteurs complets dès V1.",
+                pros: ["Moins de friction"],
+                cons: ["Complexité et délais"],
+              },
+            ],
+            criteria: [
+              {
+                id: "delay",
+                label: "Délai V1",
+                values: { a: "Court", b: "Moyen", c: "Long" },
+              },
+              {
+                id: "risk",
+                label: "Risque technique",
+                values: { a: "Faible", b: "Modéré", c: "Élevé" },
+              },
+            ],
+            recommendation:
+              "Si le délai compte plus que l'automatisation, B offre le meilleur compromis pour une première version.",
+            textAlternative:
+              "A manuel (rapide, effort manuel), B semi-auto (compromis), C automatisé (long, complexe). Recommandation : B si le délai prime.",
+            provenance: [{ label: "Reformulation du cadrage Pilote", note: "Fixture déterministe" }],
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_VISUAL_SEQUENCE,
+  dialogue(
+    "Parcours à étapes dépendantes",
+    "Voici un parcours ordonné. Les dépendances affichées sont uniquement celles exprimées.",
+    ["NO_EFFECT", "VISUAL_SEQUENCE"],
+    {
+      visualComposition: {
+        schemaVersion: "e05-visual-composition-v1",
+        blocks: [
+          {
+            kind: "sequence",
+            id: "seq-start",
+            title: "Parcours de démarrage",
+            steps: [
+              { id: "s1", title: "Clarifier le résultat attendu" },
+              {
+                id: "s2",
+                title: "Fixer le périmètre V1",
+                dependsOn: ["s1"],
+              },
+              {
+                id: "s3",
+                title: "Nommer l'espace de travail",
+                dependsOn: ["s2"],
+              },
+              {
+                id: "s4",
+                title: "Confirmer la base suffisante",
+                dependsOn: ["s2", "s3"],
+              },
+            ],
+            textAlternative:
+              "1) Clarifier le résultat ; 2) Fixer le périmètre V1 (après 1) ; 3) Nommer l'espace (après 2) ; 4) Confirmer la base (après 2 et 3).",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_VISUAL_RELATIONS,
+  dialogue(
+    "Relations d'investigation",
+    "Voici les liens exprimés entre constats, hypothèses et causes — sans inventer de causalité absente.",
+    ["NO_EFFECT", "VISUAL_RELATIONS"],
+    {
+      visualComposition: {
+        schemaVersion: "e05-visual-composition-v1",
+        blocks: [
+          {
+            kind: "relations",
+            id: "rel-inv",
+            title: "Investigation — liens exprimés",
+            nodes: [
+              { id: "f1", label: "Décisions difficiles à retrouver", kind: "finding" },
+              { id: "h1", label: "Manque de trace après réunions", kind: "hypothesis" },
+              { id: "c1", label: "Pas de lieu unique de continuité", kind: "cause" },
+              { id: "u1", label: "Rôle de l'équipe en V1", kind: "unknown" },
+            ],
+            edges: [
+              { from: "f1", to: "h1", label: "suggère" },
+              { from: "h1", to: "c1", label: "pourrait expliquer" },
+            ],
+            textAlternative:
+              "Constat : décisions difficiles à retrouver. Hypothèse : manque de trace après réunions. Cause possible : pas de lieu unique. Inconnue : rôle de l'équipe en V1.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_VISUAL_SYNTHESIS,
+  dialogue(
+    "Synthèse visuelle",
+    "Voici les priorités et points de vigilance du cadrage actuel.",
+    ["NO_EFFECT", "VISUAL_SYNTHESIS"],
+    {
+      visualComposition: {
+        schemaVersion: "e05-visual-composition-v1",
+        blocks: [
+          {
+            kind: "synthesis",
+            id: "syn-1",
+            title: "Cadrage — priorités et vigilance",
+            items: [
+              {
+                id: "p1",
+                label: "Continuité des décisions",
+                detail: "Besoin clairement exprimé",
+                tone: "priority",
+              },
+              {
+                id: "f1",
+                label: "Périmètre personnel en V1",
+                detail: "Équipe reportée",
+                tone: "finding",
+              },
+              {
+                id: "r1",
+                label: "Automatisation trop tôt",
+                detail: "Risque de délai et de complexité",
+                tone: "risk",
+              },
+              {
+                id: "w1",
+                label: "Nom de travail encore provisoire",
+                tone: "watch",
+              },
+            ],
+            textAlternative:
+              "Priorité : continuité des décisions. Constat : périmètre personnel V1. Risque : automatisation trop tôt. Vigilance : nom encore provisoire.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_VISUAL_COMPOSITE,
+  dialogue(
+    "Réponse composite texte + plusieurs représentations",
+    "Je commence par une lecture courte, puis deux représentations complémentaires.",
+    ["NO_EFFECT", "VISUAL_COMPOSITE"],
+    {
+      visualComposition: {
+        schemaVersion: "e05-visual-composition-v1",
+        blocks: [
+          {
+            kind: "text",
+            id: "tx-1",
+            markdown:
+              "Lecture : le cadrage avance, mais le choix d'approche V1 reste ouvert. Voici une synthèse puis une comparaison.",
+          },
+          {
+            kind: "synthesis",
+            id: "syn-c",
+            title: "Points saillants",
+            items: [
+              { id: "i1", label: "Résultat : décisions + prochaines actions", tone: "priority" },
+              { id: "i2", label: "Équipe hors V1", tone: "finding" },
+            ],
+            textAlternative: "Priorité décisions/actions ; équipe hors V1.",
+          },
+          {
+            kind: "comparison",
+            id: "cmp-c",
+            title: "Deux options restantes",
+            alternatives: [
+              {
+                id: "a",
+                title: "Option A",
+                summary: "Manuel guidé",
+              },
+              {
+                id: "b",
+                title: "Option B",
+                summary: "Semi-automatisé",
+              },
+            ],
+            textAlternative: "Option A manuelle ; option B semi-automatisée.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_VISUAL_INSUFFICIENT,
+  dialogue(
+    "Données insuffisantes — pas de graphique trompeur",
+    "Je n'ai pas assez d'éléments fiables pour produire une représentation graphique utile. Précisons d'abord les alternatives ou les faits à relier — sinon le schéma serait trompeur.",
+    ["NO_EFFECT", "VISUAL_INSUFFICIENT_FALLBACK"],
+  ),
+);
+
 /** Test helper — register an exact utterance → envelope without regex. */
 export function registerFixtureScenario(utterance: string, q: NoraTurnQualification): void {
   assertFixtureLane();

```

### DIFF `tokens.css` (T02 styles + T05 enlarge)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 1fb671e7..1412ee2e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -663,6 +663,10 @@
   align-self: stretch;
   display: flex;
   flex-direction: column;
+  background: #0f1420;
+  isolation: isolate;
+  z-index: 2;
+  position: relative;
 }

 .fig-inspector {
@@ -1676,7 +1680,10 @@
   column-gap: 22px;
 }

-/* Enlarged viewer: conversation/composer hidden; aside spans useful area. */
+/* Enlarged viewer: conversation/composer hidden; aside spans useful area.
+ * Cause (T05): React `hidden` alone left grid items cohabiting the same column —
+ * conversation text could paint through/behind the viewer. CSS must remove them
+ * from layout, and the aside must be an opaque isolated stacking context. */
 .project-travail-stage[data-travail-layout="enlarged"] {
   grid-template-columns: minmax(0, 1fr);
 }
@@ -1686,9 +1693,22 @@
   display: none;
 }

-.project-travail-stage[data-travail-layout="enlarged"] .fig-travail-aside {
+.project-travail-stage[data-travail-layout="enlarged"] .fig-conversation-panel,
+.project-travail-stage[data-travail-layout="enlarged"] .fig-travail-composer-stack,
+[data-travail-layout="enlarged"] .fig-conversation-panel,
+[data-travail-layout="enlarged"] .fig-travail-composer-stack {
+  display: none !important;
+}
+
+.project-travail-stage[data-travail-layout="enlarged"] .fig-travail-aside,
+[data-travail-layout="enlarged"] .fig-travail-aside {
   grid-column: 1;
   grid-row: 1 / -1;
+  background: #0f1420;
+  isolation: isolate;
+  z-index: 3;
+  min-height: 0;
+  overflow: auto;
 }

 .fig-travail-intro-rule {
@@ -1749,6 +1769,268 @@
   }
 }

+/* Ensemble 05 / T02 — native visual composition (no external chart lib) */
+.fig-visual-composition {
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+  margin-top: 14px;
+}
+
+.fig-visual-block {
+  border: 1px solid #272e49;
+  border-radius: 12px;
+  background: #121826;
+  padding: 14px 16px 16px;
+}
+
+.fig-visual-title {
+  margin: 0 0 10px;
+  font-size: 15px;
+  font-weight: 600;
+  color: #f4f6fc;
+}
+
+.fig-visual-comparison-grid {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
+  gap: 10px;
+}
+
+.fig-visual-alt {
+  border: 1px solid #2a334d;
+  border-radius: 10px;
+  padding: 10px 12px;
+  background: #0f1420;
+}
+
+.fig-visual-alt h4 {
+  margin: 0 0 6px;
+  font-size: 13px;
+  color: #e8ecf8;
+}
+
+.fig-visual-alt p,
+.fig-visual-step-body p,
+.fig-visual-synth-item p {
+  margin: 0;
+  font-size: 12.5px;
+  line-height: 1.45;
+  color: #b7c0d8;
+}
+
+.fig-visual-pros,
+.fig-visual-cons,
+.fig-visual-relations-list,
+.fig-visual-relations-edges,
+.fig-visual-synthesis-list,
+.fig-visual-provenance {
+  margin: 8px 0 0;
+  padding-left: 1.1rem;
+  font-size: 12px;
+  color: #9aa6c3;
+}
+
+.fig-visual-matrix-wrap {
+  overflow-x: auto;
+  margin-top: 12px;
+}
+
+.fig-visual-matrix {
+  width: 100%;
+  border-collapse: collapse;
+  font-size: 12px;
+}
+
+.fig-visual-matrix th,
+.fig-visual-matrix td {
+  border: 1px solid #2a334d;
+  padding: 6px 8px;
+  text-align: left;
+  color: #c5cee6;
+}
+
+.fig-visual-matrix th {
+  background: #181f2f;
+  color: #e8ecf8;
+}
+
+.fig-visual-recommendation {
+  margin: 12px 0 0;
+  padding: 10px 12px;
+  border-left: 3px solid #7b8cff;
+  background: #171d2c;
+  font-size: 13px;
+  color: #d7def2;
+}
+
+.fig-visual-recommendation-label {
+  display: block;
+  font-size: 11px;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: #9aa6c3;
+  margin-bottom: 4px;
+}
+
+.fig-visual-steps {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+}
+
+.fig-visual-step {
+  display: grid;
+  grid-template-columns: 28px minmax(0, 1fr);
+  column-gap: 10px;
+  position: relative;
+  padding-bottom: 14px;
+}
+
+.fig-visual-step-marker {
+  width: 28px;
+  height: 28px;
+  border-radius: 999px;
+  display: grid;
+  place-items: center;
+  background: #243056;
+  color: #e8ecf8;
+  font-size: 12px;
+  font-weight: 600;
+}
+
+.fig-visual-step-connector {
+  position: absolute;
+  left: 13px;
+  top: 28px;
+  bottom: 0;
+  width: 2px;
+  background: #2a334d;
+}
+
+.fig-visual-step-deps,
+.fig-visual-step-date {
+  margin: 4px 0 0 !important;
+  font-size: 11px !important;
+  color: #8e9bb8 !important;
+}
+
+.fig-visual-relations-svg {
+  width: 100%;
+  max-width: 420px;
+  height: auto;
+  display: block;
+  margin: 0 auto 8px;
+}
+
+.fig-visual-edge {
+  stroke: #3a4666;
+  stroke-width: 1.5;
+}
+
+.fig-visual-edge-label {
+  fill: #8e9bb8;
+  font-size: 9px;
+}
+
+.fig-visual-node {
+  fill: #1a2236;
+  stroke: #4a5a84;
+  stroke-width: 1.5;
+}
+
+.fig-visual-node-fact,
+.fig-visual-node-finding {
+  stroke: #6ea8ff;
+}
+
+.fig-visual-node-hypothesis {
+  stroke: #c9a45c;
+}
+
+.fig-visual-node-cause {
+  stroke: #d4877a;
+}
+
+.fig-visual-node-unknown {
+  stroke: #7a849e;
+  stroke-dasharray: 3 2;
+}
+
+.fig-visual-node-label {
+  fill: #d7def2;
+  font-size: 8px;
+}
+
+.fig-visual-tone {
+  display: inline-block;
+  margin-right: 6px;
+  font-size: 10px;
+  text-transform: uppercase;
+  letter-spacing: 0.03em;
+  color: #9aa6c3;
+}
+
+.fig-visual-synth-item {
+  display: flex;
+  gap: 10px;
+  align-items: flex-start;
+  margin: 0 0 8px;
+  padding: 8px 10px;
+  border-radius: 8px;
+  background: #0f1420;
+  border: 1px solid #272e49;
+  list-style: none;
+}
+
+.fig-visual-synthesis-list {
+  list-style: none;
+  padding: 0;
+  margin: 0;
+}
+
+.fig-visual-tone-priority {
+  border-color: #3d5aa8;
+}
+
+.fig-visual-tone-risk {
+  border-color: #8a3f4a;
+}
+
+.fig-visual-tone-watch {
+  border-color: #6a5a2e;
+}
+
+.fig-visual-tone-finding {
+  border-color: #2f5a4a;
+}
+
+.fig-visual-synth-tone {
+  width: 18px;
+  text-align: center;
+  color: #b7c0d8;
+  font-weight: 700;
+}
+
+.fig-visual-provenance {
+  margin-top: 10px;
+  font-size: 11px;
+  color: #7f8aa8;
+}
+
+.fig-visual-provenance-note {
+  color: #6d7894;
+}
+
+@media (max-width: 700px) {
+  .fig-visual-comparison-grid {
+    grid-template-columns: 1fr;
+  }
+}
+
 .project-unavailable {
   display: flex;
   align-items: flex-start;

```

### DIFF e2e

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 39dbba06..20acb430 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -128,11 +128,21 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
       "data-travail-layout",
       "enlarged",
     );
+    // T05 — conversation/composer must leave layout (no text bleed through viewer).
+    await expect(page.getByTestId("nora-conversation-panel")).toBeHidden();
+    await expect(page.getByTestId("nora-composer-stack")).toBeHidden();
+    const panelDisplay = await page
+      .getByTestId("nora-conversation-panel")
+      .evaluate((el) => getComputedStyle(el).display);
+    expect(panelDisplay).toBe("none");
+    await expect(page.getByTestId("travail-viewer")).toBeVisible();
+    await expect(page.getByTestId("travail-viewer-body")).toContainText("Note E05");
     await page.getByTestId("travail-viewer-reduce").click();
     await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
       "data-travail-layout",
       "split",
     );
+    await expect(page.getByTestId("nora-conversation-panel")).toBeVisible();
     await page.getByTestId("travail-viewer-close").click();
     await expect(page.getByTestId("travail-aside-bref")).toBeVisible();
     await expect(page.getByTestId("thread-draft")).toHaveValue(keep);
@@ -491,6 +501,83 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await page.unrouteAll({ behavior: "ignoreErrors" });
   });

+  test("T02 visual composition — contextual blocks via real D3 path", async ({ page }) => {
+    test.setTimeout(180_000);
+    const evidenceDir = path.resolve(
+      __dirname,
+      "../../docs/evidence/ensemble-05-travail-nora",
+    );
+    fs.mkdirSync(evidenceDir, { recursive: true });
+
+    await page.goto("/login");
+    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+    await page.waitForURL("**/portfolio");
+    const { projectId } = await bootstrapProjectFromPortfolio(page, {
+      seed: "E05 visual grammar",
+      name: `E05 Visual ${Date.now()}`,
+      summary: "visual",
+    });
+    await page.goto(`/projects/${projectId}?surface=travail`);
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+
+    const draft = page.getByTestId("thread-draft");
+    const send = page.getByTestId("thread-send");
+
+    // Simple question → no graphic composition.
+    await draft.fill("E05_VISUAL_SIMPLE Quelle est la capitale de la France ?");
+    await send.click();
+    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
+      timeout: 45000,
+    });
+    await expect(page.getByTestId("nora-msg-assistant").last()).toContainText(/Paris/i);
+    await expect(page.getByTestId("nora-visual-composition")).toHaveCount(0);
+
+    // Comparison → native visual block.
+    await draft.fill(
+      "E05_VISUAL_COMPARISON Compare les approches A, B et C pour le périmètre V1.",
+    );
+    await send.click();
+    await expect(page.getByTestId("nora-visual-comparison")).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-recommendation")).toBeVisible();
+
+    // Insufficient data → fallback text, no fake chart.
+    await draft.fill("E05_VISUAL_INSUFFICIENT Dessine un graphique sans données fiables.");
+    await send.click();
+    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
+      timeout: 45000,
+    });
+    await expect(page.getByTestId("nora-msg-assistant").last()).toContainText(/trompeur/i);
+
+    // Composite persists across refresh (same pipeline D3 → projection → UI).
+    await draft.fill(
+      "E05_VISUAL_COMPOSITE Donne une synthèse visuelle puis une comparaison A/B.",
+    );
+    await send.click();
+    await expect(page.getByTestId("nora-visual-synthesis")).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-comparison").last()).toBeVisible();
+
+    await page.reload();
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+    await expect(page.getByTestId("nora-visual-composition").last()).toBeVisible({
+      timeout: 20000,
+    });
+    await expect(page.getByTestId("nora-visual-synthesis").last()).toBeVisible();
+
+    await page.setViewportSize({ width: 1440, height: 900 });
+    await page.screenshot({
+      path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
+      fullPage: false,
+    });
+  });
+
   test("C3 same-tab logout/identity switch purges draft", async ({ page }) => {
     test.setTimeout(120_000);
     await page.goto("/login");

```

### DIFF as-built / delivery-history

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md b/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
index 3e164894..1c909788 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
@@ -7,8 +7,8 @@
 | Type | Delivery locale DEV · **NO RELEASE** |
 | Branche produit | `feat/next-ml4d-project-space-20261116` |
 | HEAD de base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
-| Statut | **E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO** (as-built non normatif) |
-| Cycles | Delivery + correctif + consolidation + freeze + correctif brouillon/reconcile (même macro-lot) |
+| Statut | **E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED** (as-built non normatif) |
+| Cycles | Delivery + correctifs + freeze + deploy RECETTE + T02 visual grammar + T05 viewer (même macro-lot) |

 ## Sources

@@ -26,6 +26,8 @@
 | Final A | Toute ouverture Travail revalide D4 (list + revisionId) — pas de latest React en autorité |
 | Final B | ACK perdu → pending obligatoire → reconcile click → 1 tour Pilote |
 | Draft/reconcile | Choix Nora / legacy never clear draft ; composer only via `clearDraftAfterAck` versionné |
+| Visual T02 | Composition additive `e05-visual-composition-v1` dans turnProjection ; A/B/C/D natifs ; optionnelle |
+| Viewer T05 | Mode agrandi : `display:none` fil/composer + aside opaque isolée (cause grille/chevauchement) |
 | C3 | Purge same-tab login ; `session.pilotId` |
 | C5 | Git path existant ; REAL NOT EXECUTED |
 | Rollback prep | Artefact passif `.sfia-restore-artifacts/3Lzv…` — LIVE TEST NOT EXECUTED |

```

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f998cae0..c4e4e5ec 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,22 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-GRAMMAR-T02-T05
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~15:40 CET |
+| Macro-lot | ML4D Ensemble 05 — grammaire visuelle native + visionneuse agrandie (même macro-lot) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL/correctif UAT · **NO RELEASE** |
+| Base tip | `cb638613` (candidat E05 déployé RECETTE — **inchangé ce cycle**) |
+| Scope | Contrat composition visuelle ; primitives A/B/C/D ; intégration D3→projection→UI ; T05 layout |
+| Non-scope | Commit/push produit ; déploiement RECETTE ; migration ; lib graphique externe ; Figma certifié |
+| Preuves | Vitest visual+projection PASS ; Playwright E05 7 PASS ; captures DEV |
+| RECETTE | préservée `:3200` / `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` |
+| Push produit | **AUCUN** |
+| Verdict cible | `E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED` |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-DRAFT-RECONCILE

 | Field | Value |

```

Evidence PNG (binary, non inline) :
- `runtime-visual-comparison-1440.png` (créé)
- `runtime-nominal-1680x970.png` / `runtime-mobile-430x932.png` (rafraîchis)

---

## 10. Diagnostic et correctif T05

**Cause :** en `data-travail-layout=enlarged`, l’aside occupe `grid-row: 1/-1` sur la colonne unique tandis que fil/composer restaient des items de grille masqués seulement via attribut HTML `hidden`. Empilement/peinture possible → texte conversation visible derrière/sous le document. Pas d’overlay modal ni `z-index` dédié.

**Correctif (pas un z-index arbitraire seul) :**
1. `display: none !important` sur `.fig-conversation-panel` et `.fig-travail-composer-stack` en enlarged (stage + workspace).
2. Aside : fond opaque `#0f1420`, `isolation: isolate`, `z-index` local, overflow contrôlé.
3. E2E : assert `display === "none"` + panel hidden ; reduce restaure fil ; draft conservé.

Mode partagé (split) non dégradé (suite E05 PASS).

---

## 11. Tests persistance / récupération

- E2E composite → reload → `nora-visual-composition` / synthesis toujours visibles.
- Unit round-trip `buildTurnProjection` ↔ `parseTurnProjection`.
- Legacy sans `visualComposition` parse OK.

---

## 12. Tests BROWSER et captures

| Suite | Résultat |
|---|---|
| Vitest visual + projection | 17 PASS |
| Playwright E05 (7) | **7 PASS** (dont T02 visual + T05 enlarge asserts) |
| Captures DEV | nominal, mobile, visual-comparison-1440 |

**Non déclaré :** `FIGMA TO RUNTIME ALIGNED` pour les nouvelles primitives.

---

## 13. Non-régression

E05 T01/T03/T04/T06/T07 couverts par suite existante + asserts T05. Invariants draft/ACK/choices inchangés. Aucun effet métier créé par un bloc graphique.

---

## 14. Fake / Real

| | |
|---|---|
| Nora fixtures | **DETERMINISTIC** / FAKE |
| Pipeline D3→PG→API→UI | **BROWSER** réel DEV/E2E |
| Nora LIVE choix dynamique | **NON PROUVÉ** |
| RECETTE | inchangée — **NON redéployée** |
| Git D9 REAL | NOT EXECUTED |

---

## 15. ENV-01 et versioning

- DEV lane uniquement ; DB `:5433` / `sfia_next_dev` pour tests.
- RECETTE `:3200` / `sfia_next_recette_ml4` / BUILD `slh3bItXudDCIEaR2WYho` préservée.
- NO RELEASE ; STABLE NOT AVAILABLE ; pas de tag.

---

## 16. Réserves et exit

- Réception visuelle Morris (future RECETTE sous GO distinct).
- Nouvelles primitives non pixel-certifiées Figma.
- LIVE Nora non démontré pour le choix dynamique de forme.
- Worktree produit dirty (pas de commit — conforme GO).
- Cookies same-host multi-ports.

---

## 17. État RECETTE préservé

| | |
|---|---|
| HEAD | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| BUILD_ID | `slh3bItXudDCIEaR2WYho` |
| HTTP | 307 |
| Mutation ce cycle | **NON** |

---

## 18. Statut Git produit

- HEAD inchangé `cb638613…`
- Modifications locales non poussées
- **Aucun** commit/push/PR/merge produit autorisé ou effectué

---

## 19. Verdict unique

**E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED**

---

## 20. Prochain gate Morris

Revue ChatGPT du handoff, puis décision Morris distincte : accepter le candidat DEV et/ou autoriser une mise à disposition RECETTE ultérieure. Aucun déploiement automatique.
