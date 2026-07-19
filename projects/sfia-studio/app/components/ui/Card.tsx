import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "flush";
}

export function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const base = variant === "flush" ? styles.cardFlush : styles.card;
  return (
    <div className={`${base} ${styles.cardPadding} ${className}`.trim()}>
      {children}
    </div>
  );
}
