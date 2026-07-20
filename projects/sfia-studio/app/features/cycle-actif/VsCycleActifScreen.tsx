"use client";

import { useCallback, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  FinOpsBox,
  HarnessStatusPanel,
  IdStrip,
  VariantBanner,
} from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { runIncrementDAction } from "@/lib/harness/incrementDAction";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

const stepMap: Record<string, number> = {
  "VS-UX-05": 5,
  "VS-UX-06": 6,
  "VS-UX-07": 7,
  "VS-UX-08": 8,
  "VS-UX-VAR-STOP": 5,
  "VS-UX-VAR-LOADING": 7,
  "VS-UX-VAR-ERROR": 7,
};

interface IncDReportView {
  status?: string;
  contractId?: string;
  contractHash?: string;
  expectedBranch?: string;
  actualBranch?: string;
  expectedHead?: string;
  actualHead?: string;
  allowlistedWritePaths?: string[];
  durationMs?: number;
  timeout?: boolean;
  stopRequested?: boolean;
  filesCreated?: string[];
  filesModified?: string[];
  remoteGitWrites?: number;
  reservations?: string[];
  analysisAuthorized?: boolean;
  mode?: string;
  realCursorProcessInvoked?: boolean;
  s1ContractCursorMode?: string;
}

interface IncDResultView {
  ok?: boolean;
  status?: string;
  report?: IncDReportView;
  liveInvoked?: boolean;
  markdownContent?: string;
  refusedBeforeSpawn?: boolean;
}

