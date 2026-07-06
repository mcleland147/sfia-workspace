import { heroStats, heroSubtitle } from "@/data/mockChantiers";

const topNav = [
  { label: "Tableau de bord", active: true },
  { label: "Chantiers", active: false },
  { label: "Réserves", active: false },
  { label: "Jalons", active: false },
];

const statCards = [
  { value: heroStats.actifs, label: "CHANTIERS ACTIFS", color: "text-accent-blue" },
  { value: heroStats.enRetard, label: "EN RETARD", color: "text-accent-red" },
  { value: heroStats.tachesOuvertes, label: "TÂCHES OUVERTES", color: "text-accent-yellow" },
  { value: heroStats.reservesOuvertes, label: "RÉSERVES OUVERTES", color: "text-accent-orange" },
];

export function DashboardHero() {
  return (
    <section className="bg-navy-hero px-8 pb-10 pt-6 text-white">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple text-sm font-bold">
            C
          </div>
          <span className="text-lg font-semibold tracking-tight">Chantiers360</span>
        </div>
        <nav className="flex items-center gap-1">
          {topNav.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-navy-card text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-start justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-[2rem] font-bold leading-tight tracking-tight">
            Votre chantier du jour.
          </h1>
          <p className="mt-3 text-sm text-slate-400">{heroSubtitle}</p>
          <button
            type="button"
            className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-slate-100"
          >
            + Nouveau chantier
          </button>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[140px] rounded-2xl bg-navy-card px-5 py-4"
            >
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="mt-1 text-[10px] font-semibold tracking-wider text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
