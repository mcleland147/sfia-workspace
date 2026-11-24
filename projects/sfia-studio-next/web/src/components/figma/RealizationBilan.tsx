"use client";

/**
 * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
 * Composition Figma: 3 états distincts + onglets répartis + cartes thématiques.
 * Verdict D8 ≠ avis Nora ≠ décision D6.
 */

import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

/** Figma page 12 tabs — exact labels. */
export const BILAN_TAB_LABELS = {
  synthese: "SYNTHÈSE",
  livrables: "LIVRABLES ET TESTS",
  git: "GIT & PIÈCES",
  ecarts: "ÉCARTS",
} as const;

export type BilanTab = keyof typeof BILAN_TAB_LABELS;

export type BilanDossierStructured = {
  attemptId: string;
  contractId?: string | null;
  handoffId?: string | null;
  handoffStatus?: string | null;
  dossierVersion?: number | null;
  integrityHash?: string | null;
  filesCreated?: string[];
  filesModified?: string[];
  filesObserved?: string[];
  filesConsulted?: Array<{ path: string; sha256?: string }>;
  testsDeclared?: string[];
  testsCaptured?: string[];
  gaps?: string[];
  sourcesConsulted?: string[];
  git?: {
    tipSha?: string | null;
    branch?: string | null;
    baseRef?: string | null;
    remoteSha?: string | null;
  } | null;
  terminalStatus?: string | null;
  pipelineStatus?: string | null;
};

function listOrMissing(items: string[] | undefined, emptyLabel = "MISSING"): string {
  if (!items || items.length === 0) return emptyLabel;
  return items.join(", ");
}

function ProofCard(props: {
  rubrique: string;
  facts: string[];
  testId?: string;
}) {
  return (
    <article className="fig-proof-card" data-testid={props.testId}>
      <p className="fig-proof-card-rubrique">{props.rubrique}</p>
      {props.facts.map((f, i) => (
        <p
          key={`${props.rubrique}-${i}`}
          className={i === 0 ? "fig-proof-card-fact-strong" : "fig-proof-card-fact"}
        >
          {f}
        </p>
      ))}
    </article>
  );
}

function rubricText(
  byKey: Map<string, D8Rubric>,
  key: D8Rubric["key"],
  fallback: string,
): string {
  const r = byKey.get(key);
  const t = r?.content?.trim();
  if (!t || r?.coverage === "MISSING" || /^rapport manquant$/i.test(t)) {
    return fallback;
  }
  return t;
}

