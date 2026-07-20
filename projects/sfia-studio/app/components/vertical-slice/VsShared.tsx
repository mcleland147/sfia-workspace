import { vsFixture } from "@/fixtures/vertical-slice";
import type { StudioHarnessView } from "@/lib/harness/types";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "./vs-panels.module.css";

export function IdStrip() {
  const { harnessView } = useVsDemo();
  const source = harnessView?.statusSource
    ? `harness (${harnessView.mode})`
    : vsFixture.sourceStatus;
  const hash = harnessView?.contractHash ?? vsFixture.contractHash;
  const corr = harnessView?.correlationId ?? vsFixture.correlationId;

  return (
    <dl className={styles.idStrip} data-testid="vs-id-strip">
      <div>
        <dt>requestId</dt>
        <dd>{vsFixture.requestId}</dd>
      </div>
      <div>
        <dt>correlationId</dt>
        <dd>{corr}</dd>
      </div>
      <div>
        <dt>contractId</dt>
        <dd>{vsFixture.contractId}</dd>
      </div>
      <div>
        <dt>contractHash</dt>
        <dd>{hash.length > 24 ? `${hash.slice(0, 20)}…` : hash}</dd>
      </div>
      <div>
        <dt>Branche</dt>
        <dd>{vsFixture.branch}</dd>
      </div>
      <div>
        <dt>HEAD</dt>
        <dd>{vsFixture.head.slice(0, 12)}…</dd>
      </div>
      <div>
        <dt>Source statut</dt>
        <dd data-testid="vs-status-source">{source}</dd>
      </div>
      <div>
        <dt>Horodatage</dt>
        <dd>
          {harnessView?.timestamps.completedAt ?? vsFixture.timestamp} (
          {vsFixture.timezone})
        </dd>
      </div>
    </dl>
  );
}

export function HarnessStatusPanel() {
  const { harnessView, harnessBusy, resumeFromHarness } = useVsDemo();
  if (harnessBusy) {
    return (
      <aside className={styles.finops} data-testid="vs-harness-busy">
        <p>Transmission harness (fixture)…</p>
      </aside>
    );
  }
  if (!harnessView) {
    return (
      <aside className={styles.finops} data-testid="vs-harness-idle">
        <p className={styles.finopsTitle}>Harness (Increment B)</p>
        <p>Aucun cycle harness encore — simulation / fixture uniquement.</p>
        <p className={styles.muted}>Aucun GPT live · aucun Cursor live</p>
        <button type="button" data-testid="vs-resume" onClick={resumeFromHarness}>
          Reprendre depuis journal harness
        </button>
      </aside>
    );
  }
  return <HarnessViewCard view={harnessView} onResume={resumeFromHarness} />;
}

function HarnessViewCard({
  view,
  onResume,
}: {
  view: StudioHarnessView;
  onResume: () => void;
}) {
  const last = view.events[view.events.length - 1];
  return (
    <aside className={styles.finops} data-testid="vs-harness-panel">
      <p className={styles.finopsTitle}>État dérivé harness (fixture)</p>
      <p>
        Statut canonique :{" "}
        <strong data-testid="vs-harness-status">{view.canonicalStatus}</strong>
      </p>
      <p>
        GO valide :{" "}
        <strong data-testid="vs-go-valid">{view.goValid ? "oui" : "non"}</strong>
      </p>
      <p data-testid="vs-harness-mode">Mode : {view.mode} · source : {view.statusSource}</p>
      {view.errorCode ? (
        <p data-testid="vs-harness-error">
          Refus / écart : {view.errorCode}
          {view.refusalReason ? ` — ${view.refusalReason}` : ""}
        </p>
      ) : null}
      {view.stopOrTimeout ? (
        <p data-testid="vs-stop-timeout">Classe : {view.stopOrTimeout}</p>
      ) : null}
      {last ? (
        <p data-testid="vs-last-event">
          Dernier événement : {last.eventType} ({last.result ?? "—"})
        </p>
      ) : null}
      <p data-testid="vs-report-flag">
        Rapport : {view.report ? "disponible" : "absent"}
      </p>
      <p data-testid="vs-proof-flag">
        Pack preuves :{" "}
        {view.proofPack?.ok
          ? "complet"
          : `incomplet (${view.proofPack?.missing.join(", ") || "n/a"})`}
      </p>
      <p className={styles.muted}>Aucun GPT/Cursor live · aucune écriture Git distante</p>
      <button type="button" data-testid="vs-resume" onClick={onResume}>
        Reprendre depuis journal harness
      </button>
    </aside>
  );
}

export function FinOpsBox({
  phase,
  calls,
}: {
  phase: string;
  calls: number;
}) {
  return (
    <aside className={styles.finops} data-testid="vs-finops" aria-live="polite">
      <p className={styles.finopsTitle}>FinOps GPT (fixture)</p>
      <p>
        Phase active : <strong>{phase}</strong>
      </p>
      <p>
        Consommation :{" "}
        <strong data-testid="vs-gpt-counter">
          {calls} / {vsFixture.gptCalls.ceiling}
        </strong>
      </p>
      <p data-testid="vs-no-retry">{vsFixture.gptCalls.noRetry}</p>
      <p className={styles.muted}>Aucun coût monétaire inventé.</p>
    </aside>
  );
}

export function VariantBanner({
  tone,
  title,
  children,
}: {
  tone: "info" | "error" | "stop" | "warn";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${styles.variantBanner} ${styles[tone]}`}
      role="alert"
      data-testid="vs-variant-banner"
    >
      <p className={styles.variantTitle}>{title}</p>
      <div className={styles.variantBody}>{children}</div>
    </div>
  );
}
