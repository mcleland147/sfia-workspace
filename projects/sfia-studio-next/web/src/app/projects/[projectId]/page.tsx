"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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
type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";

const SURFACES: Surface[] = ["travail", "pilotage", "journal", "document"];

function parseSurface(raw: string | null): Surface | null {
  if (!raw) return null;
  return SURFACES.includes(raw as Surface) ? (raw as Surface) : null;
}

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
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [preparationId, setPreparationId] = useState<string | null>(null);
  const [meta, setMeta] = useState("Chargement…");
  const [error, setError] = useState("");
  const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [status, setStatus] = useState("");
  const [pilotageStatus, setPilotageStatus] = useState("");
  const [decisionSummary, setDecisionSummary] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [docUi, setDocUi] = useState<DocUiState>("READING");
  const [reviseDraft, setReviseDraft] = useState("");
  const [reviseMessage, setReviseMessage] = useState("");
  const [docMissing, setDocMissing] = useState("");
  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
  const reviseCorrelationRef = useRef<string | null>(null);
  const reviseBaseIdRef = useRef<string | null>(null);
  const documentsRef = useRef<Doc[]>([]);
  const docUiRef = useRef<DocUiState>("READING");
  const reviseDraftRef = useRef("");

  useEffect(() => {
    docUiRef.current = docUi;
  }, [docUi]);
  useEffect(() => {
    reviseDraftRef.current = reviseDraft;
  }, [reviseDraft]);
  useEffect(() => {
    documentsRef.current = documents;
  }, [documents]);

  function buildSurfaceUrl(next: Surface, documentId?: string | null) {
    const q = new URLSearchParams();
    q.set("surface", next);
    if (next === "document" && documentId) q.set("documentId", documentId);
    return `/projects/${params.projectId}?${q.toString()}`;
  }

  /** push = entrée d'historique ; replace = normalisation sans nouvelle entrée. */
  function syncSurfaceUrl(
    next: Surface,
    documentId?: string | null,
    mode: "push" | "replace" = "push",
  ) {
    const href = buildSurfaceUrl(next, documentId);
    if (mode === "replace") router.replace(href, { scroll: false });
    else router.push(href, { scroll: false });
  }

  function selectSurface(next: Surface) {
    setSurface(next);
    setDocMissing("");
    if (next !== "document") {
      setInspect(null);
      setDocUi("READING");
      setReviseDraft("");
      setReviseMessage("");
      reviseCorrelationRef.current = null;
      reviseBaseIdRef.current = null;
      syncSurfaceUrl(next, null, "push");
    } else {
      syncSurfaceUrl(next, inspect?.document.id ?? null, "push");
    }
  }

  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
    setInspect(doc);
    setDocMissing("");
    setDocUi("READING");
    setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
    setReviseMessage("");
    reviseCorrelationRef.current = null;
    reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
    setSurface("document");
    syncSurfaceUrl("document", doc.document.id, mode);
  }

  function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
    if (qSurface) setSurface(qSurface);
    else setSurface("travail");

    if (qSurface === "document") {
      if (!qDocId) {
        setInspect(null);
        setDocMissing("");
        return;
      }
      const match = docs.find((d) => d.document.id === qDocId);
      if (match) {
        setInspect(match);
        setDocMissing("");
        const ui = docUiRef.current;
        const preserveDraft =
          Boolean(reviseCorrelationRef.current) ||
          ui === "EDITING" ||
          ui === "SAVING" ||
          ui === "CONFLICT" ||
          ui === "UNKNOWN";
        if (!preserveDraft) {
          setDocUi("READING");
          setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
        }
      } else {
        setInspect(null);
        setDocMissing("Document introuvable ou non autorisé pour ce Pilote.");
      }
      return;
    }
    setInspect(null);
    setDocMissing("");
  }

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
      const docs = (j.documents ?? []) as Doc[];
      setMessages(j.messages ?? []);
      setDocuments(docs);
      setKnowledge(j.knowledge ?? null);
      setPreparationId(j.preparation?.id ?? null);
      setMeta(
        `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
      );
      setError("");

      // Read *current* URL — never stale searchParams from effect closure (race with rail nav).
      const live =
        typeof window !== "undefined"
          ? new URL(window.location.href).searchParams
          : searchParams;
      const qSurface = parseSurface(live.get("surface"));
      const qDocId = live.get("documentId");
      applyUrlDocumentState(docs, qSurface, qDocId);
      // Normalize only when surface missing/invalid; do not clobber a live navigation.
      const rawSurface = live.get("surface");
      if (!rawSurface || (rawSurface && !qSurface)) {
        syncSurfaceUrl(qSurface ?? "travail", qSurface === "document" ? qDocId : null, "replace");
      }

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

  // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
  useEffect(() => {
    const qSurface = parseSurface(searchParams.get("surface"));
    const qDocId = searchParams.get("documentId");
    applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  async function reconcileRevisionByCorrelation(
    preparationIdValue: string,
    documentId: string,
    correlationKey: string,
  ): Promise<{ found: boolean; status?: string; revisionId?: string }> {
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
      );
      if (!res.ok) return { found: false };
      const j = (await res.json()) as {
        revisions?: Array<{ id: string; status: string; correlationKey?: string | null }>;
      };
      const hit = (j.revisions ?? []).find((r) => r.correlationKey === correlationKey);
      if (!hit) return { found: false };
      return { found: true, status: hit.status, revisionId: hit.id };
    } catch {
      return { found: false };
    }
  }

  async function saveRevision() {
    if (!preparationId || !inspect) return;
    const baseId =
      reviseBaseIdRef.current ?? inspect.latestRevision?.id ?? null;
    if (!baseId) {
      setDocUi("FAILED");
      setReviseMessage("Base de révision absente.");
      return;
    }
    if (!reviseCorrelationRef.current) {
      reviseCorrelationRef.current =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? `rev-${crypto.randomUUID()}`
          : `rev-${Date.now()}`;
    }
    reviseBaseIdRef.current = baseId;
    const correlationKey = reviseCorrelationRef.current;
    const draftSnapshot = reviseDraftRef.current || reviseDraft;
    setDocUi("SAVING");
    setReviseMessage("");
    try {
      const res = await fetch(
        `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "revise",
            baseRevisionId: baseId,
            contentMarkdown: draftSnapshot,
            correlationKey,
          }),
        },
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        reason?: string;
        error?: string;
        errorCategory?: string;
        revisionId?: string;
      };

      // Prefer authoritative result.status over HTTP alone.
      const resultStatus = String(j.status ?? "").toUpperCase();

      if (res.status === 409 || resultStatus === "CONFLICT") {
        setDocUi("CONFLICT");
        setReviseMessage(
          `${j.reason ?? "BASE_STALE"} — nouvelle base présentée ; brouillon conservé. Rebasage explicite requis.`,
        );
        // Refresh inspect (new base) but DO NOT overwrite reviseDraft.
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          const docs = (pj.documents ?? []) as Doc[];
          setDocuments(docs);
          const fresh = docs.find((d) => d.document.id === inspect.document.id);
          if (fresh) {
            setInspect(fresh);
            // Keep draft; update base pointer only when pilot accepts rebase.
          }
        }
        return;
      }

      if (resultStatus === "AVAILABLE") {
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          const docs = (pj.documents ?? []) as Doc[];
          setDocuments(docs);
          const fresh = docs.find((d) => d.document.id === inspect.document.id);
          if (fresh) {
            setInspect(fresh);
            setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
            reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
          }
        }
        reviseCorrelationRef.current = null;
        setDocUi("READING");
        setReviseMessage("Révision enregistrée (AVAILABLE).");
        return;
      }

      if (resultStatus === "UNKNOWN" || resultStatus === "SAVING" || !res.ok) {
        // ACK / intermediate — reconcile by correlationKey before any new intention.
        const recon = await reconcileRevisionByCorrelation(
          preparationId,
          inspect.document.id,
          correlationKey,
        );
        if (recon.found && recon.status === "AVAILABLE") {
          const proj = await fetch(`/api/projects/${params.projectId}`);
          if (proj.ok) {
            const pj = await proj.json();
            const docs = (pj.documents ?? []) as Doc[];
            setDocuments(docs);
            const fresh = docs.find((d) => d.document.id === inspect.document.id);
            if (fresh) {
              setInspect(fresh);
              setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
              reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
            }
          }
          reviseCorrelationRef.current = null;
          setDocUi("READING");
          setReviseMessage("Révision confirmée après relecture (AVAILABLE).");
          return;
        }
        setDocUi(res.status === 401 ? "FAILED" : "UNKNOWN");
        setReviseMessage(
          recon.found
            ? `État serveur ${recon.status} — brouillon et correlationKey conservés.`
            : `ACK perdu / ${j.error ?? j.errorCategory ?? (resultStatus || `HTTP ${res.status}`)} — relecture sans match ; même clé pour retry.`,
        );
        return;
      }

      if (resultStatus === "FAILED") {
        setDocUi("FAILED");
        setReviseMessage(String(j.reason ?? j.error ?? "FAILED"));
        return;
      }

      setDocUi("UNKNOWN");
      setReviseMessage("Réponse non classée — aucune réussite affichée sans AVAILABLE.");
    } catch {
      const recon = preparationId
        ? await reconcileRevisionByCorrelation(
            preparationId,
            inspect.document.id,
            correlationKey,
          )
        : { found: false as const };
      if (recon.found && recon.status === "AVAILABLE") {
        reviseCorrelationRef.current = null;
        setDocUi("READING");
        setReviseMessage("Révision confirmée après relecture réseau (AVAILABLE).");
        return;
      }
      setDocUi("UNKNOWN");
      setReviseMessage(
        "ACK perdu (réseau) — brouillon, base et correlationKey conservés ; pas de double mutation automatique.",
      );
    }
  }

  function acceptConflictRebase() {
    if (!inspect?.latestRevision) return;
    reviseBaseIdRef.current = inspect.latestRevision.id;
    reviseCorrelationRef.current = null; // new intention after explicit rebase
    setDocUi("EDITING");
    setReviseMessage("Base mise à jour — nouvelle intention (nouvelle correlationKey au prochain enregistrement).");
  }

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
              onClick={() => selectSurface(id)}
              data-testid={`surface-${id}`}
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
                className={`panel p-3 text-left w-full ${
                  inspect?.document.id === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
                }`}
                onClick={() => openDocumentReadOnly(d)}
                data-testid={`doc-open-${d.document.id}`}
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
          <section className="panel p-4 space-y-2" data-testid="document-inspect">
            <h2 className="font-medium">
              {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT" || docUi === "UNKNOWN"
                ? "Révision"
                : "Inspection"}
            </h2>
            <p className="text-xs muted" data-testid="document-ui-state">
              État: {docUi}
            </p>
            {docMissing ? (
              <p className="text-sm" data-testid="document-missing" role="status">
                {docMissing}
              </p>
            ) : null}
            {inspect?.latestRevision ? (
              <>
                <p className="text-xs muted">
                  {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
                  {inspect.latestRevision.status}
                  {reviseBaseIdRef.current
                    ? ` · base intention ${reviseBaseIdRef.current.slice(0, 8)}…`
                    : ""}
                </p>
                {docUi === "EDITING" ||
                docUi === "SAVING" ||
                docUi === "CONFLICT" ||
                docUi === "UNKNOWN" ||
                docUi === "FAILED" ? (
                  <>
                    <textarea
                      className="textarea"
                      value={reviseDraft}
                      onChange={(e) => setReviseDraft(e.target.value)}
                      disabled={docUi === "SAVING"}
                      aria-label="Contenu markdown à réviser"
                      data-testid="document-revise-draft"
                    />
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="btn"
                        disabled={docUi === "SAVING"}
                        data-testid="document-revise-save"
                        onClick={() => void saveRevision()}
                      >
                        {docUi === "SAVING"
                          ? "Enregistrement…"
                          : docUi === "UNKNOWN"
                            ? "Réessayer (même clé)"
                            : "Enregistrer la révision"}
                      </button>
                      {docUi === "CONFLICT" ? (
                        <button
                          type="button"
                          className="btn secondary"
                          data-testid="document-conflict-rebase"
                          onClick={acceptConflictRebase}
                        >
                          Adopter la nouvelle base
                        </button>
                      ) : null}
                      <button
                        type="button"
                        className="btn secondary"
                        disabled={docUi === "SAVING"}
                        onClick={() => {
                          setDocUi("READING");
                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                          setReviseMessage("");
                          reviseCorrelationRef.current = null;
                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                        }}
                      >
                        Annuler
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="btn"
                        data-testid="document-revise-start"
                        onClick={() => {
                          setDocUi("EDITING");
                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                          reviseCorrelationRef.current = null;
                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                        }}
                      >
                        Réviser
                      </button>
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                          setInspect(null);
                          setDocUi("READING");
                          selectSurface("travail");
                        }}
                      >
                        Retour au fil
                      </button>
                    </div>
                  </>
                )}
                {reviseMessage ? (
                  <p className="text-xs muted" data-testid="document-revise-message">
                    {reviseMessage}
                  </p>
                ) : null}
              </>
            ) : !docMissing ? (
              <p className="text-sm muted">Sélectionner un document pour inspecter.</p>
            ) : null}
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
