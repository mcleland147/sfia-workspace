import {
  METHOD_MODE_LABELS,
  type MethodMode,
  type ProjectState,
} from "@/lib/d1/types";
import styles from "./d1-shell.module.css";

/** Read-only governance indicator — not a user control (D1-C1). */
export function MethodModeBadge({ mode }: { mode: MethodMode | null }) {
  if (!mode) {
    return (
      <span
        className={`${styles.badge} ${styles.badgeWarn}`}
        data-testid="method-mode-badge"
      >
        Méthode système non définie
      </span>
    );
  }
  return (
    <span
      className={`${styles.badge} ${styles.badgeMode}`}
      data-testid="method-mode-badge"
      title="Indicateur de gouvernance — non modifiable ici"
    >
      {METHOD_MODE_LABELS[mode]}
    </span>
  );
}

export function ProjectStateBadge({ state }: { state: ProjectState }) {
  return (
    <span className={`${styles.badge} ${styles.badgeState}`} data-testid="project-state-badge">
      {state}
    </span>
  );
}
