"use client";

/**
 * ML5 — Contrat technique inspectable (frames 12.02 / 12.03 / 12.14).
 * Composition Figma: engagements 2×2 + six volets accordéon + instruction.
 * Reading / expanding instruction never authorizes execution.
 */

import { useState } from "react";

export type ContractViewerModel = {
  contractId: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  title: string;
  /** DRAFT | READY | … — D6 only when READY */
  status?: string;
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

const VOLET_META: Array<{
  key: keyof ContractViewerModel["volets"];
  label: string;
}> = [
  { key: "mission", label: "1 · Mission et résultats" },
  { key: "perimeter", label: "2 · Périmètre et effets" },
  { key: "capabilitiesAuthority", label: "3 · Cursor, outils et autorité" },
  { key: "stopConditions", label: "4 · Limites, STOP et réversibilité" },
  { key: "proofsSources", label: "5 · Tests, Git, handoff et preuves" },
  { key: "integrity", label: "6 · Version et transmission exacte" },
];

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
  const [openVolet, setOpenVolet] = useState<string | null>(null);

  return (
    <div
      className="fig-contract-viewer fig-contract-viewer--page12"
      data-testid="contract-viewer"
      data-contract-id={c.contractId}
      data-fingerprint={c.fingerprint}
      data-figma-frame="12.02"
    >
      <header className="fig-cv-head">
        <div className="fig-cv-head-row">
          <p className="fig-cv-kicker">
            VISIONNEUSE&nbsp;&nbsp;/&nbsp;&nbsp;CONTRAT V{c.version}
          </p>
          <button
            type="button"
            className="fig-cv-link"
            data-testid="contract-open-execution"
            onClick={props.onOpenInExecution}
          >
            Ouvrir dans Exécution ↗
          </button>
        </div>
        <h2 className="fig-cv-title" data-testid="contract-viewer-title">
          {c.title}
        </h2>
        <p className="fig-cv-meta" data-testid="contract-viewer-identity">
          Version {c.version}
          {c.status ? ` · ${c.status}` : ""} · {c.contractKey} · Cursor SDK ·
          mandat distinct
        </p>
      </header>

      <section
        data-testid="contract-engagements"
        className="fig-cv-engagements"
        aria-label="Engagements"
      >
        <article className="fig-cv-engagement-card">
          <p className="fig-cv-engagement-label">Ce qui sera fait</p>
          <p className="fig-cv-engagement-body">{c.engagements.willDo}</p>
        </article>
        <article className="fig-cv-engagement-card">
          <p className="fig-cv-engagement-label">Ce qui ne sera pas fait</p>
          <p className="fig-cv-engagement-body">{c.engagements.willNotDo}</p>
        </article>
        <article className="fig-cv-engagement-card">
          <p className="fig-cv-engagement-label">Résultat attendu</p>
          <p className="fig-cv-engagement-body">{c.engagements.expectedResult}</p>
        </article>
        <article className="fig-cv-engagement-card">
          <p className="fig-cv-engagement-label">Contrôle du Pilote</p>
          <p className="fig-cv-engagement-body">{c.engagements.pilotControl}</p>
        </article>
      </section>

      <p className="fig-cv-section-label">INSPECTION DU CONTRAT</p>
      <section
        data-testid="contract-volets"
        className="fig-cv-volets"
        aria-label="Volets d'inspection"
      >
        {VOLET_META.map((v) => {
          const open = openVolet === v.key;
          const body = c.volets[v.key];
          return (
            <div
              key={v.key}
              className="fig-cv-volet"
              data-testid={`contract-volet-${v.key}`}
              data-open={open ? "1" : "0"}
            >
              <button
                type="button"
                className="fig-cv-volet-toggle"
                aria-expanded={open}
                onClick={() => setOpenVolet(open ? null : v.key)}
              >
                <span className="fig-cv-volet-title">
                  <span aria-hidden>{open ? "▾" : "▸"}</span>
                  &nbsp;&nbsp;{v.label}
                </span>
                <span className="fig-cv-volet-plus" aria-hidden>
                  {open ? "−" : "+"}
                </span>
              </button>
              {open ? (
                <div className="fig-cv-volet-body">
                  <p>{body || "Contenu non renseigné."}</p>
                  {v.key === "integrity" ? (
                    <p className="fig-cv-meta">
                      Empreinte : {c.fingerprint}
                    </p>
                  ) : null}
                  {v.key === "stopConditions" &&
                  (c.risks.length > 0 || c.exclusions.length > 0) ? (
                    <p className="fig-cv-meta" data-testid="contract-risks">
                      Risques : {c.risks.join("; ") || "—"} · Exclusions :{" "}
                      {c.exclusions.join("; ") || "—"}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </section>

      <section
        data-testid="contract-instruction"
        className="fig-cv-instruction"
      >
        <button
          type="button"
          className="fig-cv-instruction-link"
          data-testid="contract-instruction-toggle"
          onClick={props.onToggleInstruction}
        >
          INSTRUCTION EXACTE V{c.version}&nbsp;&nbsp;/&nbsp;&nbsp;LIRE LE TEXTE
          INTÉGRAL →
        </button>
        {props.instructionExpanded ? (
          <pre
            className="fig-contract-instruction-full"
            data-testid="contract-instruction-full"
          >
            {c.instructionText}
          </pre>
        ) : (
          <p data-testid="contract-instruction-preview" className="fig-cv-meta">
            Aperçu non contractuel · consulter le texte complet avant
            autorisation.
            {c.instructionText
              ? ` ${c.instructionText.slice(0, 160)}${
                  c.instructionText.length > 160 ? "…" : ""
                }`
              : ""}
          </p>
        )}
      </section>

      <footer className="fig-cv-footer">
        <p className="fig-cv-meta">
          Version v{c.version} · empreinte {c.fingerprint.slice(0, 16)}…
        </p>
        <div className="fig-cv-footer-actions">
          <button
            type="button"
            className="btn secondary"
            data-testid="contract-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
          {props.onRequestExecute ? (
            <button
              type="button"
              className="btn"
              data-testid="contract-request-execute"
              disabled={props.executeDisabled}
              onClick={props.onRequestExecute}
            >
              Exécuter
            </button>
          ) : null}
        </div>
      </footer>
    </div>
  );
}
