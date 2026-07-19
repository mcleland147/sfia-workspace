import type { Gate } from "@/lib/domain/gate";
import styles from "./gate-list.module.css";

const dotClass: Record<Gate["accent"], string> = {
  blue: styles.dotBlue,
  orange: styles.dotOrange,
  purple: styles.dotPurple,
  pink: styles.dotPink,
  green: styles.dotGreen,
};

interface GateListProps {
  gates: Gate[];
}

export function GateList({ gates }: GateListProps) {
  return (
    <ul className={styles.list} aria-label="Gates à arbitrer">
      {gates.map((gate) => (
        <li key={gate.id} className={styles.row}>
          <span
            className={`${styles.dot} ${dotClass[gate.accent]}`}
            aria-hidden="true"
          />
          <span className={styles.label}>{gate.label}</span>
          <span className={styles.timing}>{gate.timing}</span>
        </li>
      ))}
    </ul>
  );
}
