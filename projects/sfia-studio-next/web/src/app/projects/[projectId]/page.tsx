"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { PilotagePanel } from "@/components/PilotagePanel";
import { ProjectChrome } from "@/components/figma/ProjectChrome";
import { NoraConversation } from "@/components/figma/NoraConversation";
import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
import {
  ProjectJournal,
  type JournalContradiction,
  type JournalDecision,
  type JournalNavState,
  type JournalRestriction,
  type JournalSourceLink,
} from "@/components/figma/ProjectJournal";
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
  mayClearComposerDraftOnReconcile,
  pendingStorageKey,
  shouldClearThreadPending,
  type ThreadPendingTurn,
  type ThreadTurnKind,
} from "@/domains/pilotage/thread-recovery";
import {
  clearDraftAfterAck,
  clearComposerDraft,
  purgeAllComposerDraftsInTab,
  purgeComposerDraftsForPilot,
  readComposerDraft,
  writeComposerDraft,
  studioClientLane,
} from "@/domains/conversation/composer-draft";
import {
  resolveActionableProjections,
  type TurnChoice,
  type TurnProjection,
  type TurnReference,
  parseTurnProjection,
} from "@/domains/conversation/turn-projection";
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
  preparationIds?: string[];
  subjects: Array<{
    id: string;
    title: string;
    status: string;
    parentSubjectId: string | null;
    originatedFromSubjectId: string | null;
    summary?: { revisionNumber: number; summaryMarkdown: string } | null;
  }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string; subjectId: string | null }>;
  openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
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
  const [journalDecisions, setJournalDecisions] = useState<JournalDecision[]>([]);
  const [journalRestrictions, setJournalRestrictions] = useState<JournalRestriction[]>([]);
  const [journalSources, setJournalSources] = useState<JournalSourceLink[]>([]);
  const [journalContradictions, setJournalContradictions] = useState<JournalContradiction[]>([]);
  const [journalNav, setJournalNav] = useState<JournalNavState | null>(null);
  const [focusMessageId, setFocusMessageId] = useState<string | null>(null);
  const [focusStatus, setFocusStatus] = useState<string | null>(null);
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
  const [pilotId, setPilotId] = useState<string | null>(null);
  const [turnProjections, setTurnProjections] = useState<TurnProjection[]>([]);
  const [choiceFrozen, setChoiceFrozen] = useState(false);
  const [forceStickToken, setForceStickToken] = useState(0);
  const [viewer, setViewer] = useState<TravailViewerResource | null>(null);
  const [viewerEnlarged, setViewerEnlarged] = useState(false);
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
  const draftVersionRef = useRef(0);
  const pilotIdRef = useRef<string | null>(null);
  const preparationIdRef = useRef<string | null>(null);
  const projectIdRef = useRef(params.projectId);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
  const reviseCorrelationRef = useRef<string | null>(null);
  const reviseBaseIdRef = useRef<string | null>(null);
  const documentsRef = useRef<Doc[]>([]);
  const docUiRef = useRef<DocUiState>("READING");
  const reviseDraftRef = useRef("");
  /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
  const pendingSurfaceRef = useRef<Surface | null>(null);
  /** C1 — ignore stale async viewer responses after A→B / close / project change. */
  const viewerRequestSeqRef = useRef(0);
  const viewerOpenRef = useRef(false);

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
  useEffect(() => {
    pilotIdRef.current = pilotId;
  }, [pilotId]);

  useEffect(() => {
    preparationIdRef.current = preparationId;
  }, [preparationId]);

  useEffect(() => {
    if (surface !== "journal") return;
    let cancelled = false;
    void (async () => {
      const res = await fetch(`/api/projects/${params.projectId}/journal`);
      if (!res.ok || cancelled) return;
      const body = (await res.json()) as {
        knowledge?: Knowledge;
        decisions?: Array<{
          id: string;
          kind: string;
          state: string;
          scope: string;
          statement: string;
          objectRef: string;
          effectiveAt: string;
          createdAt: string;
          applicable?: boolean;
          supersededByDecisionId?: string | null;
          explanation?: JournalDecision["explanation"];
        }>;
        restrictions?: JournalRestriction[];
        sourceLinks?: JournalSourceLink[];
        contradictions?: JournalContradiction[];
      };
      if (cancelled) return;
      if (body.knowledge) setKnowledge(body.knowledge);
      setJournalDecisions(
        (body.decisions ?? []).map((d) => ({
          id: d.id,
          kind: d.kind,
          state: d.state,
          scope: d.scope,
          statement: d.statement,
          objectRef: d.objectRef,
          effectiveAt:
            typeof d.effectiveAt === "string"
              ? d.effectiveAt
              : new Date(d.effectiveAt as unknown as string).toISOString(),
          createdAt:
            typeof d.createdAt === "string"
              ? d.createdAt
              : new Date(d.createdAt as unknown as string).toISOString(),
          applicable: d.applicable,
          supersededByDecisionId: d.supersededByDecisionId ?? null,
          explanation: d.explanation ?? null,
        })),
      );
      setJournalRestrictions(body.restrictions ?? []);
      setJournalSources(body.sourceLinks ?? []);
      setJournalContradictions(body.contradictions ?? []);
    })();
    return () => {
      cancelled = true;
    };
  }, [surface, params.projectId, knowledge]);

  useEffect(() => {
    projectIdRef.current = params.projectId;
    // Invalidate in-flight viewer fetches when project changes.
    viewerRequestSeqRef.current += 1;
    viewerOpenRef.current = false;
    setViewer(null);
    setViewerEnlarged(false);
  }, [params.projectId]);

  function persistDraft(text: string) {
    if (!pilotId) return;
    draftVersionRef.current += 1;
    const prior = readComposerDraft({ pilotId, projectId: params.projectId });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId,
      projectId: params.projectId,
      lane: studioClientLane(),
      text,
      version: draftVersionRef.current,
      sentVersion: prior?.sentVersion ?? null,
      updatedAt: new Date().toISOString(),
    });
  }

  function closeViewer() {
    viewerRequestSeqRef.current += 1;
    viewerOpenRef.current = false;
    setViewer(null);
    setViewerEnlarged(false);
  }

  function applyViewerIfCurrent(
    seq: number,
    next: TravailViewerResource,
    projectIdAtStart: string,
  ) {
    if (seq !== viewerRequestSeqRef.current) return;
    if (!viewerOpenRef.current) return;
    if (projectIdRef.current !== projectIdAtStart) return;
    setViewer(next);
    setViewerEnlarged(false);
  }

  type D4RevisionPayload = {
    status?: string;
    document?: { id?: string; title?: string };
    revision?: {
      id?: string;
      revisionNumber?: number;
      status?: string;
      contentMarkdown?: string;
    };
    revisions?: Array<{
      id?: string;
      revisionNumber?: number;
      status?: string;
      contentMarkdown?: string;
    }>;
    reason?: string;
    error?: string;
  };

  /**
   * Final A — every Travail open revalidates rights via D4 at click time.
   * Never treat React-cached latestRevision as a freshly authorized read.
   */
  async function fetchDocumentViewerViaD4(input: {
    documentId: string;
    titleHint: string;
    revisionId?: string | null;
    versionSource: "exact" | "current";
    seq: number;
    projectIdAtStart: string;
  }) {
    const prepId = preparationIdRef.current;
    if (!prepId) {
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: input.titleHint,
          revisionId: input.revisionId ?? null,
          revisionNumber: null,
          versionSource: input.versionSource,
          markdown: null,
          available: false,
          unavailableReason: "Préparation indisponible — lecture D4 impossible.",
        },
        input.projectIdAtStart,
      );
      return;
    }

    try {
      let targetRevisionId = input.revisionId?.trim() || "";
      let title = input.titleHint;

      if (!targetRevisionId) {
        // Resolve current revision under live ownership check (list endpoint).
        const listRes = await fetch(
          `/api/preparations/${prepId}/documents/${input.documentId}`,
        );
        const listBody = (await listRes.json().catch(() => ({}))) as D4RevisionPayload;
        if (listRes.status === 401) {
          purgeAllComposerDraftsInTab();
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: "Session expirée — contenu non affiché.",
            },
            input.projectIdAtStart,
          );
          return;
        }
        if (!listRes.ok || listBody.status === "FORBIDDEN") {
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: String(
                listBody.reason ??
                  listBody.error ??
                  listBody.status ??
                  "Document introuvable ou non autorisé",
              ),
            },
            input.projectIdAtStart,
          );
          return;
        }
        title = listBody.document?.title ?? title;
        const revisions = Array.isArray(listBody.revisions) ? listBody.revisions : [];
        const availableRevs = revisions
          .filter((r) => r && r.id && String(r.status ?? "").toUpperCase() === "AVAILABLE")
          .sort(
            (a, b) => Number(b.revisionNumber ?? 0) - Number(a.revisionNumber ?? 0),
          );
        const current = availableRevs[0] ?? null;
        if (!current?.id) {
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: "Aucune révision disponible pour ce document.",
            },
            input.projectIdAtStart,
          );
          return;
        }
        targetRevisionId = current.id;
      }

      const res = await fetch(
        `/api/preparations/${prepId}/documents/${input.documentId}?revisionId=${encodeURIComponent(targetRevisionId)}`,
      );
      const j = (await res.json().catch(() => ({}))) as D4RevisionPayload;
      if (res.status === 401) {
        purgeAllComposerDraftsInTab();
        applyViewerIfCurrent(
          input.seq,
          {
            kind: "document",
            documentId: input.documentId,
            title,
            revisionId: targetRevisionId,
            revisionNumber: null,
            versionSource: input.versionSource,
            markdown: null,
            available: false,
            unavailableReason: "Session expirée — contenu non affiché.",
          },
          input.projectIdAtStart,
        );
        return;
      }
      if (!res.ok || j.status === "FORBIDDEN" || j.status === "NOT_FOUND") {
        applyViewerIfCurrent(
          input.seq,
          {
            kind: "document",
            documentId: input.documentId,
            title,
            revisionId: targetRevisionId,
            revisionNumber: null,
            versionSource: input.versionSource,
            markdown: null,
            available: false,
            unavailableReason: String(
              j.reason ?? j.error ?? j.status ?? "Révision inaccessible ou non autorisée",
            ),
          },
          input.projectIdAtStart,
        );
        return;
      }
      const rev = j.revision;
      const markdown =
        j.status === "AVAILABLE" && typeof rev?.contentMarkdown === "string"
          ? rev.contentMarkdown
          : null;
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: j.document?.title ?? title,
          revisionId: rev?.id ?? targetRevisionId,
          revisionNumber: rev?.revisionNumber ?? null,
          versionSource: input.versionSource,
          markdown,
          available: Boolean(markdown),
          unavailableReason: markdown
            ? undefined
            : `Révision non disponible (${String(j.status ?? rev?.status ?? "UNKNOWN")})`,
        },
        input.projectIdAtStart,
      );
    } catch {
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: input.titleHint,
          revisionId: input.revisionId ?? null,
          revisionNumber: null,
          versionSource: input.versionSource,
          markdown: null,
          available: false,
          unavailableReason: "Échec de lecture D4 — aucun contenu inventé.",
        },
        input.projectIdAtStart,
      );
    }
  }

  /** En bref / library open — always live D4 current version. */
  function openTravailDocument(doc: Doc) {
    const projectIdAtStart = params.projectId;
    const seq = ++viewerRequestSeqRef.current;
    viewerOpenRef.current = true;
    // Placeholder while rights + current revision are revalidated.
    setViewer({
      kind: "document",
      documentId: doc.document.id,
      title: doc.document.title,
      revisionId: null,
      revisionNumber: null,
      versionSource: "current",
      markdown: null,
      available: false,
      unavailableReason: "Vérification des droits et de la version courante…",
    });
    setViewerEnlarged(false);
    void fetchDocumentViewerViaD4({
      documentId: doc.document.id,
      titleHint: doc.document.title,
      revisionId: null,
      versionSource: "current",
      seq,
      projectIdAtStart,
    });
  }

  /** C1/Final A — exact revision or live current via D4; D9 Git via existing APIs. */
  async function openTravailReference(ref: TurnReference) {
    const projectIdAtStart = params.projectId;
    const seq = ++viewerRequestSeqRef.current;
    viewerOpenRef.current = true;

    if (ref.kind === "document" && ref.resourceId) {
      const match = documents.find((d) => d.document.id === ref.resourceId);
      const title = match?.document.title ?? ref.label;
      await fetchDocumentViewerViaD4({
        documentId: ref.resourceId,
        titleHint: title,
        revisionId: ref.revisionId ?? null,
        versionSource: ref.revisionId ? "exact" : "current",
        seq,
        projectIdAtStart,
      });
      return;
    }
    if (ref.kind === "git") {
      if (!ref.repositoryId || !ref.path || !ref.ref) {
        applyViewerIfCurrent(
          seq,
          {
            kind: "git",
            title: ref.label,
            path: ref.path ?? null,
            ref: ref.ref ?? null,
            commit: ref.commit ?? null,
            content: null,
            available: false,
            unavailableReason:
              "Référence Git incomplète (dépôt, chemin ou ref manquant) — aucun aperçu inventé.",
            href: ref.href ?? null,
          },
          projectIdAtStart,
        );
        return;
      }
      try {
        const q = new URLSearchParams({
          repositoryId: ref.repositoryId,
          path: ref.path,
          ref: ref.ref,
        });
        const res = await fetch(`/api/projects/${params.projectId}/git/file?${q.toString()}`);
        const j = (await res.json().catch(() => ({}))) as {
          content?: string;
          provenance?: { commitSha?: string | null; permalink?: string | null };
          error?: string;
          errorCategory?: string;
        };
        const prov = j.provenance;
        if (!res.ok) {
          applyViewerIfCurrent(
            seq,
            {
              kind: "git",
              title: ref.label,
              path: ref.path,
              ref: ref.ref,
              commit: prov?.commitSha ?? ref.commit ?? null,
              content: null,
              available: false,
              unavailableReason: String(
                j.error ?? j.errorCategory ?? "Source Git indisponible ou droits insuffisants",
              ),
              href: prov?.permalink ?? ref.href ?? null,
            },
            projectIdAtStart,
          );
        } else {
          const content = typeof j.content === "string" ? j.content : null;
          applyViewerIfCurrent(
            seq,
            {
              kind: "git",
              title: ref.label,
              path: ref.path,
              ref: ref.ref,
              commit: prov?.commitSha ?? ref.commit ?? null,
              content,
              available: Boolean(content),
              unavailableReason: content
                ? undefined
                : "Aperçu Git vide — aucun contenu inventé.",
              href: prov?.permalink ?? ref.href ?? null,
            },
            projectIdAtStart,
          );
        }
      } catch {
        applyViewerIfCurrent(
          seq,
          {
            kind: "git",
            title: ref.label,
            path: ref.path,
            ref: ref.ref,
            commit: ref.commit ?? null,
            content: null,
            available: false,
            unavailableReason: "Échec de lecture Git — réessayez ou ouvrez la source externe.",
            href: ref.href ?? null,
          },
          projectIdAtStart,
        );
      }
      return;
    }
    applyViewerIfCurrent(
      seq,
      {
        kind: "git",
        title: ref.label,
        content: null,
        available: false,
        unavailableReason: "Référence externe — ouvrir le lien si disponible.",
        href: ref.href ?? null,
      },
      projectIdAtStart,
    );
  }

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

  function applyCognitiveRecoveryFromDurable(input: {
    status: string;
    effect: PilotageEffectView | undefined;
    pending: ThreadPendingTurn;
    noraMode?: string;
  }): boolean {
    const status = input.status.trim().toUpperCase();
    setStatus(`Nora ${String(input.noraMode ?? "durable")} · ${status}`);
    setPilotageStatus(formatPilotageEffect(input.effect, false));
    const pendingCleared = applyClearFromResponse(status, input.effect);
    if (!pendingCleared) {
      // Métier UNKNOWN or non-terminal — keep pending; honest copy.
      if (input.effect?.attempted === true) {
        setStatus("Effet métier encore incertain — conserver la réconciliation.");
        setChoiceFrozen(true);
      } else if (status === "RUNNING" || status === "ACCEPTED") {
        setStatus("Tentative encore en cours côté serveur — réessayer plus tard.");
        setChoiceFrozen(true);
      }
      return false;
    }
    // Cognitive terminal without D7 — exit loop; never claim success; keep draft.
    if (status === "UNKNOWN" || status === "INTERRUPTED" || status === "FAILED") {
      setStatus(
        "Réponse Nora non aboutie — historique conservé. Vous pouvez formuler une nouvelle demande. Aucune relance automatique.",
      );
      setNoraActivity("error");
      setChoiceFrozen(false);
      return true;
    }
    const decision = mayClearComposerDraftOnReconcile({
      pending: input.pending,
      currentDraftVersion: draftVersionRef.current,
    });
    if (
      decision.clear &&
      pilotId &&
      clearDraftAfterAck({
        pilotId,
        projectId: params.projectId,
        sentVersion: decision.sentVersion,
        currentVersion: draftVersionRef.current,
      })
    ) {
      setDraft("");
    }
    setChoiceFrozen(false);
    setNoraActivity("idle");
    return true;
  }

  async function reconcilePending(pending: ThreadPendingTurn) {
    setBusy(true);
    setChoiceFrozen(true);
    try {
      // 1) Durable D7 by business command key — métier authority when present.
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
          setChoiceFrozen(false);
        } else {
          setStatus("Effet métier encore incertain — réconciliation métier conservée.");
          setChoiceFrozen(true);
        }
        await refreshDurablePilotage();
        return;
      }

      if (!preparationId) return;

      // 2) R05 — READ durable D3 turn by clientTurnKey (no Nora, no POST).
      // A bare D7 404 is not proof of cognitive terminality by itself.
      const lookup = await fetch(
        `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(pending.clientTurnKey)}`,
      );
      if (lookup.ok) {
        const body = (await lookup.json()) as {
          status?: string;
          pilotageEffect?: PilotageEffectView | null;
          noraMode?: string;
        };
        const status = String(body.status ?? "");
        const effect = (body.pilotageEffect ?? undefined) as PilotageEffectView | undefined;
        const cleared = applyCognitiveRecoveryFromDurable({
          status,
          effect,
          pending,
          noraMode: body.noraMode,
        });
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
          if (Array.isArray(pj.messages)) setMessages(pj.messages as Msg[]);
        }
        await refreshDurablePilotage();
        if (cleared || status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
          return;
        }
        // Non-clearable non-running without effect — fall through only if lookup incomplete.
        if (status) return;
      }

      // 3) Turn not found or lookup failed — idempotent POST replay (same clientTurnKey).
      // Terminal replay never invokes OpenAI; used for ACK/hydration gaps only.
      setPilotageStatus(
        `Tour introuvable ou non terminal — reprise idempotente de la même clé (${pending.clientTurnKey.slice(0, 18)}…)`,
      );
      const retry = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: pending.content,
          clientTurnKey: pending.clientTurnKey,
        }),
      });
      const j = (await retry.json().catch(() => ({}))) as Record<string, unknown>;
      if (retry.ok) {
        setMessages((j.messages as Msg[]) ?? []);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        const tp = parseTurnProjection(j.turnProjection);
        if (tp) upsertTurnProjection(tp);
        applyCognitiveRecoveryFromDurable({
          status: String(j.status ?? ""),
          effect,
          pending,
          noraMode: String(j.noraMode ?? ""),
        });
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
          if (Array.isArray(pj.messages)) setMessages(pj.messages);
        }
        await refreshDurablePilotage();
      } else {
        setChoiceFrozen(true);
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
        // C3 — session invalid: purge tab drafts; do not restore under wrong identity.
        purgeAllComposerDraftsInTab();
        setPilotId(null);
        setUnavailableKind("unauthorized");
        setDraft("");
        setChoiceFrozen(false);
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
      // C3 — draft ownership follows authenticated session pilot, not project owner alone.
      const sessionPilotId =
        typeof j.session?.pilotId === "string" && j.session.pilotId.trim()
          ? String(j.session.pilotId)
          : null;
      setPilotId(sessionPilotId);
      setTurnProjections(
        ((j.turnProjections ?? []) as unknown[])
          .map((raw) => parseTurnProjection(raw))
          .filter((p): p is TurnProjection => p !== null),
      );
      setMessages(j.messages ?? []);
      setDocuments(docs);
      if (sessionPilotId) {
        const record = readComposerDraft({
          pilotId: sessionPilotId,
          projectId: params.projectId,
        });
        if (record?.text && record.pilotId === sessionPilotId) {
          setDraft(record.text);
          draftVersionRef.current = record.version;
        } else {
          setDraft("");
          draftVersionRef.current = 0;
        }
      } else {
        setDraft("");
        draftVersionRef.current = 0;
      }
      // P1-B: unresolved pending ⇒ keep choice groups frozen until reconcile.
      const pendingOnLoad = readPending();
      if (pendingOnLoad) {
        setUnresolvedPending(pendingOnLoad);
        setChoiceFrozen(true);
      }
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
        // R05 — silent READ hydrate: clear stale cognitive pending from durable D3 truth.
        const prepId = (j.preparation?.id as string | undefined) ?? null;
        if (prepId) {
          try {
            const look = await fetch(
              `/api/preparations/${prepId}/turns/by-key/${encodeURIComponent(pending.clientTurnKey)}`,
            );
            if (look.ok) {
              const body = (await look.json()) as {
                status?: string;
                pilotageEffect?: PilotageEffectView | null;
              };
              if (
                shouldClearThreadPending({
                  noraStatus: body.status,
                  effectAttempted: body.pilotageEffect?.attempted,
                  effectStatus: body.pilotageEffect?.status,
                })
              ) {
                rememberPending(null);
                messageTurnKeyRef.current = null;
                setChoiceFrozen(false);
                setStatus(
                  "Réponse Nora non aboutie (état durable) — vous pouvez formuler une nouvelle demande.",
                );
                setPilotageStatus("");
              }
            }
          } catch {
            /* keep pending — network hydrate is best-effort */
          }
        }
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

  function sendChoice(choice: TurnChoice, _messageId: string) {
    void sendMessage(choice.transmitText, { fromChoice: true });
  }

  function upsertTurnProjection(tp: TurnProjection) {
    setTurnProjections((prev) => {
      const id = tp.messageId;
      if (!id) return [...prev, tp];
      const idx = prev.findIndex((p) => p.messageId === id);
      if (idx < 0) return [...prev, tp];
      const next = [...prev];
      next[idx] = tp;
      return next;
    });
  }

  async function sendMessage(
    overrideText?: string,
    opts?: { fromChoice?: boolean },
  ) {
    const text = (overrideText ?? draft).trim();
    if (!text || !preparationId) return;
    const fromChoice = opts?.fromChoice === true;
    const sentVersion = fromChoice ? null : draftVersionRef.current;
    const pendingMeta: Pick<
      ThreadPendingTurn,
      "origin" | "sentDraftVersion" | "projectId" | "pilotId"
    > = {
      origin: fromChoice ? "choice" : "composer",
      sentDraftVersion: sentVersion,
      projectId: params.projectId,
      pilotId: pilotIdRef.current,
    };
    setChoiceFrozen(true);
    setForceStickToken((t) => t + 1);
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
    const buildPending = (): ThreadPendingTurn => ({
      content: text,
      clientTurnKey,
      clientCommandKey,
      ...pendingMeta,
    });
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
          rememberPending(buildPending());
        } else if (distinctFromUnresolved && pendingBefore) {
          rememberPending(pendingBefore);
        }
        const preserveMetierPending =
          (independent || effectBlocked || distinctFromUnresolved) && Boolean(pendingBefore);
        setMessages((j.messages as Msg[]) ?? []);
        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        const tp = parseTurnProjection(j.turnProjection);
        if (tp) upsertTurnProjection(tp);
        const shouldClearDraft =
          !effectBlocked &&
          !distinctFromUnresolved &&
          applyClearFromResponse(String(j.status ?? ""), effect, {
            preserveUnresolvedMetierPending: preserveMetierPending,
          });
        if (!fromChoice && shouldClearDraft && typeof sentVersion === "number") {
          if (
            pilotId &&
            clearDraftAfterAck({
              pilotId,
              projectId: params.projectId,
              sentVersion,
              currentVersion: draftVersionRef.current,
            })
          ) {
            setDraft("");
          } else if (!pilotId) {
            setDraft("");
          }
        } else if (effectBlocked || (distinctFromUnresolved && serverKind === "INTENTION_EFFET")) {
          setStatus(
            effectBlocked
              ? `Effet retenu — pending non résolu (${String(j.unresolvedPendingClientTurnKey ?? pendingBefore?.clientTurnKey ?? "A")})`
              : "Intention précédente non résolue — réconcilier avant un nouveau tour.",
          );
        } else if (j.status === "UNKNOWN" || j.status === "FAILED" || j.status === "INTERRUPTED") {
          setNoraActivity("error");
          if (shouldClearDraft) {
            setStatus(
              "Réponse Nora non aboutie — historique conservé. Vous pouvez formuler une nouvelle demande. Aucune relance automatique.",
            );
          }
        }
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
        }
        await refreshDurablePilotage();
        setNoraActivity(
          j.status === "UNKNOWN" || j.status === "FAILED" || j.status === "INTERRUPTED"
            ? "error"
            : "idle",
        );
        // R05: cognitive UNKNOWN/INTERRUPTED without métier clears pending → unfreeze.
        // Métier UNKNOWN keeps freeze via shouldClearDraft === false.
        if (
          !shouldClearDraft &&
          (String(j.status ?? "") === "UNKNOWN" || String(j.status ?? "") === "INTERRUPTED")
        ) {
          setChoiceFrozen(true);
        } else {
          setChoiceFrozen(false);
        }
      } else {
        // ACK lost / HTTP error — retain turn key; KEEP choices frozen (server may have applied).
        setChoiceFrozen(true);
        rememberPending(buildPending());
        setNoraActivity("error");
        setStatus(
          res.status === 409
            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
        );
      }
    } catch {
      // Network loss after click: fail closed — freeze until reconcile proves outcome.
      setChoiceFrozen(true);
      rememberPending(buildPending());
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

  const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";

  return (
    <ProjectChrome
      projectId={params.projectId}
      projectName={projectName}
      surface={surface}
      statusHint={statusHint}
      loadState={projectLoadState}
      travailLayout={travailLayout}
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
          embeddedInStage
          messages={messages}
          draft={draft}
          busy={busy || !preparationId}
          unresolvedPending={Boolean(unresolvedPending)}
          activity={noraActivity}
          status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
          projections={resolveActionableProjections({
            messages,
            projections: turnProjections,
            suspendActions:
              choiceFrozen ||
              noraActivity === "preparing" ||
              Boolean(unresolvedPending),
          })}
          onChoice={sendChoice}
          onReference={(ref) => void openTravailReference(ref)}
          choiceFrozen={choiceFrozen}
          forceStickToken={forceStickToken}
          layoutMode={travailLayout}
          focusMessageId={focusMessageId}
          focusStatus={focusStatus}
          onFocusMessageHandled={() => {
            setFocusMessageId(null);
          }}
          onDraft={(v) => {
            setDraft(v);
            persistDraft(v);
          }}
          onSend={() => void sendMessage()}
          onReconcile={
            unresolvedPending
              ? () => void reconcilePending(unresolvedPending)
              : undefined
          }
          aside={
            viewer ? (
              <TravailViewer
                resource={viewer}
                enlarged={viewerEnlarged}
                onEnlarge={() => setViewerEnlarged(true)}
                onReduce={() => setViewerEnlarged(false)}
                onClose={closeViewer}
                onOpenInDocuments={
                  viewer.kind === "document"
                    ? () => {
                        const match = documents.find(
                          (d) => d.document.id === viewer.documentId,
                        );
                        if (match) openDocumentReadOnly(match);
                      }
                    : undefined
                }
              />
            ) : (
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
                {documents.length > 0 ? (
                  <div className="fig-inspector-links mt-2">
                    {documents.map((d) => (
                      <button
                        key={d.document.id}
                        type="button"
                        className="fig-inspector-link"
                        data-testid={`travail-consulter-${d.document.id}`}
                        onClick={() => openTravailDocument(d)}
                      >
                        Consulter · {d.document.title}
                      </button>
                    ))}
                  </div>
                ) : null}
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
            )
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
          subjects={(knowledge?.subjects ?? []).map((s) => ({
            id: s.id,
            title: s.title,
            status: s.status,
            parentSubjectId: s.parentSubjectId ?? null,
            originatedFromSubjectId: s.originatedFromSubjectId,
            summary: s.summary ?? null,
          }))}
          acquis={knowledge?.acquis ?? []}
          openPoints={knowledge?.openPoints ?? []}
          decisions={journalDecisions}
          restrictions={journalRestrictions}
          sourceLinks={journalSources}
          contradictions={journalContradictions}
          initialNav={journalNav}
          onNavChange={setJournalNav}
          onOpenMessage={(messageId) => {
            void (async () => {
              setFocusStatus(null);
              const local = messages.find((m) => m.id === messageId);
              if (!local) {
                const res = await fetch(
                  `/api/projects/${params.projectId}/messages/${encodeURIComponent(messageId)}`,
                );
                const body = (await res.json().catch(() => ({}))) as {
                  status?: string;
                  reason?: string;
                  message?: {
                    messageId: string;
                    role: string;
                    content: string;
                    status: string;
                  };
                };
                if (!res.ok || !body.message) {
                  setFocusStatus(
                    body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
                  );
                  selectSurface("travail");
                  return;
                }
                setMessages((prev) => {
                  if (prev.some((m) => m.id === body.message!.messageId)) return prev;
                  return [
                    ...prev,
                    {
                      id: body.message!.messageId,
                      role: body.message!.role,
                      content: body.message!.content,
                      status: body.message!.status,
                    },
                  ];
                });
              }
              // Preserve draft + journalNav; never auto-send.
              setFocusMessageId(messageId);
              selectSurface("travail");
            })();
          }}
          onOpenDocument={(documentId, revisionId) => {
            void fetchDocumentViewerViaD4({
              documentId,
              titleHint:
                documents.find((d) => d.document.id === documentId)?.document.title ?? "Document",
              revisionId: revisionId ?? null,
              versionSource: revisionId ? "exact" : "current",
              seq: ++viewerRequestSeqRef.current,
              projectIdAtStart: params.projectId,
            });
            selectSurface("document");
            // Keep inspect aligned when opening from Journal (J-C14).
            const match = documents.find((d) => d.document.id === documentId);
            if (match) {
              setInspect(match);
              syncSurfaceUrl("document", documentId, "push");
            }
          }}
          onBackToThread={() => selectSurface("travail")}
        />
      ) : null}
    </ProjectChrome>
  );
}
