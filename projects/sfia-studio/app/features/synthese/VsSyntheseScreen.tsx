"use client";

import { StatusPill } from "@/components/ui/StatusPill";
import { HarnessStatusPanel, IdStrip } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

export function VsSyntheseScreen() {
  const { abandoned, finalAction, harnessView } = useVsDemo();
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
