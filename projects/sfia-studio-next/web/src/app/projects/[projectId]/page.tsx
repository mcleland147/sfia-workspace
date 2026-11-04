"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const router = useRouter();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [meta, setMeta] = useState<string>("Chargement…");
  const [error, setError] = useState<string>("");

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
      setMeta(
        `Projet créé · marqueur fondé sur commit DB · préparation ${j.preparation?.id ?? "liée"} · réouverture par projectId`,
      );
      setError("");
    }
    load();
  }, [params.projectId, router]);

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
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl font-semibold">Projet</h1>
      <p className="text-xs muted">{params.projectId}</p>
      <div className="panel p-4">
        <div className="font-medium">Continuité du fil</div>
        <p className="text-sm muted mt-1">{meta}</p>
      </div>
      <div className="space-y-2">
        {messages.map((m) => (
          <div key={m.id} className="panel p-3">
            <div className="text-xs muted mb-1">
              {m.role} · {m.status}
            </div>
            <div className="whitespace-pre-wrap text-sm">{m.content}</div>
          </div>
        ))}
      </div>
      {documents.length > 0 && (
        <div className="space-y-2">
          <div className="font-medium">Documents</div>
          {documents.map((d) => (
            <div key={d.document.id} className="panel p-3 text-sm">
              <div className="text-xs muted mb-1">
                {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
                {d.latestRevision?.status ?? "—"}
              </div>
              <div className="whitespace-pre-wrap">{d.latestRevision?.contentMarkdown ?? ""}</div>
            </div>
          ))}
        </div>
      )}
      <a className="btn secondary inline-block" href="/portfolio">
        Retour portefeuille
      </a>
    </div>
  );
}
