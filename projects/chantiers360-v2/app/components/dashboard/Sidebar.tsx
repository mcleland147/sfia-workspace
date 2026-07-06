import Link from "next/link";

const navItems: Array<{
  id: string;
  href: string;
  label: string;
  icon: string;
  disabled?: boolean;
}> = [
  { id: "dashboard", href: "/", label: "Tableau de bord", icon: "grid" },
  { id: "building", href: "/", label: "Chantiers", icon: "building" },
  { id: "flag", href: "#", label: "Réserves (INC-02)", icon: "flag", disabled: true },
  { id: "compass", href: "#", label: "Jalons (INC-03)", icon: "compass", disabled: true },
  { id: "doc", href: "#", label: "Comptes rendus (INC-04)", icon: "doc", disabled: true },
];

function NavIcon({ type }: { type: string }) {
  const className = "h-5 w-5";
  switch (type) {
    case "grid":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
    case "building":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V5.25A2.25 2.25 0 016 3h12a2.25 2.25 0 012.25 2.25V21M9 8.25h.008v.008H9V8.25zm0 3h.008v.008H9v-.008zm0 3h.008v.008H9v-.008zm3-6h.008v.008H12V8.25zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008z" />
        </svg>
      );
    case "flag":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18M3 4.5h12.75a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5H4.5M3 9h13.5a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5H4.5M3 13.5h10.5a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5H4.5" />
        </svg>
      );
    case "compass":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0l-3-3m3 3l3-3M15 17.25V9m0 0l3 3m-3-3l-3 3" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
  }
}

export function Sidebar({
  activeNav = "dashboard",
}: {
  activeNav?: "dashboard" | "chantier";
}) {
  return (
    <aside className="flex w-[72px] shrink-0 flex-col items-center bg-navy py-6">
      <Link
        href="/"
        className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple text-sm font-bold text-white"
        aria-label="Accueil"
      >
        C
      </Link>
      <nav className="flex flex-1 flex-col items-center gap-4">
        {navItems.map((item) => {
          const isActive =
            item.id === "dashboard"
              ? activeNav === "dashboard"
              : item.id === "building" && activeNav === "chantier";

          const className = `flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
            isActive
              ? "bg-white/10 text-white"
              : item.disabled
                ? "cursor-not-allowed text-slate-600 opacity-40"
                : "text-slate-500 hover:bg-white/5 hover:text-slate-300"
          }`;

          if (item.disabled) {
            return (
              <span key={item.id} className={className} aria-label={item.label} title={item.label}>
                <NavIcon type={item.icon} />
              </span>
            );
          }

          return (
            <Link key={item.id} href={item.href} className={className} aria-label={item.label}>
              <NavIcon type={item.icon} />
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple text-xs font-semibold text-white">
        AL
      </div>
    </aside>
  );
}
