import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ChantierFiche } from "@/components/chantier/ChantierFiche";
import { getChantierById } from "@/lib/chantiers/queries";
import { listReservesByChantierId } from "@/lib/reserves/queries";
import { listTachesByChantierId } from "@/lib/taches/queries";
import { listComptesRendusByChantierId } from "@/lib/comptes-rendus/queries";

export const dynamic = "force-dynamic";

export default async function ChantierDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { id } = await params;
  const { tab } = await searchParams;
  const chantier = await getChantierById(id);

  if (!chantier) {
    notFound();
  }

  const [taches, reserves, comptesRendus] = await Promise.all([
    listTachesByChantierId(id),
    listReservesByChantierId(id),
    listComptesRendusByChantierId(id),
  ]);

  return (
    <AppShell activeNav="chantier">
      <ChantierFiche
        chantier={chantier}
        taches={taches}
        reserves={reserves}
        comptesRendus={comptesRendus}
        initialTab={tab}
      />
    </AppShell>
  );
}
