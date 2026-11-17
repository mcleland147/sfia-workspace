"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  TextBlock,
  VisualBlock,
  VisualComposition,
  VisualProvenance,
} from "@/domains/conversation/visual-composition";
import {
  canonicalReferenceKey,
  compositionAnchorsChoices,
  compositionAnchorsReferences,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  provenanceConsultableKeys,
  resolveProvenanceReference,
} from "@/domains/conversation/visual-composition";
import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";

function Provenance(props: {
  items?: VisualProvenance[];
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.items?.length) return null;
  const canonical = props.canonicalReferences ?? [];
  return (
    <ul className="fig-visual-provenance" data-testid="nora-visual-provenance">
      {props.items.map((p, i) => {
        const resolved = resolveProvenanceReference(p, canonical);
        return (
          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
            {resolved && props.onReference ? (
              <button
                type="button"
                className="fig-nora-ref-link"
                data-testid="nora-visual-prov-link"
                data-ref-kind={resolved.kind}
                onClick={() => props.onReference?.(resolved)}
              >
                Consulter · {resolved.label}
                {resolved.available === false ? " (à vérifier)" : ""}
              </button>
            ) : (
              <span>
                {p.label}
                <span className="fig-visual-provenance-note"> — mention descriptive</span>
              </span>
            )}
            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function Heading(props: {
  title: string;
  role?: TextBlock["role"];
  icon?: TextBlock["icon"];
}) {
  return (
    <h3 className="fig-visual-title">
      <NoraSemanticIcon role={props.role} icon={props.icon} />
      <span>{props.title}</span>
    </h3>
  );
}

function ComparisonView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const showMatrix = Boolean(block.criteria?.length);
  // Prefer matrix when criteria dominate; avoid repeating same facts as cards+matrix.
  const showCards = !showMatrix || block.alternatives.some((a) => (a.pros?.length ?? 0) + (a.cons?.length ?? 0) > 0);
  return (
    <section
      className="fig-visual-block fig-visual-comparison"
      data-testid="nora-visual-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {showCards ? (
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
      ) : null}
      {showMatrix ? (
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
              {block.criteria!.map((c) => (
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
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SequenceView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SequenceBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
  return (
    <section
      className="fig-visual-block fig-visual-sequence"
      data-testid="nora-visual-sequence"
      data-block-kind="sequence"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
      <ol className="fig-visual-steps">
        {block.steps.map((step, idx) => (
          <li key={step.id} className="fig-visual-step" data-step-id={step.id}>
            <div className="fig-visual-step-marker" aria-hidden>
              {idx + 1}
            </div>
            <div className="fig-visual-step-body">
              <h4>
                <NoraSemanticIcon role={step.role ?? "step"} />
                {step.title}
              </h4>
              {step.detail ? (
                <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
              ) : null}
              {step.dependsOn?.length ? (
                <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
                  <NoraSemanticIcon role="dependency" />
                  Dépend de :{" "}
                  {step.dependsOn
                    .map((id) => titleById.get(id) ?? id)
                    .join(", ")}
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
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function RelationsView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: RelationsBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
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
      data-block-kind="relations"
      data-block-id={block.id}
      data-fallback={useSvg ? "0" : "1"}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
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
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="fig-visual-edge" />
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
            <NoraSemanticIcon
              role={
                n.kind === "hypothesis"
                  ? "hypothesis"
                  : n.kind === "observation"
                    ? "observation"
                    : n.kind === "fact" || n.kind === "finding"
                      ? "fact"
                      : "information"
              }
            />
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
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SynthesisView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SynthesisBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis"
      data-testid="nora-visual-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      <ul className="fig-visual-synthesis-list">
        {block.items.map((it) => {
          const role =
            it.role ??
            (it.tone === "risk"
              ? "risk"
              : it.tone === "hypothesis"
                ? "hypothesis"
                : it.tone === "observation"
                  ? "observation"
                  : it.tone === "priority"
                    ? "recommendation"
                    : "information");
          return (
            <li
              key={it.id}
              data-tone={it.tone}
              className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}
            >
              <NoraSemanticIcon role={role} icon={it.icon} />
              <div>
                <strong>{it.label}</strong>
                {it.detail ? (
                  <SafeMarkdown content={it.detail} className="fig-visual-inline-md" />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function TextView({ block }: { block: TextBlock }) {
  return (
    <div
      className={`fig-visual-block fig-visual-text${block.role ? ` fig-visual-text-${block.role}` : ""}`}
      data-testid="nora-visual-text"
      data-block-kind="text"
      data-role={block.role ?? ""}
    >
      {block.role || block.icon ? (
        <div className="fig-visual-text-head">
          <NoraSemanticIcon role={block.role} icon={block.icon} />
        </div>
      ) : null}
      <SafeMarkdown content={block.markdown} />
    </div>
  );
}

function ChoicesCluster(props: {
  choices: TurnChoice[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  residual?: boolean;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  anchorId?: string;
}) {
  if (!props.choices.length) return null;
  return (
    <div
      className="fig-nora-choices fig-visual-choices-anchor"
      data-testid="nora-choices"
      data-block-kind="choices"
      data-residual={props.residual ? "1" : "0"}
      data-actionable={props.actionable ? "1" : "0"}
      data-message-id={props.messageId}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.choices.map((c) => (
        <button
          key={c.id}
          type="button"
          className="fig-nora-choice"
          data-testid="nora-choice"
          data-choice-id={c.id}
          disabled={!props.actionable || props.busy || props.choiceFrozen}
          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
        >
          {c.label}
        </button>
      ))}
      {!props.actionable ? (
        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
          Propositions expirées — consultation seule.
        </p>
      ) : null}
    </div>
  );
}

function RefsCluster(props: {
  references: TurnReference[];
  residual?: boolean;
  anchorId?: string;
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.references.length) return null;
  return (
    <ul
      className="fig-nora-refs fig-visual-refs-anchor"
      data-testid="nora-refs"
      data-block-kind="references"
      data-residual={props.residual ? "1" : "0"}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.references.map((r, i) => (
        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
          <button
            type="button"
            className="fig-nora-ref-link"
            data-testid="nora-ref-link"
            data-ref-kind={r.kind}
            onClick={() => props.onReference?.(r)}
          >
            Consulter · {r.label}
            {r.available === false ? " (à vérifier)" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function NoraVisualComposition(props: {
  composition: VisualComposition;
  choices?: TurnChoice[];
  references?: TurnReference[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  onReference?: (ref: TurnReference) => void;
}) {
  const choices = props.choices ?? [];
  const references = props.references ?? [];
  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
  // Provenance consultable wins first; refs clusters skip the same canonical identity.
  const alreadyConsultable = provenanceConsultableKeys(
    props.composition.blocks,
    references,
  );
  const dedupeRefs = (list: TurnReference[]) =>
    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));

  return (
    <div
      className="fig-visual-composition"
      data-testid="nora-visual-composition"
      data-schema={props.composition.schemaVersion}
      data-owns-body="1"
    >
      {props.composition.blocks.map((b) => {
        if (b.kind === "choices") {
          return (
            <ChoicesCluster
              key={b.id}
              choices={choiceParts.byAnchorId.get(b.id) ?? []}
              actionable={props.actionable}
              busy={props.busy}
              choiceFrozen={props.choiceFrozen}
              messageId={props.messageId}
              onChoice={props.onChoice}
              anchorId={b.id}
            />
          );
        }
        if (b.kind === "references") {
          return (
            <RefsCluster
              key={b.id}
              references={dedupeRefs(refParts.byAnchorId.get(b.id) ?? [])}
              onReference={props.onReference}
              anchorId={b.id}
            />
          );
        }
        return (
          <BlockView
            key={b.id}
            block={b}
            canonicalReferences={references}
            onReference={props.onReference}
          />
        );
      })}
      {/* Residuals only when anchors exist — otherwise NoraConversation footer owns them. */}
      {compositionAnchorsChoices(props.composition) ? (
        <ChoicesCluster
          choices={choiceParts.residual}
          actionable={props.actionable}
          busy={props.busy}
          choiceFrozen={props.choiceFrozen}
          messageId={props.messageId}
          onChoice={props.onChoice}
          residual
          anchorId="residual-choices"
        />
      ) : null}
      {compositionAnchorsReferences(props.composition) ? (
        <RefsCluster
          references={dedupeRefs(refParts.residual)}
          onReference={props.onReference}
          residual
          anchorId="residual-references"
        />
      ) : null}
    </div>
  );
}

function BlockView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: VisualBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  switch (block.kind) {
    case "comparison":
      return (
        <ComparisonView
          block={block}
          canonicalReferences={canonicalReferences}
          onReference={onReference}
        />
      );
    case "sequence":
      return (
        <SequenceView
          block={block}
          canonicalReferences={canonicalReferences}
          onReference={onReference}
        />
      );
    case "relations":
      return (
        <RelationsView
          block={block}
          canonicalReferences={canonicalReferences}
          onReference={onReference}
        />
      );
    case "synthesis":
      return (
        <SynthesisView
          block={block}
          canonicalReferences={canonicalReferences}
          onReference={onReference}
        />
      );
    case "text":
      return <TextView block={block} />;
    default:
      return null;
  }
}
