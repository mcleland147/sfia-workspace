import type { ReactNode } from "react";
import type { DemoScreenId } from "../demo/demoScreens";
import type { DemoUser } from "../../domain/demoUsers";
import type { DataSourceMode } from "../../data/requestsRepository.types";
import { PremiumSidebar } from "./PremiumSidebar";
import { PremiumTopbar } from "./PremiumTopbar";
import "./premium.css";

const BREADCRUMBS: Record<DemoScreenId, string[]> = {
  overview: ["Interv360", "SAV", "Centre de commande"],
  requests: ["Interv360", "SAV", "Demandes"],
  details: ["Interv360", "SAV", "Fiche demande"],
  journal: ["Interv360", "SAV", "Historique"],
  scenario: ["Interv360", "SAV", "Scénario guidé"],
};

interface PremiumShellProps {
  currentScreen: DemoScreenId;
  onNavigate: (screenId: DemoScreenId) => void;
  currentUser: DemoUser;
  users: DemoUser[];
  onUserChange: (userId: string) => void;
  dataSourceMode: DataSourceMode;
  showDemoChrome?: boolean;
  demoChrome?: ReactNode;
  dataModeBanner?: ReactNode;
  flushContent?: boolean;
  topbarActions?: ReactNode;
  children: ReactNode;
}

export function PremiumShell({
  currentScreen,
  onNavigate,
  currentUser,
  users,
  onUserChange,
  dataSourceMode,
  showDemoChrome = false,
  demoChrome,
  dataModeBanner,
  flushContent = false,
  topbarActions,
  children,
}: PremiumShellProps) {
  return (
    <div className="flex min-h-screen bg-[#eef2f7] text-slate-900">
      <PremiumSidebar
        currentScreen={currentScreen}
        currentUser={currentUser}
        onNavigate={onNavigate}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <PremiumTopbar
          breadcrumb={BREADCRUMBS[currentScreen]}
          dataSourceMode={dataSourceMode}
          users={users}
          currentUser={currentUser}
          onUserChange={onUserChange}
          actions={topbarActions}
        />
        {showDemoChrome && dataModeBanner ? dataModeBanner : null}
        {showDemoChrome ? demoChrome : null}
        <main
          className={
            flushContent
              ? "min-w-0 flex-1 overflow-x-hidden"
              : "min-w-0 flex-1 overflow-x-hidden p-6"
          }
        >
          {children}
        </main>
      </div>
    </div>
  );
}
