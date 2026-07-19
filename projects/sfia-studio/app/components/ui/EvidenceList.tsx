import type { Evidence } from "@/lib/domain/evidence";
import { StatusPill } from "./StatusPill";
import styles from "./evidence-list.module.css";

const dotClass: Record<Evidence["accent"], string> = {
  green: styles.dotGreen,
  blue: styles.dotBlue,
  orange: styles.dotOrange,
};

const pillTone: Record<Evidence["accent"], "greenFlush" | "blueFlush" | "orangeFlush"> = {
  green: "greenFlush",
  blue: "blueFlush",
  orange: "orangeFlush",
};

interface EvidenceListProps {
  items: Evidence[];
}

export function EvidenceList({ items }: EvidenceListProps) {
  return (
    <ul className={styles.list} aria-label="Dossier de preuves">
      {items.map((item) => (
        <li key={item.id} className={styles.row}>
          <span
            className={`${styles.dot} ${dotClass[item.accent]}`}
            aria-hidden="true"
          />
          <span className={styles.label}>{item.label}</span>
          <span className={styles.status}>
            <StatusPill tone={pillTone[item.accent]}>
              {item.statusLabel}
            </StatusPill>
          </span>
        </li>
      ))}
    </ul>
  );
}
