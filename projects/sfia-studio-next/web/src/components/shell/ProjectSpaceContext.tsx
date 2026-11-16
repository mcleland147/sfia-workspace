"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type ProjectSpaceInfo = {
  projectId: string;
  projectName: string | null;
  subtitle: string | null;
  /** True only when the authorized project payload is ready. */
  available: boolean;
  /**
   * When true, hide project deep links (404 / unauthorized / temporary).
   * Must stay false during in-flight load so rail nav intent races still work.
   */
  blockNavigation?: boolean;
};

type ProjectSpaceContextValue = {
  info: ProjectSpaceInfo | null;
  setInfo: (info: ProjectSpaceInfo | null) => void;
};

const ProjectSpaceContext = createContext<ProjectSpaceContextValue | null>(null);

export function ProjectSpaceProvider(props: { children: ReactNode }) {
  const [info, setInfo] = useState<ProjectSpaceInfo | null>(null);
  const value = useMemo(() => ({ info, setInfo }), [info]);
  return (
    <ProjectSpaceContext.Provider value={value}>{props.children}</ProjectSpaceContext.Provider>
  );
}

export function useProjectSpace(): ProjectSpaceContextValue {
  const ctx = useContext(ProjectSpaceContext);
  if (!ctx) {
    return {
      info: null,
      setInfo: () => {
        /* no-op outside provider */
      },
    };
  }
  return ctx;
}
