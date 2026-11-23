"use client";

/**
 * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
 * Four tabs covering nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
 */

import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

const TAB_RUBRICS: Record<string, Array<D8Rubric["key"]>> = {
  synthese: ["resume", "prevu", "realise"],
  evaluation: ["evaluation", "ecarts", "impact"],
  verdict: ["verdict", "recommandations"],
  sources: ["sources"],
};

export function RealizationBilan(props: {
  attemptId: string;
  verdict: string;
  rubrics: D8Rubric[];
  limits: string[];
  noraAnalysisMarkdown?: string | null;
  activeTab: keyof typeof TAB_RUBRICS;
  onTabChange: (tab: keyof typeof TAB_RUBRICS) => void;
  onDiscussWithNora?: () => void;
}) {
  const byKey = new Map(props.rubrics.map((r) => [r.key, r]));
  const keys = TAB_RUBRICS[props.activeTab] ?? [];
  return (
    <div
      className="fig-realization-bilan"
      data-testid="realization-bilan"
      data-attempt-id={props.attemptId}
      data-verdict={props.verdict}
    >
      <header>
        <p className="fig-kicker !mb-0">RÉSULTATS ET PREUVES  /  D8</p>
        <h2 className="fig-inspector-title">Bilan de réalisation</h2>
        <p className="fig-travail-viewer-meta">
          Verdict D8: {props.verdict} — distinct de l&apos;avis Nora et de la réception D6
        </p>
      </header>
      <nav data-testid="bilan-tabs" className="fig-bilan-tabs">
        {(Object.keys(TAB_RUBRICS) as Array<keyof typeof TAB_RUBRICS>).map((tab) => (
          <button
            key={tab}
            type="button"
            className={props.activeTab === tab ? "btn" : "btn secondary"}
            data-testid={`bilan-tab-${tab}`}
            onClick={() => props.onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <section data-testid="bilan-rubrics">
        {keys.map((k) => {
          const r = byKey.get(k);
          if (!r) return null;
          return (
            <article key={k} data-testid={`bilan-rubric-${k}`}>
              <h3>
                {r.title}{" "}
                <span data-coverage={r.coverage}>[{r.coverage}]</span>
              </h3>
              <p>{r.content}</p>
            </article>
          );
        })}
      </section>
      {props.limits.length > 0 ? (
        <section data-testid="bilan-limits">
          <h3>Limites</h3>
          <ul>
            {props.limits.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {props.noraAnalysisMarkdown ? (
        <section data-testid="bilan-nora-analysis">
          <h3>Analyse Nora (post-tentative)</h3>
          <pre>{props.noraAnalysisMarkdown}</pre>
        </section>
      ) : null}
      {props.onDiscussWithNora ? (
        <button
          type="button"
          className="btn secondary"
          data-testid="bilan-discuss-nora"
          onClick={props.onDiscussWithNora}
        >
          En discuter avec Nora
        </button>
      ) : null}
    </div>
  );
}
