"use client";

import { Suspense, type ReactNode } from "react";
import { VsDemoProvider } from "@/lib/vertical-slice/VsDemoContext";
import { VsDemoChrome } from "@/components/vertical-slice/VsDemoChrome";

function VsDemoInner({ children }: { children: ReactNode }) {
  return (
    <VsDemoProvider>
      <VsDemoChrome />
      {children}
    </VsDemoProvider>
  );
}

/** Provider + chrome POC Increment A (query `?vs=`). */
export function VsDemoRoot({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <VsDemoInner>{children}</VsDemoInner>
    </Suspense>
  );
}
