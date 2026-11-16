"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { PilotagePanel } from "@/components/PilotagePanel";
import { ProjectChrome } from "@/components/figma/ProjectChrome";
import { NoraConversation } from "@/components/figma/NoraConversation";
import { ProjectJournal } from "@/components/figma/ProjectJournal";
import { ProjectOverview } from "@/components/figma/ProjectOverview";
import {
  ProjectUnavailable,
  type ProjectUnavailableKind,
} from "@/components/figma/ProjectUnavailable";
import {
  DocumentHistory,
  DocumentInspector,
  DocumentLibrary,
  type RevisionRow,
} from "@/components/figma/DocumentSurfaces";
import {
  conversationalClientCommandKey,
  pendingStorageKey,
  shouldClearThreadPending,
  type ThreadPendingTurn,
  type ThreadTurnKind,
} from "@/domains/pilotage/thread-recovery";
import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
import {
  clearProjectSurfaceNavIntent,
  noteProjectSurfaceNavIntent,
  peekProjectSurfaceNavIntent,
  resolveProjectLoadSurface,
  type StudioSurface,
} from "@/components/shell/studio-rail";

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

type Surface =
  | "travail"
  | "projet"
  | "pilotage"
  | "journal"
  | "document"
  | "git"
  | "publication";
type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";

