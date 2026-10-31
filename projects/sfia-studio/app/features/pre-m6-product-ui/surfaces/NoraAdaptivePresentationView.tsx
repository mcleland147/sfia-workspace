"use client";

import type { ReactElement, ReactNode } from "react";
import type {
  NoraAdaptivePresentation,
  NoraAdaptivePresentationBlock,
  NoraCanonicalFallbackSegment,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  honestBlockTitle,
  honestEpistemicLabel,
  sanitizePresentationEyebrow,
  sanitizeProvenanceNote,
  shouldDisplayPresentationLead,
  splitPlainTextWithMarkdownTables,
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

function ProjectionChrome({
  presentation,
}: {
  presentation: NoraAdaptivePresentation;
}): ReactElement {
  const showLead = shouldDisplayPresentationLead(presentation);
  // Defense-in-depth: sanitize even if a typed DTO skipped parse (EYEBROW-01).
  const safeEyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
  return (
    <>
      {safeEyebrow ? (
        <p className={styles.eyebrow}>{safeEyebrow}</p>
      ) : null}
      {presentation.title ? (
        <h3 className={styles.title}>{presentation.title}</h3>
      ) : null}
      {showLead && presentation.lead ? (
        <p className={styles.lead}>{presentation.lead}</p>
      ) : null}
      <div className={styles.blocks}>
        {presentation.blocks.map((block, index) => renderBlock(block, index))}
      </div>
    </>
  );
}

export type NoraAdaptivePresentationViewProps = {
  presentation: NoraAdaptivePresentation;
  /**
   * Durable Studio control appendix (`[Studio] …`) — shown under adaptive
   * blocks so server notices are never masked by the DTO.
   */
  studioAppendix?: string | null;
  /**
   * @deprecated Dual canonical layer removed (D1 single-response). Ignored.
   */
  canonicalNarrative?: string | null;
  /**
   * @deprecated Dual composition removed. Ignored — A1 is projection-only.
   */
  forceCanonicalFirst?: boolean;
  /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
  fallbackText?: string;
};

/**
 * Bounded adaptive renderer for Nora Option C — A1 structured-first.
 * Single surface: no "Réponse complète" + secondary projection dual.
 * No Product CTAs, no HTML injection, no governed action hooks.
 */
export function NoraAdaptivePresentationView({
  presentation,
  studioAppendix = null,
}: NoraAdaptivePresentationViewProps): ReactElement {
  const appendix = (studioAppendix ?? "").trim();
  const body: ReactNode = <ProjectionChrome presentation={presentation} />;
  const note = sanitizeProvenanceNote(presentation.provenanceNote);

  return (
    <div
      className={styles.root}
      data-testid="nora-adaptive-presentation"
      data-presentation-version={presentation.version}
      data-canonical-layer="none"
      data-composition="structured-first"
    >
      {body}
      {note ? <p className={styles.provenance}>{note}</p> : null}
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

function FallbackTextSegment({ text }: { text: string }): ReactElement | null {
  // Caller applies CR-03 / formatNoraAssistantDisplayText before plainText.
  if (!text.trim()) return null;
  return (
    <>
      {text.split(/\n\n+/).map((para, i) => (
        <p key={`fb-p-${i}`} className={styles.plain}>
          {para}
        </p>
      ))}
    </>
  );
}

function FallbackTableSegment({
  segment,
}: {
  segment: Extract<NoraCanonicalFallbackSegment, { kind: "table" }>;
}): ReactElement {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table} data-testid="nora-canonical-fallback-table">
        <thead>
          <tr>
            {segment.columns.map((col, i) => (
              <th key={`fb-th-${i}`} scope="col">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {segment.rows.map((row, ri) => (
            <tr key={`fb-tr-${ri}`}>
              {row.map((cell, ci) => (
                <td key={`fb-td-${ri}-${ci}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type NoraCanonicalFallbackViewProps = {
  plainText: string;
  /** Durable Studio appendix under the single main surface. */
  studioAppendix?: string | null;
};

/**
 * CORR-NAP-LIVE-RENDER-01 — fallback B single surface.
 * Readable GFM tables when present; otherwise plain paragraphs.
 * No Option C invention, no recommendation dedupe, no Product CTA.
 */
export function NoraCanonicalFallbackView({
  plainText,
  studioAppendix = null,
}: NoraCanonicalFallbackViewProps): ReactElement {
  const segments = splitPlainTextWithMarkdownTables(plainText);
  const appendix = (studioAppendix ?? "").trim();
  const hasTable = segments.some((s) => s.kind === "table");

  return (
    <div
      className={styles.root}
      data-testid="nora-canonical-fallback"
      data-composition="canonical-fallback"
      data-fallback-tables={hasTable ? "true" : "false"}
    >
      {segments.map((seg, i) =>
        seg.kind === "table" ? (
          <FallbackTableSegment key={`fb-seg-${i}`} segment={seg} />
        ) : (
          <FallbackTextSegment key={`fb-seg-${i}`} text={seg.text} />
        ),
      )}
      {appendix ? (
        <div
          className={styles.studioAppendix}
          role="status"
          data-testid="nora-canonical-fallback-studio-appendix"
        >
          {appendix.split(/\n\n+/).map((para, i) => (
            <p key={`studio-fb-${i}`} className={styles.studioAppendixLine}>
              {para}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
