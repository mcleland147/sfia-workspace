import type { ReactNode } from "react";
import type { DemoUser } from "../../domain/demoUsers";
import { getDataSourceModeLabel } from "../../data/requestsRepositoryFactory";
import type { DataSourceMode } from "../../data/requestsRepository.types";
import { DemoUserControl } from "../roles/DemoUserControl";

interface PremiumTopbarProps {
  breadcrumb: string[];
  dataSourceMode: DataSourceMode;
  users: DemoUser[];
  currentUser: DemoUser;
  onUserChange: (userId: string) => void;
  actions?: ReactNode;
}

export function PremiumTopbar({
  breadcrumb,
  dataSourceMode,
  users,
  currentUser,
  onUserChange,
  actions,
}: PremiumTopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Fil d'Ariane">
        {breadcrumb.map((segment, index) => (
          <span key={`${segment}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === breadcrumb.length - 1 ? (
              <strong className="font-semibold text-slate-900">{segment}</strong>
            ) : (
              <span>{segment}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        {actions}
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600">
          {getDataSourceModeLabel(dataSourceMode)}
        </span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
          Live
        </span>
        <div className="app-profile-strip">
          <DemoUserControl
            users={users}
            currentUser={currentUser}
            onUserChange={onUserChange}
          />
        </div>
      </div>
    </header>
  );
}
