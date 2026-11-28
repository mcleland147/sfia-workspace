"use client";

import { useEffect } from "react";

const ENTRY_KEY = "sfia-space-entry";
const TAB_KEY = "sfia-tab";
const SEQ_KEY = "sfia-open-seq";

/** Same document only. A remount without a new entry note reuses this key. */
let rememberedEntry: { space: string; key: string } | null = null;

export function notePersonalSpaceEntry(spaceType: "project" | "preparation", spaceId: string) {
  const tab = sessionStorage.getItem(TAB_KEY) || crypto.randomUUID();
  sessionStorage.setItem(TAB_KEY, tab);
  const seq = Number(sessionStorage.getItem(SEQ_KEY) || "0") + 1;
  sessionStorage.setItem(SEQ_KEY, String(seq));
  sessionStorage.setItem(ENTRY_KEY, JSON.stringify({ spaceType, spaceId, key: `${tab}:${seq}` }));
}

/**
 * Records one admitted entry. A reload, a surface change, a rerender,
 * or a delayed replay of an older key from the same tab does not advance it.
 */
export function PersonalSpaceOpenSignal(props: {
  spaceType: "project" | "preparation";
  spaceId: string;
  admitted: boolean;
}) {
  const { spaceType, spaceId, admitted } = props;
  useEffect(() => {
    if (!admitted || !spaceId) return;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const raw = sessionStorage.getItem(ENTRY_KEY);
    let noted: { spaceType?: string; spaceId?: string; key?: string } | null = null;
    if (raw) {
      try {
        noted = JSON.parse(raw) as { spaceType?: string; spaceId?: string; key?: string };
      } catch {
        noted = null;
      }
    }
    const notedKey =
      noted && noted.spaceType === spaceType && noted.spaceId === spaceId ? noted.key : undefined;
    if (nav?.type === "reload" && !notedKey) return;
    const space = `${spaceType}:${spaceId}`;
    const tab = sessionStorage.getItem(TAB_KEY) || crypto.randomUUID();
    sessionStorage.setItem(TAB_KEY, tab);
    let key = notedKey || (rememberedEntry?.space === space ? rememberedEntry.key : undefined);
    if (!key) {
      const seq = Number(sessionStorage.getItem(SEQ_KEY) || "0") + 1;
      key = `${tab}:${seq}`;
      sessionStorage.setItem(SEQ_KEY, String(seq));
    }
    rememberedEntry = { space, key };
    const guard = `sfia-open-sent:${key}`;
    if (sessionStorage.getItem(guard)) return;
    sessionStorage.setItem(guard, "1");
    if (notedKey) sessionStorage.removeItem(ENTRY_KEY);
    void fetch(`/api/portfolio/spaces/${spaceType}/${encodeURIComponent(spaceId)}/opened`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ navigationKey: key }),
    }).catch(() => undefined);
  }, [admitted, spaceId, spaceType]);
  return null;
}
