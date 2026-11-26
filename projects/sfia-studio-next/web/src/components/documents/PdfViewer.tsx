"use client";

/**
 * In-app PDF page renderer (pdfjs-dist). No network fetches from the document.
 * Bytes are provided by an already-authorized Studio path (Git/WEB/D4).
 */

import { useEffect, useRef, useState } from "react";

export type PdfViewerProps = {
  /** Base64-encoded PDF bytes (authorized). */
  base64: string;
  title?: string;
  /** 1-based initial page when citing. */
  initialPage?: number;
  className?: string;
};

export function PdfViewer(props: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(Math.max(1, props.initialPage ?? 1));
  const [zoom, setZoom] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [hitNote, setHitNote] = useState<string | null>(null);
  const pdfRef = useRef<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    doc: any;
    destroy: () => Promise<void>;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setError(null);
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        // In-process only — never fetch a CDN worker or document-triggered URLs.
        const raw = atob(props.base64);
        const bytes = new Uint8Array(raw.length);
        for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
        // In-process parse — useWorkerFetch false avoids CDN/font network from document.
        const loadingTask = pdfjs.getDocument({
          data: bytes,
          isEvalSupported: false,
          disableFontFace: false,
          useSystemFonts: true,
          useWorkerFetch: false,
        });
        const doc = await loadingTask.promise;
        if (cancelled) {
          await doc.destroy();
          return;
        }
        pdfRef.current = { doc, destroy: () => doc.destroy() };
        setPageCount(doc.numPages);
        setPage((p) => Math.min(Math.max(1, p), doc.numPages));
      } catch (e) {
        if (!cancelled) {
          setError(String((e as Error)?.message ?? e).slice(0, 200));
        }
      }
    })();
    return () => {
      cancelled = true;
      const cur = pdfRef.current;
      pdfRef.current = null;
      void cur?.destroy();
    };
  }, [props.base64]);

  useEffect(() => {
    const cur = pdfRef.current;
    const canvas = canvasRef.current;
    if (!cur || !canvas || pageCount < 1) return;
    let cancelled = false;
    (async () => {
      try {
        const pdfPage = await cur.doc.getPage(page);
        if (cancelled) return;
        const viewport = pdfPage.getViewport({ scale: zoom });
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await pdfPage.render({ canvasContext: ctx, viewport }).promise;
      } catch (e) {
        if (!cancelled) setError(String((e as Error)?.message ?? e).slice(0, 200));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page, zoom, pageCount]);

  async function runSearch() {
    const cur = pdfRef.current;
    const q = query.trim().toLowerCase();
    if (!cur || !q) {
      setHitNote(null);
      return;
    }
    for (let p = 1; p <= pageCount; p++) {
      const pdfPage = await cur.doc.getPage(p);
      const content = await pdfPage.getTextContent();
      const text = content.items
        .map((it: { str?: string }) => it.str || "")
        .join(" ")
        .toLowerCase();
      if (text.includes(q)) {
        setPage(p);
        setHitNote(`Trouvé page ${p}`);
        return;
      }
    }
    setHitNote("Aucune occurrence dans les pages chargées");
  }

  if (error) {
    return (
      <div className="fig-alert" role="alert" data-testid="pdf-viewer-error">
        Aperçu PDF indisponible — {error}
      </div>
    );
  }

  return (
    <div className={props.className} data-testid="pdf-viewer">
      <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
        <button
          type="button"
          className="git-btn-secondary"
          disabled={page <= 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Précédente
        </button>
        <span data-testid="pdf-page-indicator">
          Page {page} / {pageCount || "…"}
        </span>
        <button
          type="button"
          className="git-btn-secondary"
          disabled={pageCount > 0 && page >= pageCount}
          onClick={() => setPage((p) => Math.min(pageCount || p + 1, p + 1))}
        >
          Suivante
        </button>
        <button
          type="button"
          className="git-btn-secondary"
          onClick={() => setZoom((z) => Math.max(0.5, Number((z - 0.25).toFixed(2))))}
        >
          −
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          className="git-btn-secondary"
          onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
        >
          +
        </button>
        <input
          className="border px-2 py-1 rounded"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-testid="pdf-search-input"
        />
        <button type="button" className="git-btn-secondary" onClick={() => void runSearch()}>
          Chercher
        </button>
        {hitNote ? <span data-testid="pdf-search-hit">{hitNote}</span> : null}
      </div>
      <div className="overflow-auto border border-neutral-200 bg-neutral-50">
        <canvas ref={canvasRef} data-testid="pdf-canvas" />
      </div>
    </div>
  );
}
