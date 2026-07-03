import { cn } from "./cn";

type BadgeTone = "status" | "priority" | "late" | "anomaly" | "channel" | "live";

const TONE_CLASSES: Record<BadgeTone, string> = {
  status: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  priority: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  late: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  anomaly: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  channel: "bg-violet-500/10 text-violet-700 border-violet-500/20",
  live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

interface PremiumBadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function PremiumBadge({
  children,
  tone = "status",
  className,
}: PremiumBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PremiumAvatar({
  initials,
  className,
  dark = false,
}: {
  initials: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold",
        dark
          ? "bg-teal-500/20 text-teal-300"
          : "bg-teal-500/15 text-teal-800",
        className,
      )}
    >
      {initials}
    </span>
  );
}
