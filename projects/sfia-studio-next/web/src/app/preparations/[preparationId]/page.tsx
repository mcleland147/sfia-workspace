"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SafeMarkdown } from "@/components/SafeMarkdown";

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
  const preparationId = params.preparationId;
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
    const res = await fetch(`/api/preparations/${preparationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ previewName, previewSummary }),
    });
    const j = await res.json();
    if (res.ok) {
      setCreationRevision(j.creationRevision);
      setStatus(`Aperçu révision ${j.creationRevision}`);
    }
  }

  async function createProject() {
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expectedCreationRevision: creationRevision,
        projectName: previewName || "Projet sans titre",
        previewSummary,
        idempotencyKey,
      }),
    });
    const j = await res.json();
    setBusy(false);
    setStatus(`${j.status}${j.projectId ? ` → ${j.projectId}` : ""}`);
    if (j.projectId) {
      setProjectId(j.projectId);
      router.push(`/projects/${j.projectId}`);
    }
    await reload();
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

  const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];

  return (
    <div className="space-y-3">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs muted uppercase tracking-wide">Travail / sas</p>
          <h1 className="text-xl font-semibold">Fil continu avec Nora</h1>
          <p className="text-xs muted">
            {preparationId}
            {projectId ? ` · projet ${projectId}` : " · sans projet"}
          </p>
        </div>
        <nav className="flex gap-2 text-sm" aria-label="Surfaces ML2">
          {(
            [
              ["travail", "Travail"],
              ["journal", "Journal — Sujets"],
              ["document", "Document"],
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
        <div className="panel p-3 text-sm" role="status" aria-live="polite">
          Nora prépare une réponse…
        </div>
      ) : null}
      {noraActivity === "error" ? (
        <div className="panel p-3 text-sm" style={{ borderColor: "var(--bad)" }}>
          Échec de génération — message utilisateur conservé.
        </div>
      ) : null}

      {surface === "travail" ? (
        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-4">
          <section className="panel p-4 space-y-4">
            <div className="space-y-3 max-h-[52vh] overflow-auto pr-1">
              {messages.map((m) => (
                <article key={m.id} className="panel p-3">
                  <div className="text-xs muted mb-2 flex gap-2 items-center">
                    <span className="uppercase tracking-wide">{m.role === "assistant" ? "Nora" : "Pilote"}</span>
                    <span>· {m.status}</span>
                  </div>
                  {m.role === "assistant" ? (
                    <SafeMarkdown content={m.content} />
                  ) : (
                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                  )}
                </article>
              ))}
            </div>
            <div className="space-y-2">
              <textarea
                className="textarea"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Écrire à Nora…"
                aria-label="Message à Nora"
              />
              <button className="btn" disabled={busy} onClick={sendMessage}>
                Envoyer
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <div className="panel p-4 space-y-3">
              <h2 className="font-medium">Aperçu de création (non autorisant)</h2>
              <input
                className="input"
                value={previewName}
                onChange={(e) => setPreviewName(e.target.value)}
                placeholder="Nom du projet"
              />
              <textarea
                className="textarea"
                value={previewSummary}
                onChange={(e) => setPreviewSummary(e.target.value)}
                placeholder="Résumé inspecté"
              />
              <div className="text-xs muted">Révision création: {creationRevision}</div>
              <div className="flex gap-2 flex-wrap">
                <button className="btn secondary" disabled={busy} onClick={savePreview}>
                  Enregistrer l&apos;aperçu
                </button>
                <button className="btn" disabled={busy || !!projectId} onClick={createProject}>
                  Créer le projet
                </button>
              </div>
            </div>
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">Contexte projet</h2>
              <p className="text-xs muted">
                Acquis courants: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
                Points ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0} ·
                Documents: {docs.length}
              </p>
              <p className="text-xs muted">
                Une recommandation Nora n&apos;est jamais une HumanDecision.
              </p>
            </div>
            {status ? (
              <p className="text-sm muted" data-testid="surface-status">
                {status}
              </p>
            ) : null}
          </section>
        </div>
      ) : null}

      {surface === "document" ? (
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
          <section className="panel p-4 space-y-3">
            <h2 className="font-medium">Document — inspection / révision</h2>
            {status ? (
              <p className="text-sm muted" data-testid="surface-status">
                {status}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-2 text-xs">
              {docs.map((d) => (
                <button
                  key={d.document.id}
                  type="button"
                  className={`btn secondary ${inspectDocId === d.document.id ? "" : ""}`}
                  onClick={() => {
                    setInspectDocId(d.document.id);
                    setDocId(d.document.id);
                    setDocText(d.latestRevision?.contentMarkdown ?? "");
                    setBaseRevisionId(d.latestRevision?.id);
                  }}
                >
                  {d.document.title} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
                  {d.latestRevision?.status ?? "—"}
                </button>
              ))}
            </div>
            <textarea
              className="textarea min-h-[240px]"
              value={docText}
              onChange={(e) => setDocText(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              <button
                className="btn secondary"
                disabled={busy}
                onClick={saveDoc}
                data-testid="doc-save"
              >
                Sauvegarder
              </button>
              <button className="btn" disabled={busy} onClick={reviseDoc} data-testid="doc-revise">
                Réviser sur version de base
              </button>
              <button className="btn secondary" disabled={busy} onClick={compareLatestTwo}>
                Comparer versions
              </button>
              {createDocIntent && !docId ? (
                <button
                  className="btn secondary"
                  disabled={busy}
                  onClick={startNewCreateIntent}
                  data-testid="doc-new-intent"
                >
                  Nouvelle intention de création
                </button>
              ) : null}
            </div>
            {createDocIntent && !docId ? (
              <p className="text-xs muted" data-testid="create-intent-key">
                Intention de création active · clé {createDocIntent.key}
              </p>
            ) : null}
            {reviseIntent ? (
              <p className="text-xs muted" data-testid="revise-intent-key">
                Intention de révision active · clé {reviseIntent.key}
              </p>
            ) : null}
            {inspected?.latestRevision ? (
              <p className="text-xs muted">
                Base inspectée: {baseRevisionId} · statut {inspected.latestRevision.status}
              </p>
            ) : null}
          </section>
          <section className="panel p-4 space-y-3">
            <h2 className="font-medium">Rendu Markdown sûr</h2>
            <SafeMarkdown content={docText} />
            {diffText ? (
              <pre className="text-xs whitespace-pre-wrap panel p-3">{diffText}</pre>
            ) : null}
          </section>
        </div>
      ) : null}

      {surface === "journal" ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <section className="panel p-4 space-y-3">
            <h2 className="font-medium">Sujets</h2>
            {(knowledge?.subjects ?? []).length === 0 ? (
              <p className="text-sm muted">Aucun sujet capitalisé pour l&apos;instant.</p>
            ) : (
              knowledge!.subjects.map((s) => (
                <div key={s.id} className="panel p-3 space-y-2">
                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{s.title}</div>
                      <div className="text-xs muted">
                        {s.id} · {s.status}
                        {s.originatedFromSubjectId
                          ? ` · filiation ${s.originatedFromSubjectId}`
                          : ""}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                          const t = window.prompt("Nouveau titre", s.title);
                          if (t) void renameSubject(s.id, t);
                        }}
                      >
                        Renommer
                      </button>
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                          setSplitSubjectId(s.id);
                          setSplitTitle(`${s.title} (séparé)`);
                          setSplitAcquis(
                            (knowledge?.acquis ?? [])
                              .filter((a) => a.subjectId === s.id && a.status === "CURRENT")
                              .map((a) => a.id),
                          );
                        }}
                      >
                        Séparer…
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            {splitSubjectId ? (
              <div className="panel p-3 space-y-2" style={{ borderColor: "var(--accent)" }}>
                <h3 className="text-sm font-medium">Séparer un Sujet</h3>
                <p className="text-xs muted">
                  Composition minimale sur surfaces existantes — filiation et points ouverts
                  conservés. Confirmer ou annuler.
                </p>
                <input
                  className="input"
                  value={splitTitle}
                  onChange={(e) => setSplitTitle(e.target.value)}
                  aria-label="Titre du nouveau sujet"
                />
                <p className="text-xs muted">{splitAcquis.length} acquis à déplacer</p>
                <div className="flex gap-2">
                  <button type="button" className="btn" onClick={() => void confirmSplit()}>
                    Confirmer la séparation
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
            ) : null}
          </section>
          <section className="space-y-4">
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">Acquis</h2>
              {(knowledge?.acquis ?? [])
                .filter((a) => a.status === "CURRENT")
                .slice(0, 20)
                .map((a) => (
                  <div key={a.id} className="text-sm panel p-2">
                    <div className="text-xs muted">
                      {a.kind} · {a.id}
                    </div>
                    <div>{a.statement}</div>
                  </div>
                ))}
            </div>
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">Points ouverts</h2>
              {(knowledge?.openPoints ?? [])
                .filter((o) => o.status === "OPEN")
                .map((o) => (
                  <div key={o.id} className="text-sm panel p-2">
                    <div className="text-xs muted">{o.id}</div>
                    <div>{o.statement}</div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
