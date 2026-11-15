"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { PreparationConversation } from "@/components/figma/PreparationConversation";
import { PreparationProposal } from "@/components/figma/PreparationProposal";
import { ProjectJournal } from "@/components/figma/ProjectJournal";
import {
  DocumentHistory,
  DocumentInspector,
  DocumentLibrary,
  type RevisionRow,
} from "@/components/figma/DocumentSurfaces";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string; projectId: string | null };
  latestRevision: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};
type Knowledge = {
  subjects: Array<{ id: string; title: string; status: string; originatedFromSubjectId: string | null }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string; subjectId: string | null; provenanceJson: string }>;
  openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
};

type Surface = "travail" | "journal" | "document";

export default function PreparationPage() {
  const params = useParams<{ preparationId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const preparationId = params.preparationId;
  const isResumedPrep =
    searchParams.get("resume") === "1" || searchParams.get("from") === "portfolio";
  const [proposalEditing, setProposalEditing] = useState(false);
  const [draftProposalName, setDraftProposalName] = useState("");
  const [draftProposalSummary, setDraftProposalSummary] = useState("");
  const [revRows, setRevRows] = useState<RevisionRow[]>([]);
  const [docViewMode, setDocViewMode] = useState<"read" | "edit">("read");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [draft, setDraft] = useState("");
  const [docText, setDocText] = useState("# Notes du sas\n");
  const [docId, setDocId] = useState<string | undefined>();
  const [baseRevisionId, setBaseRevisionId] = useState<string | undefined>();
  const [previewName, setPreviewName] = useState("");
  const [previewSummary, setPreviewSummary] = useState("");
  const [creationRevision, setCreationRevision] = useState(1);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [busy, setBusy] = useState(false);
  const [surface, setSurface] = useState<Surface>("travail");
  const [inspectDocId, setInspectDocId] = useState<string | null>(null);
  const [diffText, setDiffText] = useState("");
  const [splitSubjectId, setSplitSubjectId] = useState<string | null>(null);
  const [splitTitle, setSplitTitle] = useState("");
  const [splitAcquis, setSplitAcquis] = useState<string[]>([]);
  /** Stable creation intent — key survives retry/timeout until AVAILABLE or explicit new intent. */
  type CreateIntent = { key: string; contentSnapshot: string; title: string };
  type ReviseIntent = {
    key: string;
    documentId: string;
    baseRevisionId: string;
    contentSnapshot: string;
  };
  const [createDocIntent, setCreateDocIntent] = useState<CreateIntent | null>(null);
  const [reviseIntent, setReviseIntent] = useState<ReviseIntent | null>(null);
  /** Refs avoid double-click minting two keys before React state commits. */
  const createDocIntentRef = useRef<CreateIntent | null>(null);
  const reviseIntentRef = useRef<ReviseIntent | null>(null);
  /** Stable client turn key for the current draft — reused across network retries. */
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
  const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);
  /** Structured awaiting mission key from server — never parsed from Nora prose. */
  const [awaitingClientIntentKey, setAwaitingClientIntentKey] = useState<string | null>(null);

  function rememberCreateIntent(next: CreateIntent | null) {
    createDocIntentRef.current = next;
    setCreateDocIntent(next);
  }
  function rememberReviseIntent(next: ReviseIntent | null) {
    reviseIntentRef.current = next;
    setReviseIntent(next);
  }

  const reloadKnowledge = useCallback(async () => {
    const res = await fetch(`/api/preparations/${preparationId}/knowledge`);
    if (res.ok) {
      const j = await res.json();
      setKnowledge(j.knowledge ?? null);
    }
  }, [preparationId]);

  const reload = useCallback(async () => {
    const res = await fetch(`/api/preparations/${preparationId}`);
    if (res.status === 401) {
      router.push("/login");
      return;
    }
    const j = await res.json();
    setMessages(j.messages ?? []);
    setDocs(j.documents ?? []);
    setPreviewName(j.preparation?.previewName ?? "");
    setPreviewSummary(j.preparation?.previewSummary ?? "");
    setCreationRevision(j.preparation?.creationRevision ?? 1);
    setProjectId(j.project?.id ?? null);
    const awaiting = j.awaitingMission as
      | { clientIntentKey?: string; status?: string }
      | null
      | undefined;
    setAwaitingClientIntentKey(
      awaiting?.status === "AWAITING_PILOT_ACT" && awaiting.clientIntentKey
        ? awaiting.clientIntentKey
        : null,
    );
    const first = j.documents?.[0];
    // While a create intent is open (e.g. ACK lost after server commit), do NOT adopt
    // docId from a background reload. Adopting would hide the intent key and divert the
    // next save into the revise path (new revsave key) instead of replaying the same
    // creation correlation key. Docs list still updates above so the user can see truth.
    if (first && !createDocIntentRef.current) {
      setDocId(first.document.id);
      setDocText(first.latestRevision?.contentMarkdown ?? docText);
      setBaseRevisionId(first.latestRevision?.id);
    }
    await reloadKnowledge();
  }, [preparationId, router, docText, reloadKnowledge]);

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preparationId]);

  async function sendMessage() {
    if (!draft.trim()) return;
    setBusy(true);
    setNoraActivity("preparing");
    const text = draft.trim();
    if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
      messageTurnKeyRef.current = {
        content: text,
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `turn-${crypto.randomUUID()}`
            : `turn-${preparationId}-${Date.now()}`,
      };
    }
    const clientTurnKey = messageTurnKeyRef.current.key;
    try {
      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: text,
          clientTurnKey,
          correlationKey: clientTurnKey,
        }),
      });
      let j: Record<string, unknown> = {};
      try {
        j = (await res.json()) as Record<string, unknown>;
      } catch {
        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
      }
      if (res.ok) {
        messageTurnKeyRef.current = null;
        setDraft("");
        setMessages((j.messages as typeof messages) ?? []);
        setNoraActivity("idle");
        const mp = j.missionProjection as
          | { clientIntentKey?: string; status?: string }
          | null
          | undefined;
        setAwaitingClientIntentKey(
          mp?.status === "AWAITING_PILOT_ACT" && mp.clientIntentKey
            ? mp.clientIntentKey
            : null,
        );
        const policy = j.policy as
          | { profile?: string; profileType?: string }
          | undefined;
        const policyPart = policy?.profile
          ? ` · policy ${policy.profile}/${policy.profileType}`
          : "";
        const opPart = j.operationId ? ` · op ${String(j.operationId).slice(0, 18)}` : "";
        const replayPart = j.idempotentReplay ? " · rejeu tour" : "";
        const documentSave = j.documentSave as
          | { status?: string; documentId?: string; revisionNumber?: number; reason?: string }
          | undefined;
        const docPart =
          documentSave?.status === "AVAILABLE"
            ? ` · document ${documentSave.documentId} v${documentSave.revisionNumber}`
            : documentSave
              ? ` · document ${documentSave.status}`
              : "";
        const capitalisation = j.capitalisation;
        const cap =
          Array.isArray(capitalisation) && capitalisation.length
            ? ` · capitalisé ${capitalisation.length} (AVAILABLE confirmé)`
            : "";
        const docConflict =
          documentSave?.status === "CONFLICT" ? ` · CONFLICT ${documentSave.reason ?? ""}` : "";
        const streaming = j.streaming as
          | { attempted?: boolean; delivered?: boolean }
          | undefined;
        setStatus(
          `Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}${policyPart}${opPart}${replayPart}${docPart}${docConflict}${cap}` +
            (streaming?.attempted
              ? ` · stream attempted=${streaming.attempted} delivered=${streaming.delivered}`
              : ""),
        );
        await reload();
      } else {
        setNoraActivity("error");
        // Keep turn key on network/conflict so retry reuses the same intention.
        const cat = String(j.errorCategory ?? j.error ?? "échec message");
        setStatus(
          res.status === 409
            ? `${cat} — intention de tour conservée`
            : cat,
        );
      }
    } catch {
      setNoraActivity("error");
      // Keep clientTurnKey — network failure must not mint a new intention.
      setStatus("échec réseau — intention de tour conservée");
    } finally {
      setBusy(false);
    }
  }

  async function saveDoc() {
    const title = "Document du sas";
    // Existing document saves use a distinct revise-via-save key bound to doc+base intent
    if (docId) {
      let intent = reviseIntentRef.current;
      if (
        intent &&
        (intent.documentId !== docId ||
          intent.baseRevisionId !== (baseRevisionId ?? "") ||
          intent.contentSnapshot !== docText)
      ) {
        if (intent.contentSnapshot !== docText && intent.documentId === docId) {
          setStatus(
            "CONFLICT: contenu modifié pour la même intention de sauvegarde — annuler l'intention ou restaurer le payload",
          );
          return;
        }
        intent = null;
      }
      if (!intent) {
        intent = {
          key:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? `revsave-${crypto.randomUUID()}`
              : `revsave-${docId}-${Math.random().toString(36).slice(2)}`,
          documentId: docId,
          baseRevisionId: baseRevisionId ?? "",
          contentSnapshot: docText,
        };
        rememberReviseIntent(intent);
      }
      setBusy(true);
      try {
        const res = await fetch(`/api/preparations/${preparationId}/documents`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            contentMarkdown: intent.contentSnapshot,
            documentId: docId,
            correlationKey: intent.key,
          }),
        });
        const j = await res.json();
        if (j.status === "AVAILABLE") {
          setDocId(j.documentId);
          setBaseRevisionId(j.revisionId);
          rememberReviseIntent(null);
          rememberCreateIntent(null);
          setStatus(
            j.idempotentReplay
              ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
              : `Document AVAILABLE rev ${j.revisionNumber}`,
          );
          await reload();
        } else if (j.status === "CONFLICT") {
          setStatus(`CONFLICT document: ${j.reason ?? "version ou corrélation"} — clé conservée`);
        } else if (j.status === "UNKNOWN") {
          setStatus(`Document UNKNOWN: ${j.reason ?? "réconciliation"} — retry avec la même clé`);
        } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
      } catch {
        setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
      } finally {
        setBusy(false);
      }
      return;
    }

    // Creation intent: one key until AVAILABLE; payload change refused without new intent
    let intent = createDocIntentRef.current;
    if (intent && intent.contentSnapshot !== docText) {
      setStatus(
        "CONFLICT: payload modifié pour la même intention de création — conserver le texte ou démarrer une nouvelle intention",
      );
      return;
    }
    if (!intent) {
      intent = {
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `create-doc-${crypto.randomUUID()}`
            : `create-doc-${preparationId}-${Math.random().toString(36).slice(2)}`,
        contentSnapshot: docText,
        title,
      };
      rememberCreateIntent(intent);
    }

    setBusy(true);
    try {
      const res = await fetch(`/api/preparations/${preparationId}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: intent.title,
          contentMarkdown: intent.contentSnapshot,
          correlationKey: intent.key,
        }),
      });
      const j = await res.json();
      if (j.status === "AVAILABLE") {
        setDocId(j.documentId);
        setBaseRevisionId(j.revisionId);
        rememberCreateIntent(null);
        setStatus(
          j.idempotentReplay
            ? `Document AVAILABLE (rejeu idempotent) rev ${j.revisionNumber}`
            : `Document AVAILABLE rev ${j.revisionNumber}`,
        );
        await reload();
      } else if (j.status === "CONFLICT") {
        setStatus(`CONFLICT document: ${j.reason ?? "corrélation"} — clé d'intention conservée`);
      } else if (j.status === "UNKNOWN") {
        setStatus(`Document UNKNOWN: ${j.reason ?? "en vol"} — réessayer avec la même clé`);
      } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
    } catch {
      setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
    } finally {
      setBusy(false);
    }
  }

  async function reviseDoc() {
    if (!docId || !baseRevisionId) {
      setStatus("Révision impossible: version de base inconnue");
      return;
    }
    let intent = reviseIntentRef.current;
    if (
      intent &&
      (intent.documentId !== docId ||
        intent.baseRevisionId !== baseRevisionId ||
        intent.contentSnapshot !== docText)
    ) {
      if (intent.contentSnapshot !== docText && intent.documentId === docId) {
        setStatus(
          "CONFLICT: contenu modifié pour la même intention de révision — clé non renouvelée automatiquement",
        );
        return;
      }
      intent = null;
    }
    if (!intent) {
      intent = {
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `rev-${crypto.randomUUID()}`
            : `rev-${Math.random().toString(36).slice(2)}`,
        documentId: docId,
        baseRevisionId,
        contentSnapshot: docText,
      };
      rememberReviseIntent(intent);
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/preparations/${preparationId}/documents/${docId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "revise",
          baseRevisionId: intent.baseRevisionId,
          contentMarkdown: intent.contentSnapshot,
          correlationKey: intent.key,
          scope: "section",
        }),
      });
      const j = await res.json();
      if (j.status === "AVAILABLE") {
        setBaseRevisionId(j.revisionId);
        rememberReviseIntent(null);
        setStatus(`Révision AVAILABLE v${j.revisionNumber}`);
        await reload();
      } else if (j.status === "CONFLICT") {
        setStatus(
          `CONFLICT base périmée — attendu ${j.expectedBaseRevisionId}, actuel ${j.actualLatestRevisionId}`,
        );
      } else setStatus(`Révision ${j.status}: ${j.reason ?? ""}`);
    } catch {
      setStatus("Échec réseau / ACK perdu — intention de révision conservée");
    } finally {
      setBusy(false);
    }
  }

  function startNewCreateIntent() {
    rememberCreateIntent(null);
    setStatus("Nouvelle intention de création — prochaine sauvegarde générera une nouvelle clé");
  }

  async function compareLatestTwo() {
    if (!docId) return;
    const listRes = await fetch(`/api/preparations/${preparationId}/documents/${docId}`);
    const list = await listRes.json();
    const revs = (list.revisions ?? []).filter((r: { status: string }) => r.status === "AVAILABLE");
    if (revs.length < 2) {
      setStatus("Comparaison: moins de deux versions AVAILABLE");
      return;
    }
    const left = revs[revs.length - 2];
    const right = revs[revs.length - 1];
    const cmpRes = await fetch(
      `/api/preparations/${preparationId}/documents/${docId}?left=${left.id}&right=${right.id}`,
    );
    const cmp = await cmpRes.json();
    if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
      setDiffText(
        `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
          `+ ${cmp.diff.added.length} lignes\n- ${cmp.diff.removed.length} lignes\n` +
          `Ajouts:\n${cmp.diff.added.slice(0, 12).join("\n")}\n` +
          `Suppressions:\n${cmp.diff.removed.slice(0, 12).join("\n")}`,
      );
      setSurface("document");
      setStatus(`Diff v${cmp.left.revisionNumber}/v${cmp.right.revisionNumber}`);
    } else if (cmp.status === "DEGRADED" || cmp.diff?.degraded) {
      setDiffText("");
      setStatus(
        `Diff DEGRADED: ${cmp.reason ?? cmp.diff?.reason ?? "DIFF_BUDGET_EXCEEDED"} — comparaison détaillée impossible (pas un diff exhaustif)`,
      );
    } else setStatus(`Diff ${cmp.status}`);
  }

  async function savePreview() {
    const name = proposalEditing ? draftProposalName : previewName;
    const summary = proposalEditing ? draftProposalSummary : previewSummary;
    const res = await fetch(`/api/preparations/${preparationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ previewName: name, previewSummary: summary }),
    });
    const j = await res.json();
    if (res.ok) {
      setPreviewName(name);
      setPreviewSummary(summary);
      setCreationRevision(j.creationRevision);
      setProposalEditing(false);
      setStatus(`Proposition enregistrée · révision ${j.creationRevision}`);
    } else {
      setStatus(`Échec enregistrement proposition`);
    }
  }

  /**
   * ML4C S02 — after lost ACK, reconcile with the same idempotency key before any new create.
   * Read-only GET; never mints a second mutation automatically.
   */
  async function reconcileCreateAfterAckLoss(key: string): Promise<string | null> {
    try {
      const res = await fetch(
        `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(key)}`,
      );
      let j: {
        status?: string;
        projectId?: string;
        reason?: string;
      } = {};
      try {
        j = (await res.json()) as typeof j;
      } catch {
        j = {};
      }
      if (j.status === "ALREADY_CREATED" && j.projectId) {
        setProjectId(j.projectId);
        setAwaitingClientIntentKey(null);
        setStatus(`ALREADY_CREATED (réconcilié après ACK perdu) → ${j.projectId}`);
        router.push(`/projects/${j.projectId}`);
        return j.projectId;
      }
      setStatus(
        `Réconciliation ${j.status ?? (res.ok ? "UNKNOWN" : `HTTP_${res.status}`)} — clé d'intention conservée`,
      );
      return null;
    } catch {
      setStatus("Réconciliation impossible (réseau) — clé d'intention conservée");
      return null;
    }
  }

  async function createProject() {
    setBusy(true);
    // Structured binding only — server verifies clientIntentKey against durable mission.
    const clientIntentKey = awaitingClientIntentKey ?? undefined;
    const key = clientIntentKey ? `d2:mission:${clientIntentKey}` : idempotencyKey;
    try {
      const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          expectedCreationRevision: creationRevision,
          projectName: previewName || "Projet sans titre",
          previewSummary,
          idempotencyKey: key,
          clientIntentKey,
        }),
      });
      let j: {
        status?: string;
        projectId?: string;
        missionBindingError?: string;
        missionContinue?: {
          continued?: boolean;
          documentSave?: { documentId?: string };
          reason?: string;
        };
      } = {};
      try {
        j = (await res.json()) as typeof j;
      } catch {
        j = {};
      }

      const bindErr = j.missionBindingError ? ` · bind ${j.missionBindingError}` : "";
      const cont =
        j.missionContinue?.continued && j.missionContinue?.documentSave?.documentId
          ? ` · doc ${j.missionContinue.documentSave.documentId}`
          : j.missionContinue?.reason
            ? ` · continue ${j.missionContinue.reason}`
            : "";
      if (j.status || j.projectId) {
        setStatus(`${j.status ?? ""}${j.projectId ? ` → ${j.projectId}` : ""}${cont}${bindErr}`);
      }
      if (j.projectId && !j.missionBindingError) {
        setProjectId(j.projectId);
        setAwaitingClientIntentKey(null);
        router.push(`/projects/${j.projectId}`);
        return;
      }

      // No usable projectId in response (parse failure, opaque error, ACK truncated):
      // reconcile with the SAME key before any new create mutation.
      const recovered = await reconcileCreateAfterAckLoss(key);
      if (recovered) return;
      await reload();
    } catch {
      // Network throw after possible server commit — same key, reconcile only.
      const recovered = await reconcileCreateAfterAckLoss(key);
      if (!recovered) {
        setStatus("Échec réseau / ACK perdu — intention et clé conservées pour retry");
      }
    } finally {
      setBusy(false);
    }
  }

  async function renameSubject(subjectId: string, title: string) {
    const res = await fetch(`/api/preparations/${preparationId}/knowledge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "rename", subjectId, newTitle: title }),
    });
    const j = await res.json();
    setStatus(`Sujet ${j.status}${j.title ? `: ${j.title}` : ""}`);
    await reloadKnowledge();
  }

  async function confirmSplit() {
    if (!splitSubjectId || !splitTitle.trim()) return;
    if (splitAcquis.length === 0) {
      setStatus("Séparation annulable: sélectionner au moins un acquis du Sujet source");
      return;
    }
    const res = await fetch(`/api/preparations/${preparationId}/knowledge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "split",
        subjectId: splitSubjectId,
        newTitle: splitTitle,
        acquisIds: splitAcquis,
        openPointIds: [],
      }),
    });
    const j = await res.json();
    if (j.status === "AVAILABLE" && j.createdNewIdentity) {
      setStatus(`Séparation OK → ${j.newSubjectId} (nouvelle identité, filiation ${j.sourceSubjectId})`);
      setSplitSubjectId(null);
      setSplitTitle("");
      setSplitAcquis([]);
      await reloadKnowledge();
    } else {
      // Keep panel open on failure — no hidden mutation
      setStatus(`Séparation ${j.status}: ${j.reason ?? "échec"} — aucune mutation partielle`);
    }
  }

  function startConstituteProposal() {
    setDraftProposalName(previewName);
    setDraftProposalSummary(previewSummary);
    setProposalEditing(true);
  }

  function adoptLastNoraSummary() {
    const last = [...messages].reverse().find((m) => m.role === "assistant");
    if (last) setDraftProposalSummary(last.content.slice(0, 2000));
  }

  async function loadRevisionHistory(documentId: string) {
    const res = await fetch(`/api/preparations/${preparationId}/documents/${documentId}`);
    if (!res.ok) {
      setRevRows([]);
      return;
    }
    const j = await res.json();
    const rows = (j.revisions ?? j.items ?? []) as Array<{
      id: string;
      revisionNumber: number;
      status: string;
      createdAt?: string;
    }>;
    setRevRows(
      rows.map((r) => ({
        id: r.id,
        revisionNumber: r.revisionNumber,
        status: r.status,
        createdAt: r.createdAt,
      })),
    );
  }

  const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];
  const sasFrame = isResumedPrep ? "159:145" : "94:135";

  return (
    <div className="fig-page" data-figma-frame={sasFrame} data-sas-resume={isResumedPrep ? "1" : "0"}>
      <div className="fig-breadcrumb">
        <span>
          SFIA Studio / Nouveau projet / préparation{isResumedPrep ? " · reprise" : ""}
        </span>
        <span className="text-xs muted truncate max-w-[40%]">{preparationId}</span>
      </div>
      <header className="space-y-2">
        <p className="fig-kicker">Espace de préparation — projet non créé</p>
        <h1 className="fig-hero-title">
          {isResumedPrep ? "Préparation retrouvée" : "Clarifions votre intention"}
        </h1>
        <p className="fig-hero-sub">
          {isResumedPrep
            ? "Continuité du même fil. Inspectez la proposition éventuelle puis créez explicitement si prêt."
            : "Discutez librement avec Nora avant de décider de créer un projet."}
          {projectId ? ` Projet lié : ${projectId}.` : ""}
        </p>
        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces sas">
          {(
            [
              ["travail", "Discussion"],
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

      {surface === "travail" ? (
        <div className="fig-workspace">
          <PreparationConversation
            messages={messages}
            draft={draft}
            busy={busy}
            noraActivity={noraActivity}
            onDraftChange={setDraft}
            onSend={() => void sendMessage()}
          />
          <PreparationProposal
            projectId={projectId}
            previewName={previewName}
            previewSummary={previewSummary}
            creationRevision={creationRevision}
            messageCount={messages.length}
            openPoints={(knowledge?.openPoints ?? [])
              .filter((o) => o.status === "OPEN")
              .map((o) => ({ id: o.id, statement: o.statement }))}
            busy={busy}
            editing={proposalEditing}
            draftName={draftProposalName}
            draftSummary={draftProposalSummary}
            onDraftName={setDraftProposalName}
            onDraftSummary={setDraftProposalSummary}
            onStartConstitute={startConstituteProposal}
            onAdoptLastNoraSummary={adoptLastNoraSummary}
            canAdoptLastNora={messages.some((m) => m.role === "assistant")}
            onSaveProposal={() => void savePreview()}
            onCancelEdit={() => setProposalEditing(false)}
            onCreateProject={() => void createProject()}
            status={status}
          />
        </div>
      ) : null}

      {surface === "document" ? (
        <div className="fig-workspace-3" data-figma-frame="94:370">
          <div className="space-y-2">
            <DocumentLibrary
              documents={docs}
              selectedId={inspectDocId}
              emptyHint="Aucun document dans ce sas. Créez explicitement un document pour l'inspecter ensuite en lecture seule."
              onSelect={(d) => {
                setInspectDocId(d.document.id);
                setDocId(d.document.id);
                setDocText(d.latestRevision?.contentMarkdown ?? "");
                setBaseRevisionId(d.latestRevision?.id);
                setDocViewMode("read");
                void loadRevisionHistory(d.document.id);
              }}
            />
            {docs.length === 0 && docViewMode !== "edit" ? (
              <button
                type="button"
                className="btn secondary"
                data-testid="doc-start-create"
                onClick={() => {
                  setDocId(undefined);
                  setBaseRevisionId(undefined);
                  setDocText("# Notes du sas\n");
                  setDocViewMode("edit");
                  rememberCreateIntent(null);
                }}
              >
                Créer un document
              </button>
            ) : null}
          </div>
          <div className="space-y-3">
            <DocumentInspector
              title={docViewMode === "edit" ? (docId ? "Révision" : "Création") : "Inspection"}
              uiState={docViewMode === "edit" ? "EDITING" : "READING"}
              markdown={
                docViewMode === "edit"
                  ? null
                  : inspected?.latestRevision?.contentMarkdown ?? (docs.length ? docText : null)
              }
              editing={docViewMode === "edit"}
              draft={docText}
              onDraft={setDocText}
              busy={busy}
              onStartRevise={
                inspected?.latestRevision
                  ? () => {
                      setDocViewMode("edit");
                      setDocText(inspected.latestRevision?.contentMarkdown ?? "");
                    }
                  : undefined
              }
              onSaveRevise={docId ? () => void reviseDoc() : undefined}
              onCancel={() => {
                setDocViewMode("read");
                setDocText(inspected?.latestRevision?.contentMarkdown ?? "");
              }}
            >
              {docViewMode === "edit" ? (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="btn"
                    disabled={busy}
                    onClick={() => void saveDoc()}
                    data-testid="doc-save"
                  >
                    Sauvegarder
                  </button>
                  {createDocIntent && !docId ? (
                    <button
                      type="button"
                      className="btn secondary"
                      disabled={busy}
                      onClick={startNewCreateIntent}
                      data-testid="doc-new-intent"
                    >
                      Nouvelle intention de création
                    </button>
                  ) : null}
                </div>
              ) : null}
              {createDocIntent ? (
                <p className="text-xs muted" data-testid="create-intent-key">
                  {createDocIntent.key}
                </p>
              ) : null}
              {status ? (
                <p className="text-sm muted" data-testid="surface-status">
                  {status}
                </p>
              ) : null}
            </DocumentInspector>
            <DocumentHistory
              revisions={revRows}
              activeRevisionId={baseRevisionId}
              onCompareLatest={() => void compareLatestTwo()}
              diffText={diffText}
            />
          </div>
        </div>
      ) : null}

      {surface === "journal" ? (
        <ProjectJournal
          subjects={knowledge?.subjects ?? []}
          acquis={knowledge?.acquis ?? []}
          openPoints={knowledge?.openPoints ?? []}
          onBackToThread={() => setSurface("travail")}
          onRenameSubject={(id, title) => void renameSubject(id, title)}
          splitSlot={
            splitSubjectId ? (
              <div className="fig-panel space-y-2" style={{ borderColor: "var(--accent)" }}>
                <h3 className="text-sm font-medium">Séparer un Sujet</h3>
                <input
                  className="input"
                  value={splitTitle}
                  onChange={(e) => setSplitTitle(e.target.value)}
                  aria-label="Titre du nouveau sujet"
                />
                <p className="text-xs muted">{splitAcquis.length} acquis à déplacer</p>
                <div className="flex gap-2">
                  <button type="button" className="btn" onClick={() => void confirmSplit()}>
                    Confirmer
                  </button>
                  <button
                    type="button"
                    className="btn secondary"
                    onClick={() => {
                      setSplitSubjectId(null);
                      setSplitAcquis([]);
                    }}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            ) : null
          }
        />
      ) : null}
    </div>
  );
}
