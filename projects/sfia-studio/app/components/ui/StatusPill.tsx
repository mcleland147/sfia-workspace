import styles from "./status-pill.module.css";

export type StatusPillTone =
  | "blue"
  | "blueFlush"
  | "purple"
  | "purpleFlush"
  | "green"
  | "greenFlush"
  | "orange"
  | "orangeFlush"
  | "pink"
  | "muted"
  | "navy"
  | "dark"
  | "white";

interface StatusPillProps {
  children: React.ReactNode;
  tone?: StatusPillTone;
  className?: string;
}

export function StatusPill({
  children,
  tone = "blue",
  className = "",
}: StatusPillProps) {
  return (
    <span className={`${styles.pill} ${styles[tone]} ${className}`.trim()}>
      {children}
    </span>
  );
}
