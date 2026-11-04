"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string; projectId: string | null };
  latestRevision: { id: string; revisionNumber: number; status: string; contentMarkdown: string } | null;
};

export default function PreparationPage() {
  const params = useParams<{ preparationId: string }>();
  const router = useRouter();
  const preparationId = params.preparationId;
  const [messages, setMessages] = useState<Msg[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [draft, setDraft] = useState("");
  const [docText, setDocText] = useState("# Notes du sas\n");
  const [docId, setDocId] = useState<string | undefined>();
  const [previewName, setPreviewName] = useState("");
  const [previewSummary, setPreviewSummary] = useState("");
  const [creationRevision, setCreationRevision] = useState(1);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);

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
    if (first) {
      setDocId(first.document.id);
      setDocText(first.latestRevision?.contentMarkdown ?? docText);
    }
  }, [preparationId, router, docText]);

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preparationId]);

  async function sendMessage() {
    if (!draft.trim()) return;
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: draft }),
    });
    const j = await res.json();
    setBusy(false);
    if (res.ok) {
      setDraft("");
      setMessages(j.messages ?? []);
      setStatus(`Nora ${j.noraMode} · ${j.status}`);
    } else setStatus(j.error ?? "échec message");
  }

  async function saveDoc() {
    setBusy(true);
    const res = await fetch(`/api/preparations/${preparationId}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Document du sas", contentMarkdown: docText, documentId: docId }),
    });
    const j = await res.json();
    setBusy(false);
    if (j.status === "AVAILABLE") {
      setDocId(j.documentId);
      setStatus(`Document AVAILABLE rev ${j.revisionNumber}`);
      await reload();
    } else setStatus(`Document ${j.status}: ${j.reason ?? ""}`);
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

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
      <section className="panel p-4 space-y-4">
        <header>
          <h1 className="text-xl font-semibold">Sas de préparation</h1>
          <p className="text-xs muted">
            {preparationId}
            {projectId ? ` · lié au projet ${projectId}` : " · sans projet"}
          </p>
        </header>
        <div className="space-y-3 max-h-[48vh] overflow-auto pr-1">
          {messages.map((m) => (
            <div key={m.id} className="panel p-3">
              <div className="text-xs muted mb-1">
                {m.role} · {m.status}
              </div>
              <div className="whitespace-pre-wrap text-sm">{m.content}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <textarea className="textarea" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Écrire à Nora…" />
          <button className="btn" disabled={busy} onClick={sendMessage}>
            Envoyer
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="panel p-4 space-y-3">
          <h2 className="font-medium">Aperçu de création (non autorisant)</h2>
          <input className="input" value={previewName} onChange={(e) => setPreviewName(e.target.value)} placeholder="Nom du projet" />
          <textarea className="textarea" value={previewSummary} onChange={(e) => setPreviewSummary(e.target.value)} placeholder="Résumé inspecté" />
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
        <div className="panel p-4 space-y-3">
          <h2 className="font-medium">Document du sas</h2>
          <textarea className="textarea min-h-[180px]" value={docText} onChange={(e) => setDocText(e.target.value)} />
          <button className="btn secondary" disabled={busy} onClick={saveDoc}>
            Sauvegarder le document
          </button>
          {docs[0]?.latestRevision && (
            <p className="text-xs muted">
              {docs[0].document.id} · rev {docs[0].latestRevision.revisionNumber} · {docs[0].latestRevision.status}
              {docs[0].document.projectId ? ` · project ${docs[0].document.projectId}` : ""}
            </p>
          )}
        </div>
        {status ? <p className="text-sm muted">{status}</p> : null}
      </section>
    </div>
  );
}
