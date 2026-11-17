"use client";

import type { VisualIconId, VisualSemanticRole } from "@/domains/conversation/visual-composition";
import { resolveVisualIcon } from "@/domains/conversation/visual-composition";

const LABELS: Record<VisualIconId, string> = {
  info: "Information",
  observe: "Observation",
  fact: "Fait",
  hypothesis: "Hypothèse",
  risk: "Risque",
  recommend: "Recommandation",
  decision: "Décision",
  link: "Dépendance",
  step: "Étape",
  source: "Source",
};

function Glyph({ id }: { id: VisualIconId }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (id) {
    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v6M12 7h.01" />
        </svg>
      );
    case "observe":
      return (
        <svg {...common}>
          <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "fact":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );
    case "hypothesis":
      return (
        <svg {...common}>
          <path d="M9 18h6M10 22h4M8 2h8v2a6 6 0 0 1-2.5 4.9L12 11l-1.5 2.1A6 6 0 0 1 8 4V2Z" />
        </svg>
      );
    case "risk":
      return (
        <svg {...common}>
          <path d="m12 3 9 16H3L12 3Z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "recommend":
      return (
        <svg {...common}>
          <path d="M12 3v12M8 11l4 4 4-4" />
          <path d="M5 21h14" />
        </svg>
      );
    case "decision":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M9 8H7a4 4 0 0 0 0 8h2M15 8h2a4 4 0 0 1 0 8h-2M8 12h8" />
        </svg>
      );
    case "step":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8 7.5 16 16.5" />
        </svg>
      );
    case "source":
      return (
        <svg {...common}>
          <path d="M8 4h9a2 2 0 0 1 2 2v14l-4-2-4 2V6a2 2 0 0 0-2-2H6" />
          <path d="M6 8h2M6 12h2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function NoraSemanticIcon(props: {
  icon?: VisualIconId | null;
  role?: VisualSemanticRole | null;
  className?: string;
}) {
  const id = resolveVisualIcon({ icon: props.icon, role: props.role });
  return (
    <span
      className={`fig-visual-icon fig-visual-icon-${id}${props.className ? ` ${props.className}` : ""}`}
      data-testid="nora-visual-icon"
      data-icon={id}
      title={LABELS[id]}
    >
      <Glyph id={id} />
      <span className="sr-only">{LABELS[id]}</span>
    </span>
  );
}
