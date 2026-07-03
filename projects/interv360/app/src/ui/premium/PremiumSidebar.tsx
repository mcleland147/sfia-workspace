import type { DemoUser } from "../../domain/demoUsers";
import { simulatedRoleLabels } from "../../domain/simulatedRoles";
import type { DemoScreenId } from "../demo/demoScreens";
import { COMMAND_CENTER_OPS_STATUS } from "./premiumPresentationData";
import { cn } from "./cn";

type NavItem = {
  label: string;
  screenId?: DemoScreenId;
  badge?: number;
  disabled?: boolean;
  title?: string;
  isActive?: (screen: DemoScreenId) => boolean;
};

const NAV_SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Pilotage",
    items: [
      {
        label: "Dashboard",
        screenId: "overview",
        isActive: (screen) => screen === "overview",
      },
    ],
  },
  {
    title: "Opérations",
    items: [
      {
        label: "Demandes",
        screenId: "requests",
        badge: 3,
        isActive: (screen) => screen === "requests",
      },
      {
        label: "Planning",
        screenId: "scenario",
        isActive: (screen) => screen === "scenario",
      },
      {
        label: "Interventions",
        screenId: "details",
        isActive: (screen) => screen === "details",
      },
    ],
  },
  {
    title: "Référentiel",
    items: [
      {
        label: "Clients",
        screenId: "journal",
        isActive: (screen) => screen === "journal",
      },
      {
        label: "Catalogue",
        disabled: true,
        title: "Hors scope MVP",
        isActive: () => false,
      },
    ],
  },
];

function getUserInitials(displayName: string): string {
  return displayName
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface PremiumSidebarProps {
  currentScreen: DemoScreenId;
  currentUser: DemoUser;
  onNavigate: (screenId: DemoScreenId) => void;
}

export function PremiumSidebar({
  currentScreen,
  currentUser,
  onNavigate,
}: PremiumSidebarProps) {
  const roleLabel = simulatedRoleLabels[currentUser.role];

  return (
    <aside
      className="sticky top-0 flex h-screen w-[220px] shrink-0 flex-col border-r border-white/5 bg-[#0c1221] text-slate-200"
      aria-label="Navigation principale"
    >
      <div className="flex h-16 items-center gap-3 border-b border-white/5 px-5">
        <div
          className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-sm font-black text-white shadow-[0_0_18px_rgba(13,148,136,0.45)]"
          aria-hidden="true"
        >
          I
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-white">Interv360</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            SAV Command Center
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4" aria-label="Sections produit">
        {NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = item.isActive?.(currentScreen) ?? false;
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-gradient-to-r from-teal-500/20 to-teal-500/5 text-white shadow-[inset_3px_0_0_#2dd4bf]"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                      item.disabled && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-slate-400",
                    )}
                    aria-label={`Navigation latérale ${item.label}`}
                    aria-current={isActive ? "page" : undefined}
                    aria-disabled={item.disabled ? true : undefined}
                    title={item.title}
                    disabled={item.disabled}
                    onClick={() => {
                      if (!item.disabled && item.screenId) {
                        onNavigate(item.screenId);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="ml-auto rounded-full border border-amber-500/35 bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold text-amber-300">
                        {item.badge}
                      </span>
                    ) : isActive ? (
                      <span
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-400"
                        aria-hidden="true"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/5 px-3 py-3" aria-label="Statut opérationnel">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
          Statut opérationnel
        </p>
        <div className="mb-2 grid grid-cols-3 gap-1">
          {[
            { value: COMMAND_CENTER_OPS_STATUS.toQualify, label: "À qualifier" },
            { value: COMMAND_CENTER_OPS_STATUS.late, label: "En retard" },
            { value: COMMAND_CENTER_OPS_STATUS.anomalies, label: "Anomalies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-white/5 bg-white/[0.04] px-1 py-1.5 text-center"
            >
              <p className="text-sm font-black text-white">{stat.value}</p>
              <p className="text-[9px] font-semibold leading-tight text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-semibold text-slate-500">
            <span>Charge qualification</span>
            <span>{COMMAND_CENTER_OPS_STATUS.qualificationLoad}%</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400"
              style={{ width: `${COMMAND_CENTER_OPS_STATUS.qualificationLoad}%` }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.06] p-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-600 text-[11px] font-bold text-white">
            {getUserInitials(currentUser.displayName)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-white">
              {currentUser.displayName}
            </p>
            <p className="text-[10px] text-slate-500">{roleLabel}</p>
            <p className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              En ligne
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
