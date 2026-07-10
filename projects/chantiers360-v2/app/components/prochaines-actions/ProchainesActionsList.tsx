import Link from "next/link";
import {
  buildChantierSectionHref,
  formatProchainesActionShortDate,
  getProchainesActionStatusDisplay,
  getSourceTypeBadgeLabel,
} from "@/lib/prochaines-actions/format";
import type { ProchaineActionItem } from "@/lib/prochaines-actions/types";
import type { ProchaineActionSourceType } from "@/lib/prochaines-actions/types";

const PROCHAINES_ACTIONS_CTA_CLASS =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#4f46e5] px-4 py-2 text-[13px] font-semibold leading-none text-white transition hover:bg-[#4338ca]";

/**
 * Classes statiques complètes — requises pour que Tailwind génère les styles
 * (les classes dynamiques depuis lib/ ne sont pas incluses dans le build CSS).
 */
const SOURCE_TYPE_BADGE_CLASS: Record<ProchaineActionSourceType, string> = {
  retard:
    "inline-flex items-center justify-center rounded-[9px] bg-[#fef3c7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#d97706]",
  tache:
    "inline-flex items-center justify-center rounded-[9px] bg-[#eef2ff] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#4f46e5]",
  reserve:
    "inline-flex items-center justify-center rounded-[9px] bg-[#fef3c7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#d97706]",
  "jalon-intervention":
    "inline-flex items-center justify-center rounded-[9px] bg-[#dcfce7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#16a34a]",
  "jalon-milestone":
    "inline-flex items-center justify-center rounded-[9px] bg-[#dcfce7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#16a34a]",
};

const STATUS_BADGE_CLASS: Record<string, string> = {
  "En retard":
    "inline-flex items-center justify-center rounded-[9px] bg-[#fee2e2] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#ef4444]",
  "À faire":
    "inline-flex items-center justify-center rounded-[9px] bg-[#f3f4f6] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#6b7280]",
  "En cours":
    "inline-flex items-center justify-center rounded-[9px] bg-[#f3f4f6] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#6b7280]",
  Ouverte:
    "inline-flex items-center justify-center rounded-[9px] bg-[#fee2e2] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#ef4444]",
  "En cours de traitement":
    "inline-flex items-center justify-center rounded-[9px] bg-[#fee2e2] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#ef4444]",
  Planifié:
    "inline-flex items-center justify-center rounded-[9px] bg-[#dcfce7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#16a34a]",
  Jalon:
    "inline-flex items-center justify-center rounded-[9px] bg-[#dcfce7] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#16a34a]",
  Terminée:
    "inline-flex items-center justify-center rounded-[9px] bg-[#f3f4f6] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#6b7280]",
};

const DEFAULT_STATUS_BADGE_CLASS =
  "inline-flex items-center justify-center rounded-[9px] bg-[#f3f4f6] px-[9px] py-[4px] text-[11px] font-medium leading-none text-[#6b7280]";

function SourceTypeBadge({ sourceType }: { sourceType: ProchaineActionItem["sourceType"] }) {
  return (
    <span className={SOURCE_TYPE_BADGE_CLASS[sourceType]}>
      {getSourceTypeBadgeLabel(sourceType)}
    </span>
  );
}

function StatusBadge({ statusLabel }: { statusLabel: string }) {
  return (
    <span className={STATUS_BADGE_CLASS[statusLabel] ?? DEFAULT_STATUS_BADGE_CLASS}>
      {statusLabel}
    </span>
  );
}

function ListSectionHeader({ count }: { count: number }) {
  const label = count === 1 ? "1 action" : `${count} actions`;

  return (
    <div className="mb-4 flex items-center gap-3">
      <p className="text-lg font-bold leading-none text-[#111827]">Prochaines actions</p>
      <span className="inline-flex items-center justify-center rounded-[9px] bg-[#f3f4f6] px-[9px] py-[3px] text-[11px] font-medium leading-none text-[#6b7280]">
        {label}
      </span>
    </div>
  );
}

function EmptyStateIcon() {
  return (
    <svg
      className="mx-auto h-6 w-6 text-[#d1d5db]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function ProchainesActionsList({ items }: { items: ProchaineActionItem[] }) {
  if (items.length === 0) {
    return (
      <section aria-label="Prochaines actions dérivées">
        <ListSectionHeader count={0} />
        <div className="overflow-hidden rounded-[12px] border border-[#f3f4f6] bg-white">
          <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-14 text-center">
            <EmptyStateIcon />
            <p className="mt-4 text-base font-semibold text-[#111827]">
              Aucune action dérivée pour le moment.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#6b7280]">
              Les prochaines actions apparaîtront automatiquement depuis les tâches, réserves,
              jalons ou retards des chantiers.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Prochaines actions dérivées">
      <ListSectionHeader count={items.length} />
      <div className="rounded-[12px] border border-[#f3f4f6] bg-white py-2">
        <ul className="divide-y divide-[#f3f4f6]" aria-label="Liste des prochaines actions">
          {items.map((item) => {
            const isRetard = item.sourceType === "retard";
            const statusDisplay = getProchainesActionStatusDisplay(item);
            const dateDisplay = formatProchainesActionShortDate(item.dueDate);

            return (
              <li key={item.id} className="flex h-14 items-stretch">
                <span
                  className={`w-1 shrink-0 ${isRetard ? "bg-[#ef4444]" : "bg-transparent"}`}
                  aria-hidden="true"
                />
                <div className="flex min-w-0 flex-1 items-center px-5">
                  <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden pr-8">
                    <div className="w-20 shrink-0">
                      <SourceTypeBadge sourceType={item.sourceType} />
                    </div>

                    <p className="hidden w-[200px] shrink-0 truncate text-[13px] leading-none text-[#6b7280] lg:block">
                      {item.chantierTitle}
                    </p>

                    <p className="min-w-0 flex-1 truncate text-[14px] font-medium leading-none text-[#111827]">
                      <span className="lg:hidden">{item.chantierTitle} — </span>
                      {item.label}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-8">
                    <div className="flex w-[92px] shrink-0 items-center">
                      <StatusBadge statusLabel={statusDisplay} />
                    </div>

                    <p className="hidden w-[52px] shrink-0 text-center text-[12px] leading-none tabular-nums text-[#9ca3af] sm:block">
                      {dateDisplay || "\u00a0"}
                    </p>

                    <Link
                      href={buildChantierSectionHref(item.chantierId, item.targetTab)}
                      className={PROCHAINES_ACTIONS_CTA_CLASS}
                      aria-label={`Ouvrir ${item.chantierTitle} — ${item.label}`}
                    >
                      Voir sur le chantier
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
