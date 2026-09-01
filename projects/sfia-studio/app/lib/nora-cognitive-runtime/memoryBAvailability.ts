/**
 * MW1-S01 — Memory B availability contract.
 * Distinguishes available-with-history / available-empty / unavailable.
 * Session (Memory B) ≠ Truth C. Compaction governed in MW1-S02. No materialization (S03).
 */

import { ProductSqliteSession } from "./productSqliteSession";

export type MemoryBAvailability =
  | "available_with_history"
  | "available_empty"
  | "unavailable";

export type MemoryBProbeResult = {
  availability: MemoryBAvailability;
  /** Present only when availability is available_* — never when unavailable. */
  session: ProductSqliteSession | null;
  itemCount: number;
};

export type ProbeMemoryBAvailabilityOptions = {
  projectId: string;
  dbPath: string;
  sessionKey?: string;
  /**
   * Test injection — forces UNAVAILABLE without a second product route.
   * Prefer filesystem/SQLite open failure when portable; use only when needed.
   */
  simulateUnavailable?: boolean;
};

export const MEMORY_B_COGNITIVE_DISCLOSURE: Record<MemoryBAvailability, string> =
  {
    available_with_history: [
      "=== MEMORY B AVAILABILITY (MW1-S01) ===",
      "Conversational Memory B is available for this project/session.",
      "It is non-authoritative and may only support continuity.",
      "Durable Project / LPS / HumanDecision / Evidence remain Truth C only.",
      "Do not treat Memory B as authority.",
    ].join("\n"),
    available_empty: [
      "=== MEMORY B AVAILABILITY (MW1-S01) ===",
      "Conversational Memory B is available but contains no prior items for this Session.",
      "Do not infer or invent missing conversation, transcript, rationale, HumanDecision, authorization or Evidence.",
      "Use Truth C for durable project state.",
    ].join("\n"),
    unavailable: [
      "=== MEMORY B AVAILABILITY (MW1-S01) ===",
      "Conversational Memory B is unavailable.",
      "Use only the current message + supported Truth C.",
      "Do not reconstruct or invent missing transcript, rationale, HumanDecision, authorization or Evidence.",
      "Memory B unavailable ≠ empty conversation history as a proven fact.",
    ].join("\n"),
  };

export const MEMORY_B_PILOTE_NOTICE: Record<MemoryBAvailability, string> = {
  available_with_history:
    "Continuité conversationnelle via Product SQLite Session (project-scoped) — Session ≠ Truth C / LPS / HumanDecision. Project/LPS restent Product SQLite Truth C. AUCUNE EXÉCUTION.",
  available_empty:
    "Aucun contexte conversationnel antérieur n'est disponible pour cette Session. L'état durable du projet vient de Truth C (Product SQLite). Session ≠ Truth C / LPS / HumanDecision. AUCUNE EXÉCUTION.",
  unavailable:
    "Contexte conversationnel non disponible. Ce tour s'appuie uniquement sur le contexte durable Project/Truth C. Aucun transcript n'est reconstruit. Session ≠ Truth C / LPS / HumanDecision. AUCUNE EXÉCUTION.",
};

export function appendMemoryBCognitiveDisclosure(
  systemInstructions: string,
  availability: MemoryBAvailability,
): string {
  return `${systemInstructions.trim()}\n\n${MEMORY_B_COGNITIVE_DISCLOSURE[availability]}`;
}

export function memoryBPiloteNotice(
  availability: MemoryBAvailability,
): string {
  return MEMORY_B_PILOTE_NOTICE[availability];
}

/**
 * Open/read Memory B for resume. Open or initial read failure → UNAVAILABLE
 * (never silently reinterpreted as empty []).
 */
export async function probeMemoryBAvailability(
  options: ProbeMemoryBAvailabilityOptions,
): Promise<MemoryBProbeResult> {
  if (options.simulateUnavailable) {
    return {
      availability: "unavailable",
      session: null,
      itemCount: 0,
    };
  }

  let session: ProductSqliteSession | null = null;
  try {
    session = new ProductSqliteSession({
      projectId: options.projectId,
      dbPath: options.dbPath,
      sessionKey: options.sessionKey ?? "f1-default",
    });
    const items = await session.getItems();
    const itemCount = items.length;
    if (itemCount === 0) {
      return {
        availability: "available_empty",
        session,
        itemCount: 0,
      };
    }
    return {
      availability: "available_with_history",
      session,
      itemCount,
    };
  } catch {
    if (session) {
      try {
        session.close();
      } catch {
        /* ignore close errors after failed probe */
      }
    }
    return {
      availability: "unavailable",
      session: null,
      itemCount: 0,
    };
  }
}
