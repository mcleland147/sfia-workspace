"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { StudioRoute } from "@/lib/navigation";
import {
  defaultStateForRoute,
  metaFor,
  parseVsQuery,
} from "@/lib/vertical-slice/mapping";
import type {
  VsDemoUiState,
  VsFinalAction,
  VsGateAction,
  VsStateId,
} from "@/lib/vertical-slice/types";

interface VsDemoContextValue extends VsDemoUiState {
  setStateId: (id: VsStateId) => void;
  selectGateAction: (action: VsGateAction) => void;
  openAbandonConfirm: () => void;
  closeAbandonConfirm: () => void;
  confirmAbandon: () => void;
  confirmGate: () => void;
  selectFinalAction: (action: VsFinalAction) => void;
  fireStop: () => void;
  resetDemo: () => void;
}

const VsDemoContext = createContext<VsDemoContextValue | null>(null);

function routeFromPath(pathname: string): StudioRoute {
  if (pathname.startsWith("/decision")) return "/decision";
  if (pathname.startsWith("/cycle-actif")) return "/cycle-actif";
  if (pathname.startsWith("/synthese")) return "/synthese";
  return "/nouvelle-demande";
}

export function VsDemoProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "/nouvelle-demande";
  const searchParams = useSearchParams();
  const route = routeFromPath(pathname);

  const [stateId, setStateIdLocal] = useState<VsStateId>(() => {
    return parseVsQuery(searchParams.get("vs")) ?? defaultStateForRoute(route);
  });
  const [abandoned, setAbandoned] = useState(false);
  const [gateAction, setGateAction] = useState<VsGateAction | null>(null);
  const [gateConfirmed, setGateConfirmed] = useState(false);
  const [abandonConfirmOpen, setAbandonConfirmOpen] = useState(false);
  const [finalAction, setFinalAction] = useState<VsFinalAction | null>(null);
  const [stopFired, setStopFired] = useState(false);

  useEffect(() => {
    const fromQuery = parseVsQuery(searchParams.get("vs"));
    if (fromQuery) {
      setStateIdLocal(fromQuery);
      return;
    }
    const meta = metaFor(stateId);
    if (meta.route !== route) {
      setStateIdLocal(defaultStateForRoute(route));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync on route/query only
  }, [pathname, searchParams]);

  const setStateId = useCallback(
    (id: VsStateId) => {
      const meta = metaFor(id);
      setStateIdLocal(id);
      setAbandoned(false);
      setGateAction(null);
      setGateConfirmed(false);
      setAbandonConfirmOpen(false);
      setFinalAction(null);
      setStopFired(id === "VS-UX-VAR-STOP");
      const params = new URLSearchParams(searchParams.toString());
      params.set("vs", id);
      router.push(`${meta.route}?${params.toString()}`);
    },
    [router, searchParams],
  );

  const selectGateAction = useCallback((action: VsGateAction) => {
    setGateAction(action);
    setGateConfirmed(false);
    if (action === "ABANDONNER") {
      setAbandonConfirmOpen(true);
    } else {
      setAbandonConfirmOpen(false);
    }
  }, []);

  const openAbandonConfirm = useCallback(() => setAbandonConfirmOpen(true), []);
  const closeAbandonConfirm = useCallback(() => {
    setAbandonConfirmOpen(false);
    if (gateAction === "ABANDONNER") setGateAction(null);
  }, [gateAction]);

  const confirmAbandon = useCallback(() => {
    setAbandoned(true);
    setAbandonConfirmOpen(false);
    setGateAction("ABANDONNER");
    setGateConfirmed(true);
  }, []);

  const confirmGate = useCallback(() => {
    if (!gateAction || gateAction === "ABANDONNER") return;
    setGateConfirmed(true);
    if (gateAction === "GO") {
      setStateId("VS-UX-05");
    } else if (gateAction === "NO-GO") {
      setStateId("VS-UX-10");
    } else if (gateAction === "CORRIGER") {
      setStateId("VS-UX-02");
    }
  }, [gateAction, setStateId]);

  const selectFinalAction = useCallback(
    (action: VsFinalAction) => {
      setFinalAction(action);
      if (action === "ABANDONNER") {
        setAbandoned(true);
      }
      if (action === "CLOTURER") {
        setStateId("VS-UX-10");
      }
    },
    [setStateId],
  );

  const fireStop = useCallback(() => {
    setStopFired(true);
    setStateId("VS-UX-VAR-STOP");
  }, [setStateId]);

  const resetDemo = useCallback(() => {
    setAbandoned(false);
    setGateAction(null);
    setGateConfirmed(false);
    setAbandonConfirmOpen(false);
    setFinalAction(null);
    setStopFired(false);
    setStateId("VS-UX-01");
  }, [setStateId]);

  const value = useMemo<VsDemoContextValue>(
    () => ({
      stateId,
      abandoned,
      gateAction,
      gateConfirmed,
      abandonConfirmOpen,
      finalAction,
      stopFired,
      setStateId,
      selectGateAction,
      openAbandonConfirm,
      closeAbandonConfirm,
      confirmAbandon,
      confirmGate,
      selectFinalAction,
      fireStop,
      resetDemo,
    }),
    [
      stateId,
      abandoned,
      gateAction,
      gateConfirmed,
      abandonConfirmOpen,
      finalAction,
      stopFired,
      setStateId,
      selectGateAction,
      openAbandonConfirm,
      closeAbandonConfirm,
      confirmAbandon,
      confirmGate,
      selectFinalAction,
      fireStop,
      resetDemo,
    ],
  );

  return (
    <VsDemoContext.Provider value={value}>{children}</VsDemoContext.Provider>
  );
}

export function useVsDemo(): VsDemoContextValue {
  const ctx = useContext(VsDemoContext);
  if (!ctx) {
    throw new Error("useVsDemo must be used within VsDemoProvider");
  }
  return ctx;
}
