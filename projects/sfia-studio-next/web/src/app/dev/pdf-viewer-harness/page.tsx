"use client";

/**
 * DEV-only PdfViewer functional harness (ML5 S1).
 * Not a product surface — qualification only.
 */

import { useEffect, useState } from "react";
import { PdfViewer } from "@/components/documents/PdfViewer";

export default function PdfViewerHarnessPage() {
  const [base64, setBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initialPage, setInitialPage] = useState(1);
  const [laneOk, setLaneOk] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/dev/pdf-viewer-fixture", {
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(
            typeof body?.error === "string" ? body.error : `HTTP_${res.status}`,
          );
        }
        const json = (await res.json()) as {
          base64: string;
          lane: string;
          pageCountHint?: number;
        };
        if (cancelled) return;
        setLaneOk(json.lane === "DEV");
        setBase64(json.base64);
      } catch (e) {
        if (!cancelled) setError(String((e as Error)?.message ?? e).slice(0, 200));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <main className="p-6" data-testid="pdf-harness-error">
        Harness indisponible — {error}
      </main>
    );
  }
  if (!base64) {
    return (
      <main className="p-6" data-testid="pdf-harness-loading">
        Chargement fixture PDF…
      </main>
    );
  }

  return (
    <main className="p-6 space-y-4" data-testid="pdf-harness">
      <h1 className="text-lg font-semibold">DEV PdfViewer harness</h1>
      <p data-testid="pdf-harness-lane">
        lane={laneOk ? "DEV" : "UNEXPECTED"}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          className="git-btn-secondary"
          data-testid="pdf-harness-cite-6"
          onClick={() => setInitialPage(6)}
        >
          Ouvrir citation p.6
        </button>
        <button
          type="button"
          className="git-btn-secondary"
          data-testid="pdf-harness-reset-1"
          onClick={() => setInitialPage(1)}
        >
          Document page 1
        </button>
      </div>
      <PdfViewer
        key={`${initialPage}-${base64.slice(0, 24)}`}
        base64={base64}
        title="ml5-progressive-8p.pdf"
        initialPage={initialPage}
      />
    </main>
  );
}
