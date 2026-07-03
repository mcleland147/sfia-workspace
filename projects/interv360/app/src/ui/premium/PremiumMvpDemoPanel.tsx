import type { ReactNode } from "react";
import { cn } from "./cn";

interface PremiumMvpDemoPanelProps {
  label: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function PremiumMvpDemoPanel({
  label,
  children,
  className,
  defaultOpen = false,
}: PremiumMvpDemoPanelProps) {
  return (
    <details
      className={cn(
        "group rounded-xl border border-dashed border-slate-300 bg-slate-50/60",
        className,
      )}
      aria-label={label}
      open={defaultOpen ? true : undefined}
    >
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-bold text-slate-600 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span
            className="text-[10px] font-black uppercase tracking-wider text-slate-400 transition-transform group-open:rotate-90"
            aria-hidden="true"
          >
            ▸
          </span>
          {label}
        </span>
        <span className="mt-0.5 block text-[11px] font-normal text-slate-400">
          Outils MVP et démonstration — replié par défaut sur les écrans premium
        </span>
      </summary>
      <div className="space-y-4 border-t border-dashed border-slate-200 px-4 py-4">
        {children}
      </div>
    </details>
  );
}
