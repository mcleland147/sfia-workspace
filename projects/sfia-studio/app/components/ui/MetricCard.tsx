import styles from "./metric-card.module.css";

type MetricAccent = "blue" | "purple" | "orange" | "green";

const barClass: Record<MetricAccent, string> = {
  blue: styles.barBlue,
  purple: styles.barPurple,
  orange: styles.barOrange,
  green: styles.barGreen,
};

interface MetricCardProps {
  label: string;
  value: string;
  accent?: MetricAccent;
}

export function MetricCard({
  label,
  value,
  accent = "blue",
}: MetricCardProps) {
  return (
    <article className={styles.card}>
      <span className={`${styles.bar} ${barClass[accent]}`} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </article>
  );
}
