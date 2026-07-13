import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suivi de tâches",
  description: "Application mono-utilisateur de suivi de tâches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
