"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import type { VsFinalAction, VsGateAction } from "@/lib/vertical-slice/types";
import styles from "@/components/vertical-slice/vs-panels.module.css";

const gateOptions: {
  action: VsGateAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "GO",
    title: "GO",
    subtitle: "Autoriser l'exécution sandbox après revalidation harness (mock)",
  },
  {
    action: "NO-GO",
    title: "NO-GO",
    subtitle: "Refuser l'exécution — clôture négative sans spawn",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Retour qualification — nouvelle consommation FinOps visible",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Action destructive — conséquence : cycle abandonné",
    danger: true,
  },
];

const finalOptions: {
  action: VsFinalAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "CLOTURER",
    title: "Accepter et clôturer",
    subtitle: "Clôture slice-only — aucun claim MVP",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Revoir le verdict candidat",
  },
  {
    action: "RELANCER",
    title: "Relancer sous nouveau GO",
    subtitle: "Ré-exécution uniquement avec nouveau GO",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Fin du cycle sans clôture positive",
    danger: true,
  },
];

export function VsDecisionScreen() {
  const {
    stateId,
    gateAction,
    selectGateAction,
    abandonConfirmOpen,
    closeAbandonConfirm,
    confirmAbandon,
    confirmGate,
    gateConfirmed,
    abandoned,
    selectFinalAction,
    finalAction,
    setStateId,
  } = useVsDemo();

  const isFinal = stateId === "VS-UX-09";
  const isGoInvalid = stateId === "VS-UX-VAR-GO-INVALID";
  const isGate = stateId === "VS-UX-04" || isGoInvalid;

  return (
    <div className={styles.panel} data-testid="vs-decision">
      <IdStrip />

      {isGoInvalid ? (
        <VariantBanner tone="warn" title="GO invalide — ancrage divergé">
          <p>
            HEAD fixture courant : <code>{vsFixture.headInvalidated.slice(0, 12)}…</code> ≠
            HEAD ancré : <code>{vsFixture.head.slice(0, 12)}…</code>
          </p>
          <p>
            contractHash / branche / allowlist doivent être revalidés. Nouveau gate
            requis. Ceci n&apos;est <strong>pas</strong> un Abandonner ni un NO-GO.
          </p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-04")}>
              Rouvrir le gate
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-decision-hero">
        <p className={styles.heroEyebrow}>
          {isFinal ? "DÉCISION MORRIS FINALE" : "GATE MORRIS · EXÉCUTION"}
        </p>
        <h2 id="vs-decision-hero" className={styles.heroTitle}>
          {isFinal
            ? "Décider de la clôture avec le verdict candidat"
            : "Décider avec le dossier d'ancrage — quatre actions distinctes"}
        </h2>
        <p className={styles.heroText}>
          STOP ≠ NO-GO ≠ Abandonner. Timeout ≠ GO. Aucune action Git distante.
        </p>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="vs-dossier-title">
          <p className={styles.fieldLabel}>DOSSIER DE DÉCISION (fixture)</p>
          <h2 id="vs-dossier-title" className={styles.cardTitle}>
            Ancrage GO — requestId / contrat / Git
          </h2>
          <p className={styles.fieldLabel}>requestId</p>
          <p className={styles.fieldValue}>{vsFixture.requestId}</p>
          <p className={styles.fieldLabel}>contractId / hash</p>
          <p className={styles.fieldValue}>
            {vsFixture.contractId} · {vsFixture.contractHash}
          </p>
          <p className={styles.fieldLabel}>Branche · HEAD</p>
          <p className={styles.fieldValue}>
            {vsFixture.branch} · {vsFixture.head}
          </p>
          <p className={styles.fieldLabel}>Allowlist</p>
          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
          <p className={styles.fieldLabel}>Autorité</p>
          <p className={styles.fieldValue}>{vsFixture.authority}</p>
          <p className={styles.fieldLabel}>Horodatage</p>
          <p className={styles.fieldValue}>
            {vsFixture.timestamp} ({vsFixture.timezone})
          </p>
          <p className={styles.muted}>Timeout ≠ GO (rappel affiché).</p>
          {!isFinal ? (
            <div className={styles.actions}>
              <CtaButton
                variant="secondary"
                onClick={() => setStateId("VS-UX-VAR-GO-INVALID")}
                data-testid="vs-simulate-go-invalid"
              >
                Simuler GO invalide
              </CtaButton>
            </div>
          ) : null}
        </section>

        <section
          className={styles.card}
          aria-labelledby="vs-morris-actions-title"
          data-testid="vs-morris-actions"
        >
          <p className={styles.fieldLabel}>Décision Morris — autorité humaine</p>
          <h2 id="vs-morris-actions-title" className={styles.cardTitle}>
            {isFinal ? "Décision finale" : "Quatre actions du gate"}
          </h2>

          {isGate ? (
            <div className={styles.optionGrid} role="group" aria-label="Actions gate Morris">
              {gateOptions.map((opt) => {
                const selected = gateAction === opt.action;
                const className = opt.danger
                  ? selected
                    ? styles.optionDangerSelected
                    : styles.optionDanger
                  : selected
                    ? styles.optionSelected
                    : styles.option;
                return (
                  <button
                    key={opt.action}
                    type="button"
                    className={className}
                    aria-pressed={selected}
                    data-testid={`vs-gate-${opt.action}`}
                    aria-label={
                      opt.action === "ABANDONNER"
                        ? "Abandonner le cycle"
                        : opt.title
                    }
                    onClick={() => selectGateAction(opt.action)}
                  >
                    <StatusPill tone={opt.danger ? "pink" : "blueFlush"}>
                      {opt.title}
                    </StatusPill>
                    <p className={styles.optionTitle}>{opt.title}</p>
                    <p className={styles.optionSub}>{opt.subtitle}</p>
                  </button>
                );
              })}
            </div>
          ) : null}

          {isFinal ? (
            <div className={styles.optionGrid} role="group" aria-label="Actions décision finale">
              {finalOptions.map((opt) => {
                const selected = finalAction === opt.action;
                const className = opt.danger
                  ? selected
                    ? styles.optionDangerSelected
                    : styles.optionDanger
                  : selected
                    ? styles.optionSelected
                    : styles.option;
                return (
                  <button
                    key={opt.action}
                    type="button"
                    className={className}
                    aria-pressed={selected}
                    data-testid={`vs-final-${opt.action}`}
                    aria-label={
                      opt.action === "ABANDONNER"
                        ? "Abandonner le cycle"
                        : opt.title
                    }
                    onClick={() => selectFinalAction(opt.action)}
                  >
                    <StatusPill tone={opt.danger ? "pink" : "greenFlush"}>
                      {opt.title}
                    </StatusPill>
                    <p className={styles.optionTitle}>{opt.title}</p>
                    <p className={styles.optionSub}>{opt.subtitle}</p>
                  </button>
                );
              })}
            </div>
          ) : null}

          {abandonConfirmOpen ? (
            <div
              className={styles.confirmBox}
              role="dialog"
              aria-modal="true"
              aria-labelledby="vs-abandon-confirm-title"
              data-testid="vs-abandon-confirm"
            >
              <p id="vs-abandon-confirm-title" className={styles.optionTitle}>
                Confirmer l&apos;abandon du cycle
              </p>
              <p className={styles.optionSub}>
                Conséquence explicite : état <strong>abandonné</strong>. Aucune
                écriture Git distante. Action destructive (danger textuel + visuel).
              </p>
              <div className={styles.actions}>
                <CtaButton
                  variant="danger"
                  onClick={confirmAbandon}
                  data-testid="vs-abandon-confirm-yes"
                  aria-label="Confirmer abandonner le cycle"
                >
                  Confirmer — Abandonner le cycle
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={closeAbandonConfirm}
                  data-testid="vs-abandon-confirm-no"
                >
                  Annuler
                </CtaButton>
              </div>
            </div>
          ) : null}

          {isGate && gateAction && gateAction !== "ABANDONNER" ? (
            <div className={styles.actions}>
              <CtaButton
                onClick={confirmGate}
                disabled={!gateAction}
                data-testid="vs-gate-confirm"
              >
                Confirmer {gateAction}
              </CtaButton>
            </div>
          ) : null}

          {gateConfirmed || abandoned ? (
            <p className={styles.muted} data-testid="vs-gate-result">
              {abandoned
                ? "Résultat fixture : cycle abandonné"
                : `Résultat fixture : ${gateAction} confirmé`}
            </p>
          ) : null}

          <p className={styles.muted}>
            Simulation Increment A — aucun effet Git / Cursor / GPT live.
          </p>
        </section>
      </div>
    </div>
  );
}
