"use client";

import { useEffect } from "react";

/**
 * Records one voluntary opening after the space is admitted.
 * A reload, a retry of the same navigation key, or a surface change
 * inside the same document does not advance the timestamp.
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
    if (nav?.type === "reload") return;
    const key = `${spaceType}:${spaceId}:${nav?.type || "navigate"}:${Math.floor(performance.timeOrigin)}`;
    const storageKey = `sfia-space-open:${spaceType}:${spaceId}`;
    if (sessionStorage.getItem(storageKey) === key) return;
    sessionStorage.setItem(storageKey, key);
    void fetch(`/api/portfolio/spaces/${spaceType}/${encodeURIComponent(spaceId)}/opened`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ navigationKey: key }),
    }).catch(() => undefined);
  }, [admitted, spaceId, spaceType]);
  return null;
}