export function VsCycleActifScreen() {
  const { stateId, setStateId, fireStop, stopFired } = useVsDemo();
  const activeStep = stepMap[stateId] ?? 5;
  const [busy, setBusy] = useState(false);
  const [incD, setIncD] = useState<IncDResultView | null>(null);

  const report = incD?.report;

  const runIncDFixture = useCallback(async () => {
    setBusy(true);
    setStateId("VS-UX-VAR-LOADING");
    try {
      const raw = (await runIncrementDAction({
        requestId: `req-inc-d-ui-${Date.now()}`,
        correlationId: `corr-inc-d-ui-${Date.now()}`,
        contractId: "ctr-inc-d-ui",
        mode: "fixture",
        mintGate: true,
        fakeBehavior: "success",
      })) as IncDResultView;
      setIncD(raw);
      if (raw.ok) setStateId("VS-UX-06");
      else if (raw.status === "STOPPED") setStateId("VS-UX-VAR-STOP");
      else setStateId("VS-UX-VAR-ERROR");
    } finally {
      setBusy(false);
    }
  }, [setStateId]);

  return (
    <div className={styles.panel} data-testid="vs-cycle-actif">
      <IdStrip />
      <HarnessStatusPanel />

      {stateId === "VS-UX-VAR-STOP" || stopFired || report?.stopRequested ? (
        <VariantBanner tone="stop" title="STOP Morris — prioritaire">
          <p>
            Exécution <strong>stoppée</strong> via harness. STOP ≠ NO-GO ≠ Abandonner.
            Event journalisé. Reprise éventuelle sous <strong>nouveau GO</strong> uniquement.
          </p>
          <p className={styles.muted} data-testid="vs-inc-d-stop-banner">
            Source statut = harness · Increment D / fixture · {vsFixture.timestamp}
          </p>
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-LOADING" || busy ? (
        <VariantBanner tone="info" title="Exécution Cursor sandbox">
          <p className={styles.loadingPulse} role="status" aria-live="polite" data-testid="vs-inc-d-running">
            <span className={styles.loadingDot} aria-hidden />
            Revalidation GO → spawn Cursor sandbox — fail-closed
          </p>
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-ERROR" ? (
        <VariantBanner tone="error" title="Échec / refus Increment D">
          <p data-testid="vs-inc-d-error">
            {incD?.status ?? "REFUSED"} — aucun succès implicite. timeout ≠ GO.
          </p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-07")}>
              Relancer analyse (mock)
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-cycle-hero">
        <p className={styles.heroEyebrow}>CYCLE ACTIF · INCREMENT D · ÉTATS 05–08</p>
        <h2 id="vs-cycle-hero" className={styles.heroTitle}>
          {stateId === "VS-UX-06"
            ? "Rapport Cursor / harness disponible"
            : stateId === "VS-UX-07"
              ? "Analyse GPT — Increment E non disponible"
              : stateId === "VS-UX-08"
                ? "Verdict GPT candidat proposé"
                : "Exécution Cursor sandbox Markdown"}
        </h2>
        <p className={styles.heroText}>
          GO revalidé avant spawn · allowlist mono-fichier · remote Git writes = 0 ·
          aucune 5e route.
        </p>
      </section>

      <nav className={styles.card} aria-label="Étapes vertical slice 05 à 08">
        <div className={styles.actions}>
          {(["VS-UX-05", "VS-UX-06", "VS-UX-07", "VS-UX-08"] as const).map(
            (id, index) => (
              <CtaButton
                key={id}
                variant={stateId === id ? "primary" : "secondary"}
                onClick={() => setStateId(id)}
                aria-current={stateId === id ? "step" : undefined}
              >
                {index + 5}. {id.replace("VS-UX-0", "")}
              </CtaButton>
            ),
          )}
        </div>
        <p className={styles.muted}>Étape active : {activeStep}</p>
      </nav>

      <div className={styles.twoCol}>
        <section className={styles.card}>
          {stateId === "VS-UX-05" || stateId === "VS-UX-VAR-STOP" ? (
            <>
              <StatusPill tone="blueFlush">
                {busy ? "exécution en cours" : "prêt / stoppable"}
              </StatusPill>
              <p className={styles.fieldValue}>
                Sandbox : <code>projects/sfia-studio/.sandbox/increment-d/output.md</code>
              </p>
              <p className={styles.muted} data-testid="vs-inc-d-remote-zero">
                Remote Git writes attendus = 0 · networkEffect = none
              </p>
              <div className={styles.actions}>
                <CtaButton
                  data-testid="vs-inc-d-run-fixture"
                  onClick={() => void runIncDFixture()}
                  disabled={busy}
                >
                  Lancer sandbox fixture (harness)
                </CtaButton>
                <CtaButton onClick={() => setStateId("VS-UX-06")}>
                  Simuler fin d&apos;exécution
                </CtaButton>
                <CtaButton
                  variant="danger"
                  onClick={fireStop}
                  aria-label="STOP Morris pendant exécution"
                  data-testid="vs-stop-execution"
                >
                  STOP Morris
                </CtaButton>
              </div>
            </>
          ) : null}

          {stateId === "VS-UX-06" ? (
            <>
              <p className={styles.cardTitle}>
                {report
                  ? "CursorExecutionReport"
                  : "CursorExecutionReport (fixture)"}
              </p>
              <p className={styles.fieldLabel}>Process mode (autorité harness)</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-process-mode">
                processMode={report?.mode ?? "fixture"}
                {" · "}
                realCursor=
                {report?.realCursorProcessInvoked === true
                  ? "true"
                  : report
                    ? "false"
                    : "n/a (demo fixture)"}
                {" · "}
                s1.cursorMode=fixture (schema PolicyEngine only — not process)
              </p>
              <p className={styles.fieldLabel}>Statut</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-status">
                {report?.status ?? vsFixture.report.status}
              </p>
              <p className={styles.fieldLabel}>Contract / hash</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-contract">
                {report?.contractId ?? vsFixture.contractId} ·{" "}
                {(report?.contractHash ?? vsFixture.contractHash).slice(0, 16)}…
              </p>
              <p className={styles.fieldLabel}>Branche / HEAD</p>
              <p className={styles.fieldValue}>
                {report?.actualBranch ?? vsFixture.branch} ·{" "}
                {(report?.actualHead ?? vsFixture.head).slice(0, 12)}…
              </p>
              <p className={styles.fieldLabel}>Allowlist</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-allowlist">
                {(report?.allowlistedWritePaths ?? vsFixture.allowlist).join(", ")}
              </p>
              <p className={styles.fieldLabel}>Fichiers touchés</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-files">
                {[...(report?.filesCreated ?? []), ...(report?.filesModified ?? [])].join(", ") ||
                  vsFixture.report.filesTouched.join(", ")}
              </p>
              <p className={styles.fieldLabel}>Remote writes</p>
              <p className={styles.fieldValue} data-testid="vs-inc-d-remote">
                {report?.remoteGitWrites ?? vsFixture.report.remoteWrites}
              </p>
              <p className={styles.fieldLabel}>Durée</p>
              <p className={styles.fieldValue}>{report?.durationMs ?? "—"} ms</p>
              <p className={styles.fieldLabel}>Aperçu sanitisé</p>
              <pre className={styles.fieldValue} data-testid="vs-inc-d-preview">
                {(incD?.markdownContent ?? vsFixture.report.markdownPreview).slice(0, 600)}
              </pre>
              <p className={styles.muted} data-testid="vs-inc-d-source">
                Source statut = harness / preuves · mode={report?.mode ?? "fixture"}
                {report?.realCursorProcessInvoked
                  ? " · Cursor réel invoqué"
                  : ""}
              </p>
              <div className={styles.actions}>
                <CtaButton
                  disabled
                  title="Increment E non disponible"
                  data-testid="vs-inc-d-analyze-disabled"
                  aria-disabled
                >
                  Lancer analyse GPT (Increment E non disponible)
                </CtaButton>
                <CtaButton onClick={() => setStateId("VS-UX-07")}>
                  Lancer analyse GPT (mock)
                </CtaButton>
              </div>
            </>
          ) : null}

          {stateId === "VS-UX-07" ? (
            <>
              <FinOpsBox phase="analyse" calls={0} />
              <p className={styles.muted}>Increment E / analyse GPT réelle — hors périmètre.</p>
              <div className={styles.actions}>
                <CtaButton onClick={() => setStateId("VS-UX-08")}>
                  Simuler verdict OK
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={() => setStateId("VS-UX-VAR-ERROR")}
                >
                  Simuler verdict invalide
                </CtaButton>
                <CtaButton
                  variant="danger"
                  onClick={fireStop}
                  aria-label="STOP Morris pendant exécution"
                  data-testid="vs-stop-execution"
                >
                  STOP Morris
                </CtaButton>
              </div>
            </>
          ) : null}

          {stateId === "VS-UX-VAR-LOADING" && busy ? (
            <p className={styles.muted} role="status" aria-live="polite">
              Harness : revalidation + spawn fixture en cours…
            </p>
          ) : null}

          {stateId === "VS-UX-08" ? (
            <>
              <StatusPill tone="purple">{vsFixture.verdict.label}</StatusPill>
              <p className={styles.fieldLabel}>Prouvé</p>
              <ul className={styles.list}>
                {vsFixture.verdict.proven.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.fieldLabel}>Non prouvé</p>
              <ul className={styles.list}>
                {vsFixture.verdict.notProven.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.fieldLabel}>Écarts / risques / réserves</p>
              <ul className={styles.list}>
                {[
                  ...vsFixture.verdict.gaps,
                  ...vsFixture.verdict.risks,
                  ...vsFixture.verdict.reserves,
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <CtaButton onClick={() => setStateId("VS-UX-09")}>
                  Ouvrir décision Morris finale
                </CtaButton>
              </div>
            </>
          ) : null}
        </section>

        <aside className={styles.card} aria-label="Cadre d'exécution Increment D">
          <p className={styles.cardTitle}>Cadre d&apos;exécution</p>
          <p className={styles.fieldLabel}>Allowlist</p>
          <p className={styles.fieldValue}>
            {(report?.allowlistedWritePaths ?? [
              "projects/sfia-studio/.sandbox/increment-d/output.md",
            ]).join(", ")}
          </p>
          <p className={styles.fieldLabel}>gitEffect</p>
          <p className={styles.fieldValue}>none-remote</p>
          <p className={styles.fieldLabel}>Source</p>
          <p className={styles.fieldValue}>{vsFixture.sourceStatus}</p>
          <p className={styles.muted}>analysisAuthorized=false · remote=0</p>
          <ul className={styles.list}>
            {(report?.reservations ?? [
              "Candidate proof only",
              "Morris decision required",
              "Increment E non disponible",
            ]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
