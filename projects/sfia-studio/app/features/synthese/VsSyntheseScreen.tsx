"use client";

import { useSearchParams } from "next/navigation";
import { StatusPill } from "@/components/ui/StatusPill";
import { HarnessStatusPanel, IdStrip } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { incrementEClosureArtifact } from "@/lib/harness/incrementEClosureArtifact";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

export function VsSyntheseScreen() {
  const searchParams = useSearchParams();
  const showIncEClosure = searchParams.get("closure") === "inc-e";
  const { abandoned, finalAction, harnessView } = useVsDemo();
  const closure = incrementEClosureArtifact;

  if (showIncEClosure) {
    const s = closure.summary;
    return (
      <div className={styles.panel} data-testid="vs-synthese">
        <IdStrip />
        <HarnessStatusPanel />

        <section className={styles.hero} aria-labelledby="vs-close-hero">
          <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
          <h2 id="vs-close-hero" className={styles.heroTitle}>
            CycleSummary — vertical slice A–E
          </h2>
          <p className={styles.heroText}>
            Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
          </p>
        </section>

        <section className={styles.card} data-testid="vs-cycle-summary">
          <div className={styles.actions} aria-label="Badges de clôture">
            <StatusPill tone="blueFlush">POC</StatusPill>
            <StatusPill tone="greenFlush">Slice clôturé avec réserves</StatusPill>
            <p className={styles.muted} data-testid="vs-inc-e-closed-badge">
              CLOSED_WITH_RESERVATIONS
            </p>
            <StatusPill tone="pink">Aucun claim MVP</StatusPill>
            <StatusPill tone="pink">Non production-ready</StatusPill>
          </div>
          <p className={styles.fieldLabel}>Statut final</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-final-status">
            {s.finalStatus}
          </p>
          <p className={styles.fieldLabel}>Décision Morris</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-decision-recorded">
            {closure.decision.action} · enregistrée ·{" "}
            {String(s.morrisDecisionRecorded ?? true)} · awaitingMorris=
            {String(s.finalState?.awaitingMorrisDecision ?? false)}
          </p>
          <p className={styles.fieldLabel}>Candidat GPT (historique inchangé)</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-candidate-historical">
            {closure.candidateSnapshot.status} · candidateOnly ·
            closureAuthorized={String(closure.candidateSnapshot.closureAuthorized)} ·
            (photographie pré-décision)
          </p>
          <p className={styles.fieldLabel}>Parcours A–E</p>
          <ul className={styles.list} data-testid="vs-inc-e-trajectory">
            {Object.entries(s.traceability.trajectory ?? {}).map(([k, v]) => (
              <li key={k}>
                <strong>Increment {k}</strong> — {v}
              </li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Prouvé (état final)</p>
          <ul className={styles.list} data-testid="vs-inc-e-final-proven">
            {s.proven.slice(0, 16).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Non prouvé (état final)</p>
          <ul className={styles.list} data-testid="vs-inc-e-final-not-proven">
            {s.notProven.slice(0, 14).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Résolu par décision Morris</p>
          <ul className={styles.list} data-testid="vs-inc-e-resolved-by-morris">
            {(s.resolvedByMorrisDecision ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Réserves non résolues</p>
          <ul className={styles.list} data-testid="vs-inc-e-summary-reservations">
            {(s.unresolvedReservations ?? s.reservations).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>Contexte historique d’analyse</p>
          <ul className={styles.list} data-testid="vs-inc-e-historical-context">
            {(s.historicalAnalysisContext ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.fieldLabel}>FinOps</p>
          <p className={styles.fieldValue} data-testid="vs-inc-e-finops-split">
            Qualification : {s.qualificationFinOps.calls} ({s.qualificationFinOps.note}) ·
            Analyse : {s.analysisFinOps.calls} ({s.analysisFinOps.note})
          </p>
          <p className={styles.fieldLabel}>Preuves</p>
          <p className={styles.fieldValue}>
            {closure.candidateSnapshot.evidenceReferences.join(" · ")} · packHash{" "}
            {s.traceability.packHash.slice(0, 12)}…
          </p>
          <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
            Interdit : MVP · production-ready · Studio complete · industrialisé · mvpClaim=
            {String(s.mvpClaim)} · productionReadyClaim={String(s.productionReadyClaim)}
          </p>
          <p className={styles.muted} data-testid="vs-no-portfolio">
            Hors périmètre : portefeuille multi-projet, autres cycles hors slice. Aucune
            action Git. Aucun nouvel appel GPT.
          </p>
        </section>
      </div>
    );
  }

  const finalStatus = harnessView
    ? `dérivé harness · ${harnessView.canonicalStatus} (${harnessView.mode})`
    : abandoned
      ? "abandonné"
      : vsFixture.summary.finalStatus;

  return (
    <div className={styles.panel} data-testid="vs-synthese">
      <IdStrip />
      <HarnessStatusPanel />

      <section className={styles.hero} aria-labelledby="vs-close-hero">
        <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
        <h2 id="vs-close-hero" className={styles.heroTitle}>
          CycleSummary — vertical slice POC
        </h2>
        <p className={styles.heroText}>
          Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
        </p>
      </section>

      <section className={styles.card} data-testid="vs-cycle-summary">
        <StatusPill tone={abandoned || (harnessView && !harnessView.ok) ? "pink" : "greenFlush"}>
          {finalStatus}
        </StatusPill>
        <p className={styles.fieldLabel}>requestId</p>
        <p className={styles.fieldValue}>{vsFixture.requestId}</p>
        <p className={styles.fieldLabel}>Statut final</p>
        <p className={styles.fieldValue}>
          {abandoned ? "abandonné (fixture)" : vsFixture.summary.finalStatus}
        </p>
        <p className={styles.fieldLabel}>Décision Morris</p>
        <p className={styles.fieldValue}>
          {abandoned
            ? "Abandonner"
            : finalAction === "CLOTURER"
              ? vsFixture.summary.decision
              : finalAction ?? vsFixture.summary.decision}
        </p>
        <p className={styles.fieldLabel}>Fichier Markdown (mock)</p>
        <p className={styles.fieldValue}>{vsFixture.summary.markdownFile}</p>
        <p className={styles.fieldLabel}>Rapport / preuves</p>
        <p className={styles.fieldValue}>
          {vsFixture.summary.reportRef} · {vsFixture.summary.proofRef}
        </p>
        <p className={styles.fieldLabel}>Compteur GPT</p>
        <p className={styles.fieldValue} data-testid="vs-summary-gpt">
          {vsFixture.summary.gptCounter}
        </p>
        <p className={styles.muted} data-testid="vs-inc-e-finops-split">
          Qualification et analyse séparés · slice-only · aucun portfolio
        </p>
        <p className={styles.fieldLabel}>Branche · HEAD · contractHash</p>
        <p className={styles.fieldValue}>
          {vsFixture.branch} · {vsFixture.head} · {vsFixture.contractHash}
        </p>
        <p className={styles.fieldLabel}>Réserves</p>
        <ul className={styles.list}>
          {vsFixture.summary.reserves.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
          Interdit : MVP · production-ready · Studio complete · industrialisé
        </p>
        <p className={styles.muted} data-testid="vs-no-portfolio">
          Hors périmètre affiché : portefeuille multi-projet, autres cycles hors
          slice.
        </p>
      </section>
    </div>
  );
}
