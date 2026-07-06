import { distribution, todoItems } from "@/data/mockChantiers";

export function RightPanels() {
  return (
    <aside className="flex w-[300px] shrink-0 flex-col gap-4">
      <div className="rounded-2xl bg-white p-5 shadow-card">
        <h3 className="text-sm font-bold text-slate-900">À faire aujourd&apos;hui</h3>
        <ul className="mt-4 space-y-3">
          {todoItems.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <span
                className="h-8 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              <span className="min-w-0 flex-1 text-sm text-slate-700">{item.label}</span>
              <button
                type="button"
                className="shrink-0 text-xs font-medium text-accent-purple hover:underline"
              >
                Ouvrir →
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-card">
        <h3 className="text-sm font-bold text-slate-900">Répartition</h3>
        <ul className="mt-4 space-y-3">
          {distribution.map((item) => (
            <li key={item.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-slate-600">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.count}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full"
                  style={{ width: item.width, backgroundColor: item.color }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
