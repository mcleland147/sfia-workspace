"use client";

import type { ReactElement } from "react";
import type {
  NoraAdaptivePresentation,
  NoraAdaptivePresentationBlock,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  honestBlockTitle,
  honestEpistemicLabel,
  sanitizeProvenanceNote,
  studioOwnedRecommendationDisclaimer,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import styles from "./NoraAdaptivePresentationView.module.css";

function BlockGlyph({
  kind,
}: {
  kind: NoraAdaptivePresentationBlock["kind"];
}): ReactElement {
  const map: Record<NoraAdaptivePresentationBlock["kind"], string> = {
    plain: "·",
    question: "?",
    section: "§",
    list: "•",
    comparison_table: "⇄",
    established_facts: "✓",
    open_questions: "?",
    recommendation: "↗",
    evidence_reserves: "◎",
    trace_note: "↗",
  };
  return (
    <span className={styles.glyph} aria-hidden="true">
      {map[kind]}
    </span>
  );
}

function renderBlock(
  block: NoraAdaptivePresentationBlock,
  index: number,
): ReactElement {
  const key = `${block.kind}-${index}`;
  if (block.kind === "plain") {
    return (
      <p key={key} className={styles.plain}>
        {block.text}
      </p>
    );
  }
  if (block.kind === "question") {
    return (
      <p key={key} className={styles.question} role="text">
        {block.text}
      </p>
    );
  }
  if (block.kind === "section") {
    const heading = honestBlockTitle("section", block.title);
    return (
      <section key={key} className={styles.section} aria-label={heading}>
        <h4 className={styles.blockTitle}>{heading}</h4>
        <p className={styles.blockBody}>{block.body}</p>
      </section>
    );
  }
  if (block.kind === "list") {
    const heading = honestBlockTitle("list", block.title);
    return (
      <section
        key={key}
        className={styles.listBlock}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <BlockGlyph kind="list" />
          <div>
            <h4 className={styles.blockTitle}>{heading}</h4>
            <p className={styles.epistemic}>
              {honestEpistemicLabel(block.epistemic)}
            </p>
          </div>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "comparison_table") {
    const heading = honestBlockTitle("comparison_table", block.title);
    return (
      <section key={key} className={styles.tableBlock} aria-label={heading}>
        <h4 className={styles.blockTitle}>{heading}</h4>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.columns.map((col, i) => (
                  <th key={`${key}-c${i}`} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={`${key}-r${ri}`}>
                  {row.map((cell, ci) => (
                    <td key={`${key}-r${ri}-c${ci}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (block.kind === "established_facts") {
    const heading = honestBlockTitle("established_facts", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintEstablished}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="established_facts" />
          </span>
          <div>
            <h4 className={styles.blockTitle}>{heading}</h4>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("established_fact")}
            </p>
          </div>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "open_questions") {
    const heading = honestBlockTitle("open_questions", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintOpen}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="open_questions" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "recommendation") {
    const heading = honestBlockTitle("recommendation", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintRecommendation}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="recommendation" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        <p className={styles.recommendationStatement}>{block.statement}</p>
        <p className={styles.recommendationDisclaimer}>
          {studioOwnedRecommendationDisclaimer(block.disclaimer)}
        </p>
      </section>
    );
  }
  if (block.kind === "evidence_reserves") {
    const heading = honestBlockTitle("evidence_reserves", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintEvidence}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="evidence_reserves" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        {block.evidenceItems.length > 0 ? (
          <>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("observed_evidence")}
            </p>
            <ul className={styles.itemList}>
              {block.evidenceItems.map((item, i) => (
                <li key={`${key}-e${i}`}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        {block.reserveItems.length > 0 ? (
          <>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("reserve_uncertainty")}
            </p>
            <ul className={styles.itemList}>
              {block.reserveItems.map((item, i) => (
                <li key={`${key}-r${i}`}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
      </section>
    );
  }
  return (
    <p key={key} className={styles.traceNote}>
      {block.text}
    </p>
  );
}

export type NoraAdaptivePresentationViewProps = {
  presentation: NoraAdaptivePresentation;
  /**
   * Durable Studio control appendix (`[Studio] …`) — shown under adaptive
   * blocks so server notices are never masked by the DTO.
   */
  studioAppendix?: string | null;
  /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
  fallbackText?: string;
};

/**
 * Bounded adaptive renderer for Nora Option C presentation DTO.
 * No Product CTAs, no HTML injection, no governed action hooks.
 * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
 */
export function NoraAdaptivePresentationView({
  presentation,
  studioAppendix = null,
}: NoraAdaptivePresentationViewProps): ReactElement {
  const appendix = (studioAppendix ?? "").trim();
  return (
    <div
      className={styles.root}
      data-testid="nora-adaptive-presentation"
      data-presentation-version={presentation.version}
    >
      {presentation.eyebrow ? (
        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
      ) : null}
      {presentation.title ? (
        <h3 className={styles.title}>{presentation.title}</h3>
      ) : null}
      {presentation.lead ? (
        <p className={styles.lead}>{presentation.lead}</p>
      ) : null}
      <div className={styles.blocks}>
        {presentation.blocks.map((block, index) => renderBlock(block, index))}
      </div>
      <p
        className={styles.epistemicHonesty}
        data-testid="nora-adaptive-epistemic-honesty"
      >
        {NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE}
      </p>
      {(() => {
        const note = sanitizeProvenanceNote(presentation.provenanceNote);
        return note ? (
          <p className={styles.provenance}>{note}</p>
        ) : null;
      })()}
      <p className={styles.noAction}>
        {NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE}
      </p>
      {appendix ? (
        <div
          className={styles.studioAppendix}
          role="status"
          data-testid="nora-adaptive-studio-appendix"
        >
          {appendix.split(/\n\n+/).map((para, i) => (
            <p key={`studio-${i}`} className={styles.studioAppendixLine}>
              {para}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
