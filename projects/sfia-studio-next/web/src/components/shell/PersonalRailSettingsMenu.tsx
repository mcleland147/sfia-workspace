"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { resolvePersonalSettingsActive } from "@/domains/finops/usage-projection";

const SETTINGS_INTEGRATIONS_HREF = "/settings/integrations";
const SETTINGS_CONSUMPTION_HREF = "/settings/consumption";

function MenuGlyph({ kind }: { kind: "plug" | "chart" }) {
  if (kind === "plug") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 22v-5M9 8V2M15 8V2M7 8h10a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V5M4 19h16M8 17V11M12 17V7M16 17v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PersonalRailSettingsMenu({ pathname }: { pathname: string }) {
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState<"integrations" | "consumption" | null>(null);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = resolvePersonalSettingsActive(pathname);

  const close = useCallback(() => {
    setOpen(false);
    setTooltip(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function onPointer(e: MouseEvent) {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      const panel = document.getElementById(menuId);
      if (panel?.contains(t)) return;
      close();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open, close, menuId]);

  function showTooltip(kind: "integrations" | "consumption") {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    tooltipTimer.current = setTimeout(() => setTooltip(kind), 1000);
  }

  function hideTooltip() {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    setTooltip(null);
  }

  return (
    <div className="studio-rail-settings-wrap" data-testid="rail-settings-menu">
      {open ? (
        <div
          id={menuId}
          className="studio-rail-settings-popover"
          role="menu"
          aria-label="Paramètres"
          data-testid="rail-settings-popover"
        >
          {tooltip ? (
            <span className="studio-rail-settings-tooltip" role="tooltip" data-testid="rail-settings-tooltip">
              {tooltip === "integrations" ? "Intégrations" : "Consommation et coûts"}
            </span>
          ) : null}
          <Link
            href={SETTINGS_INTEGRATIONS_HREF}
            className={`studio-rail-settings-icon ${active === "integrations" ? "is-active" : ""}`}
            role="menuitem"
            data-testid="rail-settings-integrations"
            onClick={() => setOpen(false)}
            onMouseEnter={() => showTooltip("integrations")}
            onMouseLeave={hideTooltip}
            onFocus={() => showTooltip("integrations")}
            onBlur={hideTooltip}
            aria-current={active === "integrations" ? "page" : undefined}
          >
            <MenuGlyph kind="plug" />
            <span className="sr-only">Intégrations</span>
          </Link>
          <Link
            href={SETTINGS_CONSUMPTION_HREF}
            className={`studio-rail-settings-icon ${active === "consumption" ? "is-active" : ""}`}
            role="menuitem"
            data-testid="rail-settings-consumption"
            onClick={() => setOpen(false)}
            onMouseEnter={() => showTooltip("consumption")}
            onMouseLeave={hideTooltip}
            onFocus={() => showTooltip("consumption")}
            onBlur={hideTooltip}
            aria-current={active === "consumption" ? "page" : undefined}
          >
            <MenuGlyph kind="chart" />
            <span className="sr-only">Consommation et coûts</span>
          </Link>
        </div>
      ) : null}
      <button
        ref={triggerRef}
        type="button"
        className={`studio-rail-settings-trigger ${open ? "is-open" : ""}`}
        aria-label="Paramètres"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        data-testid="rail-settings-trigger"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.03 1.38 1.15.13.03.26.04.39.04H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export { SETTINGS_CONSUMPTION_HREF, SETTINGS_INTEGRATIONS_HREF };