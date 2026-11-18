"use client";

/**
 * Figma 02 / 06 — editorial sequence: horizontal numbered cards + optional
 * fixture timeline, or vertical editorial steps 01–06.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { stripLeadingOrdinal } from "@/components/figma/nora-composition/editorial-title";
import type { SequenceBlock } from "@/domains/conversation/visual-composition";
import type { SequenceVariant } from "@/domains/conversation/conversational-composition";

void React;

export function EditorialSequence({
  block,
  variant,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
}) {
  const horizontal = variant === "horizontal";
  // Timeline renders whenever temporal data is present — fixtureDemo only qualifies
  // the badge/footnote, never the authorization to paint an admitted timeline.
  const showTimeline = Boolean(block.timeline?.weeks && block.timeline.tracks?.length);

  return (
    <div
      className={`fig-nc-sequence fig-nc-sequence-${variant}`}
      data-testid="nora-composition-editorial-sequence"
      data-variant={variant}
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
      data-timeline={showTimeline ? "1" : "0"}
      data-step-count={block.steps.length}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge">EXEMPLE · SÉQUENCE FICTIVE</p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? <p className="fig-nc-editorial-lead">{block.lead}</p> : null}
      </header>

      {horizontal ? (
        <section className="fig-nc-editorial-section" data-testid="nora-composition-steps-horizontal">
          {/* UX-03 — section title only; step medallion is the sole ordinal. */}
          <div className="fig-nc-section-head fig-nc-section-head-plain">
            <h4 className="fig-nc-section-title">
              {block.steps.length === 4
                ? "Quatre étapes à maîtriser"
                : `${block.steps.length} étapes à maîtriser`}
            </h4>
          </div>
          <ol className="fig-nc-h-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-h-step" data-step-id={step.id}>
                {idx > 0 ? <div className="fig-nc-h-step-link" aria-hidden /> : null}
                <article className="fig-nc-h-step-card">
                  <div className="fig-nc-h-step-medallion" aria-hidden>
                    {idx + 1}
                  </div>
                  <h5>{stripLeadingOrdinal(step.title)}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <section
          className="fig-nc-editorial-section fig-nc-v-steps-section"
          data-testid="nora-composition-steps-vertical"
        >
          <div className="fig-nc-section-head fig-nc-section-head-plain">
            <h4 className="fig-nc-section-title">
              {block.steps.length === 6
                ? "Parcours en six temps"
                : `Parcours en ${block.steps.length} temps`}
            </h4>
          </div>
          <ol className="fig-nc-v-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-v-step" data-step-id={step.id}>
                <span className="fig-nc-v-step-num" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="fig-nc-v-step-body">
                  <h5>{stripLeadingOrdinal(step.title)}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {showTimeline && block.timeline ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-timeline"
          aria-label={
            block.fixtureDemo ? "Chronologie de démonstration" : "Chronologie"
          }
        >
          <div className="fig-nc-section-head fig-nc-section-head-plain">
            <h4 className="fig-nc-section-title">
              Une lecture possible des {block.timeline.weeks} semaines
            </h4>
          </div>
          {block.timeline.caption ? (
            <p className="fig-nc-timeline-caption">{block.timeline.caption}</p>
          ) : null}
          <div
            className="fig-nc-timeline"
            style={{ ["--tl-weeks" as string]: String(block.timeline.weeks) }}
          >
            <div className="fig-nc-timeline-head" aria-hidden>
              <span className="fig-nc-timeline-label-col" />
              <div className="fig-nc-timeline-weeks">
                {Array.from({ length: block.timeline.weeks }, (_, i) => (
                  <span key={i} className="fig-nc-timeline-week">
                    S{i + 1}
                  </span>
                ))}
              </div>
            </div>
            {block.timeline.tracks.map((track) => {
              const start = Math.max(1, Math.min(track.startWeek, block.timeline!.weeks));
              const end = Math.max(start, Math.min(track.endWeek, block.timeline!.weeks));
              const span = end - start + 1;
              return (
                <div key={track.id} className="fig-nc-timeline-row" data-track-id={track.id}>
                  <span className="fig-nc-timeline-label-col">{track.label}</span>
                  <div className="fig-nc-timeline-track">
                    <div
                      className={`fig-nc-timeline-bar fig-nc-timeline-${track.tone ?? "blue"}`}
                      style={{
                        gridColumn: `${start} / span ${span}`,
                      }}
                      data-start-week={start}
                      data-end-week={end}
                    >
                      {track.barLabel ?? track.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="fig-nc-timeline-footnote">
            {block.fixtureDemo
              ? "Lecture indicative (FIXTURE / DEMONSTRATION) — aucune date projet n'est affirmée."
              : "Lecture temporelle issue des données admises — ne pas confondre avec un engagement."}
          </p>
        </section>
      ) : null}

      {block.closingNote ? (
        <aside className="fig-nc-orientation" data-testid="nora-composition-sequence-closing">
          <p className="fig-nc-orientation-label">Garde-fou</p>
          <p className="fig-nc-orientation-body">{block.closingNote}</p>
        </aside>
      ) : null}
    </div>
  );
}
