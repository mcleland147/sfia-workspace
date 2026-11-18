"use client";

/**
 * Figma 01 — editorial synthesis composition (dark Studio).
 * Structure: headline + accent, lead, indicators, numbered sections,
 * strategy cards, checklist, conditional orientation.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { SynthesisBlock } from "@/domains/conversation/visual-composition";

void React;

/**
 * C2 exact-identity only — never substring / includes.
 * A residual item is suppressed only when the same label+detail pair (or the same
 * non-empty detail alone against a checklist/strategy field) matches a surface
 * field character-for-character after trim.
 */
function exactShownElsewhere(it: SynthesisBlock["items"][number], block: SynthesisBlock): boolean {
  const label = (it.label ?? "").trim();
  const detail = (it.detail ?? "").trim();
  if (!label && !detail) return false;

  const strategyHit = (block.strategyCards ?? []).some((c) => {
    const fields = [c.title, c.summary, c.positive, c.counterpart, c.eyebrow]
      .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
      .map((x) => x.trim());
    // Full-field equality only — never bag.includes(detail).
    if (detail && fields.some((f) => f === detail)) {
      // If a label exists, require it to match title or eyebrow exactly as well.
      if (!label) return true;
      return fields.some((f) => f === label);
    }
    if (label && detail) {
      const title = (c.title ?? "").trim();
      const eyebrow = (c.eyebrow ?? "").trim();
      const summary = (c.summary ?? "").trim();
      return (
        (label === title || label === eyebrow) &&
        (detail === summary ||
          detail === (c.positive ?? "").trim() ||
          detail === (c.counterpart ?? "").trim())
      );
    }
    return false;
  });
  if (strategyHit) return true;

  return (block.checklist ?? []).some((row) => {
    const rl = (row.label ?? "").trim();
    const rd = (row.detail ?? "").trim();
    if (label && detail) return rl === label && rd === detail;
    if (detail && !label) return rd === detail;
    if (label && !detail) return rl === label && rd === "";
    return false;
  });
}

export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
  // C2 — drop residual items only on demonstrated exact-identity duplication with
  // strategy/checklist surfaces. Tone alone never suppresses a distinct nuance.
  const residual = block.items.filter((it) => !exactShownElsewhere(it, block));

  return (
    <div
      className="fig-nc-editorial fig-comp-synth-flow"
      data-testid="nora-composition-editorial-synthesis"
      data-renderer="editorial-v3"
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge" data-testid="nora-composition-fixture-badge">
          EXEMPLE · DONNÉES FICTIVES
        </p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline" data-testid="nora-composition-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? (
          <p className="fig-nc-editorial-lead" data-testid="nora-composition-editorial-lead">
            {block.lead}
          </p>
        ) : null}
      </header>

      {block.indicators?.length ? (
        <div
          className="fig-nc-indicators"
          data-testid="nora-composition-indicators"
          data-count={block.indicators.length}
        >
          {block.indicators.map((ind, i) => (
            <React.Fragment key={ind.id}>
              {i > 0 ? <div className="fig-nc-indicators-divider" aria-hidden /> : null}
              <div className="fig-nc-indicator" data-indicator-id={ind.id}>
                <p className="fig-nc-indicator-value">{ind.value}</p>
                <p className="fig-nc-indicator-label">{ind.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : null}

      {block.strategyCards?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-strategies"
          aria-label={block.strategiesSectionTitle ?? "Stratégies"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <div>
              <h4 className="fig-nc-section-title">
                {block.strategiesSectionTitle ?? "Deux stratégies, deux répartitions du risque"}
              </h4>
            </div>
          </div>
          <div
            className="fig-nc-strategy-grid"
            data-count={block.strategyCards.length}
          >
            {block.strategyCards.map((card) => (
              <article
                key={card.id}
                className={`fig-nc-strategy-card fig-nc-strategy-${card.accent ?? "blue"}`}
                data-testid="nora-composition-strategy-card"
                data-accent={card.accent ?? "blue"}
              >
                <div className="fig-nc-strategy-accent" aria-hidden />
                <div className="fig-nc-strategy-top">
                  <p className="fig-nc-strategy-eyebrow">{card.eyebrow}</p>
                  <span className="fig-nc-strategy-mono" aria-hidden>
                    {(card.eyebrow.match(/[A-Z]$/)?.[0] ?? card.eyebrow.slice(-1)).toUpperCase()}
                  </span>
                </div>
                <h5 className="fig-nc-strategy-title">{card.title}</h5>
                <p className="fig-nc-strategy-summary">{card.summary}</p>
                {card.positive || card.counterpart ? (
                  <div className="fig-nc-strategy-footer">
                    {card.positive ? (
                      <p className="fig-nc-strategy-positive">{card.positive}</p>
                    ) : null}
                    {card.counterpart ? (
                      <p className="fig-nc-strategy-counterpart">{card.counterpart}</p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {block.checklist?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-checklist"
          aria-label={block.checklistSectionTitle ?? "Points à vérifier"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              02
            </span>
            <h4 className="fig-nc-section-title">
              {block.checklistSectionTitle ?? "Ce qui doit être vérifié avant tout choix"}
            </h4>
          </div>
          <ul className="fig-nc-checklist">
            {block.checklist.map((row) => (
              <li key={row.id} className="fig-nc-checklist-row" data-checklist-id={row.id}>
                <span className="fig-nc-checklist-dot" aria-hidden />
                <strong className="fig-nc-checklist-label">{row.label}</strong>
                <span className="fig-nc-checklist-detail">{row.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {residual.length ? (
        <ul className="fig-visual-synthesis-list fig-nc-residual-items">
          {residual.map((it) => {
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
                className={`fig-visual-synth-item fig-visual-tone-${it.tone ?? "information"} fig-comp-synth-row`}
              >
                <NoraSemanticIcon role={role} icon={it.icon} />
                <div className="fig-comp-synth-copy">
                  <strong className="fig-comp-synth-label">{it.label}</strong>
                  {it.detail ? (
                    <SafeMarkdown
                      content={it.detail}
                      className="fig-visual-inline-md fig-comp-synth-detail"
                    />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {block.orientation ? (
        <aside
          className="fig-nc-orientation"
          data-testid="nora-composition-orientation"
        >
          <p className="fig-nc-orientation-label">Orientation conditionnelle</p>
          <p className="fig-nc-orientation-body">{block.orientation}</p>
        </aside>
      ) : null}
    </div>
  );
}
