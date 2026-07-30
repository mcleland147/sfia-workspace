import { UtilityRail } from "./UtilityRail";
import {
  Topbar,
  type TopbarPrimaryAction,
} from "./Topbar";
import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
import type {
  StudioRoute,
  StudioShellRoute,
} from "@/lib/navigation";
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
  copilot: CopilotProps;
  showTabs?: boolean;
  /**
   * `undefined` preserves the historical CTA; `null` hides it.
   */
  primaryAction?: TopbarPrimaryAction | null;
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
}: StudioShellProps) {
  const isFloating = variant === "floating";

  if (isFloating) {
    return (
      <div className={shellStyles.pageFloating} data-testid="studio-shell">
        <div className={shellStyles.brandAccent} aria-hidden="true" />
        <div className={shellStyles.railFloating}>
          <UtilityRail
            variant="floating"
            activeRoute={activeRoute as StudioRoute}
          />
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
        <div className={shellStyles.copilotFloating}>
          <CopilotPanel {...copilot} variant="floating" />
        </div>
      </div>
    );
  }

  return (
    <div className={shellStyles.pageFlush} data-testid="studio-shell">
      <div className={shellStyles.brandAccent} aria-hidden="true" />
      <div className={shellStyles.railFlush}>
        <UtilityRail
          variant="flush"
          activeRoute={activeRoute as StudioRoute}
        />
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
            className={shellStyles.canvasFlush}
            id="main-content"
            aria-label="Contenu principal"
          >
            {children}
          </main>
          <div className={shellStyles.copilotFlush}>
            <CopilotPanel {...copilot} variant="flush" />
          </div>
        </div>
      </div>
    </div>
  );
}
