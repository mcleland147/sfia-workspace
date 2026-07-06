import Link from "next/link";
import { Sidebar } from "@/components/dashboard/Sidebar";

export function AppShell({
  children,
  activeNav = "dashboard",
}: {
  children: React.ReactNode;
  activeNav?: "dashboard" | "chantier";
}) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar activeNav={activeNav} />
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

export function BackToDashboardLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Retour au tableau de bord
    </Link>
  );
}
