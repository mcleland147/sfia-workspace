"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { PilotagePanel } from "@/components/PilotagePanel";
import {
  conversationalClientCommandKey,
  mayStartNewThreadAct,
  pendingStorageKey,
  shouldClearThreadPending,
  type ThreadPendingTurn,
} from "@/domains/pilotage/thread-recovery";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};
type Knowledge = {
  subjects: Array<{ id: string; title: string; status: string; originatedFromSubjectId: string | null }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
  openPoints: Array<{ id: string; statement: string; status: string }>;
};

type Surface = "travail" | "pilotage" | "journal" | "document";

type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string;
  intentReason?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  operation?: string;
  decisionId?: string | null;
  clarification?: string;
  clientCommandKey?: string;
};

function formatPilotageEffect(
  effect: PilotageEffectView | null | undefined,
  humanDecisionCreated?: boolean,
): string {
  if (!effect) return "";
  if (effect.attempted) {
    return [
      effect.operation ?? "commande",
      effect.status ?? "?",
      effect.reasonCode ? `(${effect.reasonCode})` : null,
      humanDecisionCreated && effect.decisionId ? `décision ${effect.decisionId}` : null,
    ]
      .filter(Boolean)
      .join(" · ");
  }
  if (effect.clarification) return `Clarification · ${effect.clarification}`;
  if (effect.intentClarity === "AMBIGUOUS") {
    return `Intention ambiguë · ${effect.intentReason ?? effect.reason ?? ""}`;
  }
  return "";
}

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const router = useRouter();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [preparationId, setPreparationId] = useState<string | null>(null);
  const [meta, setMeta] = useState("Chargement…");
  const [error, setError] = useState("");
  const [surface, setSurface] = useState<Surface>("travail");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [status, setStatus] = useState("");
  const [pilotageStatus, setPilotageStatus] = useState("");
  const [decisionSummary, setDecisionSummary] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);

  function rememberPending(pending: ThreadPendingTurn | null) {
    if (typeof sessionStorage === "undefined") return;
    const key = pendingStorageKey(params.projectId);
    if (!pending) {
      sessionStorage.removeItem(key);
      setUnresolvedPending(null);
      return;
    }
    sessionStorage.setItem(key, JSON.stringify(pending));
    setUnresolvedPending(pending);
  }

  function readPending(): ThreadPendingTurn | null {
    if (typeof sessionStorage === "undefined") return null;
    try {
      const raw = sessionStorage.getItem(pendingStorageKey(params.projectId));
      if (!raw) return null;
      return JSON.parse(raw) as ThreadPendingTurn;
    } catch {
      return null;
    }
  }

  async function refreshDurablePilotage() {
    const [decRes, projRes] = await Promise.all([
      fetch(`/api/projects/${params.projectId}/decisions`),
      fetch(`/api/projects/${params.projectId}/pilotage`),
    ]);
    if (decRes.ok) {
      const dj = await decRes.json();
      const decisions = (dj.decisions ?? []) as Array<{
        id: string;
        kind: string;
        state: string;
        statement: string;
        createdAt?: string;
      }>;
      const applicable = decisions.filter((d) => d.state === "APPLICABLE");
      const latest = [...decisions].sort((a, b) =>
        String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")),
      )[0];
      setDecisionSummary(
        `${applicable.length} applicable(s) · ${decisions.length} au journal` +
          (latest ? ` · dernière ${latest.kind}/${latest.state}` : ""),
      );
    }
    if (projRes.ok) {
      const pj = await projRes.json();
      const cycle = pj.pilotage?.cycle ?? pj.cycle;
      if (cycle?.status === "ACTIVE") {
        setPilotageStatus((prev) =>
          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
            ? prev
            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
        );
      }
    }
  }

  function applyClearFromResponse(
    noraStatus: string | undefined,
    effect: PilotageEffectView | undefined,
  ) {
    if (
      shouldClearThreadPending({
        noraStatus,
        effectAttempted: effect?.attempted,
        effectStatus: effect?.status,
      })
    ) {
      rememberPending(null);
      messageTurnKeyRef.current = null;
      return true;
    }
    return false;
  }

  async function reconcilePending(pending: ThreadPendingTurn) {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${params.projectId}/pilotage/commands/by-key/${encodeURIComponent(pending.clientCommandKey)}`,
      );
      if (res.ok) {
        const cmd = await res.json();
        setPilotageStatus(
          formatPilotageEffect(
            {
              attempted: true,
              status: cmd.status,
              reasonCode: cmd.reasonCode,
              reason: cmd.reason,
              operation: cmd.effects?.[0]?.effectKind ?? "commande",
              decisionId: cmd.decisionId,
              clientCommandKey: pending.clientCommandKey,
            },
            Boolean(cmd.decisionId) &&
              (cmd.status === "APPLIED" || cmd.status === "ALREADY_APPLIED"),
          ),
        );
        // CR-02: UNKNOWN métier stays pending; Nora status is irrelevant here.
        if (cmd.status && String(cmd.status).toUpperCase() !== "UNKNOWN") {
          rememberPending(null);
          messageTurnKeyRef.current = null;
        }
        await refreshDurablePilotage();
        return;
      }
      // 404 alone does not invent a new key — retry same logical act only.
      if (res.status === 404) {
        setPilotageStatus(
          `Commande absente pour ${pending.clientCommandKey.slice(0, 28)}… — reprise du même acte`,
        );
      }
      if (!preparationId) return;
      const retry = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: pending.content,
          clientTurnKey: pending.clientTurnKey,
        }),
      });
      const j = await retry.json().catch(() => ({}));
      if (retry.ok) {
        setMessages(j.messages ?? []);
        setStatus(`Nora ${j.noraMode} · ${j.status}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
          setDraft("");
        }
        await refreshDurablePilotage();
      } else {
        setStatus(String(j.error ?? j.errorCategory ?? "réconciliation impossible"));
      }
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (res.status === 404) {
        setError("Projet introuvable ou non autorisé pour ce Pilote.");
        setMeta("");
        return;
      }
      if (!res.ok) {
        setError("Impossible de charger le projet.");
        setMeta("");
        return;
      }
      const j = await res.json();
      setMessages(j.messages ?? []);
      setDocuments(j.documents ?? []);
      setKnowledge(j.knowledge ?? null);
      setPreparationId(j.preparation?.id ?? null);
      setMeta(
        `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
      );
      setError("");
      await refreshDurablePilotage();
      const pending = readPending();
      if (pending) {
        setUnresolvedPending(pending);
        messageTurnKeyRef.current = {
          content: pending.content,
          key: pending.clientTurnKey,
        };
        setPilotageStatus(
          `Reprise en attente · clé ${pending.clientCommandKey.slice(0, 24)}…`,
        );
      }
    }
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.projectId, router]);

  async function sendMessage() {
    if (!draft.trim() || !preparationId) return;
    const text = draft.trim();
    // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
    const gate = mayStartNewThreadAct({
      unresolved: unresolvedPending ?? readPending(),
      nextContent: text,
    });
    if (!gate.ok) {
      setPilotageStatus(
        `${gate.reason} · ${gate.pending.clientCommandKey.slice(0, 24)}…`,
      );
      setDraft(gate.pending.content);
      return;
    }
    setBusy(true);
    setNoraActivity("preparing");
    // Same content reuses the same turn key until a terminal result clears it.
    if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
      messageTurnKeyRef.current = {
        content: text,
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `turn-${crypto.randomUUID()}`
            : `turn-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      };
    }
    const clientTurnKey = messageTurnKeyRef.current.key;
    const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
    rememberPending({ content: text, clientTurnKey, clientCommandKey });
    try {
      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text, clientTurnKey }),
      });
      let j: Record<string, unknown> = {};
      try {
        j = (await res.json()) as Record<string, unknown>;
      } catch {
        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
      }
      if (res.ok) {
        setMessages((j.messages as Msg[]) ?? []);
        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
          setDraft("");
        } else if (j.status === "UNKNOWN" || j.status === "FAILED") {
          setNoraActivity("error");
        }
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
        }
        await refreshDurablePilotage();
        setNoraActivity(
          j.status === "UNKNOWN" || j.status === "FAILED" ? "error" : "idle",
        );
      } else {
        // ACK lost / HTTP error — keep pending with the same key.
        setNoraActivity("error");
        setStatus(
          res.status === 409
            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
        );
      }
    } catch {
      setNoraActivity("error");
      setStatus("échec réseau — intention de tour conservée");
    } finally {
      setBusy(false);
    }
  }

  if (error) {
    return (
      <div className="max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold">Projet</h1>
        <p className="text-xs muted">{params.projectId}</p>
        <div className="panel p-4">{error}</div>
        <a className="btn secondary inline-block" href="/portfolio">
          Retour portefeuille
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs muted uppercase tracking-wide">Espace projet</p>
          <h1 className="text-2xl font-semibold">Projet</h1>
          <p className="text-xs muted">{params.projectId}</p>
          <p className="text-sm muted mt-1">{meta}</p>
        </div>
        <nav className="flex gap-2 text-sm" aria-label="Surfaces projet">
          {(
            [
              ["travail", "Travail"],
              ["pilotage", "Pilotage"],
              ["journal", "Journal"],
              ["document", "Documents"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`btn ${surface === id ? "" : "secondary"}`}
              onClick={() => setSurface(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {noraActivity === "preparing" ? (
        <div className="panel p-3 text-sm" role="status">
          Nora prépare une réponse…
        </div>
      ) : null}

      {surface === "travail" ? (
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
          <section className="space-y-2">
            {messages.map((m) => (
              <article key={m.id} className="panel p-3">
                <div className="text-xs muted mb-1">
                  {m.role === "assistant" ? "Nora" : "Pilote"} · {m.status}
                </div>
                {m.role === "assistant" ? (
                  <SafeMarkdown content={m.content} />
                ) : (
                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                )}
              </article>
            ))}
            <div className="panel p-3 space-y-2">
              <textarea
                className="textarea"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Poursuivre dans le même fil…"
                aria-label="Message à Nora"
                data-testid="thread-draft"
              />
              <button
                className="btn"
                disabled={busy || !preparationId}
                onClick={sendMessage}
                data-testid="thread-send"
              >
                Envoyer
              </button>
              {unresolvedPending ? (
                <div className="space-y-1" data-testid="thread-pending-banner">
                  <p className="text-xs muted">
                    Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
                  </p>
                  <button
                    type="button"
                    className="btn secondary"
                    disabled={busy}
                    data-testid="thread-reconcile-pending"
                    onClick={() => void reconcilePending(unresolvedPending)}
                  >
                    Réconcilier la tentative en cours
                  </button>
                </div>
              ) : null}
              {status ? (
                <p className="text-xs muted" data-testid="thread-nora-status">
                  {status}
                </p>
              ) : null}
              {pilotageStatus ? (
                <p className="text-xs" data-testid="thread-pilotage-status" role="status">
                  {pilotageStatus}
                </p>
              ) : null}
              {decisionSummary ? (
                <p className="text-xs muted" data-testid="thread-decision-summary">
                  {decisionSummary}
                </p>
              ) : null}
            </div>
          </section>
          <aside className="space-y-3">
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">En bref</h2>
              <p className="text-sm muted">
                Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
              </p>
              <p className="text-xs muted">
                Acquis: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
                Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
              </p>
            </div>
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">Points à clarifier</h2>
              {(knowledge?.openPoints ?? [])
                .filter((o) => o.status === "OPEN")
                .slice(0, 5)
                .map((o) => (
                  <p key={o.id} className="text-sm">
                    {o.statement}
                  </p>
                ))}
              {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
                <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}

      {surface === "pilotage" ? <PilotagePanel projectId={params.projectId} /> : null}

      {surface === "document" ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <section className="space-y-2">
            {documents.map((d) => (
              <button
                key={d.document.id}
                type="button"
                className="panel p-3 text-left w-full"
                onClick={() => setInspect(d)}
              >
                <div className="text-xs muted mb-1">
                  {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
                  {d.latestRevision?.status ?? "—"}
                </div>
                <div className="text-sm line-clamp-3">
                  {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180)}
                </div>
              </button>
            ))}
            {documents.length === 0 ? (
              <p className="text-sm muted">Aucun document D4 pour ce projet.</p>
            ) : null}
          </section>
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Inspection</h2>
            {inspect?.latestRevision ? (
              <>
                <p className="text-xs muted">
                  {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
                  {inspect.latestRevision.status}
                </p>
                <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
                <button type="button" className="btn secondary" onClick={() => setInspect(null)}>
                  Retour au fil
                </button>
              </>
            ) : (
              <p className="text-sm muted">Sélectionner un document pour inspecter.</p>
            )}
          </section>
        </div>
      ) : null}

      {surface === "journal" ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Sujets</h2>
            {(knowledge?.subjects ?? []).map((s) => (
              <div key={s.id} className="panel p-2 text-sm">
                <div className="font-medium">{s.title}</div>
                <div className="text-xs muted">
                  {s.status}
                  {s.originatedFromSubjectId ? ` · de ${s.originatedFromSubjectId}` : ""}
                </div>
              </div>
            ))}
          </section>
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Acquis courants</h2>
            {(knowledge?.acquis ?? [])
              .filter((a) => a.status === "CURRENT")
              .map((a) => (
                <div key={a.id} className="text-sm panel p-2">
                  <span className="text-xs muted">{a.kind} · </span>
                  {a.statement}
                </div>
              ))}
            <p className="text-xs muted pt-2">
              Les décisions D6 opposables sont dans l&apos;onglet Pilotage (Journal—Décisions), pas
              ici.
            </p>
          </section>
        </div>
      ) : null}

      <a className="btn secondary inline-block" href="/portfolio">
        Retour portefeuille
      </a>
    </div>
  );
}
