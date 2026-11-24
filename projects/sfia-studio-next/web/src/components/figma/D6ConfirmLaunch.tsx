"use client";

/**
 * ML5 C10 — HumanDecision D6 confirmation overlay (Oui / Non).
 * Shared by Travail 50/50 and Exécution. Reading ≠ authorizing.
 */

export function D6ConfirmLaunch(props: {
  contractKey: string;
  version: number;
  fingerprint: string;
  title?: string;
  busy?: boolean;
  onYes: () => void;
  onNo: () => void;
  onCancel?: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="d6-confirm-title"
      data-testid="d6-confirm-launch"
      className="fig-d6-confirm"
    >
      <div className="fig-d6-confirm-card">
        <p className="fig-kicker !mb-0">Autoriser l&apos;exécution dans Cursor</p>
        <h3 id="d6-confirm-title">
          Transmettre le contrat inspecté et lancer une tentative ?
        </h3>
        <p data-testid="d6-confirm-scope">
          Contrat{" "}
          <strong>
            {props.contractKey} v{props.version}
          </strong>
          {props.title ? ` — ${props.title}` : ""}. Aucun copier-coller : Studio
          transmettra l&apos;instruction figée à Cursor SDK.
        </p>
        <p className="fig-travail-viewer-meta" data-testid="d6-confirm-fingerprint">
          Empreinte inspectée : {props.fingerprint.slice(0, 16)}…
        </p>
        <p className="fig-travail-viewer-meta">
          Oui = HumanDecision D6 (mandat). Non = refus explicite, aucun dispatch.
          {props.onCancel ? " Annuler = fermer sans acte." : ""}
        </p>
        <div className="fig-d6-confirm-actions">
          {props.onCancel ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="d6-confirm-cancel"
              disabled={props.busy}
              onClick={props.onCancel}
            >
              Annuler
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="d6-confirm-no"
            disabled={props.busy}
            onClick={props.onNo}
          >
            Non
          </button>
          <button
            type="button"
            className="btn"
            data-testid="d6-confirm-yes"
            disabled={props.busy}
            onClick={props.onYes}
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
}
