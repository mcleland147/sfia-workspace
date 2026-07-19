"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { FinOpsBox, IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
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

export function VsCycleActifScreen() {
  const { stateId, setStateId, fireStop, stopFired } = useVsDemo();
  const activeStep = stepMap[stateId] ?? 5;

  return (
    <div className={styles.panel} data-testid="vs-cycle-actif">
      <IdStrip />

      {stateId === "VS-UX-VAR-STOP" || stopFired ? (
        <VariantBanner tone="stop" title="STOP Morris — prioritaire">
          <p>
            Exécution <strong>stoppée</strong>. STOP ≠ NO-GO ≠ Abandonner. Event mock
            journalisé. Reprise éventuelle sous <strong>nouveau GO</strong> uniquement.
          </p>
          <p className={styles.muted}>
            eventId=evt-stop-mock · {vsFixture.timestamp}
          </p>
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-LOADING" ? (
        <VariantBanner tone="info" title="Loading — analyse GPT (fixture)">
          <p className={styles.loadingPulse}>
            <span className={styles.loadingDot} aria-hidden />
            Phase active : analyse — pas de barre inventée
          </p>
          <FinOpsBox phase="analyse" calls={1} />
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-ERROR" ? (
        <VariantBanner tone="error" title="Erreur fail-closed — verdict invalide">
          <p>Verdict GPT rejeté. Pas de clôture automatique.</p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-07")}>
              Relancer analyse (mock)
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-cycle-hero">
        <p className={styles.heroEyebrow}>CYCLE ACTIF · ÉTATS 05–08</p>
        <h2 id="vs-cycle-hero" className={styles.heroTitle}>
          {stateId === "VS-UX-06"
            ? "Rapport Cursor / harness disponible (fixture)"
            : stateId === "VS-UX-07"
              ? "Analyse GPT en cours (simulée)"
              : stateId === "VS-UX-08"
                ? "Verdict GPT candidat proposé"
                : "Exécution sandbox simulée"}
        </h2>
        <p className={styles.heroText}>
          Stepper d&apos;états dans la route Cycle actif — aucune 5e route.
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
        <p className={styles.muted}>Étape active fixture : {activeStep}</p>
      </nav>

      <div className={styles.twoCol}>
        <section className={styles.card}>
          {stateId === "VS-UX-05" || stateId === "VS-UX-VAR-STOP" ? (
            <>
              <StatusPill tone="blueFlush">en_exécution (fixture)</StatusPill>
              <p className={styles.fieldValue}>
                Cursor sandbox mock — fichier allowlist uniquement. Remote writes = 0.
              </p>
              <div className={styles.actions}>
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
              <p className={styles.cardTitle}>CursorExecutionReport (fixture)</p>
              <p className={styles.fieldLabel}>Statut</p>
              <p className={styles.fieldValue}>{vsFixture.report.status}</p>
              <p className={styles.fieldLabel}>Fichiers touchés</p>
              <p className={styles.fieldValue}>
                {vsFixture.report.filesTouched.join(", ")}
              </p>
              <p className={styles.fieldLabel}>Remote writes</p>
              <p className={styles.fieldValue}>{vsFixture.report.remoteWrites}</p>
              <p className={styles.fieldLabel}>Aperçu sanitisé</p>
              <pre className={styles.fieldValue}>{vsFixture.report.markdownPreview}</pre>
              <div className={styles.actions}>
                <CtaButton onClick={() => setStateId("VS-UX-07")}>
                  Lancer analyse GPT (mock)
                </CtaButton>
              </div>
            </>
          ) : null}

          {stateId === "VS-UX-07" || stateId === "VS-UX-VAR-LOADING" ? (
            <>
              <FinOpsBox phase="analyse" calls={1} />
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
                <CtaButton variant="danger" onClick={fireStop}>
                  STOP Morris
                </CtaButton>
              </div>
            </>
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

        <aside className={styles.card} aria-label="Cadre d'exécution fixture">
          <p className={styles.cardTitle}>Cadre d&apos;exécution</p>
          <p className={styles.fieldLabel}>Allowlist</p>
          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
          <p className={styles.fieldLabel}>gitEffect</p>
          <p className={styles.fieldValue}>none-remote</p>
          <p className={styles.fieldLabel}>Source</p>
          <p className={styles.fieldValue}>{vsFixture.sourceStatus}</p>
        </aside>
      </div>
    </div>
  );
}
