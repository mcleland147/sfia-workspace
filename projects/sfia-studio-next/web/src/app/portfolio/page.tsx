"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PortfolioResponse = {
  session?: { displayName: string; authMode: string };
  portfolio?:
    | { kind: "empty"; openPreparations: number }
    | { kind: "ready"; projects: Array<{ id: string; name: string }>; openPreparations: number }
    | { kind: "unavailable"; reason: string };
  error?: string;
};

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/portfolio")
      .then(async (r) => {
        const j = await r.json();
        if (r.status === 401) {
          router.push("/login");
          return;
        }
        setData(j);
      })
      .catch((e) => setError(String(e)));
  }, [router]);

  async function startPreparation() {
    const res = await fetch("/api/preparations", { method: "POST" });
    const j = await res.json();
    if (res.ok) router.push(`/preparations/${j.preparationId}`);
    else setError(j.error ?? "échec");
  }

  if (error) {
    return <div className="panel p-6">Portefeuille indisponible: {error}</div>;
  }
  if (!data) return <div className="muted">Chargement du portefeuille…</div>;

  const p = data.portfolio;
  return (
    <div className="space-y-6 max-w-3xl">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Portefeuille</h1>
        <p className="muted text-sm">
          {data.session?.displayName} · mode {data.session?.authMode}. Aucune Nora globale ici.
        </p>
      </header>

      <div className="flex gap-2">
        <button className="btn" onClick={startPreparation}>
          Ouvrir un sas (sans projet)
        </button>
      </div>

      {p?.kind === "empty" && (
        <div className="panel p-5">
          <div className="font-medium">Aucun projet persisté</div>
          <p className="muted text-sm mt-1">
            État vide distinct d&apos;une erreur. Préparations ouvertes: {p.openPreparations}.
          </p>
        </div>
      )}
      {p?.kind === "unavailable" && (
        <div className="panel p-5">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      )}
      {p?.kind === "ready" && (
        <ul className="space-y-2">
          {p.projects.map((proj) => (
            <li key={proj.id} className="panel p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">{proj.name}</div>
                <div className="text-xs muted">{proj.id}</div>
              </div>
              <a className="btn secondary" href={`/projects/${proj.id}`}>
                Ouvrir
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
