function ProgressRing({ progress, color }: { progress: number; color: string }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="4"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[11px] font-semibold text-slate-700">
        {progress}%
      </span>
    </div>
  );
}

export function RetardBadge({ days }: { days: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200/80">
      Retard {days}j
    </span>
  );
}

export function ChantierCard({
  title,
  client,
  location,
  progress,
  retardDays,
  accentColor,
  tasks,
  reserves,
  dateLabel,
}: {
  title: string;
  client: string;
  location: string;
  progress: number;
  retardDays?: number;
  accentColor: string;
  tasks: number;
  reserves: number;
  dateLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="h-1" style={{ backgroundColor: accentColor }} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{client}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {location}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <ProgressRing progress={progress} color={accentColor} />
            {retardDays !== undefined && <RetardBadge days={retardDays} />}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tasks} tâches
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            {reserves} réserves
          </span>
          <span className="ml-auto font-medium text-slate-600">{dateLabel}</span>
        </div>
      </div>
    </article>
  );
}
