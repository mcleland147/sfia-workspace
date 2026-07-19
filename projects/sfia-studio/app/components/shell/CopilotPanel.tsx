import { StatusPill } from "@/components/ui/StatusPill";
import styles from "./copilot-panel.module.css";

export interface CopilotWatchItem {
  label: string;
  dotColor: string;
}

export interface CopilotProps {
  variant: "floating" | "flush";
  name: string;
  subtitle: string;
  avatarTone?: "pink" | "purple" | "blue" | "pinkFlush";
  levelPill?: string;
  summary: string;
  watchItems?: CopilotWatchItem[];
  watchLabel?: string;
  riskTitle?: string;
  riskText?: string;
  checklist?: string[];
  checklistTitle?: string;
  showRecommendationLabel?: boolean;
}

export function CopilotPanel({
  variant,
  name,
  subtitle,
  avatarTone = "pink",
  levelPill = "L0 humain",
  summary,
  watchItems = [],
  watchLabel = "CE QUE JE SURVEILLE",
  riskTitle,
  riskText,
  checklist,
  checklistTitle,
  showRecommendationLabel = false,
}: CopilotProps) {
  const isFlush = variant === "flush";

  const avatarClass = [
    styles.avatar,
    isFlush ? styles.avatarFlush : "",
    avatarTone === "pink"
      ? styles.avatarPink
      : avatarTone === "pinkFlush"
        ? styles.avatarPinkFlush
        : avatarTone === "blue"
          ? styles.avatarBlue
          : styles.avatarPurple,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      className={styles.panel}
      aria-label="Copilot Nora"
      data-testid="copilot-panel"
    >
      <div
        className={
          isFlush ? styles.headerFlush : styles.headerFloating
        }
      >
        <div className={styles.headerRow}>
          <div className={avatarClass}>SF</div>
          <div>
            <p className={isFlush ? styles.nameFlush : styles.name}>{name}</p>
            <p className={isFlush ? styles.subtitleFlush : styles.subtitle}>
              {subtitle}
            </p>
          </div>
          <div
            className={
              isFlush ? styles.levelPillFlush : styles.levelPill
            }
          >
            <StatusPill tone={isFlush ? "navy" : "orange"}>
              {levelPill}
            </StatusPill>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        {showRecommendationLabel && (
          <p className={styles.recommendationBadge}>
            Recommandation copilot — non décision Morris
          </p>
        )}

        <div className={isFlush ? styles.messageFlush : styles.message}>
          {summary}
        </div>

        {checklist && (
          <div className={styles.checklist}>
            <p className={styles.sectionTitle}>{checklistTitle}</p>
            {checklist.map((item) => (
              <div key={item} className={styles.checkRow}>
                <span className={styles.checkIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {watchItems.length > 0 && (
          <>
            <p className={styles.sectionLabel}>{watchLabel}</p>
            {watchItems.map((item) => (
              <div key={item.label} className={styles.watchItem}>
                <span
                  className={styles.watchDot}
                  style={{ background: item.dotColor }}
                  aria-hidden="true"
                />
                {item.label}
              </div>
            ))}
          </>
        )}

        {riskTitle && riskText && (
          <div className={isFlush ? styles.riskFlush : styles.risk}>
            <p
              className={
                isFlush ? styles.riskTitleFlush : styles.riskTitle
              }
            >
              {riskTitle}
            </p>
            <p className={styles.riskText}>{riskText}</p>
          </div>
        )}

        <div
          className={`${styles.composer} ${isFlush ? styles.composerFlush : ""}`}
        >
          <p className={styles.composerPlaceholder}>
            Demander une analyse ou préciser une contrainte…
          </p>
          <div className={styles.composerRow}>
            <StatusPill tone={isFlush ? "blueFlush" : "muted"}>
              @ contexte
            </StatusPill>
            <button
              type="button"
              className={`${styles.send} ${isFlush ? styles.sendFlush : ""}`}
              disabled
              title="Simulation — aucune action Git réelle"
              aria-disabled
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
