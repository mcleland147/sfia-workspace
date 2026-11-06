"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { PilotagePanel } from "@/components/PilotagePanel";

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
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing">("idle");
  const [status, setStatus] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);

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
    }
    load();
  }, [params.projectId, router]);

  async function sendMessage() {
    if (!draft.trim() || !preparationId) return;
    setBusy(true);
    setNoraActivity("preparing");
    const res = await fetch(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: draft }),
    });
    const j = await res.json();
    setBusy(false);
    setNoraActivity("idle");
    if (res.ok) {
      setDraft("");
      setMessages(j.messages ?? []);
      setStatus(`Nora ${j.noraMode} · ${j.status}`);
      // Refresh knowledge/docs after capitalisation / document save
      const proj = await fetch(`/api/projects/${params.projectId}`);
      if (proj.ok) {
        const pj = await proj.json();
        setDocuments(pj.documents ?? []);
        setKnowledge(pj.knowledge ?? null);
      }
    } else setStatus(j.error ?? "échec");
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
              />
              <button className="btn" disabled={busy || !preparationId} onClick={sendMessage}>
                Envoyer
              </button>
              {status ? <p className="text-xs muted">{status}</p> : null}
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
