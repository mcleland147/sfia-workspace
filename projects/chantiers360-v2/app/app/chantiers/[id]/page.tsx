import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ChantierFiche } from "@/components/chantier/ChantierFiche";
import { getChantierById } from "@/lib/chantiers/queries";

export const dynamic = "force-dynamic";

export default async function ChantierDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chantier = await getChantierById(id);

  if (!chantier) {
    notFound();
  }

  return (
    <AppShell activeNav="chantier">
      <ChantierFiche chantier={chantier} />
    </AppShell>
  );
}
