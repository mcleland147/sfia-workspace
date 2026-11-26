"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <main className="min-h-screen flex items-center justify-center p-8">
          <div>
            <h1 className="text-xl font-semibold">Erreur application</h1>
            <p className="mt-2 text-sm opacity-80">
              Une erreur inattendue est survenue.
            </p>
            <button
              type="button"
              className="mt-4 underline text-sm"
              onClick={() => reset()}
            >
              Réessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
