import { UtilityRail } from "./UtilityRail";
import {
  Topbar,
  type TopbarPrimaryAction,
} from "./Topbar";
import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
import type { StudioShellRoute } from "@/lib/navigation";
import shellStyles from "@/styles/shell.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
  testId?: string;
}

interface StudioShellProps {
  variant: "floating" | "flush";
  activeRoute: StudioShellRoute;
  title: string;
  pills?: TopbarPill[];
  children: React.ReactNode;
  copilot?: CopilotProps | null;
  showTabs?: boolean;
  /**
   * `undefined` preserves the historical CTA; `null` hides it.
   */
  primaryAction?: TopbarPrimaryAction | null;
  /** When true, canvas uses full width (no copilot column). */
  hideCopilot?: boolean;
}

export function StudioShell({
  variant,
  activeRoute,
  title,
  pills,
  children,
  copilot,
  showTabs,
  primaryAction,
  hideCopilot = false,
}: StudioShellProps) {
  const isFloating = variant === "floating";
  const showCopilot = !hideCopilot && copilot != null;

  if (isFloating) {
    return (
      <div className={shellStyles.pageFloating} data-testid="studio-shell">
        <div className={shellStyles.brandAccent} aria-hidden="true" />
        <div className={shellStyles.railFloating}>
          <UtilityRail variant="floating" activeRoute={activeRoute} />
        </div>
        <div className={shellStyles.workspaceFloating}>
          <Topbar
            variant="floating"
            title={title}
            activeRoute={activeRoute}
            pills={pills}
            showTabs={showTabs}
            primaryAction={primaryAction}
          />
          <main className={shellStyles.workspaceInner} id="main-content">
            {children}
          </main>
        </div>
        {showCopilot ? (
          <div className={shellStyles.copilotFloating}>
            <CopilotPanel {...copilot} variant="floating" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={shellStyles.pageFlush} data-testid="studio-shell">
      <div className={shellStyles.brandAccent} aria-hidden="true" />
      <div className={shellStyles.railFlush}>
        <UtilityRail variant="flush" activeRoute={activeRoute} />
      </div>
      <div className={shellStyles.mainFlush}>
        <Topbar
          variant="flush"
          title={title}
          activeRoute={activeRoute}
          pills={pills}
          showTabs={showTabs}
          primaryAction={primaryAction}
        />
        <div className={shellStyles.bodyFlush}>
          <main
            className={
              showCopilot
                ? shellStyles.canvasFlush
                : shellStyles.canvasFlushWide
            }
            id="main-content"
            aria-label="Contenu principal"
          >
            {children}
          </main>
          {showCopilot ? (
            <div className={shellStyles.copilotFlush}>
              <CopilotPanel {...copilot} variant="flush" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
