"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  FinOpsBox,
  HarnessStatusPanel,
  IdStrip,
  VariantBanner,
} from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

export function VsNouvelleDemandeScreen() {
  const { stateId, setStateId, fireStop, abandoned, confirmAbandon } = useVsDemo();

  return (
    <div className={styles.panel} data-testid="vs-nouvelle-demande">
      <IdStrip />
      <HarnessStatusPanel />

      {stateId === "VS-UX-VAR-LOADING" || stateId === "VS-UX-02" ? (
        <VariantBanner tone="info" title="Loading — qualification GPT (fixture)">
          <p className={styles.loadingPulse}>
            <span className={styles.loadingDot} aria-hidden />
            Phase active : qualification — aucune fausse barre de progression
          </p>
          <FinOpsBox phase="qualification" calls={vsFixture.gptCalls.qualification} />
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-ERROR" ? (
        <VariantBanner tone="error" title="Erreur fail-closed — sortie GPT invalide">
          <p>
            Sortie GPT rejetée (fail-closed). Aucune progression automatique vers le
            gate. Correction ou abandon uniquement.
          </p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-02")}>
              Demander une correction
            </CtaButton>
            <CtaButton variant="danger" onClick={() => setStateId("VS-UX-01")}>
              Abandonner avant qualification
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-nd-hero">
        <p className={styles.heroEyebrow}>VERTICAL SLICE · INCREMENT A</p>
        <h2 id="vs-nd-hero" className={styles.heroTitle}>
          {stateId === "VS-UX-03"
            ? "Qualification proposée — revue avant gate"
            : stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
              ? "Qualification en cours (simulée)"
              : "Nouvelle demande de preuve Markdown"}
        </h2>
        <p className={styles.heroText}>
          Saisie et qualification mockées. Aucun appel réseau live. Studio reste une
          vue dérivée.
        </p>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="vs-request-title">
          <p className={styles.fieldLabel}>StudioRequest (fixture)</p>
          <h2 id="vs-request-title" className={styles.cardTitle}>
            {vsFixture.request.title}
          </h2>
          <p className={styles.fieldLabel}>Synthèse</p>
          <p className={styles.fieldValue}>{vsFixture.request.summary}</p>
          <p className={styles.fieldLabel}>IDs visibles</p>
          <p className={styles.fieldValue}>
            {vsFixture.requestId} · {vsFixture.correlationId}
          </p>
          <div className={styles.actions}>
            {(stateId === "VS-UX-01" || abandoned) && (
              <>
                <CtaButton onClick={() => setStateId("VS-UX-02")}>
                  Qualifier la demande
                </CtaButton>
                <CtaButton
                  variant="danger"
                  onClick={() => {
                    confirmAbandon();
                  }}
                  data-testid="vs-abandon-prequal"
                  aria-label="Abandonner le cycle avant qualification"
                >
                  Abandonner avant qualification
                </CtaButton>
              </>
            )}
            {(stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING") && (
              <>
                <CtaButton onClick={() => setStateId("VS-UX-03")}>
                  Simuler qualification OK
                </CtaButton>
                <CtaButton
                  variant="danger"
                  onClick={fireStop}
                  aria-label="STOP Morris pendant qualification"
                >
                  STOP Morris
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={() => setStateId("VS-UX-VAR-ERROR")}
                >
                  Simuler erreur fail-closed
                </CtaButton>
              </>
            )}
            {stateId === "VS-UX-03" && (
              <>
                <CtaButton onClick={() => setStateId("VS-UX-04")}>
                  Continuer vers le gate
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={() => setStateId("VS-UX-02")}
                >
                  Demander une correction
                </CtaButton>
              </>
            )}
          </div>
          {stateId === "VS-UX-01" ? (
            <p className={styles.muted} data-testid="vs-finops-zero">
              Consommation GPT avant qualification : 0 / {vsFixture.gptCalls.ceiling}
            </p>
          ) : null}
        </section>

        <aside className={styles.card} aria-label="Prévisualisation qualification">
          {stateId === "VS-UX-03" ? (
            <>
              <StatusPill tone="purple">Candidat GPT</StatusPill>
              <p className={styles.fieldLabel}>Cycle</p>
              <p className={styles.fieldValue}>{vsFixture.qualification.cycle}</p>
              <p className={styles.fieldLabel}>Profil</p>
              <p className={styles.fieldValue}>{vsFixture.qualification.profile}</p>
              <p className={styles.fieldLabel}>Allowlist</p>
              <p className={styles.fieldValue}>
                {vsFixture.qualification.allowlist.join(", ")}
              </p>
              <p className={styles.fieldLabel}>Stops</p>
              <p className={styles.fieldValue}>
                {vsFixture.qualification.stops.join(" · ")}
              </p>
              <p className={styles.fieldLabel}>Hash</p>
              <p className={styles.fieldValue}>{vsFixture.qualification.hashPreview}</p>
              <p className={styles.fieldLabel}>Source</p>
              <p className={styles.fieldValue}>{vsFixture.qualification.source}</p>
              <p className={styles.muted}>Pas d&apos;auto-GO.</p>
            </>
          ) : (
            <>
              <p className={styles.cardTitle}>Aperçu gouverné</p>
              <p className={styles.fieldValue}>
                Les champs de qualification complète apparaissent à l&apos;état
                VS-UX-03 avant tout gate.
              </p>
              <FinOpsBox
                phase={
                  stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
                    ? "qualification"
                    : "idle"
                }
                calls={
                  stateId === "VS-UX-01" ? 0 : vsFixture.gptCalls.qualification
                }
              />
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
