"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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
import { TrajectoryBoard } from "@/components/figma/TrajectoryBoard";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import type { PilotageProjection } from "@/domains/pilotage/types";
import {
  ProjectUnavailable,
  type ProjectUnavailableKind,
} from "@/components/figma/ProjectUnavailable";
import {
  DocumentBibliothequeSurface,
  DocumentCompareSurface,
  DocumentHistorySurface,
  DocumentReadSurface,
  formatPilotFacingProvenance,
  type DocumentComparePayload,
  type RevisionRow,
  revisionCurrencyLabel,
} from "@/components/figma/DocumentSurfaces";
import {
  conversationalClientCommandKey,
  mayClearComposerDraftOnReconcile,
  pendingStorageKey,
  recoverOrphanPendingFromMessages,
  shouldClearThreadPending,
  shouldRememberPendingOnSendHttpError,
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

type Msg = {
  id: string;
  role: string;
  content: string;
  status: string;
  /** ISO timestamp — used to keep chronological order when hydrating a deep-linked message (E06-04). */
  createdAt?: string;
};
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
    provenanceJson?: string;
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
type DocView = "library" | "read" | "history" | "compare";
type HistoricalSourceConfirmation = {
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
};

type DocumentFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  /** Display/cache only — server never trusts this as drafting authority (R1). */
  sourceContentMarkdown?: string;
  observedHeadRevisionId: string;
  observedHeadRevisionNumber?: number;
  confirmedHistoricalSource?: boolean;
  historicalConfirmation?: HistoricalSourceConfirmation;
  /** F2 — server-issued authorization id (not a client-fabricated claim). */
  historicalAuthorizationId?: string;
  /** F1 — set only when Pilot explicitly asks to conserve a sealed candidate. */
  conserveProposal?: boolean;
  pendingCandidateId?: string;
  pendingCandidateContentSha256?: string;
};

const DOCUMENT_FOCUS_STORAGE_PREFIX = "sfia.docFocus.v1:";

function documentFocusStorageKey(projectId: string, preparationId: string): string {
  return `${DOCUMENT_FOCUS_STORAGE_PREFIX}${projectId}:${preparationId}`;
}

function persistDocumentFocus(
  projectId: string,
  preparationId: string | null,
  focus: DocumentFocus | null,
): void {
  if (typeof window === "undefined" || !preparationId) return;
  const key = documentFocusStorageKey(projectId, preparationId);
  try {
    if (!focus) {
      sessionStorage.removeItem(key);
      return;
    }
    // Durable minimal focus — never persist canonical document body as authority.
    const durable: DocumentFocus = {
      documentId: focus.documentId,
      sourceRevisionId: focus.sourceRevisionId,
      sourceRevisionNumber: focus.sourceRevisionNumber,
      observedHeadRevisionId: focus.observedHeadRevisionId,
      observedHeadRevisionNumber: focus.observedHeadRevisionNumber,
      confirmedHistoricalSource: focus.confirmedHistoricalSource === true,
      historicalConfirmation: focus.historicalConfirmation,
      historicalAuthorizationId: focus.historicalAuthorizationId,
      pendingCandidateId: focus.pendingCandidateId,
      pendingCandidateContentSha256: focus.pendingCandidateContentSha256,
      conserveProposal: false,
    };
    sessionStorage.setItem(key, JSON.stringify(durable));
  } catch {
    /* sessionStorage may be unavailable */
  }
}

