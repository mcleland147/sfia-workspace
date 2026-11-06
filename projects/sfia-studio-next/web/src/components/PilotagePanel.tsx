"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { qualifyCommandOutcome } from "@/domains/decisions/divergence-assist";

type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: { id: string; revisionNumber: number; orientation: string } | null;
    proposed: { id: string; revisionNumber: number; orientation: string } | null;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    cki: {
      ckiId: string;
      availability: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        usageNote?: string | null;
        methodRef: string;
        methodVersion: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

type DecisionRow = {
  id: string;
  kind: string;
  statement: string;
  state: string;
  objectRef?: string;
  createdAt: string;
};

type CommandResult = {
  status: string;
  commandId: string | null;
  revision: number | null;
  reason?: string;
  reasonCode?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
  error?: string;
};

type IntentBody = {
  operation?: string;
  utterance?: string;
  sourceKind: string;
  cycleType?: string;
  cycleId?: string;
  toCycleType?: string;
  objective?: string;
  orientation?: string;
  trajectoryRevisionId?: string;
  methodRef?: string;
  methodVersion?: string;
  targetKind?: string;
  targetRef?: string;
  restrictionId?: string;
  statement?: string;
  balanceNote?: string;
  decisionId?: string;
};

type PendingRecord = {
  clientCommandKey: string;
  actInstanceId: string;
  actKey: string;
  signature: string;
  operation: string;
  payload: Record<string, unknown>;
  commandId?: string;
  expectedRevision: number;
  sourceRef: string;
  sourceAction: { operation: string; actKey: string; actInstanceId: string };
};

const TERMINAL = new Set(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT"]);
const CONFIRMED = new Set(["APPLIED", "ALREADY_APPLIED"]);

function storageKey(projectId: string, operation: string, actKey: string) {
  return `sfia.pilotage.pending:${projectId}:${operation}:${actKey}`;
}

function intentSignature(projectId: string, intent: IntentBody): string {
  const operation = intent.operation?.trim() || "UTTERANCE";
  return JSON.stringify({
    projectId,
    operation,
    utterance: intent.utterance ?? "",
    cycleType: intent.cycleType ?? "",
    cycleId: intent.cycleId ?? "",
    toCycleType: intent.toCycleType ?? "",
    objective: intent.objective ?? "",
    orientation: intent.orientation ?? "",
    trajectoryRevisionId: intent.trajectoryRevisionId ?? "",
    methodRef: intent.methodRef ?? "",
    methodVersion: intent.methodVersion ?? "",
    targetKind: intent.targetKind ?? "",
    targetRef: intent.targetRef ?? "",
    restrictionId: intent.restrictionId ?? "",
    decisionId: intent.decisionId ?? "",
    statement: intent.statement ?? "",
  });
}

function readStored(projectId: string, operation: string, signature: string): PendingRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  const prefix = `sfia.pilotage.pending:${projectId}:${operation}:`;
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (!key?.startsWith(prefix)) continue;
    try {
      const rec = JSON.parse(sessionStorage.getItem(key) || "") as PendingRecord;
      if (rec.signature === signature) return rec;
    } catch {
      /* ignore corrupt pending rows */
    }
  }
  return null;
}

function writeStored(projectId: string, record: PendingRecord) {
  sessionStorage.setItem(storageKey(projectId, record.operation, record.actKey), JSON.stringify(record));
}

function clearStored(projectId: string, record: PendingRecord) {
  sessionStorage.removeItem(storageKey(projectId, record.operation, record.actKey));
}

/**
 * Surfaces ML3 Pilotage — états honnêtes.
 * Jamais d'effet présenté comme confirmé avant réponse serveur APPLIED/ALREADY_APPLIED.
 */
