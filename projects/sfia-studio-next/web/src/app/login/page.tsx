"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UnifiedStudioEntry } from "@/components/entry/UnifiedStudioEntry";
import { resolveUnifiedEntryVariant } from "@/components/entry/unified-entry-variant";
import "@/components/entry/unified-studio-entry.css";

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const variant = useMemo(
    () => resolveUnifiedEntryVariant(searchParams.get("reason")),
    [searchParams],
  );
  const [notice, setNotice] = useState<string>("");
  const [noticeTone, setNoticeTone] = useState<"error" | "busy" | "info">("info");
  const [busy, setBusy] = useState(false);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("Préparation de la connexion GitHub…");
    setNoticeTone("busy");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (!status.configured) {
        setNotice(
          "Connexion GitHub indisponible : la configuration OAuth n’est pas prête sur cet environnement. Aucun service n’est déclaré disponible.",
        );
        setNoticeTone("error");
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
      setNotice(
        data?.message ??
          data?.error ??
          "La connexion GitHub n’a pas pu démarrer. Réessayez ou contactez l’opérateur.",
      );
      setNoticeTone("error");
    } catch (e) {
      setNotice(String(e));
      setNoticeTone("error");
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    setNoticeTone("info");
    const res = await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setNotice(data.error ?? "Échec de l’accès DEV");
      setNoticeTone("error");
      return;
    }
    setNotice(data.notice);
    setNoticeTone("info");
    router.push("/portfolio");
  }

  return (
    <UnifiedStudioEntry
      variant={variant}
      busy={busy}
      notice={notice}
      noticeTone={noticeTone}
      onGitHubContinue={startGitHubOAuth}
      onDevLogin={devLogin}
    />
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="uxe-root" data-testid="unified-studio-entry-fallback">
          <div className="uxe-shell">
            <header className="uxe-header">
              <div className="uxe-brand">
                <span className="uxe-mark" aria-hidden>
                  S
                </span>
                <p className="uxe-brand-name">SFIA Studio</p>
              </div>
            </header>
            <main className="uxe-body">
              <p className="uxe-lead">Chargement de l&apos;entrée Studio…</p>
            </main>
          </div>
        </div>
      }
    >
      <LoginPageInner />
    </Suspense>
  );
}