function readPersistedDocumentFocus(
  projectId: string,
  preparationId: string,
): DocumentFocus | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(documentFocusStorageKey(projectId, preparationId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DocumentFocus;
    if (
      !parsed?.documentId ||
      !parsed?.sourceRevisionId ||
      !parsed?.observedHeadRevisionId
    ) {
      return null;
    }
    return {
      documentId: parsed.documentId,
      sourceRevisionId: parsed.sourceRevisionId,
      sourceRevisionNumber: parsed.sourceRevisionNumber,
      observedHeadRevisionId: parsed.observedHeadRevisionId,
      observedHeadRevisionNumber: parsed.observedHeadRevisionNumber,
      confirmedHistoricalSource: parsed.confirmedHistoricalSource === true,
      historicalConfirmation: parsed.historicalConfirmation,
      historicalAuthorizationId: parsed.historicalAuthorizationId,
      pendingCandidateId: parsed.pendingCandidateId,
      pendingCandidateContentSha256: parsed.pendingCandidateContentSha256,
      conserveProposal: false, // never replay conserve across reload
    };
  } catch {
    return null;
  }
}

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
  const [pilotageProjection, setPilotageProjection] = useState<PilotageProjection | null>(null);
  const [initialQualification, setInitialQualification] =
    useState<InitialQualificationProjection | null>(null);
  const [projectActivity, setProjectActivity] = useState<{
    openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
    applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
    documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
    openPointsCount: number;
  } | null>(null);
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [docUi, setDocUi] = useState<DocUiState>("READING");
  const [reviseDraft, setReviseDraft] = useState("");
  const [reviseMessage, setReviseMessage] = useState("");
  const [docMissing, setDocMissing] = useState("");
  const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
  const [docHistoryLoading, setDocHistoryLoading] = useState(false);
  const [docView, setDocView] = useState<DocView>("library");
  const [selectedLibraryId, setSelectedLibraryId] = useState<string | null>(null);
  const [readingRevisionId, setReadingRevisionId] = useState<string | null>(null);
  const [readingRevisionNumber, setReadingRevisionNumber] = useState<number | null>(null);
  const [readingMarkdown, setReadingMarkdown] = useState<string | null>(null);
  const [readLoading, setReadLoading] = useState(false);
  const [historySelectedRevisionId, setHistorySelectedRevisionId] = useState<string | null>(null);
  const [comparatorExpanded, setComparatorExpanded] = useState(false);
  const [compareLeftId, setCompareLeftId] = useState<string | null>(null);
  const [compareRightId, setCompareRightId] = useState<string | null>(null);
  const [comparePayload, setComparePayload] = useState<DocumentComparePayload | null>(null);
  const [compareLeftMarkdown, setCompareLeftMarkdown] = useState<string | null>(null);
  const [compareRightMarkdown, setCompareRightMarkdown] = useState<string | null>(null);
  const [compareError, setCompareError] = useState<string | null>(null);
  const [originOpen, setOriginOpen] = useState(false);
  const [documentFocus, setDocumentFocus] = useState<DocumentFocus | null>(null);
  /** R3 — proposal prepared under Documents focus, awaiting explicit conserve. */
  const [pendingDocumentProposal, setPendingDocumentProposal] = useState(false);
  const [readingProvenanceJson, setReadingProvenanceJson] = useState<string | null>(null);
  const [proposalCandidateMarkdown, setProposalCandidateMarkdown] = useState<string | null>(
    null,
  );
  const [proposalCandidateRevisionHint, setProposalCandidateRevisionHint] = useState<
    number | null
  >(null);
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
  /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
  const surfaceNavGenRef = useRef(0);
  const docViewRef = useRef<DocView>("library");
  const documentFocusRef = useRef<DocumentFocus | null>(null);
  const readingLoadSeqRef = useRef(0);

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
    docViewRef.current = docView;
  }, [docView]);
  useEffect(() => {
    documentFocusRef.current = documentFocus;
  }, [documentFocus]);
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
          sourceKind?: string;
          sourceRef?: string;
          explanation?: JournalDecision["explanation"];
          originSources?: JournalSourceLink[];
          sourcedMotivationExcerpt?: string | null;
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
          sourceKind: d.sourceKind,
          sourceRef: d.sourceRef,
          explanation: d.explanation ?? null,
          originSources: d.originSources ?? [],
          sourcedMotivationExcerpt: d.sourcedMotivationExcerpt ?? null,
        })),
      );
      setJournalRestrictions(body.restrictions ?? []);
      setJournalSources(body.sourceLinks ?? []);
      setJournalContradictions(body.contradictions ?? []);
    })();
    return () => {
      cancelled = true;
    };
    // Refresh when entering Journal surface / project — not on every knowledge identity change
    // (that cancelled in-flight loads and dropped sourceLinks intermittently).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surface, params.projectId]);

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
      provenanceJson?: string;
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

  function resetDocumentBibliothequeState() {
    setDocView("library");
    setSelectedLibraryId(null);
    setReadingRevisionId(null);
    setReadingRevisionNumber(null);
    setReadingMarkdown(null);
    setReadLoading(false);
    setHistorySelectedRevisionId(null);
    setComparatorExpanded(false);
    setCompareLeftId(null);
    setCompareRightId(null);
    setComparePayload(null);
    setCompareLeftMarkdown(null);
    setCompareRightMarkdown(null);
    setCompareError(null);
    setOriginOpen(false);
    setDocHistory([]);
    setDocHistoryLoading(false);
  }

  function selectSurface(next: Surface) {
    surfaceNavGenRef.current += 1;
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
      resetDocumentBibliothequeState();
      syncSurfaceUrl(next, null, "push");
    } else {
      resetDocumentBibliothequeState();
      syncSurfaceUrl(next, null, "push");
    }
  }

  function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
    const available = rows.filter((r) => r.status === "AVAILABLE");
    if (available.length === 0) return null;
    return available.reduce((best, r) =>
      r.revisionNumber > best.revisionNumber ? r : best,
    );
  }

  function headRevisionNumberFromRows(rows: RevisionRow[]): number | null {
    const head = headRevisionFromRows(rows);
    return head?.revisionNumber ?? null;
  }

  async function loadDocHistory(preparationIdValue: string, documentId: string) {
    setDocHistoryLoading(true);
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
      );
      if (!res.ok) {
        setDocHistory([]);
        return [];
      }
      const j = await res.json();
      const rows = (j.revisions ?? []) as Array<{
        id: string;
        revisionNumber: number;
        status: string;
        createdAt?: string;
        contentMarkdown?: string;
      }>;
      const mapped = rows.map((r) => ({
        id: r.id,
        revisionNumber: r.revisionNumber,
        status: r.status,
        createdAt: r.createdAt,
        excerpt:
          typeof r.contentMarkdown === "string"
            ? r.contentMarkdown.trim().slice(0, 140)
            : undefined,
      }));
      setDocHistory(mapped);
      return mapped;
    } catch {
      setDocHistory([]);
      return [];
    } finally {
      setDocHistoryLoading(false);
    }
  }

  async function fetchRevisionMarkdown(
    preparationIdValue: string,
    documentId: string,
    revisionId: string,
  ): Promise<{
    id: string;
    revisionNumber: number;
    contentMarkdown: string | null;
    status: string;
    provenanceJson: string | null;
  } | null> {
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}?revisionId=${encodeURIComponent(revisionId)}`,
      );
      if (!res.ok) return null;
      const j = (await res.json()) as D4RevisionPayload;
      const rev = j.revision;
      if (!rev?.id) return null;
      const markdown =
        j.status === "AVAILABLE" && typeof rev.contentMarkdown === "string"
          ? rev.contentMarkdown
          : null;
      const provenanceJson =
        typeof rev.provenanceJson === "string" ? rev.provenanceJson : null;
      return {
        id: rev.id,
        revisionNumber: rev.revisionNumber ?? 0,
        contentMarkdown: markdown,
        status: String(rev.status ?? j.status ?? ""),
        provenanceJson,
      };
    } catch {
      return null;
    }
  }

  async function loadReadingRevision(
    doc: Doc,
    revisionId?: string | null,
  ) {
    const prepId = preparationIdRef.current;
    const targetId = revisionId?.trim() || doc.latestRevision?.id || null;
    if (!prepId || !targetId) {
      setReadingMarkdown(null);
      setReadingProvenanceJson(null);
      setReadingRevisionId(targetId);
      setReadingRevisionNumber(doc.latestRevision?.revisionNumber ?? null);
      setReadLoading(false);
      return;
    }
    const seq = ++readingLoadSeqRef.current;
    setReadLoading(true);
    setReadingRevisionId(targetId);
    const fetched = await fetchRevisionMarkdown(prepId, doc.document.id, targetId);
    if (seq !== readingLoadSeqRef.current) return;
    if (fetched) {
      setReadingRevisionId(fetched.id);
      setReadingRevisionNumber(fetched.revisionNumber);
      setReadingMarkdown(fetched.contentMarkdown);
      setReadingProvenanceJson(fetched.provenanceJson);
    } else {
      setReadingMarkdown(null);
      setReadingProvenanceJson(null);
      setReadingRevisionNumber(doc.latestRevision?.revisionNumber ?? null);
    }
    setReadLoading(false);
  }

  function openDocumentReadView(
    doc: Doc,
    revisionId?: string | null,
    mode: "push" | "replace" = "push",
  ) {
    setInspect(doc);
    setDocMissing("");
    setSelectedLibraryId(doc.document.id);
    setDocView("read");
    setOriginOpen(false);
    setComparatorExpanded(false);
    setComparePayload(null);
    setCompareError(null);
    setSurface("document");
    syncSurfaceUrl("document", doc.document.id, mode);
    void loadReadingRevision(doc, revisionId);
    if (preparationId) void loadDocHistory(preparationId, doc.document.id);
  }

  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
    openDocumentReadView(doc, doc.latestRevision?.id ?? null, mode);
  }

  function applyDocumentFocus(focus: DocumentFocus | null) {
    setDocumentFocus(focus);
    documentFocusRef.current = focus;
    persistDocumentFocus(params.projectId, preparationIdRef.current, focus);
  }

  async function resolveObservedHead(
    preparationIdValue: string,
    documentId: string,
  ): Promise<RevisionRow | null> {
    const rows = await loadDocHistory(preparationIdValue, documentId);
    return headRevisionFromRows(rows);
  }

  async function resumeNoraWithDocumentRevision(input: {
    doc: Doc;
    sourceRevisionId: string;
    sourceRevisionNumber?: number | null;
    sourceContentMarkdown?: string | null;
    confirmedHistoricalSource?: boolean;
  }) {
    const prepId = preparationIdRef.current;
    if (!prepId) return;
    const head = await resolveObservedHead(prepId, input.doc.document.id);
    if (!head) {
      setStatusHint("Aucune révision courante AVAILABLE — reprise Nora impossible.");
      return;
    }
    const historical = input.sourceRevisionId !== head.id;
    setPendingDocumentProposal(false);
    setProposalCandidateMarkdown(null);
    setProposalCandidateRevisionHint(null);
    applyDocumentFocus({
      documentId: input.doc.document.id,
      sourceRevisionId: input.sourceRevisionId,
      sourceRevisionNumber: input.sourceRevisionNumber ?? undefined,
      sourceContentMarkdown: undefined,
      observedHeadRevisionId: head.id,
      observedHeadRevisionNumber: head.revisionNumber,
      // F2 — never treat client bool as server authorization.
      confirmedHistoricalSource: false,
      historicalConfirmation: undefined,
      historicalAuthorizationId: undefined,
      conserveProposal: false,
      pendingCandidateId: undefined,
      pendingCandidateContentSha256: undefined,
    });
    const projectIdAtStart = params.projectId;
    const seq = ++viewerRequestSeqRef.current;
    viewerOpenRef.current = true;
    selectSurface("travail");
    setViewer({
      kind: "document",
      documentId: input.doc.document.id,
      title: input.doc.document.title,
      revisionId: input.sourceRevisionId,
      revisionNumber: input.sourceRevisionNumber ?? null,
      versionSource: historical ? "exact" : "current",
      markdown: null,
      available: false,
      unavailableReason: "Chargement de la version source…",
    });
    setViewerEnlarged(false);
    setStatusHint(
      historical
        ? "Réviser une version historique avec Nora"
        : "Réviser un document avec Nora",
    );
    void fetchDocumentViewerViaD4({
      documentId: input.doc.document.id,
      titleHint: input.doc.document.title,
      revisionId: historical ? input.sourceRevisionId : null,
      versionSource: historical ? "exact" : "current",
      seq,
      projectIdAtStart,
    });
    // F4 — ask Nora in the durable thread (choices appear as continueChoices, not under composer).
    if (historical) {
      void sendMessage(
        "Je veux repartir de la version historique sélectionnée — confirme la base.",
      );
    }
  }

  async function loadDocumentComparison() {
    if (!preparationId || !inspect || !compareLeftId || !compareRightId) return;
    setCompareError(null);
    setComparePayload(null);
    setCompareLeftMarkdown(null);
    setCompareRightMarkdown(null);
    try {
      const cmpRes = await fetch(
        `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${encodeURIComponent(compareLeftId)}&right=${encodeURIComponent(compareRightId)}`,
      );
      const cmp = (await cmpRes.json()) as DocumentComparePayload & {
        reason?: string;
        status?: string;
      };
      if (!cmpRes.ok || cmp.status !== "AVAILABLE") {
        setCompareError(
          cmp.reason ?? `Comparaison indisponible (${String(cmp.status ?? cmpRes.status)})`,
        );
        return;
      }
      setComparePayload(cmp);
      const [leftMd, rightMd] = await Promise.all([
        fetchRevisionMarkdown(preparationId, inspect.document.id, compareLeftId),
        fetchRevisionMarkdown(preparationId, inspect.document.id, compareRightId),
      ]);
      setCompareLeftMarkdown(leftMd?.contentMarkdown ?? null);
      setCompareRightMarkdown(rightMd?.contentMarkdown ?? null);
      setDocView("compare");
    } catch {
      setCompareError("Échec de chargement de la comparaison.");
    }
  }

  function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
    if (qSurface) setSurface(qSurface);
    else setSurface("travail");

    if (qSurface === "document") {
      if (!qDocId) {
        setInspect(null);
        setDocMissing("");
        setDocView("library");
        setSelectedLibraryId(null);
        return;
      }
      const match = docs.find((d) => d.document.id === qDocId);
      if (match) {
        setInspect(match);
        setDocMissing("");
        setSelectedLibraryId(match.document.id);
        const view = docViewRef.current;
        if (view === "library") {
          setDocView("read");
          void loadReadingRevision(match, match.latestRevision?.id ?? null);
          if (preparationId) void loadDocHistory(preparationId, match.document.id);
        }
      } else {
        setInspect(null);
        setDocMissing("Document introuvable ou non autorisé pour ce Pilote.");
        // Stay on read surface so the controlled missing state is visible (DOC-UAT / G4 B2).
        setDocView("read");
        setSelectedLibraryId(null);
        setReadingMarkdown(null);
        setReadingRevisionId(null);
        setReadingRevisionNumber(null);
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

  async function refreshProjectThreadSnapshot(): Promise<Msg[]> {
    const proj = await fetch(`/api/projects/${params.projectId}`);
    if (!proj.ok) return [];
    const pj = await proj.json();
    setDocuments(pj.documents ?? []);
    setKnowledge(pj.knowledge ?? null);
    const msgs = Array.isArray(pj.messages) ? (pj.messages as Msg[]) : [];
    if (msgs.length) setMessages(msgs);
    return msgs;
  }

  async function tryClearOrphanPendingFromThread(
    pending: ThreadPendingTurn,
    msgs: Msg[],
  ): Promise<boolean> {
    const recovered = recoverOrphanPendingFromMessages({
      pendingContent: pending.content,
      messages: msgs,
    });
    if (!recovered.clear) return false;
    applyCognitiveRecoveryFromDurable({
      status: recovered.noraStatus,
      effect: undefined,
      pending,
      noraMode: "thread-orphan-recovery",
    });
    await refreshDurablePilotage();
    return true;
  }

  async function reconcilePending(pending: ThreadPendingTurn) {
    setBusy(true);
    setChoiceFrozen(true);
    setNoraActivity("preparing");
    setStatus("Vérification de l'état serveur…");
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
          setNoraActivity("idle");
        } else {
          setStatus("Effet métier encore incertain — réconciliation métier conservée.");
          setChoiceFrozen(true);
          setNoraActivity("error");
        }
        await refreshDurablePilotage();
        return;
      }

      if (!preparationId) {
        setStatus("Préparation indisponible — recharger la page puis réessayer.");
        setNoraActivity("error");
        return;
      }

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
        await refreshProjectThreadSnapshot();
        await refreshDurablePilotage();
        if (cleared || status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
          if (status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
            setNoraActivity("preparing");
          }
          return;
        }
        // Non-clearable non-running without effect — fall through only if lookup incomplete.
        if (status) return;
      }

      // 2b) Orphan pending key: recover from durable thread before POST replay.
      const snapshot = await refreshProjectThreadSnapshot();
      if (await tryClearOrphanPendingFromThread(pending, snapshot)) {
        return;
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
        await refreshProjectThreadSnapshot();
        await refreshDurablePilotage();
      } else {
        const cat = String(j.errorCategory ?? "");
        if (retry.status === 409 && cat.toUpperCase() === "TURN_IN_PROGRESS") {
          const again = await refreshProjectThreadSnapshot();
          if (await tryClearOrphanPendingFromThread(pending, again)) {
            return;
          }
          setChoiceFrozen(true);
          setNoraActivity("preparing");
          setStatus(
            "Un tour est déjà en cours côté serveur pour cette conversation — attendre la fin puis réessayer « Vérifier et reprendre ». Aucune nouvelle clé locale n'a été créée.",
          );
          return;
        }
        setChoiceFrozen(true);
        setNoraActivity("error");
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
      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
      setInitialQualification((j.initialQualification as InitialQualificationProjection) ?? null);
      setProjectActivity(j.activity ?? null);
      const nextPrepId = j.preparation?.id ?? null;
      setPreparationId(nextPrepId);
      preparationIdRef.current = nextPrepId;
      setProjectName(name);
      setStatusHint(name ? `Projet · ${name}` : "Projet");
      // Restore Documents→Travail focus after reload (identities only; revalidate via D4 on use).
      // P0-C — if a pending candidate pointer exists, reload exact markdown from server (no auto-conserve).
      if (nextPrepId) {
        const restored = readPersistedDocumentFocus(params.projectId, nextPrepId);
        if (restored) {
          const stillOwned = (docs as Doc[]).some(
            (d) => d.document.id === restored.documentId,
          );
          if (stillOwned) {
            setDocumentFocus(restored);
            documentFocusRef.current = restored;
            if (restored.pendingCandidateId) {
              void (async () => {
                try {
                  const q = restored.pendingCandidateContentSha256
                    ? `?expectedSha=${encodeURIComponent(restored.pendingCandidateContentSha256)}`
                    : "";
                  const cres = await fetch(
                    `/api/preparations/${nextPrepId}/document-candidates/${encodeURIComponent(restored.pendingCandidateId!)}${q}`,
                  );
                  const cj = (await cres.json()) as {
                    status?: string;
                    reason?: string;
                    candidate?: {
                      contentMarkdown?: string;
                      contentSha256?: string;
                      title?: string;
                      documentId?: string;
                      sourceRevisionId?: string;
                      observedHeadRevisionId?: string;
                    };
                  };
                  if (!cres.ok || cj.status !== "PENDING" || !cj.candidate?.contentMarkdown) {
                    // SUPERSEDED / denied / missing — clear pending UI, keep focus identities for requalify.
                    setPendingDocumentProposal(false);
                    setProposalCandidateMarkdown(null);
                    setProposalCandidateRevisionHint(null);
                    const curFocus = documentFocusRef.current;
                    if (
                      curFocus &&
                      curFocus.pendingCandidateId === restored.pendingCandidateId
                    ) {
                      applyDocumentFocus({
                        documentId: curFocus.documentId,
                        sourceRevisionId: curFocus.sourceRevisionId,
                        sourceRevisionNumber: curFocus.sourceRevisionNumber,
                        observedHeadRevisionId: curFocus.observedHeadRevisionId,
                        observedHeadRevisionNumber: curFocus.observedHeadRevisionNumber,
                        confirmedHistoricalSource: curFocus.confirmedHistoricalSource,
                        historicalConfirmation: curFocus.historicalConfirmation,
                        historicalAuthorizationId: curFocus.historicalAuthorizationId,
                        pendingCandidateId: undefined,
                        pendingCandidateContentSha256: undefined,
                        conserveProposal: false,
                      });
                    }
                    if (cj.reason === "CANDIDATE_HEAD_MOVED" || cj.reason?.includes("HEAD")) {
                      setStatusHint("La version courante a changé — requalification nécessaire.");
                    }
                    return;
                  }
                  const headNum = restored.observedHeadRevisionNumber ?? null;
                  setPendingDocumentProposal(true);
                  setProposalCandidateMarkdown(cj.candidate.contentMarkdown);
                  setProposalCandidateRevisionHint(headNum != null ? headNum + 1 : null);
                  setStatusHint("Examiner une proposition de Nora");
                  setViewer({
                    kind: "document",
                    documentId: restored.documentId,
                    title: cj.candidate.title ?? "Document",
                    revisionId: restored.sourceRevisionId,
                    revisionNumber: headNum != null ? headNum + 1 : null,
                    versionSource: "exact",
                    markdown: cj.candidate.contentMarkdown,
                    available: true,
                  });
                  // Re-bind focus with server hash; never set conserveProposal.
                  applyDocumentFocus({
                    ...restored,
                    pendingCandidateContentSha256: cj.candidate.contentSha256,
                    conserveProposal: false,
                  });
                } catch {
                  setPendingDocumentProposal(false);
                  setProposalCandidateMarkdown(null);
                }
              })();
            }
          } else {
            applyDocumentFocus(null);
          }
        }
      } else {
        applyDocumentFocus(null);
      }
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

  const missingQualificationAttemptsRef = useRef(0);
  const initialQualificationRef = useRef(initialQualification);
  initialQualificationRef.current = initialQualification;
  useEffect(() => {
    missingQualificationAttemptsRef.current = 0;
  }, [params.projectId]);

  useEffect(() => {
    // E07-COR-01/02/05 — reconcile via POST; also when op missing after create (bounded).
    const status = initialQualification?.status;
    const needsReconcile =
      !initialQualification ||
      status === "PENDING" ||
      status === "RUNNING" ||
      status === "UNKNOWN";
    if (!needsReconcile) return;
    let cancelled = false;
    let intervalId = 0;
    const tick = async () => {
      const current = initialQualificationRef.current;
      if (
        !current &&
        missingQualificationAttemptsRef.current >= 8
      ) {
        window.clearInterval(intervalId);
        return;
      }
      if (!current) {
        missingQualificationAttemptsRef.current += 1;
      }
      const recon = await fetch(
        `/api/projects/${params.projectId}/initial-qualification/reconcile`,
        { method: "POST" },
      );
      if (cancelled) return;
      if (recon.ok) {
        const body = (await recon.json()) as {
          initialQualification?: InitialQualificationProjection | null;
        };
        if (body.initialQualification) {
          missingQualificationAttemptsRef.current = 0;
          setInitialQualification(body.initialQualification);
        }
      }
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (!res.ok || cancelled) return;
      const j = await res.json();
      setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
      if (j.initialQualification) {
        missingQualificationAttemptsRef.current = 0;
        setInitialQualification(j.initialQualification as InitialQualificationProjection);
      }
      setMessages((j.messages ?? []) as Msg[]);
    };
    intervalId = window.setInterval(() => void tick(), 2000);
    void tick();
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [params.projectId, initialQualification?.status, initialQualification?.operationId]);

  // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
  useEffect(() => {
    surfaceNavGenRef.current += 1;
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
    const focus = documentFocusRef.current;
    const relabeled: TurnProjection = {
      ...tp,
      choices: (tp.choices ?? []).map((c) => {
        if (c.transmitText === "DOC_CONFIRM_HISTORICAL_SOURCE" && focus?.sourceRevisionNumber != null) {
          return { ...c, label: `Repartir de la v${focus.sourceRevisionNumber}` };
        }
        if (
          c.transmitText === "DOC_USE_CURRENT_HEAD" &&
          focus?.observedHeadRevisionNumber != null
        ) {
          return {
            ...c,
            label: `Partir de la v${focus.observedHeadRevisionNumber} courante`,
          };
        }
        return c;
      }),
    };
    setTurnProjections((prev) => {
      const id = relabeled.messageId;
      if (!id) return [...prev, relabeled];
      const idx = prev.findIndex((p) => p.messageId === id);
      if (idx < 0) return [...prev, relabeled];
      const next = [...prev];
      next[idx] = relabeled;
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
          ...(documentFocusRef.current
            ? { documentFocus: documentFocusRef.current }
            : {}),
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
        const save = j.documentSave as
          | { status?: string; reason?: string; documentId?: string; revisionNumber?: number }
          | null
          | undefined;
        const pendingCand = j.pendingDocumentCandidate as
          | {
              candidateId?: string;
              contentSha256?: string;
              contentMarkdown?: string;
              title?: string;
            }
          | null
          | undefined;
        const histAuth = j.historicalAuthorization as
          | {
              authorizationId?: string;
              choice?: "USE_SOURCE" | "USE_HEAD";
              documentId?: string;
              sourceRevisionId?: string;
              observedHeadRevisionId?: string;
            }
          | null
          | undefined;
        if (histAuth?.authorizationId && documentFocusRef.current) {
          if (histAuth.choice === "USE_SOURCE") {
            applyDocumentFocus({
              ...documentFocusRef.current,
              confirmedHistoricalSource: true,
              historicalAuthorizationId: histAuth.authorizationId,
              historicalConfirmation: {
                documentId: histAuth.documentId ?? documentFocusRef.current.documentId,
                sourceRevisionId:
                  histAuth.sourceRevisionId ?? documentFocusRef.current.sourceRevisionId,
                observedHeadRevisionId:
                  histAuth.observedHeadRevisionId ??
                  documentFocusRef.current.observedHeadRevisionId,
                choice: "USE_SOURCE",
              },
              conserveProposal: false,
            });
          } else if (histAuth.choice === "USE_HEAD") {
            const match = documentsRef.current.find(
              (d) => d.document.id === documentFocusRef.current?.documentId,
            );
            if (match?.latestRevision) {
              void resumeNoraWithDocumentRevision({
                doc: match,
                sourceRevisionId: match.latestRevision.id,
                sourceRevisionNumber: match.latestRevision.revisionNumber,
                confirmedHistoricalSource: false,
              });
            }
          }
        }
        if (save?.reason === "PROPOSAL_PENDING_CONSERVATION" && pendingCand?.candidateId) {
          setPendingDocumentProposal(true);
          setProposalCandidateMarkdown(pendingCand.contentMarkdown ?? null);
          const headNum = documentFocusRef.current?.observedHeadRevisionNumber ?? null;
          setProposalCandidateRevisionHint(headNum != null ? headNum + 1 : null);
          if (documentFocusRef.current) {
            applyDocumentFocus({
              ...documentFocusRef.current,
              conserveProposal: false,
              pendingCandidateId: pendingCand.candidateId,
              pendingCandidateContentSha256: pendingCand.contentSha256,
            });
          }
          // F5 — visionneuse shows exact candidate, not historical V2 rebadged.
          if (viewer?.kind === "document" || documentFocusRef.current) {
            const focus = documentFocusRef.current;
            setViewer((prev) => {
              if (!prev || prev.kind !== "document" || !focus) return prev;
              return {
                ...prev,
                markdown: pendingCand.contentMarkdown ?? prev.markdown,
                available: Boolean(pendingCand.contentMarkdown),
                unavailableReason: undefined,
                revisionNumber: headNum != null ? headNum + 1 : prev.revisionNumber,
                versionSource: "exact",
              };
            });
          }
          setStatusHint("Examiner une proposition de Nora");
        } else if (save?.status === "AVAILABLE") {
          setPendingDocumentProposal(false);
          setProposalCandidateMarkdown(null);
          setProposalCandidateRevisionHint(null);
          if (documentFocusRef.current) {
            applyDocumentFocus({
              ...documentFocusRef.current,
              conserveProposal: false,
              pendingCandidateId: undefined,
              pendingCandidateContentSha256: undefined,
              confirmedHistoricalSource: false,
              historicalConfirmation: undefined,
              historicalAuthorizationId: undefined,
            });
          }
          if (typeof save.revisionNumber === "number") {
            setStatusHint(`Version v${save.revisionNumber} conservée.`);
          }
          // Refresh viewer to the newly conserved revision (no longer a pending proposal).
          if (
            viewer?.kind === "document" &&
            typeof save.documentId === "string" &&
            typeof (save as { revisionId?: string }).revisionId === "string"
          ) {
            const newRevId = (save as { revisionId: string }).revisionId;
            const newRevNum =
              typeof save.revisionNumber === "number" ? save.revisionNumber : null;
            const seq = ++viewerRequestSeqRef.current;
            const projectIdAtStart = params.projectId;
            setViewer((prev) => {
              if (!prev || prev.kind !== "document") return prev;
              return {
                ...prev,
                revisionId: newRevId,
                revisionNumber: newRevNum,
                versionSource: "current",
                available: false,
                unavailableReason: "Chargement de la version enregistrée…",
              };
            });
            void fetchDocumentViewerViaD4({
              documentId: save.documentId,
              titleHint: viewer.title,
              revisionId: newRevId,
              versionSource: "exact",
              seq,
              projectIdAtStart,
            });
          }
        }
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
        // ACK lost / HTTP error — KEEP choices frozen (server may have applied).
        // TURN_IN_PROGRESS: this clientTurnKey was NOT reserved — never orphan-remember it.
        setChoiceFrozen(true);
        const errCat = String(j.errorCategory ?? "");
        const remember = shouldRememberPendingOnSendHttpError({
          httpStatus: res.status,
          errorCategory: errCat,
        });
        if (remember) {
          rememberPending(buildPending());
        } else if (pendingBefore) {
          rememberPending(pendingBefore);
        }
        setNoraActivity("error");
        if (res.status === 409 && errCat.toUpperCase() === "TURN_IN_PROGRESS") {
          setStatus(
            "TURN_IN_PROGRESS — un tour est déjà en cours sur le serveur. Attendre ou utiliser « Vérifier et reprendre » sur la tentative précédente. Aucune clé orpheline n'a été enregistrée.",
          );
          await refreshProjectThreadSnapshot();
        } else {
          setStatus(
            res.status === 409
              ? `${errCat || String(j.error ?? "conflit")} — intention de tour conservée`
              : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
          );
        }
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

  const docListItems = documents.map((d) => ({
    document: { ...d.document, projectId: params.projectId },
    latestRevision: d.latestRevision ?? null,
    originLabel: formatPilotFacingProvenance(d.latestRevision?.provenanceJson, {
      projectName,
    }),
  }));

  const headRevisionNumber =
    headRevisionNumberFromRows(docHistory) ?? inspect?.latestRevision?.revisionNumber ?? null;

  const readCurrency =
    readingRevisionNumber != null
      ? revisionCurrencyLabel(readingRevisionNumber, headRevisionNumber)
      : "Courante";

  const documentHero =
    surface !== "document"
      ? null
      : docView === "library"
        ? null
        : docView === "read"
          ? {
              kicker: "DOCUMENTS / INSPECTION",
              title: "Lecture du document",
              sub: "Le document complet occupe la zone centrale ; ses actions restent accessibles sur la droite.",
            }
          : docView === "history"
            ? {
                kicker: "DOCUMENTS / HISTORIQUE",
                title: "Historique des versions",
                sub: "Sélectionnez une version dans la liste, puis consultez les actions disponibles sur la droite.",
              }
            : {
                kicker: "DOCUMENTS / HISTORIQUE / COMPARAISON",
                title: "Comparer deux versions",
                sub: "Deux documents côte à côte, avec un résumé des différences en lecture seule.",
              };

  const travailDocumentFocusBanner = pendingDocumentProposal
    ? ("proposal" as const)
    : viewer?.kind === "document" && viewer.versionSource === "exact"
      ? ("historical" as const)
      : null;

  const qualificationLockActive =
    initialQualification?.status === "PENDING" ||
    initialQualification?.status === "RUNNING" ||
    initialQualification?.status === "UNKNOWN";

  const travailHero =
    surface !== "travail"
      ? null
      : qualificationLockActive
        ? {
            kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
            title: "Nora prépare votre trajectoire",
            sub: "Le compositeur est temporairement indisponible pendant la qualification initiale.",
          }
        : pendingDocumentProposal
          ? {
              kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
              title: "Examiner une proposition de Nora",
              sub: "Le Pilote peut préciser sa demande ou demander la conservation d’une nouvelle version documentaire.",
            }
          : documentFocus &&
              documentFocus.sourceRevisionId !== documentFocus.observedHeadRevisionId
            ? {
                kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
                title: "Réviser une version historique avec Nora",
                sub: "Nora vérifie la version courante avant de proposer une révision fondée sur une ancienne version.",
              }
            : {
                kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
                title: "Conversation du projet",
                sub: "Poursuivez le fil avec Nora — les décisions d’ouverture et de clôture restent les vôtres.",
              };

  return (
    <ProjectChrome
      projectId={params.projectId}
      projectName={projectName}
      surface={surface}
      statusHint={statusHint}
      loadState={projectLoadState}
      travailLayout={travailLayout}
      documentHero={documentHero}
      travailHero={travailHero}
    >
      {surface === "projet" ? (
        <ProjectOverview
          projectId={params.projectId}
          projectName={projectName ?? "Projet"}
          preparationId={preparationId}
          knowledge={knowledge}
          pilotage={pilotageProjection}
          initialQualification={initialQualification}
          activity={projectActivity}
          onOpenTravail={() => selectSurface("travail")}
          onOpenTrajectoire={() => selectSurface("pilotage")}
        />
      ) : null}

      {surface === "travail" ? (
        <>
        <NoraConversation
          embeddedInStage
          messages={messages}
          draft={draft}
          busy={busy || !preparationId}
          composerLocked={Boolean(initialQualification?.composerLocked)}
          composerLockReason={initialQualification?.composerLockReason}
          qualificationBanner={qualificationLockActive}
          onOpenTrajectoire={() => selectSurface("pilotage")}
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
                documentFocusBanner={travailDocumentFocusBanner}
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
        </>
      ) : null}

      {surface === "pilotage" ? (
        <div className="space-y-4" data-figma-frame="125:33" data-testid="project-trajectory">
          <TrajectoryBoard
            projectId={params.projectId}
            pilotage={pilotageProjection}
            initialQualification={initialQualification}
            onOpenTravail={() => selectSurface("travail")}
          />
          {/* E07 — no Pilotage (diagnostic) panel on Trajectoire Figma surfaces. */}
        </div>
      ) : null}

      {surface === "document" && docView === "library" ? (
        <DocumentBibliothequeSurface
          documents={docListItems}
          selectedId={selectedLibraryId}
          projectName={projectName}
          onSelect={(d) => setSelectedLibraryId(d.document.id)}
          onOpen={(d) => {
            const match = documents.find((x) => x.document.id === d.document.id);
            if (match) openDocumentReadView(match, match.latestRevision?.id ?? null);
          }}
          onResumeNora={(d) => {
            const match = documents.find((x) => x.document.id === d.document.id);
            if (!match?.latestRevision?.id) return;
            void resumeNoraWithDocumentRevision({
              doc: match,
              sourceRevisionId: match.latestRevision.id,
              sourceRevisionNumber: match.latestRevision.revisionNumber,
              confirmedHistoricalSource: false,
            });
          }}
          onVersions={(d) => {
            const match = documents.find((x) => x.document.id === d.document.id);
            if (!match || !preparationId) return;
            setInspect(match);
            setSelectedLibraryId(match.document.id);
            setDocView("history");
            setComparatorExpanded(false);
            setOriginOpen(false);
            syncSurfaceUrl("document", match.document.id, "push");
            void (async () => {
              const rows = await loadDocHistory(preparationId, match.document.id);
              const head = headRevisionFromRows(rows);
              setHistorySelectedRevisionId(head?.id ?? rows[0]?.id ?? null);
            })();
          }}
        />
      ) : null}

      {surface === "document" && docView === "read" && docMissing && !inspect ? (
        <p className="text-sm" data-testid="document-missing" role="status">
          {docMissing}
        </p>
      ) : null}

      {surface === "document" && docView === "read" && inspect ? (
        <DocumentReadSurface
          title={inspect.document.title}
          markdown={readingMarkdown}
          missing={null}
          revisionLabel={
            readingRevisionNumber != null ? `v${readingRevisionNumber}` : "Version"
          }
          currency={readCurrency}
          loading={readLoading}
          originOpen={originOpen}
          originText={formatPilotFacingProvenance(readingProvenanceJson, {
            projectName,
          })}
          onRequestRevision={() => {
            const revId = readingRevisionId ?? inspect.latestRevision?.id;
            if (!revId) return;
            void resumeNoraWithDocumentRevision({
              doc: inspect,
              sourceRevisionId: revId,
              sourceRevisionNumber: readingRevisionNumber ?? inspect.latestRevision?.revisionNumber,
            });
          }}
          onHistory={() => {
            if (!preparationId) return;
            setDocView("history");
            setComparatorExpanded(false);
            void (async () => {
              const rows = await loadDocHistory(preparationId, inspect.document.id);
              const head = headRevisionFromRows(rows);
              setHistorySelectedRevisionId(
                readingRevisionId ?? head?.id ?? rows[0]?.id ?? null,
              );
            })();
          }}
          onOrigin={() => setOriginOpen((v) => !v)}
        />
      ) : null}

      {surface === "document" && docView === "history" && inspect ? (
        <DocumentHistorySurface
          documentTitle={inspect.document.title}
          revisions={docHistory}
          headRevisionNumber={headRevisionNumber}
          selectedRevisionId={historySelectedRevisionId}
          loading={docHistoryLoading}
          comparatorExpanded={comparatorExpanded}
          compareLeftId={compareLeftId}
          compareRightId={compareRightId}
          onSelectRevision={setHistorySelectedRevisionId}
          onToggleComparator={() => setComparatorExpanded((v) => !v)}
          onCompareLeft={setCompareLeftId}
          onCompareRight={setCompareRightId}
          onShowComparison={() => void loadDocumentComparison()}
          onRead={() => {
            const revId = historySelectedRevisionId;
            if (!revId) return;
            openDocumentReadView(inspect, revId);
          }}
          onResumeNora={() => {
            const row = docHistory.find((r) => r.id === historySelectedRevisionId);
            if (!row) return;
            void resumeNoraWithDocumentRevision({
              doc: inspect,
              sourceRevisionId: row.id,
              sourceRevisionNumber: row.revisionNumber,
            });
          }}
        />
      ) : null}

      {surface === "document" && docView === "compare" && inspect ? (
        <DocumentCompareSurface
          documentTitle={inspect.document.title}
          headRevisionNumber={headRevisionNumber}
          comparison={comparePayload}
          leftMarkdown={compareLeftMarkdown}
          rightMarkdown={compareRightMarkdown}
          error={compareError}
          onBack={() => {
            setDocView("history");
            setComparePayload(null);
            setCompareError(null);
          }}
        />
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
            // Navigate immediately so in-flight fetches cannot fight a later Journal return.
            setFocusStatus(null);
            setFocusMessageId(messageId);
            selectSurface("travail");
            const navGen = surfaceNavGenRef.current;
            void (async () => {
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
                    createdAt?: string;
                    ordinal?: number;
                  };
                };
                if (!res.ok || !body.message) {
                  if (navGen !== surfaceNavGenRef.current) return;
                  setFocusStatus(
                    body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
                  );
                  return;
                }
                // E06-04 — prefer canonical reload; otherwise insert by createdAt (never append blindly).
                const prepId = preparationIdRef.current;
                let reloaded = false;
                if (prepId) {
                  const listRes = await fetch(`/api/preparations/${prepId}/messages`);
                  if (listRes.ok) {
                    const listBody = (await listRes.json().catch(() => ({}))) as {
                      messages?: Msg[];
                    };
                    const rows = Array.isArray(listBody)
                      ? (listBody as unknown as Msg[])
                      : Array.isArray(listBody.messages)
                        ? listBody.messages
                        : null;
                    if (rows && rows.some((m) => m.id === messageId)) {
                      setMessages(
                        rows.map((m) => ({
                          id: m.id,
                          role: m.role,
                          content: m.content,
                          status: m.status,
                          createdAt:
                            typeof m.createdAt === "string"
                              ? m.createdAt
                              : m.createdAt
                                ? new Date(m.createdAt as unknown as string).toISOString()
                                : undefined,
                        })),
                      );
                      reloaded = true;
                    }
                  }
                }
                if (!reloaded) {
                  const fetched: Msg = {
                    id: body.message.messageId,
                    role: body.message.role,
                    content: body.message.content,
                    status: body.message.status,
                    createdAt: body.message.createdAt,
                  };
                  const targetT = fetched.createdAt ? Date.parse(fetched.createdAt) : Number.NaN;
                  if (!Number.isFinite(targetT)) {
                    setFocusStatus(
                      "Message exact chargé — horodatage absent ; chronologie non inventée.",
                    );
                  }
                  setMessages((prev) => {
                    if (prev.some((m) => m.id === fetched.id)) return prev;
                    if (!Number.isFinite(targetT)) return [...prev, fetched];
                    const insertAt = prev.findIndex((m) => {
                      const t = m.createdAt ? Date.parse(m.createdAt) : Number.NaN;
                      return Number.isFinite(t) && t > targetT;
                    });
                    if (insertAt < 0) return [...prev, fetched];
                    const copy = prev.slice();
                    copy.splice(insertAt, 0, fetched);
                    return copy;
                  });
                }
              }
              // Preserve draft + journalNav; never auto-send. Surface already switched above.
              if (navGen !== surfaceNavGenRef.current) return;
              setFocusMessageId(messageId);
            })();
          }}
          onOpenDocument={(documentId, revisionId) => {
            // J-C14 — open exact D4 revision in Travail viewer (same continuity pattern as message).
            // Preserve journalNav; do not invent content if D4 refuses.
            const titleHint =
              documents.find((d) => d.document.id === documentId)?.document.title ?? "Document";
            const seq = ++viewerRequestSeqRef.current;
            viewerOpenRef.current = true;
            setViewer({
              kind: "document",
              documentId,
              title: titleHint,
              revisionId: revisionId ?? null,
              revisionNumber: null,
              versionSource: revisionId ? "exact" : "current",
              markdown: null,
              available: false,
              unavailableReason: "Vérification D4 de la révision citée…",
            });
            void fetchDocumentViewerViaD4({
              documentId,
              titleHint,
              revisionId: revisionId ?? null,
              versionSource: revisionId ? "exact" : "current",
              seq,
              projectIdAtStart: params.projectId,
            });
            selectSurface("travail");
            const match = documents.find((d) => d.document.id === documentId);
            if (match) setInspect(match);
          }}
          onBackToThread={() => selectSurface("travail")}
        />
      ) : null}
    </ProjectChrome>
  );
}
