import { vsFixture } from "@/fixtures/vertical-slice";
import styles from "./vs-panels.module.css";

export function IdStrip() {
  return (
    <dl className={styles.idStrip} data-testid="vs-id-strip">
      <div>
        <dt>requestId</dt>
        <dd>{vsFixture.requestId}</dd>
      </div>
      <div>
        <dt>correlationId</dt>
        <dd>{vsFixture.correlationId}</dd>
      </div>
      <div>
        <dt>contractId</dt>
        <dd>{vsFixture.contractId}</dd>
      </div>
      <div>
        <dt>contractHash</dt>
        <dd>{vsFixture.contractHash}</dd>
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
        <dd>{vsFixture.sourceStatus}</dd>
      </div>
      <div>
        <dt>Horodatage</dt>
        <dd>
          {vsFixture.timestamp} ({vsFixture.timezone})
        </dd>
      </div>
    </dl>
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