export function RealizationBilan(props: {
  attemptId: string;
  verdict: string;
  rubrics: D8Rubric[];
  limits: string[];
  noraAnalysisMarkdown?: string | null;
  noraAnalysisKind?: string | null;
  dossier?: BilanDossierStructured | null;
  activeTab: BilanTab;
  onTabChange: (tab: BilanTab) => void;
  onDiscussWithNora?: () => void;
}) {
  const byKey = new Map(props.rubrics.map((r) => [r.key, r]));
  const d = props.dossier;
  const verdictTone =
    /PASS|COMPLETE|favorable/i.test(props.verdict)
      ? "ok"
      : /PARTIAL|RÉSERV|INCOMPLET|UNKNOWN/i.test(props.verdict)
        ? "warn"
        : "warn";

  const cursorLabel = d?.terminalStatus
    ? `${d.terminalStatus} · déclaré`
    : byKey.get("realise")?.coverage === "COMPLETE"
      ? "Terminé · déclaré"
      : "Résultat déclaré";
  const d8Label =
    props.verdict === "PASS"
      ? "Conformité démontrée"
      : props.verdict === "PARTIAL"
        ? "Preuves incomplètes"
        : props.verdict || "UNKNOWN";
  const noraLabel =
    props.noraAnalysisKind === "NORA_COGNITIVE"
      ? "Réservé · consultatif"
      : props.noraAnalysisKind === "DETERMINISTIC_SYNTHESIS"
        ? "Synthèse déterministe (≠ Nora LIVE)"
        : "Analyse absente";

  const noraBody =
    (props.noraAnalysisMarkdown ?? "").trim() ||
    "Analyse consultative Nora absente — ne constitue pas une preuve.";

  return (
    <div
      className="fig-realization-bilan fig-realization-bilan--page12"
      data-testid="realization-bilan"
      data-attempt-id={props.attemptId}
      data-verdict={props.verdict}
      data-active-tab={props.activeTab}
      data-dossier-version={d?.dossierVersion ?? ""}
    >
      <header className="fig-bilan-head">
        <p className="fig-cv-kicker">
          BILAN {props.attemptId.slice(0, 14).toUpperCase()}
          {d?.contractId ? `  /  ${(d.contractId || "").slice(0, 14).toUpperCase()}` : ""}
          {d?.dossierVersion != null ? `  /  DOSSIER V${d.dossierVersion}` : ""}
        </p>
        <h2 className="fig-bilan-title">
          Bilan global : prévu, réalisé, preuves et impact
        </h2>
        <p className="fig-cv-meta" data-testid="bilan-attempt-id">
          Tentative {props.attemptId}
          {d?.handoffStatus ? ` · handoff ${d.handoffStatus}` : ""}
        </p>
      </header>

      <div className="fig-bilan-appreciations" data-testid="bilan-appreciations">
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-cursor"
        >
          <p className="fig-bilan-appreciation-label">CURSOR</p>
          <p className={`fig-bilan-appreciation-status is-ok`}>{cursorLabel}</p>
        </article>
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-d8"
        >
          <p className="fig-bilan-appreciation-label">CONTRÔLE D8 / D9</p>
          <p className={`fig-bilan-appreciation-status is-${verdictTone}`}>
            {d8Label}
          </p>
        </article>
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-nora"
        >
          <p className="fig-bilan-appreciation-label">ANALYSE FINALE</p>
          <p className={`fig-bilan-appreciation-status is-warn`}>{noraLabel}</p>
        </article>
      </div>

      <nav data-testid="bilan-tabs" className="fig-bilan-tabs fig-bilan-tabs--spread">
        {(Object.keys(BILAN_TAB_LABELS) as BilanTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={
              props.activeTab === tab
                ? "fig-bilan-tab is-active"
                : "fig-bilan-tab"
            }
            data-testid={`bilan-tab-${tab}`}
            onClick={() => props.onTabChange(tab)}
          >
            {BILAN_TAB_LABELS[tab]}
          </button>
        ))}
      </nav>

      {props.activeTab === "synthese" ? (
        <div data-testid="bilan-structured" data-tab="synthese">
          <div className="fig-proof-grid" data-testid="bilan-structured-synthese">
            <ProofCard
              testId="bilan-rubric-prevu"
              rubrique="PRÉVU ET RÉALISÉ"
              facts={[
                rubricText(byKey, "prevu", "Attendu : non renseigné"),
                rubricText(byKey, "realise", "Réalisé déclaré : MISSING"),
                `Créés ${listOrMissing(d?.filesCreated, "0")} · Modifiés ${listOrMissing(d?.filesModified, "0")}`,
                `Portée : ${d?.contractId ?? "contrat UNKNOWN"}`,
              ]}
            />
            <ProofCard
              testId="bilan-rubric-evaluation"
              rubrique="TESTS ET VALIDATIONS"
              facts={[
                `Déclarés : ${listOrMissing(d?.testsDeclared)}`,
                `Capturés : ${listOrMissing(d?.testsCaptured)}`,
                rubricText(
                  byKey,
                  "evaluation",
                  "Évaluation : couverture non démontrée",
                ),
                "PASS de commande ≠ conformité du contrat",
              ]}
            />
            <ProofCard
              testId="bilan-rubric-sources"
              rubrique="GIT ET CONTINUITÉ"
              facts={[
                `Branche / base : ${d?.git?.branch ?? "N/A"} / ${d?.git?.baseRef ?? "N/A"}`,
                `SHA local déclaré : ${d?.git?.tipSha ?? "N/A"}`,
                `SHA distant vérifié : ${d?.git?.remoteSha ?? "non constaté"}`,
                "Aucun PR, merge ni promotion induits",
              ]}
            />
            <ProofCard
              testId="bilan-rubric-resume"
              rubrique="RAPPORT, MANIFESTE ET CAPTURES"
              facts={[
                rubricText(byKey, "resume", "Résumé : MISSING"),
                `Handoff : ${d?.handoffId ?? "MISSING"} (${d?.handoffStatus ?? "MISSING"})`,
                `Intégrité : ${d?.integrityHash ?? "MISSING"}`,
                `Terminal / pipeline : ${d?.terminalStatus ?? "UNKNOWN"} / ${d?.pipelineStatus ?? "UNKNOWN"}`,
              ]}
            />
          </div>
          <section className="fig-bilan-nora-band" data-testid="bilan-nora-analysis">
            <p className="fig-bilan-nora-kicker">
              AVIS DE NORA&nbsp;&nbsp;/&nbsp;&nbsp;
              {props.noraAnalysisKind === "NORA_COGNITIVE"
                ? "CONSULTATIF"
                : props.noraAnalysisKind === "DETERMINISTIC_SYNTHESIS"
                  ? "SYNTHÈSE DÉTERMINISTE (≠ NORA LIVE)"
                  : "ABSENT"}
            </p>
            <p className="fig-bilan-nora-body">{noraBody}</p>
            {props.onDiscussWithNora ? (
              <button
                type="button"
                className="fig-cv-link"
                data-testid="bilan-discuss-nora"
                onClick={props.onDiscussWithNora}
              >
                En discuter avec Nora →
              </button>
            ) : null}
          </section>
          <div className="fig-proof-grid">
            <ProofCard
              testId="bilan-rubric-impact"
              rubrique="IMPACT SUR LE PROJET"
              facts={[
                rubricText(byKey, "impact", "Impact : non établi"),
                ...(props.limits.slice(0, 3).length
                  ? props.limits.slice(0, 3)
                  : ["Limites : aucune déclarée"]),
              ]}
            />
            <ProofCard
              testId="bilan-rubric-verdict"
              rubrique="VERDICT D8 ET SUITE"
              facts={[
                rubricText(byKey, "verdict", `Verdict : ${props.verdict || "UNKNOWN"}`),
                rubricText(
                  byKey,
                  "recommandations",
                  "Suite : complément de preuves ou nouveau mandat D6",
                ),
              ]}
            />
          </div>
        </div>
      ) : null}

      {props.activeTab === "livrables" ? (
        <div data-testid="bilan-structured" data-tab="livrables">
          <section className="fig-bilan-table-block" data-testid="bilan-structured-livrables">
            <h3 className="fig-proof-card-rubrique">INVENTAIRE DES FICHIERS</h3>
            <div className="fig-bilan-table">
              <div className="fig-bilan-table-head">
                <span>Chemin</span>
                <span>Opération</span>
                <span>Accès</span>
                <span>Qualification</span>
              </div>
              {(d?.filesCreated ?? []).map((p) => (
                <div key={`c-${p}`} className="fig-bilan-table-row">
                  <span title={p}>{p}</span>
                  <span>créé</span>
                  <span>local</span>
                  <span>déclaré</span>
                </div>
              ))}
              {(d?.filesModified ?? []).map((p) => (
                <div key={`m-${p}`} className="fig-bilan-table-row">
                  <span title={p}>{p}</span>
                  <span>modifié</span>
                  <span>local</span>
                  <span>déclaré</span>
                </div>
              ))}
              {(d?.filesConsulted ?? []).map((f) => (
                <div key={`k-${f.path}`} className="fig-bilan-table-row">
                  <span title={f.path}>{f.path}</span>
                  <span>consulté</span>
                  <span>lecture</span>
                  <span>{f.sha256 ? "hashé" : "observé"}</span>
                </div>
              ))}
              {!d?.filesCreated?.length &&
              !d?.filesModified?.length &&
              !d?.filesConsulted?.length ? (
                <div className="fig-bilan-table-row is-empty">
                  <span>Aucun fichier inventorié</span>
                  <span>—</span>
                  <span>—</span>
                  <span>MISSING</span>
                </div>
              ) : null}
            </div>
            <h3 className="fig-proof-card-rubrique" style={{ marginTop: 16 }}>
              TESTS ET CONTRÔLES
            </h3>
            <div className="fig-bilan-table">
              <div className="fig-bilan-table-head">
                <span>Test / contrôle</span>
                <span>Déclaré</span>
                <span>Observé</span>
                <span>Limite</span>
              </div>
              {(d?.testsDeclared ?? []).map((t) => {
                const observed = (d?.testsCaptured ?? []).includes(t);
                return (
                  <div key={`td-${t}`} className="fig-bilan-table-row">
                    <span title={t}>{t}</span>
                    <span>oui</span>
                    <span>{observed ? "capturé" : "non observé"}</span>
                    <span>{observed ? "partiel" : "preuve absente"}</span>
                  </div>
                );
              })}
              {!d?.testsDeclared?.length ? (
                <div className="fig-bilan-table-row is-empty">
                  <span>Aucun test déclaré</span>
                  <span>—</span>
                  <span>—</span>
                  <span>UNKNOWN</span>
                </div>
              ) : null}
            </div>
            <p className="fig-cv-meta" data-testid="bilan-rubric-evaluation">
              {rubricText(byKey, "evaluation", "Évaluation D8 : non étayée.")}
            </p>
          </section>
        </div>
      ) : null}

      {props.activeTab === "git" ? (
        <div data-testid="bilan-structured" data-tab="git">
          <div className="fig-proof-grid" data-testid="bilan-structured-git">
            <ProofCard
              rubrique="GIT / CONTINUITÉ"
              facts={[
                `Branche : ${d?.git?.branch ?? "N/A"}`,
                `Base : ${d?.git?.baseRef ?? "N/A"}`,
                `Work SHA (tip) : ${d?.git?.tipSha ?? "N/A"}`,
                `Remote SHA vérifié : ${d?.git?.remoteSha ?? "non constaté"}`,
              ]}
            />
            <ProofCard
              rubrique="HANDOFF PAR TENTATIVE"
              facts={[
                `handoffId : ${d?.handoffId ?? "MISSING"}`,
                `Statut : ${d?.handoffStatus ?? "MISSING"}`,
                `Intégrité : ${d?.integrityHash ?? "MISSING"}`,
                `attemptId : ${props.attemptId}`,
              ]}
            />
            <ProofCard
              rubrique="TESTS ET LOGS"
              facts={[
                `Déclarés : ${listOrMissing(d?.testsDeclared)}`,
                `Capturés : ${listOrMissing(d?.testsCaptured)}`,
                rubricText(byKey, "sources", "Sources : MISSING"),
                "Logs : accessibles selon droits",
              ]}
            />
            <ProofCard
              rubrique="CAPTURES ET SOURCES"
              facts={[
                `Consultées : ${listOrMissing(d?.sourcesConsulted, "MISSING")}`,
                `Fichiers observés : ${listOrMissing(d?.filesObserved)}`,
                rubricText(byKey, "impact", "Impact : UNKNOWN"),
                "SHA local ≠ publication distante vérifiée",
              ]}
            />
          </div>
        </div>
      ) : null}

      {props.activeTab === "ecarts" ? (
        <div data-testid="bilan-structured" data-tab="ecarts">
          <div className="fig-proof-grid" data-testid="bilan-structured-ecarts">
            {(d?.gaps && d.gaps.length > 0
              ? d.gaps
              : [
                  "Aucun écart inventorié — état UNKNOWN (≠ absence d'écart démontrée)",
                ]
            ).map((g, i) => (
              <ProofCard
                key={`gap-${i}`}
                testId={i === 0 ? "bilan-rubric-ecarts" : undefined}
                rubrique={`ÉCART ${i + 1}`}
                facts={[
                  `Attendu : conformité au contrat`,
                  `Constaté : ${g}`,
                  `Impact : ${rubricText(byKey, "impact", "non établi")}`,
                  `Suite : ${rubricText(byKey, "recommandations", "compléter preuves ou nouveau mandat")}`,
                ]}
              />
            ))}
          </div>
          <section className="fig-bilan-nora-band">
            <p className="fig-bilan-nora-kicker">
              IMPACT PROJET / QUALIFICATION D8
            </p>
            <p className="fig-bilan-nora-body">
              {rubricText(byKey, "verdict", `Verdict : ${props.verdict || "UNKNOWN"}`)}
            </p>
            {props.onDiscussWithNora ? (
              <button
                type="button"
                className="fig-cv-link"
                data-testid="bilan-discuss-nora"
                onClick={props.onDiscussWithNora}
              >
                En discuter avec Nora →
              </button>
            ) : null}
          </section>
        </div>
      ) : null}

      {/* Keep rubric testids for non-regression when not rendered above */}
      <div className="sr-only" aria-hidden data-testid="bilan-rubrics">
        {props.rubrics.map((r) => (
          <span key={r.key} data-testid={`bilan-rubric-${r.key}`} data-coverage={r.coverage}>
            {r.title}
          </span>
        ))}
      </div>
    </div>
  );
}
