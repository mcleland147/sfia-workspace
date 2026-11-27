"use client";

/**
 * DEV-only ML3 dictation functional harness — hosts the real ComposerDictationControl.
 * Qualification / oracle for T01–T08 (not a visual-layout duplicate of dictation-visual).
 */

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

export const dynamic = "force-dynamic";

function resolveHarnessProjectId(
  fromQuery: string | null,
  fromEnv: string | undefined,
): string | null {
  const q = (fromQuery || "").trim();
  if (q) return q;
  const env = (fromEnv || "").trim();
  return env || null;
}

function DictationHarnessInner() {
  const searchParams = useSearchParams();
  const projectId = resolveHarnessProjectId(
    searchParams.get("projectId"),
    process.env.NEXT_PUBLIC_SFIA_DICTATION_HARNESS_PROJECT_ID,
  );
  const [draft, setDraft] = useState(
    "Baseline harness — dictez pour mettre à jour ce texte.",
  );
  const [dictationActive, setDictationActive] = useState(false);

  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
    return (
      <p className="muted" data-testid="dictation-harness-forbidden">
        Harness dictation indisponible hors DEV.
      </p>
    );
  }

  if (!projectId) {
    return (
      <main className="p-6" data-testid="dictation-harness">
        <p className="muted" data-testid="dictation-harness-missing-project">
          Fournir ?projectId=… ou NEXT_PUBLIC_SFIA_DICTATION_HARNESS_PROJECT_ID.
        </p>
      </main>
    );
  }

  return (
    <main className="p-6" data-testid="dictation-harness" data-project-id={projectId}>
      <h1 className="text-lg font-medium mb-2">ML3 — Dictation harness</h1>
      <p className="muted text-sm mb-4">
        Projet <code>{projectId}</code> — contrôle réel, transport fixture en qualify.
      </p>

      <label className="block text-sm mb-1" htmlFor="dictation-harness-draft">
        Brouillon (oracle)
      </label>
      <textarea
        id="dictation-harness-draft"
        className="w-full min-h-[120px] rounded border p-3 mb-6 font-mono text-sm"
        data-testid="dictation-harness-draft"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        readOnly={dictationActive}
        aria-readonly={dictationActive}
      />

      <div
        className="fig-travail-composer-stack"
        data-dictation-active={dictationActive ? "1" : "0"}
      >
        <div
          className="fig-composer fig-travail-composer relative"
          data-testid="nora-composer"
          data-dictation-active={dictationActive ? "1" : "0"}
        >
          <div className="fig-travail-composer-row">
            <ComposerDictationControl
              projectId={projectId}
              draft={draft}
              onDraft={setDraft}
              enabled
              onActiveChange={setDictationActive}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DictationHarnessPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <main className="p-6" data-testid="dictation-harness-loading">
        Chargement harness…
      </main>
    );
  }
  return (
    <Suspense
      fallback={
        <main className="p-6" data-testid="dictation-harness-loading">
          Chargement harness…
        </main>
      }
    >
      <DictationHarnessInner />
    </Suspense>
  );
}
