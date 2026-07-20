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
import { runStudioHarness } from "@/lib/harness/actions";
import {
  actionForGateConfirm,
  buildStudioHarnessRequest,
} from "@/lib/harness/buildRequest";
import type { StudioHarnessView } from "@/lib/harness/types";
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

const PROOF_DIR_KEY = "sfia-vs-inc-b-proofDir";
const HARNESS_VIEW_KEY = "sfia-vs-inc-b-harnessView";

function persistHarness(view: StudioHarnessView | null): void {
  if (typeof window === "undefined") return;
  if (!view) {
    window.sessionStorage.removeItem(HARNESS_VIEW_KEY);
    window.sessionStorage.removeItem(PROOF_DIR_KEY);
    return;
  }
  window.sessionStorage.setItem(HARNESS_VIEW_KEY, JSON.stringify(view));
  if (view.proofDir) {
    window.sessionStorage.setItem(PROOF_DIR_KEY, view.proofDir);
  }
}

function readPersistedHarness(): StudioHarnessView | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(HARNESS_VIEW_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StudioHarnessView;
  } catch {
    return null;
  }
}

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
  resumeFromHarness: () => void;
}

const VsDemoContext = createContext<VsDemoContextValue | null>(null);

function routeFromPath(pathname: string): StudioRoute {
  if (pathname.startsWith("/decision")) return "/decision";
  if (pathname.startsWith("/cycle-actif")) return "/cycle-actif";
  if (pathname.startsWith("/synthese")) return "/synthese";
  return "/nouvelle-demande";
}

function deriveStateFromHarness(view: StudioHarnessView): VsStateId {
  if (view.stopOrTimeout === "STOP") return "VS-UX-VAR-STOP";
  if (view.stopOrTimeout === "timeout" || view.errorCode?.includes("TIMEOUT")) {
    return "VS-UX-VAR-ERROR";
  }
  if (
    view.errorCode?.includes("HASH") ||
    view.errorCode?.includes("BRANCH") ||
    view.errorCode?.includes("HEAD") ||
    view.errorCode?.includes("ALLOWLIST")
  ) {
    return "VS-UX-VAR-GO-INVALID";
  }
  if (view.ok && view.goValid) return "VS-UX-05";
  if (view.errorCode === "GATE_NO_GO") return "VS-UX-10";
  if (!view.ok) return "VS-UX-VAR-ERROR";
  return "VS-UX-05";
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
  const [harnessView, setHarnessView] = useState<StudioHarnessView | null>(null);
  const [harnessBusy, setHarnessBusy] = useState(false);

  useEffect(() => {
    const persisted = readPersistedHarness();
    if (persisted) setHarnessView(persisted);
  }, []);

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

  const applyHarnessView = useCallback((view: StudioHarnessView) => {
    setHarnessView(view);
    persistHarness(view);
  }, []);

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

    const mapped = actionForGateConfirm({ gateAction, stateId });
    if (mapped === "local-only") {
      if (gateAction === "NO-GO") {
        setStateId("VS-UX-10");
      } else if (gateAction === "CORRIGER") {
        setStateId("VS-UX-02");
      }
      return;
    }

    setHarnessBusy(true);
    const req = buildStudioHarnessRequest(mapped, {
      morrisDecision: gateAction === "NO-GO" ? "NO-GO" : "GO",
      action: gateAction === "NO-GO" ? "run-fixture" : mapped,
    });

    void runStudioHarness(req)
      .then((view) => {
        applyHarnessView(view);
        setStateId(deriveStateFromHarness(view));
      })
      .finally(() => setHarnessBusy(false));
  }, [applyHarnessView, gateAction, setStateId, stateId]);

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
    setHarnessBusy(true);
    const req = buildStudioHarnessRequest("stop");
    void runStudioHarness(req)
      .then((view) => {
        applyHarnessView(view);
        setStateId("VS-UX-VAR-STOP");
      })
      .finally(() => setHarnessBusy(false));
  }, [applyHarnessView, setStateId]);

  const resumeFromHarness = useCallback(() => {
    const proofDir =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem(PROOF_DIR_KEY) ?? undefined
        : undefined;
    if (!proofDir) return;
    setHarnessBusy(true);
    const req = buildStudioHarnessRequest("resume", { proofDir });
    void runStudioHarness(req)
      .then((view) => {
        // Resume rebuilds derived view only — no implicit GO, no forced navigation.
        applyHarnessView(view);
      })
      .finally(() => setHarnessBusy(false));
  }, [applyHarnessView]);

  const resetDemo = useCallback(() => {
    setAbandoned(false);
    setGateAction(null);
    setGateConfirmed(false);
    setAbandonConfirmOpen(false);
    setFinalAction(null);
    setStopFired(false);
    setHarnessView(null);
    persistHarness(null);
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
      harnessView,
      harnessBusy,
      setStateId,
      selectGateAction,
      openAbandonConfirm,
      closeAbandonConfirm,
      confirmAbandon,
      confirmGate,
      selectFinalAction,
      fireStop,
      resetDemo,
      resumeFromHarness,
    }),
    [
      stateId,
      abandoned,
      gateAction,
      gateConfirmed,
      abandonConfirmOpen,
      finalAction,
      stopFired,
      harnessView,
      harnessBusy,
      setStateId,
      selectGateAction,
      openAbandonConfirm,
      closeAbandonConfirm,
      confirmAbandon,
      confirmGate,
      selectFinalAction,
      fireStop,
      resetDemo,
      resumeFromHarness,
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
