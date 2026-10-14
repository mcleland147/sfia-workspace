/**
 * P6 — Product live conversational activity events (browser-safe).
 * Intermediate observability only — never HumanDecision / Evidence / SUCCESS.
 */

export type NoraLiveActivityKind =
  | "mission_started"
  | "activity_update"
  | "tool_started"
  | "tool_completed"
  | "tool_failed"
  | "continuation_started"
  | "waiting"
  | "stop_requested"
  | "stop_confirmed"
  | "mission_completed"
  | "mission_incomplete"
  | "mission_cognitive_stop"
  | "mission_failed"
  | "transport_interrupted";

export type NoraLiveActivityEvent = {
  kind: NoraLiveActivityKind;
  /** Stable ordinal within one mission transport. */
  seq: number;
  at: string;
  /** Short Pilote-facing label — never secrets / full docs / private chain-of-thought. */
  label: string;
  /** Optional verified tool name when event is tool-bound. */
  toolName?: string;
  /** Optional path / source identity when tool-bound and safe. */
  sourcePath?: string;
};

export function isNoraLiveActivityEvent(
  value: unknown,
): value is NoraLiveActivityEvent {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const row = value as Record<string, unknown>;
  return (
    typeof row.kind === "string" &&
    typeof row.seq === "number" &&
    Number.isFinite(row.seq) &&
    typeof row.at === "string" &&
    typeof row.label === "string" &&
    row.label.length > 0 &&
    row.label.length < 280
  );
}

function basenamePath(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const parts = path.split("/").filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : path;
}

function friendlyToolVerb(toolName: string | undefined): string {
  if (!toolName) return "consultation";
  if (/read_file|read_file_at_ref/i.test(toolName)) return "lecture";
  if (/search_content|search_files/i.test(toolName)) return "recherche";
  if (/get_diff|compare/i.test(toolName)) return "comparaison";
  if (/get_status|get_head|get_log/i.test(toolName)) return "inspection Git";
  return "consultation";
}

/**
 * Map Product send result → terminal activity kind.
 * Never treat ok=true alone as completed (incomplete / cognitive_stop share ok=true).
 * Browser abort alone is NOT Runner stop_confirmed.
 */
export function terminalLiveActivityFromProductResult(input: {
  result: {
    ok?: boolean;
    status?: string;
    executionIncomplete?: boolean;
  };
  /** True only when Product/orchestrator confirmed Runner stop (status stopped). */
  runnerStopConfirmed?: boolean;
  /** Transport aborted without authoritative Product stopped status. */
  transportAbortedWithoutAck?: boolean;
}): Pick<NoraLiveActivityEvent, "kind" | "label"> {
  const status = input.result.status ?? "";
  if (status === "incomplete" || input.result.executionIncomplete === true) {
    return {
      kind: "mission_incomplete",
      label: "Mission incomplète — une limite de sécurité a été atteinte",
    };
  }
  if (status === "ok" && input.result.ok === true) {
    return { kind: "mission_completed", label: "Mission terminée" };
  }
  if (status === "cognitive_stop") {
    return {
      kind: "mission_cognitive_stop",
      label: "Arrêt cognitif — Nora s’est arrêtée sur une contradiction structurante",
    };
  }
  if (input.transportAbortedWithoutAck) {
    return {
      kind: "transport_interrupted",
      label: "Connexion interrompue — arrêt serveur non confirmé",
    };
  }
  if (status === "stopped" || input.runnerStopConfirmed) {
    return { kind: "stop_confirmed", label: "Arrêt confirmé" };
  }
  if (status === "provider_error" || status === "provider_unavailable") {
    return {
      kind: "mission_failed",
      label: "Échec fournisseur — la mission n’a pas pu aboutir",
    };
  }
  return { kind: "mission_failed", label: "Mission en échec" };
}

/** Map redacted ToolRouter EventSink emissions → Pilote-safe activity rows. */
export function liveActivityFromTechnicalToolEvent(input: {
  type: string;
  detail: Record<string, unknown>;
  seq: number;
  at?: string;
}): NoraLiveActivityEvent | null {
  const toolName =
    typeof input.detail.toolName === "string"
      ? input.detail.toolName
      : typeof input.detail.name === "string"
        ? input.detail.name
        : undefined;
  const status =
    typeof input.detail.status === "string" ? input.detail.status : "";
  const sourcePath =
    typeof input.detail.path === "string"
      ? input.detail.path
      : typeof (input.detail.source as { path?: unknown } | undefined)?.path ===
          "string"
        ? String((input.detail.source as { path: string }).path)
        : undefined;
  const shortName = basenamePath(sourcePath);
  const at = input.at ?? new Date().toISOString();
  const verb = friendlyToolVerb(toolName);

  if (status === "running" || /tool[_-]?start/i.test(input.type)) {
    return {
      kind: "tool_started",
      seq: input.seq,
      at,
      label: shortName
        ? `Consultation du document « ${shortName} ».`
        : `Nora prépare une ${verb} des sources.`,
      toolName,
      sourcePath,
    };
  }
  if (status === "failed" || /tool[_-]?fail/i.test(input.type)) {
    return {
      kind: "tool_failed",
      seq: input.seq,
      at,
      label: shortName
        ? `Échec de consultation — « ${shortName} ».`
        : `Échec d’une ${verb}.`,
      toolName,
      sourcePath,
    };
  }
  if (
    status === "succeeded" ||
    status === "ok" ||
    status === "completed" ||
    /tool[_-]?(complete|end|result)/i.test(input.type)
  ) {
    return {
      kind: "tool_completed",
      seq: input.seq,
      at,
      label: shortName
        ? `Document consulté — « ${shortName} ».`
        : `Nora a terminé une ${verb}.`,
      toolName,
      sourcePath,
    };
  }
  return {
    kind: "activity_update",
    seq: input.seq,
    at,
    label: "Nora poursuit l’analyse des sources.",
    toolName,
    sourcePath,
  };
}
