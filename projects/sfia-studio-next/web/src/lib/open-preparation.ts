/**
 * Canonical D2 open-preparation client action (UX-004).
 * One POST /api/preparations; no automatic second POST after uncertain ACK.
 * Does not create a durable project.
 */

export type OpenPreparationResult =
  | { kind: "opened"; preparationId: string }
  | { kind: "refused"; message: string; httpStatus?: number }
  | { kind: "unauthorized" }
  | { kind: "uncertain"; message: string; discoveredId?: string };

type PrepItem = { id: string };

async function readPortfolioPrepItems(): Promise<PrepItem[]> {
  try {
    const r = await fetch("/api/portfolio");
    if (!r.ok) return [];
    const j = (await r.json()) as {
      portfolio?: { preparations?: { items?: PrepItem[] } };
    };
    return j.portfolio?.preparations?.items ?? [];
  } catch {
    return [];
  }
}

/**
 * Start a new OPEN preparation and return its real id, or a controlled uncertainty.
 * Callers must guard against concurrent invocations.
 */
export async function openPreparation(input?: {
  knownPreparationIds?: Iterable<string>;
}): Promise<OpenPreparationResult> {
  const before = new Set(input?.knownPreparationIds ?? []);
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

    if (res.ok && j.preparationId) {
      return { kind: "opened", preparationId: j.preparationId };
    }

    if (!res.ok) {
      return {
        kind: "refused",
        message: j.error ?? `création refusée (HTTP ${res.status})`,
        httpStatus: res.status,
      };
    }

    // ACK uncertainty: re-read portfolio, never auto-retry POST.
    const items = await readPortfolioPrepItems();
    const discovered = items.find((p) => !before.has(p.id));
    if (discovered) {
      return {
        kind: "uncertain",
        discoveredId: discovered.id,
        message: `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
      };
    }
    return {
      kind: "uncertain",
      message:
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
    };
  } catch {
    const items = await readPortfolioPrepItems();
    const discovered = items.find((p) => !before.has(p.id));
    if (discovered) {
      return {
        kind: "uncertain",
        discoveredId: discovered.id,
        message: `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
      };
    }
    return {
      kind: "uncertain",
      message:
        "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
    };
  }
}