export function PilotagePanel({ projectId }: { projectId: string }) {
  const [projection, setProjection] = useState<PilotageProjection | null>(null);
  const [decisions, setDecisions] = useState<DecisionRow[]>([]);
  const [error, setError] = useState("");
  const [journalError, setJournalError] = useState("");
  const [status, setStatus] = useState("");
  const [lastOutcome, setLastOutcome] = useState<{ status: string; reasonCode?: string } | null>(
    null,
  );
  const [busy, setBusy] = useState(false);
  const [pendingLabel, setPendingLabel] = useState<string | null>(null);
  const [unresolved, setUnresolved] = useState<PendingRecord | null>(null);
  const [cycleType, setCycleType] = useState("UX_UI");
  const [toCycleType, setToCycleType] = useState("CADRAGE");
  const [objective, setObjective] = useState("Qualifier l'expérience Pilote–Nora");
  const [methodRef, setMethodRef] = useState("sfia-fast-track");
  const [methodVersion, setMethodVersion] = useState("2.6");
  const [utterance, setUtterance] = useState("");
  const [restrictionTarget, setRestrictionTarget] = useState("*");
  const inflight = useRef(new Map<string, PendingRecord>());

  const load = useCallback(async () => {
    const [pRes, dRes] = await Promise.all([
      fetch(`/api/projects/${projectId}/pilotage`),
      fetch(`/api/projects/${projectId}/decisions`),
    ]);
    if (pRes.status === 401 || dRes.status === 401) {
      setError("Session requise");
      return;
    }
    if (!pRes.ok) {
      setError("Impossible de charger le pilotage");
      return;
    }
    const pj = await pRes.json();
    setProjection(pj.pilotage ?? pj);
    if (!dRes.ok) {
      let message = `Journal HTTP ${dRes.status}`;
      try {
        const dj = (await dRes.json()) as { error?: string; message?: string };
        message = dj.error ?? dj.message ?? message;
      } catch {
        /* keep the HTTP status */
      }
      setJournalError(message);
      setDecisions([]);
    } else {
      const dj = await dRes.json();
      setDecisions(dj.decisions ?? []);
      setJournalError("");
    }
    setError("");
  }, [projectId]);

  useEffect(() => {
    void load();
  }, [load]);

  function forget(record: PendingRecord) {
    inflight.current.delete(record.signature);
    clearStored(projectId, record);
    setUnresolved((current) => (current?.clientCommandKey === record.clientCommandKey ? null : current));
  }

  function remember(record: PendingRecord) {
    inflight.current.set(record.signature, record);
    writeStored(projectId, record);
    setUnresolved(record);
  }

  async function reconcile(record: PendingRecord): Promise<CommandResult | null> {
    try {
      const byKey = await fetch(
        `/api/projects/${projectId}/pilotage/commands/by-key/${encodeURIComponent(record.clientCommandKey)}`,
      );
      if (byKey.ok) return (await byKey.json()) as CommandResult;
    } catch {
      /* try the command id next */
    }
    if (!record.commandId) return null;
    try {
      const byId = await fetch(`/api/projects/${projectId}/pilotage/commands/${record.commandId}`);
      if (byId.ok) return (await byId.json()) as CommandResult;
    } catch {
      return null;
    }
    return null;
  }

  async function applyResult(record: PendingRecord, result: CommandResult) {
    if (result.commandId) {
      record.commandId = result.commandId;
      writeStored(projectId, record);
    }
    setLastOutcome({ status: result.status, reasonCode: result.reasonCode });
    setStatus(
      `${result.status}${result.reasonCode ? ` · ${result.reasonCode}` : ""}${result.reason ? ` — ${result.reason}` : ""}`,
    );
    if (CONFIRMED.has(result.status)) {
      forget(record);
      await load();
      return;
    }
    if (TERMINAL.has(result.status)) {
      forget(record);
      return;
    }
    remember(record);
  }

  async function postRecord(record: PendingRecord): Promise<"network" | "nonjson" | CommandResult> {
    let res: Response;
    try {
      res = await fetch(`/api/projects/${projectId}/pilotage/commands`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": record.clientCommandKey,
        },
        body: JSON.stringify(record.payload),
      });
    } catch {
      return "network";
    }
    const text = await res.text();
    let json: CommandResult;
    try {
      json = JSON.parse(text) as CommandResult;
    } catch {
      return "nonjson";
    }
    if (!res.ok && !json.status) {
      return { status: `HTTP ${res.status}`, commandId: null, revision: null, reason: json.error };
    }
    return json;
  }

  async function resolveUnknown(record: PendingRecord) {
    // R1: UNKNOWN is its own presentation — never keep a prior RESTRICTION/CONFLICT motif.
    setLastOutcome({ status: "UNKNOWN" });
    setStatus("UNKNOWN");
    const found = await reconcile(record);
    if (found?.status && found.status !== "UNKNOWN") {
      await applyResult(record, found);
      return;
    }
    const replay = await postRecord(record);
    if (replay === "network" || replay === "nonjson") {
      remember(record);
      setLastOutcome({ status: "UNKNOWN" });
      setStatus("UNKNOWN — commande non réconciliée");
      return;
    }
    await applyResult(record, replay);
  }

  async function runCommand(intent: IntentBody, pending: string) {
    const operation = intent.operation?.trim() || "UTTERANCE";
    const signature = intentSignature(projectId, intent);
    let record = inflight.current.get(signature) ?? readStored(projectId, operation, signature);
    if (!record) {
      const actInstanceId = crypto.randomUUID();
      const actKey = actInstanceId;
      const clientCommandKey = `cmd_${crypto.randomUUID()}`;
      const sourceRef = `ui:${operation}:${actInstanceId}`;
      const expectedRevision = projection?.revision ?? 0;
      const payload: Record<string, unknown> = {
        ...intent,
        operation: intent.operation?.trim() ? intent.operation : undefined,
        clientCommandKey,
        expectedRevision,
        actInstanceId,
        sourceRef,
        sourceKind: intent.sourceKind,
      };
      record = {
        clientCommandKey,
        actInstanceId,
        actKey,
        signature,
        operation,
        payload,
        expectedRevision,
        sourceRef,
        sourceAction: { operation, actKey, actInstanceId },
      };
    }
    inflight.current.set(signature, record);
    writeStored(projectId, record);
    setBusy(true);
    setPendingLabel(pending);
    // R1: new attempt never reuses a previous command's qualified motif.
    setLastOutcome(null);
    setStatus("");
    try {
      const posted = await postRecord(record);
      if (posted === "network" || posted === "nonjson") {
        await resolveUnknown(record);
        return;
      }
      await applyResult(record, posted);
    } catch {
      setLastOutcome({ status: "UNKNOWN" });
      setStatus("UNKNOWN");
      remember(record);
    } finally {
      setBusy(false);
      setPendingLabel(null);
    }
  }

  if (error) {
    return <div className="panel p-4 text-sm">{error}</div>;
  }
  if (!projection) {
    return <div className="panel p-4 text-sm muted">Chargement du pilotage…</div>;
  }

  const cycle = projection.cycle;
  const methodAbsent = projection.method.presence === "ABSENT";
  const activeRestrictions = projection.restrictions.filter((r) => r.status === "ACTIVE");
  const cycleChoices = [
    "CADRAGE",
    "CONCEPTION_FONCTIONNELLE",
    "UX_UI",
    "ARCHITECTURE_TECHNIQUE",
    "DELIVERY",
    "QA_VALIDATION",
  ];

  return (
    <div className="space-y-4" data-testid="pilotage-panel">
      {pendingLabel ? (
        <div className="panel p-3 text-sm" role="status" data-testid="pilotage-pending">
          {pendingLabel} — effet non confirmé tant que le serveur n&apos;a pas persisté.
        </div>
      ) : null}

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
        <section className="panel p-4 space-y-3" aria-labelledby="traj-title">
          <p className="text-xs muted uppercase tracking-wide">
            {cycle ? "Cycle" : "Trajectoire"} · révision {projection.revision}
          </p>
          <h2 id="traj-title" className="text-xl font-semibold">
            {cycle ? `Cycle ${cycle.cycleType} · ${cycle.status}` : "Aucun cycle actif"}
          </h2>
          <p className="text-sm muted">
            {cycle
              ? cycle.objective
              : "État normal : le projet peut avancer sans cycle ni méthode. Une proposition n'ouvre rien."}
          </p>

          {cycle ? (
            <div className="panel p-3 space-y-2 text-sm" data-testid="cycle-active">
              <div>
                CKI {cycle.cki.ckiId} · disponibilité <strong>{cycle.cki.availability}</strong>
                {cycle.cki.pinnedVersion ? ` · pin ${cycle.cki.pinnedVersion}` : ""}
              </div>
              {cycle.cki.availability === "UNAVAILABLE" || cycle.cki.availability === "ASSOCIATED" ? (
                <p className="text-xs muted" data-testid="cki-limited">
                  Guidance non livrée comme disponible — Nora reste générale sur ce point.
                </p>
              ) : null}
              <label className="block text-sm">
                Transiter vers
                <select
                  className="textarea mt-1"
                  value={toCycleType}
                  onChange={(e) => setToCycleType(e.target.value)}
                  aria-label="Type de cycle cible"
                >
                  {cycleChoices
                    .filter((t) => t !== cycle.cycleType)
                    .map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                </select>
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="close-cycle"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "CLOSE_CYCLE",
                        cycleId: cycle.id,
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: "Je clos ce cycle.",
                      },
                      "Clôture demandée",
                    )
                  }
                >
                  Clore ce cycle
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="transition-cycle"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "TRANSITION_CYCLE",
                        cycleId: cycle.id,
                        cycleType: cycle.cycleType,
                        toCycleType,
                        objective,
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: `Je clos ${cycle.cycleType} et j'ouvre ${toCycleType}.`,
                      },
                      "Transition à confirmer",
                    )
                  }
                >
                  Transiter
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2" data-testid="cycle-absent">
              <label className="block text-sm">
                Type de cycle
                <select
                  className="textarea mt-1"
                  value={cycleType}
                  onChange={(e) => setCycleType(e.target.value)}
                  aria-label="Type de cycle"
                >
                  {cycleChoices.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                Objectif
                <input
                  className="textarea mt-1"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  aria-label="Objectif du cycle"
                />
              </label>
              <label className="block text-sm">
                GO naturel (ou laisser vide pour commande structurée)
                <textarea
                  className="textarea mt-1"
                  value={utterance}
                  onChange={(e) => setUtterance(e.target.value)}
                  placeholder="Ex. « ouvre le cycle cadrage »"
                  aria-label="Énoncé GO"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn"
                  disabled={busy}
                  data-testid="open-cycle"
                  onClick={() =>
                    void runCommand(
                      utterance.trim()
                        ? {
                            utterance,
                            sourceKind: "EXPLICIT_INTERACTION",
                          }
                        : {
                            operation: "OPEN_CYCLE",
                            cycleType,
                            objective,
                            sourceKind: "EXPLICIT_INTERACTION",
                            utterance: `GO : ouvrir cycle ${cycleType}.`,
                          },
                      "Ouverture à confirmer",
                    )
                  }
                >
                  Ouvrir ce cycle
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="propose-trajectory"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "PROPOSE_TRAJECTORY",
                        orientation: objective,
                        sourceKind: "COGNITIVE_PROPOSAL",
                      },
                      "Proposition en cours",
                    )
                  }
                >
                  Proposer une trajectoire
                </button>
              </div>
            </div>
          )}

          {projection.trajectory.proposed ? (
            <div className="space-y-2" data-testid="trajectory-proposed">
              <p className="text-sm">
                Proposition n°{projection.trajectory.proposed.revisionNumber} :{" "}
                {projection.trajectory.proposed.orientation}
              </p>
              <button
                type="button"
                className="btn secondary"
                disabled={busy}
                data-testid="retain-trajectory"
                onClick={() =>
                  void runCommand(
                    {
                      operation: "RETAIN_TRAJECTORY",
                      trajectoryRevisionId: projection.trajectory.proposed?.id,
                      orientation: projection.trajectory.proposed?.orientation,
                      sourceKind: "EXPLICIT_INTERACTION",
                      utterance: "Je retiens cette trajectoire.",
                    },
                    "Rétention à confirmer",
                  )
                }
              >
                Retenir cette trajectoire
              </button>
            </div>
          ) : null}
          {projection.trajectory.retained ? (
            <p className="text-sm muted">
              Orientation retenue n°{projection.trajectory.retained.revisionNumber}
            </p>
          ) : null}
        </section>

        <aside className="space-y-3">
          <section className="panel p-4 space-y-2" aria-labelledby="method-title">
            <h2 id="method-title" className="font-medium">
              Méthode
            </h2>
            {methodAbsent ? (
              <p className="text-sm muted" data-testid="method-absent">
                Aucune méthode retenue — état normal.
              </p>
            ) : (
              <div className="text-sm" data-testid="method-retained">
                <p>
                  {projection.method.presence === "RETAINED"
                    ? `${projection.method.methodRef}@${projection.method.methodVersion}`
                    : null}
                </p>
                {projection.method.presence === "RETAINED" && projection.method.usageRestricted ? (
                  <p className="text-xs" data-testid="method-usage-restricted">
                    usageRestricted — {projection.method.usageNote ?? "pas pleinement applicable"}.
                  </p>
                ) : null}
              </div>
            )}
            <label className="block text-xs">
              Réf.
              <input
                className="textarea mt-1"
                value={methodRef}
                onChange={(e) => setMethodRef(e.target.value)}
              />
            </label>
            <label className="block text-xs">
              Version
              <input
                className="textarea mt-1"
                value={methodVersion}
                onChange={(e) => setMethodVersion(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn secondary"
                disabled={busy}
                data-testid="choose-method"
                onClick={() =>
                  void runCommand(
                    {
                      operation: methodAbsent ? "CHOOSE_METHOD" : "REPLACE_METHOD",
                      methodRef,
                      methodVersion,
                      sourceKind: "EXPLICIT_INTERACTION",
                      utterance: methodAbsent
                        ? `Je retiens la méthode ${methodRef}@${methodVersion}.`
                        : `Je remplace la méthode par ${methodRef}@${methodVersion}.`,
                    },
                    "Décision de méthode à confirmer",
                  )
                }
              >
                {methodAbsent ? "Retenir cette méthode" : "Remplacer la méthode"}
              </button>
              {methodAbsent ? null : (
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="withdraw-method"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "WITHDRAW_METHOD",
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: "Je retire la méthode.",
                      },
                      "Retrait de méthode à confirmer",
                    )
                  }
                >
                  Retirer la méthode
                </button>
              )}
            </div>
          </section>

          <section className="panel p-4 space-y-2" aria-labelledby="restrict-title" data-testid="restriction-list">
            <h2 id="restrict-title" className="font-medium">
              Restrictions
            </h2>
            {activeRestrictions.length === 0 ? (
              <p className="text-sm muted">Aucune restriction active.</p>
            ) : (
              activeRestrictions.map((r) => (
                <div key={r.id} className="text-sm flex items-center justify-between gap-2">
                  <span>
                    {r.targetKind} · {r.targetRef || "*"} · {r.status}
                  </span>
                  <button
                    type="button"
                    className="btn secondary"
                    disabled={busy}
                    onClick={() =>
                      void runCommand(
                        {
                          operation: "LIFT_RESTRICTION",
                          restrictionId: r.id,
                          sourceKind: "EXPLICIT_INTERACTION",
                          utterance: "Je lève cette restriction.",
                        },
                        "Levée à confirmer",
                      )
                    }
                  >
                    Lever
                  </button>
                </div>
              ))
            )}
            <label className="block text-xs">
              Cible CYCLE_MUTATION
              <select
                className="textarea mt-1"
                value={restrictionTarget}
                onChange={(e) => setRestrictionTarget(e.target.value)}
                aria-label="Cible de restriction"
              >
                <option value="*">* (globale)</option>
                {cycle ? <option value={cycle.id}>cycle {cycle.id}</option> : null}
                {cycle ? <option value={cycle.cycleType}>{cycle.cycleType}</option> : null}
              </select>
            </label>
            <button
              type="button"
              className="btn secondary"
              disabled={busy}
              data-testid="apply-cycle-restriction"
              onClick={() =>
                void runCommand(
                  {
                    operation: "APPLY_RESTRICTION",
                    targetKind: "CYCLE_MUTATION",
                    targetRef: restrictionTarget,
                    statement: `Restriction CYCLE_MUTATION ${restrictionTarget}`,
                    sourceKind: "EXPLICIT_INTERACTION",
                    utterance: "J'applique une restriction de mutation de cycle.",
                  },
                  "Restriction à confirmer",
                )
              }
            >
              Appliquer la restriction
            </button>
          </section>

          <section className="panel p-4 space-y-2" aria-labelledby="dec-title" data-testid="decision-journal">
            <h2 id="dec-title" className="font-medium">
              Journal — décisions
            </h2>
            <p className="text-xs muted" data-testid="b13-authority-legend">
              Suspicion Nora (Niveau A) ≠ interdiction D6. Seul un refus
              RESTRICTION (ou motif d&apos;autorité explicitement typé) est un
              blocage d&apos;autorité. CONFLICT (STALE_REVISION, HUMAN_INTENT,
              FINGERPRINT, ACTIVE_CYCLE) est technique/état — pas une contradiction
              D6. APPLICABLE / REVISED / REVOKED / SUPERSEDED décrivent l&apos;historique.
            </p>
            {journalError ? (
              <p className="text-sm" data-testid="journal-error" role="alert">
                {journalError}
              </p>
            ) : null}
            {decisions.length === 0 && !journalError ? (
              <p className="text-sm muted">Aucune décision D6 enregistrée.</p>
            ) : (
              decisions.slice(0, 8).map((d) => (
                <article key={d.id} className="text-sm panel p-2">
                  <div className="text-xs muted" data-testid="decision-state">
                    {d.kind} · {d.state || "état inconnu"}
                    {d.objectRef ? ` · ${d.objectRef}` : ""}
                  </div>
                  <div>{d.statement}</div>
                </article>
              ))
            )}
          </section>
        </aside>
      </div>

      {unresolved ? (
        <button
          type="button"
          className="btn secondary"
          disabled={busy}
          data-testid="pilotage-reconcile"
          onClick={() => {
            setBusy(true);
            setPendingLabel("Réconciliation");
            void resolveUnknown(unresolved).finally(() => {
              setBusy(false);
              setPendingLabel(null);
            });
          }}
        >
          Réconcilier l&apos;état inconnu
        </button>
      ) : null}

      {status ? (
        <div className="space-y-1" data-testid="pilotage-status-block">
          <p className="text-xs muted" data-testid="pilotage-status" role="status">
            {status}
          </p>
          {lastOutcome
            ? (() => {
                const q = qualifyCommandOutcome(lastOutcome);
                if (!q.label) return null;
                return (
                  <p className="text-xs" data-testid={q.testId} role="status">
                    {q.label}
                  </p>
                );
              })()
            : null}
        </div>
      ) : null}
    </div>
  );
}
