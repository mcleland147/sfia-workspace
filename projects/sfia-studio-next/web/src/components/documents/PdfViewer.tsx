"use client";

/**
 * In-app PDF page renderer (pdfjs-dist). No network fetches from the document.
 * Bytes are provided by an already-authorized Studio path (Git/WEB/D4).
 */

import { useEffect, useRef, useState } from "react";

export type PdfViewerProps = {
  /**
   * Base64-encoded PDF bytes from an already-authorized Studio path (Git/D4).
   * Requires an opposable server contract — never use for ad-hoc URLs.
   */
  base64?: string;
  /**
   * Opaque WEB session handle — not authorization.
   * `/api/web/pdf-viewer/*` re-checks session, project habilitation, lane, and work scope.
   */
  viewerToken?: string;
  title?: string;
  /** 1-based initial page when citing. */
  initialPage?: number;
  className?: string;
};

async function resolvePdfBytes(props: PdfViewerProps): Promise<Uint8Array> {
  if (props.viewerToken?.trim()) {
    const res = await fetch(
      `/api/web/pdf-viewer/${encodeURIComponent(props.viewerToken.trim())}`,
      { credentials: "same-origin", cache: "no-store" },
    );
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(
        typeof err?.error === "string" ? err.error : `VIEWER_HTTP_${res.status}`,
      );
    }
    return new Uint8Array(await res.arrayBuffer());
  }
  if (!props.base64?.trim()) {
    throw new Error("PDF_SOURCE_MISSING");
  }
  const raw = atob(props.base64);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

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
  const renderGen = useRef(0);
  const sourceKey = props.viewerToken
    ? `token:${props.viewerToken}`
    : `b64:${props.base64?.slice(0, 64) ?? ""}`;

  useEffect(() => {
    let cancelled = false;
    const gen = ++renderGen.current;
    (async () => {
      try {
        setError(null);
        setPageCount(0);
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        // Local same-origin worker only — never a CDN. Served from /public.
        if (!pdfjs.GlobalWorkerOptions.workerSrc) {
          pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        }
        const bytes = await resolvePdfBytes(props);
        if (cancelled || gen !== renderGen.current) return;
        // In-process parse — useWorkerFetch false avoids CDN/font network from document.
        const loadingTask = pdfjs.getDocument({
          data: bytes,
          isEvalSupported: false,
          disableFontFace: false,
          useSystemFonts: true,
          useWorkerFetch: false,
        });
        const doc = await loadingTask.promise;
        if (cancelled || gen !== renderGen.current) {
          await doc.destroy();
          return;
        }
        const prev = pdfRef.current;
        pdfRef.current = { doc, destroy: () => doc.destroy() };
        void prev?.destroy();
        setPageCount(doc.numPages);
        const initial = Math.max(1, props.initialPage ?? 1);
        setPage(Math.min(initial, doc.numPages));
      } catch (e) {
        if (!cancelled && gen === renderGen.current) {
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
    // sourceKey captures token/base64 identity; initialPage applied on load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceKey]);

  useEffect(() => {
    if (props.initialPage && pageCount > 0) {
      setPage(Math.min(Math.max(1, props.initialPage), pageCount));
    }
  }, [props.initialPage, pageCount]);

  useEffect(() => {
    const cur = pdfRef.current;
    const canvas = canvasRef.current;
    if (!cur || !canvas || pageCount < 1) return;
    let cancelled = false;
    (async () => {
      try {
        const pdfPage = await cur.doc.getPage(page);
        if (cancelled) return;
        // Client render dim cap — mirrors SFIA_PDF_MAX_RENDER_PIXELS default (8MP).
        // Path cannot be secured unbounded under mandate → refuse explicitly.
        const maxRenderPixels = 8_000_000;
        let viewport = pdfPage.getViewport({ scale: zoom });
        const product = viewport.width * viewport.height;
        if (product > maxRenderPixels) {
          const factor = Math.sqrt(maxRenderPixels / product);
          viewport = pdfPage.getViewport({ scale: zoom * factor });
          if (viewport.width * viewport.height > maxRenderPixels) {
            setError("RENDER_DIMS_EXCEEDED");
            return;
          }
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const task = pdfPage.render({ canvasContext: ctx, viewport });
        await task.promise;
        if (cancelled) {
          try {
            task.cancel();
          } catch {
            /* best effort */
          }
        }
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
          aria-label="Page précédente"
        >
          Précédente
        </button>
        <span data-testid="pdf-page-indicator" aria-live="polite">
          Page {page} / {pageCount || "…"}
        </span>
        <button
          type="button"
          className="git-btn-secondary"
          disabled={pageCount > 0 && page >= pageCount}
          onClick={() => setPage((p) => Math.min(pageCount || p + 1, p + 1))}
          aria-label="Page suivante"
        >
          Suivante
        </button>
        <button
          type="button"
          className="git-btn-secondary"
          onClick={() => setZoom((z) => Math.max(0.5, Number((z - 0.25).toFixed(2))))}
          aria-label="Réduire le zoom"
        >
          −
        </button>
        <span aria-label={`Zoom ${Math.round(zoom * 100)} pour cent`}>
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          className="git-btn-secondary"
          onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
          aria-label="Augmenter le zoom"
        >
          +
        </button>
        <input
          className="border px-2 py-1 rounded"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-testid="pdf-search-input"
          aria-label="Rechercher dans le PDF"
        />
        <button
          type="button"
          className="git-btn-secondary"
          onClick={() => void runSearch()}
          aria-label="Lancer la recherche"
        >
          Chercher
        </button>
        {hitNote ? (
          <span data-testid="pdf-search-hit" role="status">
            {hitNote}
          </span>
        ) : null}
      </div>
      <div className="overflow-auto border border-neutral-200 bg-neutral-50">
        <canvas
          ref={canvasRef}
          data-testid="pdf-canvas"
          role="img"
          aria-label={
            props.title
              ? `Page ${page} du document ${props.title}`
              : `Page ${page} du PDF`
          }
        />
      </div>
    </div>
  );
}