const SURFACES: Surface[] = [
  "travail",
  "projet",
  "pilotage",
  "journal",
  "document",
  "git",
  "publication",
];

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
  const { setInfo: setProjectSpaceInfo } = useProjectSpace();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [preparationId, setPreparationId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [statusHint, setStatusHint] = useState("Chargement…");
  const [unavailableKind, setUnavailableKind] = useState<ProjectUnavailableKind | null>(null);
  const [loadEpoch, setLoadEpoch] = useState(0);
  /** Observable end of project load + surface URL sync (e2e / anti-race proof). */
  const [projectLoadState, setProjectLoadState] = useState<"loading" | "ready">("loading");
  const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [status, setStatus] = useState("");
  const [pilotageStatus, setPilotageStatus] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [docUi, setDocUi] = useState<DocUiState>("READING");
  const [reviseDraft, setReviseDraft] = useState("");
  const [reviseMessage, setReviseMessage] = useState("");
  const [docMissing, setDocMissing] = useState("");
  const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
  const [docDiffText, setDocDiffText] = useState("");
  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
  const reviseCorrelationRef = useRef<string | null>(null);
  const reviseBaseIdRef = useRef<string | null>(null);
  const documentsRef = useRef<Doc[]>([]);
  const docUiRef = useRef<DocUiState>("READING");
  const reviseDraftRef = useRef("");
  /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
  const pendingSurfaceRef = useRef<Surface | null>(null);

  useEffect(() => {
    // Clear previous project identity immediately — no cross-project leak in the rail.
    setProjectSpaceInfo({
      projectId: params.projectId,
      projectName: null,
      subtitle: null,
      available: false,
      blockNavigation: false,
    });
    return () => {
      setProjectSpaceInfo(null);
    };
  }, [params.projectId, setProjectSpaceInfo]);

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
    pendingSurfaceRef.current = next;
    noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
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

  async function loadDocHistory(preparationIdValue: string, documentId: string) {
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
      );
      if (!res.ok) {
        setDocHistory([]);
        return;
      }
      const j = await res.json();
      const rows = (j.revisions ?? []) as Array<{
        id: string;
        revisionNumber: number;
        status: string;
        createdAt?: string;
      }>;
      setDocHistory(
        rows.map((r) => ({
          id: r.id,
          revisionNumber: r.revisionNumber,
          status: r.status,
          createdAt: r.createdAt,
        })),
      );
    } catch {
      setDocHistory([]);
    }
  }

  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
    setInspect(doc);
    setDocMissing("");
    setDocUi("READING");
    setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
    setReviseMessage("");
    setDocDiffText("");
    reviseCorrelationRef.current = null;
    reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
    setSurface("document");
    syncSurfaceUrl("document", doc.document.id, mode);
    if (preparationId) void loadDocHistory(preparationId, doc.document.id);
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
    const projRes = await fetch(`/api/projects/${params.projectId}/pilotage`);
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
    opts?: { preserveUnresolvedMetierPending?: boolean },
  ) {
    if (
      shouldClearThreadPending({
        noraStatus,
        effectAttempted: effect?.attempted,
        effectStatus: effect?.status,
        preserveUnresolvedMetierPending: opts?.preserveUnresolvedMetierPending,
      })
    ) {
      rememberPending(null);
      messageTurnKeyRef.current = null;
      return true;
    }
    // Independent cognitive COMPLETE over pending A: drop only this turn key,
    // never the unresolved métier pending.
    if (opts?.preserveUnresolvedMetierPending) {
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
    let cancelled = false;
    setProjectLoadState("loading");
    setUnavailableKind(null);
    setProjectName(null);
    setStatusHint("Chargement…");
    pendingSurfaceRef.current = null;
    setProjectSpaceInfo({
      projectId: params.projectId,
      projectName: null,
      subtitle: null,
      available: false,
      blockNavigation: false,
    });

    async function load() {
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (cancelled) return;
      if (res.status === 401) {
        setUnavailableKind("unauthorized");
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      if (res.status === 404) {
        setUnavailableKind("not_found");
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      if (!res.ok) {
        setUnavailableKind("temporary");
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      const j = await res.json();
      if (cancelled) return;
      const docs = (j.documents ?? []) as Doc[];
      const name = String(j.project?.name ?? "").trim() || null;
      setMessages(j.messages ?? []);
      setDocuments(docs);
      setKnowledge(j.knowledge ?? null);
      setPreparationId(j.preparation?.id ?? null);
      setProjectName(name);
      setStatusHint(
        j.preparation?.id
          ? "Fil durable · préparation liée · réouverture par projet"
          : "Fil durable · réouverture par projet",
      );
      setUnavailableKind(null);
      setProjectSpaceInfo({
        projectId: params.projectId,
        projectName: name,
        subtitle: null,
        available: Boolean(name),
        blockNavigation: false,
      });

      // Read *current* URL — never stale searchParams from effect closure (race with rail nav).
      // Rail Links and chrome selectSurface share one project-scoped intent so load() cannot
      // replace a more recent user surface (e.g. pilotage) with default travail.
      const live =
        typeof window !== "undefined"
          ? new URL(window.location.href).searchParams
          : searchParams;
      const rawSurface = live.get("surface");
      const qSurface = parseSurface(rawSurface);
      const qDocId = live.get("documentId");
      const pendingSurface =
        pendingSurfaceRef.current ?? peekProjectSurfaceNavIntent(params.projectId);
      const decision = resolveProjectLoadSurface({
        rawSurface,
        pendingIntent: pendingSurface,
      });
      applyUrlDocumentState(docs, decision.effectiveSurface as Surface, qDocId);
      if (decision.shouldNormalizeUrl) {
        const target = decision.effectiveSurface as Surface;
        syncSurfaceUrl(target, target === "document" ? qDocId : null, "replace");
      }
      if (qSurface && pendingSurface && qSurface === pendingSurface) {
        pendingSurfaceRef.current = null;
        clearProjectSurfaceNavIntent(params.projectId, qSurface);
      }

      await refreshDurablePilotage();
      if (cancelled) return;
      const pending = readPending();
      if (pending) {
        setUnresolvedPending(pending);
        messageTurnKeyRef.current = {
          content: pending.content,
          key: pending.clientTurnKey,
        };
        setPilotageStatus("Reprise en attente · tentative conservée");
      }

      // G2 — silent COMMAND recovery (not GET): resume interrupted mission continuation
      // without requiring the Pilot to reformulate the original intention.
      try {
        const resumeRes = await fetch(
          `/api/projects/${params.projectId}/mission-continuation/resume`,
          { method: "POST" },
        );
        if (resumeRes.ok) {
          const resume = (await resumeRes.json()) as {
            recovered?: boolean;
            documentSave?: { documentId?: string; status?: string } | null;
          };
          if (resume.recovered) {
            const refreshed = await fetch(`/api/projects/${params.projectId}`);
            if (refreshed.ok) {
              const rj = await refreshed.json();
              if (cancelled) return;
              setMessages(rj.messages ?? []);
              setDocuments(rj.documents ?? []);
              setKnowledge(rj.knowledge ?? null);
              if (resume.documentSave?.documentId) {
                setStatusHint("Fil durable · reprise de mission documentée");
              }
            }
          }
        }
      } catch {
        /* non-blocking */
      }

      // Mark ready only after surface sync from this load has been applied.
      if (!cancelled) setProjectLoadState("ready");
    }
    void load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.projectId, router, loadEpoch]);

  // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
  useEffect(() => {
    const qSurface = parseSurface(searchParams.get("surface"));
    const qDocId = searchParams.get("documentId");
    applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
    if (qSurface && pendingSurfaceRef.current === qSurface) {
      pendingSurfaceRef.current = null;
    }
    if (qSurface && peekProjectSurfaceNavIntent(params.projectId) === qSurface) {
      clearProjectSurfaceNavIntent(params.projectId, qSurface);
    }
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
    // SEM-02 / S05: no client lexical gate. Server returns nextTurnKind from Nora
    // qualification. Same-content retry reuses the turn key; distinct content may
    // proceed — coexistence is decided from the server kind after the response.
    const pendingBefore = unresolvedPending ?? readPending();
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
    try {
      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: text,
          clientTurnKey,
          unresolvedPendingClientTurnKey: pendingBefore?.clientTurnKey,
        }),
      });
      let j: Record<string, unknown> = {};
      try {
        j = (await res.json()) as Record<string, unknown>;
      } catch {
        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
      }
      if (res.ok) {
        const serverKind = (j.nextTurnKind as ThreadTurnKind | undefined) ?? "INCERTAIN";
        const independent = serverKind === "DIALOGUE_INDEPENDANT";
        const effectBlocked = Boolean(j.pendingEffectBlocked);
        const distinctFromUnresolved =
          Boolean(pendingBefore) && pendingBefore!.clientTurnKey !== clientTurnKey;
        // Remember effect turns for ACK recovery — never let B overwrite unresolved A.
        if (serverKind === "INTENTION_EFFET" && !effectBlocked && !distinctFromUnresolved) {
          rememberPending({ content: text, clientTurnKey, clientCommandKey });
        } else if (distinctFromUnresolved && pendingBefore) {
          rememberPending(pendingBefore);
        }
        const preserveMetierPending =
          (independent || effectBlocked || distinctFromUnresolved) && Boolean(pendingBefore);
        setMessages((j.messages as Msg[]) ?? []);
        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        if (
          !effectBlocked &&
          !distinctFromUnresolved &&
          applyClearFromResponse(String(j.status ?? ""), effect, {
            preserveUnresolvedMetierPending: preserveMetierPending,
          })
        ) {
          setDraft("");
        } else if (effectBlocked || (distinctFromUnresolved && serverKind === "INTENTION_EFFET")) {
          setStatus(
            effectBlocked
              ? `Effet retenu — pending non résolu (${String(j.unresolvedPendingClientTurnKey ?? pendingBefore?.clientTurnKey ?? "A")})`
              : "Intention précédente non résolue — réconcilier avant un nouveau tour.",
          );
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
        // ACK lost / HTTP error — retain the same turn key for reconcile (server may have applied).
        rememberPending({ content: text, clientTurnKey, clientCommandKey });
        setNoraActivity("error");
        setStatus(
          res.status === 409
            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
        );
      }
    } catch {
      rememberPending({ content: text, clientTurnKey, clientCommandKey });
      setNoraActivity("error");
      setStatus("échec réseau — intention de tour conservée");
    } finally {
      setBusy(false);
    }
  }

  if (unavailableKind) {
    return (
      <ProjectUnavailable
        kind={unavailableKind}
        onRetry={
          unavailableKind === "temporary"
            ? () => {
                setUnavailableKind(null);
                setLoadEpoch((n) => n + 1);
              }
            : undefined
        }
        onLogin={
          unavailableKind === "unauthorized" ? () => router.push("/login") : undefined
        }
      />
    );
  }

  if (projectLoadState === "loading" && !projectName) {
    return (
      <div
        data-testid="project-load-state"
        data-project-load-state="loading"
        data-project-id={params.projectId}
      >
        <ProjectUnavailable kind="loading" />
      </div>
    );
  }

  return (
    <ProjectChrome
      projectId={params.projectId}
      projectName={projectName}
      surface={surface}
      statusHint={statusHint}
      loadState={projectLoadState}
    >
      {surface === "projet" ? (
        <ProjectOverview
          projectId={params.projectId}
          projectName={projectName ?? "Projet"}
          preparationId={preparationId}
          knowledge={knowledge}
          documentCount={documents.length}
          messageCount={messages.length}
          onOpenTravail={() => selectSurface("travail")}
        />
      ) : null}

      {surface === "travail" ? (
        <NoraConversation
          messages={messages}
          draft={draft}
          busy={busy || !preparationId}
          unresolvedPending={Boolean(unresolvedPending)}
          activity={noraActivity}
          status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
          onDraft={setDraft}
          onSend={() => void sendMessage()}
          onReconcile={
            unresolvedPending
              ? () => void reconcilePending(unresolvedPending)
              : undefined
          }
          aside={
            <div className="fig-inspector" data-testid="travail-aside-inspector">
              <p className="fig-kicker">Contexte projet</p>
              <h2 className="fig-inspector-title">En bref</h2>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-name" data-testid="travail-aside-bref">
                {projectName ?? "Projet"}
              </p>
              <span className="fig-tag fig-tag-ok mt-2 inline-flex">
                {statusHint && /reprise|conservé|durable/i.test(statusHint)
                  ? "Contexte conservé"
                  : "Projet actif"}
              </span>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-section">Repères</p>
              <div className="fig-inspector-card" data-testid="travail-aside-objets">
                <p className="fig-inspector-card-title">Continuité</p>
                <p className="fig-inspector-card-body">
                  Fil de préparation et conversation consultables depuis Travail.
                </p>
              </div>
              <div className="fig-inspector-card">
                <p className="fig-inspector-card-title">Dossier du projet</p>
                <p className="fig-inspector-card-body">
                  {documents.length > 0
                    ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
                    : "Les objets et sources du projet restent distincts du dialogue."}
                </p>
                <div className="fig-inspector-links">
                  <button
                    type="button"
                    className="fig-inspector-link"
                    onClick={() => selectSurface("git")}
                  >
                    Sources Git
                  </button>
                  <button
                    type="button"
                    className="fig-inspector-link"
                    onClick={() => selectSurface("publication")}
                  >
                    Résultats et preuves
                  </button>
                </div>
              </div>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-section">Points à clarifier</p>
              <div data-testid="travail-aside-clarifier">
                {(knowledge?.openPoints ?? [])
                  .filter((o) => o.status === "OPEN")
                  .slice(0, 5)
                  .map((o) => (
                    <p key={o.id} className="fig-inspector-card-body mb-2">
                      {o.statement}
                    </p>
                  ))}
                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
                  <p className="fig-inspector-card-body">
                    Seules les informations réellement connues seront affichées.
                  </p>
                ) : null}
              </div>
            </div>
          }
        />
      ) : null}

      {surface === "pilotage" ? (
        <div className="space-y-4" data-figma-frame="125:33" data-testid="project-trajectory">
          <div className="fig-section-head">
            <div>
              <p className="fig-kicker">Pilotage</p>
              <h2 className="fig-section-title">Trajectoire, cycle et décisions</h2>
              <p className="fig-hero-sub !mt-1">
                Affichage D5/D6 existant — sans cycle fictif, sans commande autoritaire depuis Nora.
              </p>
            </div>
          </div>
          <div className="fig-stat-grid">
            <div className="fig-stat">
              <div className="fig-stat-label">Cycle</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                Sans / actif
              </div>
              <div className="fig-stat-hint">Projection service projet</div>
            </div>
            <div className="fig-stat">
              <div className="fig-stat-label">Décisions D6</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                HumanDecision
              </div>
              <div className="fig-stat-hint">Pas de mutation à l&apos;affichage</div>
            </div>
            <div className="fig-stat">
              <div className="fig-stat-label">CKI / méthode</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                Guidance
              </div>
              <div className="fig-stat-hint">Disponibilité réelle du service</div>
            </div>
          </div>
          <div className="fig-panel" data-figma-frame="127:106">
            <PilotagePanel projectId={params.projectId} />
          </div>
        </div>
      ) : null}

      {surface === "document" ? (
        <div className="fig-workspace-3" data-figma-frame="94:370">
          <DocumentLibrary
            documents={documents.map((d) => ({
              document: { ...d.document, projectId: params.projectId },
              latestRevision: d.latestRevision ?? null,
            }))}
            selectedId={inspect?.document.id ?? null}
            onSelect={(d) => {
              const match = documents.find((x) => x.document.id === d.document.id);
              if (match) openDocumentReadOnly(match);
            }}
          />
          <div className="space-y-3">
            <DocumentInspector
              frameId={docUi === "CONFLICT" ? "160:391" : "97:359"}
              title={
                docUi === "EDITING" ||
                docUi === "SAVING" ||
                docUi === "CONFLICT" ||
                docUi === "UNKNOWN"
                  ? "Révision"
                  : "Inspection"
              }
              uiState={docUi}
              missing={docMissing || null}
              markdown={
                docUi === "READING" || docUi === "FAILED"
                  ? inspect?.latestRevision?.contentMarkdown ?? null
                  : null
              }
              editing={
                docUi === "EDITING" ||
                docUi === "SAVING" ||
                docUi === "CONFLICT" ||
                docUi === "UNKNOWN" ||
                docUi === "FAILED"
              }
              draft={reviseDraft}
              onDraft={setReviseDraft}
              busy={docUi === "SAVING"}
              onStartRevise={
                inspect?.latestRevision
                  ? () => {
                      setDocUi("EDITING");
                      setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                      reviseCorrelationRef.current = null;
                      reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                    }
                  : undefined
              }
              onSaveRevise={() => void saveRevision()}
              onConflictRebase={docUi === "CONFLICT" ? acceptConflictRebase : undefined}
              onCancel={() => {
                setDocUi("READING");
                setReviseDraft(inspect?.latestRevision?.contentMarkdown ?? "");
                setReviseMessage("");
                reviseCorrelationRef.current = null;
                reviseBaseIdRef.current = inspect?.latestRevision?.id ?? null;
              }}
              reviseMessage={reviseMessage}
            >
              {inspect?.latestRevision && docUi === "READING" ? (
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
              ) : null}
            </DocumentInspector>
            <DocumentHistory
              revisions={docHistory}
              activeRevisionId={inspect?.latestRevision?.id}
              onCompareLatest={
                preparationId && inspect
                  ? () => {
                      void (async () => {
                        const listRes = await fetch(
                          `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
                        );
                        const list = await listRes.json();
                        const revs = (list.revisions ?? []).filter(
                          (r: { status: string }) => r.status === "AVAILABLE",
                        );
                        if (revs.length < 2) {
                          setDocDiffText("Comparaison: moins de deux versions AVAILABLE");
                          return;
                        }
                        const left = revs[revs.length - 2];
                        const right = revs[revs.length - 1];
                        const cmpRes = await fetch(
                          `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${left.id}&right=${right.id}`,
                        );
                        const cmp = await cmpRes.json();
                        if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
                          setDocDiffText(
                            `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
                              `+ ${cmp.diff.added.length} / - ${cmp.diff.removed.length}`,
                          );
                        } else {
                          setDocDiffText(
                            `Diff ${cmp.status}: ${cmp.reason ?? cmp.diff?.reason ?? ""}`,
                          );
                        }
                      })();
                    }
                  : undefined
              }
              diffText={docDiffText}
            />
          </div>
        </div>
      ) : null}

      {surface === "git" || surface === "publication" ? (
        <div className="space-y-4" data-testid="git-surface">
          <PublicationInspectionPanel projectId={params.projectId} />
        </div>
      ) : null}

      {surface === "journal" ? (
        <ProjectJournal
          subjects={knowledge?.subjects ?? []}
          acquis={(knowledge?.acquis ?? []).map((a) => ({ ...a, subjectId: null }))}
          openPoints={(knowledge?.openPoints ?? []).map((o) => ({ ...o, subjectId: null }))}
          onBackToThread={() => selectSurface("travail")}
        />
      ) : null}
    </ProjectChrome>
  );
}
