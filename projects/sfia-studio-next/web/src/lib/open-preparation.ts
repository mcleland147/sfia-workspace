/**
 * Canonical D2 open-preparation client action (UX-004).
 * One voluntary POST /api/preparations; no automatic second POST after uncertain ACK.
 * Does not create a durable project.
 *
 * OPENED requires an API preparationId for this command — portfolio diffs alone
 * never upgrade UNCERTAIN to a confirmed creation (no causal correlation in the
 * existing API contract).
 *
 * Single-flight is in-memory for the current browser document only — not
 * server idempotence, and not cross-tab / cross-session protection.
 */

export type OpenPreparationResult =
  | { kind: "opened"; preparationId: string }
  | { kind: "refused"; message: string; httpStatus?: number }
  | { kind: "unauthorized" }
  | { kind: "uncertain"; message: string };

export type OpenPreparationOutcome = OpenPreparationResult | { kind: "busy" };

const UNCERTAIN_MESSAGE =
  "Création incertaine (accusé de réception insuffisant). La préparation a peut-être été enregistrée — consultez les préparations existantes. Aucun nouveau POST automatique.";

const NETWORK_UNCERTAIN_MESSAGE =
  "Réseau interrompu pendant la création. Résultat non vérifiable — consultez les préparations existantes. Pas de second POST automatique.";

type BusyListener = (busy: boolean) => void;

let flight: Promise<OpenPreparationResult> | null = null;
const busyListeners = new Set<BusyListener>();

function setFlight(next: Promise<OpenPreparationResult> | null): void {
  flight = next;
  const busy = flight !== null;
  for (const listener of busyListeners) {
    listener(busy);
  }
}

/** Subscribe to shared open-preparation busy state (same document only). */
export function subscribeOpenPreparationBusy(listener: BusyListener): () => void {
  busyListeners.add(listener);
  listener(flight !== null);
  return () => {
    busyListeners.delete(listener);
  };
}

export function isOpenPreparationBusy(): boolean {
  return flight !== null;
}

async function postOpenPreparation(): Promise<OpenPreparationResult> {
  try {
    const res = await fetch("/api/preparations", { method: "POST" });
    let j: { preparationId?: string; error?: string } = {};
    try {
      j = await res.json();
    } catch {
      j = {};
    }

    if (res.status === 401) {
      return { kind: "unauthorized" };
    }

    if (res.ok && typeof j.preparationId === "string" && j.preparationId.length > 0) {
      return { kind: "opened", preparationId: j.preparationId };
    }

    if (!res.ok) {
      return {
        kind: "refused",
        message: j.error ?? `création refusée (HTTP ${res.status})`,
        httpStatus: res.status,
      };
    }

    // ACK incomplete: never infer a new preparation from portfolio membership.
    return { kind: "uncertain", message: UNCERTAIN_MESSAGE };
  } catch {
    return { kind: "uncertain", message: NETWORK_UNCERTAIN_MESSAGE };
  }
}

/**
 * Run the canonical open-preparation POST under a document-scoped single-flight lock.
 * Concurrent callers receive `{ kind: "busy" }` and do not start a second POST.
 * The lock is held until `onResult` finishes (including navigation), closing the
 * window between ACK and route change.
 */
export async function runOpenPreparation(
  onResult: (result: OpenPreparationResult) => void | Promise<void>,
): Promise<OpenPreparationOutcome> {
  if (flight) {
    return { kind: "busy" };
  }

  const pending = postOpenPreparation();
  setFlight(pending);
  try {
    const result = await pending;
    await onResult(result);
    return result;
  } finally {
    setFlight(null);
  }
}

/** Test-only: POST classification without acquiring the UI single-flight lock. */
export async function openPreparationForTest(): Promise<OpenPreparationResult> {
  return postOpenPreparation();
}
