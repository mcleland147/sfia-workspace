"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [notice, setNotice] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (!status.configured) {
        setNotice(
          "GitHub OAuth BLOCKED — secrets clients absents. Pas de preuve LIVE dans ce cycle.",
        );
        setBusy(false);
        return;
      }
      const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: "github", callbackURL: "/portfolio" }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.url) {
        window.location.assign(data.url);
        return;
      }
      setNotice(data?.message ?? data?.error ?? "Échec démarrage OAuth GitHub");
    } catch (e) {
      setNotice(String(e));
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    const res = await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setNotice(data.error ?? "Échec");
      return;
    }
    setNotice(data.notice);
    router.push("/portfolio");
  }

  return (
    <div className="max-w-xl mx-auto panel p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Connexion Studio</h1>
      <p className="muted text-sm">
        GitHub OAuth sert uniquement l&apos;identité Studio. Aucun droit de dépôt n&apos;est accordé.
      </p>
      <div className="panel p-4 space-y-2">
        <div className="font-medium">GitHub OAuth</div>
        <p className="text-sm muted">
          Statut: <code>/api/auth/status</code> — BLOCKED si secrets absents. LIVE non inventé.
        </p>
        <button type="button" className="btn secondary" disabled={busy} onClick={startGitHubOAuth}>
          Continuer avec GitHub
        </button>
      </div>
      <div className="panel p-4 space-y-3">
        <div className="font-medium">DEV test login</div>
        <p className="text-sm muted">
          Fake/Real: connecteur de test local — <strong>pas</strong> une preuve OAuth GitHub.
        </p>
        <div className="flex gap-2">
          <button className="btn" disabled={busy} onClick={() => devLogin("a")}>
            Pilote A (DEV)
          </button>
          <button className="btn secondary" disabled={busy} onClick={() => devLogin("b")}>
            Pilote B (DEV)
          </button>
        </div>
      </div>
      {notice ? <p className="text-sm">{notice}</p> : null}
    </div>
  );
}
