"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UnifiedStudioEntry } from "@/components/entry/UnifiedStudioEntry";
import { resolveUnifiedEntryVariant } from "@/components/entry/unified-entry-variant";
import "@/components/entry/unified-studio-entry.css";

function sanitizeUserNotice(raw: unknown): string {
  if (typeof raw !== "string" || !raw.trim()) {
    return "Une erreur est survenue. Réessayez ou contactez l’opérateur.";
  }
  const text = raw.trim().replace(/\s+/g, " ");
  // Never surface stack / absolute paths / env dumps to the Pilote.
  if (
    text.length > 480 ||
    /\/Users\/|\/home\/|at\s+\S+\s+\(|node_modules|DATABASE_URL|SECRET|BEGIN PRIVATE/i.test(
      text,
    )
  ) {
    return "Une erreur est survenue. Réessayez ou contactez l’opérateur.";
  }
  return text.slice(0, 480);
}

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
  const [testLoginAvailable, setTestLoginAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const statusRes = await fetch("/api/auth/status");
        const status = await statusRes.json().catch(() => ({}));
        if (!cancelled) {
          setTestLoginAvailable(Boolean(status?.testLoginAvailable));
        }
      } catch {
        if (!cancelled) setTestLoginAvailable(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("Préparation de la connexion GitHub…");
    setNoticeTone("busy");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (status?.testLoginAvailable != null) {
        setTestLoginAvailable(Boolean(status.testLoginAvailable));
      }
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
      if (data?.url && typeof data.url === "string") {
        window.location.assign(data.url);
        return;
      }
      setNotice(
        sanitizeUserNotice(
          data?.message ??
            data?.error ??
            "La connexion GitHub n’a pas pu démarrer. Réessayez ou contactez l’opérateur.",
        ),
      );
      setNoticeTone("error");
    } catch {
      setNotice(
        "Impossible de joindre le service d’authentification. Vérifiez votre connexion puis réessayez.",
      );
      setNoticeTone("error");
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    setNoticeTone("info");
    try {
      const res = await fetch("/api/dev/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pilot }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setNotice(
          sanitizeUserNotice(
            data.error === "DEV_TEST_LOGIN_DISABLED" ||
              data.error === "DEV_TEST_LOGIN_LANE_FORBIDDEN"
              ? "Accès de test indisponible sur cet environnement."
              : (data.error ?? "Échec de l’accès de test"),
          ),
        );
        setNoticeTone("error");
        setBusy(false);
        return;
      }
      setNotice(sanitizeUserNotice(data.notice ?? "Connexion de test établie."));
      setNoticeTone("info");
      router.push("/portfolio");
    } catch {
      setNotice("Impossible de joindre le service d’accès de test.");
      setNoticeTone("error");
      setBusy(false);
    }
  }

  return (
    <UnifiedStudioEntry
      variant={variant}
      busy={busy}
      notice={notice}
      noticeTone={noticeTone}
      testLoginAvailable={testLoginAvailable}
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
