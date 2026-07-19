import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background: "var(--sfia-bg)",
        color: "var(--sfia-ink)",
        fontFamily: "var(--sfia-font)",
      }}
    >
      <h1 style={{ fontSize: "24px", margin: 0 }}>Page introuvable</h1>
      <p style={{ color: "var(--sfia-muted)", margin: 0 }}>
        Cette route n&apos;existe pas dans le périmètre P0.
      </p>
      <Link
        href="/synthese"
        style={{ color: "var(--sfia-blue)", fontWeight: 600 }}
      >
        Retour à la vue synthèse
      </Link>
    </main>
  );
}
