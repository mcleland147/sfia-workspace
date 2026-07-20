import Link from "next/link";
import styles from "./cta-button.module.css";
import { SIMULATION_TITLE } from "@/lib/a11y";

type CtaVariant =
  | "primary"
  | "primaryDark"
  | "secondary"
  | "ghost"
  | "danger"
  | "simulated";

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: CtaVariant;
  disabled?: boolean;
  simulated?: boolean;
  type?: "button" | "submit";
  className?: string;
  title?: string;
  "aria-label"?: string;
  "aria-disabled"?: boolean;
  "data-testid"?: string;
}

export function CtaButton({
  children,
  href,
  onClick,
  variant = "primary",
  disabled = false,
  simulated = false,
  type = "button",
  className = "",
  title,
  "aria-label": ariaLabel,
  "aria-disabled": ariaDisabled,
  "data-testid": testId,
}: CtaButtonProps) {
  const resolvedVariant = simulated ? "simulated" : variant;
  const classes = `${styles.button} ${styles[resolvedVariant]} ${className}`.trim();
  const isDisabled = disabled || simulated;
  const resolvedTitle = simulated ? SIMULATION_TITLE : title;
  const resolvedAriaDisabled =
    ariaDisabled !== undefined ? ariaDisabled : isDisabled || undefined;

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} data-testid={testId}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
      title={resolvedTitle}
      aria-disabled={resolvedAriaDisabled}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
