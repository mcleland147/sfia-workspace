import { UtilityRail } from "./UtilityRail";
import { Topbar } from "./Topbar";
import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
import type { StudioRoute } from "@/lib/navigation";
import shellStyles from "@/styles/shell.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
  testId?: string;
}

interface StudioShellProps {
  variant: "floating" | "flush";
  activeRoute: StudioRoute;
  title: string;
  pills?: TopbarPill[];
  children: React.ReactNode;
  copilot: CopilotProps;
}

export function StudioShell({
  variant,
  activeRoute,
  title,
  pills,
  children,
  copilot,
}: StudioShellProps) {
  const isFloating = variant === "floating";

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
        <UtilityRail variant="flush" activeRoute={activeRoute} />
      </div>
      <div className={shellStyles.mainFlush}>
        <Topbar
          variant="flush"
          title={title}
          activeRoute={activeRoute}
          pills={pills}
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
