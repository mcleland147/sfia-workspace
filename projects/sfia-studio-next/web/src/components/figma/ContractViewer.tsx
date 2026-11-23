"use client";

/**
 * ML5 — Contrat technique inspectable (frames 12.02 / 12.03 / 12.14).
 * Visual fidelity to Figma page 12 is verified separately (L0–F2).
 * Reading / expanding instruction never authorizes execution.
 */

export type ContractViewerModel = {
  contractId: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  title: string;
  engagements: {
    willDo: string;
    willNotDo: string;
    expectedResult: string;
    pilotControl: string;
  };
  volets: {
    mission: string;
    perimeter: string;
    capabilitiesAuthority: string;
    stopConditions: string;
    proofsSources: string;
    integrity: string;
  };
  instructionText: string;
  risks: string[];
  exclusions: string[];
};

export function ContractViewer(props: {
  contract: ContractViewerModel;
  instructionExpanded: boolean;
  onToggleInstruction: () => void;
  onClose: () => void;
  onOpenInExecution: () => void;
  onRequestExecute?: () => void;
  executeDisabled?: boolean;
}) {
  const c = props.contract;
  return (
    <div
      className="fig-contract-viewer"
      data-testid="contract-viewer"
      data-contract-id={c.contractId}
      data-fingerprint={c.fingerprint}
    >
      <header className="fig-travail-viewer-head">
        <div>
          <p className="fig-kicker !mb-0">CONTRAT TECHNIQUE  /  LECTURE SEULE</p>
          <h2 className="fig-inspector-title" data-testid="contract-viewer-title">
            {c.title}
          </h2>
          <p className="fig-travail-viewer-meta" data-testid="contract-viewer-identity">
            {c.contractKey} · v{c.version} · {c.fingerprint.slice(0, 12)}
          </p>
        </div>
        <div className="fig-travail-viewer-actions">
          <button
            type="button"
            className="btn secondary"
            data-testid="contract-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
        </div>
      </header>

      <section data-testid="contract-engagements" className="fig-contract-section">
        <h3>Engagements</h3>
        <dl>
          <dt>Ce qui sera fait</dt>
          <dd>{c.engagements.willDo}</dd>
          <dt>Ce qui ne sera pas fait</dt>
          <dd>{c.engagements.willNotDo}</dd>
          <dt>Résultat attendu</dt>
          <dd>{c.engagements.expectedResult}</dd>
          <dt>Contrôle du Pilote</dt>
          <dd>{c.engagements.pilotControl}</dd>
        </dl>
      </section>

      <section data-testid="contract-volets" className="fig-contract-section">
        <h3>Volets</h3>
        <ul>
          <li>
            <strong>Mission</strong> — {c.volets.mission}
          </li>
          <li>
            <strong>Périmètre</strong> — {c.volets.perimeter}
          </li>
          <li>
            <strong>Capacités / autorité</strong> — {c.volets.capabilitiesAuthority}
          </li>
          <li>
            <strong>STOP</strong> — {c.volets.stopConditions}
          </li>
          <li>
            <strong>Preuves / sources</strong> — {c.volets.proofsSources}
          </li>
          <li>
            <strong>Intégrité</strong> — {c.volets.integrity}
          </li>
        </ul>
      </section>

      {(c.risks.length > 0 || c.exclusions.length > 0) && (
        <section data-testid="contract-risks" className="fig-contract-section">
          <h3>Risques et exclusions</h3>
          <p>Risques: {c.risks.join("; ") || "—"}</p>
          <p>Exclusions: {c.exclusions.join("; ") || "—"}</p>
        </section>
      )}

      <section data-testid="contract-instruction" className="fig-contract-section">
        <div className="fig-travail-viewer-actions">
          <h3>Instruction technique</h3>
          <button
            type="button"
            className="btn secondary"
            data-testid="contract-instruction-toggle"
            onClick={props.onToggleInstruction}
          >
            {props.instructionExpanded ? "Replier" : "Lire intégralement"}
          </button>
        </div>
        {props.instructionExpanded ? (
          <pre
            className="fig-contract-instruction-full"
            data-testid="contract-instruction-full"
          >
            {c.instructionText}
          </pre>
        ) : (
          <p data-testid="contract-instruction-preview">
            {c.instructionText.slice(0, 280)}
            {c.instructionText.length > 280 ? "…" : ""}
          </p>
        )}
        <p className="fig-travail-viewer-meta">
          Lire ou déplier l&apos;instruction ne constitue jamais une autorisation.
        </p>
      </section>

      <footer className="fig-contract-footer">
        <button
          type="button"
          className="btn secondary"
          data-testid="contract-open-execution"
          onClick={props.onOpenInExecution}
        >
          Ouvrir dans Exécution
        </button>
        {props.onRequestExecute ? (
          <button
            type="button"
            className="btn"
            data-testid="contract-request-execute"
            disabled={props.executeDisabled}
            onClick={props.onRequestExecute}
          >
            Exécuter…
          </button>
        ) : null}
      </footer>
    </div>
  );
}
