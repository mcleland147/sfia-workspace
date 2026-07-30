import { Card } from "@/components/ui/Card";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "@/lib/vertical-slice-runtime/disclosures";
import styles from "./create-project.module.css";

/**
 * Server component: the disclosure contract is read directly from V2-A1.
 * It must remain visible before and after the client form submits.
 */
export function RuntimeDisclosureBanner() {
  return (
    <Card variant="flush" className={styles.disclosure}>
      <div className={styles.disclosureHeader}>
        <div>
          <h2>Mode local borné</h2>
          <p>
            Cette interface crée un Project et son LPS dans le processus Node
            local uniquement.
          </p>
        </div>
        <div className={styles.pillGroup} aria-label="Statuts runtime">
          <StatusPill tone="orangeFlush">
            {RUNTIME_DISCLOSURES.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">
            {RUNTIME_DISCLOSURES.persistence}
          </StatusPill>
          <StatusPill tone="muted">
            AGENT {RUNTIME_DISCLOSURES.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">
            {RUNTIME_READINESS_NOT_READY.status}
          </StatusPill>
        </div>
      </div>

      <ul className={styles.disclosureList}>
        <li>
          État métier volatil : un redémarrage ou hot reload peut perdre les
          données.
        </li>
        <li>IAM {RUNTIME_DISCLOSURES.iam}.</li>
        <li>
          PRODUCT PERSISTENCE {RUNTIME_DISCLOSURES.productPersistence}.
        </li>
        <li>DELIVERY {RUNTIME_DISCLOSURES.delivery}.</li>
        <li>CUTOVER {RUNTIME_DISCLOSURES.cutover}.</li>
        <li>
          HARD {RUNTIME_READINESS_NOT_READY.hard} · T-A6{" "}
          {RUNTIME_READINESS_NOT_READY.tA6} · RUN READY = false.
        </li>
      </ul>
    </Card>
  );
}
