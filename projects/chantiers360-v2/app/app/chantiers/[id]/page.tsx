import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ChantierFiche } from "@/components/chantier/ChantierFiche";
import { getChantierById } from "@/lib/chantiers/queries";
import { listReservesByChantierId } from "@/lib/reserves/queries";
import { listTachesByChantierId } from "@/lib/taches/queries";

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

  const [taches, reserves] = await Promise.all([
    listTachesByChantierId(id),
    listReservesByChantierId(id),
  ]);

  return (
    <AppShell activeNav="chantier">
      <ChantierFiche chantier={chantier} taches={taches} reserves={reserves} />
    </AppShell>
  );
}
