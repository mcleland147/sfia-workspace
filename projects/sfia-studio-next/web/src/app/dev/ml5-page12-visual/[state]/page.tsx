"use client";

/**
 * C24 — DEV visual harness for Figma page 12 states (fixtures only).
 * Proves rendering; does not prove LIVE behavior.
 */

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ContractViewer } from "@/components/figma/ContractViewer";
import { D6ConfirmLaunch } from "@/components/figma/D6ConfirmLaunch";
import { NoraConversation } from "@/components/figma/NoraConversation";
import {
  RealizationBilan,
  type BilanTab,
} from "@/components/figma/RealizationBilan";
import {
  ML5_PAGE12_STATES,
  parseMl5Page12Fixture,
} from "@/components/figma/ml5-page12-visual-fixtures";

export default function Ml5Page12VisualHarnessPage() {
  const params = useParams<{ state: string }>();
  const fixture = useMemo(() => parseMl5Page12Fixture(params.state), [params.state]);
  const [tab, setTab] = useState<BilanTab>(fixture?.defaultTab ?? "synthese");
  const [draft, setDraft] = useState(fixture?.draft ?? "");
  const [dossier, setDossier] = useState(fixture?.dossierAttachment ?? null);
  const [instructionExpanded, setInstructionExpanded] = useState(
    fixture?.instructionExpanded === true,
  );

  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
    return (
      <p className="muted" data-testid="ml5-page12-visual-forbidden">
        Harness visuel page 12 indisponible hors DEV.
      </p>
    );
  }

  if (!fixture) {
    return (
      <div data-testid="ml5-page12-visual-unknown">
        <p className="muted">État inconnu. États : {ML5_PAGE12_STATES.join(", ")}</p>
      </div>
    );
  }

  const messages = (fixture.messages ?? []).map((m) => ({
    id: m.id,
    role: m.role,
    content: m.content,
    status: "COMPLETE",
  }));

  return (
    <div
      className="fig-page"
      data-testid="ml5-page12-visual"
      data-figma-frame={fixture.frame}
      data-figma-node={fixture.nodeId}
      data-ml5-page12-state={fixture.state}
      style={{ minHeight: "970px", background: "#0b101b", padding: "24px 38px" }}
    >
      <header className="fig-travail-intro" style={{ marginBottom: 18 }}>
        <p className="fig-kicker">{fixture.kicker}</p>
        <h1 className="fig-hero-title">{fixture.title}</h1>
        <p className="fig-hero-sub">{fixture.subtitle}</p>
      </header>

      {fixture.kind === "travail" || fixture.kind === "resume" ? (
        <NoraConversation
          messages={messages}
          draft={draft}
          onDraft={setDraft}
          onSend={() => undefined}
          busy={fixture.busy === true}
          activity={fixture.activity === "preparing" ? "preparing" : "idle"}
          dossierAttachment={dossier ?? undefined}
          onRemoveDossierAttachment={() => setDossier(null)}
        />
      ) : null}

      {fixture.kind === "contract" && fixture.contract ? (
        <ContractViewer
          contract={fixture.contract}
          instructionExpanded={instructionExpanded}
          onToggleInstruction={() => setInstructionExpanded((v) => !v)}
          onClose={() => undefined}
          onOpenInExecution={() => undefined}
        />
      ) : null}

      {fixture.kind === "confirm" && fixture.contract ? (
        <>
          <ContractViewer
            contract={fixture.contract}
            instructionExpanded={false}
            onToggleInstruction={() => undefined}
            onClose={() => undefined}
            onOpenInExecution={() => undefined}
          />
          <D6ConfirmLaunch
            contractKey={fixture.contract.contractKey}
            version={fixture.contract.version}
            fingerprint={fixture.contract.fingerprint}
            title={fixture.contract.title}
            onYes={() => undefined}
            onNo={() => undefined}
            onCancel={() => undefined}
          />
        </>
      ) : null}

      {fixture.kind === "execution" ? (
        <div className="fig-cursor-realization" data-mode="execution">
          <header>
            <p className="fig-kicker !mb-0">EXÉCUTION CURSOR</p>
            <h2 className="fig-inspector-title">{fixture.title}</h2>
            <p className="fig-travail-viewer-meta">{fixture.subtitle}</p>
          </header>
          <section data-testid="realization-attempts">
            <h3>Historique des interventions</h3>
            <ul>
              {(fixture.attempts ?? []).map((a) => (
                <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                  <span>
                    {a.status} · {a.terminalStatus} · {a.summary}
                    {a.ambiguous ? " · à réconcilier" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          {fixture.livePanel ? (
            <section data-testid="ml5-live-panel">
              <p className="fig-kicker">CURSOR SDK / ACTIVITÉ OBSERVÉE</p>
              <h3>La réalisation, en direct</h3>
              <p className="fig-travail-viewer-meta">{fixture.livePanel.note}</p>
              <ul>
                {fixture.livePanel.events.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="fig-travail-viewer-meta">
                STOP demandé ≠ arrêté · tests lancés ≠ tests PASS
              </p>
            </section>
          ) : null}
        </div>
      ) : null}

      {fixture.kind === "results" && fixture.bilan ? (
        <div className="fig-results-split" data-testid="results-split">
          <section className="fig-results-bilans-list">
            <div className="fig-results-bilans-head">
              <h3>Bilans disponibles</h3>
              <span className="fig-results-bilans-count">
                {(fixture.attempts ?? []).length} bilans
              </span>
            </div>
            <ul className="fig-results-bilans-ul">
              {(fixture.attempts ?? []).map((a, i) => (
                <li key={a.attemptId}>
                  <button
                    type="button"
                    className={
                      i === 0
                        ? "fig-results-bilan-card is-selected"
                        : "fig-results-bilan-card"
                    }
                  >
                    <span className="fig-results-bilan-kicker">
                      {a.attemptId} · {a.status}
                    </span>
                    <span className="fig-results-bilan-title">{a.summary}</span>
                    <span className="fig-results-bilan-meta">{a.terminalStatus}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <div className="fig-results-dossier">
            <RealizationBilan
              attemptId={fixture.bilan.attemptId}
              verdict={fixture.bilan.verdict}
              rubrics={fixture.bilan.rubrics}
              limits={fixture.bilan.limits}
              noraAnalysisMarkdown={fixture.bilan.noraAnalysisMarkdown}
              noraAnalysisKind={fixture.bilan.noraAnalysisKind}
              dossier={fixture.bilan.dossier}
              activeTab={tab}
              onTabChange={setTab}
              onDiscussWithNora={() => undefined}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
