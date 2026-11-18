"use client";

/**
 * C2-08 — DEV/E2E only: throw after client mount when window flag matches block id.
 * Relocated out of legacy NoraCompositionGraphs so artisan layout can be retired.
 */

import React, { useEffect, useState, type ReactNode } from "react";

void React;

export function E2eCompositionThrowProbe({ blockId }: { blockId: string }): ReactNode {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    if (typeof window === "undefined") return;
    const w = window as Window & { __SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__?: string };
    if (w.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ === blockId) {
      setArmed(true);
    }
  }, [blockId]);
  if (armed && process.env.NODE_ENV !== "production") {
    throw new Error(`SFIA_E2E_COMPOSITION_THROW:${blockId}`);
  }
  return null;
}
